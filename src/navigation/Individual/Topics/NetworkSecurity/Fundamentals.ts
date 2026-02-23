import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/NetworkSecurity/Fundamentals/Basics';
import Advanced from '@/navigation/Individual/Granularized/NetworkSecurity/Fundamentals/Advanced';

const Fundamentals: Subpage = {
  name: 'Fundamentals',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Fundamentals;