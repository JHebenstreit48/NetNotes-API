import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/RouteAndSwitch/Wireless/Basics';
import Advanced from '@/navigation/Individual/Granularized/RouteAndSwitch/Wireless/Advanced';

const Wireless: Subpage = {
  name: 'Wireless',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default Wireless;