// SPDX-License-Identifier: UNLICENSED

//the solidity version
pragma solidity ^0.8.0;

contract Transactions {
    //uint is var type for numbers like normal int
    uint256 transactionCount;

    //address is the type and from becomes the name
    event Transfer(
        address from,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    //we can define array of different transaction because we want to store all of them
    TransferStruct[] transactions; //array of transactions (objects)

    //since it is in a class we need to specify its visibility (as its public everybody can access this function)
    //string memory message means the data thats been stored in the memory of that address
    function addToBlockchain(
        address payable receiver,
        uint256 amount,
        string memory message,
        string memory keyword
    ) public {
        transactionCount += 1; //theres one more transaction now than there was before

        //stores all the transactions that comes through it
        //we need to push our transaction into the array of transactions
        transactions.push(
            TransferStruct(
                msg.sender,
                receiver,
                amount,
                message,
                block.timestamp,
                keyword
            )
        ); //block.timestamp means the timestamp of the specific block being executed

        //we do emit to actually make the transfer of transaction block
        emit Transfer(
            msg.sender,
            receiver,
            amount,
            message,
            block.timestamp,
            keyword
        );
    }

    //public function but it returns the the array of transactions from memory
    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transactions;
    }

    //public function but returning the number of transactions made
    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
