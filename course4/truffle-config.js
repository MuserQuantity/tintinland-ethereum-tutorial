const PrivateKeyProvider = require("@truffle/hdwallet-provider");
module.exports = {
    compilers: {
        solc: {
            version: "0.8.0",
        }
    },
    networks: {
        development: {
            host: "192.168.123.46",
            port: 7545,
            network_id: "5777"
        },
        sepolia: {
            provider: () => new PrivateKeyProvider(process.env.PRIVATE_KEY, "https://sepolia.infura.io/v3/" + process.env.API_KEY),
            network_id: 11155111,
            networkCheckTimeout: 20000
        }
    }
};
