import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/RouteAndSwitch/Switching/Basics';
import Advanced from '@/Navigation/Individual/Granularized/RouteAndSwitch/Switching/Advanced';

const Switching: Subpage = {
  name: 'Switching',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default Switching;