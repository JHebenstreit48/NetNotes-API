import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/VoIP/Diagnostics/Basics';
import Advanced from '@/navigation/Individual/Granularized/VoIP/Diagnostics/Advanced';

const Diagnostics: Subpage = {
  name: 'Diagnostics',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Diagnostics;