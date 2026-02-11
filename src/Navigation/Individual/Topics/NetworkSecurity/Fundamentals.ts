import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/NetworkSecurity/Fundamentals/Basics';
import Advanced from '@/Navigation/Individual/Granularized/NetworkSecurity/Fundamentals/Advanced';

const Fundamentals: Subpage = {
  name: 'Fundamentals',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Fundamentals;