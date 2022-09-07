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

    IERC20 public immutable token;
    uint256 public auditorIdCount;

    mapping(uint256 => AuditorData) public auditorsData; //auditorsData[auditorId] = AuditorData
    mapping(address => uint256) public auditorIds; //auditorIds[address] = id
    mapping(uint256 => uint256) public auditorBalance; //auditorBalance[auditorId] = amount

    event AddAuditor(address indexed auditor);
    event RemoveAuditor(address indexed auditor);
    event StakeBond(address indexed sender, uint256 amount, uint256 newBalance);
    event UnstakeBond(address indexed sender, uint256 amount, uint256 newBalance);

    constructor(IERC20 _token) {
        token = _token;
    }

    modifier onlyAuditor {
        uint256 auditorId = auditorIds[msg.sender];
        require(auditorId > 0 && auditorsData[auditorId].status == AuditorStatus.Active, "not from auditor");
        _;
    }

    function isAuditor(address account) external returns (bool) {
        uint256 auditorId = auditorIds[account];
        return auditorId > 0 && auditorsData[auditorId].status == AuditorStatus.Active;
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

    function removeAuditor(address auditor) external onlyOwner {
        uint256 auditorId = auditorIds[auditor];
        AuditorData storage auditorData = auditorsData[auditorId];
        require(auditorId > 0 && auditorData.status == AuditorStatus.Active, "auditor not exist");
        auditorData.status = AuditorStatus.Inactive;
        emit RemoveAuditor(auditor);
    }

    function stakeBond(uint256 amount) external onlyAuditor nonReentrant {
        require(amount > 0, "amount = 0");
        amount = _transferTokenFrom(amount);
        uint256 auditorId = auditorIds[msg.sender];
        uint256 newBalance = auditorBalance[auditorId] + amount;
        auditorBalance[auditorId] = newBalance;
        emit StakeBond(msg.sender, amount, newBalance);
    }

    function unstakeBond(uint256 amount) external onlyAuditor nonReentrant {
        require(amount > 0, "amount = 0");
        uint256 auditorId = auditorIds[msg.sender];
        uint256 newBalance = auditorBalance[auditorId] - amount;
        auditorBalance[auditorId] = newBalance;
        token.safeTransfer(msg.sender, amount);
        emit UnstakeBond(msg.sender, amount, newBalance);
    }

    function _transferTokenFrom(uint amount) internal returns (uint256 balance) {
        balance = token.balanceOf(address(this));
        token.safeTransferFrom(msg.sender, address(this), amount);
        balance = token.balanceOf(address(this)) - balance;
    }
}