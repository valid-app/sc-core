// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.13;

import "./Authorization.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract DomainInfo is Authorization, ReentrancyGuard {
    using SafeERC20 for IERC20;

    IERC20 public immutable token;

    mapping(address => mapping(string => string)) public domainModule; // domainModule[owner][domainName] = module IPFS CID
    mapping(address => mapping(string => uint8)) public domainType; // domainType[owner][domainName] = domain type
    mapping(address => mapping(string => uint256)) public balanceOf; //balanceOf[owner][domainName] = amount
    mapping(address => mapping(string => mapping(address => uint256))) public allowances; //allowances[owner][domainName][spender] = amount

    event UpdateDomainInfo(address indexed owner, string domainName, uint8 domainType, string module);
    event UpdateDomainModule(address indexed owner, string domainName, string module);
    event Deposit(address indexed owner, string domainName, uint256 amount, uint256 newBalance);
    event Withdraw(address indexed owner, string domainName, uint256 amount, uint256 newBalance);
    event Spend(address indexed sender, address indexed owner, string domainName, address indexed spender, uint256 amount, uint256 newBalance);
    event Approval(address indexed owner, string domainName, address indexed spender, uint256 value);

    constructor(IERC20 _token) {
        token = _token;
    }

    function updateDomainInfo(string calldata domainName, uint8 moduleType, string calldata module) external {
        domainModule[msg.sender][domainName] = module;
        domainType[msg.sender][domainName] = moduleType;
        emit UpdateDomainInfo(msg.sender, domainName, moduleType, module);
    }

    function updateDomainModule(string calldata domainName, string calldata module) external {
        domainModule[msg.sender][domainName] = module;        
        emit UpdateDomainModule(msg.sender, domainName, module);
    }

    function getDomainInfo(address owner, string calldata domainName) external view returns (uint8 moduleType, string memory module) {
        moduleType = domainType[owner][domainName];
        module = domainModule[owner][domainName];
    }

    function deposit(string calldata domainName, uint256 amount) external nonReentrant {
        require(amount > 0, "amount = 0");
        amount = _transferTokenFrom(amount);
        uint256 newBalance = balanceOf[msg.sender][domainName] + amount;
        balanceOf[msg.sender][domainName] = newBalance;
        emit Deposit(msg.sender, domainName, amount, newBalance);
    }

    function withdraw(string calldata domainName, uint256 amount) external nonReentrant {
        require(amount > 0, "amount = 0");
        uint256 newBalance = balanceOf[msg.sender][domainName] - amount;
        balanceOf[msg.sender][domainName] = newBalance;
        token.safeTransfer(msg.sender, amount);
        emit Withdraw(msg.sender, domainName, amount, newBalance);
    }

    function increaseAllowance(
        address spender, 
        string calldata domainName, 
        uint256 addedValue
    ) external {
        uint256 currentAllowance = allowances[owner][domainName][spender];
        _approve(msg.sender, domainName, spender, currentAllowance + addedValue);
    }

    function decreaseAllowance(
        address spender, 
        string calldata domainName, 
        uint256 subtractedValue
    ) external {
        uint256 currentAllowance = allowances[owner][domainName][spender];
        _approve(msg.sender, domainName, spender, currentAllowance - subtractedValue);
    }

    function spend(
        address owner, 
        string calldata domainName, 
        address destination,
        uint256 amount
    ) external nonReentrant {
        require(amount > 0, "amount = 0");
        require(destination != address(0), "transfer to zero address");
        uint256 currentAllowance = allowances[owner][domainName][destination];
        require(currentAllowance >= amount, "insufficient allowance");
        uint256 newBalance = balanceOf[owner][domainName] - amount;
        balanceOf[owner][domainName] = newBalance;
        _approve(owner, domainName, destination, currentAllowance - amount);
        token.safeTransfer(destination, amount);
        emit Spend(msg.sender, owner, domainName, destination, amount, newBalance);
    }

    function _approve(
        address owner,
        string calldata domainName, 
        address spender,
        uint256 amount
    ) internal {
        require(owner != address(0), "approve from the zero address");
        require(spender != address(0), "approve to the zero address");

        allowances[owner][domainName][spender] = amount;
        emit Approval(owner, domainName, spender, amount);
    }

    function _transferTokenFrom(uint amount) internal returns (uint256 balance) {
        balance = token.balanceOf(address(this));
        token.safeTransferFrom(msg.sender, address(this), amount);
        balance = token.balanceOf(address(this)) - balance;
    }
}