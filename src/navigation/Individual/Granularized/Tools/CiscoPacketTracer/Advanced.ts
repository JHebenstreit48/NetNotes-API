import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Simulation Analysis",
      subpages: [
        {
          name: "Protocol Inspectors",
          path: "/packettracer/advanced/simulation-analysis/protocol-inspectors"
        },
        {
          name: "Event Workflows",
          path: "/packettracer/advanced/simulation-analysis/event-workflows"
        }
      ]
    },
    {
      name: "Activities & Assessment",
      subpages: [
        {
          name: "Activity Wizard",
          path: "/packettracer/advanced/activities-and-assessment/activity-wizard"
        },
        {
          name: "Grading & Feedback",
          path: "/packettracer/advanced/activities-and-assessment/grading-and-feedback"
        }
      ]
    },
    {
      name: "Templates & Files",
      subpages: [
        {
          name: "Custom Devices & Defaults",
          path: "/packettracer/advanced/templates-and-files/custom-devices-and-defaults"
        },
        {
          name: "Export/Import (PKA/PKZ)",
          path: "/packettracer/advanced/templates-and-files/export-and-import"
        }
      ]
    },
    {
      name: "Collaboration",
      subpages: [
        {
          name: "Multiuser Links",
          path: "/packettracer/advanced/collaboration/multiuser-links"
        },
        {
          name: "Shared Projects",
          path: "/packettracer/advanced/collaboration/shared-projects"
        }
      ]
    },
    {
      name: "Performance & Limits",
      subpages: [
        {
          name: "Scale & Resources",
          path: "/packettracer/advanced/performance-and-limits/scale-and-resources"
        },
        {
          name: "Version Compatibility",
          path: "/packettracer/advanced/performance-and-limits/version-compatibility"
        }
      ]
    }
  ]
};

export default Advanced;