import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Install & Interface",
          path: "/packettracer/basics/fundamentals/install-and-interface"
        },
        {
          name: "Projects & Saves",
          path: "/packettracer/basics/fundamentals/projects-and-saves"
        }
      ]
    },
    {
      name: "Workspace & Views",
      subpages: [
        {
          name: "Logical vs Physical",
          path: "/packettracer/basics/workspace-and-views/logical-vs-physical"
        },
        {
          name: "Device Config Tabs",
          path: "/packettracer/basics/workspace-and-views/device-config-tabs"
        }
      ]
    },
    {
      name: "Modes",
      subpages: [
        {
          name: "Realtime vs Simulation",
          path: "/packettracer/basics/modes/realtime-vs-simulation"
        },
        {
          name: "Event List & Custom PDU",
          path: "/packettracer/basics/modes/event-list-and-custom-pdu"
        }
      ]
    },
    {
      name: "Devices & Cabling",
      subpages: [
        {
          name: "Palette & Modules",
          path: "/packettracer/basics/devices-and-cabling/palette-and-modules"
        },
        {
          name: "Cabling & Console",
          path: "/packettracer/basics/devices-and-cabling/cabling-and-console"
        }
      ]
    },
    {
      name: "Configuration Basics",
      subpages: [
        {
          name: "CLI Access",
          path: "/packettracer/basics/configuration-basics/cli-access"
        },
        {
          name: "Startup/Running Files",
          path: "/packettracer/basics/configuration-basics/startup-and-running-files"
        }
      ]
    }
  ]
};

export default Basics;