import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/NetworkSecurity/VPNAndTunneling/Basics';
import Advanced from '@/navigation/Individual/Granularized/NetworkSecurity/VPNAndTunneling/Advanced';

const VPNAndTunneling: Subpage = {
  name: 'VPN & Tunneling',
  subpages: [
    Basics,
    Advanced
  ],
};

export default VPNAndTunneling;