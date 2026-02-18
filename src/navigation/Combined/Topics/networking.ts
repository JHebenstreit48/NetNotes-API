import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/Individual/Topics/RouteAndSwitch/Fundamentals';
import TCPIPModel from '@/navigation/Individual/Topics/RouteAndSwitch/TCPIPModel';
import Switching from '@/navigation/Individual/Topics/RouteAndSwitch/Switching';
import RoutingProtocols from '@/navigation/Individual/Topics/RouteAndSwitch/RoutingProtocols';
import Wireless from '@/navigation/Individual/Topics/RouteAndSwitch/Wireless';
import Mobile from '@/navigation/Individual/Topics/RouteAndSwitch/Mobile';
import Cloud from '@/navigation/Individual/Topics/RouteAndSwitch/Cloud';
import Legacy from '@/navigation/Individual/Topics/RouteAndSwitch/Legacy';

const networking: Subpage = {
  name: 'Networking',
  subpages: [
    Fundamentals,
    TCPIPModel,
    Switching,
    RoutingProtocols,
    Wireless,
    Mobile,
    Cloud, 
    Legacy
  ],
};

export default networking;