import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "VLANs",
      subpages: [
        {
          name: "Concepts",
          subpages: [
            {
              name: "VLAN Concepts",
              path: "/switching/advanced/vlans/concepts/vlan-concepts"
            },
            {
              name: "Voice & Native VLANs",
              path: "/switching/advanced/vlans/concepts/voice-and-native-vlans"
            }
          ]
        },
        {
          name: "Operations",
          subpages: [
            {
              name: "Trunking (802.1Q)",
              path: "/switching/advanced/vlans/operations/trunking-8021q"
            },
            {
              name: "VLAN Trunking Protocol (VTP)",
              path: "/switching/advanced/vlans/operations/vtp"
            }
          ]
        },
        {
          name: "Routing",
          subpages: [
            {
              name: "Inter-VLAN Routing",
              path: "/switching/advanced/vlans/routing/inter-vlan-routing"
            },
            {
              name: "Router-on-a-Stick (RoAS)",
              path: "/switching/advanced/vlans/routing/router-on-a-stick"
            }
          ]
        },
        {
          name: "Security & Design",
          subpages: [
            {
              name: "VLAN Hopping Mitigation",
              path: "/switching/advanced/vlans/security-and-design/vlan-hopping-mitigation"
            },
            {
              name: "DTP Best Practices",
              path: "/switching/advanced/vlans/security-and-design/dtp-best-practices"
            }
          ]
        }
      ]
    },
    {
      name: "STP",
      subpages: [
        {
          name: "Roles & States",
          path: "/switching/advanced/stp/roles-and-states"
        },
        {
          name: "Protections (BPDU/Root/Loop Guard)",
          path: "/switching/advanced/stp/protections"
        }
      ]
    },
    {
      name: "EtherChannel",
      subpages: [
        {
          name: "LACP & PAgP",
          path: "/switching/advanced/etherchannel/lacp-and-pagp"
        },
        {
          name: "Load Balancing & Design",
          path: "/switching/advanced/etherchannel/load-balancing-and-design"
        }
      ]
    },
    {
      name: "Edge Services",
      subpages: [
        {
          name: "Port Security",
          path: "/switching/advanced/edge-services/port-security"
        },
        {
          name: "Storm Control",
          path: "/switching/advanced/edge-services/storm-control"
        }
      ]
    },
    {
      name: "QoS @ Edge",
      subpages: [
        {
          name: "Trust Boundaries",
          path: "/switching/advanced/qos/trust-boundaries"
        },
        {
          name: "CoS/DSCP Mapping",
          path: "/switching/advanced/qos/cos-dscp-mapping"
        }
      ]
    }
  ]
};

export default Advanced;