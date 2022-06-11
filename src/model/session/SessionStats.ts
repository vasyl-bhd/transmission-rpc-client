import {AbstractRequest} from "../AbstractRequest";
import {SessionMethods} from "./SessionMethods";
import {RpcResponse} from "../CommonTypes";

export type CurrentStats = {
    "uploadedBytes": number
    "downloadedBytes": number
    "filesAdded": number
    "sessionCount": number
    "secondsActive": number
}

export type CumulativeStats = {
    "uploadedBytes": number
    "downloadedBytes": number
    "filesAdded": number
    "sessionCount": number
    "secondsActive": number
}

export type SessionStatsArguments = {
    "activeTorrentCount": number
    "downloadSpeed": number
    "pausedTorrentCount": number
    "torrentCount": number
    "uploadSpeed": number,
    "cumulative-stats": CumulativeStats,
    "current-stats": CurrentStats
}

export class SessionStatsRequest extends AbstractRequest<any> {

    private constructor(args: any, tag?: number) {
        super(args, SessionMethods.SESSION_STATS, tag);
    }

    static of(tag?: number) {
        return new SessionStatsRequest({}, tag)
    }
}

export type SessionStatsResponse = {} & RpcResponse<SessionStatsArguments>