"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpfsAllocationsApi = void 0;
const utils_1 = require("../utils");
class IpfsAllocationsApi {
    constructor(api) {
        this.api = api;
    }
    list(options = {}) {
        return this.api.get('/allocations?' + (0, utils_1.mapOptions)(options))
            .then(r => r.data);
    }
    get(cid) {
    }
}
exports.IpfsAllocationsApi = IpfsAllocationsApi;
