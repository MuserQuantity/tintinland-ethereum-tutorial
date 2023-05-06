import { Input, Button, TabList, Tab, Form, Information, Typography } from "@web3uikit/core";
import abi from '../../../truffle/output/abi/MyToken.json'
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
const contractAddress = '0x9437464116B3E2D3b918095d63983861c471EC59';
const contractABI = abi;

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
                const a = document.getElementById("tx");
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
        accounts = await web3.eth.getAccounts();
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
                const a = document.getElementById("tx");
                const txHash = tx.transactionHash;
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

async function totalSupply() {
    // 检查MetaMask是否安装
    if (checkMetaMask()) {
        const tx = contract.methods.totalSupply();
        const totalSupply = await tx.call().catch((err: any) => {
            console.log(err);
        });
        return totalSupply;
    } else {
        console.log('请安装MetaMask!');
        alert('请安装MetaMask!');
    }
}

async function balanceOf(_address: any) {
    // 检查MetaMask是否安装
    if (checkMetaMask()) {
        const tx = contract.methods.balanceOf(_address);
        const balance = await tx.call().catch((err: any) => {
            console.log(err);
        });
        return balance;
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
                                title="mint"
                            />
                        </div>
                    </Tab>
                    <Tab
                        tabKey={2}
                        tabName="销毁"
                    >
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
                                title="burn"
                            />
                        </div>
                    </Tab>
                    <Tab
                        tabKey={3}
                        tabName="发行量"
                    >
                        <div>
                            {/* <div id="totalSupply">
                                <Information
                                    id="totalSupplyInfo"
                                    information=""
                                    topic="结果"
                                />
                            </div> */}
                            <SpacerH height={20} />
                            <Button
                                onClick={async function noRefCheck() {
                                    const totalS = await totalSupply();
                                    // const container = document.getElementById('totalSupply');
                                    const container = document.getElementById('result');
                                    createRoot(container!).render(
                                        <Information
                                            id="totalSupplyInfo"
                                            information={totalS}
                                            topic="totalSupply"
                                        />);
                                    console.log(totalS);
                                    alert("成功！");
                                }}
                                text="查询"
                                theme="outline"
                            />
                        </div>
                    </Tab>
                    <Tab
                        tabKey={4}
                        tabName="余额"
                    >
                        <div>
                            {/* <div id="balanceOf">
                                <Information
                                    id="balanceInfo"
                                    information=""
                                    topic="结果"
                                />
                            </div> */}
                            <SpacerH height={20} />
                            <Input
                                label="钱包地址"
                                name="balanceOfAddress"
                                onBlur={function noRefCheck() { }}
                                onChange={function noRefCheck() { }}
                                validation={{
                                    characterMaxLength: 42,
                                    required: true
                                }}
                                value=''
                            />
                            <SpacerH height={20} />
                            <Button
                                onClick={async function noRefCheck() {
                                    let address = (document.getElementsByName("balanceOfAddress")[0] as any).value;
                                    let balance = await balanceOf(address);
                                    const container = document.getElementById('result');
                                    createRoot(container!).render(
                                        <Information
                                            id="balanceInfo"
                                            information={balance}
                                            topic="token余额"
                                        />);
                                    console.log(balance);
                                    alert("成功！");
                                }}
                                text="查询"
                                theme="outline"
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
