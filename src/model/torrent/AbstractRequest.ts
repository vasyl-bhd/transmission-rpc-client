import {RpcRequest} from './CommonTypes';
import {TorrentActions} from './TorrentActions';

export abstract class AbstractRequest<T> implements RpcRequest<T> {
  readonly arguments: T;
  readonly method: TorrentActions;
  readonly tag?: number;

  protected constructor(args: T, method: TorrentActions, tag?: number) {
    this.arguments = args;
    this.method = method;
    this.tag = tag;
  }
}
