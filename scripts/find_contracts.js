
async function main() {
  const current_block = await web3.eth.getBlockNumber();
  const start_block = process.env.SCOPE_START_BLOCK;

  for(let block = start_block; block <= current_block; block++) {
    const block_data = await web3.eth.getBlock(block, true);
    const txs = block_data.transactions;
    console.log(txs.length);
  }

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
