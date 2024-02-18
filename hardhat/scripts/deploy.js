// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function getBalances(address) {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return ethers.formatEther(balanceBigInt);
}

async function cosoleBalances(addresses) {
  let counter = 0;
  for (const address of addresses) {
    console.log(`Address ${address} balance:`, await getBalances(address));
    counter++;
  }
}
async function main() {
  const Car = await hre.ethers.getContractFactory("CarpoolingSystem");
  const carDeploy = await Car.deploy();
  await carDeploy.waitForDeployment();
  const [owner, driver1, user1, user2] = await hre.ethers.getSigners();
  console.log(carDeploy.target);
  console.log(owner.address);
  console.log(driver1.address);
  console.log(user1.address);
  console.log(user2.address);

  const Caraddincon = await carDeploy.addCar("3", "qwe", "we", "re", "ert", "123", "12456", "111111", "13", "kol", "des");
  await Caraddincon.wait();
  //console.log(Caraddincon);
  console.log(Caraddincon.to, "from", Caraddincon.from);
  const Caraddincon2 = await carDeploy.connect(driver1).addCar("3", "qwe", "we", "re", "ert", "1234", "12456", "111111", "13", "kol", "des");
  await Caraddincon2.wait();
  //console.log(Caraddincon);
  console.log(Caraddincon2.to, "from", Caraddincon2.from);
  //await fundingDeploy.connect(from1).sendMoney("from1", "Very nice chai", amount);
  const Useraddincon = await carDeploy.connect(user1).addUser("kol", "des", "1234567");
  await Useraddincon.wait();
  console.log(Useraddincon.to, "from", Useraddincon.from);
  const Useraddincon2 = await carDeploy.connect(user2).addUser("kol", "des", "12345");
  await Useraddincon2.wait();
  console.log(Useraddincon2.to, "from", Useraddincon2.from);

  const userCount = await carDeploy.getUserCount();
  //await userCount.wait();
  console.log(userCount);
  const carCount = await carDeploy.getCarCount();
  //await userCount.wait();
  console.log(carCount);

  
  const AvailableCarpools=await carDeploy.getAvailableCarpools("123");
  console.log(AvailableCarpools);
  const AvailableCarpoolByDest=await carDeploy.getAvailableCarByDest("koldes");
  console.log(AvailableCarpoolByDest);
  
  await carDeploy.setSelected("we");
  const selectCar = await carDeploy.getSelected("we");
  console.log(selectCar);


  const amount = { value: ethers.parseEther("2").toString() };
  const paymenttodriver = await carDeploy.connect(user1).makePayment("123", amount);
  await paymenttodriver.wait();
  console.log(paymenttodriver.to, "from", paymenttodriver.from);

  const addresses = [
    owner.address,
    driver1.address,
    user1.address,
    user2.address,
  ];
  await cosoleBalances(addresses);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
