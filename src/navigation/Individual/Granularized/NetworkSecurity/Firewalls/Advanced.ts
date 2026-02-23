import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "NGFW Features",
      subpages: [
        {
          name: "App-ID / IPS / URL",
          path: "/firewalls/advanced/ngfw/appid-ips-url"
        },
        {
          name: "SSL/TLS Decryption",
          path: "/firewalls/advanced/ngfw/ssl-tls-decryption"
        }
      ]
    },
    {
      name: "Policy & Access Control",
      subpages: [
        {
          name: "Rule Design & Order",
          path: "/firewalls/advanced/policy/rule-design"
        },
        {
          name: "Access Control Strategies",
          path: "/firewalls/advanced/policy/access-control-strategies"
        }
      ]
    },
    {
      name: "High Availability",
      subpages: [
        {
          name: "Failover & Clustering",
          path: "/firewalls/advanced/ha/failover-clustering"
        },
        {
          name: "State Sync & Health",
          path: "/firewalls/advanced/ha/state-sync-health"
        }
      ]
    }
  ]
};

export default Advanced;