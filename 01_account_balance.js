const { ethers } = require("ethers");
require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_RPC_URL_GOERLI);

async function main() {
  const balance = await provider.getBalance(process.env.ADDRESS1);
  console.log(`Balance of ${process.env.ADDRESS1}: ${balance} Wei : ${ethers.utils.formatEther(balance)} Ether`);
}

main();
