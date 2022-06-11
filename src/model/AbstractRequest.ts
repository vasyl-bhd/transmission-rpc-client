import { RpcRequest } from './CommonTypes';
import { TorrentMethods } from './torrent/TorrentMethods';
import {SessionMethods} from "./session/SessionMethods";

export abstract class AbstractRequest<T> implements RpcRequest<T> {
  readonly arguments: T;
  readonly method: TorrentMethods | SessionMethods;
  readonly tag?: number;

  protected constructor(args: T, method: TorrentMethods | SessionMethods, tag?: number) {
    this.arguments = args;
    this.method = method;
    this.tag = tag;
  }
}
