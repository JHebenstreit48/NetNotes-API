import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Transport/Basics';
import Advanced from '@/Navigation/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Transport/Advanced';

const Transport: Subpage = {
  name: 'Transport Layer',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Transport;