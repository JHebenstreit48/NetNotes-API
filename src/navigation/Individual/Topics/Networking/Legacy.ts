import type { Subpage } from '@/types/navigation';

import OSIModel from '@/navigation/Individual/Granularized/Networking/Legacy/OSIModel';
import ProtocolsAndStatuses from '@/navigation/Individual/Granularized/Networking/Legacy/ProtocolsAndStatuses';

const Legacy: Subpage = {
  name: 'Legacy',
  subpages: [
    OSIModel,
    ProtocolsAndStatuses
  ]
};

export default Legacy;