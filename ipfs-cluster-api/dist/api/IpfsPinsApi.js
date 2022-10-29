"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpfsPinsApi = void 0;
const utils_1 = require("../utils");
class IpfsPinsApi {
    constructor(api) {
        this.api = api;
    }
    /**
     * Local status of all tracked CIDs.
     */
    list() {
    }
    status(cid, options) {
        return this.api.get(`/pins/${cid}?${(0, utils_1.mapOptions)(options)}`).then(r => r.data);
    }
    add(cid, options) {
        return this.api.post(`/pins/ipfs/${cid}?${(0, utils_1.mapOptions)(options)}`);
    }
    remove(cid) {
    }
    recover(cid) {
    }
    update(from, to, options) {
        return this.api.post(`/pins/ipfs/${to}?mode=recursive&pin-update=${from}&${(0, utils_1.mapOptions)(options)}`).then(r => {
        });
    }
}
exports.IpfsPinsApi = IpfsPinsApi;
