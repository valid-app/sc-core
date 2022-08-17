import 'mocha';
import {Contract, Wallet} from "@ijstech/eth-wallet";
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
    
    const wallet = new Wallet(provider); 
    before(async function(){
        accounts = await wallet.accounts; 
        wallet.defaultAccount = accounts[0];
    });
    it('Deploy contract', async function(){
        contract = new Contracts.DomainInfo(wallet);
        let address = await contract.deploy();
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
        assert.strictEqual(result, 'abc')
    })
})