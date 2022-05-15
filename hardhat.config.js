require("@nomiclabs/hardhat-web3");
require('dotenv').config();
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const MAINNET_NODE = process.env.MAINNET_NODE;
const SCOPE_END_BLOCK = Number(process.env.SCOPE_END_BLOCK);

module.exports = {
  solidity: "0.8.4",

  networks: {
    hardhat: {
      forking: {
        url: MAINNET_NODE || "", // mainnet-fork
        blockNumber: SCOPE_END_BLOCK || 0
      }
    }
  },
};
