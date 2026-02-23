import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/tcpip-model/basics/fundamentals/introduction',
        },
        {
          name: 'Protocol Stack',
          path: '/tcpip-model/basics/fundamentals/protocol-stack',
        },
      ],
    },
  ],
};

export default Basics;