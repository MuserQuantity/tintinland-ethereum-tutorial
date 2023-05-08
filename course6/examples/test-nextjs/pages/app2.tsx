import { Input, Button, TabList, Tab, Form, Information, Typography } from "@web3uikit/core";
import abi from '../../../truffle/output/abi/ERC20V3Factory.json'
import Web3 from 'web3';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
// import { createPortal } from 'react-dom';
// import App from './test';

let web3: any;
let contract: any;
let accounts: any;

// 1. 钱包检查
function checkMetaMask() {
    // 检查MetaMask是否安装
    if (window.ethereum) {
        if (!web3) {
            web3 = new Web3(window.ethereum as any);
        }
        if (!contract) {
            contract = new web3.eth.Contract(contractABI as any, contractAddress);
        }
        return true;
    } else {
        return false;
    }
}

// 2. 获取合约实例
const contractAddress = '0xE8bb27C8F5379e2Fb0e925039173F8616f7a6579';
const contractABI = abi;

// 3. 调用合约方法
async function createStdERC20(totalSupply: any, name: any, symbol: any, decimals: any) {
    // 检查MetaMask是否安装
    if (window.ethereum) {
        let web3 = new Web3((window.ethereum as any));
        let accounts = await web3.eth.getAccounts();
        console.log(accounts);
        let sender = accounts[0];
        const contract = new web3.eth.Contract(contractABI as any, contractAddress);
        let gas;
        // 估算Gas
        await contract.methods.createStdERC20(totalSupply, name, symbol, decimals).estimateGas({ from: sender }, function (error: any, gasAmount: any) {
            if (error) {
                alert(error.message);
            } else {
                gas = gasAmount;
            }
        });
        // 发送交易
        const tx = contract.methods.createStdERC20(totalSupply, name, symbol, decimals);
        await tx.send({ from: sender, gasPrice: 20000000000 }, function (error: any, txhash: any) {
            if (error) {
                alert(error.message);
            } else {
                alert("成功！");
            }
        }).then((tx: any) => {
            console.log(tx);
            if (tx) {
                const txHash = tx.transactionHash;
                // const container = document.getElementById('result');
                // createRoot(container!).render(
                //     <Information
                //         id="txInfo"
                //         information={"https://sepolia.etherscan.io/tx/" + txHash}
                //         topic="交易结果"
                //     />);
                const a = document.getElementById("tx");
                console.log(tx);
                if (a != null && a instanceof HTMLAnchorElement) {
                    a.href = "https://sepolia.etherscan.io/tx/" + txHash;
                    a.textContent = "交易地址：" + txHash;
                }
            }
        }).catch((err: any) => {
            console.log(err);
            location.reload();
        });
    } else {
        console.log('请安装MetaMask!');
        alert('请安装MetaMask!');
    }
}

async function createCustomERC20(totalSupply: any, name: any, symbol: any, decimals: any,tradeBurnRatio: any, tradeFeeRatio: any, teamAccount: any) {
    // 检查MetaMask是否安装
    if (window.ethereum) {
        let web3 = new Web3((window.ethereum as any));
        let accounts = await web3.eth.getAccounts();
        console.log(accounts);
        let sender = accounts[0];
        const contract = new web3.eth.Contract(contractABI as any, contractAddress);
        let gas;
        // 估算Gas
        await contract.methods.createCustomERC20(totalSupply, name, symbol, decimals,tradeBurnRatio, tradeFeeRatio, teamAccount).estimateGas({ from: sender }, function (error: any, gasAmount: any) {
            if (error) {
                alert(error.message);
            } else {
                gas = gasAmount;
            }
        });
        // 发送交易
        const tx = contract.methods.createCustomERC20(totalSupply, name, symbol, decimals,tradeBurnRatio, tradeFeeRatio, teamAccount);
        await tx.send({ from: sender, gasPrice: 20000000000 }, function (error: any, txhash: any) {
            if (error) {
                alert(error.message);
            } else {
                alert("成功！");
            }
        }).then((tx: any) => {
            console.log(tx);
            if (tx) {
                const txHash = tx.transactionHash;
                const a = document.getElementById("tx");
                console.log(tx);
                if (a != null && a instanceof HTMLAnchorElement) {
                    a.href = "https://sepolia.etherscan.io/tx/" + txHash;
                    a.textContent = "交易地址：" + txHash;
                }
            }
        }).catch((err: any) => {
            console.log(err);
            location.reload();
        });
    } else {
        console.log('请安装MetaMask!');
        alert('请安装MetaMask!');
    }
}
async function createCustomMintableERC20(initSupply: any, name: any, symbol: any, decimals: any,tradeBurnRatio: any, tradeFeeRatio: any, teamAccount: any) {
    // 检查MetaMask是否安装
    if (window.ethereum) {
        let web3 = new Web3((window.ethereum as any));
        let accounts = await web3.eth.getAccounts();
        console.log(accounts);
        let sender = accounts[0];
        const contract = new web3.eth.Contract(contractABI as any, contractAddress);
        let gas;
        // 估算Gas
        await contract.methods.createCustomMintableERC20(initSupply, name, symbol, decimals,tradeBurnRatio, tradeFeeRatio, teamAccount).estimateGas({ from: sender }, function (error: any, gasAmount: any) {
            if (error) {
                alert(error.message);
            } else {
                gas = gasAmount;
            }
        });
        // 发送交易
        const tx = contract.methods.createCustomMintableERC20(initSupply, name, symbol, decimals,tradeBurnRatio, tradeFeeRatio, teamAccount);
        await tx.send({ from: sender, gasPrice: 20000000000 }, function (error: any, txhash: any) {
            if (error) {
                alert(error.message);
            } else {
                alert("成功！");
            }
        }).then((tx: any) => {
            console.log(tx);
            if (tx) {
                const txHash = tx.transactionHash;
                const a = document.getElementById("tx");
                console.log(tx);
                if (a != null && a instanceof HTMLAnchorElement) {
                    a.href = "https://sepolia.etherscan.io/tx/" + txHash;
                    a.textContent = "交易地址：" + txHash;
                }
            }
        }).catch((err: any) => {
            console.log(err);
            location.reload();
        });
    } else {
        console.log('请安装MetaMask!');
        alert('请安装MetaMask!');
    }
}


const SpacerW = ({ width }: { width: number }) => <div style={{ width }} />
const SpacerH = ({ height }: { height: number }) => <div style={{ height }} />

export default function Dapp2() {
    return (
        <>
            <SpacerH height={20} />
            <div style={{ margin: 'auto', width: '50%' }}>
                <div>
                    <a href="https://sepolia.etherscan.io/address/0xe8bb27c8f5379e2fb0e925039173f8616f7a6579">合约：0xE8bb27C8F5379e2Fb0e925039173F8616f7a6579</a>
                </div>
                <SpacerH height={20} />
                <TabList
                    defaultActiveKey={1}
                    onChange={function noRefCheck() { }}
                    tabStyle="bulbUnion"
                >
                    <Tab
                        tabKey={1}
                        tabName="StandardERC20"
                    >
                        <div>
                            <Form id="StandardERC20Form"
                                buttonConfig={{
                                    onClick: async function noRefCheck(e) {
                                        console.log(e);
                                    },
                                    theme: 'primary',
                                    text: '部署',
                                    id: 'StandardERC20Button'
                                }}
                                data={[
                                    {
                                        name: 'totalSupply',
                                        type: 'number',
                                        validation: {
                                            characterMaxLength: 45,
                                            numberMax: 1000000000000000000000000000000000000000000000,
                                            numberMin: 1,
                                            required: true
                                        },
                                        value: "1"
                                    },
                                    {
                                        inputWidth: '100%',
                                        name: 'name',
                                        type: 'text',
                                        validation: {
                                            characterMaxLength: 42,
                                            required: true
                                        },
                                        value: ''
                                    },
                                    {
                                        inputWidth: '100%',
                                        name: 'symbol',
                                        type: 'text',
                                        validation: {
                                            characterMaxLength: 42,
                                            required: true
                                        },
                                        value: ''
                                    },
                                    {
                                        name: 'decimals',
                                        type: 'number',
                                        validation: {
                                            characterMaxLength: 23,
                                            numberMax: 100,
                                            numberMin: 0,
                                            required: true
                                        },
                                        value: "0"
                                    }
                                ]}
                                onSubmit={async function noRefCheck(from) {
                                    let totalSupply = Number(from.data[0].inputResult);
                                    let name = from.data[1].inputResult;
                                    let symbol = from.data[2].inputResult;
                                    let decimals = Number(from.data[3].inputResult);
                                    await createStdERC20(totalSupply, name, symbol, decimals);
                                }}
                                title="StandardERC20"
                            />
                        </div>
                    </Tab>
                    <Tab
                        tabKey={2}
                        tabName="CustomERC20"
                    >
                        <div>
                            <Form id="CustomERC20Form"
                                buttonConfig={{
                                    onClick: async function noRefCheck(e) {
                                        console.log(e);
                                    },
                                    theme: 'primary',
                                    text: '部署',
                                    id: 'DeployCustomERC20Button'
                                }}
                                data={[
                                    {
                                        name: 'totalSupply',
                                        type: 'number',
                                        validation: {
                                            characterMaxLength: 45,
                                            numberMax: 1000000000000000000000000000000000000000000000,
                                            numberMin: 1,
                                            required: true
                                        },
                                        value: "1"
                                    },
                                    {
                                        inputWidth: '100%',
                                        name: 'name',
                                        type: 'text',
                                        validation: {
                                            characterMaxLength: 42,
                                            required: true
                                        },
                                        value: ''
                                    },
                                    {
                                        inputWidth: '100%',
                                        name: 'symbol',
                                        type: 'text',
                                        validation: {
                                            characterMaxLength: 42,
                                            required: true
                                        },
                                        value: ''
                                    },
                                    {
                                        name: 'decimals',
                                        type: 'number',
                                        validation: {
                                            characterMaxLength: 23,
                                            numberMax: 100,
                                            numberMin: 0,
                                            required: true
                                        },
                                        value: "0"
                                    },
                                    {
                                        name: 'tradeBurnRatio',
                                        type: 'number',
                                        validation: {
                                            characterMaxLength: 23,
                                            numberMax: 100,
                                            numberMin: 0,
                                            required: true
                                        },
                                        value: "0"
                                    },
                                    {
                                        name: 'tradeFeeRatio',
                                        type: 'number',
                                        validation: {
                                            characterMaxLength: 23,
                                            numberMax: 100,
                                            numberMin: 0,
                                            required: true
                                        },
                                        value: "0"
                                    },
                                    {
                                        inputWidth: '100%',
                                        name: 'teamAccount',
                                        type: 'text',
                                        validation: {
                                            characterMaxLength: 42,
                                            required: true
                                        },
                                        value: ''
                                    }
                                ]}
                                onSubmit={async function noRefCheck(from) {
                                    let totalSupply = Number(from.data[0].inputResult);
                                    let name = from.data[1].inputResult;
                                    let symbol = from.data[2].inputResult;
                                    let decimals = Number(from.data[3].inputResult);
                                    let tradeBurnRatio = Number(from.data[4].inputResult);
                                    let tradeFeeRatio = Number(from.data[5].inputResult);
                                    let teamAccount = from.data[6].inputResult;
                                    await createCustomERC20(totalSupply, name, symbol, decimals, tradeBurnRatio, tradeFeeRatio, teamAccount);
                                }}
                                title="CustomERC20"
                            />
                        </div>
                    </Tab>
                    <Tab
                        tabKey={3}
                        tabName="CustomMintableERC20"
                    >
                        <div>
                            <Form id="CustomMintableERC20Form"
                                buttonConfig={{
                                    onClick: async function noRefCheck(e) {
                                        console.log(e);
                                    },
                                    theme: 'primary',
                                    text: '部署',
                                    id: 'CustomMintableERC20'
                                }}
                                data={[
                                    {
                                        name: 'initSupply',
                                        type: 'number',
                                        validation: {
                                            characterMaxLength: 45,
                                            numberMax: 1000000000000000000000000000000000000000000000,
                                            numberMin: 1,
                                            required: true
                                        },
                                        value: "1"
                                    },
                                    {
                                        inputWidth: '100%',
                                        name: 'name',
                                        type: 'text',
                                        validation: {
                                            characterMaxLength: 42,
                                            required: true
                                        },
                                        value: ''
                                    },
                                    {
                                        inputWidth: '100%',
                                        name: 'symbol',
                                        type: 'text',
                                        validation: {
                                            characterMaxLength: 42,
                                            required: true
                                        },
                                        value: ''
                                    },
                                    {
                                        name: 'decimals',
                                        type: 'number',
                                        validation: {
                                            characterMaxLength: 23,
                                            numberMax: 100,
                                            numberMin: 0,
                                            required: true
                                        },
                                        value: "0"
                                    },
                                    {
                                        name: 'tradeBurnRatio',
                                        type: 'number',
                                        validation: {
                                            characterMaxLength: 23,
                                            numberMax: 100,
                                            numberMin: 0,
                                            required: true
                                        },
                                        value: "0"
                                    },
                                    {
                                        name: 'tradeFeeRatio',
                                        type: 'number',
                                        validation: {
                                            characterMaxLength: 23,
                                            numberMax: 100,
                                            numberMin: 0,
                                            required: true
                                        },
                                        value: "0"
                                    },
                                    {
                                        inputWidth: '100%',
                                        name: 'teamAccount',
                                        type: 'text',
                                        validation: {
                                            characterMaxLength: 42,
                                            required: true
                                        },
                                        value: ''
                                    }
                                ]}
                                onSubmit={async function noRefCheck(from) {
                                    let initSupply = Number(from.data[0].inputResult);
                                    let name = from.data[1].inputResult;
                                    let symbol = from.data[2].inputResult;
                                    let decimals = Number(from.data[3].inputResult);
                                    let tradeBurnRatio = Number(from.data[4].inputResult);
                                    let tradeFeeRatio = Number(from.data[5].inputResult);
                                    let teamAccount = from.data[6].inputResult;
                                    await createCustomMintableERC20(initSupply, name, symbol, decimals, tradeBurnRatio, tradeFeeRatio, teamAccount);
                                }}
                                title="CustomMintableERC20"
                            />
                        </div>
                    </Tab>
                </TabList>
                <div>
                    <Typography
                        onCopy={function noRefCheck() { }}
                        variant="H1"
                    >
                        调用结果历史：
                    </Typography>
                    <div id="result"></div>
                    <div>
                        <a href="" id="tx"></a>
                    </div>
                </div>
            </div>
        </>
    );
}
