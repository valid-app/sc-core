"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectInfo = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const ProjectInfo_json_1 = __importDefault(require("./ProjectInfo.json"));
class ProjectInfo extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, ProjectInfo_json_1.default.abi, ProjectInfo_json_1.default.bytecode);
        this.assign();
    }
    deploy(validator) {
        return this.__deploy([validator]);
    }
    parseAddAdminEvent(receipt) {
        return this.parseEvents(receipt, "AddAdmin").map(e => this.decodeAddAdminEvent(e));
    }
    decodeAddAdminEvent(event) {
        let result = event.data;
        return {
            projectId: new eth_wallet_1.BigNumber(result.projectId),
            admin: result.admin,
            _event: event
        };
    }
    parseAuthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseNewPackageEvent(receipt) {
        return this.parseEvents(receipt, "NewPackage").map(e => this.decodeNewPackageEvent(e));
    }
    decodeNewPackageEvent(event) {
        let result = event.data;
        return {
            projectId: new eth_wallet_1.BigNumber(result.projectId),
            packageId: new eth_wallet_1.BigNumber(result.packageId),
            ipfsCid: result.ipfsCid,
            _event: event
        };
    }
    parseNewPackageVersionEvent(receipt) {
        return this.parseEvents(receipt, "NewPackageVersion").map(e => this.decodeNewPackageVersionEvent(e));
    }
    decodeNewPackageVersionEvent(event) {
        let result = event.data;
        return {
            packageId: new eth_wallet_1.BigNumber(result.packageId),
            packageVersionId: new eth_wallet_1.BigNumber(result.packageVersionId),
            version: new eth_wallet_1.BigNumber(result.version),
            _event: event
        };
    }
    parseNewProjectEvent(receipt) {
        return this.parseEvents(receipt, "NewProject").map(e => this.decodeNewProjectEvent(e));
    }
    decodeNewProjectEvent(event) {
        let result = event.data;
        return {
            projectId: new eth_wallet_1.BigNumber(result.projectId),
            owner: result.owner,
            _event: event
        };
    }
    parseNewProjectVersionEvent(receipt) {
        return this.parseEvents(receipt, "NewProjectVersion").map(e => this.decodeNewProjectVersionEvent(e));
    }
    decodeNewProjectVersionEvent(event) {
        let result = event.data;
        return {
            projectId: new eth_wallet_1.BigNumber(result.projectId),
            projectVersionIdx: new eth_wallet_1.BigNumber(result.projectVersionIdx),
            ipfsCid: result.ipfsCid,
            _event: event
        };
    }
    parseRemoveAdminEvent(receipt) {
        return this.parseEvents(receipt, "RemoveAdmin").map(e => this.decodeRemoveAdminEvent(e));
    }
    decodeRemoveAdminEvent(event) {
        let result = event.data;
        return {
            projectId: new eth_wallet_1.BigNumber(result.projectId),
            admin: result.admin,
            _event: event
        };
    }
    parseSetPackageVersionStatusEvent(receipt) {
        return this.parseEvents(receipt, "SetPackageVersionStatus").map(e => this.decodeSetPackageVersionStatusEvent(e));
    }
    decodeSetPackageVersionStatusEvent(event) {
        let result = event.data;
        return {
            packageId: new eth_wallet_1.BigNumber(result.packageId),
            packageVersionId: new eth_wallet_1.BigNumber(result.packageVersionId),
            status: new eth_wallet_1.BigNumber(result.status),
            _event: event
        };
    }
    parseSetProjectCurrentVersionEvent(receipt) {
        return this.parseEvents(receipt, "SetProjectCurrentVersion").map(e => this.decodeSetProjectCurrentVersionEvent(e));
    }
    decodeSetProjectCurrentVersionEvent(event) {
        let result = event.data;
        return {
            projectId: new eth_wallet_1.BigNumber(result.projectId),
            projectVersionIdx: new eth_wallet_1.BigNumber(result.projectVersionIdx),
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt) {
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt) {
        return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferProjectOwnershipEvent(receipt) {
        return this.parseEvents(receipt, "TransferProjectOwnership").map(e => this.decodeTransferProjectOwnershipEvent(e));
    }
    decodeTransferProjectOwnershipEvent(event) {
        let result = event.data;
        return {
            projectId: new eth_wallet_1.BigNumber(result.projectId),
            newOwner: result.newOwner,
            _event: event
        };
    }
    parseUpdatePackageIpfsCidEvent(receipt) {
        return this.parseEvents(receipt, "UpdatePackageIpfsCid").map(e => this.decodeUpdatePackageIpfsCidEvent(e));
    }
    decodeUpdatePackageIpfsCidEvent(event) {
        let result = event.data;
        return {
            packageId: new eth_wallet_1.BigNumber(result.packageId),
            ipfsCid: result.ipfsCid,
            _event: event
        };
    }
    parseUpdateValidatorEvent(receipt) {
        return this.parseEvents(receipt, "UpdateValidator").map(e => this.decodeUpdateValidatorEvent(e));
    }
    decodeUpdateValidatorEvent(event) {
        let result = event.data;
        return {
            validator: result.validator,
            _event: event
        };
    }
    parseValidateEvent(receipt) {
        return this.parseEvents(receipt, "Validate").map(e => this.decodeValidateEvent(e));
    }
    decodeValidateEvent(event) {
        let result = event.data;
        return {
            projectVersionIdx: new eth_wallet_1.BigNumber(result.projectVersionIdx),
            status: new eth_wallet_1.BigNumber(result.status),
            _event: event
        };
    }
    parseVoidProjectVersionEvent(receipt) {
        return this.parseEvents(receipt, "VoidProjectVersion").map(e => this.decodeVoidProjectVersionEvent(e));
    }
    decodeVoidProjectVersionEvent(event) {
        let result = event.data;
        return {
            projectVersionIdx: new eth_wallet_1.BigNumber(result.projectVersionIdx),
            _event: event
        };
    }
    assign() {
        let isPermitted_call = async (param1) => {
            let result = await this.call('isPermitted', [param1]);
            return result;
        };
        this.isPermitted = isPermitted_call;
        let latestAuditedPackageVersion_call = async (param1) => {
            let result = await this.call('latestAuditedPackageVersion', [eth_wallet_1.Utils.toString(param1)]);
            return {
                packageId: new eth_wallet_1.BigNumber(result.packageId),
                version: new eth_wallet_1.BigNumber(result.version),
                status: new eth_wallet_1.BigNumber(result.status),
                ipfsCid: result.ipfsCid
            };
        };
        this.latestAuditedPackageVersion = latestAuditedPackageVersion_call;
        let newOwner_call = async () => {
            let result = await this.call('newOwner');
            return result;
        };
        this.newOwner = newOwner_call;
        let owner_call = async () => {
            let result = await this.call('owner');
            return result;
        };
        this.owner = owner_call;
        let ownersProjectsParams = (params) => [params.param1, eth_wallet_1.Utils.toString(params.param2)];
        let ownersProjects_call = async (params) => {
            let result = await this.call('ownersProjects', ownersProjectsParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.ownersProjects = ownersProjects_call;
        let ownersProjectsInvParams = (params) => [params.param1, eth_wallet_1.Utils.toString(params.param2)];
        let ownersProjectsInv_call = async (params) => {
            let result = await this.call('ownersProjectsInv', ownersProjectsInvParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.ownersProjectsInv = ownersProjectsInv_call;
        let ownersProjectsLength_call = async (owner) => {
            let result = await this.call('ownersProjectsLength', [owner]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.ownersProjectsLength = ownersProjectsLength_call;
        let packageVersions_call = async (param1) => {
            let result = await this.call('packageVersions', [eth_wallet_1.Utils.toString(param1)]);
            return {
                packageId: new eth_wallet_1.BigNumber(result.packageId),
                version: new eth_wallet_1.BigNumber(result.version),
                status: new eth_wallet_1.BigNumber(result.status),
                ipfsCid: result.ipfsCid
            };
        };
        this.packageVersions = packageVersions_call;
        let packageVersionsLength_call = async () => {
            let result = await this.call('packageVersionsLength');
            return new eth_wallet_1.BigNumber(result);
        };
        this.packageVersionsLength = packageVersionsLength_call;
        let packageVersionsListParams = (params) => [eth_wallet_1.Utils.toString(params.param1), eth_wallet_1.Utils.toString(params.param2)];
        let packageVersionsList_call = async (params) => {
            let result = await this.call('packageVersionsList', packageVersionsListParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.packageVersionsList = packageVersionsList_call;
        let packageVersionsListLength_call = async (packageId) => {
            let result = await this.call('packageVersionsListLength', [eth_wallet_1.Utils.toString(packageId)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.packageVersionsListLength = packageVersionsListLength_call;
        let packages_call = async (param1) => {
            let result = await this.call('packages', [eth_wallet_1.Utils.toString(param1)]);
            return {
                projectId: new eth_wallet_1.BigNumber(result.projectId),
                currVersionIndex: new eth_wallet_1.BigNumber(result.currVersionIndex),
                status: new eth_wallet_1.BigNumber(result.status),
                ipfsCid: result.ipfsCid
            };
        };
        this.packages = packages_call;
        let packagesLength_call = async () => {
            let result = await this.call('packagesLength');
            return new eth_wallet_1.BigNumber(result);
        };
        this.packagesLength = packagesLength_call;
        let projectAdminParams = (params) => [eth_wallet_1.Utils.toString(params.param1), eth_wallet_1.Utils.toString(params.param2)];
        let projectAdmin_call = async (params) => {
            let result = await this.call('projectAdmin', projectAdminParams(params));
            return result;
        };
        this.projectAdmin = projectAdmin_call;
        let projectAdminInvParams = (params) => [eth_wallet_1.Utils.toString(params.param1), params.param2];
        let projectAdminInv_call = async (params) => {
            let result = await this.call('projectAdminInv', projectAdminInvParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.projectAdminInv = projectAdminInv_call;
        let projectAdminLength_call = async (projectId) => {
            let result = await this.call('projectAdminLength', [eth_wallet_1.Utils.toString(projectId)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.projectAdminLength = projectAdminLength_call;
        let projectCount_call = async () => {
            let result = await this.call('projectCount');
            return new eth_wallet_1.BigNumber(result);
        };
        this.projectCount = projectCount_call;
        let projectCurrentVersion_call = async (param1) => {
            let result = await this.call('projectCurrentVersion', [eth_wallet_1.Utils.toString(param1)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.projectCurrentVersion = projectCurrentVersion_call;
        let projectNewOwner_call = async (param1) => {
            let result = await this.call('projectNewOwner', [eth_wallet_1.Utils.toString(param1)]);
            return result;
        };
        this.projectNewOwner = projectNewOwner_call;
        let projectOwner_call = async (param1) => {
            let result = await this.call('projectOwner', [eth_wallet_1.Utils.toString(param1)]);
            return result;
        };
        this.projectOwner = projectOwner_call;
        let projectPackagesParams = (params) => [eth_wallet_1.Utils.toString(params.param1), eth_wallet_1.Utils.toString(params.param2)];
        let projectPackages_call = async (params) => {
            let result = await this.call('projectPackages', projectPackagesParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.projectPackages = projectPackages_call;
        let projectPackagesInvParams = (params) => [eth_wallet_1.Utils.toString(params.param1), eth_wallet_1.Utils.toString(params.param2)];
        let projectPackagesInv_call = async (params) => {
            let result = await this.call('projectPackagesInv', projectPackagesInvParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.projectPackagesInv = projectPackagesInv_call;
        let projectPackagesLength_call = async (projectId) => {
            let result = await this.call('projectPackagesLength', [eth_wallet_1.Utils.toString(projectId)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.projectPackagesLength = projectPackagesLength_call;
        let projectVersionListParams = (params) => [eth_wallet_1.Utils.toString(params.param1), eth_wallet_1.Utils.toString(params.param2)];
        let projectVersionList_call = async (params) => {
            let result = await this.call('projectVersionList', projectVersionListParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.projectVersionList = projectVersionList_call;
        let projectVersionListLength_call = async (projectId) => {
            let result = await this.call('projectVersionListLength', [eth_wallet_1.Utils.toString(projectId)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.projectVersionListLength = projectVersionListLength_call;
        let projectVersions_call = async (param1) => {
            let result = await this.call('projectVersions', [eth_wallet_1.Utils.toString(param1)]);
            return {
                projectId: new eth_wallet_1.BigNumber(result.projectId),
                version: new eth_wallet_1.BigNumber(result.version),
                ipfsCid: result.ipfsCid,
                status: new eth_wallet_1.BigNumber(result.status),
                lastModifiedDate: new eth_wallet_1.BigNumber(result.lastModifiedDate)
            };
        };
        this.projectVersions = projectVersions_call;
        let projectVersionsInv_call = async (param1) => {
            let result = await this.call('projectVersionsInv', [param1]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.projectVersionsInv = projectVersionsInv_call;
        let projectVersionsLength_call = async () => {
            let result = await this.call('projectVersionsLength');
            return new eth_wallet_1.BigNumber(result);
        };
        this.projectVersionsLength = projectVersionsLength_call;
        let validator_call = async () => {
            let result = await this.call('validator');
            return result;
        };
        this.validator = validator_call;
        let addProjectAdminParams = (params) => [eth_wallet_1.Utils.toString(params.projectId), params.admin];
        let addProjectAdmin_send = async (params) => {
            let result = await this.send('addProjectAdmin', addProjectAdminParams(params));
            return result;
        };
        let addProjectAdmin_call = async (params) => {
            let result = await this.call('addProjectAdmin', addProjectAdminParams(params));
            return;
        };
        this.addProjectAdmin = Object.assign(addProjectAdmin_send, {
            call: addProjectAdmin_call
        });
        let deny_send = async (user) => {
            let result = await this.send('deny', [user]);
            return result;
        };
        let deny_call = async (user) => {
            let result = await this.call('deny', [user]);
            return;
        };
        this.deny = Object.assign(deny_send, {
            call: deny_call
        });
        let newPackageParams = (params) => [eth_wallet_1.Utils.toString(params.projectId), params.ipfsCid];
        let newPackage_send = async (params) => {
            let result = await this.send('newPackage', newPackageParams(params));
            return result;
        };
        let newPackage_call = async (params) => {
            let result = await this.call('newPackage', newPackageParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.newPackage = Object.assign(newPackage_send, {
            call: newPackage_call
        });
        let newPackageVersionParams = (params) => [eth_wallet_1.Utils.toString(params.projectId), eth_wallet_1.Utils.toString(params.packageId)];
        let newPackageVersion_send = async (params) => {
            let result = await this.send('newPackageVersion', newPackageVersionParams(params));
            return result;
        };
        let newPackageVersion_call = async (params) => {
            let result = await this.call('newPackageVersion', newPackageVersionParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.newPackageVersion = Object.assign(newPackageVersion_send, {
            call: newPackageVersion_call
        });
        let newProject_send = async (ipfsCid) => {
            let result = await this.send('newProject', [ipfsCid]);
            return result;
        };
        let newProject_call = async (ipfsCid) => {
            let result = await this.call('newProject', [ipfsCid]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.newProject = Object.assign(newProject_send, {
            call: newProject_call
        });
        let newProjectVersionParams = (params) => [eth_wallet_1.Utils.toString(params.projectId), params.ipfsCid];
        let newProjectVersion_send = async (params) => {
            let result = await this.send('newProjectVersion', newProjectVersionParams(params));
            return result;
        };
        let newProjectVersion_call = async (params) => {
            let result = await this.call('newProjectVersion', newProjectVersionParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.newProjectVersion = Object.assign(newProjectVersion_send, {
            call: newProjectVersion_call
        });
        let permit_send = async (user) => {
            let result = await this.send('permit', [user]);
            return result;
        };
        let permit_call = async (user) => {
            let result = await this.call('permit', [user]);
            return;
        };
        this.permit = Object.assign(permit_send, {
            call: permit_call
        });
        let removeProjectAdminParams = (params) => [eth_wallet_1.Utils.toString(params.projectId), params.admin];
        let removeProjectAdmin_send = async (params) => {
            let result = await this.send('removeProjectAdmin', removeProjectAdminParams(params));
            return result;
        };
        let removeProjectAdmin_call = async (params) => {
            let result = await this.call('removeProjectAdmin', removeProjectAdminParams(params));
            return;
        };
        this.removeProjectAdmin = Object.assign(removeProjectAdmin_send, {
            call: removeProjectAdmin_call
        });
        let setPackageVersionToAuditFailed_send = async (packageVersionId) => {
            let result = await this.send('setPackageVersionToAuditFailed', [eth_wallet_1.Utils.toString(packageVersionId)]);
            return result;
        };
        let setPackageVersionToAuditFailed_call = async (packageVersionId) => {
            let result = await this.call('setPackageVersionToAuditFailed', [eth_wallet_1.Utils.toString(packageVersionId)]);
            return;
        };
        this.setPackageVersionToAuditFailed = Object.assign(setPackageVersionToAuditFailed_send, {
            call: setPackageVersionToAuditFailed_call
        });
        let setPackageVersionToAuditPassed_send = async (packageVersionId) => {
            let result = await this.send('setPackageVersionToAuditPassed', [eth_wallet_1.Utils.toString(packageVersionId)]);
            return result;
        };
        let setPackageVersionToAuditPassed_call = async (packageVersionId) => {
            let result = await this.call('setPackageVersionToAuditPassed', [eth_wallet_1.Utils.toString(packageVersionId)]);
            return;
        };
        this.setPackageVersionToAuditPassed = Object.assign(setPackageVersionToAuditPassed_send, {
            call: setPackageVersionToAuditPassed_call
        });
        let setPackageVersionToAuditingParams = (params) => [eth_wallet_1.Utils.toString(params.packageVersionId), params.ipfsCid];
        let setPackageVersionToAuditing_send = async (params) => {
            let result = await this.send('setPackageVersionToAuditing', setPackageVersionToAuditingParams(params));
            return result;
        };
        let setPackageVersionToAuditing_call = async (params) => {
            let result = await this.call('setPackageVersionToAuditing', setPackageVersionToAuditingParams(params));
            return;
        };
        this.setPackageVersionToAuditing = Object.assign(setPackageVersionToAuditing_send, {
            call: setPackageVersionToAuditing_call
        });
        let setProjectCurrentVersionParams = (params) => [eth_wallet_1.Utils.toString(params.projectId), eth_wallet_1.Utils.toString(params.versionIdx)];
        let setProjectCurrentVersion_send = async (params) => {
            let result = await this.send('setProjectCurrentVersion', setProjectCurrentVersionParams(params));
            return result;
        };
        let setProjectCurrentVersion_call = async (params) => {
            let result = await this.call('setProjectCurrentVersion', setProjectCurrentVersionParams(params));
            return;
        };
        this.setProjectCurrentVersion = Object.assign(setProjectCurrentVersion_send, {
            call: setProjectCurrentVersion_call
        });
        let takeOwnership_send = async () => {
            let result = await this.send('takeOwnership');
            return result;
        };
        let takeOwnership_call = async () => {
            let result = await this.call('takeOwnership');
            return;
        };
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call: takeOwnership_call
        });
        let takeProjectOwnership_send = async (projectId) => {
            let result = await this.send('takeProjectOwnership', [eth_wallet_1.Utils.toString(projectId)]);
            return result;
        };
        let takeProjectOwnership_call = async (projectId) => {
            let result = await this.call('takeProjectOwnership', [eth_wallet_1.Utils.toString(projectId)]);
            return;
        };
        this.takeProjectOwnership = Object.assign(takeProjectOwnership_send, {
            call: takeProjectOwnership_call
        });
        let transferOwnership_send = async (newOwner) => {
            let result = await this.send('transferOwnership', [newOwner]);
            return result;
        };
        let transferOwnership_call = async (newOwner) => {
            let result = await this.call('transferOwnership', [newOwner]);
            return;
        };
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call: transferOwnership_call
        });
        let transferProjectOwnershipParams = (params) => [eth_wallet_1.Utils.toString(params.projectId), params.newOwner];
        let transferProjectOwnership_send = async (params) => {
            let result = await this.send('transferProjectOwnership', transferProjectOwnershipParams(params));
            return result;
        };
        let transferProjectOwnership_call = async (params) => {
            let result = await this.call('transferProjectOwnership', transferProjectOwnershipParams(params));
            return;
        };
        this.transferProjectOwnership = Object.assign(transferProjectOwnership_send, {
            call: transferProjectOwnership_call
        });
        let updatePackageIpfsCidParams = (params) => [eth_wallet_1.Utils.toString(params.projectId), eth_wallet_1.Utils.toString(params.packageId), params.ipfsCid];
        let updatePackageIpfsCid_send = async (params) => {
            let result = await this.send('updatePackageIpfsCid', updatePackageIpfsCidParams(params));
            return result;
        };
        let updatePackageIpfsCid_call = async (params) => {
            let result = await this.call('updatePackageIpfsCid', updatePackageIpfsCidParams(params));
            return;
        };
        this.updatePackageIpfsCid = Object.assign(updatePackageIpfsCid_send, {
            call: updatePackageIpfsCid_call
        });
        let updateValidator_send = async (validator) => {
            let result = await this.send('updateValidator', [validator]);
            return result;
        };
        let updateValidator_call = async (validator) => {
            let result = await this.call('updateValidator', [validator]);
            return;
        };
        this.updateValidator = Object.assign(updateValidator_send, {
            call: updateValidator_call
        });
        let validateProjectParams = (params) => [eth_wallet_1.Utils.toString(params.projectVersionIdx), eth_wallet_1.Utils.toString(params.status)];
        let validateProject_send = async (params) => {
            let result = await this.send('validateProject', validateProjectParams(params));
            return result;
        };
        let validateProject_call = async (params) => {
            let result = await this.call('validateProject', validateProjectParams(params));
            return;
        };
        this.validateProject = Object.assign(validateProject_send, {
            call: validateProject_call
        });
        let voidPackageVersion_send = async (packageVersionId) => {
            let result = await this.send('voidPackageVersion', [eth_wallet_1.Utils.toString(packageVersionId)]);
            return result;
        };
        let voidPackageVersion_call = async (packageVersionId) => {
            let result = await this.call('voidPackageVersion', [eth_wallet_1.Utils.toString(packageVersionId)]);
            return;
        };
        this.voidPackageVersion = Object.assign(voidPackageVersion_send, {
            call: voidPackageVersion_call
        });
        let voidProjectVersionParams = (params) => [eth_wallet_1.Utils.toString(params.projectId), eth_wallet_1.Utils.toString(params.versionIdx)];
        let voidProjectVersion_send = async (params) => {
            let result = await this.send('voidProjectVersion', voidProjectVersionParams(params));
            return result;
        };
        let voidProjectVersion_call = async (params) => {
            let result = await this.call('voidProjectVersion', voidProjectVersionParams(params));
            return;
        };
        this.voidProjectVersion = Object.assign(voidProjectVersion_send, {
            call: voidProjectVersion_call
        });
    }
}
exports.ProjectInfo = ProjectInfo;
