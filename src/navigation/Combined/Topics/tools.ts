import type { Subpage } from '@/types/navigation';

import CiscoPacketTracer from '@/navigation/Individual/Topics/Tools/CiscoPacketTracer';
import GNS3 from '@/navigation/Individual/Topics/Tools/GNS3';
import Wireshark from '@/navigation/Individual/Topics/Tools/Wireshark';

const tools: Subpage = {
    name: 'Tools',
    subpages: [
        CiscoPacketTracer,
        GNS3,
        Wireshark
    ]
};

export default tools;