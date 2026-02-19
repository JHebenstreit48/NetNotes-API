import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Decommission & Migration",
      subpages: [
        {
          name: "SSH Cutover Playbook",
          path: "/legacy/protocols-and-statuses/advanced/decommission-and-migration/ssh-cutover-playbook"
        },
        {
          name: "Mail: POP3→IMAP",
          path: "/legacy/protocols-and-statuses/advanced/decommission-and-migration/mail-pop3-to-imap"
        }
      ]
    },
    {
      name: "Security (Legacy)",
      subpages: [
        {
          name: "Cleartext Risks",
          path: "/legacy/protocols-and-statuses/advanced/security-legacy/cleartext-risks"
        },
        {
          name: "AAA & Banners",
          path: "/legacy/protocols-and-statuses/advanced/security-legacy/aaa-and-banners"
        }
      ]
    },
    {
      name: "Compat & Interop",
      subpages: [
        {
          name: "Gateways & Proxies",
          path: "/legacy/protocols-and-statuses/advanced/compat-and-interop/gateways-and-proxies"
        },
        {
          name: "Legacy Clients Today",
          path: "/legacy/protocols-and-statuses/advanced/compat-and-interop/legacy-clients-today"
        }
      ]
    },
    {
      name: "Routing Legacy",
      subpages: [
        {
          name: "RIP Timers",
          path: "/legacy/protocols-and-statuses/advanced/routing-legacy/rip-timers"
        },
        {
          name: "IS-IS PDUs",
          path: "/legacy/protocols-and-statuses/advanced/routing-legacy/isis-pdus"
        }
      ]
    },
    {
      name: "Lab & Capture",
      subpages: [
        {
          name: "GNS3/EVE-NG Labs",
          path: "/legacy/protocols-and-statuses/advanced/lab-and-capture/gns3-eve-ng-labs"
        },
        {
          name: "Wireshark Profiles",
          path: "/legacy/protocols-and-statuses/advanced/lab-and-capture/wireshark-profiles"
        }
      ]
    }
  ]
};

export default Advanced;