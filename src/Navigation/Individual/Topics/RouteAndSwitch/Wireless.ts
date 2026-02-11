import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/RouteAndSwitch/Wireless/Basics';
import Advanced from '@/Navigation/Individual/Granularized/RouteAndSwitch/Wireless/Advanced';

const Wireless: Subpage = {
  name: 'Wireless',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default Wireless;