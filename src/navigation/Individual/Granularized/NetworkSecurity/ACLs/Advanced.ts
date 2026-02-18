// NetworkSecurity/ACLs/Advanced.ts
import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Extended ACLs",
      subpages: [
        {
          name: "Basics",
          path: "/acls/advanced/extended/basics"
        },
        {
          name: "Syntax",
          path: "/acls/advanced/extended/syntax"
        },
        {
          name: "Placement",
          path: "/acls/advanced/extended/placement"
        }
      ]
    },
    {
      name: "Examples & Patterns",
      subpages: [
        {
          name: "Examples (Std/Ext/Named)",
          path: "/acls/advanced/examples/combined"
        },
        {
          name: "Placement & Testing",
          path: "/acls/advanced/examples/placement-testing"
        }
      ]
    },
    {
      name: "Verify & Troubleshoot",
      subpages: [
        {
          name: "show access-lists",
          path: "/acls/advanced/verify-troubleshoot/show-access-lists"
        },
        {
          name: "show run / interface",
          path: "/acls/advanced/verify-troubleshoot/show-run-interface"
        },
        {
          name: "ping & traceroute",
          path: "/acls/advanced/verify-troubleshoot/ping-traceroute"
        },
        {
          name: "Common Mistakes",
          path: "/acls/advanced/verify-troubleshoot/common-mistakes"
        }
      ]
    }
  ]
};

export default Advanced;