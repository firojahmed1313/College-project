const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CarpoolingSystem", function () {
    let CarpoolingSystem;
    let carpoolingSystem;
    let owner;
    let user1;

    beforeEach(async function () {
        [owner, user1] = await ethers.getSigners();
        CarpoolingSystem = await ethers.getContractFactory("CarpoolingSystem");
        carpoolingSystem = await CarpoolingSystem.deploy();
        await carpoolingSystem.waitForDeployment();
    });


    describe("Adding cars", function () {
        it("Should add a car", async function () {
            // Add a car
            await carpoolingSystem.addCar(
                user1.address,
                4,
                "Car Name",
                "Vehicle",
                "ABC123",
                "Category",
                "LicenseID",
                "1234567890",
                100,
                "From",
                "Destination"
            );

            // Check if car was added correctly
            const car = await carpoolingSystem.getAvailableCarpools("ABC123");
            expect(car.name).to.equal("Car Name");
        });
    });

    describe("Adding users", function () {
        it("Should add a user", async function () {
            // Add a user
            await carpoolingSystem.addUser(
                "From",
                "Destination",
                "1234567890",
                "ABC123"
            );

            // Check if user was added correctly
            const userCount = await carpoolingSystem.getUserCount();
            expect(userCount).to.equal(1);
        });
    });
    describe("Geting userCount", function () {
        it("Should add a user to the system", async function () {
            // Add a user
            await carpoolingSystem.addUser(
                "From",
                "Destination",
                "1234567890",
                "ABC123"
            );

            // Get the user count
            const userCount = await carpoolingSystem.getUserCount();

            // Check if the user count has increased by 1
            expect(userCount).to.equal(1);
        });
    });



    describe("Getting car counts", function () {
        it("Should return correct car count", async function () {
            // Add multiple cars
            await carpoolingSystem.addCar(
                user1.address,
                4,
                "Car Name",
                "Vehicle",
                "ABC123",
                "Category",
                "LicenseID",
                "1234567890",
                100,
                "From",
                "Destination"
            );
            await carpoolingSystem.addCar(
                user1.address,
                4,
                "Car Name 2",
                "Vehicle",
                "XYZ456",
                "Category",
                "LicenseID",
                "1234567890",
                100,
                "From",
                "Destination"
            );

            // Check if car count is correct
            const carCount = await carpoolingSystem.getCarCount();
            expect(carCount).to.equal(2);
        });
    });

    // Add more tests for other functionalities as needed...
    describe("Getting available carpools", function () {
        it("Should return available carpools by vehicle number", async function () {
            // Add a car
            await carpoolingSystem.addCar(
                user1.address,
                4,
                "Car Name",
                "Vehicle",
                "ABC123",
                "Category",
                "LicenseID",
                "1234567890",
                100,
                "From",
                "Destination"
            );

            // Get available carpools
            const car = await carpoolingSystem.getAvailableCarpools("ABC123");

            // Check if the returned car matches the added car
            expect(car.name).to.equal("Car Name");
        });
    });

    describe("Getting available cars by destination", function () {
        it("Should return available cars by destination", async function () {
            // Add a car
            await carpoolingSystem.addCar(
                user1.address,
                4,
                "Car Name",
                "Vehicle",
                "ABC123",
                "Category",
                "LicenseID",
                "1234567890",
                100,
                "From",
                "Destination"
            );

            // Get available cars by destination
            const cars = await carpoolingSystem.getAvailableCarByDest("FromDestination");

            // Check if the returned car list includes the added car
            expect(cars.length).to.equal(1);
            expect(cars[0].vehicleNo).to.equal("ABC123");
        });
    });
    describe("Getting available cars by license ID", function () {
        it("Should return available cars by license ID", async function () {
            // Add a car
            await carpoolingSystem.addCar(
                user1.address,
                4,
                "Car Name",
                "Vehicle",
                "ABC123",
                "Category",
                "LicenseID",
                "1234567890",
                100,
                "From",
                "Destination"
            );

            // Get available cars by license ID
            const cars = await carpoolingSystem.getAvailableCarBylicenceId("LicenseID");

            // Check if the returned car list includes the added car
            expect(cars.length).to.equal(1);
            expect(cars[0].vehicleNo).to.equal("ABC123");
        });
    });
    describe("Getting available users", function () {
        it("Should return available users by phone number", async function () {
            // Add a user
            await carpoolingSystem.addUser(
                "From",
                "Destination",
                "1234567890",
                "ABC123"
            );

            // Get available users by phone number
            const users = await carpoolingSystem.getAvailableUser("1234567890");

            // Check if the returned user list includes the added user
            expect(users.length).to.equal(1);
            expect(users[0].phone_no).to.equal("1234567890");
        });
    });
    describe("Setting and getting selected driver", function () {
        it("Should set and get the selected driver", async function () {
            // Set selected driver
            await carpoolingSystem.addCar(
                user1.address,
                4,
                "Car Name",
                "Vehicle",
                "ABC123",
                "Category",
                "LicenseID",
                "1234567890",
                100,
                "From",
                "Destination"
            );
            await carpoolingSystem.setSelected("ABC123");

            // Get selected driver
            const selectedDriver = await carpoolingSystem.getSelected("ABC123");

            // Check if the returned selected driver matches the set driver
            expect(selectedDriver.vehicleNo).to.equal("ABC123");
        });
    });
    describe("Making payment", function () {
        it("Should transfer funds to the car owner", async function () {
            // Add a car
            await carpoolingSystem.addCar(
                owner.address,
                4,
                "Car Name",
                "Vehicle",
                "ABC123",
                "Category",
                "LicenseID",
                "1234567890",
                100,
                "From",
                "Destination"
            );
            //const amount = { value: ethers.parseEther("2").toString() };
            // Make payment
            const ownerBalanceBefore = await ethers.provider.getBalance(user1.address);
                console.log(ethers.formatEther(ownerBalanceBefore));
            const paymenttodriver = await carpoolingSystem.connect(user1).makePayment("ABC123", { value: ethers.parseEther("2.5").toString() });
            await paymenttodriver.wait();
            console.log("User1 address:", user1.address); // Log user1 address to ensure it's defined
            console.log("owner address:", owner.address); // Log user1 address to ensure it's defined
            const { BigNumber } = ethers;

            // Check if the car owner's balance has increased by the payment amount
            
           // await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for transaction to be mined
            const ownerBalanceAfter = await ethers.provider.getBalance(user1.address);
            console.log(ethers.formatEther(ownerBalanceAfter));
            const balanceDifference = ethers.formatEther(ownerBalanceBefore)-ethers.formatEther(ownerBalanceAfter)
            expect(balanceDifference).to.be.within(2, 3); // 100 wei rent for the car

        });
    });


});
