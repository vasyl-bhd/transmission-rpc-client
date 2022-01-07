declare type RpcResponse<R> = {
    result: string;
    arguments: R;
    tag?: number;
};
