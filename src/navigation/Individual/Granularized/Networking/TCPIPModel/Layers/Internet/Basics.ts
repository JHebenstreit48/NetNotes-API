import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/tcpip-model/layers/internet/basics/fundamentals/introduction',
        },
        {
          name: 'DHCP (Address Assignment)',
          path: '/tcpip-model/layers/internet/basics/fundamentals/dhcp',
        },
      ],
    },
    {
      name: 'IP Addressing',
      subpages: [
        {
          name: 'IPv4',
          subpages: [
            {
              name: 'Address Structure',
              path: '/tcpip-model/layers/internet/basics/ip-addressing/ipv4/address-structure',
            },
            {
              name: 'Types of Addresses',
              path: '/tcpip-model/layers/internet/basics/ip-addressing/ipv4/types-of-addresses',
            },
            {
              name: 'IPv4 vs IPv6 Comparison',
              path: '/tcpip-model/layers/internet/basics/ip-addressing/ipv4/ipv4-vs-ipv6-comparison',
            },
          ],
        },
        {
          name: 'IPv6',
          subpages: [
            {
              name: 'Fundamentals',
              path: '/tcpip-model/layers/internet/basics/ip-addressing/ipv6/fundamentals',
            },
            {
              name: 'Address Types & Scope',
              path: '/tcpip-model/layers/internet/basics/ip-addressing/ipv6/address-types-and-scope',
            },
            {
              name: 'ND/RA & SLAAC/DAD',
              path: '/tcpip-model/layers/internet/basics/ip-addressing/ipv6/nd-ra-slaac-dad',
            },
          ],
        },
        {
          name: 'Subnetting & Gateways',
          subpages: [
            {
              name: 'Subnet Masks & CIDR',
              path: '/tcpip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/subnet-masks-and-cidr',
            },
            {
              name: 'Default Gateway & Routing Tables',
              path: '/tcpip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/default-gateway-and-routing-tables',
            },
            {
              name: 'IPv4 Subnetting',
              path: '/tcpip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/ipv4-subnetting',
            },
            {
              name: 'IPv6 Subnetting',
              path: '/tcpip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/ipv6-subnetting',
            }
          ],
        },
      ],
    },
    {
      name: 'ICMP & Diagnostics',
      subpages: [
        {
          name: 'Introduction',
          path: '/tcpip-model/layers/internet/basics/icmp-and-diagnostics/introduction',
        },
        {
          name: 'Ping & Traceroute',
          path: '/tcpip-model/layers/internet/basics/icmp-and-diagnostics/ping-and-traceroute',
        },
      ],
    },
  ],
};

export default Basics;