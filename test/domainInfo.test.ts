import 'mocha';
import {Contract, Utils, Wallet} from "@ijstech/eth-wallet";
import {Contracts} from '..';
import * as Ganache from "ganache";
import * as assert from 'assert';
const Config = require('./config');

// describe('##Kovan Contract Deploy', async function(){    
//     this.timeout(20000);
//     it('Deploy Contract', async function(){
//         const wallet = new Wallet(Config.provider, Config.account);
//         let contract = new Contracts.DomainInfo(wallet);
//         let address = await contract.deploy({
//             burnRate: 0,
//             feeTo: '0x2Ce2eaa52c49C66f07366689b41bD21c70ae1059',
//             token: '0x45eee762aaea4e5ce317471bda8782724972ee19'
//         });
//         console.dir(address);
//     })
// });
describe('##Domain Registry', async function() {
    this.timeout(20000);
    let accounts: string[];
    let provider = Ganache.provider();
    let contract: Contracts.DomainInfo;
    let token: Contracts.Scom;   
    
    const wallet = new Wallet(provider); 
    before(async function(){
        accounts = await wallet.accounts; 
        wallet.defaultAccount = accounts[0];
    });
    it('Deploy contract', async function(){
        token = new Contracts.Scom(wallet);  
        await token.deploy({
            minter: accounts[0],
            initSupplyTo: accounts[0], 
            initSupply: Utils.toDecimals(999999), 
            totalSupply: Utils.toDecimals(999999)
        })  
        await token.transfer({
            to: accounts[1],
            amount: Utils.toDecimals(50000)
        })
        contract = new Contracts.DomainInfo(wallet);
        let address = await contract.deploy(token.address);
    });
    it('Set Domain Info', async function(){
        await contract.updateDomainInfo({
            domainName: 'localhost',
            moduleType: 1,
            module: 'abc'
        })
    });
    it('Get Domain Info', async function(){
        let result = await contract.getDomainInfo({
            domainName: 'localhost',
            owner: accounts[0]
        });
        assert.strictEqual(result.module, 'abc')
    })
    it('Deposit', async function(){
        await token.approve({
            spender: contract.address,
            amount: Utils.toDecimals(300)
        })
        let result = await contract.deposit({
            domainName: 'localhost',
            amount: Utils.toDecimals(300)
        });
    })
    it('Withdraw', async function(){
        let result = await contract.withdraw({
            domainName: 'localhost',
            amount: Utils.toDecimals(220)
        });
        let balance = await contract.balanceOf({
            param1: accounts[0],
            param2: 'localhost'
        })
        assert.strictEqual(balance.toFixed(), Utils.toDecimals(80).toFixed())
    })
    it('Increase Allowance', async function(){
        let result = await contract.increaseAllowance({
            spender: accounts[1],
            domainName: 'localhost',
            addedValue: Utils.toDecimals(40)
        });
    })
    it('Spend', async function(){
        wallet.defaultAccount = accounts[2];
        let result = await contract.spend({
            owner: accounts[0],
            domainName: 'localhost',
            destination: accounts[1],
            amount: Utils.toDecimals(40)
        });
        let balance = await token.balanceOf(accounts[1]);
        assert.strictEqual(balance.toFixed(), Utils.toDecimals(50040).toFixed())
    })              
})