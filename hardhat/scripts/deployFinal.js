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

    const carData={
        "carOwner": owner.address,
        "num_of_seat": "2",
        "name":"1e",
        "vehicle":"qwe",
        "vehicleNo":"123",
        "category":"qwe",
        "licence_id":"1234",
        "phoneNumber":"1235465789",
        "rent":"12",
        'from':"kol",
        'dest':"des"
    }

    const Caraddincon = await carDeploy.connect(driver1).addCar(carData.carOwner, carData.num_of_seat, carData.name, carData.vehicle, carData.vehicleNo, carData.category, carData.licence_id, carData.phoneNumber, carData.rent, carData.from, carData.dest);
    await Caraddincon.wait();
    //console.log(Caraddincon);
    console.log(Caraddincon.to, "from", Caraddincon.from);
    /*
    const Caraddincon2 = await carDeploy.connect(driver2).addCar(owner.address, "3", "qwe", "we", "rer", "ert", "123456", "111111", "13", "kol", "des");
    await Caraddincon2.wait();
    //console.log(Caraddincon);
    console.log(Caraddincon2.to, "from", Caraddincon2.from);

    const amount = { value: ethers.parseEther("2").toString() };
    const paymenttodriver = await carDeploy.connect(user1).makePayment("kol", "des", "12345","123",amount);
    await paymenttodriver.wait();
    console.log(paymenttodriver.to, "from", paymenttodriver.from);
    const paymenttodriver2 = await carDeploy.connect(user2).makePayment("kol", "des", "12345","rer",amount);
    await paymenttodriver2.wait();
    console.log(paymenttodriver2.to, "from", paymenttodriver2.from);
    const userCount = await carDeploy.getUserCount();
    //await userCount.wait();
    console.log(userCount);
    const AvailableCarpools = await carDeploy.getAvailableCarpools("rer");
    console.log("getAvailableCarpools",AvailableCarpools);
    const AvailableCarpoolByDest = await carDeploy.getAvailableCarByDest("koldes");
    console.log("getAvailableCarByDest",AvailableCarpoolByDest);
    const AvailableCarpoolByLicence = await carDeploy.getAvailableCarBylicenceId("1234");
    console.log("getAvailableCarBylicenceId",AvailableCarpoolByLicence);
    const userBookedCar = await carDeploy.connect(user1).getAvailableUser("12345");
    console.log("getAvailableUser",userBookedCar);
    const selectCar = await carDeploy.connect(driver1).getSelected("123","1234");
    console.log("getSelected",selectCar);
    const selectCar2 = await carDeploy.connect(driver2).getSelected("rer","123456");
    console.log("getSelected2",selectCar2);
    const selectBOOKCar = await carDeploy.bookedList("rer","1234");
    const selectBOOKCar2 = await carDeploy.bookedList("123","1234");
    await selectBOOKCar.wait();
    console.log(selectBOOKCar.to, "from", selectBOOKCar.from);
    const BookedCar = await carDeploy.connect(driver1).getBookedCarBylicenceId("1234");
    console.log("getBookedCarBylicenceId",BookedCar);*/
    await cosoleBalances(addresses);
    const deleteCar = await carDeploy.connect(driver1).cardeleteRecord("123");
    /*const AvailableCarpoolByDest2 = await carDeploy.getAvailableCarByDest("koldes");
    console.log( "getAvailableCarByDest",AvailableCarpoolByDest2);
    const getCar2 = await carDeploy.connect(driver2).setSelected("1234");
    const selectCar3 = await carDeploy.connect(driver2).getSelected("rer","123456");
    console.log("getSelectedlast",selectCar3);*/
    const AvailableCarpoolByLicence3 = await carDeploy.getAvailableCarBylicenceId("1234");
    console.log("getAvailableCarBylicenceId3",AvailableCarpoolByLicence3);
    const Caraddincon3 = await carDeploy.connect(driver1).addCar(carData.carOwner, carData.num_of_seat, carData.name, carData.vehicle, carData.vehicleNo, carData.category, carData.licence_id, carData.phoneNumber, carData.rent, carData.from, carData.dest);
    await Caraddincon3.wait();
    //console.log(Caraddincon);
    console.log(Caraddincon3.to, "from", Caraddincon3.from);
    const deleteCar2 = await carDeploy.connect(driver1).cardeleteRecord("123");
    const Caraddincon4 = await carDeploy.connect(driver1).addCar(carData.carOwner, carData.num_of_seat, carData.name, carData.vehicle, carData.vehicleNo, carData.category, carData.licence_id, carData.phoneNumber, carData.rent, carData.from, carData.dest);
    await Caraddincon4.wait();
    const AvailableCarpoolByLicence4 = await carDeploy.getAvailableCarBylicenceId("1234");

    console.log("getAvailableCarBylicenceId4",AvailableCarpoolByLicence4);


}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
