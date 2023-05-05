import Link from "next/link";
import { Input, Button, TabList, Tab, Form } from "@web3uikit/core";
import abi from '../../../truffle/output/abi/MyToken.json'
// import { ethers } from 'ethers';
import Web3 from 'web3';
// import { Web3Provider } from '@ethersproject/providers';

// 1. 配置连接信息
// const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/<your-project-id>');
// const signer = new ethers.Wallet('<your-private-key>', provider);

// 2. 获取合约实例
const contractAddress = '0x9437464116B3E2D3b918095d63983861c471EC59';
const contractABI = abi;
let web3;
// console.log(typeof(contractABI));
// 3. 调用合约方法
async function mint(_address: any, _amount: any) {
    // 检查MetaMask是否安装
    if (window.ethereum) {
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        let web3 = new Web3((window.ethereum as any));
        // let web3: Web3 = (window as any).ethereum;
        // console.log(web3);
        // web3 = new Web3(web3);
        let accounts = await web3.eth.getAccounts();
        console.log(accounts);
        let sender = accounts[0];
        const contract = new web3.eth.Contract(contractABI as any, contractAddress);
        let gas;
        await contract.methods.mint(_address, _amount).estimateGas({ from: sender }, function (error: any, gasAmount: any) {
            if (error) {
                alert(error.message);
            } else {
                gas = gasAmount;
            }
        });
        const tx = contract.methods.mint(_address, _amount);
        await tx.send({ from: sender, gasPrice: 20000000000 }, function (error: any, txhash: any) {
            if (error) {
                alert(error.message);
            } else {
                alert("成功！");
            }
        }).then((tx: any) => {
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
        }).catch((err: any) => {
            console.log(err);
            location.reload();
        });
    } else {
        console.log('请安装MetaMask!');
        alert('请安装MetaMask!');
    }
}

async function burn(_amount: any) {
    // 检查MetaMask是否安装
    if (window.ethereum) {
        web3 = new Web3(window.ethereum as any);
        let accounts = await web3.eth.getAccounts();
        console.log(accounts);
        let sender = accounts[0];
        const contract = new web3.eth.Contract(contractABI as any, contractAddress);
        let gas;
        await contract.methods.burn(_amount).estimateGas({ from: sender }, function (error: any, gasAmount: any) {
            if (error) {
                alert(error.message);
            } else {
                gas = gasAmount;
            }
        });
        const tx = contract.methods.burn(_amount);
        await tx.send({ from: sender, gasPrice: 20000000000 }, function (error: any, txhash: any) {
            if (error) {
                alert(error.message);
            } else {
                alert("成功！");
            }
        }).then((tx: any) => {
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
        }).catch((err: any) => {
            console.log(err);
            location.reload();
        });
    } else {
        console.log('请安装MetaMask!');
        alert('请安装MetaMask!');
    }
}



// console.log(abi);

const SpacerW = ({ width }: { width: number }) => <div style={{ width }} />
const SpacerH = ({ height }: { height: number }) => <div style={{ height }} />

export default function Dapp() {
    return (
        <>
            <SpacerH height={20} />
            <div style={{ margin: 'auto', width: '50%' }}>
                <div>
                    <a href="https://sepolia.etherscan.io/tx/0x66ba693ada9bc2976a718be2e63b482826760d81586447a714c94c15fdc70dd5">合约：0x9437464116B3E2D3b918095d63983861c471EC59</a>
                </div>
                <SpacerH height={20} />
                <TabList
                    defaultActiveKey={1}
                    onChange={function noRefCheck() { }}
                    tabStyle="bulbUnion"
                >
                    <Tab
                        tabKey={1}
                        tabName="增发"
                    >
                        <div>
                            <a href="" id="mintTx"></a>
                        </div>
                        <div>
                            <Form id="mintForm"
                                buttonConfig={{
                                    onClick: async function noRefCheck(e) {
                                        console.log(e);
                                    },
                                    theme: 'primary',
                                    text: '增发',
                                    id: 'mintButton'
                                }}
                                data={[
                                    {
                                        inputWidth: '100%',
                                        name: '增发地址',
                                        type: 'text',
                                        validation: {
                                            characterMaxLength: 42,
                                            required: true
                                        },
                                        value: ''
                                    },
                                    {
                                        name: '增发数量',
                                        type: 'number',
                                        validation: {
                                            characterMaxLength: 23,
                                            numberMax: 10000000000000000000000,
                                            numberMin: 1,
                                            required: true
                                        },
                                        value: "1"
                                    }
                                ]}
                                onSubmit={async function noRefCheck(from) {
                                    let address = from.data[0].inputResult;
                                    let amount = Number(from.data[1].inputResult);
                                    await mint(address, amount);
                                }}
                                title="增发代币"
                            />
                        </div>
                    </Tab>
                    <Tab
                        tabKey={2}
                        tabName="销毁"
                    >
                        <div>
                            <a href="" id="burnTx"></a>
                        </div>
                        <div>
                            <Form id="burnForm"
                                buttonConfig={{
                                    onClick: function noRefCheck(e) { console.log(e); },
                                    theme: 'primary',
                                    text: '销毁',
                                    id: 'burnButton'
                                }}
                                data={[
                                    {
                                        name: '销毁数量',
                                        type: 'number',
                                        validation: {
                                            characterMaxLength: 23,
                                            numberMax: 10000000000000000000000,
                                            numberMin: 1,
                                            required: true
                                        },
                                        value: "1"
                                    }
                                ]}
                                onSubmit={async function noRefCheck(from) {
                                    let amount = Number(from.data[0].inputResult);
                                    await burn(amount);
                                }}
                                title="销毁代币"
                            />
                        </div>
                    </Tab>
                </TabList>
            </div>
        </>
    );
}
