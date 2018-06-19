pragma solidity 0.4.24;

contract Prueba{
    
    address owner;
    bool boolState;
    
    event ChangeState(bool v);

    constructor () public {
        boolState = false;
        owner = msg.sender;
    }

    function soloCall() public view returns (bool){
        return boolState;
    }
    
    function changeBoolState(bool _newVal) public returns (bool){
        require(msg.sender == owner);
        boolState = _newVal;
        emit ChangeState(_newVal);
        return true;
    }
    
}


