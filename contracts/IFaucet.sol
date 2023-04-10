// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// All declared functions must be external;
interface IFaucet {
  function addFunds() external payable;
  function withdraw(uint withdrawAmount) external;
}