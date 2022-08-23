import {Wallet, Utils} from '@ijstech/eth-wallet';
import {Contracts} from "../src";
import Web3 from 'web3';
import * as Config from '../data/config';

async function setupProjectInfo(wallet: Wallet) {
    let {projectInfoOptions} = Config.setupOptions;
    let projectInfo = new Contracts.ProjectInfo(wallet, projectInfoOptions.address);
    let projectVersionIdx = 0;
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
        if (project.validate) {
            await projectInfo.validateProject({
                projectVersionIdx,
                status: 1
            });
    
            await projectInfo.setProjectCurrentVersion({
                projectId: project.projectId,
                versionIdx: projectVersionIdx
            })
        }

        projectVersionIdx++;
    }
    
    let packageVersionId = 0;
    for (let i = 0; i < projectInfoOptions.packages.length; i++) {
        let packageInfo = projectInfoOptions.packages[i];
        await projectInfo.newPackage({
            projectId: packageInfo.projectId,
            ipfsCid: packageInfo.infoCid
        });
        
        if (packageInfo.setToAuditing) {
            await projectInfo.setPackageVersionToAuditing({
                packageVersionId,
                ipfsCid: packageInfo.codeCid
            })
        }
        if (packageInfo.setToAuditPassed) {
            await projectInfo.setPackageVersionToAuditPassed(packageVersionId)
        }
        packageVersionId++;
    }

}

async function run() {
    let {rpcUrl, deployer} = Config;
    let provider = new Web3.providers.HttpProvider(rpcUrl);
    let wallet = new Wallet(provider, deployer);
    await setupProjectInfo(wallet);
}

run();