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

    const Car = await hre.ethers.getContractFactory("CarpoolingSystemFinal");
    const carDeploy = await Car.deploy();
    await carDeploy.waitForDeployment();
    const [owner, driver1, driver2, user1, user2] = await hre.ethers.getSigners();
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
    const Caraddincon = await carDeploy.connect(driver1).addCar(owner.address, "3", "qwe", "we", "re", "ert", "123", "111111", "13", "kol", "des");
    await Caraddincon.wait();
    //console.log(Caraddincon);
    console.log(Caraddincon.to, "from", Caraddincon.from);
    const Caraddincon2 = await carDeploy.connect(driver2).addCar(owner.address, "3", "qwe", "we", "rer", "ert", "1234", "111111", "13", "kol", "des");
    await Caraddincon2.wait();
    //console.log(Caraddincon);
    console.log(Caraddincon2.to, "from", Caraddincon2.from);

    const amount = { value: ethers.parseEther("2").toString() };
    const paymenttodriver = await carDeploy.connect(user1).makePayment("kol", "des", "12345","re", amount);
    await paymenttodriver.wait();
    console.log(paymenttodriver.to, "from", paymenttodriver.from);
    const paymenttodriver2 = await carDeploy.connect(user2).makePayment("kol", "des", "12345","rer", amount);
    await paymenttodriver2.wait();
    console.log(paymenttodriver2.to, "from", paymenttodriver2.from);


    const userCount = await carDeploy.getUserCount();
    //await userCount.wait();
    console.log(userCount);
    const carCount = await carDeploy.getCarCount();
    //await userCount.wait();
    console.log(carCount);


    const AvailableCarpools = await carDeploy.getAvailableCarpools("re");
    console.log(AvailableCarpools);
    const AvailableCarpoolByDest = await carDeploy.getAvailableCarByDest("koldes");
    console.log(AvailableCarpoolByDest);
    const AvailableCarpoolByLicence = await carDeploy.getAvailableCarBylicenceId("123");
    console.log(AvailableCarpoolByLicence);
    const userBookedCar = await carDeploy.connect(user1).getAvailableUser("12345");
    console.log(userBookedCar);
    const selectCar = await carDeploy.getSelected("rer");
    console.log(selectCar);


    await cosoleBalances(addresses);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
