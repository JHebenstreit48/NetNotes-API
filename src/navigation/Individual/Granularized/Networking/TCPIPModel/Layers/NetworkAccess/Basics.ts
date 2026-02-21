import type { Subpage } from "@/types/navigation";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Layer 2: Data Link",
      subpages: [
        {
          name: "Core Concepts",
          subpages: [
            {
              name: "Introduction",
              path: "/tcpip-model/layers/network-access/basics/data-link/core-concepts/introduction",
            },
            {
              name: "Address Resolution Protocol (ARP)",
              path: "/tcpip-model/layers/network-access/basics/data-link/core-concepts/arp",
            },
          ],
        },
        {
          name: "Frames & Addressing",
          subpages: [
            {
              name: "MAC Addressing",
              path: "/tcpip-model/layers/network-access/basics/data-link/frames-and-addressing/mac-addressing",
            },
            {
              name: "Ethernet Frame Fields",
              path: "/tcpip-model/layers/network-access/basics/data-link/frames-and-addressing/ethernet-frame-fields",
            },
            {
              name: "Burned-In Address (BIA)",
              path: "/tcpip-model/layers/network-access/basics/data-link/frames-and-addressing/burned-in-address-bia",
            },
          ],
        },
      ],
    },
    {
      name: "Layer 1: Physical",
      subpages: [
        {
          name: "Signals & Media",
          subpages: [
            {
              name: "Introduction",
              path: "/tcpip-model/layers/network-access/basics/physical/signals-and-media/introduction",
            },
            {
              name: "Bit/Digital Signals",
              path: "/tcpip-model/layers/network-access/basics/physical/signals-and-media/bit-digital-signals",
            },
          ],
        },
        {
          name: "Transmission Concepts",
          subpages: [
            {
              name: "Communication Standards",
              path: "/tcpip-model/layers/network-access/basics/physical/transmission/communication-standards",
            },
            {
              name: "Data Transmission Methods",
              path: "/tcpip-model/layers/network-access/basics/physical/transmission/data-transmission-methods",
            },
          ],
        },
        {
          name: "Cabling & Interfaces",
          subpages: [
            {
              name: "Ethernet Cabling Categories",
              path: "/tcpip-model/layers/network-access/basics/physical/cabling-and-interfaces/ethernet-cabling-categories",
            },
            {
              name: "Copper Connectors (RJ45 / 8P8C)",
              path: "/tcpip-model/layers/network-access/basics/physical/cabling-and-interfaces/copper-connectors",
            },
            {
              name: "Fiber Connectors & Transceivers",
              path: "/tcpip-model/layers/network-access/basics/physical/cabling-and-interfaces/fiber-connectors-and-transceivers",
            },
          ],
        },
        {
          name: "Wiring Standards",
          subpages: [
            {
              name: "T568A vs T568B",
              path: "/tcpip-model/layers/network-access/basics/physical/wiring-standards/t568a-vs-t568b",
            },
            {
              name: "Straight-Through vs Crossover",
              path: "/tcpip-model/layers/network-access/basics/physical/wiring-standards/straight-through-vs-crossover",
            },
            {
              name: "Terminating Ethernet (Crimp & Punchdown)",
              path: "/tcpip-model/layers/network-access/basics/physical/wiring-standards/terminating-ethernet",
            },
          ],
        },
        {
          name: "Bandwidth & Throughput",
          subpages: [
            {
              name: "Bandwidth",
              path: "/tcpip-model/layers/network-access/basics/physical/bandwidth-and-throughput/bandwidth",
            },
            {
              name: "Throughput",
              path: "/tcpip-model/layers/network-access/basics/physical/bandwidth-and-throughput/throughput",
            },
          ],
        },
        {
          name: "Encap/De-encap",
          subpages: [
            {
              name: "Encapsulation",
              path: "/tcpip-model/layers/network-access/basics/physical/encap-deencap/encapsulation",
            },
            {
              name: "De-encapsulation",
              path: "/tcpip-model/layers/network-access/basics/physical/encap-deencap/de-encapsulation",
            },
          ],
        },
      ],
    },
  ],
};

export default Basics;