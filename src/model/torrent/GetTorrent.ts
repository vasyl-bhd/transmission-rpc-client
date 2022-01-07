import { AbstractRequest } from './AbstractRequest';
import { RpcResponse, WithIds } from './CommonTypes';
import { TorrentActions } from './TorrentActions';

export interface Files {
  bytesCompleted: number;
  length: number;
  name: string;
}

export interface FileStats {
  bytesCompleted: number;
  wanted: boolean;
  priority: number;
}

export interface Labels {
  label: string;
}

export interface Peers {
  address: string;
  clientName: string;
  clientIsChoked: boolean;
  clientIsInterested: boolean;
  flagStr: string;
  isDownloadingFrom: boolean;
  isEncrypted: boolean;
  isIncoming: boolean;
  isUploadingTo: boolean;
  isUTP: boolean;
  peerIsChoked: boolean;
  peerIsInterested: boolean;
  port: number;
  progress: number;
  rateToClient: number;
  rateToPeer: number;
}

export interface PeersFrom {
  fromCache: number;
  fromDht: number;
  fromIncoming: number;
  fromLpd: number;
  fromLtep: number;
  fromPex: number;
  fromTracker: number;
}

enum Status {
  TORRENT_STOPPED,
  QUEUED_TO_CHECK_FILES,
  CHECKING_FILES,
  QUEUE_TO_DOWNLOAD,
  DOWNLOADING,
  QUEUE_TO_SEED,
  SEEDING,
}

export interface Trackers {
  announce: string;
  id: number;
  scrape: string;
  tier: number;
}

export interface TrackerStats {
  announce: string;
  announceState: number;
  downloadCount: number;
  hasAnnounced: boolean;
  hasScraped: boolean;
  host: string;
  id: number;
  isBackup: boolean;
  lastAnnouncePeerCount: number;
  lastAnnounceResult: string;
  lastAnnounceStartTime: number;
  lastAnnounceSucceeded: boolean;
  lastAnnounceTime: number;
  lastAnnounceTimedOut: boolean;
  lastScrapeResult: string;
  lastScrapeStartTime: number;
  lastScrapeSucceeded: boolean;
  lastScrapeTime: number;
  lastScrapeTimedOut: boolean;
  leecherCount: number;
  nextAnnounceTime: number;
  nextScrapeTime: number;
  scrape: string;
  scrapeState: number;
  seederCount: number;
  tier: number;
}

export interface WebSeeds {
  webseed: string;
}

export interface Torrent {
  activityDate: number;
  addedDate: number;
  bandwidthPriority: number;
  comment: string;
  corruptEver: number;
  creator: string;
  dateCreated: number;
  desiredAvailable: number;
  doneDate: number;
  downloadDir: string;
  downloadedEver: number;
  downloadLimit: number;
  downloadLimited: boolean;
  editDate: number;
  error: number;
  errorstring: string;
  eta: number;
  etaIdle: number;
  'file-count': number;
  files: Files[];
  fileStats: FileStats[];
  hashstring: string;
  haveUnchecked: number;
  haveValid: number;
  honorsSessionLimits: boolean;
  id: number;
  isFinished: boolean;
  isPrivate: boolean;
  isStalled: boolean;
  labels: Labels[];
  leftUntilDone: number;
  magnetLink: string;
  manualAnnounceTime: number;
  maxConnectedPeers: number;
  metadataPercentComplete: number;
  name: string;
  peerLimit: number;
  peers: Peers[];
  peersConnected: number;
  peersFrom: PeersFrom;
  peersGettingFromUs: number;
  peersSendingToUs: number;
  percentDone: number;
  pieces: string;
  pieceCount: number;
  pieceSize: number;
  priorities: any[];
  'primary-mime-type': string;
  queuePosition: number;
  rateDownload: number;
  rateUpload: number;
  recheckProgress: number;
  secondsDownloading: number;
  secondsSeeding: number;
  seedIdleLimit: number;
  seedIdleMode: number;
  seedRatioLimit: number;
  seedRatioMode: number;
  sizeWhenDone: number;
  startDate: number;
  status: Status;
  trackers: Trackers[];
  trackerStats: TrackerStats[];
  totalSize: number;
  torrentFile: string;
  uploadedEver: number;
  uploadLimit: number;
  uploadLimited: boolean;
  uploadRatio: number;
  wanted: boolean[];
  webseeds: WebSeeds[];
  webseedsSendingToUs: number;
}

export interface GetTorrentRequestArguments extends WithIds {
  fields: string[];
}

export interface GetTorrentResponseArguments {
  torrents: Torrent[];
}

export class GetTorrentRequest extends AbstractRequest<GetTorrentRequestArguments> {
  constructor(args: GetTorrentRequestArguments, tag?: number) {
    super(args, TorrentActions.TORRENT_GET, tag);
  }
}

export interface GetTorrentResponse extends RpcResponse<GetTorrentResponseArguments> {}
