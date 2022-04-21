const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Farza", "Alec", "Youssef"],       // Names
      ["https://i.imgur.com/COyBMCk.jpeg", // Images
      "https://i.imgur.com/LAIdu6u.jpeg", 
      "https://i.imgur.com/nKHUEmH.jpg"],
      [1000, 1000, 500],                    // HP values
      [75, 150, 65],                       // Wokeness
      [100, 80, 95],                       // bidDEnergy
      "OMG its NARUTO!!", // Boss name
      "https://i.imgur.com/pmoI1bv.jpg", // Boss image
      69420, // Boss hp
      12 // Boss attack damage
    );
    
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
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