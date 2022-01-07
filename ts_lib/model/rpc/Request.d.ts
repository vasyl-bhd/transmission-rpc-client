declare class Request<T> {
    readonly method: TorrentActions;
    readonly arguments: T | undefined;
    readonly tag: number | undefined;
    constructor(method: TorrentActions, arguments?: T, tag?: number);
}
