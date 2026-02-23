import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/Networking/TCPIPModel/Basics';
import Layers from '@/navigation/Individual/Granularized/Networking/TCPIPModel/Layers';

const TCPIPModel: Subpage = {
  name: 'TCP/IP Model',
  subpages: [
    Basics,
    Layers
  ],
};

export default TCPIPModel;