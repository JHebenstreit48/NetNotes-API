import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/foundations/basics/fundamentals/introduction"
        },
        {
          name: "Internet/Networks",
          path: "/foundations/basics/fundamentals/internet"
        },
        {
          name: "Local Networks",
          path: "/foundations/basics/fundamentals/local-networks"
        },
        {
          name: "Connected Devices",
          path: "/foundations/basics/fundamentals/connected-devices"
        }
      ]
    },
    {
      name: "Devices & Models",
      subpages: [
        {
          name: "Networking Devices",
          path: "/foundations/basics/devices-and-models/network-devices"
        },
        {
          name: "Networking Models",
          path: "/foundations/basics/devices-and-models/network-models"
        }
      ]
    }
  ]
};

export default Basics;