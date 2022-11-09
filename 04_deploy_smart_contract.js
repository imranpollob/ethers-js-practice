const ethers = require("ethers");
const fs = require("fs");
require("dotenv").config();

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.GANACHE_RPC_URL);
  const wallet = new ethers.Wallet(process.env.GANACHE_ADDRESS1_PRIVATE_KEY, provider);

  const abi = fs.readFileSync("./Counter_sol_Counter.abi", "utf-8");
  const binary = fs.readFileSync("./Counter_sol_Counter.bin", "utf-8");

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet)
  console.log("Deploying...");
  const contract = await contractFactory.deploy("My Counter App", 5);
  await contract.deployTransaction.wait(1);
  console.log(`Contract deployed to ${contract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
