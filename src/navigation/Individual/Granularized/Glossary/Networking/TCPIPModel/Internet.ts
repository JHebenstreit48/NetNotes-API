import type { Subpage } from '@/types/navigation';

const Internet: Subpage = {
  name: 'Internet',
  subpages: [
    {
      name: 'Basics',
      path: '/glossary/networking/tcpipmodel/internet/basics',
    },
    {
      name: 'IPv4 Addressing',
      path: '/glossary/networking/tcpipmodel/internet/ipv4-addressing',
    },
    {
      name: 'IPv6 Addressing',
      path: '/glossary/networking/tcpipmodel/internet/ipv6-addressing',
    },
    {
      name: 'NAT & PAT',
      path: '/glossary/networking/tcpipmodel/internet/nat-and-pat',
    },
  ],
};

export default Internet;