module.exports = {
    rpcUrl: '',
    deployer: {
        address: '',
        privateKey: ''
    },    
    deployOptions: {
        projectInfoOptions: {
            validator: ''
        }
    },
    setupOptions: {
        projectInfoOptions: {
            address: '',
            permittedAddress: '',
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
                    setCurrent: true
                }
            ],
            packages: [
                {
                    projectId: 0,
                    infoCid: '',
                    setToAuditing: true,
                    codeCid: ''
                }
            ]
        }        
    }
}