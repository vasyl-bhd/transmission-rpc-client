import axios, {AxiosResponse} from 'axios';
import {GetTorrentRequest, GetTorrentResponse} from '../model/torrent/GetTorrent';
import {ClientConfig} from './ClientConfig';
import {AddTorrentRequest, AddTorrentResponse} from '../model/torrent/AddTorrent';
import {Argument, RpcRequest, RpcResponse} from '../model/CommonTypes';
import {RemoveTorrentRequest, RemoveTorrentResponse} from '../model/torrent/RemoveTorrent';
import {UpdateTorrentRequest, UpdateTorrentResponse} from '../model/torrent/UpdateTorrent';
import {SetTorrentLocationRequest, SetTorrentLocationResponse} from "../model/torrent/SetTorrentLocation";
import {GetSessionRequest, GetSessionResponse, SetSessionRequest, SetSessionResponse} from "../model/session/Session";
import {FreeSpaceRequest, FreeSpaceResponse} from "../model/session/FreeSpace";
import {SessionStatsRequest, SessionStatsResponse} from "../model/session/SessionStats";
import {
  ReannounceTorrentRequest,
  StartNowTorrentRequest,
  StartTorrentRequest,
  StopTorrentRequest,
  TorrentActionResponse, VerifyTorrentRequest
} from "../model/torrent/TorrentAction";

export class TransmissionClient {
  private readonly csrfHeader: string = 'X-Transmission-Session-Id';
  private readonly separator = '/';
  private readonly config: ClientConfig;
  private readonly protocol;
  private readonly host;
  private readonly url;
  private token: string = '';

  constructor(config: ClientConfig) {
    this.config = config;
    this.protocol = this.config.isHttps ? 'https' : 'http';
    const host = this.config.host;
    this.host = host.endsWith(this.separator) ? host.substring(0, host.length - 1) : host;
    this.url = `${this.protocol}://${this.host}/transmission/rpc`;
  }

  request<REQ extends RpcRequest<Argument>, RES extends RpcResponse<Argument>>(req: REQ): Promise<RES> {
    const getWithToken = (token: string): Promise<AxiosResponse<RES> | any> => {
      const headers = this.config.headers;
      const config = {
        headers: { [this.csrfHeader]: token, ...headers },
      };
      return axios
        .post<RES>(this.url, req, config)
        .then((res) => res.data)
        .catch((err) => {
          console.log(err.response)
          if (err.response?.status === 409) {
            const csrfToken = err.response.headers[`${this.csrfHeader.toLowerCase()}`]
            if (csrfToken) {
              this.token = csrfToken;
              return getWithToken(this.token);
            } else {
              console.log("No CSRF Header is present!")
            }
          }
          return Promise.reject(err);
        });
    };
    return getWithToken(this.token);
  }

  getTorrents(req: GetTorrentRequest): Promise<GetTorrentResponse> {
    return this.request(req);
  }

  addTorrent(req: AddTorrentRequest): Promise<AddTorrentResponse> {
    return this.request(req);
  }

  moveTorrent(req: SetTorrentLocationRequest): Promise<SetTorrentLocationResponse> {
    return this.request(req);
  }

  removeTorrent(req: RemoveTorrentRequest): Promise<RemoveTorrentResponse> {
    return this.request(req);
  }

  updateTorrent(req: UpdateTorrentRequest): Promise<UpdateTorrentResponse> {
    return this.request(req);
  }

  stopTorrent(req: StopTorrentRequest): Promise<TorrentActionResponse> {
    return this.request(req);
  }

  startTorrent(req: StartTorrentRequest): Promise<TorrentActionResponse> {
    return this.request(req);
  }

  /**
   * Start torrent bypassing queueing
   */
  startTorrentNow(req: StartNowTorrentRequest): Promise<TorrentActionResponse> {
    return this.request(req);
  }

  verifyTorrent(req: VerifyTorrentRequest): Promise<TorrentActionResponse> {
    return this.request(req);
  }

  torrentReannounce(req: ReannounceTorrentRequest): Promise<TorrentActionResponse> {
    return this.request(req);
  }

  getSession(req: GetSessionRequest): Promise<GetSessionResponse> {
    return this.request(req);
  }

  setSession(req: SetSessionRequest): Promise<SetSessionResponse> {
    return this.request(req);
  }

  getFreeSpace(req: FreeSpaceRequest): Promise<FreeSpaceResponse> {
    return this.request(req);
  }

  getSessionStats(req: SessionStatsRequest): Promise<SessionStatsResponse> {
    return this.request(req)
  }
}
