var InitializableERC20 = artifacts.require("InitializableERC20");

module.exports = function(deployer) {
  deployer.deploy(InitializableERC20,);
};
