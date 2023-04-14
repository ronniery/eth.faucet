// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Owned.sol";
import "./Logger.sol";
import "./IFaucet.sol";

contract Faucet is Owned, Logger, IFaucet {

  uint public totalOfFunders;

  mapping(address => bool) private funders;
  mapping(uint => address) private lutFunders;

  modifier limitWithdraw(uint withdrawAmount) {
    require(
      withdrawAmount <= 100000000000000000,
      "Cannot withdraw more than 0.1 ether"
    );

    _;
  }

  receive() external payable { }

  function emitLog() public pure override returns(bytes32) {
    return "Hello World";
  }

  function addFunds() external override payable {
    address funder = msg.sender;

    if(!funders[funder]) {
      uint index = totalOfFunders++;
      funders[funder] = true;
      lutFunders[index] = funder;
    }
  }

  function withdraw(uint withdrawAmount) override external limitWithdraw(withdrawAmount) {
    payable(msg.sender).transfer(withdrawAmount);
  }

  function getAllFunders() external view returns (address[] memory) {
    address[] memory _funders = new address[](totalOfFunders);

    for (uint i = 0; i < totalOfFunders; i++) {
      _funders[i] = lutFunders[i];
    }

    return _funders;
  }

  function getFunderAt(uint8 funderIndex) external view returns (address) {
    return lutFunders[funderIndex];
  }
}