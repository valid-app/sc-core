import {Wallet, Utils} from '@ijstech/eth-wallet';
import {Contracts} from "../src";

import * as Config from '../data/config';

async function deployScom(wallet: Wallet) {
    let {scomOptions} = Config.deployOptions;
    let token = new Contracts.Scom(wallet);  
    await token.deploy({
        minter: scomOptions.minter,
        initSupplyTo: scomOptions.initSupplyTo, 
        initSupply: Utils.toDecimals(scomOptions.initSupply), 
        totalSupply: Utils.toDecimals(scomOptions.totalSupply)
    })  
    return token.address;
}

async function deployAuditorInfo(wallet: Wallet, token: string) {
    let {auditorInfoOptions} = Config.deployOptions;
    let auditorInfo = new Contracts.AuditorInfo(wallet);
    let address = await auditorInfo.deploy({
        token,
        cooldownPeriod: auditorInfoOptions.cooldownPeriod
    });
    console.log('AuditorInfo', address);
    for (let i = 0; i < auditorInfoOptions.auditors.length; i++) {
        await auditorInfo.addAuditor(auditorInfoOptions.auditors[i]);
    }
    return address;
}

async function deployProjectInfo(wallet: Wallet, token: string, auditorInfo: string) {
    let {projectInfoOptions} = Config.deployOptions;
    let projectInfo = new Contracts.ProjectInfo(wallet);
    let address = await projectInfo.deploy({
        auditorInfo,
        token
    });
    console.log('ProjectInfo', address)
    for (let i = 0; i < projectInfoOptions.admins.length; i++) {
        await projectInfo.permit(projectInfoOptions.admins[i]);
    }
}

async function deployDomainInfo(wallet: Wallet, token: string) {
    let domainInfo = new Contracts.DomainInfo(wallet);
    let address = await domainInfo.deploy(token);
    console.log('DomainInfo', address)
}

async function deploy() {
    let {rpcUrl, deployer} = Config;
    let provider = rpcUrl;
    let wallet = new Wallet(provider, deployer);
    let token = await deployScom(wallet);
    await deployDomainInfo(wallet, token);
    let auditorInfo = await deployAuditorInfo(wallet, token);
    await deployProjectInfo(wallet, token, auditorInfo);
}
deploy();