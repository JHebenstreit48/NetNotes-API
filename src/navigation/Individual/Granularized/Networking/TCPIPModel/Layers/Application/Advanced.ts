import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Network Services",
      subpages: [
        {
          name: "DHCP",
          path: "/tcpip-model/layers/application/advanced/network-services/dhcp"
        },
        {
          name: "NTP",
          path: "/tcpip-model/layers/application/advanced/network-services/ntp"
        },
        {
          name: "SNMP",
          path: "/tcpip-model/layers/application/advanced/network-services/snmp"
        },
        {
          name: "FTP/SFTP",
          path: "/tcpip-model/layers/application/advanced/network-services/ftp"
        }
      ]
    },
    {
      name: "Remote Access",
      subpages: [
        {
          name: "SSH",
          path: "/tcpip-model/layers/application/advanced/remote-access/ssh"
        },
        {
          name: "Best Practices",
          path: "/tcpip-model/layers/application/advanced/remote-access/ssh-best-practices"
        }
      ]
    },
    {
      name: "User Data & Privacy",
      subpages: [
        {
          name: "Data Collection Types",
          path: "/tcpip-model/layers/application/advanced/user-data/data-collection-types"
        },
        {
          name: "Privacy in Application Protocols",
          path: "/tcpip-model/layers/application/advanced/user-data/privacy-in-protocols"
        }
      ]
    }
  ]
};

export default Advanced;