const { ethers } = require("ethers");
require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(process.env.GANACHE_RPC_URL);

const wallet1 = new ethers.Wallet(process.env.GANACHE_ADDRESS1_PRIVATE_KEY, provider);

async function main() {
  const senderBalanceBefore = await provider.getBalance(process.env.GANACHE_ADDRESS1);
  console.log(`Sender balance before ${process.env.GANACHE_ADDRESS1}: ${senderBalanceBefore} Wei : ${ethers.utils.formatEther(senderBalanceBefore)} Ether`);

  const receiverBalanceBefore = await provider.getBalance(process.env.GANACHE_ADDRESS2);
  console.log(`Receiver balance before ${process.env.GANACHE_ADDRESS2}: ${receiverBalanceBefore} Wei : ${ethers.utils.formatEther(receiverBalanceBefore)} Ether`);

  console.log("Transferring 1 Ether...");

  const tx = await wallet1.sendTransaction({
    to: process.env.GANACHE_ADDRESS2,
    value: ethers.utils.parseEther("0.25")
  });
  await tx.wait()
  console.log(tx);

  const senderBalanceAfter = await provider.getBalance(process.env.GANACHE_ADDRESS1);
  console.log(`Sender balance before ${process.env.GANACHE_ADDRESS1}: ${senderBalanceAfter} Wei : ${ethers.utils.formatEther(senderBalanceAfter)} Ether`);

  const receiverBalanceAfter = await provider.getBalance(process.env.GANACHE_ADDRESS2);
  console.log(`Receiver balance before ${process.env.GANACHE_ADDRESS2}: ${receiverBalanceAfter} Wei : ${ethers.utils.formatEther(receiverBalanceAfter)} Ether`);
}

main();
