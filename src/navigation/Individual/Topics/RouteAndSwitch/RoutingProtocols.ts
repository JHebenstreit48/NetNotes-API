import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/RouteAndSwitch/RoutingProtocols/Basics';
import Advanced from '@/navigation/Individual/Granularized/RouteAndSwitch/RoutingProtocols/Advanced';

const Routing: Subpage = {
  name: 'Routing',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default Routing;