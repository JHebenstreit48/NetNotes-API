import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/RouteAndSwitch/Cloud/Basics';
import Advanced from '@/navigation/Individual/Granularized/RouteAndSwitch/Cloud/Advanced';

const Cloud: Subpage = {
  name: 'Cloud',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Cloud;