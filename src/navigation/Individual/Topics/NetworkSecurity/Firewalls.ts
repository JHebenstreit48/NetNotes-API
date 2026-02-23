import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/NetworkSecurity/Firewalls/Basics';
import Advanced from '@/navigation/Individual/Granularized/NetworkSecurity/Firewalls/Advanced';

const Firewalls: Subpage = {
  name: 'Firewalls',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Firewalls;