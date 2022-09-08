import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    token: string;
    auditorInfo: string;
}
export interface IAddProjectAdminParams {
    projectId: number | BigNumber;
    admin: string;
}
export interface INewPackageParams {
    projectId: number | BigNumber;
    ipfsCid: string;
}
export interface INewPackageVersionParams {
    projectId: number | BigNumber;
    packageId: number | BigNumber;
}
export interface INewProjectVersionParams {
    projectId: number | BigNumber;
    ipfsCid: string;
}
export interface IOwnersProjectsParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IOwnersProjectsInvParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IPackageVersionsListParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export interface IProjectAdminParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export interface IProjectAdminInvParams {
    param1: number | BigNumber;
    param2: string;
}
export interface IProjectBackerBalanceParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IProjectPackagesParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export interface IProjectPackagesInvParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export interface IProjectVersionListParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export interface IRemoveProjectAdminParams {
    projectId: number | BigNumber;
    admin: string;
}
export interface ISetPackageVersionToAuditingParams {
    packageVersionId: number | BigNumber;
    ipfsCid: string;
}
export interface ISetProjectCurrentVersionParams {
    projectId: number | BigNumber;
    versionIdx: number | BigNumber;
}
export interface IStakeParams {
    projectId: number | BigNumber;
    amount: number | BigNumber;
}
export interface ITransferProjectOwnershipParams {
    projectId: number | BigNumber;
    newOwner: string;
}
export interface IUnstakeParams {
    projectId: number | BigNumber;
    amount: number | BigNumber;
}
export interface IUpdatePackageIpfsCidParams {
    projectId: number | BigNumber;
    packageId: number | BigNumber;
    ipfsCid: string;
}
export interface IValidateProjectParams {
    projectVersionIdx: number | BigNumber;
    status: number | BigNumber;
}
export interface IVoidProjectVersionParams {
    projectId: number | BigNumber;
    versionIdx: number | BigNumber;
}
export declare class ProjectInfo extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseAddAdminEvent(receipt: TransactionReceipt): ProjectInfo.AddAdminEvent[];
    decodeAddAdminEvent(event: Event): ProjectInfo.AddAdminEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): ProjectInfo.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): ProjectInfo.AuthorizeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): ProjectInfo.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): ProjectInfo.DeauthorizeEvent;
    parseNewPackageEvent(receipt: TransactionReceipt): ProjectInfo.NewPackageEvent[];
    decodeNewPackageEvent(event: Event): ProjectInfo.NewPackageEvent;
    parseNewPackageVersionEvent(receipt: TransactionReceipt): ProjectInfo.NewPackageVersionEvent[];
    decodeNewPackageVersionEvent(event: Event): ProjectInfo.NewPackageVersionEvent;
    parseNewProjectEvent(receipt: TransactionReceipt): ProjectInfo.NewProjectEvent[];
    decodeNewProjectEvent(event: Event): ProjectInfo.NewProjectEvent;
    parseNewProjectVersionEvent(receipt: TransactionReceipt): ProjectInfo.NewProjectVersionEvent[];
    decodeNewProjectVersionEvent(event: Event): ProjectInfo.NewProjectVersionEvent;
    parseRemoveAdminEvent(receipt: TransactionReceipt): ProjectInfo.RemoveAdminEvent[];
    decodeRemoveAdminEvent(event: Event): ProjectInfo.RemoveAdminEvent;
    parseSetPackageVersionStatusEvent(receipt: TransactionReceipt): ProjectInfo.SetPackageVersionStatusEvent[];
    decodeSetPackageVersionStatusEvent(event: Event): ProjectInfo.SetPackageVersionStatusEvent;
    parseSetProjectCurrentVersionEvent(receipt: TransactionReceipt): ProjectInfo.SetProjectCurrentVersionEvent[];
    decodeSetProjectCurrentVersionEvent(event: Event): ProjectInfo.SetProjectCurrentVersionEvent;
    parseStakeEvent(receipt: TransactionReceipt): ProjectInfo.StakeEvent[];
    decodeStakeEvent(event: Event): ProjectInfo.StakeEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): ProjectInfo.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): ProjectInfo.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): ProjectInfo.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): ProjectInfo.TransferOwnershipEvent;
    parseTransferProjectOwnershipEvent(receipt: TransactionReceipt): ProjectInfo.TransferProjectOwnershipEvent[];
    decodeTransferProjectOwnershipEvent(event: Event): ProjectInfo.TransferProjectOwnershipEvent;
    parseUnstakeEvent(receipt: TransactionReceipt): ProjectInfo.UnstakeEvent[];
    decodeUnstakeEvent(event: Event): ProjectInfo.UnstakeEvent;
    parseUpdatePackageIpfsCidEvent(receipt: TransactionReceipt): ProjectInfo.UpdatePackageIpfsCidEvent[];
    decodeUpdatePackageIpfsCidEvent(event: Event): ProjectInfo.UpdatePackageIpfsCidEvent;
    parseValidateEvent(receipt: TransactionReceipt): ProjectInfo.ValidateEvent[];
    decodeValidateEvent(event: Event): ProjectInfo.ValidateEvent;
    parseVoidProjectVersionEvent(receipt: TransactionReceipt): ProjectInfo.VoidProjectVersionEvent[];
    decodeVoidProjectVersionEvent(event: Event): ProjectInfo.VoidProjectVersionEvent;
    addProjectAdmin: {
        (params: IAddProjectAdminParams): Promise<TransactionReceipt>;
        call: (params: IAddProjectAdminParams) => Promise<void>;
    };
    auditorInfo: {
        (): Promise<string>;
    };
    deny: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    isPermitted: {
        (param1: string): Promise<boolean>;
    };
    latestAuditedPackageVersion: {
        (param1: number | BigNumber): Promise<{
            packageId: BigNumber;
            version: BigNumber;
            status: BigNumber;
            ipfsCid: string;
        }>;
    };
    newOwner: {
        (): Promise<string>;
    };
    newPackage: {
        (params: INewPackageParams): Promise<TransactionReceipt>;
        call: (params: INewPackageParams) => Promise<BigNumber>;
    };
    newPackageVersion: {
        (params: INewPackageVersionParams): Promise<TransactionReceipt>;
        call: (params: INewPackageVersionParams) => Promise<BigNumber>;
    };
    newProject: {
        (ipfsCid: string): Promise<TransactionReceipt>;
        call: (ipfsCid: string) => Promise<BigNumber>;
    };
    newProjectVersion: {
        (params: INewProjectVersionParams): Promise<TransactionReceipt>;
        call: (params: INewProjectVersionParams) => Promise<BigNumber>;
    };
    owner: {
        (): Promise<string>;
    };
    ownersProjects: {
        (params: IOwnersProjectsParams): Promise<BigNumber>;
    };
    ownersProjectsInv: {
        (params: IOwnersProjectsInvParams): Promise<BigNumber>;
    };
    ownersProjectsLength: {
        (owner: string): Promise<BigNumber>;
    };
    packageVersions: {
        (param1: number | BigNumber): Promise<{
            packageId: BigNumber;
            version: BigNumber;
            status: BigNumber;
            ipfsCid: string;
        }>;
    };
    packageVersionsLength: {
        (): Promise<BigNumber>;
    };
    packageVersionsList: {
        (params: IPackageVersionsListParams): Promise<BigNumber>;
    };
    packageVersionsListLength: {
        (packageId: number | BigNumber): Promise<BigNumber>;
    };
    packages: {
        (param1: number | BigNumber): Promise<{
            projectId: BigNumber;
            currVersionIndex: BigNumber;
            status: BigNumber;
            ipfsCid: string;
        }>;
    };
    packagesLength: {
        (): Promise<BigNumber>;
    };
    permit: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    projectAdmin: {
        (params: IProjectAdminParams): Promise<string>;
    };
    projectAdminInv: {
        (params: IProjectAdminInvParams): Promise<BigNumber>;
    };
    projectAdminLength: {
        (projectId: number | BigNumber): Promise<BigNumber>;
    };
    projectBackerBalance: {
        (params: IProjectBackerBalanceParams): Promise<BigNumber>;
    };
    projectBalance: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    projectCount: {
        (): Promise<BigNumber>;
    };
    projectCurrentVersion: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    projectNewOwner: {
        (param1: number | BigNumber): Promise<string>;
    };
    projectOwner: {
        (param1: number | BigNumber): Promise<string>;
    };
    projectPackages: {
        (params: IProjectPackagesParams): Promise<BigNumber>;
    };
    projectPackagesInv: {
        (params: IProjectPackagesInvParams): Promise<BigNumber>;
    };
    projectPackagesLength: {
        (projectId: number | BigNumber): Promise<BigNumber>;
    };
    projectVersionList: {
        (params: IProjectVersionListParams): Promise<BigNumber>;
    };
    projectVersionListLength: {
        (projectId: number | BigNumber): Promise<BigNumber>;
    };
    projectVersions: {
        (param1: number | BigNumber): Promise<{
            projectId: BigNumber;
            version: BigNumber;
            ipfsCid: string;
            status: BigNumber;
            lastModifiedDate: BigNumber;
        }>;
    };
    projectVersionsInv: {
        (param1: string): Promise<BigNumber>;
    };
    projectVersionsLength: {
        (): Promise<BigNumber>;
    };
    removeProjectAdmin: {
        (params: IRemoveProjectAdminParams): Promise<TransactionReceipt>;
        call: (params: IRemoveProjectAdminParams) => Promise<void>;
    };
    setPackageVersionToAuditFailed: {
        (packageVersionId: number | BigNumber): Promise<TransactionReceipt>;
        call: (packageVersionId: number | BigNumber) => Promise<void>;
    };
    setPackageVersionToAuditPassed: {
        (packageVersionId: number | BigNumber): Promise<TransactionReceipt>;
        call: (packageVersionId: number | BigNumber) => Promise<void>;
    };
    setPackageVersionToAuditing: {
        (params: ISetPackageVersionToAuditingParams): Promise<TransactionReceipt>;
        call: (params: ISetPackageVersionToAuditingParams) => Promise<void>;
    };
    setProjectCurrentVersion: {
        (params: ISetProjectCurrentVersionParams): Promise<TransactionReceipt>;
        call: (params: ISetProjectCurrentVersionParams) => Promise<void>;
    };
    stake: {
        (params: IStakeParams): Promise<TransactionReceipt>;
        call: (params: IStakeParams) => Promise<void>;
    };
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    takeProjectOwnership: {
        (projectId: number | BigNumber): Promise<TransactionReceipt>;
        call: (projectId: number | BigNumber) => Promise<void>;
    };
    token: {
        (): Promise<string>;
    };
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    transferProjectOwnership: {
        (params: ITransferProjectOwnershipParams): Promise<TransactionReceipt>;
        call: (params: ITransferProjectOwnershipParams) => Promise<void>;
    };
    unstake: {
        (params: IUnstakeParams): Promise<TransactionReceipt>;
        call: (params: IUnstakeParams) => Promise<void>;
    };
    updatePackageIpfsCid: {
        (params: IUpdatePackageIpfsCidParams): Promise<TransactionReceipt>;
        call: (params: IUpdatePackageIpfsCidParams) => Promise<void>;
    };
    validateProject: {
        (params: IValidateProjectParams): Promise<TransactionReceipt>;
        call: (params: IValidateProjectParams) => Promise<void>;
    };
    voidPackageVersion: {
        (packageVersionId: number | BigNumber): Promise<TransactionReceipt>;
        call: (packageVersionId: number | BigNumber) => Promise<void>;
    };
    voidProjectVersion: {
        (params: IVoidProjectVersionParams): Promise<TransactionReceipt>;
        call: (params: IVoidProjectVersionParams) => Promise<void>;
    };
    private assign;
}
export declare module ProjectInfo {
    interface AddAdminEvent {
        projectId: BigNumber;
        admin: string;
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
    interface NewPackageEvent {
        projectId: BigNumber;
        packageId: BigNumber;
        ipfsCid: string;
        _event: Event;
    }
    interface NewPackageVersionEvent {
        packageId: BigNumber;
        packageVersionId: BigNumber;
        version: BigNumber;
        _event: Event;
    }
    interface NewProjectEvent {
        projectId: BigNumber;
        owner: string;
        _event: Event;
    }
    interface NewProjectVersionEvent {
        projectId: BigNumber;
        projectVersionIdx: BigNumber;
        ipfsCid: string;
        _event: Event;
    }
    interface RemoveAdminEvent {
        projectId: BigNumber;
        admin: string;
        _event: Event;
    }
    interface SetPackageVersionStatusEvent {
        packageId: BigNumber;
        packageVersionId: BigNumber;
        status: BigNumber;
        _event: Event;
    }
    interface SetProjectCurrentVersionEvent {
        projectId: BigNumber;
        projectVersionIdx: BigNumber;
        _event: Event;
    }
    interface StakeEvent {
        sender: string;
        projectId: BigNumber;
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
    interface TransferProjectOwnershipEvent {
        projectId: BigNumber;
        newOwner: string;
        _event: Event;
    }
    interface UnstakeEvent {
        sender: string;
        projectId: BigNumber;
        amount: BigNumber;
        newBalance: BigNumber;
        _event: Event;
    }
    interface UpdatePackageIpfsCidEvent {
        packageId: BigNumber;
        ipfsCid: string;
        _event: Event;
    }
    interface ValidateEvent {
        projectVersionIdx: BigNumber;
        status: BigNumber;
        _event: Event;
    }
    interface VoidProjectVersionEvent {
        projectVersionIdx: BigNumber;
        _event: Event;
    }
}
