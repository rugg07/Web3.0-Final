//https://eth-ropsten.alchemyapi.io/v2/Tb8pBTah6H3tNCWPjPOJO4HXILjoMtSS

//hardhat-waffle is plugin to build smart contract tests
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Tb8pBTah6H3tNCWPjPOJO4HXILjoMtSS',
      accounts: ['94567df69d8f2230ae2c897247f34b83997f9cf836e6f7c7d00ce1b1caa610f2'],
    },
  },
};