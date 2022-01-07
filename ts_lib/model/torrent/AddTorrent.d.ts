import { GetTorrentResponseArguments } from "./GetTorrent";
import { AbstractRequest } from "./AbstractRequest";
import { RpcResponse } from "./CommonTypes";
export interface AddTorrentRequestArguments {
    /**
     * pointer to a string of one or more cookies.
     */
    cookies?: string;
    /**
     * path to download the torrent to
     */
    'download-dir': string;
    /**
     * filename or URL of the .torrent file
     */
    filename?: string;
    /**
     * base64-encoded .torrent content
     */
    metainfo?: string;
    /**
     *if true, don't start the torrent
     */
    paused?: boolean;
    /**
     * maximum number of peers
     */
    'peer-limit'?: number;
    /**
     * torrent's bandwidth tr_priority_t
     */
    bandwidthPriority?: number;
    /**
     *  indices of file(s) to download
     */
    'files-wanted': number[];
    /**
     *  indices of file(s) to not download
     */
    'files-unwanted': number[];
    /**
     *  indices of high-priority file(s)
     */
    'priority-high': number[];
    /**
     *  indices of low-priority file(s)
     */
    'priority-low': number[];
    /**
     *  indices of normal-priority file(s)
     */
    'priority-normal': number[];
}
export declare class AddTorrentRequest extends AbstractRequest<AddTorrentRequestArguments> {
    constructor(args: AddTorrentRequestArguments, tag?: number);
}
export interface AddTorrentResponse extends RpcResponse<GetTorrentResponseArguments> {
}
