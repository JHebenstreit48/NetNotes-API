import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Layer 2: Data Link",
      subpages: [
        {
          name: "Checks & Errors",
          subpages: [
            {
              name: "FCS/CRC",
              path: "/tcpip-model/layers/network-access/advanced/data-link/checks-and-errors/fcs-crc"
            },
            {
              name: "Errors & Collisions",
              path: "/tcpip-model/layers/network-access/advanced/data-link/checks-and-errors/errors-and-collisions"
            }
          ]
        },
        {
          name: "MTU & Framing",
          subpages: [
            {
              name: "MTU & Path MTU",
              path: "/tcpip-model/layers/network-access/advanced/data-link/mtu-and-framing/mtu-and-path-mtu"
            },
            {
              name: "Jumbo Frames",
              path: "/tcpip-model/layers/network-access/advanced/data-link/mtu-and-framing/jumbo-frames"
            }
          ]
        }
      ]
    },
    {
      name: "Layer 1: Physical",
      subpages: [
        {
          name: "Encoding & Line Codes",
          subpages: [
            {
              name: "NRZ/Manchester",
              path: "/tcpip-model/layers/network-access/advanced/physical/encoding-and-line-codes/nrz-manchester"
            },
            {
              name: "8b/10b • 64b/66b",
              path: "/tcpip-model/layers/network-access/advanced/physical/encoding-and-line-codes/8b10b-64b66b"
            }
          ]
        },
        {
          name: "Negotiation & Duplex",
          subpages: [
            {
              name: "Speed/Duplex",
              path: "/tcpip-model/layers/network-access/advanced/physical/negotiation-and-duplex/speed-duplex"
            },
            {
              name: "Auto-Neg & Auto-MDI/MDI-X",
              path: "/tcpip-model/layers/network-access/advanced/physical/negotiation-and-duplex/auto-neg-and-auto-mdi-mdix"
            }
          ]
        },
        {
          name: "Noise & Distance",
          subpages: [
            {
              name: "Attenuation & Distance",
              path: "/tcpip-model/layers/network-access/advanced/physical/noise-and-distance/attenuation-and-distance"
            },
            {
              name: "Crosstalk & EMI",
              path: "/tcpip-model/layers/network-access/advanced/physical/noise-and-distance/crosstalk-and-emi"
            }
          ]
        }
      ]
    }
  ]
};

export default Advanced;