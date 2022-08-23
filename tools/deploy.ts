import {Wallet, Utils} from '@ijstech/eth-wallet';
import {Contracts} from "../src";

import * as Config from '../data/config';

async function deployProjectInfo(wallet: Wallet) {
    let {projectInfoOptions} = Config.deployOptions;
    let projectInfo = new Contracts.ProjectInfo(wallet);
    let address = await projectInfo.deploy(projectInfoOptions.validator);
    console.log('ProjectInfo', address)
    for (let i = 0; i < projectInfoOptions.admins.length; i++) {
        await projectInfo.permit(projectInfoOptions.admins[i]);
    }
}

async function deployDomainInfo(wallet: Wallet) {
    let domainInfo = new Contracts.DomainInfo(wallet);
    let address = await domainInfo.deploy();
    console.log('DomainInfo', address)
}

async function deploy() {
    let {rpcUrl, deployer} = Config;
    let provider = rpcUrl;
    let wallet = new Wallet(provider, deployer);
    await deployDomainInfo(wallet);
    await deployProjectInfo(wallet);
}
deploy();