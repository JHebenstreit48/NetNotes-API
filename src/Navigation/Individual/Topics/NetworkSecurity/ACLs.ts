import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/NetworkSecurity/ACLs/Basics';
import Advanced from '@/Navigation/Individual/Granularized/NetworkSecurity/ACLs/Advanced';

const ACLs: Subpage = {
  name: 'ACLs',
  subpages: [
    Basics,
    Advanced
  ],
};

export default ACLs;