const hre = require("hardhat");

async function main() {
    const contractName = process.argv.slice(2);
    const TransactionStorage = await hre.ethers.getContractFactory(contractName);
    const contract = await TransactionStorage.deploy();
    await contract.deploymentTransaction();
    console.log("Contract deployed at:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
