import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Real-World VoIP',
      subpages: [
        {
          name: 'Why VoIP Breaks',
          path: '/voip/introduction/advanced/real-world/why-voip-breaks'
        },
        {
          name: 'Latency, Jitter, and Loss',
          path: '/voip/introduction/advanced/real-world/latency-jitter-loss'
        }
      ]
    },
    {
      name: 'Security Overview',
      subpages: [
        {
          name: 'TLS and SRTP at a High Level',
          path: '/voip/introduction/advanced/security/tls-srtp-overview'
        },
        {
          name: 'SBCs and Edge Design',
          path: '/voip/introduction/advanced/security/sbcs-and-edge-design'
        }
      ]
    }
  ]
};

export default Advanced;