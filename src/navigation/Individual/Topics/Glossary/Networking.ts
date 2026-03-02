import type { Subpage } from '@/types/navigation';

import TCPIPModel from '@/navigation/Individual/Granularized/Glossary/Networking/TCPIPModel';
import Switching from '@/navigation/Individual/Granularized/Glossary/Networking/Switching';

const Networking: Subpage = {
  name: 'Networking',
  subpages: [
    TCPIPModel,
    Switching,
  ],
};

export default Networking;