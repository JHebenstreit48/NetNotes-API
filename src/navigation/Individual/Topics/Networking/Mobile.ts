import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/Networking/Mobile/Basics';
import Advanced from '@/navigation/Individual/Granularized/Networking/Mobile/Advanced';

const Mobile: Subpage = {
  name: 'Mobile',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Mobile;