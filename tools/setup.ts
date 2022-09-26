import {Wallet, Utils} from '@ijstech/eth-wallet';
import {Contracts} from "../src";
import Web3 from 'web3';
import * as Config from '../data/config';

async function setupProjectInfo(wallet: Wallet) {
    let {projectInfoOptions} = Config.setupOptions;
    let projectInfo = new Contracts.ProjectInfo(wallet, projectInfoOptions.address);
    for (let i = 0; i < projectInfoOptions.projects.length; i++) {
        let project = projectInfoOptions.projects[i];
        if (project.isFirstVersion) {
            await projectInfo.newProject(project.ipfsCid);
        }
        else {
            await projectInfo.newProjectVersion({
                projectId: project.projectId,
                ipfsCid: project.ipfsCid
            })    
        }
        await projectInfo.setProjectCurrentVersion({
            projectId: project.projectId,
            versionIdx: project.projectVersionIdx
        })
    }
    
    for (let i = 0; i < projectInfoOptions.packages.length; i++) {
        let packageInfo = projectInfoOptions.packages[i];
        await projectInfo.newPackage({
            projectId: packageInfo.projectId,
            ipfsCid: packageInfo.infoCid
        });
        
        await projectInfo.newPackageVersion({
            projectId: packageInfo.projectId,
            packageId: 0,
            version: {
                major: 0,
                minor: 0,
                patch: 1
            },
            ipfsCid: packageInfo.codeCid
        })
        if (packageInfo.setToAuditPassed) {
            await projectInfo.setPackageVersionToAuditPassed({
                packageVersionId: packageInfo.packageVersionId,
                reportUri: packageInfo.reportUri
            })
        }
    }

}

async function run() {
    let {rpcUrl, deployer} = Config;
    let provider = new Web3.providers.HttpProvider(rpcUrl);
    let wallet = new Wallet(provider, deployer);
    await setupProjectInfo(wallet);
}

run();