import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Secure Access",
      subpages: [
        {
          name: "SSH",
          path: "/mgmt/basics/secure-access/ssh"
        },
        {
          name: "SNMPv3",
          path: "/mgmt/basics/secure-access/snmpv3"
        }
      ]
    },
    {
      name: "Logging",
      subpages: [
        {
          name: "Syslog",
          path: "/mgmt/basics/logging/syslog"
        },
        {
          name: "Time & NTP",
          path: "/mgmt/basics/logging/ntp"
        }
      ]
    }
  ]
};

export default Basics;