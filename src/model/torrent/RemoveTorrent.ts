import { AbstractRequest } from './AbstractRequest';
import { Argument, RpcResponse, WithIds } from './CommonTypes';
import { TorrentActions } from './TorrentActions';

export type RemoveTorrentRequestArguments = {
  /**
   * delete local data. (default: false)
   */
  'delete-local-data'?: boolean;
} & WithIds &
  Argument;

export class RemoveTorrentRequest extends AbstractRequest<RemoveTorrentRequestArguments> {
  constructor(args: RemoveTorrentRequestArguments, tag?: number) {
    super(args, TorrentActions.TORRENT_REMOVE, tag);
  }

  static of(args: RemoveTorrentRequestArguments, tag?: number) {
    return new RemoveTorrentRequest(args, tag);
  }
}

export interface RemoveTorrentResponse extends RpcResponse<any> {}
