import type { Subpage } from '@/types/navigation';

import CCNA from '@/navigation/Individual/Topics/Certifications/Cisco/CCNA';
import CCNP from '@/navigation/Individual/Topics/Certifications/Cisco/CCNP';
import CCIE from '@/navigation/Individual/Topics/Certifications/Cisco/CCIE';
import DevNet from '@/navigation/Individual/Topics/Certifications/Cisco/DevNet';

const Cisco: Subpage = {
  name: 'Cisco',
  subpages: [
    CCNA,
    CCNP,
    CCIE,
    DevNet,

  ],
};

export default Cisco;