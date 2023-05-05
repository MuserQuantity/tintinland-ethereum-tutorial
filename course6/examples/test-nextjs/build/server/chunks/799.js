"use strict";
exports.id = 799;
exports.ids = [799];
exports.modules = {

/***/ 4799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dapp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/@web3uikit/core/dist/index.js
var dist = __webpack_require__(5372);
;// CONCATENATED MODULE: ../../truffle/output/abi/MyToken.json
const MyToken_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"initialSupply","type":"uint256"},{"internalType":"uint256","name":"maxSupply","type":"uint256"},{"internalType":"uint256","name":"transactionFeePercentage","type":"uint256"},{"internalType":"uint256","name":"tokensBurntPercentage","type":"uint256"},{"internalType":"address","name":"projectFeeAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousAddress","type":"address"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"ProjectFeeAddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensBurnt","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"previousPercentage","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newPercentage","type":"uint256"}],"name":"TokensBurntPercentageChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"previousPercentage","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newPercentage","type":"uint256"}],"name":"TransactionFeePercentageChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transactionFeePercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"tokensBurntPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"projectFeeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"changeProjectFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPercentage","type":"uint256"}],"name":"changeTransactionFeePercentage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPercentage","type":"uint256"}],"name":"changeTokensBurntPercentage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalBurnt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true}]');
// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__(8519);
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_);
;// CONCATENATED MODULE: ./pages/app.tsx



// import { ethers } from 'ethers';

// import { Web3Provider } from '@ethersproject/providers';
// 1. 配置连接信息
// const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/<your-project-id>');
// const signer = new ethers.Wallet('<your-private-key>', provider);
// 2. 获取合约实例
const contractAddress = "0x9437464116B3E2D3b918095d63983861c471EC59";
const contractABI = MyToken_namespaceObject;
let web3;
// console.log(typeof(contractABI));
// 3. 调用合约方法
async function mint(_address, _amount) {
    // 检查MetaMask是否安装
    if (window.ethereum) {
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        let web3 = new (external_web3_default())(window.ethereum);
        // let web3: Web3 = (window as any).ethereum;
        // console.log(web3);
        // web3 = new Web3(web3);
        let accounts = await web3.eth.getAccounts();
        console.log(accounts);
        let sender = accounts[0];
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        let gas;
        await contract.methods.mint(_address, _amount).estimateGas({
            from: sender
        }, function(error, gasAmount) {
            if (error) {
                alert(error.message);
            } else {
                gas = gasAmount;
            }
        });
        const tx = contract.methods.mint(_address, _amount);
        await tx.send({
            from: sender,
            gasPrice: 20000000000
        }, function(error, txhash) {
            if (error) {
                alert(error.message);
            } else {
                alert("成功！");
            }
        }).then((tx)=>{
            console.log(tx);
            if (tx) {
                const a = document.getElementById("mintTx");
                const txHash = tx.transactionHash;
                console.log(tx);
                if (a != null && a instanceof HTMLAnchorElement) {
                    a.href = "https://sepolia.etherscan.io/tx/" + txHash;
                    a.textContent = "交易地址：" + txHash;
                }
            }
        // console.log(result);
        // location.reload();
        }).catch((err)=>{
            console.log(err);
            location.reload();
        });
    } else {
        console.log("请安装MetaMask!");
        alert("请安装MetaMask!");
    }
}
async function burn(_amount) {
    // 检查MetaMask是否安装
    if (window.ethereum) {
        web3 = new (external_web3_default())(window.ethereum);
        let accounts = await web3.eth.getAccounts();
        console.log(accounts);
        let sender = accounts[0];
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        let gas;
        await contract.methods.burn(_amount).estimateGas({
            from: sender
        }, function(error, gasAmount) {
            if (error) {
                alert(error.message);
            } else {
                gas = gasAmount;
            }
        });
        const tx = contract.methods.burn(_amount);
        await tx.send({
            from: sender,
            gasPrice: 20000000000
        }, function(error, txhash) {
            if (error) {
                alert(error.message);
            } else {
                alert("成功！");
            }
        }).then((tx)=>{
            console.log(tx);
            if (tx) {
                const a = document.getElementById("burnTx");
                const txHash = tx.transactionHash;
                console.log(tx);
                if (a != null && a instanceof HTMLAnchorElement) {
                    a.href = "https://sepolia.etherscan.io/tx/" + txHash;
                    a.textContent = "交易地址：" + txHash;
                }
            }
        // console.log(result);
        // location.reload();
        }).catch((err)=>{
            console.log(err);
            location.reload();
        });
    } else {
        console.log("请安装MetaMask!");
        alert("请安装MetaMask!");
    }
}
// console.log(abi);
const SpacerW = ({ width  })=>/*#__PURE__*/ _jsx("div", {
        style: {
            width
        }
    });
const SpacerH = ({ height  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            height
        }
    });
function Dapp() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SpacerH, {
                height: 20
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    margin: "auto",
                    width: "50%"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://sepolia.etherscan.io/tx/0x66ba693ada9bc2976a718be2e63b482826760d81586447a714c94c15fdc70dd5",
                            children: "合约：0x9437464116B3E2D3b918095d63983861c471EC59"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SpacerH, {
                        height: 20
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist.a0, {
                        defaultActiveKey: 1,
                        onChange: function noRefCheck() {},
                        tabStyle: "bulbUnion",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist.a1, {
                                tabKey: 1,
                                tabName: "增发",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "",
                                            id: "mintTx"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(dist.F, {
                                            id: "mintForm",
                                            buttonConfig: {
                                                onClick: async function noRefCheck(e) {
                                                    console.log(e);
                                                },
                                                theme: "primary",
                                                text: "增发",
                                                id: "mintButton"
                                            },
                                            data: [
                                                {
                                                    inputWidth: "100%",
                                                    name: "增发地址",
                                                    type: "text",
                                                    validation: {
                                                        characterMaxLength: 42,
                                                        required: true
                                                    },
                                                    value: ""
                                                },
                                                {
                                                    name: "增发数量",
                                                    type: "number",
                                                    validation: {
                                                        characterMaxLength: 23,
                                                        numberMax: 10000000000000000000000,
                                                        numberMin: 1,
                                                        required: true
                                                    },
                                                    value: "1"
                                                }
                                            ],
                                            onSubmit: async function noRefCheck(from) {
                                                let address = from.data[0].inputResult;
                                                let amount = Number(from.data[1].inputResult);
                                                await mint(address, amount);
                                            },
                                            title: "增发代币"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist.a1, {
                                tabKey: 2,
                                tabName: "销毁",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "",
                                            id: "burnTx"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(dist.F, {
                                            id: "burnForm",
                                            buttonConfig: {
                                                onClick: function noRefCheck(e) {
                                                    console.log(e);
                                                },
                                                theme: "primary",
                                                text: "销毁",
                                                id: "burnButton"
                                            },
                                            data: [
                                                {
                                                    name: "销毁数量",
                                                    type: "number",
                                                    validation: {
                                                        characterMaxLength: 23,
                                                        numberMax: 10000000000000000000000,
                                                        numberMin: 1,
                                                        required: true
                                                    },
                                                    value: "1"
                                                }
                                            ],
                                            onSubmit: async function noRefCheck(from) {
                                                let amount = Number(from.data[0].inputResult);
                                                await burn(amount);
                                            },
                                            title: "销毁代币"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;