// Navigation/Individual/Granularized/Certifications/Cisco/CCIE/Advanced.ts
import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Lab Strategy",
      subpages: [
        {
          name: "Speed & Time Mgmt",
          path: "/certifications/cisco/ccie/advanced/lab-strategy/speed-and-time-management"
        },
        {
          name: "Documentation & Diagrams",
          path: "/certifications/cisco/ccie/advanced/lab-strategy/documentation-and-diagrams"
        }
      ]
    },
    {
      name: "Mock Labs",
      subpages: [
        {
          name: "Timed Mock",
          path: "/certifications/cisco/ccie/advanced/mock-labs/timed-mock"
        },
        {
          name: "Task Review & Notes",
          path: "/certifications/cisco/ccie/advanced/mock-labs/task-review-and-notes"
        }
      ]
    },
    {
      name: "Troubleshooting",
      subpages: [
        {
          name: "Common Pitfalls",
          path: "/certifications/cisco/ccie/advanced/troubleshooting/common-pitfalls"
        },
        {
          name: "Debug Workflow",
          path: "/certifications/cisco/ccie/advanced/troubleshooting/debug-workflow"
        }
      ]
    },
    {
      name: "Resources",
      subpages: [
        {
          name: "Books & Courses",
          path: "/certifications/cisco/ccie/advanced/resources/books-and-courses"
        },
        {
          name: "Practice Labs & Racks",
          path: "/certifications/cisco/ccie/advanced/resources/practice-labs-and-racks"
        }
      ]
    }
  ]
};

export default Advanced;