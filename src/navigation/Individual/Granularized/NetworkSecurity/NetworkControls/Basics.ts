import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Layer 2 Protections",
      subpages: [
        {
          name: "Port Security",
          path: "/net-controls/basics/l2/port-security"
        },
        {
          name: "DHCP Snooping & DAI",
          path: "/net-controls/basics/l2/dhcp-snooping-dai"
        }
      ]
    },
    {
      name: "IPv6 First-Hop",
      subpages: [
        {
          name: "RA Guard",
          path: "/net-controls/basics/ipv6/ra-guard"
        },
        {
          name: "ND Inspection",
          path: "/net-controls/basics/ipv6/nd-inspection"
        }
      ]
    }
  ]
};

export default Basics;