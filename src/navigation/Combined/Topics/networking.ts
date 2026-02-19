import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/Individual/Topics/Networking/Fundamentals';
import TCPIPModel from '@/navigation/Individual/Topics/Networking/TCPIPModel';
import Switching from '@/navigation/Individual/Topics/Networking/Switching';
import RoutingProtocols from '@/navigation/Individual/Topics/Networking/RoutingProtocols';
import Wireless from '@/navigation/Individual/Topics/Networking/Wireless';
import Mobile from '@/navigation/Individual/Topics/Networking/Mobile';
import Cloud from '@/navigation/Individual/Topics/Networking/Cloud';
import Legacy from '@/navigation/Individual/Topics/Networking/Legacy';

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