// import {TransmissionClient} from "./client/Client";
// import {GetTorrentRequest} from "./model/torrent/GetTorrent";
//
// const c = new TransmissionClient({
//     host: "192.168.31.10/kunnka"
// })
//
// c.getTorrents(GetTorrentRequest.of({
//     fields: ["id", "name", "rateDownload", "rateUpload", "uploadRatio", "downloadedEver", "status"],
//     ids: undefined
// }))
// .then(res => console.log(res.arguments.torrents))
//     .catch(err => console.log(err.response.headers))
