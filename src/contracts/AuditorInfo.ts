import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./AuditorInfo.json";

export interface IDeployParams {token:string;cooldownPeriod:number|BigNumber}
export interface IGetAuditorsParams {auditorIdStart:number|BigNumber;length:number|BigNumber}
export class AuditorInfo extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.token,Utils.toString(params.cooldownPeriod)]);
    }
    parseAddAuditorEvent(receipt: TransactionReceipt): AuditorInfo.AddAuditorEvent[]{
        return this.parseEvents(receipt, "AddAuditor").map(e=>this.decodeAddAuditorEvent(e));
    }
    decodeAddAuditorEvent(event: Event): AuditorInfo.AddAuditorEvent{
        let result = event.data;
        return {
            auditor: result.auditor,
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): AuditorInfo.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): AuditorInfo.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): AuditorInfo.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): AuditorInfo.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDisableAuditorEvent(receipt: TransactionReceipt): AuditorInfo.DisableAuditorEvent[]{
        return this.parseEvents(receipt, "DisableAuditor").map(e=>this.decodeDisableAuditorEvent(e));
    }
    decodeDisableAuditorEvent(event: Event): AuditorInfo.DisableAuditorEvent{
        let result = event.data;
        return {
            auditor: result.auditor,
            _event: event
        };
    }
    parseSetCooldownPeriodEvent(receipt: TransactionReceipt): AuditorInfo.SetCooldownPeriodEvent[]{
        return this.parseEvents(receipt, "SetCooldownPeriod").map(e=>this.decodeSetCooldownPeriodEvent(e));
    }
    decodeSetCooldownPeriodEvent(event: Event): AuditorInfo.SetCooldownPeriodEvent{
        let result = event.data;
        return {
            cooldownPeriod: new BigNumber(result.cooldownPeriod),
            _event: event
        };
    }
    parseStakeBondEvent(receipt: TransactionReceipt): AuditorInfo.StakeBondEvent[]{
        return this.parseEvents(receipt, "StakeBond").map(e=>this.decodeStakeBondEvent(e));
    }
    decodeStakeBondEvent(event: Event): AuditorInfo.StakeBondEvent{
        let result = event.data;
        return {
            sender: result.sender,
            amount: new BigNumber(result.amount),
            newBalance: new BigNumber(result.newBalance),
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): AuditorInfo.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): AuditorInfo.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): AuditorInfo.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): AuditorInfo.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUnstakeBondRequestEvent(receipt: TransactionReceipt): AuditorInfo.UnstakeBondRequestEvent[]{
        return this.parseEvents(receipt, "UnstakeBondRequest").map(e=>this.decodeUnstakeBondRequestEvent(e));
    }
    decodeUnstakeBondRequestEvent(event: Event): AuditorInfo.UnstakeBondRequestEvent{
        let result = event.data;
        return {
            sender: result.sender,
            amount: new BigNumber(result.amount),
            newBalance: new BigNumber(result.newBalance),
            _event: event
        };
    }
    parseWithdrawBondEvent(receipt: TransactionReceipt): AuditorInfo.WithdrawBondEvent[]{
        return this.parseEvents(receipt, "WithdrawBond").map(e=>this.decodeWithdrawBondEvent(e));
    }
    decodeWithdrawBondEvent(event: Event): AuditorInfo.WithdrawBondEvent{
        let result = event.data;
        return {
            sender: result.sender,
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    MAX_COOLDOWN_PERIOD: {
        (): Promise<BigNumber>;
    }
    addAuditor: {
        (auditor:string): Promise<TransactionReceipt>;
        call: (auditor:string) => Promise<void>;
    }
    auditorBalance: {
        (param1:number|BigNumber): Promise<BigNumber>;
    }
    auditorIdCount: {
        (): Promise<BigNumber>;
    }
    auditorIds: {
        (param1:string): Promise<BigNumber>;
    }
    auditorsData: {
        (param1:number|BigNumber): Promise<{auditor:string,status:BigNumber}>;
    }
    cooldownPeriod: {
        (): Promise<BigNumber>;
    }
    deny: {
        (user:string): Promise<TransactionReceipt>;
        call: (user:string) => Promise<void>;
    }
    disableAuditor: {
        (auditor:string): Promise<TransactionReceipt>;
        call: (auditor:string) => Promise<void>;
    }
    getAuditors: {
        (params: IGetAuditorsParams): Promise<{auditor:string,status:BigNumber}[]>;
    }
    isActiveAuditor: {
        (account:string): Promise<boolean>;
    }
    isPermitted: {
        (param1:string): Promise<boolean>;
    }
    newOwner: {
        (): Promise<string>;
    }
    owner: {
        (): Promise<string>;
    }
    pendingWithdrawal: {
        (param1:number|BigNumber): Promise<{amount:BigNumber,releaseTime:BigNumber}>;
    }
    permit: {
        (user:string): Promise<TransactionReceipt>;
        call: (user:string) => Promise<void>;
    }
    setCooldownPeriod: {
        (cooldownPeriod:number|BigNumber): Promise<TransactionReceipt>;
        call: (cooldownPeriod:number|BigNumber) => Promise<void>;
    }
    stakeBond: {
        (amount:number|BigNumber): Promise<TransactionReceipt>;
        call: (amount:number|BigNumber) => Promise<void>;
    }
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    token: {
        (): Promise<string>;
    }
    transferOwnership: {
        (newOwner:string): Promise<TransactionReceipt>;
        call: (newOwner:string) => Promise<void>;
    }
    unstakeBondRequest: {
        (amount:number|BigNumber): Promise<TransactionReceipt>;
        call: (amount:number|BigNumber) => Promise<void>;
    }
    withdrawBond: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    private assign(){
        let MAX_COOLDOWN_PERIOD_call = async (): Promise<BigNumber> => {
            let result = await this.call('MAX_COOLDOWN_PERIOD');
            return new BigNumber(result);
        }
        this.MAX_COOLDOWN_PERIOD = MAX_COOLDOWN_PERIOD_call
        let auditorBalance_call = async (param1:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('auditorBalance',[Utils.toString(param1)]);
            return new BigNumber(result);
        }
        this.auditorBalance = auditorBalance_call
        let auditorIdCount_call = async (): Promise<BigNumber> => {
            let result = await this.call('auditorIdCount');
            return new BigNumber(result);
        }
        this.auditorIdCount = auditorIdCount_call
        let auditorIds_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('auditorIds',[param1]);
            return new BigNumber(result);
        }
        this.auditorIds = auditorIds_call
        let auditorsData_call = async (param1:number|BigNumber): Promise<{auditor:string,status:BigNumber}> => {
            let result = await this.call('auditorsData',[Utils.toString(param1)]);
            return {
                auditor: result.auditor,
                status: new BigNumber(result.status)
            };
        }
        this.auditorsData = auditorsData_call
        let cooldownPeriod_call = async (): Promise<BigNumber> => {
            let result = await this.call('cooldownPeriod');
            return new BigNumber(result);
        }
        this.cooldownPeriod = cooldownPeriod_call
        let getAuditorsParams = (params: IGetAuditorsParams) => [Utils.toString(params.auditorIdStart),Utils.toString(params.length)];
        let getAuditors_call = async (params: IGetAuditorsParams): Promise<{auditor:string,status:BigNumber}[]> => {
            let result = await this.call('getAuditors',getAuditorsParams(params));
            return (result.map(e=>(
                {
                    auditor: e.auditor,
                    status: new BigNumber(e.status)
                }
            )));
        }
        this.getAuditors = getAuditors_call
        let isActiveAuditor_call = async (account:string): Promise<boolean> => {
            let result = await this.call('isActiveAuditor',[account]);
            return result;
        }
        this.isActiveAuditor = isActiveAuditor_call
        let isPermitted_call = async (param1:string): Promise<boolean> => {
            let result = await this.call('isPermitted',[param1]);
            return result;
        }
        this.isPermitted = isPermitted_call
        let newOwner_call = async (): Promise<string> => {
            let result = await this.call('newOwner');
            return result;
        }
        this.newOwner = newOwner_call
        let owner_call = async (): Promise<string> => {
            let result = await this.call('owner');
            return result;
        }
        this.owner = owner_call
        let pendingWithdrawal_call = async (param1:number|BigNumber): Promise<{amount:BigNumber,releaseTime:BigNumber}> => {
            let result = await this.call('pendingWithdrawal',[Utils.toString(param1)]);
            return {
                amount: new BigNumber(result.amount),
                releaseTime: new BigNumber(result.releaseTime)
            };
        }
        this.pendingWithdrawal = pendingWithdrawal_call
        let token_call = async (): Promise<string> => {
            let result = await this.call('token');
            return result;
        }
        this.token = token_call
        let addAuditor_send = async (auditor:string): Promise<TransactionReceipt> => {
            let result = await this.send('addAuditor',[auditor]);
            return result;
        }
        let addAuditor_call = async (auditor:string): Promise<void> => {
            let result = await this.call('addAuditor',[auditor]);
            return;
        }
        this.addAuditor = Object.assign(addAuditor_send, {
            call:addAuditor_call
        });
        let deny_send = async (user:string): Promise<TransactionReceipt> => {
            let result = await this.send('deny',[user]);
            return result;
        }
        let deny_call = async (user:string): Promise<void> => {
            let result = await this.call('deny',[user]);
            return;
        }
        this.deny = Object.assign(deny_send, {
            call:deny_call
        });
        let disableAuditor_send = async (auditor:string): Promise<TransactionReceipt> => {
            let result = await this.send('disableAuditor',[auditor]);
            return result;
        }
        let disableAuditor_call = async (auditor:string): Promise<void> => {
            let result = await this.call('disableAuditor',[auditor]);
            return;
        }
        this.disableAuditor = Object.assign(disableAuditor_send, {
            call:disableAuditor_call
        });
        let permit_send = async (user:string): Promise<TransactionReceipt> => {
            let result = await this.send('permit',[user]);
            return result;
        }
        let permit_call = async (user:string): Promise<void> => {
            let result = await this.call('permit',[user]);
            return;
        }
        this.permit = Object.assign(permit_send, {
            call:permit_call
        });
        let setCooldownPeriod_send = async (cooldownPeriod:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('setCooldownPeriod',[Utils.toString(cooldownPeriod)]);
            return result;
        }
        let setCooldownPeriod_call = async (cooldownPeriod:number|BigNumber): Promise<void> => {
            let result = await this.call('setCooldownPeriod',[Utils.toString(cooldownPeriod)]);
            return;
        }
        this.setCooldownPeriod = Object.assign(setCooldownPeriod_send, {
            call:setCooldownPeriod_call
        });
        let stakeBond_send = async (amount:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('stakeBond',[Utils.toString(amount)]);
            return result;
        }
        let stakeBond_call = async (amount:number|BigNumber): Promise<void> => {
            let result = await this.call('stakeBond',[Utils.toString(amount)]);
            return;
        }
        this.stakeBond = Object.assign(stakeBond_send, {
            call:stakeBond_call
        });
        let takeOwnership_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('takeOwnership');
            return result;
        }
        let takeOwnership_call = async (): Promise<void> => {
            let result = await this.call('takeOwnership');
            return;
        }
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call:takeOwnership_call
        });
        let transferOwnership_send = async (newOwner:string): Promise<TransactionReceipt> => {
            let result = await this.send('transferOwnership',[newOwner]);
            return result;
        }
        let transferOwnership_call = async (newOwner:string): Promise<void> => {
            let result = await this.call('transferOwnership',[newOwner]);
            return;
        }
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call:transferOwnership_call
        });
        let unstakeBondRequest_send = async (amount:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('unstakeBondRequest',[Utils.toString(amount)]);
            return result;
        }
        let unstakeBondRequest_call = async (amount:number|BigNumber): Promise<void> => {
            let result = await this.call('unstakeBondRequest',[Utils.toString(amount)]);
            return;
        }
        this.unstakeBondRequest = Object.assign(unstakeBondRequest_send, {
            call:unstakeBondRequest_call
        });
        let withdrawBond_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('withdrawBond');
            return result;
        }
        let withdrawBond_call = async (): Promise<void> => {
            let result = await this.call('withdrawBond');
            return;
        }
        this.withdrawBond = Object.assign(withdrawBond_send, {
            call:withdrawBond_call
        });
    }
}
export module AuditorInfo{
    export interface AddAuditorEvent {auditor:string,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface DisableAuditorEvent {auditor:string,_event:Event}
    export interface SetCooldownPeriodEvent {cooldownPeriod:BigNumber,_event:Event}
    export interface StakeBondEvent {sender:string,amount:BigNumber,newBalance:BigNumber,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
    export interface UnstakeBondRequestEvent {sender:string,amount:BigNumber,newBalance:BigNumber,_event:Event}
    export interface WithdrawBondEvent {sender:string,amount:BigNumber,_event:Event}
}