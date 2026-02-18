import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Transport Classes",
      subpages: [
        {
          name: "TP0–TP2",
          path: "/coreconcepts/osimodel/advanced/transport-classes/tp0-tp2"
        },
        {
          name: "TP3–TP4",
          path: "/coreconcepts/osimodel/advanced/transport-classes/tp3-tp4"
        }
      ]
    },
    {
      name: "CLNS & Addressing",
      subpages: [
        {
          name: "NSAP Structure",
          path: "/coreconcepts/osimodel/advanced/clns-and-addressing/nsap-structure"
        },
        {
          name: "CLNP Headers",
          path: "/coreconcepts/osimodel/advanced/clns-and-addressing/clnp-headers"
        }
      ]
    },
    {
      name: "OSI Routing (Origins)",
      subpages: [
        {
          name: "ES-IS",
          path: "/coreconcepts/osimodel/advanced/osi-routing-origins/es-is"
        },
        {
          name: "IS-IS (OSI)",
          path: "/coreconcepts/osimodel/advanced/osi-routing-origins/is-is-osi"
        }
      ]
    },
    {
      name: "Interworking & Mapping",
      subpages: [
        {
          name: "OSI↔TCP/IP Map",
          path: "/coreconcepts/osimodel/advanced/interworking-and-mapping/osi-to-tcpip-map"
        },
        {
          name: "Gateways & Translate",
          path: "/coreconcepts/osimodel/advanced/interworking-and-mapping/gateways-and-translate"
        }
      ]
    }
  ]
};

export default Advanced;