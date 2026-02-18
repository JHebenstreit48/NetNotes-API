import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/RouteAndSwitch/Legacy/OSIModel/Basics';
import Advanced from '@/navigation/Individual/Granularized/RouteAndSwitch/Legacy/OSIModel/Advanced';

const OSIModel: Subpage = {
  name: 'OSI Model',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default OSIModel;