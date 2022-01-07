import { AxiosRequestHeaders } from 'axios';

export type ClientConfig = {
  readonly host: string;
  readonly isHttps?: boolean;
  readonly headers?: AxiosRequestHeaders;
};
