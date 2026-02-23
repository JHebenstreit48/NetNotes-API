import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/Tools/Wireshark/Basics';
import Advanced from '@/navigation/Individual/Granularized/Tools/Wireshark/Advanced';

const Wireshark: Subpage = {
  name: 'Wireshark',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Wireshark;