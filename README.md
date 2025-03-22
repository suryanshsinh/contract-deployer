# Contract Deployer

This project deploys smart contracts to the blockchain using Hardhat. The following guide explains how to set up the environment, configure the project, and execute deployments.

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- A blockchain network RPC endpoint (e.g., Sepolia)
- A wallet private key with funds for deployment

## Installation

1. Clone or download the project repository.
    ```
    git clone https://github.com/suryanshsinh/contract-deployer
    ```
2. Navigate to the project directory:
    ```
    cd contract-deployer
    ```
3. Install dependencies:
    ```
    npm install
    ```

## Configuration

### Environment Variables

1. Create an `.env` file at the project root by copying the provided `.env.example`:
    ```
    cp .env.example .env
    ```
2. Edit the `.env` file and add your configuration:
    - `RPC_ENDPOINT`: Your RPC endpoint URL (e.g., Sepolia).
    - `WALLET_PRIVATE_KEY`: Your wallet's private key.

    Example:
    ```bash
    RPC_ENDPOINT=https://ethereum-sepolia-rpc.publicnode.com
    WALLET_PRIVATE_KEY=your_private_key_here
    ```
3. Hardhat Configuration  
    The `hardhat.config.js` file is set up to use the environment variables from the `.env` file and specify the solidity version and network settings. Ensure the configuration matches your setup.
3. Initialize `hardhat`
    ```
    npx hardhat
    ```

## Setup Solidity Contract

Create or paste your Solidity Contract file (`.sol` file) in the `contracts` folder.

## Deploying a Contract

1. Prepare your contract file and compile it with Hardhat if needed. For example:
    ```
    npx hardhat compile
    ```
2. Use the `deploy.js` script to deploy your contract. The contract name will be accepted as a command-line argument. Run:
    ```
    npx hardhat run deploy.js --network sepolia ContractName
    ```
    Replace `ContractName` with the name of your contract.

3. On successful deployment, the script will log the contract address.

## Troubleshooting

- Verify your `.env` values.
- Ensure your wallet has enough funds.
- Check the network RPC endpoint.

## Additional Resources

- [Hardhat Documentation](https://hardhat.org/getting-started/)
- [Ethers.js Documentation](https://docs.ethers.org/v5/)

Until next time!