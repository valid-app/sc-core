import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./DomainInfo.json";

export interface IDomainModuleParams {param1:string;param2:string}
export interface IDomainTypeParams {param1:string;param2:string}
export interface IGetDomainInfoParams {owner:string;domainName:string}
export interface IUpdateDomainInfoParams {domainName:string;moduleType:number|BigNumber;module:string}
export interface IUpdateDomainModuleParams {domainName:string;module:string}
export class DomainInfo extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    parseUpdateDomainInfoEvent(receipt: TransactionReceipt): DomainInfo.UpdateDomainInfoEvent[]{
        return this.parseEvents(receipt, "UpdateDomainInfo").map(e=>this.decodeUpdateDomainInfoEvent(e));
    }
    decodeUpdateDomainInfoEvent(event: Event): DomainInfo.UpdateDomainInfoEvent{
        let result = event.data;
        return {
            owner: result.owner,
            domainName: result.domainName,
            domainType: new BigNumber(result.domainType),
            module: result.module,
            _event: event
        };
    }
    parseUpdateDomainModuleEvent(receipt: TransactionReceipt): DomainInfo.UpdateDomainModuleEvent[]{
        return this.parseEvents(receipt, "UpdateDomainModule").map(e=>this.decodeUpdateDomainModuleEvent(e));
    }
    decodeUpdateDomainModuleEvent(event: Event): DomainInfo.UpdateDomainModuleEvent{
        let result = event.data;
        return {
            owner: result.owner,
            domainName: result.domainName,
            module: result.module,
            _event: event
        };
    }
    domainModule: {
        (params: IDomainModuleParams): Promise<string>;
    }
    domainType: {
        (params: IDomainTypeParams): Promise<BigNumber>;
    }
    getDomainInfo: {
        (params: IGetDomainInfoParams): Promise<{moduleType:BigNumber,module:string}>;
    }
    updateDomainInfo: {
        (params: IUpdateDomainInfoParams): Promise<TransactionReceipt>;
        call: (params: IUpdateDomainInfoParams) => Promise<void>;
    }
    updateDomainModule: {
        (params: IUpdateDomainModuleParams): Promise<TransactionReceipt>;
        call: (params: IUpdateDomainModuleParams) => Promise<void>;
    }
    private assign(){
        let domainModuleParams = (params: IDomainModuleParams) => [params.param1,params.param2];
        let domainModule_call = async (params: IDomainModuleParams): Promise<string> => {
            let result = await this.call('domainModule',domainModuleParams(params));
            return result;
        }
        this.domainModule = domainModule_call
        let domainTypeParams = (params: IDomainTypeParams) => [params.param1,params.param2];
        let domainType_call = async (params: IDomainTypeParams): Promise<BigNumber> => {
            let result = await this.call('domainType',domainTypeParams(params));
            return new BigNumber(result);
        }
        this.domainType = domainType_call
        let getDomainInfoParams = (params: IGetDomainInfoParams) => [params.owner,params.domainName];
        let getDomainInfo_call = async (params: IGetDomainInfoParams): Promise<{moduleType:BigNumber,module:string}> => {
            let result = await this.call('getDomainInfo',getDomainInfoParams(params));
            return {
                moduleType: new BigNumber(result.moduleType),
                module: result.module
            };
        }
        this.getDomainInfo = getDomainInfo_call
        let updateDomainInfoParams = (params: IUpdateDomainInfoParams) => [params.domainName,Utils.toString(params.moduleType),params.module];
        let updateDomainInfo_send = async (params: IUpdateDomainInfoParams): Promise<TransactionReceipt> => {
            let result = await this.send('updateDomainInfo',updateDomainInfoParams(params));
            return result;
        }
        let updateDomainInfo_call = async (params: IUpdateDomainInfoParams): Promise<void> => {
            let result = await this.call('updateDomainInfo',updateDomainInfoParams(params));
            return;
        }
        this.updateDomainInfo = Object.assign(updateDomainInfo_send, {
            call:updateDomainInfo_call
        });
        let updateDomainModuleParams = (params: IUpdateDomainModuleParams) => [params.domainName,params.module];
        let updateDomainModule_send = async (params: IUpdateDomainModuleParams): Promise<TransactionReceipt> => {
            let result = await this.send('updateDomainModule',updateDomainModuleParams(params));
            return result;
        }
        let updateDomainModule_call = async (params: IUpdateDomainModuleParams): Promise<void> => {
            let result = await this.call('updateDomainModule',updateDomainModuleParams(params));
            return;
        }
        this.updateDomainModule = Object.assign(updateDomainModule_send, {
            call:updateDomainModule_call
        });
    }
}
export module DomainInfo{
    export interface UpdateDomainInfoEvent {owner:string,domainName:string,domainType:BigNumber,module:string,_event:Event}
    export interface UpdateDomainModuleEvent {owner:string,domainName:string,module:string,_event:Event}
}