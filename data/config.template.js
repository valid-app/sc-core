module.exports = {
    rpcUrl: '',
    deployer: {
        address: '',
        privateKey: ''
    },    
    deployOptions: {
        projectInfoOptions: {
            validator: '',
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
                    ipfsCid: '',
                    isFirstVersion: true
                },
                {
                    projectId: 0,
                    ipfsCid: '',
                    isFirstVersion: false,
                    validate: true
                }
            ],
            packages: [
                {
                    projectId: 0,
                    infoCid: '',
                    setToAuditing: true,
                    setToAuditPassed: true,
                    codeCid: ''
                }
            ]
        }        
    }
}