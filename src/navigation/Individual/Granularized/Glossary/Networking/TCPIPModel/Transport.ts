import type { Subpage } from '@/types/navigation';

const Transport: Subpage = {
  name: 'Transport',
  subpages: [
    {
      name: 'Basics',
      path: '/glossary/networking/tcpipmodel/transport/basics',
    },
    {
      name: 'TCP vs UDP',
      path: '/glossary/networking/tcpipmodel/transport/tcp-vs-udp',
    },
    {
      name: 'Ports (Ephemeral & Well-Known)',
      path: '/glossary/networking/tcpipmodel/transport/ports',
    },
  ],
};

export default Transport;