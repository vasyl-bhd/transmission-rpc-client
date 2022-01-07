import { GetTorrentRequest } from './model/torrent/GetTorrent';
import { TransmissionClient } from './client/Client';

const tryLib = () => {
  const client = new TransmissionClient({ host: '192.168.31.10:9091' });
  client.getTorrents(new GetTorrentRequest({ fields: ['id', 'name', 'files'] })).then((res) => console.log(res));
};
tryLib();
