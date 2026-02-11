import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Certifications/Cisco/DevNet/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Certifications/Cisco/DevNet/Advanced';

const DevNet: Subpage = {
    name: "DevNet",
    subpages: [
        Basics,
        Advanced
    ]
};

export default DevNet;