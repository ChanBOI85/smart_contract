// https://eth-rinkeby.alchemyapi.io/v2/UoZkuDMS8nQx7bc3G5Yf7OYFZ1FsGQfe

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/UoZkuDMS8nQx7bc3G5Yf7OYFZ1FsGQfe',
      accounts: [ '6a2d6e33244e4e9ea75883a1a9a66e8f82a18c36bc52091d26930cca001d7942' ]
    }
  }
}