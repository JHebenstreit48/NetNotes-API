import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Fragmentation & MTU",
      subpages: [
        {
          name: "IPv4 DF/MF & Reassembly",
          path: "/tcpip-model/layers/internet/advanced/fragmentation-and-mtu/ipv4-df-mf-and-reassembly"
        },
        {
          name: "Path MTU Discovery",
          path: "/tcpip-model/layers/internet/advanced/fragmentation-and-mtu/path-mtu-discovery"
        }
      ]
    },
    {
      name: "NAT & PAT",
      subpages: [
        {
          name: "Concepts & Types",
          path: "/tcpip-model/layers/internet/advanced/nat-and-pat/concepts-and-types"
        },
        {
          name: "Use Cases & Limits",
          path: "/tcpip-model/layers/internet/advanced/nat-and-pat/use-cases-and-limits"
        }
      ]
    },
    {
      name: "Multicast Fundamentals",
      subpages: [
        {
          name: "IGMP & MLD",
          path: "/tcpip-model/layers/internet/advanced/multicast-fundamentals/igmp-and-mld"
        },
        {
          name: "PIM SM/DM (Concepts)",
          path: "/tcpip-model/layers/internet/advanced/multicast-fundamentals/pim-sm-dm-concepts"
        }
      ]
    }
  ]
};

export default Advanced;