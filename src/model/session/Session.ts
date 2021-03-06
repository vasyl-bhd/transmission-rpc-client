import {AbstractRequest} from "../AbstractRequest";
import {SessionMethods} from "./SessionMethods";
import {RpcResponse} from "../CommonTypes";

/* tslint:disable:max-classes-per-file */
export type Units = {
    /**
     * 4 strings: KB/s, MB/s, GB/s, TB/s
     */
    "speed-units": string[],
    /**
     * number of bytes in a KB (1000 for kB; 1024 for KiB)
     */
    "speed-bytes": number,
    /**
     * 4 strings: KB/s, MB/s, GB/s, TB/s
     */
    "size-units": string[],
    /**
     * number of bytes in a KB (1000 for kB; 1024 for KiB)
     */
    "size-bytes": number,
    /**
     * 4 strings: KB/s, MB/s, GB/s, TB/s
     */
    "memory-units": string[],
    /**
     * number of bytes in a KB (1000 for kB; 1024 for KiB)
     */
    "memory-bytes": number,
}

export type SessionArguments = {
    /**
     * max global download speed (KBps)
     */
    "alt-speed-down": number,
    /**
     * true means use the alt speeds
     */
    "alt-speed-enabled": boolean,
    /**
     * when to turn on alt speeds (units: minutes after midnight)
     */
    "alt-speed-time-begin": number,
    /**
     * true means the scheduled on/off times are used
     */
    "alt-speed-time-enabled": boolean,
    /**
     * when to turn off alt speeds (units: same)
     */
    "alt-speed-time-end": number,
    /**
     * what day(s) to turn on alt speeds (look at tr_sched_day)
     */
    "alt-speed-time-day": number,
    /**
     * max global upload speed (KBps)
     */
    "alt-speed-up": number,
    /**
     * location of the blocklist to use for "blocklist-update"
     */
    "blocklist-url": string,
    /**
     * true means enabled
     */
    "blocklist-enabled": boolean,
    /**
     * number of rules in the blocklist
     */
    "blocklist-size": number,
    /**
     * maximum size of the disk cache (MB)
     */
    "cache-size-mb": number,
    /**
     * location of transmission's configuration directory
     */
    "config-dir": string,
    /**
     * default path to download torrents
     */
    "download-dir": string,
    /**
     * max number of torrents to download at once (see download-queue-enabled)
     */
    "download-queue-size": number,
    /**
     * if true, limit how many torrents can be downloaded at once
     */
    "download-queue-enabled": boolean,
    /**
     * true means allow dht in public torrents
     */
    "dht-enabled": boolean,
    /**
     * "required", "preferred", "tolerated"
     */
    "encryption": string,
    /**
     * torrents we're seeding will be stopped if they're idle for this long
     */
    "idle-seeding-limit": number,
    /**
     * true if the seeding inactivity limit is honored by default
     */
    "idle-seeding-limit-enabled": boolean,
    /**
     * path for incomplete torrents, when enabled
     */
    "incomplete-dir": string,
    /**
     * true means keep torrents in incomplete-dir until done
     */
    "incomplete-dir-enabled": boolean,
    /**
     * true means allow Local Peer Discovery in public torrents
     */
    "lpd-enabled": boolean,
    /**
     * maximum global number of peers
     */
    "peer-limit-global": number,
    /**
     * maximum global number of peers
     */
    "peer-limit-per-torrent": number,
    /**
     * true means allow pex in public torrents
     */
    "pex-enabled": boolean,
    /**
     * port number
     */
    "peer-port": number,
    /**
     * true means pick a random peer port on launch
     */
    "peer-port-random-on-start": boolean,
    /**
     * true means enabled
     */
    "port-forwarding-enabled": boolean,
    /**
     * whether or not to consider idle torrents as stalled
     */
    "queue-stalled-enabled": boolean,
    /**
     * torrents that are idle for N minuets aren't counted toward seed-queue-size or download-queue-size
     */
    "queue-stalled-minutes": number,
    /**
     * true means append ".part" to incomplete files
     */
    "rename-partial-files": boolean,
    /**
     * the current RPC API version
     */
    "rpc-version": number,
    /**
     * the minimum RPC API version supported
     */
    "rpc-version-minimum": number,
    /**
     * filename of the script to run
     */
    "script-torrent-done-filename": string,
    /**
     * whether or not to call the "done" script
     */
    "script-torrent-done-enabled": boolean,
    /**
     * the default seed ratio for torrents to use
     */
    "seedRatioLimit": number,
    /**
     * true if seedRatioLimit is honored by default
     */
    "seedRatioLimited": boolean,
    /**
     * max number of torrents to uploaded at once (see seed-queue-enabled)
     */
    "seed-queue-size": number,
    /**
     * if true, limit how many torrents can be uploaded at once
     */
    "seed-queue-enabled": boolean,
    /**
     * max global download speed (KBps)
     */
    "speed-limit-down": number,
    /**
     * true means enabled
     */
    "speed-limit-down-enabled": boolean,
    /**
     * max global upload speed (KBps)
     */
    "speed-limit-up": number,
    /**
     * true means enabled
     */
    "speed-limit-up-enabled": boolean,
    /**
     * true means added torrents will be started right away
     */
    "start-added-torrents": boolean,
    /**
     * true means the .torrent file of added torrents will be deleted
     */
    "trash-original-torrent-files": boolean,
    /**
     * see below
     */
    "units": Units,
    /**
     * true means allow utp
     */
    "utp-enabled": boolean,
    /**
     * long version string "$version ($revision)"
     */
    "version": string,
}


export class GetSessionRequest extends AbstractRequest<any> {

    private constructor(args: any, tag?: number) {
        super(args, SessionMethods.SESSION_GET, tag);
    }

    static of(tag?: number) {
        return new GetSessionRequest({}, tag)
    }
}

export type GetSessionResponse = {} & RpcResponse<SessionArguments>

export class SetSessionRequest extends AbstractRequest<Partial<SessionArguments>> {

    private constructor(args: Partial<SessionArguments>, tag?: number) {
        super(args, SessionMethods.SESSION_SET, tag);
    }

    static of(args: Partial<SessionArguments>, tag?: number) {
        return new SetSessionRequest(args, tag)
    }
}

export type SetSessionResponse = {} & RpcResponse<any>

