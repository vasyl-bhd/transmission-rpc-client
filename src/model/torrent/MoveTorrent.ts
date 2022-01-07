import {AbstractRequest} from './AbstractRequest';
import {RpcResponse, WithIds} from './CommonTypes';
import {TorrentActions} from './TorrentActions';
import {AddTorrentRequestArguments} from "./AddTorrent";

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

  static of(args: MoveTorrentRequestArguments, tag?: number) {
    return new MoveTorrentRequest(args, tag)
  }
}

export interface MoveTorrentResponse extends RpcResponse<any> {}
