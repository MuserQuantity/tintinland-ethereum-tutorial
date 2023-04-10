var MyToken = artifacts.require("MyToken");

module.exports = function(deployer) {
  deployer.deploy(MyToken,"test","t",10000,1000000,1,2,"0xD0B19a3f774AD0e8fFbDDea83DA4c09f09b4c0F2");
};
