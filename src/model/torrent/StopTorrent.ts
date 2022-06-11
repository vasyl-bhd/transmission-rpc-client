import {Argument, RpcResponse, WithIds} from "../CommonTypes";
import {AbstractRequest} from "../AbstractRequest";
import {TorrentActions} from "./TorrentActions";
import {RemoveTorrentRequestArguments} from "./RemoveTorrent";

export type StopTorrentArguments = {
} & WithIds & Argument

export class StopTorrentRequest extends AbstractRequest<StopTorrentArguments> {
    private constructor(args: StopTorrentArguments, tag?: number) {
        super(args, TorrentActions.TORRENT_STOP, tag);
    }

    static of(args: RemoveTorrentRequestArguments, tag?: number) {
        return new StopTorrentRequest(args, tag);
    }
}

export type StopTorrentResponse = {} & RpcResponse<any>
