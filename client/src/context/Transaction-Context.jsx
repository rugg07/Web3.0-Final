//we make this the central part from where our codes would be used all over in the application instead of writing seperately in each component

import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

//since we are using metamask we have access to the ethereum object
//instead of doing window.ethereum we destructure by code below.
const { ethereum } = window;

//fetch our ethereum contract
//ethers is package we installed previously
const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  
    const [currentAccount, setCurrentAccount] = useState('');
    const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
    const [transactions, setTransactions] = useState([]);

    const handleChange = (e, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
      };
  

  const getAllTransactions = async () => {
    try{
      const transactionContract = getEthereumContract();

        const availableTransactions = await transactionContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map((transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: parseInt(transaction.amount._hex) / (10 ** 18)
        }));

        console.log(structuredTransactions);

        setTransactions(structuredTransactions);
    } catch(error){
console.log(error);
    }
    /*try {
      if (ethereum) {
        const transactionContract = getEthereumContract();

        const availableTransactions = await transactionContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map((transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: parseInt(transaction.amount._hex) / (10 ** 18)
        }));

        console.log(structuredTransactions);

        setTransactions(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }*/
  };

  const checkIfWalletIsConnected = async () => {
    try {
        if (!ethereum) return alert("Please install MetaMask.");

       const accounts = await ethereum.request({ method: "eth_accounts" });

       if (accounts.length) {
        setCurrentAccount(accounts[0]);

        getAllTransactions();
       } 
      
       else {
        console.log("No accounts found");
       }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  const checkIfTransactionsExists = async () => {
    try {
        const transactionContract = getEthereumContract();
        const transactionCount = await transactionContract.getTransactionCount();

        window.localStorage.setItem("transactionCount", transactionCount);
      
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  //keep a try and catch block to make sure this succeeds
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      setCurrentAccount(accounts[0]); //connect the first account
      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object.");
    }
  };

  const sendTransaction = async () => {
    try {
        if (!ethereum) return alert("Please install MetaMask.");

        const { addressTo, amount, keyword, message } = formData;
        const transactionContract = getEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [{
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: parsedAmount._hex,
          }],
        });

        //calls addToBlockchain function to store the transaction
        const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);
        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading(false);

        const transactionCount = await transactionContract.getTransactionCount();

        setTransactionCount(transactionCount.toNumber());
        window.location.reload(); 
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  //happens only the loading stage (begining) of our application
  useEffect(() => {
    checkIfWalletIsConnected();
    checkIfTransactionsExists();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction, transactions, isLoading
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};