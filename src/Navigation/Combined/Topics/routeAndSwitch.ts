import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/Navigation/Individual/Topics/RouteAndSwitch/Fundamentals';
import Legacy from '@/Navigation/Individual/Topics/RouteAndSwitch/Legacy';
import TCPIPModel from '@/Navigation/Individual/Topics/RouteAndSwitch/TCPIPModel';
import Switching from '@/Navigation/Individual/Topics/RouteAndSwitch/Switching';
import RoutingProtocols from '@/Navigation/Individual/Topics/RouteAndSwitch/RoutingProtocols';
import Wireless from '@/Navigation/Individual/Topics/RouteAndSwitch/Wireless';
import Cloud from '@/Navigation/Individual/Topics/RouteAndSwitch/Cloud';

const routeSwitch: Subpage = {
  name: 'Routing & Switching',
  subpages: [
    Fundamentals, 
    Legacy, 
    TCPIPModel, 
    Switching,
    RoutingProtocols,
    Wireless,
    Cloud,
  ],
};

export default routeSwitch;