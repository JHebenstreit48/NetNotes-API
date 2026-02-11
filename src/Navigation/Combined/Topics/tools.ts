import type { Subpage } from '@/types/navigation';

import CiscoPacketTracer from '@/Navigation/Individual/Topics/Tools/CiscoPacketTracer';
import GNS3 from '@/Navigation/Individual/Topics/Tools/GNS3';
import Wireshark from '@/Navigation/Individual/Topics/Tools/Wireshark';

const tools: Subpage = {
    name: 'Tools',
    subpages: [
        CiscoPacketTracer,
        GNS3,
        Wireshark
    ]
};

export default tools;