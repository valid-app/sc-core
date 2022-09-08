// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.13;

import "./Authorization.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract AuditorInfo is Authorization, ReentrancyGuard {
    using SafeERC20 for IERC20;

    enum AuditorStatus {Active, Inactive}
    struct AuditorData {
        address auditor;
        AuditorStatus status;
    }
    struct WithdrawRequest {
        uint256 amount;
        uint256 releaseTime;
    }

    IERC20 public immutable token;
    uint256 public auditorIdCount;
    uint256 public cooldownPeriod;
    uint256 public constant MAX_COOLDOWN_PERIOD = 604800; // 1 week

    mapping(uint256 => AuditorData) public auditorsData; //auditorsData[auditorId] = AuditorData
    mapping(address => uint256) public auditorIds; //auditorIds[address] = id
    mapping(uint256 => uint256) public auditorBalance; //auditorBalance[auditorId] = amount
    mapping(uint256 => WithdrawRequest) public pendingWithdrawal; //pendingWithdrawal[auditorId] = WithdrawRequest

    event AddAuditor(address indexed auditor);
    event DisableAuditor(address indexed auditor);
    event SetCooldownPeriod(uint256 cooldownPeriod);
    event StakeBond(address indexed sender, uint256 amount, uint256 newBalance);
    event UnstakeBondRequest(address indexed sender, uint256 amount, uint256 newBalance);
    event WithdrawBond(address indexed sender, uint256 amount);

    constructor(IERC20 _token, uint256 _cooldownPeriod) {
        token = _token;
        cooldownPeriod = _cooldownPeriod;
    }

    modifier onlyActiveAuditor {
        uint256 auditorId = auditorIds[msg.sender];
        require(auditorId > 0 && auditorsData[auditorId].status == AuditorStatus.Active, "not from active auditor");
        _;
    }

    function isActiveAuditor(address account) external view returns (bool) {
        uint256 auditorId = auditorIds[account];
        return auditorId > 0 && auditorsData[auditorId].status == AuditorStatus.Active;
    }

    function getAuditors(uint256 auditorIdStart, uint256 length) 
        external 
        view
        returns (
            AuditorData[] memory auditors
        ) 
    {
        if (auditorIdStart + length > auditorIdCount + 1) {
            length = auditorIdCount - auditorIdStart + 1;
        }
        auditors = new AuditorData[](length);
        for (uint256 i; i < length; i++) {
            auditors[i] = auditorsData[auditorIdStart];
            auditorIdStart++;
        }
    }

    function addAuditor(address auditor) external onlyOwner {
        uint256 auditorId = auditorIds[auditor];
        if (auditorId == 0) {
            auditorId = ++auditorIdCount;
            auditorsData[auditorId] = AuditorData({
                auditor: auditor,
                status: AuditorStatus.Active
            });
            auditorIds[auditor] = auditorId;
        }
        else {
            AuditorData storage auditorData = auditorsData[auditorId];
            require(auditorData.status == AuditorStatus.Inactive, "auditor already exists");
            auditorData.status = AuditorStatus.Active;
        }
        emit AddAuditor(auditor);
    }

    function disableAuditor(address auditor) external onlyOwner {
        uint256 auditorId = auditorIds[auditor];
        require(auditorId > 0, "auditor not exist");
        AuditorData storage auditorData = auditorsData[auditorId];
        require(auditorData.status == AuditorStatus.Active, "auditor already disabled");
        auditorData.status = AuditorStatus.Inactive;
        emit DisableAuditor(auditor);
    }

    function setCooldownPeriod(uint256 _cooldownPeriod) external onlyOwner {
        require(_cooldownPeriod <= MAX_COOLDOWN_PERIOD, "Max cooldown period > 1 week!");
        cooldownPeriod = _cooldownPeriod;
        emit SetCooldownPeriod(cooldownPeriod);
    }

    function stakeBond(uint256 amount) external onlyActiveAuditor nonReentrant {
        require(amount > 0, "amount = 0");
        amount = _transferTokenFrom(amount);
        uint256 auditorId = auditorIds[msg.sender];
        uint256 newBalance = auditorBalance[auditorId] + amount;
        auditorBalance[auditorId] = newBalance;
        emit StakeBond(msg.sender, amount, newBalance);
    }

    function unstakeBondRequest(uint256 amount) external onlyActiveAuditor nonReentrant {
        require(amount > 0, "amount = 0");
        uint256 auditorId = auditorIds[msg.sender];
        uint256 newBalance = auditorBalance[auditorId] - amount;
        auditorBalance[auditorId] = newBalance;
        if (cooldownPeriod == 0) {
            token.safeTransfer(msg.sender, amount);
            emit WithdrawBond(msg.sender, amount);
        }
        else {
            WithdrawRequest storage request = pendingWithdrawal[auditorId];
            request.amount += amount;
            request.releaseTime = block.timestamp + cooldownPeriod;
        }
        emit UnstakeBondRequest(msg.sender, amount, newBalance);
    }

    function withdrawBond() external onlyActiveAuditor nonReentrant {
        uint256 auditorId = auditorIds[msg.sender];
        WithdrawRequest storage withdrawRequest = pendingWithdrawal[auditorId];
        require(block.timestamp >= withdrawRequest.releaseTime, "please wait");
        uint256 amount = withdrawRequest.amount;
        delete pendingWithdrawal[auditorId];
        token.safeTransfer(msg.sender, amount);
        emit WithdrawBond(msg.sender, amount);
    }

    function _transferTokenFrom(uint amount) internal returns (uint256 balance) {
        balance = token.balanceOf(address(this));
        token.safeTransferFrom(msg.sender, address(this), amount);
        balance = token.balanceOf(address(this)) - balance;
    }
}