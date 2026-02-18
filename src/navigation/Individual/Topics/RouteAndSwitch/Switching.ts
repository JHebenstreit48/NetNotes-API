import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/RouteAndSwitch/Switching/Basics';
import Advanced from '@/navigation/Individual/Granularized/RouteAndSwitch/Switching/Advanced';

const Switching: Subpage = {
  name: 'Switching',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default Switching;