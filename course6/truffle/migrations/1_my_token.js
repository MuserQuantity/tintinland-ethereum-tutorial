var MyToken = artifacts.require("MyToken");

module.exports = function(deployer) {
  deployer.deploy(MyToken,"test","t",10000,1000000,1,2,"0x9977827Bd32F1537ACcA1cA2896f0B65f7a83d55");
};
