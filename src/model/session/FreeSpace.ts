import {Argument, RpcResponse} from "../CommonTypes";
import {AbstractRequest} from "../AbstractRequest";
import {SessionMethods} from "./SessionMethods";


export type FreeSpaceResponseArguments = {
    /**
     *  same as the Request argument
     */
    "path": string
    /**
     *  the size, in bytes, of the free space in that directory
     */
    "size-bytes": number
}

export type FreeSpaceRequestArguments = {
    /**
     *  string the directory to query
     */
    "path": string
} & Argument

export class FreeSpaceRequest extends AbstractRequest<FreeSpaceRequestArguments> {
    private constructor(args: FreeSpaceRequestArguments, tag?: number) {
        super(args, SessionMethods.FREE_SPACE, tag);
    }

    static of(path: string, tag?: number): FreeSpaceRequest {
        return new FreeSpaceRequest({path}, tag)
    }
}

export type FreeSpaceResponse = {} & RpcResponse<FreeSpaceResponseArguments>
