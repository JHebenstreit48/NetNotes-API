import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/NetworkSecurity/VPNAndTunneling/Basics';
import Advanced from '@/Navigation/Individual/Granularized/NetworkSecurity/VPNAndTunneling/Advanced';

const VPNAndTunneling: Subpage = {
  name: 'VPN & Tunneling',
  subpages: [
    Basics,
    Advanced
  ],
};

export default VPNAndTunneling;