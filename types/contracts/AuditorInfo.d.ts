import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    token: string;
    cooldownPeriod: number | BigNumber;
}
export interface IGetAuditorsParams {
    auditorIdStart: number | BigNumber;
    length: number | BigNumber;
}
export declare class AuditorInfo extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseAddAuditorEvent(receipt: TransactionReceipt): AuditorInfo.AddAuditorEvent[];
    decodeAddAuditorEvent(event: Event): AuditorInfo.AddAuditorEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): AuditorInfo.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): AuditorInfo.AuthorizeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): AuditorInfo.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): AuditorInfo.DeauthorizeEvent;
    parseDisableAuditorEvent(receipt: TransactionReceipt): AuditorInfo.DisableAuditorEvent[];
    decodeDisableAuditorEvent(event: Event): AuditorInfo.DisableAuditorEvent;
    parseSetCooldownPeriodEvent(receipt: TransactionReceipt): AuditorInfo.SetCooldownPeriodEvent[];
    decodeSetCooldownPeriodEvent(event: Event): AuditorInfo.SetCooldownPeriodEvent;
    parseStakeBondEvent(receipt: TransactionReceipt): AuditorInfo.StakeBondEvent[];
    decodeStakeBondEvent(event: Event): AuditorInfo.StakeBondEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): AuditorInfo.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): AuditorInfo.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): AuditorInfo.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): AuditorInfo.TransferOwnershipEvent;
    parseUnstakeBondRequestEvent(receipt: TransactionReceipt): AuditorInfo.UnstakeBondRequestEvent[];
    decodeUnstakeBondRequestEvent(event: Event): AuditorInfo.UnstakeBondRequestEvent;
    parseWithdrawBondEvent(receipt: TransactionReceipt): AuditorInfo.WithdrawBondEvent[];
    decodeWithdrawBondEvent(event: Event): AuditorInfo.WithdrawBondEvent;
    MAX_COOLDOWN_PERIOD: {
        (): Promise<BigNumber>;
    };
    addAuditor: {
        (auditor: string): Promise<TransactionReceipt>;
        call: (auditor: string) => Promise<void>;
    };
    auditorBalance: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    auditorIdCount: {
        (): Promise<BigNumber>;
    };
    auditorIds: {
        (param1: string): Promise<BigNumber>;
    };
    auditorsData: {
        (param1: number | BigNumber): Promise<{
            auditor: string;
            status: BigNumber;
        }>;
    };
    cooldownPeriod: {
        (): Promise<BigNumber>;
    };
    deny: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    disableAuditor: {
        (auditor: string): Promise<TransactionReceipt>;
        call: (auditor: string) => Promise<void>;
    };
    getAuditors: {
        (params: IGetAuditorsParams): Promise<{
            auditor: string;
            status: BigNumber;
        }[]>;
    };
    isActiveAuditor: {
        (account: string): Promise<boolean>;
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
    pendingWithdrawal: {
        (param1: number | BigNumber): Promise<{
            amount: BigNumber;
            releaseTime: BigNumber;
        }>;
    };
    permit: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    setCooldownPeriod: {
        (cooldownPeriod: number | BigNumber): Promise<TransactionReceipt>;
        call: (cooldownPeriod: number | BigNumber) => Promise<void>;
    };
    stakeBond: {
        (amount: number | BigNumber): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber) => Promise<void>;
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
    unstakeBondRequest: {
        (amount: number | BigNumber): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber) => Promise<void>;
    };
    withdrawBond: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    private assign;
}
export declare module AuditorInfo {
    interface AddAuditorEvent {
        auditor: string;
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
    interface DisableAuditorEvent {
        auditor: string;
        _event: Event;
    }
    interface SetCooldownPeriodEvent {
        cooldownPeriod: BigNumber;
        _event: Event;
    }
    interface StakeBondEvent {
        sender: string;
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
    interface UnstakeBondRequestEvent {
        sender: string;
        amount: BigNumber;
        newBalance: BigNumber;
        _event: Event;
    }
    interface WithdrawBondEvent {
        sender: string;
        amount: BigNumber;
        _event: Event;
    }
}
