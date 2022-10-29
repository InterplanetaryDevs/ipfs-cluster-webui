import { AxiosInstance } from 'axios';
import { PeerInfo } from '../results';
export declare type PeerListResult = PeerInfo[];
export declare type RemovePeerResult = unknown;
export declare class IpfsPeersApi {
    private readonly api;
    constructor(api: AxiosInstance);
    /**
     * Cluster peers.
     */
    list(): Promise<PeerListResult>;
    /**
     * Remove a peer.
     * @param {string} peerId
     */
    remove(peerId: string): Promise<RemovePeerResult>;
}
//# sourceMappingURL=IpfsPeersApi.d.ts.map