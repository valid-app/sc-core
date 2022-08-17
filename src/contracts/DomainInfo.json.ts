export default {
"abi":[
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"string","name":"domainName","type":"string"},{"indexed":false,"internalType":"uint8","name":"domainType","type":"uint8"},{"indexed":false,"internalType":"string","name":"module","type":"string"}],"name":"UpdateDomainInfo","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"string","name":"domainName","type":"string"},{"indexed":false,"internalType":"string","name":"module","type":"string"}],"name":"UpdateDomainModule","type":"event"},
{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"}],"name":"domainModule","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"}],"name":"domainType","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"domainName","type":"string"}],"name":"getDomainInfo","outputs":[{"internalType":"uint8","name":"moduleType","type":"uint8"},{"internalType":"string","name":"module","type":"string"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"string","name":"domainName","type":"string"},{"internalType":"uint8","name":"moduleType","type":"uint8"},{"internalType":"string","name":"module","type":"string"}],"name":"updateDomainInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"string","name":"domainName","type":"string"},{"internalType":"string","name":"module","type":"string"}],"name":"updateDomainModule","outputs":[],"stateMutability":"nonpayable","type":"function"}
],
"bytecode":"608060405234801561001057600080fd5b50610a05806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80637709aac7116100505780637709aac7146100ab5780639d204278146100be578063a7b055b31461010f57600080fd5b8063351878501461006c5780633b80430f14610081575b600080fd5b61007f61007a36600461058a565b61012f565b005b61009461008f36600461063e565b610219565b6040516100a29291906106fc565b60405180910390f35b61007f6100b9366004610720565b61033e565b6100fd6100cc3660046107bb565b6001602090815260009283526040909220815180830184018051928152908401929093019190912091525460ff1681565b60405160ff90911681526020016100a2565b61012261011d3660046107bb565b6103d7565b6040516100a2919061089b565b336000908152602081905260409081902090518391839161015390899089906108b5565b90815260405190819003602001902061016d92909161048a565b503360009081526001602052604090819020905184919061019190889088906108b5565b908152604051908190036020018120805460ff939093167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff009093169290921790915533907f1dd5cf9af64bf7411cd2222bc84149ef8841a58465c912adc512580b717b03359061020a908890889088908890889061090e565b60405180910390a25050505050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526001602052604080822090516060919061025290869086906108b5565b9081526040805191829003602090810183205473ffffffffffffffffffffffffffffffffffffffff891660009081529182905291902060ff90911693509061029d90869086906108b5565b908152602001604051809103902080546102b69061094a565b80601f01602080910402602001604051908101604052809291908181526020018280546102e29061094a565b801561032f5780601f106103045761010080835404028352916020019161032f565b820191906000526020600020905b81548152906001019060200180831161031257829003601f168201915b50505050509050935093915050565b336000908152602081905260409081902090518391839161036290889088906108b5565b90815260405190819003602001902061037c92909161048a565b503373ffffffffffffffffffffffffffffffffffffffff167f8fdcf277ae4a11f2263407e04c5a0ca73a95a5143412f6701a3803ec74e8e68e858585856040516103c9949392919061099d565b60405180910390a250505050565b60006020818152928152604090208151808301840180519281529084019290930191909120915280546104099061094a565b80601f01602080910402602001604051908101604052809291908181526020018280546104359061094a565b80156104825780601f1061045757610100808354040283529160200191610482565b820191906000526020600020905b81548152906001019060200180831161046557829003601f168201915b505050505081565b8280546104969061094a565b90600052602060002090601f0160209004810192826104b8576000855561051c565b82601f106104ef578280017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082351617855561051c565b8280016001018555821561051c579182015b8281111561051c578235825591602001919060010190610501565b5061052892915061052c565b5090565b5b80821115610528576000815560010161052d565b60008083601f84011261055357600080fd5b50813567ffffffffffffffff81111561056b57600080fd5b60208301915083602082850101111561058357600080fd5b9250929050565b6000806000806000606086880312156105a257600080fd5b853567ffffffffffffffff808211156105ba57600080fd5b6105c689838a01610541565b90975095506020880135915060ff821682146105e157600080fd5b909350604087013590808211156105f757600080fd5b5061060488828901610541565b969995985093965092949392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461063957600080fd5b919050565b60008060006040848603121561065357600080fd5b61065c84610615565b9250602084013567ffffffffffffffff81111561067857600080fd5b61068486828701610541565b9497909650939450505050565b6000815180845260005b818110156106b75760208185018101518683018201520161069b565b818111156106c9576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60ff831681526040602082015260006107186040830184610691565b949350505050565b6000806000806040858703121561073657600080fd5b843567ffffffffffffffff8082111561074e57600080fd5b61075a88838901610541565b9096509450602087013591508082111561077357600080fd5b5061078087828801610541565b95989497509550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080604083850312156107ce57600080fd5b6107d783610615565b9150602083013567ffffffffffffffff808211156107f457600080fd5b818501915085601f83011261080857600080fd5b81358181111561081a5761081a61078c565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156108605761086061078c565b8160405282815288602084870101111561087957600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6020815260006108ae6020830184610691565b9392505050565b8183823760009101908152919050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b6060815260006109226060830187896108c5565b60ff86166020840152828103604084015261093e8185876108c5565b98975050505050505050565b600181811c9082168061095e57607f821691505b602082108103610997577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b6040815260006109b16040830186886108c5565b82810360208401526109c48185876108c5565b97965050505050505056fea26469706673582212201a2dbdb25934ef30df3992b7cd72aae353159aca9ab69b4cb7da255ab7eec03f64736f6c634300080d0033"
}