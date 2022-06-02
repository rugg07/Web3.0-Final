//for the contract to be deployed we need ethereum gas (small fractions of ethereum used to run the code)
const main = async () =>{

  //factory where class generates instances of that specific contract
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  //this is one specific instance of that contract, which then gets deployed
  const transactions = await Transactions.deploy();

  //wait until the instance gets deployed
  await transactions.deployed();

  //show where (what address) it is deployed too
  console.log("Transactions deployed to:", transactions.address);
}


const runMain = async () =>{

  try{
      await main();
      process.exit(0); //it means the process went successfuly
  } catch (error){
      console.log(error);
      process.exit(1); //means process has an error
  }
}

runMain();
  
  
/* while running this file:
    1. runMain() is executed
    2. this calls main async that deploys the contract.
*/