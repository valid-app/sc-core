"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainInfo = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const DomainInfo_json_1 = __importDefault(require("./DomainInfo.json"));
class DomainInfo extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, DomainInfo_json_1.default.abi, DomainInfo_json_1.default.bytecode);
        this.assign();
    }
    deploy() {
        return this.__deploy();
    }
    parseUpdateDomainInfoEvent(receipt) {
        return this.parseEvents(receipt, "UpdateDomainInfo").map(e => this.decodeUpdateDomainInfoEvent(e));
    }
    decodeUpdateDomainInfoEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            domainName: result.domainName,
            domainType: new eth_wallet_1.BigNumber(result.domainType),
            module: result.module,
            _event: event
        };
    }
    parseUpdateDomainModuleEvent(receipt) {
        return this.parseEvents(receipt, "UpdateDomainModule").map(e => this.decodeUpdateDomainModuleEvent(e));
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
            let result = await this.call('domainModule', domainModuleParams(params));
            return result;
        };
        this.domainModule = domainModule_call;
        let domainTypeParams = (params) => [params.param1, params.param2];
        let domainType_call = async (params) => {
            let result = await this.call('domainType', domainTypeParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.domainType = domainType_call;
        let getDomainInfoParams = (params) => [params.owner, params.domainName];
        let getDomainInfo_call = async (params) => {
            let result = await this.call('getDomainInfo', getDomainInfoParams(params));
            return {
                moduleType: new eth_wallet_1.BigNumber(result.moduleType),
                module: result.module
            };
        };
        this.getDomainInfo = getDomainInfo_call;
        let updateDomainInfoParams = (params) => [params.domainName, eth_wallet_1.Utils.toString(params.moduleType), params.module];
        let updateDomainInfo_send = async (params) => {
            let result = await this.send('updateDomainInfo', updateDomainInfoParams(params));
            return result;
        };
        let updateDomainInfo_call = async (params) => {
            let result = await this.call('updateDomainInfo', updateDomainInfoParams(params));
            return;
        };
        this.updateDomainInfo = Object.assign(updateDomainInfo_send, {
            call: updateDomainInfo_call
        });
        let updateDomainModuleParams = (params) => [params.domainName, params.module];
        let updateDomainModule_send = async (params) => {
            let result = await this.send('updateDomainModule', updateDomainModuleParams(params));
            return result;
        };
        let updateDomainModule_call = async (params) => {
            let result = await this.call('updateDomainModule', updateDomainModuleParams(params));
            return;
        };
        this.updateDomainModule = Object.assign(updateDomainModule_send, {
            call: updateDomainModule_call
        });
    }
}
exports.DomainInfo = DomainInfo;
