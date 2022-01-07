import { AbstractRequest } from './AbstractRequest';
import { RpcResponse, WithIds } from './CommonTypes';
import { TorrentActions } from './TorrentActions';

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
}

export interface RemoveTorrentResponse extends RpcResponse<any> {}
