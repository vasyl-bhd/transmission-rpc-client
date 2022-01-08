import { AbstractRequest } from './AbstractRequest';
import { Argument, RpcResponse, WithIds } from './CommonTypes';
import { TorrentActions } from './TorrentActions';

export type MoveTorrentRequestArguments = {
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

export class MoveTorrentRequest extends AbstractRequest<MoveTorrentRequestArguments> {
  constructor(args: MoveTorrentRequestArguments, tag?: number) {
    super(args, TorrentActions.TORRENT_SET_LOCATION, tag);
  }

  static of(args: MoveTorrentRequestArguments, tag?: number) {
    return new MoveTorrentRequest(args, tag);
  }
}

export type MoveTorrentResponse = {} & RpcResponse<any>
