import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/Certifications/Cisco/CCNA/Basics';
import Advanced from '@/navigation/Individual/Granularized/Certifications/Cisco/CCNA/Advanced';

const CCNA: Subpage = {
    name: "CCNA",
    subpages: [
        Basics,
        Advanced
    ]
};

export default CCNA;