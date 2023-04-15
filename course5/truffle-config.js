const PrivateKeyProvider = require("@truffle/hdwallet-provider");
module.exports = {
  networks: {
    development: {
      host: "192.168.123.46",
      port: 7545,
      network_id: "*",       // Any network (default: none)
    },
    sepolia: {
      provider: () => new PrivateKeyProvider(process.env.PRIVATE_KEY, "https://sepolia.infura.io/v3/" + process.env.API_KEY),
      network_id: 11155111,
      networkCheckTimeout: 20000
    },
    mumbai: {
      provider: () => new PrivateKeyProvider(process.env.PRIVATE_KEY, "https://endpoints.omniatech.io/v1/matic/mumbai/public"),
      network_id: 80001
    }
  },
  mocha: {
    // timeout: 100000
  },
  compilers: {
    solc: {
      version: "0.8.4" // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },
  plugins: [
    "@darienmh/truffle-plugin-abigen"
  ],
  abigen: {
    exportFolder: './output/',
    extensionAbi: '.json',
    generateBin: true,
    exportConsole: false
  }
};
