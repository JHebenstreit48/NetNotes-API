import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/RouteAndSwitch/Legacy/ProtocolsAndStatuses/Basics';
import Advanced from '@/navigation/Individual/Granularized/RouteAndSwitch/Legacy/ProtocolsAndStatuses/Advanced';

const ProtocolsAndStatuses: Subpage = {
  name: 'Protocols & Statuses',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default ProtocolsAndStatuses;