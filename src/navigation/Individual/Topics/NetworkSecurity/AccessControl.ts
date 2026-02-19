import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/NetworkSecurity/AccessControl/Basics';
import Advanced from '@/navigation/Individual/Granularized/NetworkSecurity/AccessControl/Advanced';

const AccessControl: Subpage = {
  name: 'Access Control',
  subpages: [
    Basics,
    Advanced
  ],
};

export default AccessControl;