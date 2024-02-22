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
  const [owner, driver1,driver2, user1, user2] = await hre.ethers.getSigners();
  console.log(carDeploy.target);
  console.log(owner.address);
  console.log(driver1.address);
  console.log(driver2.address);
  console.log(user1.address);
  console.log(user2.address);
  const addresses = [
    carDeploy.target,
    owner.address,
    driver1.address,
    driver2.address,
    user1.address,
    user2.address,
  ];
  await cosoleBalances(addresses);
  //const c=o.address;
  const Caraddincon = await carDeploy.connect(driver1).addCar(owner.address,"3", "qwe", "we", "re", "ert", "123", "111111", "13", "kol", "des");
  await Caraddincon.wait();
  //console.log(Caraddincon);
  console.log(Caraddincon.to, "from", Caraddincon.from);
  const Caraddincon2 = await carDeploy.connect(driver2).addCar(owner.address,"3", "qwe", "we", "rer", "ert", "1234", "111111", "13", "kol", "des");
  await Caraddincon2.wait();
  //console.log(Caraddincon);
  console.log(Caraddincon2.to, "from", Caraddincon2.from);
  //await fundingDeploy.connect(from1).sendMoney("from1", "Very nice chai", amount);
  const Useraddincon = await carDeploy.connect(user1).addUser("kol", "des", "1234567","rer");
  await Useraddincon.wait();
  const Useraddincon1 = await carDeploy.connect(user1).addUser("kol", "des", "1234567","re");
  await Useraddincon1.wait();

  console.log(Useraddincon.to, "from", Useraddincon.from);
  const Useraddincon2 = await carDeploy.connect(user2).addUser("kol", "des", "12345","re");
  await Useraddincon2.wait();
  console.log(Useraddincon2.to, "from", Useraddincon2.from);

  const userCount = await carDeploy.getUserCount();
  //await userCount.wait();
  console.log(userCount);
  const carCount = await carDeploy.getCarCount();
  //await userCount.wait();
  console.log(carCount);

  
  const AvailableCarpools=await carDeploy.getAvailableCarpools("re");
  console.log(AvailableCarpools);
  const AvailableCarpoolByDest=await carDeploy.getAvailableCarByDest("koldes");
  console.log(AvailableCarpoolByDest);
  const AvailableCarpoolByLicence=await carDeploy.getAvailableCarBylicenceId("123");
  console.log(AvailableCarpoolByLicence);
  const userBookedCar = await carDeploy.connect(user1).getAvailableUser("1234567");
  console.log(userBookedCar);
  
  await carDeploy.setSelected("re");
  const selectCar = await carDeploy.getSelected("re");
  console.log(selectCar);


  const amount = { value: ethers.parseEther("2").toString() };
  const paymenttodriver = await carDeploy.connect(user1).makePayment("re", amount);
  await paymenttodriver.wait();
  console.log(paymenttodriver.to, "from", paymenttodriver.from);

  
  await cosoleBalances(addresses);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
