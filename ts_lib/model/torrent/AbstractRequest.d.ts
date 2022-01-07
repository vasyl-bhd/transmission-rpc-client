import { RpcRequest } from "./CommonTypes";
import { TorrentActions } from "./TorrentActions";
export declare abstract class AbstractRequest<T> implements RpcRequest<T> {
    readonly arguments: T;
    readonly method: TorrentActions;
    readonly tag?: number;
    constructor(args: T, method: TorrentActions, tag?: number);
}
