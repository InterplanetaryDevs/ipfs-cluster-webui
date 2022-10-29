"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpfsClusterApi = void 0;
const axios_1 = __importDefault(require("axios"));
const IpfsAllocationsApi_1 = require("./IpfsAllocationsApi");
const IpfsPeersApi_1 = require("./IpfsPeersApi");
const IpfsPinsApi_1 = require("./IpfsPinsApi");
class IpfsClusterApi {
    /**
     * Create a new Cluster interface.
     * @param {string} apiUrl API Url of the cluster
     */
    constructor(apiUrl = 'http://localhost:9094') {
        this.api = axios_1.default.create({ baseURL: apiUrl });
    }
    /**
     * Cluster peer information
     * @return {Promise<PeerInfo>}
     */
    id() {
        return this.api.get('/id')
            .then(r => r.data);
    }
    /**
     * Cluster version
     */
    version() {
        return this.api.get('/version')
            .then(r => r.data);
    }
    /**
     * Peers API
     * @return {IpfsPeersApi}
     */
    get peers() {
        return new IpfsPeersApi_1.IpfsPeersApi(this.api);
    }
    /**
     * Pins API
     * @return {IpfsPinsApi}
     */
    get pins() {
        return new IpfsPinsApi_1.IpfsPinsApi(this.api);
    }
    /**
     * Add content to the cluster.
     * @param data
     * @param {AddOptions} options
     * @return {Promise<void>}
     */
    add(data, options) {
        return Promise.reject();
    }
    get allocations() {
        return new IpfsAllocationsApi_1.IpfsAllocationsApi(this.api);
    }
}
exports.IpfsClusterApi = IpfsClusterApi;
