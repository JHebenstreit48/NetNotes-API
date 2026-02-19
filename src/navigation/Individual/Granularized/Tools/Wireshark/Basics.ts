import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Getting Started",
      subpages: [
        {
          name: "Install & Profiles",
          path: "/wireshark/basics/getting-started/install-and-profiles"
        },
        {
          name: "Capture Interfaces",
          path: "/wireshark/basics/getting-started/capture-interfaces"
        }
      ]
    },
    {
      name: "Filters",
      subpages: [
        {
          name: "Display Filters",
          path: "/wireshark/basics/filters/display-filters"
        },
        {
          name: "Capture Filters",
          path: "/wireshark/basics/filters/capture-filters"
        }
      ]
    },
    {
      name: "Views & Tools",
      subpages: [
        {
          name: "Packet/Bytes/Tree",
          path: "/wireshark/basics/views-and-tools/packet-bytes-tree"
        },
        {
          name: "IO Graphs & Stats",
          path: "/wireshark/basics/views-and-tools/io-graphs-and-stats"
        }
      ]
    }
  ]
};

export default Basics;