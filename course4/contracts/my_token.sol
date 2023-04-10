// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {

    uint256 private _maxSupply;
    uint256 private _totalBurnt;
    uint256 private _transactionFeePercentage;
    uint256 private _tokensBurntPercentage;
    address private _projectFeeAddress;

    event TokensMinted(address indexed to, uint256 amount);
    event TokensBurnt(address indexed from, uint256 amount);
    event ProjectFeeAddressChanged(address indexed previousAddress, address indexed newAddress);
    event TransactionFeePercentageChanged(uint256 previousPercentage, uint256 newPercentage);
    event TokensBurntPercentageChanged(uint256 previousPercentage, uint256 newPercentage);

    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        uint256 maxSupply,
        uint256 transactionFeePercentage,
        uint256 tokensBurntPercentage,
        address projectFeeAddress
    ) ERC20(name, symbol) {
        require(initialSupply <= maxSupply, "Initial supply cannot exceed max supply");
        _maxSupply = maxSupply;
        _transactionFeePercentage = transactionFeePercentage;
        _tokensBurntPercentage = tokensBurntPercentage;
        _projectFeeAddress = projectFeeAddress;
        _mint(msg.sender, initialSupply);
    }
    // 铸币
    function mint(address to, uint256 amount) external onlyOwner {
        require(totalSupply() + amount <= _maxSupply, "Total supply cannot exceed max supply");
        _mint(to, amount);
        emit TokensMinted(to, amount);
    }
    // 销毁
    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
        _totalBurnt += amount;
        emit TokensBurnt(msg.sender, amount);
    }
    // 交易手续费百分比
    function transactionFeePercentage() external view returns (uint256) {
        return _transactionFeePercentage;
    }
    // 交易燃烧token百分比
    function tokensBurntPercentage() external view returns (uint256) {
        return _tokensBurntPercentage;
    }
    // 项目方地址
    function projectFeeAddress() external view returns (address) {
        return _projectFeeAddress;
    }
    // 更换项目方地址
    function changeProjectFeeAddress(address newAddress) external onlyOwner {
        require(newAddress != address(0), "New address cannot be zero address");
        emit ProjectFeeAddressChanged(_projectFeeAddress, newAddress);
        _projectFeeAddress = newAddress;
    }
    // 修改交易手续费百分比
    function changeTransactionFeePercentage(uint256 newPercentage) external onlyOwner {
        require(newPercentage <= 100, "Transaction fee percentage cannot exceed 100");
        emit TransactionFeePercentageChanged(_transactionFeePercentage, newPercentage);
        _transactionFeePercentage = newPercentage;
    }
    // 修改代币销毁百分比
    function changeTokensBurntPercentage(uint256 newPercentage) external onlyOwner {
        require(newPercentage <= 100, "Tokens burnt percentage cannot exceed 100");
        emit TokensBurntPercentageChanged(_tokensBurntPercentage, newPercentage);
        _tokensBurntPercentage = newPercentage;
    }
    // 转账
    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        uint256 transactionFee = (amount * _transactionFeePercentage) / 100;
        uint256 tokensBurnt = (amount * _tokensBurntPercentage) / 100;
        uint256 amountAfterFee = amount - transactionFee - tokensBurnt;

        _transfer(_msgSender(), _projectFeeAddress, transactionFee);
        _transfer(_msgSender(), to, amountAfterFee);
        if(tokensBurnt > 0){
            _burn(msg.sender, tokensBurnt);
            _totalBurnt += tokensBurnt;
            emit TokensBurnt(msg.sender, tokensBurnt);
        }

        return true;
    }

    function maxSupply() external view returns (uint256) {
        return _maxSupply;
    }

    function totalBurnt() external view returns (uint256) {
        return _totalBurnt;
    }

}