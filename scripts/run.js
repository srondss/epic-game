const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Farza", "Alec", "Youssef"],       // Names
      ["https://pbs.twimg.com/profile_images/1323391305834143745/4zqOJh66_400x400.jpg", // Images
      "https://avatars.githubusercontent.com/u/13204620?v=4", 
      "https://miro.medium.com/max/3150/1*qV3WwoeinoGSOfRSNMRAOQ.jpeg"],
      [1000, 1000, 500],                    // HP values
      [75, 150, 65],                       // Wokeness
      [100, 80, 95]                       // bidDEnergy
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
// We only have three characters.
// an NFT w/ the character at index 2 of our array.
txn = await gameContract.mintCharacterNFT(2);
await txn.wait();

// Get the value of the NFT's URI.
let returnedTokenUri = await gameContract.tokenURI(1);
console.log("Token URI:", returnedTokenUri);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();