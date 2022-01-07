declare type RpcRequest<R> = {
    method: TorrentActions;
    arguments: R;
    tag?: number;
};
