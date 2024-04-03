const hre = require("hardhat");
async function main() {

    const Car = await hre.ethers.getContractFactory("CarpoolingSystemFinal");
    const carDeploy = await Car.deploy();
    await carDeploy.waitForDeployment();
    console.log(carDeploy.target); //0xf3032DfB35D0a88FF9e9a03a5593Ffe26ED1c94d //0x54d6CA2FB7b2b629cb98B09D51A8EA6bB2e9297c //0xE7c6bA663f97EbBa3EDCA696501Ee97741516358

}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
