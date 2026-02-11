import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/RouteAndSwitch/RoutingProtocols/Basics';
import Advanced from '@/Navigation/Individual/Granularized/RouteAndSwitch/RoutingProtocols/Advanced';

const Routing: Subpage = {
  name: 'Routing',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default Routing;