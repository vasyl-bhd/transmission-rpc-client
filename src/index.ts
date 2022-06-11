import {TransmissionClient} from "./client/Client";
import {FreeSpaceRequest} from "./model/session/FreeSpace";

new TransmissionClient({host: "192.168.31.10:9091"})
.getFreeSpace(FreeSpaceRequest.of("/mnt/hdd/downloads"))
.then(res => console.log(res))