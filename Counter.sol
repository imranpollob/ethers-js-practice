// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Counter {
    string public name;
    uint public count;

    constructor(string memory _name, uint _count) {
        name = _name;
        count = _count;
    }

    function increment() public returns (uint) {
        count++;
        return count;
    }

    function decrement() public returns (uint) {
        count--;
        return count;
    }

    function setName(string memory _name) public returns (string memory) {
        name = _name;
        return name;
    }
}
