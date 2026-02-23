import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "AAA & RBAC",
      subpages: [
        {
          name: "Concepts",
          path: "/access/basics/aaa-rbac/concepts"
        },
        {
          name: "RADIUS vs TACACS+",
          path: "/access/basics/aaa-rbac/radius-vs-tacacs"
        }
      ]
    },
    {
      name: "Access Contexts",
      subpages: [
        {
          name: "Network Access (802.1X overview)",
          path: "/access/basics/contexts/network-access-8021x"
        },
        {
          name: "Device Admin (TACACS+)",
          path: "/access/basics/contexts/device-admin"
        }
      ]
    }
  ]
};

export default Basics;