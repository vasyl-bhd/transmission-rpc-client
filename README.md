## transmission-rpc-client

Simple client for calling [transmisison torrent client](https://transmissionbt.com/) using it's own RPC 

### Usage

Initializing client:
```typescript
import {TransmissionClient} from "./Client";

const client = new TransmissionClient({
    host: "<your transmission hostname>",
    isHttps: false //(use https protocol. this parameter is optional)
});
```
Calling transmission:

```typescript
client.getTorrents(GetTorrentRequest.of({fields: ["id", "name", "downloadDir"], ids: [1] || undefined}))
.then(res => console.log(res))
```

All API implemented here are described in transmission RPC [docs](https://github.com/transmission/transmission/blob/master/extras/rpc-spec.txt)