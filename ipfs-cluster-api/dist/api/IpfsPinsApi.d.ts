import { AxiosInstance } from 'axios';
import { PinOptions } from '../options';
import { PinStatusOptions } from '../options';
export declare class IpfsPinsApi {
    private readonly api;
    constructor(api: AxiosInstance);
    /**
     * Local status of all tracked CIDs.
     */
    list(): void;
    status(cid: string, options?: PinStatusOptions): Promise<any>;
    add(cid: string, options: PinOptions): Promise<import("axios").AxiosResponse<any, any>>;
    remove(cid: string): void;
    recover(cid?: string): void;
    update(from: string, to: string, options: PinOptions): Promise<void>;
}
//# sourceMappingURL=IpfsPinsApi.d.ts.map