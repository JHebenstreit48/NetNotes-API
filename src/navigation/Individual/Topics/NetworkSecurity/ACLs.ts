import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/NetworkSecurity/ACLs/Basics';
import Advanced from '@/navigation/Individual/Granularized/NetworkSecurity/ACLs/Advanced';

const ACLs: Subpage = {
  name: 'ACLs',
  subpages: [
    Basics,
    Advanced
  ],
};

export default ACLs;