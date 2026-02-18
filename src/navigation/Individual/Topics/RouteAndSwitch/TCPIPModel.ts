import type { Subpage } from '@/types/navigation';

import Application from "@/navigation/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Application";
import Internet from "@/navigation/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Internet";
import Transport from "@/navigation/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Transport";
import NetworkAccess from "@/navigation/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess";

const TCPIPModel: Subpage = {
    name: "TCP/IP Model",
    subpages: [
        Application,
        Internet,
        Transport,
        NetworkAccess,
    ]
};

export default TCPIPModel;