import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/tcpip-model/layers/transport/basics/fundamentals/introduction"
        },
        {
          name: "TCP vs UDP",
          path: "/tcpip-model/layers/transport/basics/fundamentals/tcp-vs-udp"
        }
      ]
    },
    {
      name: "Ports & Sockets",
      subpages: [
        {
          name: "Ports/Sockets",
          path: "/tcpip-model/layers/transport/basics/ports/ports-and-sockets"
        },
        {
          name: "Port Ranges",
          path: "/tcpip-model/layers/transport/basics/ports/port-ranges"
        }
      ]
    },
    {
      name: "Reliability",
      subpages: [
        {
          name: "Reliable Delivery/Flow Control",
          path: "/tcpip-model/layers/transport/basics/reliability/reliable-delivery-flow-control"
        },
        {
          name: "Segmentation & Reassembly",
          path: "/tcpip-model/layers/transport/basics/reliability/segmentation-reassembly"
        }
      ]
    }
  ]
};

export default Basics;