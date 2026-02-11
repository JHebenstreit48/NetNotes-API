import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/RouteAndSwitch/Foundations/Basics';
import Advanced from '@/Navigation/Individual/Granularized/RouteAndSwitch/Foundations/Advanced';

const Fundamentals: Subpage = {
  name: 'Foundations',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Fundamentals;