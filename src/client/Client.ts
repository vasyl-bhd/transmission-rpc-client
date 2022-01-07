import axios, { AxiosResponse } from 'axios';
import { GetTorrentRequest, GetTorrentResponse } from '../model/torrent/GetTorrent';

export class ClientConfig {
  readonly host: String;
  readonly isHttps?: boolean;

  constructor(host: String, isHttps?: boolean) {
    this.host = host;
    this.isHttps = isHttps || false;
  }
}

export class TransmissionClient {
  private readonly csrfHeader: string = 'x-transmission-session-id';
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
    this.host =
      host.indexOf(this.separator, host.length - this.separator.length) >= 0
        ? host.substring(0, host.length - 1)
        : host;
    this.url = `${this.protocol}://${this.host}/transmission/rpc`;
  }

  private request<REQ, RES>(req: REQ) {
    const getAxios = (req: REQ, token: string): Promise<AxiosResponse<RES> | any> => {
      const config = {
        headers: { [this.csrfHeader]: token },
      };
      return axios
        .post<RES>(this.url, req, config)
        .then((res) => res.data)
        .catch((err) => {
          if (err.response?.status === 409) {
            this.token = err.response.headers[`${this.csrfHeader}`];
            return getAxios(req, this.token);
          }
          return Promise.reject(err);
        });
    };
    return getAxios(req, this.token);
  }

  getTorrents(req: GetTorrentRequest): Promise<GetTorrentResponse> {
    return this.request(req);
  }
}
