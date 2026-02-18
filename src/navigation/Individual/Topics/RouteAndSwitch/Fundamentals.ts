import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/RouteAndSwitch/Foundations/Basics';
import Advanced from '@/navigation/Individual/Granularized/RouteAndSwitch/Foundations/Advanced';

const Fundamentals: Subpage = {
  name: 'Foundations',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Fundamentals;