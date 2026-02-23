import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/NetworkSecurity/NetworkControls/Basics';
import Advanced from '@/navigation/Individual/Granularized/NetworkSecurity/NetworkControls/Advanced';

const NetworkControls: Subpage = {
  name: 'Network Controls',
  subpages: [
    Basics,
    Advanced
  ],
};

export default NetworkControls;