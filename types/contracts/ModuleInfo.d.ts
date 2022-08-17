import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IAddReleaseParams {
    packageHash: string;
    version: string;
    uri: string;
    pulishRelease: boolean;
}
export interface IGetBatchOwnerPackagesParams {
    owner: string;
    from: number | BigNumber;
    length: number | BigNumber;
}
export interface IGetBatchOwnerPackagesAndHashParams {
    owner: string;
    from: number | BigNumber;
    length: number | BigNumber;
}
export interface IGetBatchpackageReleasesParams {
    packageHash: string;
    from: number | BigNumber;
    length: number | BigNumber;
}
export interface IOwnerPackagesParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IOwnerPackagesIndexParams {
    param1: string;
    param2: string;
}
export interface IPackageReleasesParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IPackageReleasesIndexParams {
    param1: string;
    param2: string;
}
export interface ISetCurrentVersionParams {
    packageHash: string;
    version: string;
}
export declare class ModuleInfo extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    parseCurrentVersionEvent(receipt: TransactionReceipt): ModuleInfo.CurrentVersionEvent[];
    decodeCurrentVersionEvent(event: Event): ModuleInfo.CurrentVersionEvent;
    parseNewPackageEvent(receipt: TransactionReceipt): ModuleInfo.NewPackageEvent[];
    decodeNewPackageEvent(event: Event): ModuleInfo.NewPackageEvent;
    parseNewReleaseEvent(receipt: TransactionReceipt): ModuleInfo.NewReleaseEvent[];
    decodeNewReleaseEvent(event: Event): ModuleInfo.NewReleaseEvent;
    addPackage: {
        (packageName: string): Promise<TransactionReceipt>;
        call: (packageName: string) => Promise<void>;
    };
    addRelease: {
        (params: IAddReleaseParams): Promise<TransactionReceipt>;
        call: (params: IAddReleaseParams) => Promise<void>;
    };
    getAllOwnerPackages: {
        (owner: string): Promise<string[]>;
    };
    getAllOwnerPackagesAndHash: {
        (owner: string): Promise<{
            packageNames: string[];
            packageHashes: string[];
            packages: {
                owner: string;
                currVersion: string;
                currVersionHash: string;
            }[];
        }>;
    };
    getAllpackageReleases: {
        (packageHash: string): Promise<{
            version: string;
            uri: string;
        }[]>;
    };
    getBatchOwnerPackages: {
        (params: IGetBatchOwnerPackagesParams): Promise<string[]>;
    };
    getBatchOwnerPackagesAndHash: {
        (params: IGetBatchOwnerPackagesAndHashParams): Promise<{
            packageNames: string[];
            packageHashes: string[];
            packages: {
                owner: string;
                currVersion: string;
                currVersionHash: string;
            }[];
        }>;
    };
    getBatchpackageReleases: {
        (params: IGetBatchpackageReleasesParams): Promise<{
            version: string;
            uri: string;
        }[]>;
    };
    ownerPackages: {
        (params: IOwnerPackagesParams): Promise<string>;
    };
    ownerPackagesIndex: {
        (params: IOwnerPackagesIndexParams): Promise<BigNumber>;
    };
    ownerPackagesLength: {
        (owner: string): Promise<BigNumber>;
    };
    packageProperties: {
        (param1: string): Promise<{
            owner: string;
            currVersion: string;
            currVersionHash: string;
        }>;
    };
    packageReleases: {
        (params: IPackageReleasesParams): Promise<{
            version: string;
            uri: string;
        }>;
    };
    packageReleasesIndex: {
        (params: IPackageReleasesIndexParams): Promise<BigNumber>;
    };
    packageReleasesLength: {
        (packageHash: string): Promise<BigNumber>;
    };
    setCurrentVersion: {
        (params: ISetCurrentVersionParams): Promise<TransactionReceipt>;
        call: (params: ISetCurrentVersionParams) => Promise<void>;
    };
    private assign;
}
export declare module ModuleInfo {
    interface CurrentVersionEvent {
        packageHash: string;
        version: string;
        currVersionHash: string;
        _event: Event;
    }
    interface NewPackageEvent {
        owner: string;
        packageName: string;
        packageHash: string;
        _event: Event;
    }
    interface NewReleaseEvent {
        packageHash: string;
        version: string;
        uri: string;
        _event: Event;
    }
}
