// NetworkSecurity/Fundamentals/Advanced.ts
import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Security Models",
      subpages: [
        {
          name: "Kill Chain vs ATT&CK",
          path: "/fundamentals/advanced/models/kill-chain-vs-attck"
        },
        {
          name: "Control Types & Mapping",
          path: "/fundamentals/advanced/models/control-types-mapping"
        }
      ]
    },
    {
      name: "Risk & Policy",
      subpages: [
        {
          name: "Risk Scoring & Appetite",
          path: "/fundamentals/advanced/risk-policy/risk-scoring-appetite"
        },
        {
          name: "Policy Frameworks",
          path: "/fundamentals/advanced/risk-policy/policy-frameworks"
        }
      ]
    }
  ]
};

export default Advanced;