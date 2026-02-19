import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/Networking/Cloud/Basics';
import Advanced from '@/navigation/Individual/Granularized/Networking/Cloud/Advanced';

const Cloud: Subpage = {
  name: 'Cloud',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Cloud;