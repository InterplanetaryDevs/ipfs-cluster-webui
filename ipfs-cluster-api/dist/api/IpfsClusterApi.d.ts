import { AddOptions } from '../options';
import { PeerInfo } from '../results';
import { VersionResult } from '../results';
import { IpfsAllocationsApi } from './IpfsAllocationsApi';
import { IpfsPeersApi } from './IpfsPeersApi';
import { IpfsPinsApi } from './IpfsPinsApi';
export declare class IpfsClusterApi {
    /**
     * Create a new Cluster interface.
     * @param {string} apiUrl API Url of the cluster
     */
    constructor(apiUrl?: string);
    /**
     * Cluster peer information
     * @return {Promise<PeerInfo>}
     */
    id(): Promise<PeerInfo>;
    /**
     * Cluster version
     */
    version(): Promise<VersionResult>;
    /**
     * Peers API
     * @return {IpfsPeersApi}
     */
    get peers(): IpfsPeersApi;
    /**
     * Pins API
     * @return {IpfsPinsApi}
     */
    get pins(): IpfsPinsApi;
    /**
     * Add content to the cluster.
     * @param data
     * @param {AddOptions} options
     * @return {Promise<void>}
     */
    add(data: any, options: AddOptions): Promise<void>;
    get allocations(): IpfsAllocationsApi;
    private readonly api;
}
//# sourceMappingURL=IpfsClusterApi.d.ts.map