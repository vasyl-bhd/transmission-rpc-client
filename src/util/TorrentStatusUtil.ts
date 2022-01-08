import { TorrentStatus } from '../model/torrent/GetTorrent';

export const parseStatus = (s: TorrentStatus) => {
  return TorrentStatus[Object.keys(TorrentStatus)[s]];
};
