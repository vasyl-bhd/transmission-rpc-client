export class ClientConfig {
  readonly host: string;
  readonly isHttps?: boolean;

  constructor(host: string, isHttps?: boolean) {
    this.host = host;
    this.isHttps = isHttps || false;
  }
}
