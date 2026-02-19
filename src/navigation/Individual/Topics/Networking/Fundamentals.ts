import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/Networking/Foundations/Basics';
import Advanced from '@/navigation/Individual/Granularized/Networking/Foundations/Advanced';

const Fundamentals: Subpage = {
  name: 'Foundations',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Fundamentals;