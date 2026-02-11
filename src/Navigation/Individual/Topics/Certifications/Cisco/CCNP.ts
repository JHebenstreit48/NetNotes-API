import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Certifications/Cisco/CCNP/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Certifications/Cisco/CCNP/Advanced';

const CCNP: Subpage = {
    name: "CCNP",
    subpages: [
        Basics,
        Advanced
    ]
};

export default CCNP;