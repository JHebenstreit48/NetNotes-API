import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/voip/introduction/basics/fundamentals/introduction'
        },
        {
          name: 'Core Components',
          path: '/voip/introduction/basics/fundamentals/core-components'
        }
      ]
    },
    {
      name: 'Call Basics',
      subpages: [
        {
          name: 'SIP vs RTP',
          path: '/voip/introduction/basics/call-basics/sip-vs-rtp'
        },
        {
          name: 'Basic Call Flow',
          path: '/voip/introduction/basics/call-basics/basic-call-flow'
        }
      ]
    }
  ]
};

export default Basics;