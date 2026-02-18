import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Telnet",
      subpages: [
        {
          name: "Telnet Basics",
          path: "/legacy/protocols-and-statuses/telnet/basics"
        },
        {
          name: "Migrate to SSH",
          path: "/legacy/protocols-and-statuses/telnet/migrate-to-ssh"
        }
      ]
    },
    {
      name: "POP3",
      subpages: [
        {
          name: "POP3 Overview",
          path: "/legacy/protocols-and-statuses/pop3/overview"
        },
        {
          name: "POP3 vs IMAP",
          path: "/legacy/protocols-and-statuses/pop3/pop3-vs-imap"
        }
      ]
    },
    {
      name: "RIP",
      subpages: [
        {
          name: "RIP Overview",
          path: "/legacy/protocols-and-statuses/rip/overview"
        },
        {
          name: "Distance-Vector Ops",
          path: "/legacy/protocols-and-statuses/rip/distance-vector-ops"
        }
      ]
    },
    {
      name: "IS-IS (Legacy)",
      subpages: [
        {
          name: "IS-IS Overview",
          path: "/legacy/protocols-and-statuses/isis/overview"
        },
        {
          name: "Levels & Areas",
          path: "/legacy/protocols-and-statuses/isis/levels-and-areas"
        }
      ]
    },
    {
      name: "TFTP",
      subpages: [
        {
          name: "TFTP Basics",
          path: "/legacy/protocols-and-statuses/tftp/basics"
        },
        {
          name: "Use Cases & Limits",
          path: "/legacy/protocols-and-statuses/tftp/use-cases-and-limits"
        }
      ]
    },
    {
      name: "FTP/FTPS",
      subpages: [
        {
          name: "FTP vs FTPS",
          path: "/legacy/protocols-and-statuses/ftp-ftps/ftp-vs-ftps"
        },
        {
          name: "Active vs Passive",
          path: "/legacy/protocols-and-statuses/ftp-ftps/active-vs-passive"
        }
      ]
    }
  ]
};

export default Basics;