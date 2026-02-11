import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Application/Basics';
import Advanced from '@/Navigation/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Application/Advanced';

const Application: Subpage = {
  name: 'Application Layer',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Application;