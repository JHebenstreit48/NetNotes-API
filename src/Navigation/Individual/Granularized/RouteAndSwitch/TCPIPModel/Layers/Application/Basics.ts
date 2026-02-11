import type { Subpage } from '@/types/navigation';

import WebAndName from '@/Navigation/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Application/Basics/WebAndName';
import ClientAndServer from '@/Navigation/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Application/Basics/ClientAndServer';
import EmailAndCommunication from '@/Navigation/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Application/Basics/EmailAndCommunication';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    WebAndName,
    ClientAndServer,
    EmailAndCommunication
  ]
};

export default Basics;