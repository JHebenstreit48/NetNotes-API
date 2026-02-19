import type { Subpage } from '@/types/navigation';

import Application from "@/navigation/Individual/Granularized/Networking/TCPIPModel/Layers/Application";
import Internet from "@/navigation/Individual/Granularized/Networking/TCPIPModel/Layers/Internet";
import Transport from "@/navigation/Individual/Granularized/Networking/TCPIPModel/Layers/Transport";
import NetworkAccess from "@/navigation/Individual/Granularized/Networking/TCPIPModel/Layers/NetworkAccess";

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