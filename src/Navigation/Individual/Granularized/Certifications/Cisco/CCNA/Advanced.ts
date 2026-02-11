import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Practice Tests",
      subpages: [
        {
          name: "Boson",
          path: "/certifications/cisco/ccna/advanced/practice-tests/boson"
        },
        {
          name: "MeasureUp",
          path: "/certifications/cisco/ccna/advanced/practice-tests/measureup"
        }
      ]
    },
    {
      name: "PBQs & Labs",
      subpages: [
        {
          name: "Packet Tracer Labs",
          path: "/certifications/cisco/ccna/advanced/pbqs-and-labs/packet-tracer-labs"
        },
        {
          name: "Troubleshooting Scenarios",
          path: "/certifications/cisco/ccna/advanced/pbqs-and-labs/troubleshooting-scenarios"
        }
      ]
    },
    {
      name: "Mock Exams",
      subpages: [
        {
          name: "Timed (120 min)",
          path: "/certifications/cisco/ccna/advanced/mock-exams/timed-120-min"
        },
        {
          name: "Review & Analytics",
          path: "/certifications/cisco/ccna/advanced/mock-exams/review-and-analytics"
        }
      ]
    },
    {
      name: "Weak Areas & Retros",
      subpages: [
        {
          name: "Error Log",
          path: "/certifications/cisco/ccna/advanced/weak-areas-and-retros/error-log"
        },
        {
          name: "Objective Heatmap",
          path: "/certifications/cisco/ccna/advanced/weak-areas-and-retros/objective-heatmap"
        }
      ]
    },
    {
      name: "Final Review",
      subpages: [
        {
          name: "72-Hour Plan",
          path: "/certifications/cisco/ccna/advanced/final-review/72-hour-plan"
        },
        {
          name: "Day-Before Checklist",
          path: "/certifications/cisco/ccna/advanced/final-review/day-before-checklist"
        }
      ]
    }
  ]
};

export default Advanced;