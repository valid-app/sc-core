// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.13;

library StringCompare {
    function compare(string calldata s1, string storage s2) internal pure returns (bool) {
        return keccak256(abi.encodePacked(s1)) == keccak256(abi.encodePacked(s2));
    }
}
contract ModuleInfo {
    using StringCompare for string;

    event NewPackage(address indexed owner, string indexed packageName, bytes32 indexed packageHash);
    event NewRelease(bytes32 indexed packageHash, string indexed version, string uri);
    event CurrentVersion(bytes32 indexed packageHash, string indexed version, bytes32 indexed currVersionHash);

    struct Package {
        address owner;
        string currVersion;
        bytes32 currVersionHash;
    }
    struct Release {
        string version;
        string uri;
    }

    mapping(bytes32 => Package) public packageProperties; // packageProperties[packageHash] = {owner, currVersion, currVersionHash};

    mapping(address => string[]) public ownerPackages; // ownerPackages[owner][index] = packageName
    mapping(address => mapping(string => uint256)) public ownerPackagesIndex; // ownerPackagesIndex[owner][packageName] = index

    mapping(bytes32 => Release[]) public packageReleases; // packageReleases[packageHash][index2] = {version, uri}
    mapping(bytes32 => mapping(string => uint256)) public packageReleasesIndex; // packageReleasesIndex[packageHash][version] = index2;

    function ownerPackagesLength(address owner) external view returns (uint256 length) {
        length = ownerPackages[owner].length;
    }
    function getAllOwnerPackages(address owner) external view returns (string[] memory packageNames) {
        return ownerPackages[owner];
    }
    function getBatchOwnerPackages(address owner, uint256 from, uint256 length) external view returns (string[] memory packageNames) {
        uint256 _length = ownerPackages[owner].length;
        if (from + length > _length) {
            length = _length - from;
        }
        packageNames = new string[](length);
        for (uint256 i ; i < length ; i++) {
            packageNames[i] = ownerPackages[owner][from];
            from++;
        }
    }
    function getAllOwnerPackagesAndHash(address owner) external view returns (string[] memory packageNames, bytes32[] memory packageHashes, Package[] memory packages) {
        packageNames = ownerPackages[owner];
        uint256 length = packageNames.length;
        packageHashes = new bytes32[](length);
        packages = new Package[](length);
        for (uint256 i ; i < length ; i++) {
            packageHashes[i] = keccak256(abi.encodePacked(owner, packageNames[i]));
            packages[i] = packageProperties[packageHashes[i]];
        }
    }
    function getBatchOwnerPackagesAndHash(address owner, uint256 from, uint256 length) external view returns (string[] memory packageNames, bytes32[] memory packageHashes, Package[] memory packages) {
        uint256 _length = ownerPackages[owner].length;
        if (from + length > _length) {
            length = _length - from;
        }
        packageNames = new string[](length);
        packageHashes = new bytes32[](length);
        packages = new Package[](length);

        for (uint256 i ; i < length ; i++) {
            packageNames[i] = ownerPackages[owner][from];
            packageHashes[i] = keccak256(abi.encodePacked(owner, packageNames[i]));
            packages[i] = packageProperties[packageHashes[i]];
            from++;
        }
    }
    function packageReleasesLength(bytes32 packageHash) external view returns (uint256 length) {
        length = packageReleases[packageHash].length;
    }
    function getAllpackageReleases(bytes32 packageHash) external view returns (Release[] memory releases) {
        return packageReleases[packageHash];
    }
    function getBatchpackageReleases(bytes32 packageHash, uint256 from, uint256 length) external view returns (Release[] memory releases) {
        uint256 _length = packageReleases[packageHash].length;
        if (from + length > _length) {
            length = _length - from;
        }
        releases = new Release[](length);
        for (uint256 i ; i < length ; i++) {
            releases[i] = packageReleases[packageHash][from];
            from++;
        }
    }

    function addPackage(string calldata packageName) external {
        string[] storage packages = ownerPackages[msg.sender];
        require(packages.length == 0 || packageName.compare(packages[ownerPackagesIndex[msg.sender][packageName]]), "package already exists");
        ownerPackagesIndex[msg.sender][packageName] = packages.length;
        packages.push(packageName);
        bytes32 packageHash = keccak256(abi.encodePacked(msg.sender, packageName));
        packageProperties[packageHash].owner = msg.sender;
        emit NewPackage(msg.sender, packageName, packageHash);
    }

    function _setCurrentVersion(bytes32 packageHash, string calldata version) internal {
        packageProperties[packageHash].currVersion = version;
        bytes32 currVersionHash = keccak256(abi.encodePacked(packageHash, version));
        packageProperties[packageHash].currVersionHash = currVersionHash;
        emit CurrentVersion(packageHash, version, currVersionHash);
    }
    function addRelease(bytes32 packageHash, string calldata version, string calldata uri, bool pulishRelease) external {
        require(packageProperties[packageHash].owner == msg.sender, "not from package owner");
        Release[] storage releases = packageReleases[packageHash];
        require(releases.length == 0 || version.compare(releases[packageReleasesIndex[packageHash][version]].version), "version already exists");
        packageReleasesIndex[packageHash][version] = releases.length;
        releases.push(Release({
            version: version,
            uri: uri
        }));
        emit NewRelease(packageHash, version, uri);
        if (pulishRelease) {
            _setCurrentVersion(packageHash, version);
        }
    }
    function setCurrentVersion(bytes32 packageHash, string calldata version) external {
        require(packageProperties[packageHash].owner == msg.sender, "not from package owner");
        Release[] storage releases = packageReleases[packageHash];
        require(releases.length > 0 && version.compare(releases[packageReleasesIndex[packageHash][version]].version), "version not exists");
        _setCurrentVersion(packageHash, version);
    }
}