import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IAllowancesParams {
    param1: string;
    param2: string;
    param3: string;
}
export interface IBalanceOfParams {
    param1: string;
    param2: string;
}
export interface IDecreaseAllowanceParams {
    spender: string;
    domainName: string;
    subtractedValue: number | BigNumber;
}
export interface IDepositParams {
    domainName: string;
    amount: number | BigNumber;
}
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
export interface IIncreaseAllowanceParams {
    spender: string;
    domainName: string;
    addedValue: number | BigNumber;
}
export interface ISpendParams {
    owner: string;
    domainName: string;
    destination: string;
    amount: number | BigNumber;
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
export interface IWithdrawParams {
    domainName: string;
    amount: number | BigNumber;
}
export declare class DomainInfo extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(token: string): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): DomainInfo.ApprovalEvent[];
    decodeApprovalEvent(event: Event): DomainInfo.ApprovalEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): DomainInfo.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): DomainInfo.AuthorizeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): DomainInfo.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): DomainInfo.DeauthorizeEvent;
    parseDepositEvent(receipt: TransactionReceipt): DomainInfo.DepositEvent[];
    decodeDepositEvent(event: Event): DomainInfo.DepositEvent;
    parseSpendEvent(receipt: TransactionReceipt): DomainInfo.SpendEvent[];
    decodeSpendEvent(event: Event): DomainInfo.SpendEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): DomainInfo.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): DomainInfo.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): DomainInfo.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): DomainInfo.TransferOwnershipEvent;
    parseUpdateDomainInfoEvent(receipt: TransactionReceipt): DomainInfo.UpdateDomainInfoEvent[];
    decodeUpdateDomainInfoEvent(event: Event): DomainInfo.UpdateDomainInfoEvent;
    parseUpdateDomainModuleEvent(receipt: TransactionReceipt): DomainInfo.UpdateDomainModuleEvent[];
    decodeUpdateDomainModuleEvent(event: Event): DomainInfo.UpdateDomainModuleEvent;
    parseWithdrawEvent(receipt: TransactionReceipt): DomainInfo.WithdrawEvent[];
    decodeWithdrawEvent(event: Event): DomainInfo.WithdrawEvent;
    allowances: {
        (params: IAllowancesParams): Promise<BigNumber>;
    };
    balanceOf: {
        (params: IBalanceOfParams): Promise<BigNumber>;
    };
    decreaseAllowance: {
        (params: IDecreaseAllowanceParams): Promise<TransactionReceipt>;
        call: (params: IDecreaseAllowanceParams) => Promise<void>;
    };
    deny: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    deposit: {
        (params: IDepositParams): Promise<TransactionReceipt>;
        call: (params: IDepositParams) => Promise<void>;
    };
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
    increaseAllowance: {
        (params: IIncreaseAllowanceParams): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams) => Promise<void>;
    };
    isPermitted: {
        (param1: string): Promise<boolean>;
    };
    newOwner: {
        (): Promise<string>;
    };
    owner: {
        (): Promise<string>;
    };
    permit: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    spend: {
        (params: ISpendParams): Promise<TransactionReceipt>;
        call: (params: ISpendParams) => Promise<void>;
    };
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    token: {
        (): Promise<string>;
    };
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    updateDomainInfo: {
        (params: IUpdateDomainInfoParams): Promise<TransactionReceipt>;
        call: (params: IUpdateDomainInfoParams) => Promise<void>;
    };
    updateDomainModule: {
        (params: IUpdateDomainModuleParams): Promise<TransactionReceipt>;
        call: (params: IUpdateDomainModuleParams) => Promise<void>;
    };
    withdraw: {
        (params: IWithdrawParams): Promise<TransactionReceipt>;
        call: (params: IWithdrawParams) => Promise<void>;
    };
    private assign;
}
export declare module DomainInfo {
    interface ApprovalEvent {
        owner: string;
        domainName: string;
        spender: string;
        value: BigNumber;
        _event: Event;
    }
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
        _event: Event;
    }
    interface DepositEvent {
        owner: string;
        domainName: string;
        amount: BigNumber;
        newBalance: BigNumber;
        _event: Event;
    }
    interface SpendEvent {
        sender: string;
        owner: string;
        domainName: string;
        spender: string;
        amount: BigNumber;
        newBalance: BigNumber;
        _event: Event;
    }
    interface StartOwnershipTransferEvent {
        user: string;
        _event: Event;
    }
    interface TransferOwnershipEvent {
        user: string;
        _event: Event;
    }
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
    interface WithdrawEvent {
        owner: string;
        domainName: string;
        amount: BigNumber;
        newBalance: BigNumber;
        _event: Event;
    }
}
