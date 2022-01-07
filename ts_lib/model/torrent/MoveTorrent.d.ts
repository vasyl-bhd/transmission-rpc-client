import { AbstractRequest } from "./AbstractRequest";
import { RpcResponse, WithIds } from "./CommonTypes";
export interface MoveTorrentRequestArguments extends WithIds {
    /**
     * the new torrent location
     */
    location: string;
    /**
     *if true, move from previous location.  otherwise, search "location" for files (default: false)
     */
    move: boolean;
}
export declare class MoveTorrentRequest extends AbstractRequest<MoveTorrentRequestArguments> {
    constructor(args: MoveTorrentRequestArguments, tag?: number);
}
export interface MoveTorrentResponse extends RpcResponse<any> {
}
