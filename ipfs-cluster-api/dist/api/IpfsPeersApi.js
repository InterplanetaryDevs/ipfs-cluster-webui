"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpfsPeersApi = void 0;
class IpfsPeersApi {
    constructor(api) {
        this.api = api;
    }
    /**
     * Cluster peers.
     */
    list() {
        return this.api.get('/peers')
            .then(r => r.data);
    }
    /**
     * Remove a peer.
     * @param {string} peerId
     */
    remove(peerId) {
        return this.api.delete(`/peers/${peerId}`)
            .then(r => r.data);
    }
}
exports.IpfsPeersApi = IpfsPeersApi;
