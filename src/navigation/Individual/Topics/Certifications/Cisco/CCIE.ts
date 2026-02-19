import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/Certifications/Cisco/CCIE/Basics';
import Advanced from '@/navigation/Individual/Granularized/Certifications/Cisco/CCIE/Advanced';

const CCIE: Subpage = {
    name: "CCIE",
    subpages: [
        Basics,
        Advanced
    ]
};

export default CCIE;