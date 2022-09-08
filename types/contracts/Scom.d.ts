import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    minter: string;
    initSupplyTo: string;
    initSupply: number | BigNumber;
    totalSupply: number | BigNumber;
}
export interface IAllowanceParams {
    owner: string;
    spender: string;
}
export interface IApproveParams {
    spender: string;
    amount: number | BigNumber;
}
export interface IDecreaseAllowanceParams {
    spender: string;
    subtractedValue: number | BigNumber;
}
export interface IIncreaseAllowanceParams {
    spender: string;
    addedValue: number | BigNumber;
}
export interface IMintParams {
    account: string;
    amount: number | BigNumber;
}
export interface ITransferParams {
    to: string;
    amount: number | BigNumber;
}
export interface ITransferFromParams {
    from: string;
    to: string;
    amount: number | BigNumber;
}
export declare class Scom extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): Scom.ApprovalEvent[];
    decodeApprovalEvent(event: Event): Scom.ApprovalEvent;
    parseTransferEvent(receipt: TransactionReceipt): Scom.TransferEvent[];
    decodeTransferEvent(event: Event): Scom.TransferEvent;
    allowance: {
        (params: IAllowanceParams): Promise<BigNumber>;
    };
    approve: {
        (params: IApproveParams): Promise<TransactionReceipt>;
        call: (params: IApproveParams) => Promise<boolean>;
    };
    balanceOf: {
        (account: string): Promise<BigNumber>;
    };
    cap: {
        (): Promise<BigNumber>;
    };
    decimals: {
        (): Promise<BigNumber>;
    };
    decreaseAllowance: {
        (params: IDecreaseAllowanceParams): Promise<TransactionReceipt>;
        call: (params: IDecreaseAllowanceParams) => Promise<boolean>;
    };
    increaseAllowance: {
        (params: IIncreaseAllowanceParams): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams) => Promise<boolean>;
    };
    mint: {
        (params: IMintParams): Promise<TransactionReceipt>;
        call: (params: IMintParams) => Promise<void>;
    };
    minter: {
        (): Promise<string>;
    };
    name: {
        (): Promise<string>;
    };
    symbol: {
        (): Promise<string>;
    };
    totalSupply: {
        (): Promise<BigNumber>;
    };
    transfer: {
        (params: ITransferParams): Promise<TransactionReceipt>;
        call: (params: ITransferParams) => Promise<boolean>;
    };
    transferFrom: {
        (params: ITransferFromParams): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams) => Promise<boolean>;
    };
    private assign;
}
export declare module Scom {
    interface ApprovalEvent {
        owner: string;
        spender: string;
        value: BigNumber;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        value: BigNumber;
        _event: Event;
    }
}
