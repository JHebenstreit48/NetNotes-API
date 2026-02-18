import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Internet/Basics';
import Advanced from '@/navigation/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Internet/Advanced';

const Internet: Subpage = {
  name: 'Internet Layer',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Internet;