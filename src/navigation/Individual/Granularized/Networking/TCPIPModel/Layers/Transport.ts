import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/Networking/TCPIPModel/Layers/Transport/Basics';
import Advanced from '@/navigation/Individual/Granularized/Networking/TCPIPModel/Layers/Transport/Advanced';

const Transport: Subpage = {
  name: 'Transport Layer',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Transport;