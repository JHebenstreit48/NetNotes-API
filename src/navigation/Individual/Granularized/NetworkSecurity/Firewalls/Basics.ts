import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Stateful & NAT",
      subpages: [
        {
          name: "Stateful Inspection",
          path: "/firewalls/basics/stateful-inspection"
        },
        {
          name: "NAT Fundamentals",
          path: "/firewalls/basics/nat-fundamentals"
        }
      ]
    },
    {
      name: "ZBFW Concepts",
      subpages: [
        {
          name: "Zones & Zone-Pairs",
          path: "/firewalls/basics/zbfw/zones-and-zone-pairs"
        },
        {
          name: "Class-Maps & Policy-Maps",
          path: "/firewalls/basics/zbfw/classmaps-policymaps"
        }
      ]
    },
    {
      name: "OPNsense",
      subpages: [
        {
          name: "Install & Setup",
          path: "/firewalls/basics/opnsense/install-setup"
        },
        {
          name: "Core Firewall Configuration",
          path: "/firewalls/basics/opnsense/core-configuration"
        }
      ]
    }
  ]
};

export default Basics;