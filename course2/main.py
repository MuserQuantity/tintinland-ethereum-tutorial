import json

from hexbytes import HexBytes
from web3 import Web3

# 初始化web3对象，连接到以太坊sepolia节点
w3 = Web3(Web3.HTTPProvider("https://rpc.sepolia.org"))


# 从链上获取交易并把交易信息存储到raw_trasaction.json文件中
def get_transaction(tx_hash):
    # 从链上获取交易
    transactions = w3.eth.get_transaction(tx_hash)
    transactions = dict(transactions)
    # 把字典中的值类型为HexBytes的转换为字符串
    for key, value in transactions.items():
        if type(value) == HexBytes:
            transactions[key] = value.hex()
    # 把交易信息存储到raw_trasaction.json文件中
    with open('raw_transaction.json', 'w') as f:
        json.dump(transactions, f, indent=4)
    return transactions


# 获取inputdata，还原合约方法名和参数
def parse_input_data(input_data):
    # 从contract.abi文件中获取abi信息
    with open('contract.abi', 'r') as f:
        abi = json.load(f)
    contract = w3.eth.contract(abi=abi)
    decoded_input_data = contract.decode_function_input(input_data)
    # 将合约方法名和参数存储到input_data.json文件中
    with open('input_data.json', 'w') as f:
        result = {
            'method_name': decoded_input_data[0].fn_name,
            'params': decoded_input_data[1]
        }
        json.dump(result, f, indent=4)


if __name__ == '__main__':
    tx = get_transaction("0x3fdc6136c6ca2e2b522b3f706975f0eb44083fd61faa99e7e2b048167e2a89b3")
    parse_input_data(tx['input'])
