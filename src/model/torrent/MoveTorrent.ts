import { AbstractRequest } from './AbstractRequest';
import { RpcResponse, WithIds } from './CommonTypes';
import { TorrentActions } from './TorrentActions';

export interface MoveTorrentRequestArguments extends WithIds {
  /**
   * the new torrent location
   */
  location: string;
  /**
   * if true, move from previous location.  otherwise, search "location" for files (default: false)
   */
  move: boolean;
}

export class MoveTorrentRequest extends AbstractRequest<MoveTorrentRequestArguments> {
  constructor(args: MoveTorrentRequestArguments, tag?: number) {
    super(args, TorrentActions.TORRENT_SET_LOCATION, tag);
  }
}

export interface MoveTorrentResponse extends RpcResponse<any> {}
