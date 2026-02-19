import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Foundations',
      subpages: [
        {
          name: 'What Is a VoIP Platform?',
          path: '/voip/platforms/basics/foundations/what-is-a-voip-platform'
        },
        {
          name: 'Cloud vs On-Prem Call Control',
          path: '/voip/platforms/basics/foundations/cloud-vs-onprem'
        }
      ]
    },
    {
      name: 'Common Capabilities',
      subpages: [
        {
          name: 'Call Routing & Queues',
          path: '/voip/platforms/basics/capabilities/call-routing-queues'
        },
        {
          name: 'Numbers, Users, and Endpoints',
          path: '/voip/platforms/basics/capabilities/numbers-users-endpoints'
        }
      ]
    }
  ]
};

export default Basics;