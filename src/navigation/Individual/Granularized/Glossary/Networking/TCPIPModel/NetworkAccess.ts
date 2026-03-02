import type { Subpage } from '@/types/navigation';

const NetworkAccess: Subpage = {
  name: 'Network Access',
  subpages: [
    {
      name: 'Basics',
      path: '/glossary/networking/tcpipmodel/networkaccess/basics',
    },
    {
      name: 'MAC Address',
      path: '/glossary/networking/tcpipmodel/networkaccess/mac-address',
    },
    {
      name: 'ARP (Address Resolution Protocol)',
      path: '/glossary/networking/tcpipmodel/networkaccess/arp',
    },
  ],
};

export default NetworkAccess;