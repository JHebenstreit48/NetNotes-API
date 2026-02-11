import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Foundations",
      subpages: [
        {
          name: "VoIP Troubleshooting Mindset",
          path: "/voip/diagnostics/basics/foundations/troubleshooting-mindset"
        },
        {
          name: "Media vs Signaling Symptoms",
          path: "/voip/diagnostics/basics/foundations/media-vs-signaling"
        }
      ]
    },
    {
      name: "Triage Workflow",
      subpages: [
        {
          name: "Fast Triage Checklist",
          path: "/voip/diagnostics/basics/triage/fast-checklist"
        },
        {
          name: "What to Capture and When",
          path: "/voip/diagnostics/basics/triage/what-to-capture"
        }
      ]
    }
  ]
};

export default Basics;