import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/Individual/Granularized/Networking/TCPIPModel/Layers/Application/Basics';
import Advanced from '@/navigation/Individual/Granularized/Networking/TCPIPModel/Layers/Application/Advanced';

const Application: Subpage = {
  name: 'Application Layer',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Application;