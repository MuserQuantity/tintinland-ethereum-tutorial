const PrivateKeyProvider = require("@truffle/hdwallet-provider");
module.exports = {
  compilers: {
    solc: {
      version: "0.8.0",
    }
  },
  networks: {
    sepolia: {
      provider: () => new PrivateKeyProvider(process.env.PRIVATE_KEY, "https://sepolia.infura.io/v3/" + process.env.API_KEY),
      network_id: 11155111,
      networkCheckTimeout: 20000
    },
    mumbai: {
      provider: () => new PrivateKeyProvider(process.env.PRIVATE_KEY, "https://polygon-mumbai.infura.io/v3/" + process.env.API_KEY),
      network_id: 80001,
      networkCheckTimeout: 20000
    },
    goerli: {
      provider: () => new PrivateKeyProvider(process.env.PRIVATE_KEY, "https://goerli.infura.io/v3/" + process.env.API_KEY),
      network_id: 5,
      networkCheckTimeout: 20000
    },
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
