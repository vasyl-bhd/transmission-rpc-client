import { AbstractRequest } from './AbstractRequest';
import { Argument, RpcResponse, WithIds } from './CommonTypes';
import { TorrentActions } from './TorrentActions';
import { RemoveTorrentRequestArguments } from './RemoveTorrent';

export type UpdateTorrentRequestArguments = {
  /**
   * this torrent's bandwidth tr_priority_t
   */
  bandwidthPriority?: number;
  /**
   * maximum download speed (KBps)
   */
  downloadLimit?: number;
  /**
   * true if downloadLimit is honored
   */
  downloadLimited?: boolean;
  /**
   * indices of file(s) to download
   */
  filesWanted?: number[];
  /**
   * indices of file(s) to not download
   */
  filesUnwanted?: number[];
  /**
   * true if session upload limits are honored
   */
  honorsSessionLimits?: boolean;
  /**
   * array of string labels
   */
  labels?: any[];
  /**
   * new location of the torrent's content
   */
  location?: string;
  /**
   * maximum number of peers
   */
  peerLimit?: number;
  /**
   * indices of high-priority file(s)
   */
  priorityHigh?: any[];
  /**
   * indices of low-priority file(s)
   */
  priorityLow?: any[];
  /**
   * indices of normal-priority file(s)
   */
  priorityNormal?: any[];
  /**
   * position of this torrent in its queue [0...n)
   */
  queuePosition?: number;
  /**
   * torrent-level number of minutes of seeding inactivity
   */
  seedIdleLimit?: number;
  /**
   * which seeding inactivity to use.  See tr_idlelimit
   */
  seedIdleMode?: number;
  /**
   * torrent-level seeding ratio
   */
  seedRatioLimit?: number;
  /**
   * which ratio to use.  See tr_ratiolimit
   */
  seedRatioMode?: number;
  /**
   * strings of announce URLs to add
   */
  trackerAdd?: any[];
  /**
   * ids of trackers to remove
   */
  trackerRemove?: number[];
  /**
   * pairs of <trackerId/new announce URLs>
   */
  trackerReplace?: any[];
  /**
   * maximum upload speed (KBps)
   */
  uploadLimit?: number;
  /**
   * true if uploadLimit is honored
   */
  uploadLimited?: boolean;
} & WithIds &
  Argument;

export class UpdateTorrentRequest extends AbstractRequest<UpdateTorrentRequestArguments> {
  constructor(args: UpdateTorrentRequestArguments, tag?: number) {
    super(args, TorrentActions.TORRENT_REMOVE, tag);
  }

  static of(args: UpdateTorrentRequestArguments, tag?: number) {
    return new UpdateTorrentRequest(args, tag);
  }
}

export interface UpdateTorrentResponse extends RpcResponse<any> {}
