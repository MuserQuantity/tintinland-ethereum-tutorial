var CustomMintableERC20 = artifacts.require("CustomMintableERC20");

module.exports = function(deployer) {
  deployer.deploy(CustomMintableERC20,);
};
