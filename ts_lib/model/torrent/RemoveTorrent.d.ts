import { AbstractRequest } from "./AbstractRequest";
import { RpcResponse, WithIds } from "./CommonTypes";
export interface RemoveTorrentRequestArguments extends WithIds {
    /**
     * delete local data. (default: false)
     */
    'delete-local-data'?: boolean;
}
export declare class RemoveTorrentRequest extends AbstractRequest<RemoveTorrentRequestArguments> {
    constructor(args: RemoveTorrentRequestArguments, tag?: number);
}
export interface RemoveTorrentResponse extends RpcResponse<any> {
}
