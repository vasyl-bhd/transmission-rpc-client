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
declare enum Status {
    TORRENT_STOPPED = 0,
    QUEUED_TO_CHECK_FILES = 1,
    CHECKING_FILES = 2,
    QUEUE_TO_DOWNLOAD = 3,
    DOWNLOADING = 4,
    QUEUE_TO_SEED = 5,
    SEEDING = 6
}
export interface Torrent extends WithIds {
    fields: string[];
    format?: string;
}
