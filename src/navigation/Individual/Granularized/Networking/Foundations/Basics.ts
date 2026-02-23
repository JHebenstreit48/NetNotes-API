import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/foundations/basics/fundamentals/introduction',
        },
        {
          name: 'Internet/Networks',
          path: '/foundations/basics/fundamentals/internet',
        },
        {
          name: 'Local Networks',
          path: '/foundations/basics/fundamentals/local-networks',
        },
        {
          name: 'Connected Devices',
          path: '/foundations/basics/fundamentals/connected-devices',
        },
      ],
    },
    {
      name: 'Devices & Models',
      subpages: [
        {
          name: 'Fundamentals',
          subpages: [
            {
              name: 'Network Infrastructure',
              path: '/foundations/basics/devices-and-models/fundamentals/network-infrastructure',
            },
            {
              name: 'Networking Devices',
              path: '/foundations/basics/devices-and-models/fundamentals/network-devices',
            },
            {
              name: 'Home Network Architecture',
              path: '/foundations/basics/devices-and-models/fundamentals/home-network-architecture',
            },
            {
              name: 'Networking Models',
              path: '/foundations/basics/devices-and-models/fundamentals/network-models',
            },
          ],
        },
        {
          name: 'Routers',
          subpages: [
            {
              name: 'Basic Router Setup',
              path: '/foundations/basics/devices-and-models/routers/basic-router-setup',
            },
            {
              name: 'Roles & Types',
              path: '/foundations/basics/devices-and-models/routers/roles-and-types',
            },
            {
              name: 'Interfaces',
              path: '/foundations/basics/devices-and-models/routers/interfaces',
            },
            {
              name: 'Port Types',
              path: '/foundations/basics/devices-and-models/routers/port-types',
            },
            {
              name: 'Routing vs Switching',
              path: '/foundations/basics/devices-and-models/routers/routing-vs-switching',
            },
          ],
        },
      ],
    },
  ],
};

export default Basics;