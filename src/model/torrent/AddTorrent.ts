import { GetTorrentResponseArguments } from './GetTorrent';
import { AbstractRequest } from '../AbstractRequest';
import { TorrentActions } from './TorrentActions';
import { Argument, RpcResponse } from '../CommonTypes';

export type AddTorrentRequestArguments = {
  /**
   * pointer to a string of one or more cookies.
   */
  cookies?: string;
  /**
   * path to download the torrent to
   */
  'download-dir': string;
  /**
   * filename or URL of the .torrent file
   */
  filename?: string;
  /**
   * base64-encoded .torrent content
   */
  metainfo?: string;
  /**
   * if true, don't start the torrent
   */
  paused?: boolean;
  /**
   * maximum number of peers
   */
  'peer-limit'?: number;
  /**
   * torrent's bandwidth tr_priority_t
   */
  bandwidthPriority?: number;
  /**
   *  indices of file(s) to download
   */
  'files-wanted'?: number[];
  /**
   *  indices of file(s) to not download
   */
  'files-unwanted'?: number[];
  /**
   *  indices of high-priority file(s)
   */
  'priority-high'?: number[];
  /**
   *  indices of low-priority file(s)
   */
  'priority-low'?: number[];
  /**
   *  indices of normal-priority file(s)
   */
  'priority-normal'?: number[];
} & Argument;

export class AddTorrentRequest extends AbstractRequest<AddTorrentRequestArguments> {
  private constructor(args: AddTorrentRequestArguments, tag?: number) {
    super(args, TorrentActions.TORRENT_ADD, tag);
  }

  static of(args: AddTorrentRequestArguments, tag?: number) {
    return new AddTorrentRequest(args, tag);
  }
}

export type AddTorrentResponse = {} & RpcResponse<GetTorrentResponseArguments>
