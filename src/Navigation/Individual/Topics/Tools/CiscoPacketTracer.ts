import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Tools/CiscoPacketTracer/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Tools/CiscoPacketTracer/Advanced';

const CiscoPacketTracer: Subpage = {
  name: 'Cisco Packet Tracer',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default CiscoPacketTracer;