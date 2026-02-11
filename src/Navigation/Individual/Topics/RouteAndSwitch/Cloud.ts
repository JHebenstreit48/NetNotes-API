import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/RouteAndSwitch/Cloud/Basics';
import Advanced from '@/Navigation/Individual/Granularized/RouteAndSwitch/Cloud/Advanced';

const Cloud: Subpage = {
  name: 'Cloud',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Cloud;