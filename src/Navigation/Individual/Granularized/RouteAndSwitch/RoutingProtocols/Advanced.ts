import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Static Routing",
      subpages: [
        {
          name: "Configuration & Use Cases",
          path: "/routing-protocols/advanced/static-routing/configuration-and-use-cases"
        },
        {
          name: "Troubleshooting & Best Practices",
          path: "/routing-protocols/advanced/static-routing/troubleshooting-and-best-practices"
        }
      ]
    },
    {
      name: "Dynamic Routing",
      subpages: [
        {
          name: "Metrics & Decision Making",
          path: "/routing-protocols/advanced/dynamic-routing/metrics-and-decision-making"
        },
        {
          name: "Configuration Scenarios",
          path: "/routing-protocols/advanced/dynamic-routing/configuration-scenarios"
        }
      ]
    },
    {
      name: "IGPs",
      subpages: [
        {
          name: "OSPF",
          path: "/routing-protocols/advanced/igps/ospf"
        },
        {
          name: "EIGRP (Cisco Proprietary)",
          path: "/routing-protocols/advanced/igps/eigrp"
        }
      ]
    },
    {
      name: "EGPs",
      subpages: [
        {
          name: "BGP",
          path: "/routing-protocols/advanced/egps/bgp"
        },
        {
          name: "Policy & Path Selection",
          path: "/routing-protocols/advanced/egps/policy-and-path-selection"
        }
      ]
    }
  ]
};

export default Advanced;