var MyToken = artifacts.require("MyToken");

// 初始化
contract("MyToken",(accounts)=>{
    it('初始参数为："test","t",10000,1000000,1,2,"accounts[0]"',async()=>{
        const myTokenInstance = await MyToken.deployed();
        const tokenName = await myTokenInstance.name.call();
        const tokenSymbol = await myTokenInstance.symbol.call();
        const maxSupply = await myTokenInstance.maxSupply.call();
        const totalSupply = await myTokenInstance.totalSupply.call();
        const transactionFeePercentage = await myTokenInstance.transactionFeePercentage.call();
        const tokensBurntPercentage = await myTokenInstance.tokensBurntPercentage.call();
        const projectFeeAddress = await myTokenInstance.projectFeeAddress.call();
        assert.equal("test",tokenName,"");
        assert.equal("t",tokenSymbol,"");
        assert.equal(1000000,maxSupply.toNumber(),"");
        // assert.equal(50000,totalSupply.toNumber(),"");
        assert.equal(1,transactionFeePercentage.toNumber(),"");
        assert.equal(2,tokensBurntPercentage.toNumber(),"");
        assert.equal(accounts[0],projectFeeAddress,"");
    });
});
// 增发代币
contract("MyToken",(accounts)=>{
    it("给accounts[0]增发10000代币",async()=>{
        const myTokenInstance = await MyToken.deployed();
        const balancePrev = await myTokenInstance.balanceOf(accounts[0]);
        await myTokenInstance.mint(accounts[0],10000);
        const balanceNow = await myTokenInstance.balanceOf(accounts[0]);
        assert.equal(10000,balanceNow.toNumber()-balancePrev.toNumber(),"accounts[0]增发前后余额差不为10000");
    });
});
// 销毁代币
contract("MyToken",(accounts)=>{
    it("销毁accounts[0]10000代币",async()=>{
        const myTokenInstance = await MyToken.deployed();
        const balancePrev = await myTokenInstance.balanceOf(accounts[0]);
        await myTokenInstance.burn(10000,{from:accounts[0]});
        const balanceNow = await myTokenInstance.balanceOf(accounts[0]);
        assert.equal(10000,balancePrev.toNumber()-balanceNow.toNumber(),"accounts[0]销毁前后余额差不为10000");
    });
});
// 交易手续费发送至项目方设置的地址
contract("MyToken",(accounts)=>{
    it("给accounts[1]增发10000代币，accounts[1]转给accounts[2]10000代币，其中1%为交易手续费，发送至设置的地址accounts[0]",async()=>{
        const myTokenInstance = await MyToken.deployed();
        await myTokenInstance.mint(accounts[1],10000);
        const balancePrev = await myTokenInstance.balanceOf(accounts[0]);
        await myTokenInstance.transfer(accounts[2],10000,{from:accounts[1]});
        const balanceNow = await myTokenInstance.balanceOf(accounts[0]);
        assert.equal(100,balanceNow.toNumber()-balancePrev.toNumber(),"收取的手续费不为10000*1%=100");
    });
});
// 交易时销毁部分代币
contract("MyToken",(accounts)=>{
    it("给accounts[1]增发10000代币，accounts[1]转给accounts[2]10000代币，其中2%代币被销毁",async()=>{
        const myTokenInstance = await MyToken.deployed();
        await myTokenInstance.mint(accounts[1],10000);
        const totalBurntPrev = await myTokenInstance.totalBurnt.call();
        await myTokenInstance.transfer(accounts[2],10000,{from:accounts[1]});
        const totalBurntNow = await myTokenInstance.totalBurnt.call();
        assert.equal(200,totalBurntNow.toNumber()-totalBurntPrev.toNumber(),"销毁的代币不为10000*2%=200");
    });
});