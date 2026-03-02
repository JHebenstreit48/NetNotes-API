import type { Subpage } from '@/types/navigation';

const Internet: Subpage = {
  name: 'Internet',
  subpages: [
    {
      name: 'Basics',
      path: '/glossary/networking/tcpipmodel/internet/basics',
    },
    {
      name: 'IPv4 & IPv6 Addressing',
      path: '/glossary/networking/tcpipmodel/internet/ipv4-and-ipv6-addressing',
    },
  ],
};

export default Internet;