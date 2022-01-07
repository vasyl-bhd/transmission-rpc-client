import { TorrentActions } from './TorrentActions';

export type WithIds = {
  /**
   * "ids", which specifies which torrents to use.
   *  All torrents are used if the "ids" argument is omitted.
   *  "ids" should be one of the following:
   *  <br/>
   *  (1) an integer referring to a torrent id
   *  <br/>
   *  (2) a list of torrent id numbers, sha1 hash strings, or both
   *  <br/>
   *  (3) a string, "recently-active", for recently-active torrents
   */
  ids?: number[];
};

export type RpcRequest<R> = {
  method: TorrentActions;
  arguments: R;
  tag?: number;
};

export type RpcResponse<R> = {
  result: string;
  arguments: R;
  tag?: number;
};
