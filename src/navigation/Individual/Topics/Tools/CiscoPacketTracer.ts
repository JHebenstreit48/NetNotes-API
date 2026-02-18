import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/Tools/CiscoPacketTracer/Basics';
import Advanced from '@/navigation/Individual/Granularized/Tools/CiscoPacketTracer/Advanced';

const CiscoPacketTracer: Subpage = {
  name: 'Cisco Packet Tracer',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default CiscoPacketTracer;