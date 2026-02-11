import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "IP Addressing",
      subpages: [
        {
          name: "Addressing Overview",
          path: "/tcpip-model/layers/internet/basics/ip-addressing/overview"
        },
        {
          name: "IPv4",
          path: "/tcpip-model/layers/internet/basics/ip-addressing/ipv4"
        },
        {
          name: "IPv4 vs IPv6 Comparison",
          path: "/tcpip-model/layers/internet/basics/ip-addressing/ipv4-vs-ipv6-comparison"
        },
        {
          name: "IPv6",
          subpages: [
            {
              name: "Fundamentals",
              path: "/tcpip-model/layers/internet/basics/ip-addressing/ipv6/fundamentals"
            },
            {
              name: "Address Types & Scope",
              path: "/tcpip-model/layers/internet/basics/ip-addressing/ipv6/address-types-and-scope"
            },
            {
              name: "ND/RA • SLAAC/DAD",
              path: "/tcpip-model/layers/internet/basics/ip-addressing/ipv6/nd-ra-slaac-dad"
            }
          ]
        },
      ]
    },
    {
      name: "Subnetting & Gateways",
      subpages: [
        {
          name: "Subnet Masks & CIDR",
          path: "/tcpip-model/layers/internet/basics/subnetting-and-gateways/subnet-masks-and-cidr"
        },
        {
          name: "Default Gateway & Routing Tables",
          path: "/tcpip-model/layers/internet/basics/subnetting-and-gateways/default-gateway-and-routing-tables"
        }
      ]
    },
    {
      name: "ICMP & Diagnostics",
      subpages: [
        {
          name: "ICMP Basics",
          path: "/tcpip-model/layers/internet/basics/icmp-and-diagnostics/icmp-basics"
        },
        {
          name: "Ping & Traceroute",
          path: "/tcpip-model/layers/internet/basics/icmp-and-diagnostics/ping-and-traceroute"
        }
      ]
    }
  ]
};

export default Basics;