import type { Subpage } from '@/types/navigation';

import OSIModel from '@/navigation/Individual/Granularized/RouteAndSwitch/Legacy/OSIModel';
import ProtocolsAndStatuses from '@/navigation/Individual/Granularized/RouteAndSwitch/Legacy/ProtocolsAndStatuses';

const Legacy: Subpage = {
  name: 'Legacy',
  subpages: [
    OSIModel,
    ProtocolsAndStatuses
  ]
};

export default Legacy;