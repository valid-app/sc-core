import 'mocha';

import {Utils, Wallet, Erc20, BigNumber} from "@ijstech/eth-wallet";
import {ProjectInfo} from '../src/contracts';
import * as Ganache from "ganache";
import * as assert from 'assert';

suite('##Contracts', function() {  
    this.timeout(40000);
    let provider = Ganache.provider()        
    let wallet = new Wallet(provider);   
    let projectInfo: ProjectInfo; 
    let accounts: string[];   
    let projectVersionMap: {[key: number]: any[]} = {};
    async function createNewProject(ipfsCid: string) {
        let newProjectReceipt = await projectInfo.newProject(ipfsCid);
        let newProjectEvent = projectInfo.parseNewProjectEvent(newProjectReceipt)[0];
        
        let projectCount = await projectInfo.projectCount();
        assert.strictEqual(newProjectEvent.projectId.toNumber() + 1, projectCount.toNumber());
        let projectFirstVersion = await projectInfo.projectVersionList({ 
            param1: newProjectEvent.projectId.toNumber(),
            param2: 0
        });
        let projectCurrentVersion = await projectInfo.projectCurrentVersion(newProjectEvent.projectId.toNumber());
        assert.strictEqual(projectFirstVersion.toNumber(), projectCurrentVersion.toNumber());
        return newProjectEvent;
    }
    async function createNewVersion(projectId: number, ipfsCid: string) {
        let newProjectVersionReceipt = await projectInfo.newProjectVersion({
            projectId: projectId,
            ipfsCid
        })     
        let newProjectVersionEvent = projectInfo.parseNewPackageVersionEvent(newProjectVersionReceipt)[0]; 
        return newProjectVersionEvent;
    }
    async function getProjectVersionsByProjectId(projectId: number){
        let projectVersions = [];
        let projectVersionListLength = await projectInfo.projectVersionListLength(projectId);
        for (let i = 0; i < projectVersionListLength.toNumber(); i++) {
            let projectVersionIdx = await projectInfo.projectVersionList({
                param1: projectId,
                param2: i
            })
            let projectVersion = await projectInfo.projectVersions(projectVersionIdx);
            projectVersions.push({...projectVersion, projectVersionIdx});
        }   
        return projectVersions;
    }

    setup(async function(){
        accounts = await wallet.accounts;
    })
    test('Deploy contracts', async function(){
        wallet.defaultAccount = accounts[0];      
        projectInfo = new ProjectInfo(wallet);
        await projectInfo.deploy(accounts[0]);
        console.log('projectInfo', projectInfo.address)     
    })    
    test('Create a new project and a project version', async function() {    
        let newProjectEvent = await createNewProject('bay1');
        // let newProjectVersionEvent = await createNewVersion(newProjectEvent.projectId.toNumber(), 'bay1');
        let projectVersionList = await getProjectVersionsByProjectId(newProjectEvent.projectId.toNumber());
        assert.strictEqual(projectVersionList.length, 1); 
        projectVersionMap[0] = projectVersionList;
    })
    test('Add project admin and remove project admin', async function() {    
        wallet.defaultAccount = accounts[0]; 
        await projectInfo.addProjectAdmin({
            projectId: 0,
            admin: accounts[1]
        });
        let projectAdmin = await projectInfo.projectAdmin({
            param1: 0,
            param2: 0
        });
        assert.strictEqual(projectAdmin, accounts[1]);
        await projectInfo.removeProjectAdmin({
            projectId: 0,
            admin: accounts[1]
        });
    })    
    test('Create 2 more projects and a project version for each', async function() {    
        let newProject2Event = await createNewProject('bay2');
        // let newProject2VersionEvent = await createNewVersion(newProject2Event.projectId.toNumber(), 'bay2');
        projectVersionMap[1] = await getProjectVersionsByProjectId(newProject2Event.projectId.toNumber());
        let newProject3Event = await createNewProject('bay3');
        // let newProject3VersionEvent = await createNewVersion(newProject3Event.projectId.toNumber(), 'bay3');
        projectVersionMap[2] = await getProjectVersionsByProjectId(newProject3Event.projectId.toNumber());
    })
    test('Set Project Id 0 (Version 1) to PASSED', async function() { 
        wallet.defaultAccount = accounts[0]; 
        await projectInfo.permit(accounts[0]);
        let projectVersionList = projectVersionMap[0];
        let newProjectReceipt = await projectInfo.validateProject({
            projectVersionIdx: projectVersionList[0].projectVersionIdx,
            status: 1
        });
        let projectVersion = await projectInfo.projectVersions(projectVersionList[0].projectVersionIdx);
        console.log('projectVersion', projectVersion)
    })
    test('Add more versions to Project Id 0', async function() { 
        wallet.defaultAccount = accounts[0]; 
        await createNewVersion(0, 'bay4');
        await createNewVersion(0, 'bay5');
        projectVersionMap[0] = await getProjectVersionsByProjectId(0);       
    })
    test('Create a new package', async function() { 
        wallet.defaultAccount = accounts[0]; 
        let newPackageReceipt = await projectInfo.newPackage({
            projectId: 0,
            ipfsCid: 'bbyy1'
        })
        let projectPackagesLength = await projectInfo.projectPackagesLength(0);
        await projectInfo.setPackageVersionToAuditing({
            packageVersionId: 0,
            ipfsCid: 'baad1'
        })
        for (let i = 0; i < projectPackagesLength.toNumber(); i++) {
            let packageId = await projectInfo.projectPackages({
                param1: 0,
                param2: i          
            })
            let packageInfo = await projectInfo.packages(packageId);
            console.log('packageInfo', packageInfo);
        }

    })
})