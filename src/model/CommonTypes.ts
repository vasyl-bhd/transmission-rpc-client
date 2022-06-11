import { TorrentActions } from './torrent/TorrentActions';
import {SessionActions} from "./session/SessionActions";

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
  ids: number[] | undefined;
};

export type Argument = {};

export type RpcRequest<R extends Argument> = {
  method: TorrentActions | SessionActions;
  arguments: R;
  tag?: number;
};

export type RpcResponse<R extends Argument> = {
  result: string;
  arguments: R;
  tag?: number;
};
