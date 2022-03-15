import {Argument, RpcResponse, WithIds} from "./CommonTypes";
import {AbstractRequest} from "./AbstractRequest";
import {TorrentActions} from "./TorrentActions";
import {RemoveTorrentRequestArguments} from "./RemoveTorrent";

export type StartTorrentArguments = {
} & WithIds & Argument

export class StartTorrentRequest extends AbstractRequest<StartTorrentArguments> {
    constructor(args: StartTorrentArguments, tag?: number) {
        super(args, TorrentActions.TORRENT_START, tag);
    }

    static of(args: RemoveTorrentRequestArguments, tag?: number) {
        return new StartTorrentRequest(args, tag);
    }
}

export type StartTorrentResponse = {} & RpcResponse<any>
