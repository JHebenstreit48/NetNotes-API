import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Architecture & Design",
      subpages: [
        {
          name: "Core/Distribution/Access",
          path: "/foundations/advanced/architecture-and-design/core-distribution-access"
        },
        {
          name: "Spine-Leaf",
          path: "/foundations/advanced/architecture-and-design/spine-leaf"
        }
      ]
    },
    {
      name: "Planes & Traffic",
      subpages: [
        {
          name: "Data vs Control vs Mgmt",
          path: "/foundations/advanced/planes-and-traffic/data-vs-control-vs-management"
        },
        {
          name: "Unicast • Multicast • Broadcast",
          path: "/foundations/advanced/planes-and-traffic/unicast-multicast-broadcast"
        }
      ]
    },
    {
      name: "Diagrams & Docs",
      subpages: [
        {
          name: "Physical vs Logical",
          path: "/foundations/advanced/diagrams-and-docs/physical-vs-logical"
        },
        {
          name: "Naming & Labeling",
          path: "/foundations/advanced/diagrams-and-docs/naming-and-labeling"
        }
      ]
    },
    {
      name: "Troubleshooting",
      subpages: [
        {
          name: "Methodology & Flow",
          path: "/foundations/advanced/troubleshooting/methodology-and-flow"
        },
        {
          name: "Baselines & Monitoring",
          path: "/foundations/advanced/troubleshooting/baselines-and-monitoring"
        }
      ]
    }
  ]
};

export default Advanced;