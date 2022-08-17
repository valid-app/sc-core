import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDomainModuleParams {
    param1: string;
    param2: string;
}
export interface IDomainTypeParams {
    param1: string;
    param2: string;
}
export interface IGetDomainInfoParams {
    owner: string;
    domainName: string;
}
export interface IUpdateDomainInfoParams {
    domainName: string;
    moduleType: number | BigNumber;
    module: string;
}
export interface IUpdateDomainModuleParams {
    domainName: string;
    module: string;
}
export declare class DomainInfo extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    parseUpdateDomainInfoEvent(receipt: TransactionReceipt): DomainInfo.UpdateDomainInfoEvent[];
    decodeUpdateDomainInfoEvent(event: Event): DomainInfo.UpdateDomainInfoEvent;
    parseUpdateDomainModuleEvent(receipt: TransactionReceipt): DomainInfo.UpdateDomainModuleEvent[];
    decodeUpdateDomainModuleEvent(event: Event): DomainInfo.UpdateDomainModuleEvent;
    domainModule: {
        (params: IDomainModuleParams): Promise<string>;
    };
    domainType: {
        (params: IDomainTypeParams): Promise<BigNumber>;
    };
    getDomainInfo: {
        (params: IGetDomainInfoParams): Promise<{
            moduleType: BigNumber;
            module: string;
        }>;
    };
    updateDomainInfo: {
        (params: IUpdateDomainInfoParams): Promise<TransactionReceipt>;
        call: (params: IUpdateDomainInfoParams) => Promise<void>;
    };
    updateDomainModule: {
        (params: IUpdateDomainModuleParams): Promise<TransactionReceipt>;
        call: (params: IUpdateDomainModuleParams) => Promise<void>;
    };
    private assign;
}
export declare module DomainInfo {
    interface UpdateDomainInfoEvent {
        owner: string;
        domainName: string;
        domainType: BigNumber;
        module: string;
        _event: Event;
    }
    interface UpdateDomainModuleEvent {
        owner: string;
        domainName: string;
        module: string;
        _event: Event;
    }
}
