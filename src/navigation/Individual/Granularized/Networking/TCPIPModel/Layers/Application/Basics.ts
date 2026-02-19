import type { Subpage } from '@/types/navigation';

import WebAndName from '@/navigation/Individual/Granularized/Networking/TCPIPModel/Layers/Application/Basics/WebAndName';
import ClientAndServer from '@/navigation/Individual/Granularized/Networking/TCPIPModel/Layers/Application/Basics/ClientAndServer';
import EmailAndCommunication from '@/navigation/Individual/Granularized/Networking/TCPIPModel/Layers/Application/Basics/EmailAndCommunication';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    WebAndName,
    ClientAndServer,
    EmailAndCommunication
  ]
};

export default Basics;