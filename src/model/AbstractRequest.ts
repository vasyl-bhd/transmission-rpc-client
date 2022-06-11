import { RpcRequest } from './CommonTypes';
import { TorrentActions } from './torrent/TorrentActions';
import {SessionActions} from "./session/SessionActions";

export abstract class AbstractRequest<T> implements RpcRequest<T> {
  readonly arguments: T;
  readonly method: TorrentActions | SessionActions;
  readonly tag?: number;

  protected constructor(args: T, method: TorrentActions | SessionActions, tag?: number) {
    this.arguments = args;
    this.method = method;
    this.tag = tag;
  }
}
