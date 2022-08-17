import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./ProjectInfo.json";

export interface IAddProjectAdminParams {projectId:number|BigNumber;admin:string}
export interface INewPackageParams {projectId:number|BigNumber;ipfsCid:string}
export interface INewPackageVersionParams {projectId:number|BigNumber;packageId:number|BigNumber}
export interface INewProjectVersionParams {projectId:number|BigNumber;ipfsCid:string}
export interface IOwnersProjectsParams {param1:string;param2:number|BigNumber}
export interface IOwnersProjectsInvParams {param1:string;param2:number|BigNumber}
export interface IPackageVersionsListParams {param1:number|BigNumber;param2:number|BigNumber}
export interface IProjectAdminParams {param1:number|BigNumber;param2:number|BigNumber}
export interface IProjectAdminInvParams {param1:number|BigNumber;param2:string}
export interface IProjectPackagesParams {param1:number|BigNumber;param2:number|BigNumber}
export interface IProjectPackagesInvParams {param1:number|BigNumber;param2:number|BigNumber}
export interface IProjectVersionListParams {param1:number|BigNumber;param2:number|BigNumber}
export interface IRemoveProjectAdminParams {projectId:number|BigNumber;admin:string}
export interface ISetPackageVersionToAuditingParams {packageVersionId:number|BigNumber;ipfsCid:string}
export interface ISetProjectCurrentVersionParams {projectId:number|BigNumber;versionIdx:number|BigNumber}
export interface ITransferProjectOwnershipParams {projectId:number|BigNumber;newOwner:string}
export interface IUpdatePackageIpfsCidParams {projectId:number|BigNumber;packageId:number|BigNumber;ipfsCid:string}
export interface IValidateProjectParams {projectVersionIdx:number|BigNumber;status:number|BigNumber}
export interface IVoidProjectVersionParams {projectId:number|BigNumber;versionIdx:number|BigNumber}
export class ProjectInfo extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(validator:string): Promise<string>{
        return this.__deploy([validator]);
    }
    parseAddAdminEvent(receipt: TransactionReceipt): ProjectInfo.AddAdminEvent[]{
        return this.parseEvents(receipt, "AddAdmin").map(e=>this.decodeAddAdminEvent(e));
    }
    decodeAddAdminEvent(event: Event): ProjectInfo.AddAdminEvent{
        let result = event.data;
        return {
            projectId: new BigNumber(result.projectId),
            admin: result.admin,
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): ProjectInfo.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): ProjectInfo.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): ProjectInfo.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): ProjectInfo.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseNewPackageEvent(receipt: TransactionReceipt): ProjectInfo.NewPackageEvent[]{
        return this.parseEvents(receipt, "NewPackage").map(e=>this.decodeNewPackageEvent(e));
    }
    decodeNewPackageEvent(event: Event): ProjectInfo.NewPackageEvent{
        let result = event.data;
        return {
            projectId: new BigNumber(result.projectId),
            packageId: new BigNumber(result.packageId),
            ipfsCid: result.ipfsCid,
            _event: event
        };
    }
    parseNewPackageVersionEvent(receipt: TransactionReceipt): ProjectInfo.NewPackageVersionEvent[]{
        return this.parseEvents(receipt, "NewPackageVersion").map(e=>this.decodeNewPackageVersionEvent(e));
    }
    decodeNewPackageVersionEvent(event: Event): ProjectInfo.NewPackageVersionEvent{
        let result = event.data;
        return {
            packageId: new BigNumber(result.packageId),
            packageVersionId: new BigNumber(result.packageVersionId),
            version: new BigNumber(result.version),
            _event: event
        };
    }
    parseNewProjectEvent(receipt: TransactionReceipt): ProjectInfo.NewProjectEvent[]{
        return this.parseEvents(receipt, "NewProject").map(e=>this.decodeNewProjectEvent(e));
    }
    decodeNewProjectEvent(event: Event): ProjectInfo.NewProjectEvent{
        let result = event.data;
        return {
            projectId: new BigNumber(result.projectId),
            owner: result.owner,
            _event: event
        };
    }
    parseNewProjectVersionEvent(receipt: TransactionReceipt): ProjectInfo.NewProjectVersionEvent[]{
        return this.parseEvents(receipt, "NewProjectVersion").map(e=>this.decodeNewProjectVersionEvent(e));
    }
    decodeNewProjectVersionEvent(event: Event): ProjectInfo.NewProjectVersionEvent{
        let result = event.data;
        return {
            projectId: new BigNumber(result.projectId),
            projectVersionIdx: new BigNumber(result.projectVersionIdx),
            ipfsCid: result.ipfsCid,
            _event: event
        };
    }
    parseRemoveAdminEvent(receipt: TransactionReceipt): ProjectInfo.RemoveAdminEvent[]{
        return this.parseEvents(receipt, "RemoveAdmin").map(e=>this.decodeRemoveAdminEvent(e));
    }
    decodeRemoveAdminEvent(event: Event): ProjectInfo.RemoveAdminEvent{
        let result = event.data;
        return {
            projectId: new BigNumber(result.projectId),
            admin: result.admin,
            _event: event
        };
    }
    parseSetPackageVersionStatusEvent(receipt: TransactionReceipt): ProjectInfo.SetPackageVersionStatusEvent[]{
        return this.parseEvents(receipt, "SetPackageVersionStatus").map(e=>this.decodeSetPackageVersionStatusEvent(e));
    }
    decodeSetPackageVersionStatusEvent(event: Event): ProjectInfo.SetPackageVersionStatusEvent{
        let result = event.data;
        return {
            packageId: new BigNumber(result.packageId),
            packageVersionId: new BigNumber(result.packageVersionId),
            status: new BigNumber(result.status),
            _event: event
        };
    }
    parseSetProjectCurrentVersionEvent(receipt: TransactionReceipt): ProjectInfo.SetProjectCurrentVersionEvent[]{
        return this.parseEvents(receipt, "SetProjectCurrentVersion").map(e=>this.decodeSetProjectCurrentVersionEvent(e));
    }
    decodeSetProjectCurrentVersionEvent(event: Event): ProjectInfo.SetProjectCurrentVersionEvent{
        let result = event.data;
        return {
            projectId: new BigNumber(result.projectId),
            projectVersionIdx: new BigNumber(result.projectVersionIdx),
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): ProjectInfo.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): ProjectInfo.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): ProjectInfo.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): ProjectInfo.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferProjectOwnershipEvent(receipt: TransactionReceipt): ProjectInfo.TransferProjectOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferProjectOwnership").map(e=>this.decodeTransferProjectOwnershipEvent(e));
    }
    decodeTransferProjectOwnershipEvent(event: Event): ProjectInfo.TransferProjectOwnershipEvent{
        let result = event.data;
        return {
            projectId: new BigNumber(result.projectId),
            newOwner: result.newOwner,
            _event: event
        };
    }
    parseUpdatePackageIpfsCidEvent(receipt: TransactionReceipt): ProjectInfo.UpdatePackageIpfsCidEvent[]{
        return this.parseEvents(receipt, "UpdatePackageIpfsCid").map(e=>this.decodeUpdatePackageIpfsCidEvent(e));
    }
    decodeUpdatePackageIpfsCidEvent(event: Event): ProjectInfo.UpdatePackageIpfsCidEvent{
        let result = event.data;
        return {
            packageId: new BigNumber(result.packageId),
            ipfsCid: result.ipfsCid,
            _event: event
        };
    }
    parseUpdateValidatorEvent(receipt: TransactionReceipt): ProjectInfo.UpdateValidatorEvent[]{
        return this.parseEvents(receipt, "UpdateValidator").map(e=>this.decodeUpdateValidatorEvent(e));
    }
    decodeUpdateValidatorEvent(event: Event): ProjectInfo.UpdateValidatorEvent{
        let result = event.data;
        return {
            validator: result.validator,
            _event: event
        };
    }
    parseValidateEvent(receipt: TransactionReceipt): ProjectInfo.ValidateEvent[]{
        return this.parseEvents(receipt, "Validate").map(e=>this.decodeValidateEvent(e));
    }
    decodeValidateEvent(event: Event): ProjectInfo.ValidateEvent{
        let result = event.data;
        return {
            projectVersionIdx: new BigNumber(result.projectVersionIdx),
            status: new BigNumber(result.status),
            _event: event
        };
    }
    parseVoidProjectVersionEvent(receipt: TransactionReceipt): ProjectInfo.VoidProjectVersionEvent[]{
        return this.parseEvents(receipt, "VoidProjectVersion").map(e=>this.decodeVoidProjectVersionEvent(e));
    }
    decodeVoidProjectVersionEvent(event: Event): ProjectInfo.VoidProjectVersionEvent{
        let result = event.data;
        return {
            projectVersionIdx: new BigNumber(result.projectVersionIdx),
            _event: event
        };
    }
    addProjectAdmin: {
        (params: IAddProjectAdminParams): Promise<TransactionReceipt>;
        call: (params: IAddProjectAdminParams) => Promise<void>;
    }
    deny: {
        (user:string): Promise<TransactionReceipt>;
        call: (user:string) => Promise<void>;
    }
    isPermitted: {
        (param1:string): Promise<boolean>;
    }
    latestAuditedPackageVersion: {
        (param1:number|BigNumber): Promise<{packageId:BigNumber,version:BigNumber,status:BigNumber,ipfsCid:string}>;
    }
    newOwner: {
        (): Promise<string>;
    }
    newPackage: {
        (params: INewPackageParams): Promise<TransactionReceipt>;
        call: (params: INewPackageParams) => Promise<BigNumber>;
    }
    newPackageVersion: {
        (params: INewPackageVersionParams): Promise<TransactionReceipt>;
        call: (params: INewPackageVersionParams) => Promise<BigNumber>;
    }
    newProject: {
        (ipfsCid:string): Promise<TransactionReceipt>;
        call: (ipfsCid:string) => Promise<BigNumber>;
    }
    newProjectVersion: {
        (params: INewProjectVersionParams): Promise<TransactionReceipt>;
        call: (params: INewProjectVersionParams) => Promise<BigNumber>;
    }
    owner: {
        (): Promise<string>;
    }
    ownersProjects: {
        (params: IOwnersProjectsParams): Promise<BigNumber>;
    }
    ownersProjectsInv: {
        (params: IOwnersProjectsInvParams): Promise<BigNumber>;
    }
    ownersProjectsLength: {
        (owner:string): Promise<BigNumber>;
    }
    packageVersions: {
        (param1:number|BigNumber): Promise<{packageId:BigNumber,version:BigNumber,status:BigNumber,ipfsCid:string}>;
    }
    packageVersionsLength: {
        (): Promise<BigNumber>;
    }
    packageVersionsList: {
        (params: IPackageVersionsListParams): Promise<BigNumber>;
    }
    packageVersionsListLength: {
        (packageId:number|BigNumber): Promise<BigNumber>;
    }
    packages: {
        (param1:number|BigNumber): Promise<{projectId:BigNumber,currVersionIndex:BigNumber,status:BigNumber,ipfsCid:string}>;
    }
    packagesLength: {
        (): Promise<BigNumber>;
    }
    permit: {
        (user:string): Promise<TransactionReceipt>;
        call: (user:string) => Promise<void>;
    }
    projectAdmin: {
        (params: IProjectAdminParams): Promise<string>;
    }
    projectAdminInv: {
        (params: IProjectAdminInvParams): Promise<BigNumber>;
    }
    projectAdminLength: {
        (projectId:number|BigNumber): Promise<BigNumber>;
    }
    projectCount: {
        (): Promise<BigNumber>;
    }
    projectCurrentVersion: {
        (param1:number|BigNumber): Promise<BigNumber>;
    }
    projectNewOwner: {
        (param1:number|BigNumber): Promise<string>;
    }
    projectOwner: {
        (param1:number|BigNumber): Promise<string>;
    }
    projectPackages: {
        (params: IProjectPackagesParams): Promise<BigNumber>;
    }
    projectPackagesInv: {
        (params: IProjectPackagesInvParams): Promise<BigNumber>;
    }
    projectPackagesLength: {
        (projectId:number|BigNumber): Promise<BigNumber>;
    }
    projectVersionList: {
        (params: IProjectVersionListParams): Promise<BigNumber>;
    }
    projectVersionListLength: {
        (projectId:number|BigNumber): Promise<BigNumber>;
    }
    projectVersions: {
        (param1:number|BigNumber): Promise<{projectId:BigNumber,version:BigNumber,ipfsCid:string,status:BigNumber,lastModifiedDate:BigNumber}>;
    }
    projectVersionsInv: {
        (param1:string): Promise<BigNumber>;
    }
    projectVersionsLength: {
        (): Promise<BigNumber>;
    }
    removeProjectAdmin: {
        (params: IRemoveProjectAdminParams): Promise<TransactionReceipt>;
        call: (params: IRemoveProjectAdminParams) => Promise<void>;
    }
    setPackageVersionToAuditFailed: {
        (packageVersionId:number|BigNumber): Promise<TransactionReceipt>;
        call: (packageVersionId:number|BigNumber) => Promise<void>;
    }
    setPackageVersionToAuditPassed: {
        (packageVersionId:number|BigNumber): Promise<TransactionReceipt>;
        call: (packageVersionId:number|BigNumber) => Promise<void>;
    }
    setPackageVersionToAuditing: {
        (params: ISetPackageVersionToAuditingParams): Promise<TransactionReceipt>;
        call: (params: ISetPackageVersionToAuditingParams) => Promise<void>;
    }
    setProjectCurrentVersion: {
        (params: ISetProjectCurrentVersionParams): Promise<TransactionReceipt>;
        call: (params: ISetProjectCurrentVersionParams) => Promise<void>;
    }
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    takeProjectOwnership: {
        (projectId:number|BigNumber): Promise<TransactionReceipt>;
        call: (projectId:number|BigNumber) => Promise<void>;
    }
    transferOwnership: {
        (newOwner:string): Promise<TransactionReceipt>;
        call: (newOwner:string) => Promise<void>;
    }
    transferProjectOwnership: {
        (params: ITransferProjectOwnershipParams): Promise<TransactionReceipt>;
        call: (params: ITransferProjectOwnershipParams) => Promise<void>;
    }
    updatePackageIpfsCid: {
        (params: IUpdatePackageIpfsCidParams): Promise<TransactionReceipt>;
        call: (params: IUpdatePackageIpfsCidParams) => Promise<void>;
    }
    updateValidator: {
        (validator:string): Promise<TransactionReceipt>;
        call: (validator:string) => Promise<void>;
    }
    validateProject: {
        (params: IValidateProjectParams): Promise<TransactionReceipt>;
        call: (params: IValidateProjectParams) => Promise<void>;
    }
    validator: {
        (): Promise<string>;
    }
    voidPackageVersion: {
        (packageVersionId:number|BigNumber): Promise<TransactionReceipt>;
        call: (packageVersionId:number|BigNumber) => Promise<void>;
    }
    voidProjectVersion: {
        (params: IVoidProjectVersionParams): Promise<TransactionReceipt>;
        call: (params: IVoidProjectVersionParams) => Promise<void>;
    }
    private assign(){
        let isPermitted_call = async (param1:string): Promise<boolean> => {
            let result = await this.call('isPermitted',[param1]);
            return result;
        }
        this.isPermitted = isPermitted_call
        let latestAuditedPackageVersion_call = async (param1:number|BigNumber): Promise<{packageId:BigNumber,version:BigNumber,status:BigNumber,ipfsCid:string}> => {
            let result = await this.call('latestAuditedPackageVersion',[Utils.toString(param1)]);
            return {
                packageId: new BigNumber(result.packageId),
                version: new BigNumber(result.version),
                status: new BigNumber(result.status),
                ipfsCid: result.ipfsCid
            };
        }
        this.latestAuditedPackageVersion = latestAuditedPackageVersion_call
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
        let ownersProjectsParams = (params: IOwnersProjectsParams) => [params.param1,Utils.toString(params.param2)];
        let ownersProjects_call = async (params: IOwnersProjectsParams): Promise<BigNumber> => {
            let result = await this.call('ownersProjects',ownersProjectsParams(params));
            return new BigNumber(result);
        }
        this.ownersProjects = ownersProjects_call
        let ownersProjectsInvParams = (params: IOwnersProjectsInvParams) => [params.param1,Utils.toString(params.param2)];
        let ownersProjectsInv_call = async (params: IOwnersProjectsInvParams): Promise<BigNumber> => {
            let result = await this.call('ownersProjectsInv',ownersProjectsInvParams(params));
            return new BigNumber(result);
        }
        this.ownersProjectsInv = ownersProjectsInv_call
        let ownersProjectsLength_call = async (owner:string): Promise<BigNumber> => {
            let result = await this.call('ownersProjectsLength',[owner]);
            return new BigNumber(result);
        }
        this.ownersProjectsLength = ownersProjectsLength_call
        let packageVersions_call = async (param1:number|BigNumber): Promise<{packageId:BigNumber,version:BigNumber,status:BigNumber,ipfsCid:string}> => {
            let result = await this.call('packageVersions',[Utils.toString(param1)]);
            return {
                packageId: new BigNumber(result.packageId),
                version: new BigNumber(result.version),
                status: new BigNumber(result.status),
                ipfsCid: result.ipfsCid
            };
        }
        this.packageVersions = packageVersions_call
        let packageVersionsLength_call = async (): Promise<BigNumber> => {
            let result = await this.call('packageVersionsLength');
            return new BigNumber(result);
        }
        this.packageVersionsLength = packageVersionsLength_call
        let packageVersionsListParams = (params: IPackageVersionsListParams) => [Utils.toString(params.param1),Utils.toString(params.param2)];
        let packageVersionsList_call = async (params: IPackageVersionsListParams): Promise<BigNumber> => {
            let result = await this.call('packageVersionsList',packageVersionsListParams(params));
            return new BigNumber(result);
        }
        this.packageVersionsList = packageVersionsList_call
        let packageVersionsListLength_call = async (packageId:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('packageVersionsListLength',[Utils.toString(packageId)]);
            return new BigNumber(result);
        }
        this.packageVersionsListLength = packageVersionsListLength_call
        let packages_call = async (param1:number|BigNumber): Promise<{projectId:BigNumber,currVersionIndex:BigNumber,status:BigNumber,ipfsCid:string}> => {
            let result = await this.call('packages',[Utils.toString(param1)]);
            return {
                projectId: new BigNumber(result.projectId),
                currVersionIndex: new BigNumber(result.currVersionIndex),
                status: new BigNumber(result.status),
                ipfsCid: result.ipfsCid
            };
        }
        this.packages = packages_call
        let packagesLength_call = async (): Promise<BigNumber> => {
            let result = await this.call('packagesLength');
            return new BigNumber(result);
        }
        this.packagesLength = packagesLength_call
        let projectAdminParams = (params: IProjectAdminParams) => [Utils.toString(params.param1),Utils.toString(params.param2)];
        let projectAdmin_call = async (params: IProjectAdminParams): Promise<string> => {
            let result = await this.call('projectAdmin',projectAdminParams(params));
            return result;
        }
        this.projectAdmin = projectAdmin_call
        let projectAdminInvParams = (params: IProjectAdminInvParams) => [Utils.toString(params.param1),params.param2];
        let projectAdminInv_call = async (params: IProjectAdminInvParams): Promise<BigNumber> => {
            let result = await this.call('projectAdminInv',projectAdminInvParams(params));
            return new BigNumber(result);
        }
        this.projectAdminInv = projectAdminInv_call
        let projectAdminLength_call = async (projectId:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('projectAdminLength',[Utils.toString(projectId)]);
            return new BigNumber(result);
        }
        this.projectAdminLength = projectAdminLength_call
        let projectCount_call = async (): Promise<BigNumber> => {
            let result = await this.call('projectCount');
            return new BigNumber(result);
        }
        this.projectCount = projectCount_call
        let projectCurrentVersion_call = async (param1:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('projectCurrentVersion',[Utils.toString(param1)]);
            return new BigNumber(result);
        }
        this.projectCurrentVersion = projectCurrentVersion_call
        let projectNewOwner_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('projectNewOwner',[Utils.toString(param1)]);
            return result;
        }
        this.projectNewOwner = projectNewOwner_call
        let projectOwner_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('projectOwner',[Utils.toString(param1)]);
            return result;
        }
        this.projectOwner = projectOwner_call
        let projectPackagesParams = (params: IProjectPackagesParams) => [Utils.toString(params.param1),Utils.toString(params.param2)];
        let projectPackages_call = async (params: IProjectPackagesParams): Promise<BigNumber> => {
            let result = await this.call('projectPackages',projectPackagesParams(params));
            return new BigNumber(result);
        }
        this.projectPackages = projectPackages_call
        let projectPackagesInvParams = (params: IProjectPackagesInvParams) => [Utils.toString(params.param1),Utils.toString(params.param2)];
        let projectPackagesInv_call = async (params: IProjectPackagesInvParams): Promise<BigNumber> => {
            let result = await this.call('projectPackagesInv',projectPackagesInvParams(params));
            return new BigNumber(result);
        }
        this.projectPackagesInv = projectPackagesInv_call
        let projectPackagesLength_call = async (projectId:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('projectPackagesLength',[Utils.toString(projectId)]);
            return new BigNumber(result);
        }
        this.projectPackagesLength = projectPackagesLength_call
        let projectVersionListParams = (params: IProjectVersionListParams) => [Utils.toString(params.param1),Utils.toString(params.param2)];
        let projectVersionList_call = async (params: IProjectVersionListParams): Promise<BigNumber> => {
            let result = await this.call('projectVersionList',projectVersionListParams(params));
            return new BigNumber(result);
        }
        this.projectVersionList = projectVersionList_call
        let projectVersionListLength_call = async (projectId:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('projectVersionListLength',[Utils.toString(projectId)]);
            return new BigNumber(result);
        }
        this.projectVersionListLength = projectVersionListLength_call
        let projectVersions_call = async (param1:number|BigNumber): Promise<{projectId:BigNumber,version:BigNumber,ipfsCid:string,status:BigNumber,lastModifiedDate:BigNumber}> => {
            let result = await this.call('projectVersions',[Utils.toString(param1)]);
            return {
                projectId: new BigNumber(result.projectId),
                version: new BigNumber(result.version),
                ipfsCid: result.ipfsCid,
                status: new BigNumber(result.status),
                lastModifiedDate: new BigNumber(result.lastModifiedDate)
            };
        }
        this.projectVersions = projectVersions_call
        let projectVersionsInv_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('projectVersionsInv',[param1]);
            return new BigNumber(result);
        }
        this.projectVersionsInv = projectVersionsInv_call
        let projectVersionsLength_call = async (): Promise<BigNumber> => {
            let result = await this.call('projectVersionsLength');
            return new BigNumber(result);
        }
        this.projectVersionsLength = projectVersionsLength_call
        let validator_call = async (): Promise<string> => {
            let result = await this.call('validator');
            return result;
        }
        this.validator = validator_call
        let addProjectAdminParams = (params: IAddProjectAdminParams) => [Utils.toString(params.projectId),params.admin];
        let addProjectAdmin_send = async (params: IAddProjectAdminParams): Promise<TransactionReceipt> => {
            let result = await this.send('addProjectAdmin',addProjectAdminParams(params));
            return result;
        }
        let addProjectAdmin_call = async (params: IAddProjectAdminParams): Promise<void> => {
            let result = await this.call('addProjectAdmin',addProjectAdminParams(params));
            return;
        }
        this.addProjectAdmin = Object.assign(addProjectAdmin_send, {
            call:addProjectAdmin_call
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
        let newPackageParams = (params: INewPackageParams) => [Utils.toString(params.projectId),params.ipfsCid];
        let newPackage_send = async (params: INewPackageParams): Promise<TransactionReceipt> => {
            let result = await this.send('newPackage',newPackageParams(params));
            return result;
        }
        let newPackage_call = async (params: INewPackageParams): Promise<BigNumber> => {
            let result = await this.call('newPackage',newPackageParams(params));
            return new BigNumber(result);
        }
        this.newPackage = Object.assign(newPackage_send, {
            call:newPackage_call
        });
        let newPackageVersionParams = (params: INewPackageVersionParams) => [Utils.toString(params.projectId),Utils.toString(params.packageId)];
        let newPackageVersion_send = async (params: INewPackageVersionParams): Promise<TransactionReceipt> => {
            let result = await this.send('newPackageVersion',newPackageVersionParams(params));
            return result;
        }
        let newPackageVersion_call = async (params: INewPackageVersionParams): Promise<BigNumber> => {
            let result = await this.call('newPackageVersion',newPackageVersionParams(params));
            return new BigNumber(result);
        }
        this.newPackageVersion = Object.assign(newPackageVersion_send, {
            call:newPackageVersion_call
        });
        let newProject_send = async (ipfsCid:string): Promise<TransactionReceipt> => {
            let result = await this.send('newProject',[ipfsCid]);
            return result;
        }
        let newProject_call = async (ipfsCid:string): Promise<BigNumber> => {
            let result = await this.call('newProject',[ipfsCid]);
            return new BigNumber(result);
        }
        this.newProject = Object.assign(newProject_send, {
            call:newProject_call
        });
        let newProjectVersionParams = (params: INewProjectVersionParams) => [Utils.toString(params.projectId),params.ipfsCid];
        let newProjectVersion_send = async (params: INewProjectVersionParams): Promise<TransactionReceipt> => {
            let result = await this.send('newProjectVersion',newProjectVersionParams(params));
            return result;
        }
        let newProjectVersion_call = async (params: INewProjectVersionParams): Promise<BigNumber> => {
            let result = await this.call('newProjectVersion',newProjectVersionParams(params));
            return new BigNumber(result);
        }
        this.newProjectVersion = Object.assign(newProjectVersion_send, {
            call:newProjectVersion_call
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
        let removeProjectAdminParams = (params: IRemoveProjectAdminParams) => [Utils.toString(params.projectId),params.admin];
        let removeProjectAdmin_send = async (params: IRemoveProjectAdminParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeProjectAdmin',removeProjectAdminParams(params));
            return result;
        }
        let removeProjectAdmin_call = async (params: IRemoveProjectAdminParams): Promise<void> => {
            let result = await this.call('removeProjectAdmin',removeProjectAdminParams(params));
            return;
        }
        this.removeProjectAdmin = Object.assign(removeProjectAdmin_send, {
            call:removeProjectAdmin_call
        });
        let setPackageVersionToAuditFailed_send = async (packageVersionId:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('setPackageVersionToAuditFailed',[Utils.toString(packageVersionId)]);
            return result;
        }
        let setPackageVersionToAuditFailed_call = async (packageVersionId:number|BigNumber): Promise<void> => {
            let result = await this.call('setPackageVersionToAuditFailed',[Utils.toString(packageVersionId)]);
            return;
        }
        this.setPackageVersionToAuditFailed = Object.assign(setPackageVersionToAuditFailed_send, {
            call:setPackageVersionToAuditFailed_call
        });
        let setPackageVersionToAuditPassed_send = async (packageVersionId:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('setPackageVersionToAuditPassed',[Utils.toString(packageVersionId)]);
            return result;
        }
        let setPackageVersionToAuditPassed_call = async (packageVersionId:number|BigNumber): Promise<void> => {
            let result = await this.call('setPackageVersionToAuditPassed',[Utils.toString(packageVersionId)]);
            return;
        }
        this.setPackageVersionToAuditPassed = Object.assign(setPackageVersionToAuditPassed_send, {
            call:setPackageVersionToAuditPassed_call
        });
        let setPackageVersionToAuditingParams = (params: ISetPackageVersionToAuditingParams) => [Utils.toString(params.packageVersionId),params.ipfsCid];
        let setPackageVersionToAuditing_send = async (params: ISetPackageVersionToAuditingParams): Promise<TransactionReceipt> => {
            let result = await this.send('setPackageVersionToAuditing',setPackageVersionToAuditingParams(params));
            return result;
        }
        let setPackageVersionToAuditing_call = async (params: ISetPackageVersionToAuditingParams): Promise<void> => {
            let result = await this.call('setPackageVersionToAuditing',setPackageVersionToAuditingParams(params));
            return;
        }
        this.setPackageVersionToAuditing = Object.assign(setPackageVersionToAuditing_send, {
            call:setPackageVersionToAuditing_call
        });
        let setProjectCurrentVersionParams = (params: ISetProjectCurrentVersionParams) => [Utils.toString(params.projectId),Utils.toString(params.versionIdx)];
        let setProjectCurrentVersion_send = async (params: ISetProjectCurrentVersionParams): Promise<TransactionReceipt> => {
            let result = await this.send('setProjectCurrentVersion',setProjectCurrentVersionParams(params));
            return result;
        }
        let setProjectCurrentVersion_call = async (params: ISetProjectCurrentVersionParams): Promise<void> => {
            let result = await this.call('setProjectCurrentVersion',setProjectCurrentVersionParams(params));
            return;
        }
        this.setProjectCurrentVersion = Object.assign(setProjectCurrentVersion_send, {
            call:setProjectCurrentVersion_call
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
        let takeProjectOwnership_send = async (projectId:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('takeProjectOwnership',[Utils.toString(projectId)]);
            return result;
        }
        let takeProjectOwnership_call = async (projectId:number|BigNumber): Promise<void> => {
            let result = await this.call('takeProjectOwnership',[Utils.toString(projectId)]);
            return;
        }
        this.takeProjectOwnership = Object.assign(takeProjectOwnership_send, {
            call:takeProjectOwnership_call
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
        let transferProjectOwnershipParams = (params: ITransferProjectOwnershipParams) => [Utils.toString(params.projectId),params.newOwner];
        let transferProjectOwnership_send = async (params: ITransferProjectOwnershipParams): Promise<TransactionReceipt> => {
            let result = await this.send('transferProjectOwnership',transferProjectOwnershipParams(params));
            return result;
        }
        let transferProjectOwnership_call = async (params: ITransferProjectOwnershipParams): Promise<void> => {
            let result = await this.call('transferProjectOwnership',transferProjectOwnershipParams(params));
            return;
        }
        this.transferProjectOwnership = Object.assign(transferProjectOwnership_send, {
            call:transferProjectOwnership_call
        });
        let updatePackageIpfsCidParams = (params: IUpdatePackageIpfsCidParams) => [Utils.toString(params.projectId),Utils.toString(params.packageId),params.ipfsCid];
        let updatePackageIpfsCid_send = async (params: IUpdatePackageIpfsCidParams): Promise<TransactionReceipt> => {
            let result = await this.send('updatePackageIpfsCid',updatePackageIpfsCidParams(params));
            return result;
        }
        let updatePackageIpfsCid_call = async (params: IUpdatePackageIpfsCidParams): Promise<void> => {
            let result = await this.call('updatePackageIpfsCid',updatePackageIpfsCidParams(params));
            return;
        }
        this.updatePackageIpfsCid = Object.assign(updatePackageIpfsCid_send, {
            call:updatePackageIpfsCid_call
        });
        let updateValidator_send = async (validator:string): Promise<TransactionReceipt> => {
            let result = await this.send('updateValidator',[validator]);
            return result;
        }
        let updateValidator_call = async (validator:string): Promise<void> => {
            let result = await this.call('updateValidator',[validator]);
            return;
        }
        this.updateValidator = Object.assign(updateValidator_send, {
            call:updateValidator_call
        });
        let validateProjectParams = (params: IValidateProjectParams) => [Utils.toString(params.projectVersionIdx),Utils.toString(params.status)];
        let validateProject_send = async (params: IValidateProjectParams): Promise<TransactionReceipt> => {
            let result = await this.send('validateProject',validateProjectParams(params));
            return result;
        }
        let validateProject_call = async (params: IValidateProjectParams): Promise<void> => {
            let result = await this.call('validateProject',validateProjectParams(params));
            return;
        }
        this.validateProject = Object.assign(validateProject_send, {
            call:validateProject_call
        });
        let voidPackageVersion_send = async (packageVersionId:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('voidPackageVersion',[Utils.toString(packageVersionId)]);
            return result;
        }
        let voidPackageVersion_call = async (packageVersionId:number|BigNumber): Promise<void> => {
            let result = await this.call('voidPackageVersion',[Utils.toString(packageVersionId)]);
            return;
        }
        this.voidPackageVersion = Object.assign(voidPackageVersion_send, {
            call:voidPackageVersion_call
        });
        let voidProjectVersionParams = (params: IVoidProjectVersionParams) => [Utils.toString(params.projectId),Utils.toString(params.versionIdx)];
        let voidProjectVersion_send = async (params: IVoidProjectVersionParams): Promise<TransactionReceipt> => {
            let result = await this.send('voidProjectVersion',voidProjectVersionParams(params));
            return result;
        }
        let voidProjectVersion_call = async (params: IVoidProjectVersionParams): Promise<void> => {
            let result = await this.call('voidProjectVersion',voidProjectVersionParams(params));
            return;
        }
        this.voidProjectVersion = Object.assign(voidProjectVersion_send, {
            call:voidProjectVersion_call
        });
    }
}
export module ProjectInfo{
    export interface AddAdminEvent {projectId:BigNumber,admin:string,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface NewPackageEvent {projectId:BigNumber,packageId:BigNumber,ipfsCid:string,_event:Event}
    export interface NewPackageVersionEvent {packageId:BigNumber,packageVersionId:BigNumber,version:BigNumber,_event:Event}
    export interface NewProjectEvent {projectId:BigNumber,owner:string,_event:Event}
    export interface NewProjectVersionEvent {projectId:BigNumber,projectVersionIdx:BigNumber,ipfsCid:string,_event:Event}
    export interface RemoveAdminEvent {projectId:BigNumber,admin:string,_event:Event}
    export interface SetPackageVersionStatusEvent {packageId:BigNumber,packageVersionId:BigNumber,status:BigNumber,_event:Event}
    export interface SetProjectCurrentVersionEvent {projectId:BigNumber,projectVersionIdx:BigNumber,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
    export interface TransferProjectOwnershipEvent {projectId:BigNumber,newOwner:string,_event:Event}
    export interface UpdatePackageIpfsCidEvent {packageId:BigNumber,ipfsCid:string,_event:Event}
    export interface UpdateValidatorEvent {validator:string,_event:Event}
    export interface ValidateEvent {projectVersionIdx:BigNumber,status:BigNumber,_event:Event}
    export interface VoidProjectVersionEvent {projectVersionIdx:BigNumber,_event:Event}
}