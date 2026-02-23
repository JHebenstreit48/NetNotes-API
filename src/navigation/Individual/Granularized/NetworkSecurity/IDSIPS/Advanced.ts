// NetworkSecurity/IDSIPS/Advanced.ts
import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Detection Engines",
      subpages: [
        {
          name: "Signatures & Thresholds",
          path: "/ids-ips/advanced/engines/signatures-thresholds"
        },
        {
          name: "Anomaly & Behavior",
          path: "/ids-ips/advanced/engines/anomaly-behavior"
        }
      ]
    },
    {
      name: "Evasion & Resilience",
      subpages: [
        {
          name: "Fragmentation & TTL Tricks",
          path: "/ids-ips/advanced/evasion/fragmentation-ttl"
        },
        {
          name: "Performance & Latency",
          path: "/ids-ips/advanced/resilience/performance-latency"
        }
      ]
    }
  ]
};

export default Advanced;