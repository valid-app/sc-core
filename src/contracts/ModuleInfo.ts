import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./ModuleInfo.json";

export interface IAddReleaseParams {packageHash:string;version:string;uri:string;pulishRelease:boolean}
export interface IGetBatchOwnerPackagesParams {owner:string;from:number|BigNumber;length:number|BigNumber}
export interface IGetBatchOwnerPackagesAndHashParams {owner:string;from:number|BigNumber;length:number|BigNumber}
export interface IGetBatchpackageReleasesParams {packageHash:string;from:number|BigNumber;length:number|BigNumber}
export interface IOwnerPackagesParams {param1:string;param2:number|BigNumber}
export interface IOwnerPackagesIndexParams {param1:string;param2:string}
export interface IPackageReleasesParams {param1:string;param2:number|BigNumber}
export interface IPackageReleasesIndexParams {param1:string;param2:string}
export interface ISetCurrentVersionParams {packageHash:string;version:string}
export class ModuleInfo extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    parseCurrentVersionEvent(receipt: TransactionReceipt): ModuleInfo.CurrentVersionEvent[]{
        return this.parseEvents(receipt, "CurrentVersion").map(e=>this.decodeCurrentVersionEvent(e));
    }
    decodeCurrentVersionEvent(event: Event): ModuleInfo.CurrentVersionEvent{
        let result = event.data;
        return {
            packageHash: result.packageHash,
            version: result.version,
            currVersionHash: result.currVersionHash,
            _event: event
        };
    }
    parseNewPackageEvent(receipt: TransactionReceipt): ModuleInfo.NewPackageEvent[]{
        return this.parseEvents(receipt, "NewPackage").map(e=>this.decodeNewPackageEvent(e));
    }
    decodeNewPackageEvent(event: Event): ModuleInfo.NewPackageEvent{
        let result = event.data;
        return {
            owner: result.owner,
            packageName: result.packageName,
            packageHash: result.packageHash,
            _event: event
        };
    }
    parseNewReleaseEvent(receipt: TransactionReceipt): ModuleInfo.NewReleaseEvent[]{
        return this.parseEvents(receipt, "NewRelease").map(e=>this.decodeNewReleaseEvent(e));
    }
    decodeNewReleaseEvent(event: Event): ModuleInfo.NewReleaseEvent{
        let result = event.data;
        return {
            packageHash: result.packageHash,
            version: result.version,
            uri: result.uri,
            _event: event
        };
    }
    addPackage: {
        (packageName:string): Promise<TransactionReceipt>;
        call: (packageName:string) => Promise<void>;
    }
    addRelease: {
        (params: IAddReleaseParams): Promise<TransactionReceipt>;
        call: (params: IAddReleaseParams) => Promise<void>;
    }
    getAllOwnerPackages: {
        (owner:string): Promise<string[]>;
    }
    getAllOwnerPackagesAndHash: {
        (owner:string): Promise<{packageNames:string[],packageHashes:string[],packages:{owner:string,currVersion:string,currVersionHash:string}[]}>;
    }
    getAllpackageReleases: {
        (packageHash:string): Promise<{version:string,uri:string}[]>;
    }
    getBatchOwnerPackages: {
        (params: IGetBatchOwnerPackagesParams): Promise<string[]>;
    }
    getBatchOwnerPackagesAndHash: {
        (params: IGetBatchOwnerPackagesAndHashParams): Promise<{packageNames:string[],packageHashes:string[],packages:{owner:string,currVersion:string,currVersionHash:string}[]}>;
    }
    getBatchpackageReleases: {
        (params: IGetBatchpackageReleasesParams): Promise<{version:string,uri:string}[]>;
    }
    ownerPackages: {
        (params: IOwnerPackagesParams): Promise<string>;
    }
    ownerPackagesIndex: {
        (params: IOwnerPackagesIndexParams): Promise<BigNumber>;
    }
    ownerPackagesLength: {
        (owner:string): Promise<BigNumber>;
    }
    packageProperties: {
        (param1:string): Promise<{owner:string,currVersion:string,currVersionHash:string}>;
    }
    packageReleases: {
        (params: IPackageReleasesParams): Promise<{version:string,uri:string}>;
    }
    packageReleasesIndex: {
        (params: IPackageReleasesIndexParams): Promise<BigNumber>;
    }
    packageReleasesLength: {
        (packageHash:string): Promise<BigNumber>;
    }
    setCurrentVersion: {
        (params: ISetCurrentVersionParams): Promise<TransactionReceipt>;
        call: (params: ISetCurrentVersionParams) => Promise<void>;
    }
    private assign(){
        let getAllOwnerPackages_call = async (owner:string): Promise<string[]> => {
            let result = await this.call('getAllOwnerPackages',[owner]);
            return result;
        }
        this.getAllOwnerPackages = getAllOwnerPackages_call
        let getAllOwnerPackagesAndHash_call = async (owner:string): Promise<{packageNames:string[],packageHashes:string[],packages:{owner:string,currVersion:string,currVersionHash:string}[]}> => {
            let result = await this.call('getAllOwnerPackagesAndHash',[owner]);
            return {
                packageNames: result.packageNames,
                packageHashes: result.packageHashes,
                packages: result.packages.map(e=>(
                    {
                        owner: e.owner,
                        currVersion: e.currVersion,
                        currVersionHash: e.currVersionHash
                    }
                ))
            };
        }
        this.getAllOwnerPackagesAndHash = getAllOwnerPackagesAndHash_call
        let getAllpackageReleases_call = async (packageHash:string): Promise<{version:string,uri:string}[]> => {
            let result = await this.call('getAllpackageReleases',[Utils.stringToBytes32(packageHash)]);
            return (result.map(e=>(
                {
                    version: e.version,
                    uri: e.uri
                }
            )));
        }
        this.getAllpackageReleases = getAllpackageReleases_call
        let getBatchOwnerPackagesParams = (params: IGetBatchOwnerPackagesParams) => [params.owner,Utils.toString(params.from),Utils.toString(params.length)];
        let getBatchOwnerPackages_call = async (params: IGetBatchOwnerPackagesParams): Promise<string[]> => {
            let result = await this.call('getBatchOwnerPackages',getBatchOwnerPackagesParams(params));
            return result;
        }
        this.getBatchOwnerPackages = getBatchOwnerPackages_call
        let getBatchOwnerPackagesAndHashParams = (params: IGetBatchOwnerPackagesAndHashParams) => [params.owner,Utils.toString(params.from),Utils.toString(params.length)];
        let getBatchOwnerPackagesAndHash_call = async (params: IGetBatchOwnerPackagesAndHashParams): Promise<{packageNames:string[],packageHashes:string[],packages:{owner:string,currVersion:string,currVersionHash:string}[]}> => {
            let result = await this.call('getBatchOwnerPackagesAndHash',getBatchOwnerPackagesAndHashParams(params));
            return {
                packageNames: result.packageNames,
                packageHashes: result.packageHashes,
                packages: result.packages.map(e=>(
                    {
                        owner: e.owner,
                        currVersion: e.currVersion,
                        currVersionHash: e.currVersionHash
                    }
                ))
            };
        }
        this.getBatchOwnerPackagesAndHash = getBatchOwnerPackagesAndHash_call
        let getBatchpackageReleasesParams = (params: IGetBatchpackageReleasesParams) => [Utils.stringToBytes32(params.packageHash),Utils.toString(params.from),Utils.toString(params.length)];
        let getBatchpackageReleases_call = async (params: IGetBatchpackageReleasesParams): Promise<{version:string,uri:string}[]> => {
            let result = await this.call('getBatchpackageReleases',getBatchpackageReleasesParams(params));
            return (result.map(e=>(
                {
                    version: e.version,
                    uri: e.uri
                }
            )));
        }
        this.getBatchpackageReleases = getBatchpackageReleases_call
        let ownerPackagesParams = (params: IOwnerPackagesParams) => [params.param1,Utils.toString(params.param2)];
        let ownerPackages_call = async (params: IOwnerPackagesParams): Promise<string> => {
            let result = await this.call('ownerPackages',ownerPackagesParams(params));
            return result;
        }
        this.ownerPackages = ownerPackages_call
        let ownerPackagesIndexParams = (params: IOwnerPackagesIndexParams) => [params.param1,params.param2];
        let ownerPackagesIndex_call = async (params: IOwnerPackagesIndexParams): Promise<BigNumber> => {
            let result = await this.call('ownerPackagesIndex',ownerPackagesIndexParams(params));
            return new BigNumber(result);
        }
        this.ownerPackagesIndex = ownerPackagesIndex_call
        let ownerPackagesLength_call = async (owner:string): Promise<BigNumber> => {
            let result = await this.call('ownerPackagesLength',[owner]);
            return new BigNumber(result);
        }
        this.ownerPackagesLength = ownerPackagesLength_call
        let packageProperties_call = async (param1:string): Promise<{owner:string,currVersion:string,currVersionHash:string}> => {
            let result = await this.call('packageProperties',[Utils.stringToBytes32(param1)]);
            return {
                owner: result.owner,
                currVersion: result.currVersion,
                currVersionHash: result.currVersionHash
            };
        }
        this.packageProperties = packageProperties_call
        let packageReleasesParams = (params: IPackageReleasesParams) => [Utils.stringToBytes32(params.param1),Utils.toString(params.param2)];
        let packageReleases_call = async (params: IPackageReleasesParams): Promise<{version:string,uri:string}> => {
            let result = await this.call('packageReleases',packageReleasesParams(params));
            return {
                version: result.version,
                uri: result.uri
            };
        }
        this.packageReleases = packageReleases_call
        let packageReleasesIndexParams = (params: IPackageReleasesIndexParams) => [Utils.stringToBytes32(params.param1),params.param2];
        let packageReleasesIndex_call = async (params: IPackageReleasesIndexParams): Promise<BigNumber> => {
            let result = await this.call('packageReleasesIndex',packageReleasesIndexParams(params));
            return new BigNumber(result);
        }
        this.packageReleasesIndex = packageReleasesIndex_call
        let packageReleasesLength_call = async (packageHash:string): Promise<BigNumber> => {
            let result = await this.call('packageReleasesLength',[Utils.stringToBytes32(packageHash)]);
            return new BigNumber(result);
        }
        this.packageReleasesLength = packageReleasesLength_call
        let addPackage_send = async (packageName:string): Promise<TransactionReceipt> => {
            let result = await this.send('addPackage',[packageName]);
            return result;
        }
        let addPackage_call = async (packageName:string): Promise<void> => {
            let result = await this.call('addPackage',[packageName]);
            return;
        }
        this.addPackage = Object.assign(addPackage_send, {
            call:addPackage_call
        });
        let addReleaseParams = (params: IAddReleaseParams) => [Utils.stringToBytes32(params.packageHash),params.version,params.uri,params.pulishRelease];
        let addRelease_send = async (params: IAddReleaseParams): Promise<TransactionReceipt> => {
            let result = await this.send('addRelease',addReleaseParams(params));
            return result;
        }
        let addRelease_call = async (params: IAddReleaseParams): Promise<void> => {
            let result = await this.call('addRelease',addReleaseParams(params));
            return;
        }
        this.addRelease = Object.assign(addRelease_send, {
            call:addRelease_call
        });
        let setCurrentVersionParams = (params: ISetCurrentVersionParams) => [Utils.stringToBytes32(params.packageHash),params.version];
        let setCurrentVersion_send = async (params: ISetCurrentVersionParams): Promise<TransactionReceipt> => {
            let result = await this.send('setCurrentVersion',setCurrentVersionParams(params));
            return result;
        }
        let setCurrentVersion_call = async (params: ISetCurrentVersionParams): Promise<void> => {
            let result = await this.call('setCurrentVersion',setCurrentVersionParams(params));
            return;
        }
        this.setCurrentVersion = Object.assign(setCurrentVersion_send, {
            call:setCurrentVersion_call
        });
    }
}
export module ModuleInfo{
    export interface CurrentVersionEvent {packageHash:string,version:string,currVersionHash:string,_event:Event}
    export interface NewPackageEvent {owner:string,packageName:string,packageHash:string,_event:Event}
    export interface NewReleaseEvent {packageHash:string,version:string,uri:string,_event:Event}
}