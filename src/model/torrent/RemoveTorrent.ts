import { AbstractRequest } from './AbstractRequest';
import { RpcResponse, WithIds } from './CommonTypes';
import { TorrentActions } from './TorrentActions';
import {MoveTorrentRequestArguments} from "./MoveTorrent";

export interface RemoveTorrentRequestArguments extends WithIds {
  /**
   * delete local data. (default: false)
   */
  'delete-local-data'?: boolean;
}

export class RemoveTorrentRequest extends AbstractRequest<RemoveTorrentRequestArguments> {
  constructor(args: RemoveTorrentRequestArguments, tag?: number) {
    super(args, TorrentActions.TORRENT_REMOVE, tag);
  }

  static of(args: RemoveTorrentRequestArguments, tag?: number) {
    return new RemoveTorrentRequest(args, tag)
  }
}

export interface RemoveTorrentResponse extends RpcResponse<any> {}
