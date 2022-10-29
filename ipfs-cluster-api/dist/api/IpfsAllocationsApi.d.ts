import { AxiosInstance } from 'axios';
import { AllocationsOptions } from '../options';
import { AllocationResult } from '../results';
export declare class IpfsAllocationsApi {
    private readonly api;
    constructor(api: AxiosInstance);
    list(options?: AllocationsOptions): Promise<AllocationResult>;
    get(cid: string): void;
}
//# sourceMappingURL=IpfsAllocationsApi.d.ts.map