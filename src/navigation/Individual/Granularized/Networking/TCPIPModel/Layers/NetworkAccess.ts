import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/Networking/TCPIPModel/Layers/NetworkAccess/Basics';
import Advanced from '@/navigation/Individual/Granularized/Networking/TCPIPModel/Layers/NetworkAccess/Advanced';

const NetworkAccess: Subpage = {
  name: "Network Access Layer",
  subpages: [
    Basics,
    Advanced
  ]
};

export default NetworkAccess;