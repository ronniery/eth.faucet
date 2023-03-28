// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Logger.sol";

/*
 * Difference from public and external functions, both are almost equal, we can call those functions
 * outside the contract and use it, but we can't call `external` (A) function inside other (B) `external` function body
 * to make it properly work we need move from (A) `external` to (A) `public`, then we will be able to call
 * (A) function within (B) function scope.
 *
 * - external: call only outside the contract
 * - public: call inside and outside the contract
 */
contract FaucetV2 is Logger {

  /*
   * Automatic getters are created for `public` variables
   *
   * Variable types private, internal, public:
   *  - private: accessible only inside the smart contract
   *  - internal: accessible inside the smart contract and also derived smart contracts
   *  - public: accessible from everywhere
   */
  address[] public funders;

  // Owner state variable
  address public owner;

  /*
   * This method is called when you don't specify the function name to call
   * External functions are part of the contract interface which means they can be called
   * via other contracts or other transactions.
   */
  receive() external payable { }

  // That function is overriding the definition that comes from `Logger.sol` abstract contract
  function emitLog() public pure override returns(bytes32) {
    return "Hello World";
  }

  // It is called on the first time the contract is created
  constructor() {
    owner = msg.sender;
  }

  /* Modifiers are require validators, which can be attached to contract functions
   * to make the validation process more smooth and simple, reusing the validation process
   * over all function which need it.
   */
  modifier limitWithdraw(uint withdrawAmount) {
    require(
      withdrawAmount <= 1000000000000000000,
      "Cannot withdraw more than 0.1 ether"
    );

    // This underscore points to the rest of the code which this modifier is attached to
    _;
  }

  /*
   * We can call this function from console, using web3 instance and from JSON RPC method call
   */
  function addFunds() external payable {
    funders.push(msg.sender);
  }

  /*
   * We have two kind of read-only call, which means no gas function:
   *   view - it indicates that the function will not alter the storage state in any way
   *   pure - even more strict, indicating that it won't even read storage state
   */
  function getAllFunders() public view returns (address[] memory) {
    return funders;
  }

  function getFunderAt(uint8 funderIndex) external view returns (address) {
    address[] memory _funder = getAllFunders();
    return _funder[funderIndex];
  }

  // Another way to use the `require` validation while we are reusing it ↴
  function withdraw(uint withdrawAmount) external limitWithdraw(withdrawAmount) {
    // Require a condition to be true, if it is not `true` an exception will be thrown and the code interrupted
    // require(withdrawAmount <= 1000000000000000000, "Cannot withdraw more than 0.1 ether");

    payable(msg.sender).transfer(withdrawAmount);
  }

  /* function demo() external pure returns (string memory output) {
    string memory _nothing = "This is a demo";

    // We can run `assembly` code inside our smartcontracts, ordinary contracts will not need it
    // but we can use it for complex situations.
    assembly {
      output := mload(0x90)
    }
  }*/
}