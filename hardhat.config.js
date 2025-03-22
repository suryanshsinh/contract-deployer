require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()

module.exports = {
    solidity: "0.8.20",
    networks: {
        sepolia: {
            url: process.env.RPC_ENDPOINT,
            accounts: [process.env.WALLET_PRIVATE_KEY]
        },
    },
};
