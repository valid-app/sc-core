import 'mocha';

import {Utils, Wallet, Erc20, BigNumber} from "@ijstech/eth-wallet";
import {AuditorInfo, ProjectInfo, Scom} from '../src/contracts';
import * as Ganache from "ganache";
import * as assert from 'assert';

suite('##Contracts', function() {  
    this.timeout(40000);
    let provider = Ganache.provider();        
    let wallet = new Wallet(provider);
    let token: Scom;   
    let auditorInfo: AuditorInfo;
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
        token = new Scom(wallet);  
        await token.deploy({
            minter: accounts[0],
            initSupplyTo: accounts[0], 
            initSupply: Utils.toDecimals(999999), 
            totalSupply: Utils.toDecimals(999999)
        })   
        await token.transfer({
            amount: Utils.toDecimals(6000),
            to: accounts[1]
        })
        auditorInfo = new AuditorInfo(wallet);
        await auditorInfo.deploy({
            token: token.address,
            cooldownPeriod: 0
        });
        projectInfo = new ProjectInfo(wallet);
        await projectInfo.deploy({
            auditorInfo: auditorInfo.address,
            token: token.address
        });
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
        await projectInfo.newPackageVersion({
            projectId: 0,
            packageId: 0,
            version: {
                major: 0,
                minor: 0,
                patch: 1
            },
            ipfsCid: 'baad1'
        })
        let projectPackagesLength = await projectInfo.projectPackagesLength(0);
        for (let i = 0; i < projectPackagesLength.toNumber(); i++) {
            let packageId = await projectInfo.projectPackages({
                param1: 0,
                param2: i          
            })
            let packageInfo = await projectInfo.packages(packageId);
            console.log('packageInfo', packageInfo);
        }
    })
    test('Bump package patch version', async function() { 
        wallet.defaultAccount = accounts[0]; 
        await projectInfo.newPackageVersion({
            projectId: 0,
            packageId: 0,
            version: {
                major: 0,
                minor: 0,
                patch: 2
            },
            ipfsCid: 'baad1'
        })
    })   
    test('Bump package minor version', async function() { 
        wallet.defaultAccount = accounts[0]; 
        await projectInfo.newPackageVersion({
            projectId: 0,
            packageId: 0,
            version: {
                major: 0,
                minor: 1,
                patch: 1
            },
            ipfsCid: 'baad1'
        })
    }) 
    test('Bump package major version', async function() { 
        wallet.defaultAccount = accounts[0]; 
        await projectInfo.newPackageVersion({
            projectId: 0,
            packageId: 0,
            version: {
                major: 1,
                minor: 0,
                patch: 2
            },
            ipfsCid: 'baad1'
        })
    })            
    test('Add auditor', async function() {
        wallet.defaultAccount = accounts[0]; 
        await auditorInfo.addAuditor(accounts[0]);
    })
    test('Set package status to AUDIT_PASSED', async function() { 
        wallet.defaultAccount = accounts[0]; 
        await projectInfo.setPackageVersionToAuditPassed({
            packageVersionId: 0,
            reportUri: 'ber2342'
        });
        let packageVersion = await projectInfo.packageVersions(0);
        assert.strictEqual(packageVersion.reportUri, 'ber2342');
    })
    test('Stake to Project Id 0', async function() { 
        wallet.defaultAccount = accounts[0]; 
        await token.approve({
            spender: projectInfo.address,
            amount: Utils.toDecimals(100)
        });
        await projectInfo.stake({
            projectId: 0,
            amount: Utils.toDecimals(100)
        })
        let backerBalance = await projectInfo.projectBackerBalance({
            param1: accounts[0],
            param2: 0
        })
        let projectBalance = await projectInfo.projectBalance(0);
        assert.strictEqual(backerBalance.toFixed(), Utils.toDecimals(100).toFixed());
        assert.strictEqual(projectBalance.toFixed(), Utils.toDecimals(100).toFixed());
    })
    test('Account 0: Unstake from Project Id 0', async function() { 
        wallet.defaultAccount = accounts[0]; 
        await projectInfo.unstake({
            projectId: 0,
            amount: Utils.toDecimals(99)
        })
        let backerBalance = await projectInfo.projectBackerBalance({
            param1: accounts[0],
            param2: 0
        })
        let projectBalance = await projectInfo.projectBalance(0);
        assert.strictEqual(backerBalance.toFixed(), Utils.toDecimals(1).toFixed());
        assert.strictEqual(projectBalance.toFixed(), Utils.toDecimals(1).toFixed());
    })
    test('Account 1: Stake to Project Id 0', async function() { 
        wallet.defaultAccount = accounts[1]; 
        await token.approve({
            spender: projectInfo.address,
            amount: Utils.toDecimals(200)
        });
        await projectInfo.stake({
            projectId: 0,
            amount: Utils.toDecimals(200)
        })
        let backerBalance = await projectInfo.projectBackerBalance({
            param1: accounts[1],
            param2: 0
        })
        let projectBalance = await projectInfo.projectBalance(0);
        assert.strictEqual(backerBalance.toFixed(), Utils.toDecimals(200).toFixed());
        assert.strictEqual(projectBalance.toFixed(), Utils.toDecimals(201).toFixed());
    })
})