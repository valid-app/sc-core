module.exports = {
    rpcUrl: '',
    deployer: {
        address: '',
        privateKey: ''
    },    
    deployOptions: {
        scomOptions: {
            minter: '',
            initSupplyTo: '',
            initSupply: 99999999999999,
            totalSupply: 99999999999999
        },
        auditorInfoOptions: {
            cooldownPeriod: 0,
            auditors: [
                ''               
            ]
        },
        projectInfoOptions: {
            admins: [
                ''
            ]
        }
    },
    setupOptions: {
        projectInfoOptions: {
            address: '',
            projects: [
                {
                    projectId: 0,
                    projectVersionIdx: 0,
                    ipfsCid: '',
                    isFirstVersion: true,
                    validate: true
                },
                {
                    projectId: 1,
                    projectVersionIdx: 1,
                    ipfsCid: '',
                    isFirstVersion: true,
                    validate: true
                }
            ],
            packages: [
                {
                    projectId: 0,
                    packageVersionId: 0,
                    infoCid: '',
                    setToAuditing: true,
                    setToAuditPassed: true,
                    codeCid: ''
                },
            ]
        }        
    }
}