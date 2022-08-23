define("@validapp/sc-core", (require, exports)=>{
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// src/index.ts
__export(exports, {
  Contracts: () => contracts_exports
});

// src/contracts/index.ts
var contracts_exports = {};
__export(contracts_exports, {
  Authorization: () => Authorization,
  DomainInfo: () => DomainInfo,
  ModuleInfo: () => ModuleInfo,
  ProjectInfo: () => ProjectInfo
});

// src/contracts/Authorization.ts
var import_eth_wallet = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/Authorization.json.ts
var Authorization_json_default = {
  "abi": [
    { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "608060405234801561001057600080fd5b50600080546001600160a01b031916331790556104e4806100326000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639c52a7f11161005b5780639c52a7f114610109578063a2f55ae51461011c578063d4ee1d901461012f578063f2fde38b1461014f57600080fd5b80633fd8cc4e1461008257806360536172146100ba5780638da5cb5b146100c4575b600080fd5b6100a5610090366004610471565b60026020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6100c2610162565b005b6000546100e49073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b1565b6100c2610117366004610471565b610290565b6100c261012a366004610471565b610337565b6001546100e49073ffffffffffffffffffffffffffffffffffffffff1681565b6100c261015d366004610471565b6103da565b60015473ffffffffffffffffffffffffffffffffffffffff16331461020d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840160405180910390fd5b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102b457600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff16331461035b57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf5910161032c565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103fe57600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b9060200161032c565b60006020828403121561048357600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146104a757600080fd5b939250505056fea2646970667358221220b6523287b342d9ec3fca18b09875ca00358cfbd586d642b53bb7ac292207227664736f6c634300080d0033"
};

// src/contracts/Authorization.ts
var Authorization = class extends import_eth_wallet.Contract {
  constructor(wallet, address) {
    super(wallet, address, Authorization_json_default.abi, Authorization_json_default.bytecode);
    this.assign();
  }
  deploy() {
    return this.__deploy();
  }
  parseAuthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Authorize").map((e) => this.decodeAuthorizeEvent(e));
  }
  decodeAuthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseDeauthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Deauthorize").map((e) => this.decodeDeauthorizeEvent(e));
  }
  decodeDeauthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseStartOwnershipTransferEvent(receipt) {
    return this.parseEvents(receipt, "StartOwnershipTransfer").map((e) => this.decodeStartOwnershipTransferEvent(e));
  }
  decodeStartOwnershipTransferEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseTransferOwnershipEvent(receipt) {
    return this.parseEvents(receipt, "TransferOwnership").map((e) => this.decodeTransferOwnershipEvent(e));
  }
  decodeTransferOwnershipEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  assign() {
    let isPermitted_call = async (param1) => {
      let result = await this.call("isPermitted", [param1]);
      return result;
    };
    this.isPermitted = isPermitted_call;
    let newOwner_call = async () => {
      let result = await this.call("newOwner");
      return result;
    };
    this.newOwner = newOwner_call;
    let owner_call = async () => {
      let result = await this.call("owner");
      return result;
    };
    this.owner = owner_call;
    let deny_send = async (user) => {
      let result = await this.send("deny", [user]);
      return result;
    };
    let deny_call = async (user) => {
      let result = await this.call("deny", [user]);
      return;
    };
    this.deny = Object.assign(deny_send, {
      call: deny_call
    });
    let permit_send = async (user) => {
      let result = await this.send("permit", [user]);
      return result;
    };
    let permit_call = async (user) => {
      let result = await this.call("permit", [user]);
      return;
    };
    this.permit = Object.assign(permit_send, {
      call: permit_call
    });
    let takeOwnership_send = async () => {
      let result = await this.send("takeOwnership");
      return result;
    };
    let takeOwnership_call = async () => {
      let result = await this.call("takeOwnership");
      return;
    };
    this.takeOwnership = Object.assign(takeOwnership_send, {
      call: takeOwnership_call
    });
    let transferOwnership_send = async (newOwner) => {
      let result = await this.send("transferOwnership", [newOwner]);
      return result;
    };
    let transferOwnership_call = async (newOwner) => {
      let result = await this.call("transferOwnership", [newOwner]);
      return;
    };
    this.transferOwnership = Object.assign(transferOwnership_send, {
      call: transferOwnership_call
    });
  }
};

// src/contracts/DomainInfo.ts
var import_eth_wallet2 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/DomainInfo.json.ts
var DomainInfo_json_default = {
  "abi": [
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "string", "name": "domainName", "type": "string" }, { "indexed": false, "internalType": "uint8", "name": "domainType", "type": "uint8" }, { "indexed": false, "internalType": "string", "name": "module", "type": "string" }], "name": "UpdateDomainInfo", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "string", "name": "domainName", "type": "string" }, { "indexed": false, "internalType": "string", "name": "module", "type": "string" }], "name": "UpdateDomainModule", "type": "event" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "string", "name": "", "type": "string" }], "name": "domainModule", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "string", "name": "", "type": "string" }], "name": "domainType", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "string", "name": "domainName", "type": "string" }], "name": "getDomainInfo", "outputs": [{ "internalType": "uint8", "name": "moduleType", "type": "uint8" }, { "internalType": "string", "name": "module", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "string", "name": "domainName", "type": "string" }, { "internalType": "uint8", "name": "moduleType", "type": "uint8" }, { "internalType": "string", "name": "module", "type": "string" }], "name": "updateDomainInfo", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "string", "name": "domainName", "type": "string" }, { "internalType": "string", "name": "module", "type": "string" }], "name": "updateDomainModule", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "608060405234801561001057600080fd5b50610a05806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80637709aac7116100505780637709aac7146100ab5780639d204278146100be578063a7b055b31461010f57600080fd5b8063351878501461006c5780633b80430f14610081575b600080fd5b61007f61007a36600461058a565b61012f565b005b61009461008f36600461063e565b610219565b6040516100a29291906106fc565b60405180910390f35b61007f6100b9366004610720565b61033e565b6100fd6100cc3660046107bb565b6001602090815260009283526040909220815180830184018051928152908401929093019190912091525460ff1681565b60405160ff90911681526020016100a2565b61012261011d3660046107bb565b6103d7565b6040516100a2919061089b565b336000908152602081905260409081902090518391839161015390899089906108b5565b90815260405190819003602001902061016d92909161048a565b503360009081526001602052604090819020905184919061019190889088906108b5565b908152604051908190036020018120805460ff939093167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff009093169290921790915533907f1dd5cf9af64bf7411cd2222bc84149ef8841a58465c912adc512580b717b03359061020a908890889088908890889061090e565b60405180910390a25050505050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526001602052604080822090516060919061025290869086906108b5565b9081526040805191829003602090810183205473ffffffffffffffffffffffffffffffffffffffff891660009081529182905291902060ff90911693509061029d90869086906108b5565b908152602001604051809103902080546102b69061094a565b80601f01602080910402602001604051908101604052809291908181526020018280546102e29061094a565b801561032f5780601f106103045761010080835404028352916020019161032f565b820191906000526020600020905b81548152906001019060200180831161031257829003601f168201915b50505050509050935093915050565b336000908152602081905260409081902090518391839161036290889088906108b5565b90815260405190819003602001902061037c92909161048a565b503373ffffffffffffffffffffffffffffffffffffffff167f8fdcf277ae4a11f2263407e04c5a0ca73a95a5143412f6701a3803ec74e8e68e858585856040516103c9949392919061099d565b60405180910390a250505050565b60006020818152928152604090208151808301840180519281529084019290930191909120915280546104099061094a565b80601f01602080910402602001604051908101604052809291908181526020018280546104359061094a565b80156104825780601f1061045757610100808354040283529160200191610482565b820191906000526020600020905b81548152906001019060200180831161046557829003601f168201915b505050505081565b8280546104969061094a565b90600052602060002090601f0160209004810192826104b8576000855561051c565b82601f106104ef578280017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082351617855561051c565b8280016001018555821561051c579182015b8281111561051c578235825591602001919060010190610501565b5061052892915061052c565b5090565b5b80821115610528576000815560010161052d565b60008083601f84011261055357600080fd5b50813567ffffffffffffffff81111561056b57600080fd5b60208301915083602082850101111561058357600080fd5b9250929050565b6000806000806000606086880312156105a257600080fd5b853567ffffffffffffffff808211156105ba57600080fd5b6105c689838a01610541565b90975095506020880135915060ff821682146105e157600080fd5b909350604087013590808211156105f757600080fd5b5061060488828901610541565b969995985093965092949392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461063957600080fd5b919050565b60008060006040848603121561065357600080fd5b61065c84610615565b9250602084013567ffffffffffffffff81111561067857600080fd5b61068486828701610541565b9497909650939450505050565b6000815180845260005b818110156106b75760208185018101518683018201520161069b565b818111156106c9576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60ff831681526040602082015260006107186040830184610691565b949350505050565b6000806000806040858703121561073657600080fd5b843567ffffffffffffffff8082111561074e57600080fd5b61075a88838901610541565b9096509450602087013591508082111561077357600080fd5b5061078087828801610541565b95989497509550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080604083850312156107ce57600080fd5b6107d783610615565b9150602083013567ffffffffffffffff808211156107f457600080fd5b818501915085601f83011261080857600080fd5b81358181111561081a5761081a61078c565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156108605761086061078c565b8160405282815288602084870101111561087957600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6020815260006108ae6020830184610691565b9392505050565b8183823760009101908152919050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b6060815260006109226060830187896108c5565b60ff86166020840152828103604084015261093e8185876108c5565b98975050505050505050565b600181811c9082168061095e57607f821691505b602082108103610997577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b6040815260006109b16040830186886108c5565b82810360208401526109c48185876108c5565b97965050505050505056fea26469706673582212201a2dbdb25934ef30df3992b7cd72aae353159aca9ab69b4cb7da255ab7eec03f64736f6c634300080d0033"
};

// src/contracts/DomainInfo.ts
var DomainInfo = class extends import_eth_wallet2.Contract {
  constructor(wallet, address) {
    super(wallet, address, DomainInfo_json_default.abi, DomainInfo_json_default.bytecode);
    this.assign();
  }
  deploy() {
    return this.__deploy();
  }
  parseUpdateDomainInfoEvent(receipt) {
    return this.parseEvents(receipt, "UpdateDomainInfo").map((e) => this.decodeUpdateDomainInfoEvent(e));
  }
  decodeUpdateDomainInfoEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      domainName: result.domainName,
      domainType: new import_eth_wallet2.BigNumber(result.domainType),
      module: result.module,
      _event: event
    };
  }
  parseUpdateDomainModuleEvent(receipt) {
    return this.parseEvents(receipt, "UpdateDomainModule").map((e) => this.decodeUpdateDomainModuleEvent(e));
  }
  decodeUpdateDomainModuleEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      domainName: result.domainName,
      module: result.module,
      _event: event
    };
  }
  assign() {
    let domainModuleParams = (params) => [params.param1, params.param2];
    let domainModule_call = async (params) => {
      let result = await this.call("domainModule", domainModuleParams(params));
      return result;
    };
    this.domainModule = domainModule_call;
    let domainTypeParams = (params) => [params.param1, params.param2];
    let domainType_call = async (params) => {
      let result = await this.call("domainType", domainTypeParams(params));
      return new import_eth_wallet2.BigNumber(result);
    };
    this.domainType = domainType_call;
    let getDomainInfoParams = (params) => [params.owner, params.domainName];
    let getDomainInfo_call = async (params) => {
      let result = await this.call("getDomainInfo", getDomainInfoParams(params));
      return {
        moduleType: new import_eth_wallet2.BigNumber(result.moduleType),
        module: result.module
      };
    };
    this.getDomainInfo = getDomainInfo_call;
    let updateDomainInfoParams = (params) => [params.domainName, import_eth_wallet2.Utils.toString(params.moduleType), params.module];
    let updateDomainInfo_send = async (params) => {
      let result = await this.send("updateDomainInfo", updateDomainInfoParams(params));
      return result;
    };
    let updateDomainInfo_call = async (params) => {
      let result = await this.call("updateDomainInfo", updateDomainInfoParams(params));
      return;
    };
    this.updateDomainInfo = Object.assign(updateDomainInfo_send, {
      call: updateDomainInfo_call
    });
    let updateDomainModuleParams = (params) => [params.domainName, params.module];
    let updateDomainModule_send = async (params) => {
      let result = await this.send("updateDomainModule", updateDomainModuleParams(params));
      return result;
    };
    let updateDomainModule_call = async (params) => {
      let result = await this.call("updateDomainModule", updateDomainModuleParams(params));
      return;
    };
    this.updateDomainModule = Object.assign(updateDomainModule_send, {
      call: updateDomainModule_call
    });
  }
};

// src/contracts/ModuleInfo.ts
var import_eth_wallet3 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/ModuleInfo.json.ts
var ModuleInfo_json_default = {
  "abi": [
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }, { "indexed": true, "internalType": "string", "name": "version", "type": "string" }, { "indexed": true, "internalType": "bytes32", "name": "currVersionHash", "type": "bytes32" }], "name": "CurrentVersion", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "string", "name": "packageName", "type": "string" }, { "indexed": true, "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }], "name": "NewPackage", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }, { "indexed": true, "internalType": "string", "name": "version", "type": "string" }, { "indexed": false, "internalType": "string", "name": "uri", "type": "string" }], "name": "NewRelease", "type": "event" },
    { "inputs": [{ "internalType": "string", "name": "packageName", "type": "string" }], "name": "addPackage", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }, { "internalType": "string", "name": "version", "type": "string" }, { "internalType": "string", "name": "uri", "type": "string" }, { "internalType": "bool", "name": "pulishRelease", "type": "bool" }], "name": "addRelease", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "getAllOwnerPackages", "outputs": [{ "internalType": "string[]", "name": "packageNames", "type": "string[]" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "getAllOwnerPackagesAndHash", "outputs": [{ "internalType": "string[]", "name": "packageNames", "type": "string[]" }, { "internalType": "bytes32[]", "name": "packageHashes", "type": "bytes32[]" }, { "components": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "string", "name": "currVersion", "type": "string" }, { "internalType": "bytes32", "name": "currVersionHash", "type": "bytes32" }], "internalType": "struct ModuleInfo.Package[]", "name": "packages", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }], "name": "getAllpackageReleases", "outputs": [{ "components": [{ "internalType": "string", "name": "version", "type": "string" }, { "internalType": "string", "name": "uri", "type": "string" }], "internalType": "struct ModuleInfo.Release[]", "name": "releases", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "from", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "getBatchOwnerPackages", "outputs": [{ "internalType": "string[]", "name": "packageNames", "type": "string[]" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "from", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "getBatchOwnerPackagesAndHash", "outputs": [{ "internalType": "string[]", "name": "packageNames", "type": "string[]" }, { "internalType": "bytes32[]", "name": "packageHashes", "type": "bytes32[]" }, { "components": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "string", "name": "currVersion", "type": "string" }, { "internalType": "bytes32", "name": "currVersionHash", "type": "bytes32" }], "internalType": "struct ModuleInfo.Package[]", "name": "packages", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }, { "internalType": "uint256", "name": "from", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "getBatchpackageReleases", "outputs": [{ "components": [{ "internalType": "string", "name": "version", "type": "string" }, { "internalType": "string", "name": "uri", "type": "string" }], "internalType": "struct ModuleInfo.Release[]", "name": "releases", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "ownerPackages", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "string", "name": "", "type": "string" }], "name": "ownerPackagesIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "ownerPackagesLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "packageProperties", "outputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "string", "name": "currVersion", "type": "string" }, { "internalType": "bytes32", "name": "currVersionHash", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "packageReleases", "outputs": [{ "internalType": "string", "name": "version", "type": "string" }, { "internalType": "string", "name": "uri", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }, { "internalType": "string", "name": "", "type": "string" }], "name": "packageReleasesIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }], "name": "packageReleasesLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "packageHash", "type": "bytes32" }, { "internalType": "string", "name": "version", "type": "string" }], "name": "setCurrentVersion", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "608060405234801561001057600080fd5b50612688806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80636b13706411610097578063b8b921e611610066578063b8b921e614610274578063bcb6a21a146102b0578063c7ecf2be146102d0578063e834198e1461030c57600080fd5b80636b1370641461020d5780638953480314610220578063ae0efa5914610240578063b40eb9a81461025357600080fd5b806342b4fb70116100d357806342b4fb701461019857806347cebd3e146101ab578063537eb5e2146101cd57806357eae14c146101ed57600080fd5b80630ace8c9a1461010557806323d7cd791461011a57806330bc5ed4146101635780633b3aa3c514610176575b600080fd5b610118610113366004611cbf565b61031f565b005b610150610128366004611d2a565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205490565b6040519081526020015b60405180910390f35b610118610171366004611d4c565b610520565b610189610184366004611ddd565b6107ea565b60405161015a93929190611efc565b6101186101a6366004611ffb565b610bf8565b6101be6101b9366004612047565b610d74565b60405161015a93929190612060565b6101e06101db36600461209f565b610e36565b60405161015a91906120cb565b6102006101fb36600461216e565b611076565b60405161015a9190612198565b61018961021b366004611d2a565b61112f565b61023361022e366004611ddd565b6114a9565b60405161015a91906121ab565b61023361024e366004611d2a565b611652565b6102666102613660046121be565b61174e565b60405161015a9291906121e0565b6101506102823660046122e8565b6002602090815260009283526040909220815180830184018051928152908401929093019190912091525481565b6101506102be366004612047565b60009081526003602052604090205490565b6101506102de366004612336565b6004602090815260009283526040909220815180830184018051928152908401929093019190912091525481565b6101e061031a366004612047565b61189f565b3360009081526001602052604090208054158061039757503360009081526002602052604090819020905161039791839161035d9087908790612367565b9081526020016040518091039020548154811061037c5761037c612377565b906000526020600020018484611a2a9290919263ffffffff16565b610402576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f7061636b61676520616c7265616479206578697374730000000000000000000060448201526064015b60405180910390fd5b8054336000908152600260205260409081902090516104249086908690612367565b9081526040516020918190038201902091909155815460018101835560008381529190912061045591018484611b4b565b50600033848460405160200161046d939291906123a6565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152828252805160209182012060008181529182905291902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001633179055915081906104e89086908690612367565b6040519081900381209033907f579649d2aa6da55b0268fdeb659787ece76b47a589d697e308c7ebf945f9c94f90600090a450505050565b60008681526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1633146105ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6e6f742066726f6d207061636b616765206f776e65720000000000000000000060448201526064016103f9565b600086815260036020526040902080541580610623575061062381600460008a815260200190815260200160002088886040516105eb929190612367565b9081526020016040518091039020548154811061060a5761060a612377565b6000918252602090912088918891600290910201611a2a565b610689576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f76657273696f6e20616c7265616479206578697374730000000000000000000060448201526064016103f9565b80546000888152600460205260409081902090516106aa9089908990612367565b908152604080519182900360209081018320939093556060601f8901849004909302820183018152810187815283928291908a908a9081908501838280828437600092019190915250505090825250604080516020601f8901819004810282018101909252878152918101919088908890819084018382808284376000920182905250939094525050835460018101855593815260209081902083518051949560020290910193610762935084929190910190611bed565b50602082810151805161077b9260018501920190611bed565b505050858560405161078e929190612367565b6040518091039020877fb9746d38e4663162c7b0943efcc013d2012228d3e30313994da19f6a5a141ee486866040516107c89291906123e5565b60405180910390a381156107e1576107e1878787611a86565b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526001602052604090205460609081908190806108228688612461565b1115610835576108328682612479565b94505b8467ffffffffffffffff81111561084e5761084e61220e565b60405190808252806020026020018201604052801561088157816020015b606081526020019060019003908161086c5790505b5093508467ffffffffffffffff81111561089d5761089d61220e565b6040519080825280602002602001820160405280156108c6578160200160208202803683370190505b5092508467ffffffffffffffff8111156108e2576108e261220e565b60405190808252806020026020018201604052801561093257816020015b604080516060808201835260008083526020830191909152918101919091528152602001906001900390816109005790505b50915060005b85811015610bed5773ffffffffffffffffffffffffffffffffffffffff8816600090815260016020526040902080548890811061097757610977612377565b90600052602060002001805461098c90612490565b80601f01602080910402602001604051908101604052809291908181526020018280546109b890612490565b8015610a055780601f106109da57610100808354040283529160200191610a05565b820191906000526020600020905b8154815290600101906020018083116109e857829003601f168201915b5050505050858281518110610a1c57610a1c612377565b602002602001018190525087858281518110610a3a57610a3a612377565b6020026020010151604051602001610a539291906124e3565b60405160208183030381529060405280519060200120848281518110610a7b57610a7b612377565b602002602001018181525050600080858381518110610a9c57610a9c612377565b602002602001015181526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182018054610b2390612490565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4f90612490565b8015610b9c5780601f10610b7157610100808354040283529160200191610b9c565b820191906000526020600020905b815481529060010190602001808311610b7f57829003601f168201915b50505050508152602001600282015481525050838281518110610bc157610bc1612377565b60200260200101819052508680610bd79061252e565b9750508080610be59061252e565b915050610938565b505093509350939050565b60008381526020819052604090205473ffffffffffffffffffffffffffffffffffffffff163314610c85576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6e6f742066726f6d207061636b616765206f776e65720000000000000000000060448201526064016103f9565b6000838152600360205260409020805415801590610cfd5750610cfd81600460008781526020019081526020016000208585604051610cc5929190612367565b90815260200160405180910390205481548110610ce457610ce4612377565b6000918252602090912085918591600290910201611a2a565b610d63576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f76657273696f6e206e6f7420657869737473000000000000000000000000000060448201526064016103f9565b610d6e848484611a86565b50505050565b6000602081905290815260409020805460018201805473ffffffffffffffffffffffffffffffffffffffff9092169291610dad90612490565b80601f0160208091040260200160405190810160405280929190818152602001828054610dd990612490565b8015610e265780601f10610dfb57610100808354040283529160200191610e26565b820191906000526020600020905b815481529060010190602001808311610e0957829003601f168201915b5050505050908060020154905083565b60008381526003602052604090205460609080610e538486612461565b1115610e6657610e638482612479565b92505b8267ffffffffffffffff811115610e7f57610e7f61220e565b604051908082528060200260200182016040528015610ec457816020015b6040805180820190915260608082526020820152815260200190600190039081610e9d5790505b50915060005b8381101561106d576000868152600360205260409020805486908110610ef257610ef2612377565b9060005260206000209060020201604051806040016040529081600082018054610f1b90612490565b80601f0160208091040260200160405190810160405280929190818152602001828054610f4790612490565b8015610f945780601f10610f6957610100808354040283529160200191610f94565b820191906000526020600020905b815481529060010190602001808311610f7757829003601f168201915b50505050508152602001600182018054610fad90612490565b80601f0160208091040260200160405190810160405280929190818152602001828054610fd990612490565b80156110265780601f10610ffb57610100808354040283529160200191611026565b820191906000526020600020905b81548152906001019060200180831161100957829003601f168201915b50505050508152505083828151811061104157611041612377565b602002602001018190525084806110579061252e565b95505080806110659061252e565b915050610eca565b50509392505050565b6001602052816000526040600020818154811061109257600080fd5b906000526020600020016000915091505080546110ae90612490565b80601f01602080910402602001604051908101604052809291908181526020018280546110da90612490565b80156111275780601f106110fc57610100808354040283529160200191611127565b820191906000526020600020905b81548152906001019060200180831161110a57829003601f168201915b505050505081565b73ffffffffffffffffffffffffffffffffffffffff811660009081526001602090815260408083208054825181850281018501909352808352606094859485949392919084015b8282101561122257838290600052602060002001805461119590612490565b80601f01602080910402602001604051908101604052809291908181526020018280546111c190612490565b801561120e5780601f106111e35761010080835404028352916020019161120e565b820191906000526020600020905b8154815290600101906020018083116111f157829003601f168201915b505050505081526020019060010190611176565b505082519295508291505067ffffffffffffffff8111156112455761124561220e565b60405190808252806020026020018201604052801561126e578160200160208202803683370190505b5092508067ffffffffffffffff81111561128a5761128a61220e565b6040519080825280602002602001820160405280156112da57816020015b604080516060808201835260008083526020830191909152918101919091528152602001906001900390816112a85790505b50915060005b818110156114a057858582815181106112fb576112fb612377565b60200260200101516040516020016113149291906124e3565b6040516020818303038152906040528051906020012084828151811061133c5761133c612377565b60200260200101818152505060008085838151811061135d5761135d612377565b602002602001015181526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546113e490612490565b80601f016020809104026020016040519081016040528092919081815260200182805461141090612490565b801561145d5780601f106114325761010080835404028352916020019161145d565b820191906000526020600020905b81548152906001019060200180831161144057829003601f168201915b5050505050815260200160028201548152505083828151811061148257611482612377565b602002602001018190525080806114989061252e565b9150506112e0565b50509193909250565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260016020526040902054606090806114dd8486612461565b11156114f0576114ed8482612479565b92505b8267ffffffffffffffff8111156115095761150961220e565b60405190808252806020026020018201604052801561153c57816020015b60608152602001906001900390816115275790505b50915060005b8381101561106d5773ffffffffffffffffffffffffffffffffffffffff8616600090815260016020526040902080548690811061158157611581612377565b90600052602060002001805461159690612490565b80601f01602080910402602001604051908101604052809291908181526020018280546115c290612490565b801561160f5780601f106115e45761010080835404028352916020019161160f565b820191906000526020600020905b8154815290600101906020018083116115f257829003601f168201915b505050505083828151811061162657611626612377565b6020026020010181905250848061163c9061252e565b955050808061164a9061252e565b915050611542565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600160209081526040808320805482518185028101850190935280835260609492939192909184015b828210156117435783829060005260206000200180546116b690612490565b80601f01602080910402602001604051908101604052809291908181526020018280546116e290612490565b801561172f5780601f106117045761010080835404028352916020019161172f565b820191906000526020600020905b81548152906001019060200180831161171257829003601f168201915b505050505081526020019060010190611697565b505050509050919050565b6003602052816000526040600020818154811061176a57600080fd5b90600052602060002090600202016000915091505080600001805461178e90612490565b80601f01602080910402602001604051908101604052809291908181526020018280546117ba90612490565b80156118075780601f106117dc57610100808354040283529160200191611807565b820191906000526020600020905b8154815290600101906020018083116117ea57829003601f168201915b50505050509080600101805461181c90612490565b80601f016020809104026020016040519081016040528092919081815260200182805461184890612490565b80156118955780601f1061186a57610100808354040283529160200191611895565b820191906000526020600020905b81548152906001019060200180831161187857829003601f168201915b5050505050905082565b606060036000838152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015611743578382906000526020600020906002020160405180604001604052908160008201805461190790612490565b80601f016020809104026020016040519081016040528092919081815260200182805461193390612490565b80156119805780601f1061195557610100808354040283529160200191611980565b820191906000526020600020905b81548152906001019060200180831161196357829003601f168201915b5050505050815260200160018201805461199990612490565b80601f01602080910402602001604051908101604052809291908181526020018280546119c590612490565b8015611a125780601f106119e757610100808354040283529160200191611a12565b820191906000526020600020905b8154815290600101906020018083116119f557829003601f168201915b505050505081525050815260200190600101906118d4565b600081604051602001611a3d9190612566565b604051602081830303815290604052805190602001208484604051602001611a66929190612367565b604051602081830303815290604052805190602001201490509392505050565b6000838152602081905260409020611aa2906001018383611b4b565b506000838383604051602001611aba93929190612638565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152828252805160209182012060008881529182905291902060020181905591508190611b139085908590612367565b6040519081900381209086907f571fbb5167d8bdf75368372c7ff4760e0f3f94fd3ddc5b7dda1735fc5eca793e90600090a450505050565b828054611b5790612490565b90600052602060002090601f016020900481019282611b795760008555611bdd565b82601f10611bb0578280017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00823516178555611bdd565b82800160010185558215611bdd579182015b82811115611bdd578235825591602001919060010190611bc2565b50611be9929150611c61565b5090565b828054611bf990612490565b90600052602060002090601f016020900481019282611c1b5760008555611bdd565b82601f10611c3457805160ff1916838001178555611bdd565b82800160010185558215611bdd579182015b82811115611bdd578251825591602001919060010190611c46565b5b80821115611be95760008155600101611c62565b60008083601f840112611c8857600080fd5b50813567ffffffffffffffff811115611ca057600080fd5b602083019150836020828501011115611cb857600080fd5b9250929050565b60008060208385031215611cd257600080fd5b823567ffffffffffffffff811115611ce957600080fd5b611cf585828601611c76565b90969095509350505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611d2557600080fd5b919050565b600060208284031215611d3c57600080fd5b611d4582611d01565b9392505050565b60008060008060008060808789031215611d6557600080fd5b86359550602087013567ffffffffffffffff80821115611d8457600080fd5b611d908a838b01611c76565b90975095506040890135915080821115611da957600080fd5b50611db689828a01611c76565b90945092505060608701358015158114611dcf57600080fd5b809150509295509295509295565b600080600060608486031215611df257600080fd5b611dfb84611d01565b95602085013595506040909401359392505050565b60005b83811015611e2b578181015183820152602001611e13565b83811115610d6e5750506000910152565b60008151808452611e54816020860160208601611e10565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082825180855260208086019550808260051b84010181860160005b84811015611eef577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0868403018952611edd838351611e3c565b98840198925090830190600101611ea3565b5090979650505050505050565b60006060808352611f0f81840187611e86565b83810360208581019190915286518083528782019282019060005b81811015611f4657845183529383019391830191600101611f2a565b505060409250858103838701528087518083528383019150838160051b840101848a0160005b83811015611fe9577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0868403018552815173ffffffffffffffffffffffffffffffffffffffff8151168452878101518a89860152611fcc8b860182611e3c565b918a0151948a019490945294870194925090860190600101611f6c565b50909c9b505050505050505050505050565b60008060006040848603121561201057600080fd5b83359250602084013567ffffffffffffffff81111561202e57600080fd5b61203a86828701611c76565b9497909650939450505050565b60006020828403121561205957600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff8416815260606020820152600061208f6060830185611e3c565b9050826040830152949350505050565b6000806000606084860312156120b457600080fd5b505081359360208301359350604090920135919050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b83811015612160577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08984030185528151805187855261213488860182611e3c565b91890151858303868b015291905061214c8183611e3c565b9689019694505050908601906001016120f2565b509098975050505050505050565b6000806040838503121561218157600080fd5b61218a83611d01565b946020939093013593505050565b602081526000611d456020830184611e3c565b602081526000611d456020830184611e86565b600080604083850312156121d157600080fd5b50508035926020909101359150565b6040815260006121f36040830185611e3c565b82810360208401526122058185611e3c565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261224e57600080fd5b813567ffffffffffffffff808211156122695761226961220e565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156122af576122af61220e565b816040528381528660208588010111156122c857600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156122fb57600080fd5b61230483611d01565b9150602083013567ffffffffffffffff81111561232057600080fd5b61232c8582860161223d565b9150509250929050565b6000806040838503121561234957600080fd5b82359150602083013567ffffffffffffffff81111561232057600080fd5b8183823760009101908152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008460601b168152818360148301376000910160140190815292915050565b60208152816020820152818360408301376000818301604090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000821982111561247457612474612432565b500190565b60008282101561248b5761248b612432565b500390565b600181811c908216806124a457607f821691505b6020821081036124dd577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008360601b16815260008251612520816014850160208701611e10565b919091016014019392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361255f5761255f612432565b5060010190565b600080835481600182811c91508083168061258257607f831692505b602080841082036125ba577f4e487b710000000000000000000000000000000000000000000000000000000086526022600452602486fd5b8180156125ce57600181146125fd5761262a565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0086168952848901965061262a565b60008a81526020902060005b868110156126225781548b820152908501908301612609565b505084890196505b509498975050505050505050565b83815281836020830137600091016020019081529291505056fea264697066735822122031d0aef7642ea469eae6c6a7a10a95fe9a52019c1313db7d3b579d79fb10859a64736f6c634300080d0033"
};

// src/contracts/ModuleInfo.ts
var ModuleInfo = class extends import_eth_wallet3.Contract {
  constructor(wallet, address) {
    super(wallet, address, ModuleInfo_json_default.abi, ModuleInfo_json_default.bytecode);
    this.assign();
  }
  deploy() {
    return this.__deploy();
  }
  parseCurrentVersionEvent(receipt) {
    return this.parseEvents(receipt, "CurrentVersion").map((e) => this.decodeCurrentVersionEvent(e));
  }
  decodeCurrentVersionEvent(event) {
    let result = event.data;
    return {
      packageHash: result.packageHash,
      version: result.version,
      currVersionHash: result.currVersionHash,
      _event: event
    };
  }
  parseNewPackageEvent(receipt) {
    return this.parseEvents(receipt, "NewPackage").map((e) => this.decodeNewPackageEvent(e));
  }
  decodeNewPackageEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      packageName: result.packageName,
      packageHash: result.packageHash,
      _event: event
    };
  }
  parseNewReleaseEvent(receipt) {
    return this.parseEvents(receipt, "NewRelease").map((e) => this.decodeNewReleaseEvent(e));
  }
  decodeNewReleaseEvent(event) {
    let result = event.data;
    return {
      packageHash: result.packageHash,
      version: result.version,
      uri: result.uri,
      _event: event
    };
  }
  assign() {
    let getAllOwnerPackages_call = async (owner) => {
      let result = await this.call("getAllOwnerPackages", [owner]);
      return result;
    };
    this.getAllOwnerPackages = getAllOwnerPackages_call;
    let getAllOwnerPackagesAndHash_call = async (owner) => {
      let result = await this.call("getAllOwnerPackagesAndHash", [owner]);
      return {
        packageNames: result.packageNames,
        packageHashes: result.packageHashes,
        packages: result.packages.map((e) => ({
          owner: e.owner,
          currVersion: e.currVersion,
          currVersionHash: e.currVersionHash
        }))
      };
    };
    this.getAllOwnerPackagesAndHash = getAllOwnerPackagesAndHash_call;
    let getAllpackageReleases_call = async (packageHash) => {
      let result = await this.call("getAllpackageReleases", [import_eth_wallet3.Utils.stringToBytes32(packageHash)]);
      return result.map((e) => ({
        version: e.version,
        uri: e.uri
      }));
    };
    this.getAllpackageReleases = getAllpackageReleases_call;
    let getBatchOwnerPackagesParams = (params) => [params.owner, import_eth_wallet3.Utils.toString(params.from), import_eth_wallet3.Utils.toString(params.length)];
    let getBatchOwnerPackages_call = async (params) => {
      let result = await this.call("getBatchOwnerPackages", getBatchOwnerPackagesParams(params));
      return result;
    };
    this.getBatchOwnerPackages = getBatchOwnerPackages_call;
    let getBatchOwnerPackagesAndHashParams = (params) => [params.owner, import_eth_wallet3.Utils.toString(params.from), import_eth_wallet3.Utils.toString(params.length)];
    let getBatchOwnerPackagesAndHash_call = async (params) => {
      let result = await this.call("getBatchOwnerPackagesAndHash", getBatchOwnerPackagesAndHashParams(params));
      return {
        packageNames: result.packageNames,
        packageHashes: result.packageHashes,
        packages: result.packages.map((e) => ({
          owner: e.owner,
          currVersion: e.currVersion,
          currVersionHash: e.currVersionHash
        }))
      };
    };
    this.getBatchOwnerPackagesAndHash = getBatchOwnerPackagesAndHash_call;
    let getBatchpackageReleasesParams = (params) => [import_eth_wallet3.Utils.stringToBytes32(params.packageHash), import_eth_wallet3.Utils.toString(params.from), import_eth_wallet3.Utils.toString(params.length)];
    let getBatchpackageReleases_call = async (params) => {
      let result = await this.call("getBatchpackageReleases", getBatchpackageReleasesParams(params));
      return result.map((e) => ({
        version: e.version,
        uri: e.uri
      }));
    };
    this.getBatchpackageReleases = getBatchpackageReleases_call;
    let ownerPackagesParams = (params) => [params.param1, import_eth_wallet3.Utils.toString(params.param2)];
    let ownerPackages_call = async (params) => {
      let result = await this.call("ownerPackages", ownerPackagesParams(params));
      return result;
    };
    this.ownerPackages = ownerPackages_call;
    let ownerPackagesIndexParams = (params) => [params.param1, params.param2];
    let ownerPackagesIndex_call = async (params) => {
      let result = await this.call("ownerPackagesIndex", ownerPackagesIndexParams(params));
      return new import_eth_wallet3.BigNumber(result);
    };
    this.ownerPackagesIndex = ownerPackagesIndex_call;
    let ownerPackagesLength_call = async (owner) => {
      let result = await this.call("ownerPackagesLength", [owner]);
      return new import_eth_wallet3.BigNumber(result);
    };
    this.ownerPackagesLength = ownerPackagesLength_call;
    let packageProperties_call = async (param1) => {
      let result = await this.call("packageProperties", [import_eth_wallet3.Utils.stringToBytes32(param1)]);
      return {
        owner: result.owner,
        currVersion: result.currVersion,
        currVersionHash: result.currVersionHash
      };
    };
    this.packageProperties = packageProperties_call;
    let packageReleasesParams = (params) => [import_eth_wallet3.Utils.stringToBytes32(params.param1), import_eth_wallet3.Utils.toString(params.param2)];
    let packageReleases_call = async (params) => {
      let result = await this.call("packageReleases", packageReleasesParams(params));
      return {
        version: result.version,
        uri: result.uri
      };
    };
    this.packageReleases = packageReleases_call;
    let packageReleasesIndexParams = (params) => [import_eth_wallet3.Utils.stringToBytes32(params.param1), params.param2];
    let packageReleasesIndex_call = async (params) => {
      let result = await this.call("packageReleasesIndex", packageReleasesIndexParams(params));
      return new import_eth_wallet3.BigNumber(result);
    };
    this.packageReleasesIndex = packageReleasesIndex_call;
    let packageReleasesLength_call = async (packageHash) => {
      let result = await this.call("packageReleasesLength", [import_eth_wallet3.Utils.stringToBytes32(packageHash)]);
      return new import_eth_wallet3.BigNumber(result);
    };
    this.packageReleasesLength = packageReleasesLength_call;
    let addPackage_send = async (packageName) => {
      let result = await this.send("addPackage", [packageName]);
      return result;
    };
    let addPackage_call = async (packageName) => {
      let result = await this.call("addPackage", [packageName]);
      return;
    };
    this.addPackage = Object.assign(addPackage_send, {
      call: addPackage_call
    });
    let addReleaseParams = (params) => [import_eth_wallet3.Utils.stringToBytes32(params.packageHash), params.version, params.uri, params.pulishRelease];
    let addRelease_send = async (params) => {
      let result = await this.send("addRelease", addReleaseParams(params));
      return result;
    };
    let addRelease_call = async (params) => {
      let result = await this.call("addRelease", addReleaseParams(params));
      return;
    };
    this.addRelease = Object.assign(addRelease_send, {
      call: addRelease_call
    });
    let setCurrentVersionParams = (params) => [import_eth_wallet3.Utils.stringToBytes32(params.packageHash), params.version];
    let setCurrentVersion_send = async (params) => {
      let result = await this.send("setCurrentVersion", setCurrentVersionParams(params));
      return result;
    };
    let setCurrentVersion_call = async (params) => {
      let result = await this.call("setCurrentVersion", setCurrentVersionParams(params));
      return;
    };
    this.setCurrentVersion = Object.assign(setCurrentVersion_send, {
      call: setCurrentVersion_call
    });
  }
};

// src/contracts/ProjectInfo.ts
var import_eth_wallet4 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/ProjectInfo.json.ts
var ProjectInfo_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "address", "name": "_validator", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "admin", "type": "address" }], "name": "AddAdmin", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "NewPackage", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "packageVersionId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "version", "type": "uint256" }], "name": "NewPackageVersion", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }], "name": "NewProject", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "projectVersionIdx", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "NewProjectVersion", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "admin", "type": "address" }], "name": "RemoveAdmin", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "packageVersionId", "type": "uint256" }, { "indexed": false, "internalType": "enum ProjectInfo.PackageVersionStatus", "name": "status", "type": "uint8" }], "name": "SetPackageVersionStatus", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "projectVersionIdx", "type": "uint256" }], "name": "SetProjectCurrentVersion", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "TransferProjectOwnership", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "UpdatePackageIpfsCid", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "validator", "type": "address" }], "name": "UpdateValidator", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectVersionIdx", "type": "uint256" }, { "indexed": false, "internalType": "enum ProjectInfo.ProjectStatus", "name": "status", "type": "uint8" }], "name": "Validate", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "projectVersionIdx", "type": "uint256" }], "name": "VoidProjectVersion", "type": "event" },
    { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "address", "name": "admin", "type": "address" }], "name": "addProjectAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "latestAuditedPackageVersion", "outputs": [{ "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "internalType": "uint256", "name": "version", "type": "uint256" }, { "internalType": "enum ProjectInfo.PackageVersionStatus", "name": "status", "type": "uint8" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "newPackage", "outputs": [{ "internalType": "uint256", "name": "packageId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "uint256", "name": "packageId", "type": "uint256" }], "name": "newPackageVersion", "outputs": [{ "internalType": "uint256", "name": "packageVersionId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "newProject", "outputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "newProjectVersion", "outputs": [{ "internalType": "uint256", "name": "versionIdx", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "ownersProjects", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "ownersProjectsInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "ownersProjectsLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "packageVersions", "outputs": [{ "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "internalType": "uint256", "name": "version", "type": "uint256" }, { "internalType": "enum ProjectInfo.PackageVersionStatus", "name": "status", "type": "uint8" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "packageVersionsLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "packageVersionsList", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "packageId", "type": "uint256" }], "name": "packageVersionsListLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "packages", "outputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "uint256", "name": "currVersionIndex", "type": "uint256" }, { "internalType": "enum ProjectInfo.PackageStatus", "name": "status", "type": "uint8" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "packagesLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectAdmin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "projectAdminInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }], "name": "projectAdminLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "projectCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectCurrentVersion", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectNewOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectPackages", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectPackagesInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }], "name": "projectPackagesLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectVersionList", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }], "name": "projectVersionListLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "projectVersions", "outputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "uint256", "name": "version", "type": "uint256" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }, { "internalType": "enum ProjectInfo.ProjectStatus", "name": "status", "type": "uint8" }, { "internalType": "uint64", "name": "lastModifiedDate", "type": "uint64" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "string", "name": "", "type": "string" }], "name": "projectVersionsInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "projectVersionsLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "address", "name": "admin", "type": "address" }], "name": "removeProjectAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "packageVersionId", "type": "uint256" }], "name": "setPackageVersionToAuditFailed", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "packageVersionId", "type": "uint256" }], "name": "setPackageVersionToAuditPassed", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "packageVersionId", "type": "uint256" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "setPackageVersionToAuditing", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "uint256", "name": "versionIdx", "type": "uint256" }], "name": "setProjectCurrentVersion", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }], "name": "takeProjectOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferProjectOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "uint256", "name": "packageId", "type": "uint256" }, { "internalType": "string", "name": "ipfsCid", "type": "string" }], "name": "updatePackageIpfsCid", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "_validator", "type": "address" }], "name": "updateValidator", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "projectVersionIdx", "type": "uint256" }, { "internalType": "enum ProjectInfo.ProjectStatus", "name": "status", "type": "uint8" }], "name": "validateProject", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "validator", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "packageVersionId", "type": "uint256" }], "name": "voidPackageVersion", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "uint256", "name": "versionIdx", "type": "uint256" }], "name": "voidProjectVersion", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "60806040523480156200001157600080fd5b506040516200397f3803806200397f833981016040819052620000349162000068565b60008054336001600160a01b031991821617909155601480549091166001600160a01b03929092169190911790556200009a565b6000602082840312156200007b57600080fd5b81516001600160a01b03811681146200009357600080fd5b9392505050565b6138d580620000aa6000396000f3fe608060405234801561001057600080fd5b50600436106103365760003560e01c80638da5cb5b116101b2578063c9d6b13d116100f9578063dba06ed6116100a2578063f2fde38b1161007c578063f2fde38b146107f7578063f7f438361461080a578063fb10856d14610812578063fc7a86ae1461083d57600080fd5b8063dba06ed6146107be578063dfecbd8e146107d1578063e1cac57b146107e457600080fd5b8063d0f9ac35116100d3578063d0f9ac3514610778578063d4ee1d901461078b578063d809dba1146107ab57600080fd5b8063c9d6b13d1461070f578063cb2d95ae14610722578063ccbeffc21461074257600080fd5b8063abcfb1901161015b578063c107979211610135578063c1079792146106b9578063c113aeb0146106d9578063c216212a146106ec57600080fd5b8063abcfb19014610673578063b6cd864914610686578063b851a311146106a657600080fd5b80639c52a7f11161018c5780639c52a7f11461063a578063a2f55ae51461064d578063a3fe61121461066057600080fd5b80638da5cb5b146105dc5780638ed7457f146105fc578063977f39701461060f57600080fd5b80633ff84cdf11610281578063635b27701161022a57806378194f781161020457806378194f781461055c5780637d8c0ef11461058057806387bfc51f1461059357806389fe08f8146105a657600080fd5b8063635b27701461051357806371b439c614610526578063723dd3da1461053957600080fd5b806355c8d7121161025b57806355c8d712146104e55780635ff06877146104f8578063605361721461050b57600080fd5b80633ff84cdf1461049f5780634731b49f146104ca5780634f24c5fa146104dd57600080fd5b806329d1e749116102e357806336fbad26116102bd57806336fbad261461041e5780633a5381b5146104275780633fd8cc4e1461046c57600080fd5b806329d1e749146103c057806332799c57146103e0578063368e98521461040b57600080fd5b806310c435211161031457806310c435211461037a5780631251c9461461038d57806324115090146103a057600080fd5b8063068c53911461033b578063087d9886146103505780630f154ded14610367575b600080fd5b61034e610349366004613271565b610873565b005b600e545b6040519081526020015b60405180910390f35b61035461037536600461329d565b610a97565b61035461038836600461329d565b610ac8565b61034e61039b3660046132bf565b610e48565b6103546103ae3660046132bf565b60009081526008602052604090205490565b6103546103ce3660046132bf565b60009081526012602052604090205490565b6103546103ee3660046132d8565b600660209081526000928352604080842090915290825290205481565b61034e610419366004613271565b610f71565b61035460035481565b6014546104479073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161035e565b61048f61047a366004613302565b60026020526000908152604090205460ff1681565b604051901515815260200161035e565b6103546104ad366004613353565b8051602081830181018051600b8252928201919093012091525481565b61034e6104d836600461329d565b61120b565b600f54610354565b61034e6104f336600461346b565b6114d1565b61034e6105063660046134b7565b611603565b61034e61187a565b61034e610521366004613302565b6119a4565b61035461053436600461329d565b611a37565b61054c6105473660046132bf565b611a53565b60405161035e9493929190613599565b61056f61056a3660046132bf565b611b1f565b60405161035e9594939291906135df565b61035461058e3660046132d8565b611bfc565b6104476105a136600461329d565b611c18565b6104476105b43660046132bf565b60046020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6000546104479073ffffffffffffffffffffffffffffffffffffffff1681565b61034e61060a36600461329d565b611c5d565b61035461061d366004613271565b600960209081526000928352604080842090915290825290205481565b61034e610648366004613302565b611ecf565b61034e61065b366004613302565b611f76565b61035461066e36600461346b565b612019565b61034e610681366004613627565b6122c2565b6103546106943660046132bf565b600c6020526000908152604090205481565b61034e6106b43660046132bf565b612516565b6103546106c73660046132bf565b60009081526010602052604090205490565b61034e6106e73660046132bf565b6126ca565b6106ff6106fa3660046132bf565b61288f565b60405161035e949392919061367a565b61035461071d36600461329d565b61289f565b6103546107303660046132bf565b6000908152600d602052604090205490565b610354610750366004613302565b73ffffffffffffffffffffffffffffffffffffffff1660009081526005602052604090205490565b61054c6107863660046132bf565b6128bb565b6001546104479073ffffffffffffffffffffffffffffffffffffffff1681565b6103546107b936600461346b565b6128ef565b61034e6107cc3660046132bf565b612b55565b61034e6107df366004613271565b612c75565b6103546107f23660046136af565b612d58565b61034e610805366004613302565b612e2b565b600a54610354565b61035461082036600461329d565b601360209081526000928352604080842090915290825290205481565b61044761084b3660046132bf565b60076020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b600082815260046020526040902054829073ffffffffffffffffffffffffffffffffffffffff163314610907576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e657200000000000000000000000000000000000060448201526064015b60405180910390fd5b600083815260086020526040902054158061098c575060008381526008602090815260408083206009835281842073ffffffffffffffffffffffffffffffffffffffff8716808652935292205482549192918110610967576109676136f1565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b6109f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f616c726561647920612061646d696e000000000000000000000000000000000060448201526064016108fe565b600083815260086020818152604080842080546009845282862073ffffffffffffffffffffffffffffffffffffffff891680885290855283872082905594845260018101825590855291842090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000168317905551909185917f223ed65ee8c25e2e5c9d766412212deb5a8966c1a32b6608f0e65bd7f1ff89359190a3505050565b600d6020528160005260406000208181548110610ab357600080fd5b90600052602060002001600091509150505481565b600082815260086020526040812054839015801590610b3a575060008181526008602090815260408083206009835281842033808652935292205482549192918110610b1657610b166136f1565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b80610b68575060008181526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b610bce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e00000000000000000000000000000000000060448201526064016108fe565b600e548310610c39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207061636b616765496400000000000000000000000000000060448201526064016108fe565b83600e8481548110610c4d57610c4d6136f1565b90600052602060002090600402016000015414610cc6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f70726f6a65637449642f7061636b6167654964206e6f74206d6174636800000060448201526064016108fe565b600f80546000858152601060209081526040808320805460018082018355828652848620909101869055905482516080810184528a8152808501828152818501878152855196870190955286865260608201959095528754808401895597909552845160049788027f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac802810191825594517f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac80386015592517f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac804909401805496995090969495929490927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001691908490811115610de257610de26134eb565b021790555060608201518051610e029160038401916020909101906130a2565b50505082847f89a0f1c8f86fb05b3c1b23526af1722bc1c33495722d3f8c2c6737d9a91f3a9183604051610e3891815260200190565b60405180910390a3505092915050565b60008181526007602052604090205473ffffffffffffffffffffffffffffffffffffffff163314610ed5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f742066726f6d206e6577206f776e6572000000000000000000000000000060448201526064016108fe565b600081815260046020908152604080832080547fffffffffffffffffffffffff0000000000000000000000000000000000000000808216331790925560079093529220805490921690915573ffffffffffffffffffffffffffffffffffffffff16610f408183612ec2565b604051339083907fd76f6b3fb9ea3802f0403d54d37db427cea79df08cd8817552eb23790d2b549190600090a35050565b600082815260046020526040902054829073ffffffffffffffffffffffffffffffffffffffff163314611000576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e657200000000000000000000000000000000000060448201526064016108fe565b600083815260096020908152604080832073ffffffffffffffffffffffffffffffffffffffff86168452825280832054868452600890925282205490919061104a9060019061374f565b90508082101561111d576000858152600860205260408120805483908110611074576110746136f1565b600091825260208083209091015488835260098252604080842073ffffffffffffffffffffffffffffffffffffffff9092168085529183528084208790558984526008909252912080549192508291859081106110d3576110d36136f1565b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505b600085815260096020908152604080832073ffffffffffffffffffffffffffffffffffffffff8816845282528083208390558783526008909152902080548061116857611168613766565b60008281526020812082017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905590910190915560405173ffffffffffffffffffffffffffffffffffffffff86169187917f6f99f547e1793782dd433d72ded398bd72f423ed3fe41650df9b0fae5008f33d9190a35050505050565b60008281526008602052604090205482901580159061127d575060008181526008602090815260408083206009835281842033808652935292205482549192918110611259576112596136f1565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b806112ab575060008181526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b611311576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e00000000000000000000000000000000000060448201526064016108fe565b600a54821061137c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f70726f6a656374206e6f7420657869737400000000000000000000000000000060448201526064016108fe565b6000600a8381548110611391576113916136f1565b906000526020600020906004020190508381600001541461140e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f70726f6a65637449642f76657273696f6e496478206e6f74206d61746368000060448201526064016108fe565b600160038083015460ff1690811115611429576114296134eb565b14611490576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6e6f74207061737365640000000000000000000000000000000000000000000060448201526064016108fe565b6000848152600c602052604080822085905551849186917fce12a0a1daeabf9ebe5a00e3df32cbba26814ed9e3fda6cb763edb4a8048b7aa9190a350505050565b600f54831061153c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f696e76616c6964207061636b61676556657273696f6e4964000000000000000060448201526064016108fe565b6000600f8481548110611551576115516136f1565b6000918252602082206004909102019150600282015460ff16600481111561157b5761157b6134eb565b146115e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f6e6f7420696e2070726f6772657373000000000000000000000000000000000060448201526064016108fe565b6115f0600382018484613126565b506115fd8185600161301c565b50505050565b3360009081526002602052604090205460ff166116a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016108fe565b600a54821061170d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f70726f6a656374206e6f7420657869737400000000000000000000000000000060448201526064016108fe565b6000600a8381548110611722576117226136f1565b600091825260208220600490910201915060038083015460ff169081111561174c5761174c6134eb565b14806117705750600160038083015460ff169081111561176e5761176e6134eb565b145b6117d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f616c72656164792076616c69646174656400000000000000000000000000000060448201526064016108fe565b818160030160006101000a81548160ff021916908360038111156117fc576117fc6134eb565b02179055506003810180547fffffffffffffffffffffffffffffffffffffffffffffff0000000000000000ff166101004267ffffffffffffffff160217905560405183907f8fb3d2700138e890e3916a46bcfa0e4214689900ff36f9a7f7931701352aba369061186d908590613795565b60405180910390a2505050565b60015473ffffffffffffffffffffffffffffffffffffffff163314611921576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016108fe565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff1633146119c857600080fd5b601480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f1e1fec57c7820d1f8245ceb19d2d2fd5d03b4b7b165475077ea520162ce4074390600090a250565b60106020528160005260406000208181548110610ab357600080fd5b600f8181548110611a6357600080fd5b60009182526020909120600490910201805460018201546002830154600384018054939550919360ff90911692909190611a9c906137a9565b80601f0160208091040260200160405190810160405280929190818152602001828054611ac8906137a9565b8015611b155780601f10611aea57610100808354040283529160200191611b15565b820191906000526020600020905b815481529060010190602001808311611af857829003601f168201915b5050505050905084565b600a8181548110611b2f57600080fd5b9060005260206000209060040201600091509050806000015490806001015490806002018054611b5e906137a9565b80601f0160208091040260200160405190810160405280929190818152602001828054611b8a906137a9565b8015611bd75780601f10611bac57610100808354040283529160200191611bd7565b820191906000526020600020905b815481529060010190602001808311611bba57829003601f168201915b5050506003909301549192505060ff81169067ffffffffffffffff6101009091041685565b60056020528160005260406000208181548110610ab357600080fd5b60086020528160005260406000208181548110611c3457600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b600082815260086020526040902054829015801590611ccf575060008181526008602090815260408083206009835281842033808652935292205482549192918110611cab57611cab6136f1565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b80611cfd575060008181526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b611d63576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e00000000000000000000000000000000000060448201526064016108fe565b600a548210611dce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f70726f6a656374206e6f7420657869737400000000000000000000000000000060448201526064016108fe565b6000600a8381548110611de357611de36136f1565b9060005260206000209060040201905083816000015414611e60576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f70726f6a65637449642f76657273696f6e496478206e6f74206d61746368000060448201526064016108fe565b600381810180547fffffffffffffffffffffffffffffffffffffffffffffff000000000000000000166101004267ffffffffffffffff160217909117905560405183907fb6a63db9aa82b43695f26d08695aedaf8fab7dfb27b4c8c2224ca05540e2ee0590600090a250505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611ef357600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff163314611f9a57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101611f6b565b60008381526008602052604081205484901580159061208b575060008181526008602090815260408083206009835281842033808652935292205482549192918110612067576120676136f1565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b806120b9575060008181526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b61211f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e00000000000000000000000000000000000060448201526064016108fe565b600a546000868152600d6020908152604080832080546001810182559084529190922001829055519092508290600b9061215c90879087906137fc565b9081526040805191829003602090810183209390935560a0820181528782526000888152600d845281902054828401528051601f87018490048402810184018252868152600a939183019188908890819084018382808284376000920182905250938552505060209092019150815267ffffffffffffffff4216602091820152825460018181018555600094855293829020835160049092020190815582820151938101939093556040820151805192939261221e92600285019201906130a2565b5060608201518160030160006101000a81548160ff02191690836003811115612249576122496134eb565b021790555060808201518160030160016101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550505081857f3bb2f5276a16ea4f1caf4842dd2f1031f24ea1c20e6d7aa55f52d463e2f08a2086866040516122b292919061380c565b60405180910390a3509392505050565b600084815260086020526040902054849015801590612334575060008181526008602090815260408083206009835281842033808652935292205482549192918110612310576123106136f1565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b80612362575060008181526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b6123c8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e00000000000000000000000000000000000060448201526064016108fe565b600e548410612433576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207061636b616765496400000000000000000000000000000060448201526064016108fe565b6000600e8581548110612448576124486136f1565b90600052602060002090600402019050858160000154146124c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f70726f6a65637449642f7061636b6167654964206e6f74206d6174636800000060448201526064016108fe565b6124d3600382018585613126565b50847f26fb0729afd95719cada7729b90195198a6f35edd9383154a3c42ed9f973911f858560405161250692919061380c565b60405180910390a2505050505050565b600f548110612581576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f696e76616c6964207061636b61676556657273696f6e4964000000000000000060448201526064016108fe565b6000600f8281548110612596576125966136f1565b6000918252602090912060049091020190506001600282015460ff1660048111156125c3576125c36134eb565b1461262a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f7420756e646572206175646974696e67000000000000000000000000000060448201526064016108fe565b8054600081815260116020526040902090815560018083015481830155600280840154908301805485949360ff909316927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0090911690836004811115612692576126926134eb565b021790555060038201816003019080546126ab906137a9565b6126b69291906131b8565b509050506126c68183600261301c565b5050565b600f548110612735576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f696e76616c6964207061636b61676556657273696f6e4964000000000000000060448201526064016108fe565b6000600f828154811061274a5761274a6136f1565b600091825260209091206004918202019150600282015460ff166004811115612775576127756134eb565b036127dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f616c726561647920766f6964656400000000000000000000000000000000000060448201526064016108fe565b60028082015460ff1660048111156127f6576127f66134eb565b03612883576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4175646974207061737365642076657273696f6e2063616e6e6f74206265207660448201527f6f6964656400000000000000000000000000000000000000000000000000000060648201526084016108fe565b6126c68183600461301c565b600e8181548110611a6357600080fd5b60126020528160005260406000208181548110610ab357600080fd5b60116020526000908152604090208054600182015460028301546003840180549394929360ff9092169291611a9c906137a9565b60008381526008602052604081205484901580159061296157506000818152600860209081526040808320600983528184203380865293529220548254919291811061293d5761293d6136f1565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b8061298f575060008181526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b6129f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d2061646d696e00000000000000000000000000000000000060448201526064016108fe565b600e8054604080516080810182528881526000602082015291945081016001815260200186868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093909452505083546001818101865594825260209182902084516004909202019081559083015181850155604083015160028201805494959294919350917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00909116908381811115612abf57612abf6134eb565b021790555060608201518051612adf9160038401916020909101906130a2565b50505060008581526012602090815260408083208054600181018255908452919092200183905551829086907f6ec076b8a6ef2f909920960821b9610ab3674d3aa184964596ebf219374a96b390612b3a908890889061380c565b60405180910390a3612b4c8583610ac8565b50509392505050565b600f548110612bc0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f696e76616c6964207061636b61676556657273696f6e4964000000000000000060448201526064016108fe565b6000600f8281548110612bd557612bd56136f1565b6000918252602090912060049091020190506001600282015460ff166004811115612c0257612c026134eb565b14612c69576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f7420756e646572206175646974696e67000000000000000000000000000060448201526064016108fe565b6126c68183600361301c565b600082815260046020526040902054829073ffffffffffffffffffffffffffffffffffffffff163314612d04576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e657200000000000000000000000000000000000060448201526064016108fe565b5060009182526007602052604090912080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909216919091179055565b60038054600081815260046020908152604080832080547fffffffffffffffffffffffff000000000000000000000000000000000000000016339081179091558352600580835281842080546006855283862087875285529285208390559083526001820181558352908220018290558254919290612dd683613859565b9091555050604051339082907f4cd47a427b12b78ab498fbe3a9ff5dbad600a7c8580d6305a60c9d9cf78d3e3790600090a36000612e15828585612019565b6000838152600c60205260409020555092915050565b60005473ffffffffffffffffffffffffffffffffffffffff163314612e4f57600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001611f6b565b73ffffffffffffffffffffffffffffffffffffffff821660008181526006602090815260408083208584528252808320549383526005909152812054612f0a9060019061374f565b905080821015612fb65773ffffffffffffffffffffffffffffffffffffffff84166000908152600560205260408120805483908110612f4b57612f4b6136f1565b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff88168084526006835260408085208386528452808520889055908452600590925291208054919250829185908110612fa857612fa86136f1565b600091825260209091200155505b73ffffffffffffffffffffffffffffffffffffffff841660008181526006602090815260408083208784528252808320839055928252600590522080548061300057613000613766565b6001900381819060005260206000200160009055905550505050565b6002830180548291907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600183600481111561305b5761305b6134eb565b02179055508183600001547fecd286616049aec5a52fa7273fbce1b7652affad46cd95c127e03ee4958fec14836040516130959190613891565b60405180910390a3505050565b8280546130ae906137a9565b90600052602060002090601f0160209004810192826130d05760008555613116565b82601f106130e957805160ff1916838001178555613116565b82800160010185558215613116579182015b828111156131165782518255916020019190600101906130fb565b50613122929150613233565b5090565b828054613132906137a9565b90600052602060002090601f0160209004810192826131545760008555613116565b82601f1061318b578280017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00823516178555613116565b82800160010185558215613116579182015b8281111561311657823582559160200191906001019061319d565b8280546131c4906137a9565b90600052602060002090601f0160209004810192826131e65760008555613116565b82601f106131f75780548555613116565b8280016001018555821561311657600052602060002091601f016020900482015b82811115613116578254825591600101919060010190613218565b5b808211156131225760008155600101613234565b803573ffffffffffffffffffffffffffffffffffffffff8116811461326c57600080fd5b919050565b6000806040838503121561328457600080fd5b8235915061329460208401613248565b90509250929050565b600080604083850312156132b057600080fd5b50508035926020909101359150565b6000602082840312156132d157600080fd5b5035919050565b600080604083850312156132eb57600080fd5b6132f483613248565b946020939093013593505050565b60006020828403121561331457600080fd5b61331d82613248565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561336557600080fd5b813567ffffffffffffffff8082111561337d57600080fd5b818401915084601f83011261339157600080fd5b8135818111156133a3576133a3613324565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156133e9576133e9613324565b8160405282815287602084870101111561340257600080fd5b826020860160208301376000928101602001929092525095945050505050565b60008083601f84011261343457600080fd5b50813567ffffffffffffffff81111561344c57600080fd5b60208301915083602082850101111561346457600080fd5b9250929050565b60008060006040848603121561348057600080fd5b83359250602084013567ffffffffffffffff81111561349e57600080fd5b6134aa86828701613422565b9497909650939450505050565b600080604083850312156134ca57600080fd5b823591506020830135600481106134e057600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6005811061352a5761352a6134eb565b9052565b6000815180845260005b8181101561355457602081850181015186830182015201613538565b81811115613566576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b8481528360208201526135af604082018461351a565b6080606082015260006135c5608083018461352e565b9695505050505050565b6004811061352a5761352a6134eb565b85815284602082015260a0604082015260006135fe60a083018661352e565b905061360d60608301856135cf565b67ffffffffffffffff831660808301529695505050505050565b6000806000806060858703121561363d57600080fd5b8435935060208501359250604085013567ffffffffffffffff81111561366257600080fd5b61366e87828801613422565b95989497509550505050565b848152836020820152600060028410613695576136956134eb565b836040830152608060608301526135c5608083018461352e565b600080602083850312156136c257600080fd5b823567ffffffffffffffff8111156136d957600080fd5b6136e585828601613422565b90969095509350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561376157613761613720565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b602081016137a382846135cf565b92915050565b600181811c908216806137bd57607f821691505b6020821081036137f6577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b8183823760009101908152919050565b60208152816020820152818360408301376000818301604090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361388a5761388a613720565b5060010190565b602081016137a3828461351a56fea264697066735822122022e3be6911d1a340b8734594e2fa0ecfcd3167a475d6b47d3589532e0a17664864736f6c634300080d0033"
};

// src/contracts/ProjectInfo.ts
var ProjectInfo = class extends import_eth_wallet4.Contract {
  constructor(wallet, address) {
    super(wallet, address, ProjectInfo_json_default.abi, ProjectInfo_json_default.bytecode);
    this.assign();
  }
  deploy(validator) {
    return this.__deploy([validator]);
  }
  parseAddAdminEvent(receipt) {
    return this.parseEvents(receipt, "AddAdmin").map((e) => this.decodeAddAdminEvent(e));
  }
  decodeAddAdminEvent(event) {
    let result = event.data;
    return {
      projectId: new import_eth_wallet4.BigNumber(result.projectId),
      admin: result.admin,
      _event: event
    };
  }
  parseAuthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Authorize").map((e) => this.decodeAuthorizeEvent(e));
  }
  decodeAuthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseDeauthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Deauthorize").map((e) => this.decodeDeauthorizeEvent(e));
  }
  decodeDeauthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseNewPackageEvent(receipt) {
    return this.parseEvents(receipt, "NewPackage").map((e) => this.decodeNewPackageEvent(e));
  }
  decodeNewPackageEvent(event) {
    let result = event.data;
    return {
      projectId: new import_eth_wallet4.BigNumber(result.projectId),
      packageId: new import_eth_wallet4.BigNumber(result.packageId),
      ipfsCid: result.ipfsCid,
      _event: event
    };
  }
  parseNewPackageVersionEvent(receipt) {
    return this.parseEvents(receipt, "NewPackageVersion").map((e) => this.decodeNewPackageVersionEvent(e));
  }
  decodeNewPackageVersionEvent(event) {
    let result = event.data;
    return {
      packageId: new import_eth_wallet4.BigNumber(result.packageId),
      packageVersionId: new import_eth_wallet4.BigNumber(result.packageVersionId),
      version: new import_eth_wallet4.BigNumber(result.version),
      _event: event
    };
  }
  parseNewProjectEvent(receipt) {
    return this.parseEvents(receipt, "NewProject").map((e) => this.decodeNewProjectEvent(e));
  }
  decodeNewProjectEvent(event) {
    let result = event.data;
    return {
      projectId: new import_eth_wallet4.BigNumber(result.projectId),
      owner: result.owner,
      _event: event
    };
  }
  parseNewProjectVersionEvent(receipt) {
    return this.parseEvents(receipt, "NewProjectVersion").map((e) => this.decodeNewProjectVersionEvent(e));
  }
  decodeNewProjectVersionEvent(event) {
    let result = event.data;
    return {
      projectId: new import_eth_wallet4.BigNumber(result.projectId),
      projectVersionIdx: new import_eth_wallet4.BigNumber(result.projectVersionIdx),
      ipfsCid: result.ipfsCid,
      _event: event
    };
  }
  parseRemoveAdminEvent(receipt) {
    return this.parseEvents(receipt, "RemoveAdmin").map((e) => this.decodeRemoveAdminEvent(e));
  }
  decodeRemoveAdminEvent(event) {
    let result = event.data;
    return {
      projectId: new import_eth_wallet4.BigNumber(result.projectId),
      admin: result.admin,
      _event: event
    };
  }
  parseSetPackageVersionStatusEvent(receipt) {
    return this.parseEvents(receipt, "SetPackageVersionStatus").map((e) => this.decodeSetPackageVersionStatusEvent(e));
  }
  decodeSetPackageVersionStatusEvent(event) {
    let result = event.data;
    return {
      packageId: new import_eth_wallet4.BigNumber(result.packageId),
      packageVersionId: new import_eth_wallet4.BigNumber(result.packageVersionId),
      status: new import_eth_wallet4.BigNumber(result.status),
      _event: event
    };
  }
  parseSetProjectCurrentVersionEvent(receipt) {
    return this.parseEvents(receipt, "SetProjectCurrentVersion").map((e) => this.decodeSetProjectCurrentVersionEvent(e));
  }
  decodeSetProjectCurrentVersionEvent(event) {
    let result = event.data;
    return {
      projectId: new import_eth_wallet4.BigNumber(result.projectId),
      projectVersionIdx: new import_eth_wallet4.BigNumber(result.projectVersionIdx),
      _event: event
    };
  }
  parseStartOwnershipTransferEvent(receipt) {
    return this.parseEvents(receipt, "StartOwnershipTransfer").map((e) => this.decodeStartOwnershipTransferEvent(e));
  }
  decodeStartOwnershipTransferEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseTransferOwnershipEvent(receipt) {
    return this.parseEvents(receipt, "TransferOwnership").map((e) => this.decodeTransferOwnershipEvent(e));
  }
  decodeTransferOwnershipEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseTransferProjectOwnershipEvent(receipt) {
    return this.parseEvents(receipt, "TransferProjectOwnership").map((e) => this.decodeTransferProjectOwnershipEvent(e));
  }
  decodeTransferProjectOwnershipEvent(event) {
    let result = event.data;
    return {
      projectId: new import_eth_wallet4.BigNumber(result.projectId),
      newOwner: result.newOwner,
      _event: event
    };
  }
  parseUpdatePackageIpfsCidEvent(receipt) {
    return this.parseEvents(receipt, "UpdatePackageIpfsCid").map((e) => this.decodeUpdatePackageIpfsCidEvent(e));
  }
  decodeUpdatePackageIpfsCidEvent(event) {
    let result = event.data;
    return {
      packageId: new import_eth_wallet4.BigNumber(result.packageId),
      ipfsCid: result.ipfsCid,
      _event: event
    };
  }
  parseUpdateValidatorEvent(receipt) {
    return this.parseEvents(receipt, "UpdateValidator").map((e) => this.decodeUpdateValidatorEvent(e));
  }
  decodeUpdateValidatorEvent(event) {
    let result = event.data;
    return {
      validator: result.validator,
      _event: event
    };
  }
  parseValidateEvent(receipt) {
    return this.parseEvents(receipt, "Validate").map((e) => this.decodeValidateEvent(e));
  }
  decodeValidateEvent(event) {
    let result = event.data;
    return {
      projectVersionIdx: new import_eth_wallet4.BigNumber(result.projectVersionIdx),
      status: new import_eth_wallet4.BigNumber(result.status),
      _event: event
    };
  }
  parseVoidProjectVersionEvent(receipt) {
    return this.parseEvents(receipt, "VoidProjectVersion").map((e) => this.decodeVoidProjectVersionEvent(e));
  }
  decodeVoidProjectVersionEvent(event) {
    let result = event.data;
    return {
      projectVersionIdx: new import_eth_wallet4.BigNumber(result.projectVersionIdx),
      _event: event
    };
  }
  assign() {
    let isPermitted_call = async (param1) => {
      let result = await this.call("isPermitted", [param1]);
      return result;
    };
    this.isPermitted = isPermitted_call;
    let latestAuditedPackageVersion_call = async (param1) => {
      let result = await this.call("latestAuditedPackageVersion", [import_eth_wallet4.Utils.toString(param1)]);
      return {
        packageId: new import_eth_wallet4.BigNumber(result.packageId),
        version: new import_eth_wallet4.BigNumber(result.version),
        status: new import_eth_wallet4.BigNumber(result.status),
        ipfsCid: result.ipfsCid
      };
    };
    this.latestAuditedPackageVersion = latestAuditedPackageVersion_call;
    let newOwner_call = async () => {
      let result = await this.call("newOwner");
      return result;
    };
    this.newOwner = newOwner_call;
    let owner_call = async () => {
      let result = await this.call("owner");
      return result;
    };
    this.owner = owner_call;
    let ownersProjectsParams = (params) => [params.param1, import_eth_wallet4.Utils.toString(params.param2)];
    let ownersProjects_call = async (params) => {
      let result = await this.call("ownersProjects", ownersProjectsParams(params));
      return new import_eth_wallet4.BigNumber(result);
    };
    this.ownersProjects = ownersProjects_call;
    let ownersProjectsInvParams = (params) => [params.param1, import_eth_wallet4.Utils.toString(params.param2)];
    let ownersProjectsInv_call = async (params) => {
      let result = await this.call("ownersProjectsInv", ownersProjectsInvParams(params));
      return new import_eth_wallet4.BigNumber(result);
    };
    this.ownersProjectsInv = ownersProjectsInv_call;
    let ownersProjectsLength_call = async (owner) => {
      let result = await this.call("ownersProjectsLength", [owner]);
      return new import_eth_wallet4.BigNumber(result);
    };
    this.ownersProjectsLength = ownersProjectsLength_call;
    let packageVersions_call = async (param1) => {
      let result = await this.call("packageVersions", [import_eth_wallet4.Utils.toString(param1)]);
      return {
        packageId: new import_eth_wallet4.BigNumber(result.packageId),
        version: new import_eth_wallet4.BigNumber(result.version),
        status: new import_eth_wallet4.BigNumber(result.status),
        ipfsCid: result.ipfsCid
      };
    };
    this.packageVersions = packageVersions_call;
    let packageVersionsLength_call = async () => {
      let result = await this.call("packageVersionsLength");
      return new import_eth_wallet4.BigNumber(result);
    };
    this.packageVersionsLength = packageVersionsLength_call;
    let packageVersionsListParams = (params) => [import_eth_wallet4.Utils.toString(params.param1), import_eth_wallet4.Utils.toString(params.param2)];
    let packageVersionsList_call = async (params) => {
      let result = await this.call("packageVersionsList", packageVersionsListParams(params));
      return new import_eth_wallet4.BigNumber(result);
    };
    this.packageVersionsList = packageVersionsList_call;
    let packageVersionsListLength_call = async (packageId) => {
      let result = await this.call("packageVersionsListLength", [import_eth_wallet4.Utils.toString(packageId)]);
      return new import_eth_wallet4.BigNumber(result);
    };
    this.packageVersionsListLength = packageVersionsListLength_call;
    let packages_call = async (param1) => {
      let result = await this.call("packages", [import_eth_wallet4.Utils.toString(param1)]);
      return {
        projectId: new import_eth_wallet4.BigNumber(result.projectId),
        currVersionIndex: new import_eth_wallet4.BigNumber(result.currVersionIndex),
        status: new import_eth_wallet4.BigNumber(result.status),
        ipfsCid: result.ipfsCid
      };
    };
    this.packages = packages_call;
    let packagesLength_call = async () => {
      let result = await this.call("packagesLength");
      return new import_eth_wallet4.BigNumber(result);
    };
    this.packagesLength = packagesLength_call;
    let projectAdminParams = (params) => [import_eth_wallet4.Utils.toString(params.param1), import_eth_wallet4.Utils.toString(params.param2)];
    let projectAdmin_call = async (params) => {
      let result = await this.call("projectAdmin", projectAdminParams(params));
      return result;
    };
    this.projectAdmin = projectAdmin_call;
    let projectAdminInvParams = (params) => [import_eth_wallet4.Utils.toString(params.param1), params.param2];
    let projectAdminInv_call = async (params) => {
      let result = await this.call("projectAdminInv", projectAdminInvParams(params));
      return new import_eth_wallet4.BigNumber(result);
    };
    this.projectAdminInv = projectAdminInv_call;
    let projectAdminLength_call = async (projectId) => {
      let result = await this.call("projectAdminLength", [import_eth_wallet4.Utils.toString(projectId)]);
      return new import_eth_wallet4.BigNumber(result);
    };
    this.projectAdminLength = projectAdminLength_call;
    let projectCount_call = async () => {
      let result = await this.call("projectCount");
      return new import_eth_wallet4.BigNumber(result);
    };
    this.projectCount = projectCount_call;
    let projectCurrentVersion_call = async (param1) => {
      let result = await this.call("projectCurrentVersion", [import_eth_wallet4.Utils.toString(param1)]);
      return new import_eth_wallet4.BigNumber(result);
    };
    this.projectCurrentVersion = projectCurrentVersion_call;
    let projectNewOwner_call = async (param1) => {
      let result = await this.call("projectNewOwner", [import_eth_wallet4.Utils.toString(param1)]);
      return result;
    };
    this.projectNewOwner = projectNewOwner_call;
    let projectOwner_call = async (param1) => {
      let result = await this.call("projectOwner", [import_eth_wallet4.Utils.toString(param1)]);
      return result;
    };
    this.projectOwner = projectOwner_call;
    let projectPackagesParams = (params) => [import_eth_wallet4.Utils.toString(params.param1), import_eth_wallet4.Utils.toString(params.param2)];
    let projectPackages_call = async (params) => {
      let result = await this.call("projectPackages", projectPackagesParams(params));
      return new import_eth_wallet4.BigNumber(result);
    };
    this.projectPackages = projectPackages_call;
    let projectPackagesInvParams = (params) => [import_eth_wallet4.Utils.toString(params.param1), import_eth_wallet4.Utils.toString(params.param2)];
    let projectPackagesInv_call = async (params) => {
      let result = await this.call("projectPackagesInv", projectPackagesInvParams(params));
      return new import_eth_wallet4.BigNumber(result);
    };
    this.projectPackagesInv = projectPackagesInv_call;
    let projectPackagesLength_call = async (projectId) => {
      let result = await this.call("projectPackagesLength", [import_eth_wallet4.Utils.toString(projectId)]);
      return new import_eth_wallet4.BigNumber(result);
    };
    this.projectPackagesLength = projectPackagesLength_call;
    let projectVersionListParams = (params) => [import_eth_wallet4.Utils.toString(params.param1), import_eth_wallet4.Utils.toString(params.param2)];
    let projectVersionList_call = async (params) => {
      let result = await this.call("projectVersionList", projectVersionListParams(params));
      return new import_eth_wallet4.BigNumber(result);
    };
    this.projectVersionList = projectVersionList_call;
    let projectVersionListLength_call = async (projectId) => {
      let result = await this.call("projectVersionListLength", [import_eth_wallet4.Utils.toString(projectId)]);
      return new import_eth_wallet4.BigNumber(result);
    };
    this.projectVersionListLength = projectVersionListLength_call;
    let projectVersions_call = async (param1) => {
      let result = await this.call("projectVersions", [import_eth_wallet4.Utils.toString(param1)]);
      return {
        projectId: new import_eth_wallet4.BigNumber(result.projectId),
        version: new import_eth_wallet4.BigNumber(result.version),
        ipfsCid: result.ipfsCid,
        status: new import_eth_wallet4.BigNumber(result.status),
        lastModifiedDate: new import_eth_wallet4.BigNumber(result.lastModifiedDate)
      };
    };
    this.projectVersions = projectVersions_call;
    let projectVersionsInv_call = async (param1) => {
      let result = await this.call("projectVersionsInv", [param1]);
      return new import_eth_wallet4.BigNumber(result);
    };
    this.projectVersionsInv = projectVersionsInv_call;
    let projectVersionsLength_call = async () => {
      let result = await this.call("projectVersionsLength");
      return new import_eth_wallet4.BigNumber(result);
    };
    this.projectVersionsLength = projectVersionsLength_call;
    let validator_call = async () => {
      let result = await this.call("validator");
      return result;
    };
    this.validator = validator_call;
    let addProjectAdminParams = (params) => [import_eth_wallet4.Utils.toString(params.projectId), params.admin];
    let addProjectAdmin_send = async (params) => {
      let result = await this.send("addProjectAdmin", addProjectAdminParams(params));
      return result;
    };
    let addProjectAdmin_call = async (params) => {
      let result = await this.call("addProjectAdmin", addProjectAdminParams(params));
      return;
    };
    this.addProjectAdmin = Object.assign(addProjectAdmin_send, {
      call: addProjectAdmin_call
    });
    let deny_send = async (user) => {
      let result = await this.send("deny", [user]);
      return result;
    };
    let deny_call = async (user) => {
      let result = await this.call("deny", [user]);
      return;
    };
    this.deny = Object.assign(deny_send, {
      call: deny_call
    });
    let newPackageParams = (params) => [import_eth_wallet4.Utils.toString(params.projectId), params.ipfsCid];
    let newPackage_send = async (params) => {
      let result = await this.send("newPackage", newPackageParams(params));
      return result;
    };
    let newPackage_call = async (params) => {
      let result = await this.call("newPackage", newPackageParams(params));
      return new import_eth_wallet4.BigNumber(result);
    };
    this.newPackage = Object.assign(newPackage_send, {
      call: newPackage_call
    });
    let newPackageVersionParams = (params) => [import_eth_wallet4.Utils.toString(params.projectId), import_eth_wallet4.Utils.toString(params.packageId)];
    let newPackageVersion_send = async (params) => {
      let result = await this.send("newPackageVersion", newPackageVersionParams(params));
      return result;
    };
    let newPackageVersion_call = async (params) => {
      let result = await this.call("newPackageVersion", newPackageVersionParams(params));
      return new import_eth_wallet4.BigNumber(result);
    };
    this.newPackageVersion = Object.assign(newPackageVersion_send, {
      call: newPackageVersion_call
    });
    let newProject_send = async (ipfsCid) => {
      let result = await this.send("newProject", [ipfsCid]);
      return result;
    };
    let newProject_call = async (ipfsCid) => {
      let result = await this.call("newProject", [ipfsCid]);
      return new import_eth_wallet4.BigNumber(result);
    };
    this.newProject = Object.assign(newProject_send, {
      call: newProject_call
    });
    let newProjectVersionParams = (params) => [import_eth_wallet4.Utils.toString(params.projectId), params.ipfsCid];
    let newProjectVersion_send = async (params) => {
      let result = await this.send("newProjectVersion", newProjectVersionParams(params));
      return result;
    };
    let newProjectVersion_call = async (params) => {
      let result = await this.call("newProjectVersion", newProjectVersionParams(params));
      return new import_eth_wallet4.BigNumber(result);
    };
    this.newProjectVersion = Object.assign(newProjectVersion_send, {
      call: newProjectVersion_call
    });
    let permit_send = async (user) => {
      let result = await this.send("permit", [user]);
      return result;
    };
    let permit_call = async (user) => {
      let result = await this.call("permit", [user]);
      return;
    };
    this.permit = Object.assign(permit_send, {
      call: permit_call
    });
    let removeProjectAdminParams = (params) => [import_eth_wallet4.Utils.toString(params.projectId), params.admin];
    let removeProjectAdmin_send = async (params) => {
      let result = await this.send("removeProjectAdmin", removeProjectAdminParams(params));
      return result;
    };
    let removeProjectAdmin_call = async (params) => {
      let result = await this.call("removeProjectAdmin", removeProjectAdminParams(params));
      return;
    };
    this.removeProjectAdmin = Object.assign(removeProjectAdmin_send, {
      call: removeProjectAdmin_call
    });
    let setPackageVersionToAuditFailed_send = async (packageVersionId) => {
      let result = await this.send("setPackageVersionToAuditFailed", [import_eth_wallet4.Utils.toString(packageVersionId)]);
      return result;
    };
    let setPackageVersionToAuditFailed_call = async (packageVersionId) => {
      let result = await this.call("setPackageVersionToAuditFailed", [import_eth_wallet4.Utils.toString(packageVersionId)]);
      return;
    };
    this.setPackageVersionToAuditFailed = Object.assign(setPackageVersionToAuditFailed_send, {
      call: setPackageVersionToAuditFailed_call
    });
    let setPackageVersionToAuditPassed_send = async (packageVersionId) => {
      let result = await this.send("setPackageVersionToAuditPassed", [import_eth_wallet4.Utils.toString(packageVersionId)]);
      return result;
    };
    let setPackageVersionToAuditPassed_call = async (packageVersionId) => {
      let result = await this.call("setPackageVersionToAuditPassed", [import_eth_wallet4.Utils.toString(packageVersionId)]);
      return;
    };
    this.setPackageVersionToAuditPassed = Object.assign(setPackageVersionToAuditPassed_send, {
      call: setPackageVersionToAuditPassed_call
    });
    let setPackageVersionToAuditingParams = (params) => [import_eth_wallet4.Utils.toString(params.packageVersionId), params.ipfsCid];
    let setPackageVersionToAuditing_send = async (params) => {
      let result = await this.send("setPackageVersionToAuditing", setPackageVersionToAuditingParams(params));
      return result;
    };
    let setPackageVersionToAuditing_call = async (params) => {
      let result = await this.call("setPackageVersionToAuditing", setPackageVersionToAuditingParams(params));
      return;
    };
    this.setPackageVersionToAuditing = Object.assign(setPackageVersionToAuditing_send, {
      call: setPackageVersionToAuditing_call
    });
    let setProjectCurrentVersionParams = (params) => [import_eth_wallet4.Utils.toString(params.projectId), import_eth_wallet4.Utils.toString(params.versionIdx)];
    let setProjectCurrentVersion_send = async (params) => {
      let result = await this.send("setProjectCurrentVersion", setProjectCurrentVersionParams(params));
      return result;
    };
    let setProjectCurrentVersion_call = async (params) => {
      let result = await this.call("setProjectCurrentVersion", setProjectCurrentVersionParams(params));
      return;
    };
    this.setProjectCurrentVersion = Object.assign(setProjectCurrentVersion_send, {
      call: setProjectCurrentVersion_call
    });
    let takeOwnership_send = async () => {
      let result = await this.send("takeOwnership");
      return result;
    };
    let takeOwnership_call = async () => {
      let result = await this.call("takeOwnership");
      return;
    };
    this.takeOwnership = Object.assign(takeOwnership_send, {
      call: takeOwnership_call
    });
    let takeProjectOwnership_send = async (projectId) => {
      let result = await this.send("takeProjectOwnership", [import_eth_wallet4.Utils.toString(projectId)]);
      return result;
    };
    let takeProjectOwnership_call = async (projectId) => {
      let result = await this.call("takeProjectOwnership", [import_eth_wallet4.Utils.toString(projectId)]);
      return;
    };
    this.takeProjectOwnership = Object.assign(takeProjectOwnership_send, {
      call: takeProjectOwnership_call
    });
    let transferOwnership_send = async (newOwner) => {
      let result = await this.send("transferOwnership", [newOwner]);
      return result;
    };
    let transferOwnership_call = async (newOwner) => {
      let result = await this.call("transferOwnership", [newOwner]);
      return;
    };
    this.transferOwnership = Object.assign(transferOwnership_send, {
      call: transferOwnership_call
    });
    let transferProjectOwnershipParams = (params) => [import_eth_wallet4.Utils.toString(params.projectId), params.newOwner];
    let transferProjectOwnership_send = async (params) => {
      let result = await this.send("transferProjectOwnership", transferProjectOwnershipParams(params));
      return result;
    };
    let transferProjectOwnership_call = async (params) => {
      let result = await this.call("transferProjectOwnership", transferProjectOwnershipParams(params));
      return;
    };
    this.transferProjectOwnership = Object.assign(transferProjectOwnership_send, {
      call: transferProjectOwnership_call
    });
    let updatePackageIpfsCidParams = (params) => [import_eth_wallet4.Utils.toString(params.projectId), import_eth_wallet4.Utils.toString(params.packageId), params.ipfsCid];
    let updatePackageIpfsCid_send = async (params) => {
      let result = await this.send("updatePackageIpfsCid", updatePackageIpfsCidParams(params));
      return result;
    };
    let updatePackageIpfsCid_call = async (params) => {
      let result = await this.call("updatePackageIpfsCid", updatePackageIpfsCidParams(params));
      return;
    };
    this.updatePackageIpfsCid = Object.assign(updatePackageIpfsCid_send, {
      call: updatePackageIpfsCid_call
    });
    let updateValidator_send = async (validator) => {
      let result = await this.send("updateValidator", [validator]);
      return result;
    };
    let updateValidator_call = async (validator) => {
      let result = await this.call("updateValidator", [validator]);
      return;
    };
    this.updateValidator = Object.assign(updateValidator_send, {
      call: updateValidator_call
    });
    let validateProjectParams = (params) => [import_eth_wallet4.Utils.toString(params.projectVersionIdx), import_eth_wallet4.Utils.toString(params.status)];
    let validateProject_send = async (params) => {
      let result = await this.send("validateProject", validateProjectParams(params));
      return result;
    };
    let validateProject_call = async (params) => {
      let result = await this.call("validateProject", validateProjectParams(params));
      return;
    };
    this.validateProject = Object.assign(validateProject_send, {
      call: validateProject_call
    });
    let voidPackageVersion_send = async (packageVersionId) => {
      let result = await this.send("voidPackageVersion", [import_eth_wallet4.Utils.toString(packageVersionId)]);
      return result;
    };
    let voidPackageVersion_call = async (packageVersionId) => {
      let result = await this.call("voidPackageVersion", [import_eth_wallet4.Utils.toString(packageVersionId)]);
      return;
    };
    this.voidPackageVersion = Object.assign(voidPackageVersion_send, {
      call: voidPackageVersion_call
    });
    let voidProjectVersionParams = (params) => [import_eth_wallet4.Utils.toString(params.projectId), import_eth_wallet4.Utils.toString(params.versionIdx)];
    let voidProjectVersion_send = async (params) => {
      let result = await this.send("voidProjectVersion", voidProjectVersionParams(params));
      return result;
    };
    let voidProjectVersion_call = async (params) => {
      let result = await this.call("voidProjectVersion", voidProjectVersionParams(params));
      return;
    };
    this.voidProjectVersion = Object.assign(voidProjectVersion_send, {
      call: voidProjectVersion_call
    });
  }
};

})