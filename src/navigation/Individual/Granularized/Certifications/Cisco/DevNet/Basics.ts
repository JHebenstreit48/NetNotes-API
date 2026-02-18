import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Program Overview",
      subpages: [
        {
          name: "What is DevNet?",
          path: "/certifications/cisco/devnet/basics/program-overview/what-is-devnet"
        },
        {
          name: "Paths & Prereqs",
          path: "/certifications/cisco/devnet/basics/program-overview/paths-and-prereqs"
        }
      ]
    },
    {
      name: "Associate (200-901)",
      subpages: [
        {
          name: "Exam Overview",
          path: "/certifications/cisco/devnet/basics/associate-200-901/exam-overview"
        },
        {
          name: "Exam Domains",
          path: "/certifications/cisco/devnet/basics/associate-200-901/exam-domains"
        }
      ]
    },
    {
      name: "Professional (DevNet Pro)",
      subpages: [
        {
          name: "DEVCOR Overview",
          path: "/certifications/cisco/devnet/basics/professional/devcor-overview"
        },
        {
          name: "Concentration Options",
          path: "/certifications/cisco/devnet/basics/professional/concentration-options"
        }
      ]
    },
    {
      name: "Expert (DevNet Expert)",
      subpages: [
        {
          name: "Exam Overview",
          path: "/certifications/cisco/devnet/basics/expert/exam-overview"
        },
        {
          name: "Lab Blueprint",
          path: "/certifications/cisco/devnet/basics/expert/lab-blueprint"
        }
      ]
    },
    {
      name: "Resources",
      subpages: [
        {
          name: "DevNet Sandbox 101",
          path: "/certifications/cisco/devnet/basics/resources/devnet-sandbox-101"
        },
        {
          name: "API Docs & Collections",
          path: "/certifications/cisco/devnet/basics/resources/api-docs-and-collections"
        }
      ]
    }
  ]
};

export default Basics;