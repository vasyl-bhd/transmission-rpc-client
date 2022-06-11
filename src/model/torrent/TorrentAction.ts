import {Argument, RpcResponse, WithIds} from "../CommonTypes";
import {AbstractRequest} from "../AbstractRequest";
import {TorrentMethods} from "./TorrentMethods";
import {RemoveTorrentRequestArguments} from "./RemoveTorrent";
/* tslint:disable:max-classes-per-file */
export type ActionArguments = {
} & WithIds & Argument


abstract class ActionRequest extends AbstractRequest<ActionArguments> {
    protected constructor(args: ActionArguments, method: TorrentMethods, tag?: number) {
        super(args, method, tag);
    }
}

export class StartTorrentRequest extends ActionRequest {
    static of(args: RemoveTorrentRequestArguments, tag?: number) {
        return new StartTorrentRequest(args, TorrentMethods.TORRENT_START, tag);
    }
}

export class StopTorrentRequest extends ActionRequest {
    static of(args: RemoveTorrentRequestArguments, tag?: number) {
        return new StartTorrentRequest(args, TorrentMethods.TORRENT_STOP, tag);
    }
}

export class StartNowTorrentRequest extends ActionRequest {
    static of(args: RemoveTorrentRequestArguments, tag?: number) {
        return new StartTorrentRequest(args, TorrentMethods.TORRENT_START_NOW, tag);
    }
}

export class VerifyTorrentRequest extends ActionRequest {
    static of(args: RemoveTorrentRequestArguments, tag?: number) {
        return new StartTorrentRequest(args, TorrentMethods.TORRENT_VERIFY, tag);
    }
}

export class ReannounceTorrentRequest extends ActionRequest {
    static of(args: RemoveTorrentRequestArguments, tag?: number) {
        return new StartTorrentRequest(args, TorrentMethods.TORRENT_REANNOUNCE, tag);
    }
}

export type TorrentActionResponse = {} & RpcResponse<any>
