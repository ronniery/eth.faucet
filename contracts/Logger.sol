// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

abstract contract Logger {
  // That function MUST be implemented by any other contract which inherits from `Logger` contract
  function emitLog() public pure virtual returns(bytes32);
}