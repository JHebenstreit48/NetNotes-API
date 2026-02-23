import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/Networking/Legacy/OSIModel/Basics';
import Advanced from '@/navigation/Individual/Granularized/Networking/Legacy/OSIModel/Advanced';

const OSIModel: Subpage = {
  name: 'OSI Model',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default OSIModel;