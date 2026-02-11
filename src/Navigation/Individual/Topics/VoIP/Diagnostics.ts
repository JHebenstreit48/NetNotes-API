import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/VoIP/Diagnostics/Basics';
import Advanced from '@/Navigation/Individual/Granularized/VoIP/Diagnostics/Advanced';

const Diagnostics: Subpage = {
  name: 'Diagnostics',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Diagnostics;