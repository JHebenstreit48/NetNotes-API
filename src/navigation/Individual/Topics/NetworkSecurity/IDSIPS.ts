import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/NetworkSecurity/IDSIPS/Basics';
import Advanced from '@/navigation/Individual/Granularized/NetworkSecurity/IDSIPS/Advanced';

const IDSIPS: Subpage = {
  name: 'IDS & IPS',
  subpages: [
    Basics,
    Advanced
  ],
};

export default IDSIPS;