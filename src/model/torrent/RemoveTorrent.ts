import { AbstractRequest } from '../AbstractRequest';
import { Argument, RpcResponse, WithIds } from '../CommonTypes';
import { TorrentMethods } from './TorrentMethods';

export type RemoveTorrentRequestArguments = {
  /**
   * delete local data. (default: false)
   */
  'delete-local-data'?: boolean;
} & WithIds &
  Argument;

export class RemoveTorrentRequest extends AbstractRequest<RemoveTorrentRequestArguments> {
  private constructor(args: RemoveTorrentRequestArguments, tag?: number) {
    super(args, TorrentMethods.TORRENT_REMOVE, tag);
  }

  static of(args: RemoveTorrentRequestArguments, tag?: number) {
    return new RemoveTorrentRequest(args, tag);
  }
}

export type RemoveTorrentResponse = {} & RpcResponse<any>
