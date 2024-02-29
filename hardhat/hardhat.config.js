require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const URL = "https://eth-sepolia.g.alchemy.com/v2/HkVXkJCuxwD_PqTh8EprxU5xPOZK7Qoz";
const URL_FINAL="https://eth-sepolia.g.alchemy.com/v2/_gfNsJij5S1mdCnQYDVakp6YGokTCb8D";
const PRIVATE_KEY = "9c77adff925b44b87fa38f297cfbdb19798da6bf1b0c0292f83caf668b92b15c";
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: URL_FINAL,
      accounts: [PRIVATE_KEY],
    },
  },
};
