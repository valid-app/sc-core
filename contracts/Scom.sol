// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

contract Scom is ERC20Capped {
    address public immutable minter;

    constructor(address _minter, address initSupplyTo, uint initSupply, uint256 totalSupply) ERC20("SCOM", "SCOM") ERC20Capped(totalSupply) {
        minter = _minter;
        _mint(initSupplyTo, initSupply);
    }

    function mint(address account, uint256 amount) external {
        require(msg.sender == minter, "Not from minter");
        _mint(account, amount);
    }
}