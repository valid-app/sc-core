
import https from 'https';
import { ec } from "elliptic";
import { keccak256 } from 'js-sha3';
const secp256k1 = new ec("secp256k1");
import { Transaction, FakeTransaction,TxData } from 'ethereumjs-tx';
import Common from 'ethereumjs-common';
import Web3 from 'web3';

const network = {
    "binance": {
        "networkId": 56,
        "chainId": 56,
        "rpc": "https://bsc-dataseed.binance.org/",
        "blockGasLimit": 30000000,
        "wrappedUtilityToken": "WBNB",
        "blockTime":3
    },
    "binanceTestnet": {
        "networkId": 97,
        "chainId": 97,
        "rpc": "https://data-seed-prebsc-1-s1.binance.org:8545/",
        "blockGasLimit": 30000000,
        "wrappedUtilityToken": "WBNB",
        "blockTime":3
    }
}

function request(rpcUrl: string, postJson:any): Promise<any> {
    let postData = JSON.stringify(postJson);
    return new Promise(function(resolve, reject){
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': postData.length
            }
        };
        const req = https.request(rpcUrl, options, (res) => {
            let body = "";
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                body += chunk;
            });
            res.on('end', () => {
              resolve(JSON.parse(body));
            });
        });
        req.on('error', (e) => {
            reject(e);
        });
        req.write(postData);
        req.end();
    });
}
function toChecksum(address:string){
    address = address.replace("0x","").toLowerCase();
    const addressHash = keccak256(address);
    let checksumAddress = "0x" + address.split('').map((e,i)=>parseInt(addressHash[i], 16) > 7 ? e.toUpperCase() : e).join('');
    return checksumAddress;
}
function ecRecover(hash:string, signature:string) {
    let vrs = {r:signature.substring(2,66), s:signature.substring(66,130), v:parseInt(signature.substring(130),16)};
    const ecPublicKey = secp256k1.recoverPubKey(Buffer.from(hash, "hex"), vrs, vrs.v < 2 ? vrs.v : 1 - vrs.v % 2);
    const publicHash = keccak256(Buffer.concat([ecPublicKey.getX().toBuffer(), ecPublicKey.getY().toBuffer()]));
    const address = toChecksum("0x" + publicHash.slice(-40));
    return address;
}
async function findTxSigner(abi:any, txhash:string) {
    let jsonReq = {
        "jsonrpc":"2.0",
        "method":"eth_getTransactionByHash",
        "params":[ txhash ],
        "id":1
    };
    let tx = await request(network.binanceTestnet.rpc, jsonReq);
    // console.log(tx);
    if (tx.result) {
        let txData = {
            nonce: tx.result.nonce,
            gasPrice: tx.result.gasPrice,
            gasLimit: tx.result.gas,
            to: tx.result.to,
            value: tx.result.value,
            data: tx.result.input
        };
        //let tx1 = new Transaction(txData, "kovan");
        let tx1 = new Transaction(txData, {common:Common.forCustomChain('mainnet', network.binanceTestnet, 'petersburg')});
        let hash = tx1.hash(false).toString("hex");
        let signer = ecRecover(hash, "0x"+tx.result.r.replace("0x","") + tx.result.s.replace("0x","") + tx.result.v.replace("0x",""));
        let params = {};
        if (abi && tx.result.input && tx.result.input.length > 2) {
            let decoded = new Web3(new Web3.providers.HttpProvider(network.binanceTestnet.rpc)).eth.abi.decodeParameters(abi,"0x"+tx.result.input.substring(10));
            for (let i = 0 ; i < abi.length ; i++) {
                params[abi[i].name] = decoded[abi[i].name];
            };
        }
        return {signer, params};
    } else {
        console.log("tx not found");
    }
}
async function run(){
    let abi = [{"indexed":true,"internalType":"string","name":"domainName","type":"string"},{"indexed":false,"internalType":"uint8","name":"domainType","type":"uint8"},{"indexed":false,"internalType":"string","name":"module","type":"string"}];
    let signer = await findTxSigner(abi, "0x15ab0b15eb43c818cec5635507c95699f5f13d204b1825f62372b781a31acebb");
    console.log("signer/params: ", signer);
}
run();
