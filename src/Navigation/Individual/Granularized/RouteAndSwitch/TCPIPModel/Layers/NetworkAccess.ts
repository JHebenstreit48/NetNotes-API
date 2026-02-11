import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics';
import Advanced from '@/Navigation/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Advanced';

const NetworkAccess: Subpage = {
  name: "Network Access Layer",
  subpages: [
    Basics,
    Advanced
  ]
};

export default NetworkAccess;