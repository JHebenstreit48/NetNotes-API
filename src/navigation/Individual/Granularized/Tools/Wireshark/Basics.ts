import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Install & Profiles",
          path: "/wireshark/basics/fundamentals/install-and-profiles"
        },
        {
          name: "Capture Interfaces",
          path: "/wireshark/basics/fundamentals/capture-interfaces"
        }
      ]
    },
    {
      name: "Filters",
      subpages: [
        {
          name: "Display",
          path: "/wireshark/basics/filters/display"
        },
        {
          name: "Capture",
          path: "/wireshark/basics/filters/capture"
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