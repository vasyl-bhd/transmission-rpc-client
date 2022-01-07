import { GetTorrentRequest, GetTorrentResponse } from "../model/torrent/GetTorrent";
export declare class ClientConfig {
    readonly host: String;
    readonly isHttps?: boolean;
    constructor(host: String, isHttps?: boolean);
}
export declare class TransmissionClient {
    private readonly csrfHeader;
    private readonly separator;
    private readonly config;
    private readonly protocol;
    private readonly host;
    private readonly url;
    private token;
    constructor(config: ClientConfig);
    private request;
    getTorrents(req: GetTorrentRequest): Promise<GetTorrentResponse>;
}
