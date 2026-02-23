import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Management Models",
      subpages: [
        {
          name: "On-Prem WLC vs Cloud",
          path: "/cloud/basics/management-models/on-prem-wlc-vs-cloud"
        },
        {
          name: "Licensing & Subscriptions",
          path: "/cloud/basics/management-models/licensing-and-subscriptions"
        }
      ]
    },
    {
      name: "Provisioning",
      subpages: [
        {
          name: "Claiming & Inventory",
          path: "/cloud/basics/provisioning/claiming-and-inventory"
        },
        {
          name: "Templates & Profiles",
          path: "/cloud/basics/provisioning/templates-and-profiles"
        }
      ]
    },
    {
      name: "Monitoring",
      subpages: [
        {
          name: "Dashboards & Alerts",
          path: "/cloud/basics/monitoring/dashboards-and-alerts"
        },
        {
          name: "Health & Telemetry",
          path: "/cloud/basics/monitoring/health-and-telemetry"
        }
      ]
    },
    {
      name: "Change Ops",
      subpages: [
        {
          name: "Firmware & Staging",
          path: "/cloud/basics/change-ops/firmware-and-staging"
        },
        {
          name: "Rollback & Audit",
          path: "/cloud/basics/change-ops/rollback-and-audit"
        }
      ]
    }
  ]
};

export default Basics;