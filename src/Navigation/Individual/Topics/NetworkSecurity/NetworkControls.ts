import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/NetworkSecurity/NetworkControls/Basics';
import Advanced from '@/Navigation/Individual/Granularized/NetworkSecurity/NetworkControls/Advanced';

const NetworkControls: Subpage = {
  name: 'Network Controls',
  subpages: [
    Basics,
    Advanced
  ],
};

export default NetworkControls;