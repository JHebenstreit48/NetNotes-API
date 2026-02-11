// NetworkSecurity/IDSIPS/Basics.ts
import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Detection Concepts",
      subpages: [
        {
          name: "Intrusion Detection",
          path: "/ids-ips/basics/detection/intrusion-detection"
        },
        {
          name: "IDS vs IPS",
          path: "/ids-ips/basics/detection/ids-vs-ips"
        }
      ]
    },
    {
      name: "Placement & Tuning",
      subpages: [
        {
          name: "Inline vs SPAN/TAP",
          path: "/ids-ips/basics/placement/inline-vs-span"
        },
        {
          name: "Reducing False Positives",
          path: "/ids-ips/basics/tuning/reducing-false-positives"
        }
      ]
    }
  ]
};

export default Basics;