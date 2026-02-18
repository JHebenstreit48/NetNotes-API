import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "ISE / NPS",
      subpages: [
        {
          name: "Policy Elements & Conditions",
          path: "/access/advanced/ise-nps/policy-elements"
        },
        {
          name: "AuthZ Flows & Results",
          path: "/access/advanced/ise-nps/authz-flows"
        }
      ]
    },
    {
      name: "Best Practices",
      subpages: [
        {
          name: "Accounting & Command Authorization",
          path: "/access/advanced/best-practices/accounting-authorization"
        },
        {
          name: "HA & Fallback Strategies",
          path: "/access/advanced/best-practices/ha-fallback"
        }
      ]
    }
  ]
};

export default Advanced;