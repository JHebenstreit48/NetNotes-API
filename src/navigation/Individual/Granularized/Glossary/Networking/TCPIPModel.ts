import type { Subpage } from '@/types/navigation';

import Application from '@/navigation/Individual/Granularized/Glossary/Networking/TCPIPModel/Application';
import Transport from '@/navigation/Individual/Granularized/Glossary/Networking/TCPIPModel/Transport';
import Internet from '@/navigation/Individual/Granularized/Glossary/Networking/TCPIPModel/Internet';
import NetworkAccess from '@/navigation/Individual/Granularized/Glossary/Networking/TCPIPModel/NetworkAccess';

const TCPIPModel: Subpage = {
  name: 'TCP/IP Model',
  subpages: [
    Application,
    Transport,
    Internet,
    NetworkAccess
  ],
};

export default TCPIPModel;