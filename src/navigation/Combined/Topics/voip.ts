import type { Subpage } from '@/types/navigation';

import Foundations from '@/navigation/Individual/Topics/VoIP/Foundations';
import Diagnostics from '@/navigation/Individual/Topics/VoIP/Diagnostics';
import Tools from '@/navigation/Individual/Topics/VoIP/Tools';

const voip: Subpage = {
    name: 'VoIP',
    subpages: [
        Foundations,
        Diagnostics,
        Tools,
    ]
};

export default voip;