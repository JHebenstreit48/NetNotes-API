import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Install",
      subpages: [
        {
          name: "GNS3 App & VM",
          path: "/gns3/basics/install/gns3-app-and-vm"
        },
        {
          name: "Requirements & Setup",
          path: "/gns3/basics/install/requirements-and-setup"
        }
      ]
    },
    {
      name: "Images & Templates",
      subpages: [
        {
          name: "Appliances & Import",
          path: "/gns3/basics/images-and-templates/appliances-and-import"
        },
        {
          name: "IOSv/IOU (Licensing)",
          path: "/gns3/basics/images-and-templates/iosv-iou-licensing"
        }
      ]
    },
    {
      name: "Topology & Projects",
      subpages: [
        {
          name: "Nodes & Links",
          path: "/gns3/basics/topology-and-projects/nodes-and-links"
        },
        {
          name: "Projects & Snapshots",
          path: "/gns3/basics/topology-and-projects/projects-and-snapshots"
        }
      ]
    },
    {
      name: "Capture & Console",
      subpages: [
        {
          name: "Add Wireshark/TShark (GNS3)",
          path: "/gns3/basics/capture-and-console/add-wireshark-and-tshark"
        },
        {
          name: "Console Access (Telnet/Serial/VNC)",
          path: "/gns3/basics/capture-and-console/console-access-telnet-serial-vnc"
        }
      ]
    }
  ]
};

export default Basics;