import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Tools/Wireshark/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Tools/Wireshark/Advanced';

const Wireshark: Subpage = {
  name: 'Wireshark',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Wireshark;