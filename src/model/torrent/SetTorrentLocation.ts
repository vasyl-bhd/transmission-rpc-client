import { AbstractRequest } from '../AbstractRequest';
import { Argument, RpcResponse, WithIds } from '../CommonTypes';
import { TorrentMethods } from './TorrentMethods';

export type SetTorrentLocationRequestArguments = {
  /**
   * the new torrent location
   */
  location: string;
  /**
   * if true, move from previous location.  otherwise, search "location" for files (default: false)
   */
  move?: boolean;
} & WithIds &
  Argument;

export class SetTorrentLocationRequest extends AbstractRequest<SetTorrentLocationRequestArguments> {
  private constructor(args: SetTorrentLocationRequestArguments, tag?: number) {
    super(args, TorrentMethods.TORRENT_SET_LOCATION, tag);
  }

  static of(args: SetTorrentLocationRequestArguments, tag?: number) {
    return new SetTorrentLocationRequest(args, tag);
  }
}

export type SetTorrentLocationResponse = {} & RpcResponse<any>
