import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Layer 2 Switching",
          path: "/switching/basics/fundamentals/layer-2-switching"
        },
        {
          name: "MAC Address Table",
          path: "/switching/basics/fundamentals/mac-address-table"
        }
      ]
    },
    {
      name: "Hardware & Port Types",
      subpages: [
        {
          name: "Switches and Connectors",
          path: "/switching/basics/hardware-and-port-types/switches-and-connectors"
        },
        {
          name: "Ethernet Speed History",
          path: "/switching/basics/hardware-and-port-types/ethernet-speed-history"
        }
      ]
    },
    {
      name: "Glossary",
      subpages: [
        {
          name: "Hosts & Ports",
          path: "/switching/basics/glossary/hosts-and-ports"
        },
        {
          name: "L2 Concepts & Architecture",
          path: "/switching/basics/glossary/l2-concepts-and-architecture"
        }
      ]
    }
  ]
};

export default Basics;