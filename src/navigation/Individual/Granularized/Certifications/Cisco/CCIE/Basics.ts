import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Overview",
      subpages: [
        {
          name: "What is CCIE?",
          path: "/certifications/cisco/ccie/basics/overview/what-is-ccie"
        },
        {
          name: "Paths & Prereqs",
          path: "/certifications/cisco/ccie/basics/overview/paths-and-prereqs"
        }
      ]
    },
    {
      name: "Tracks",
      subpages: [
        {
          name: "Enterprise vs Security",
          path: "/certifications/cisco/ccie/basics/tracks/enterprise-vs-security"
        },
        {
          name: "Data Center • SP • Collab",
          path: "/certifications/cisco/ccie/basics/tracks/data-center-sp-collab"
        }
      ]
    },
    {
      name: "Written Exam",
      subpages: [
        {
          name: "Exam Overview",
          path: "/certifications/cisco/ccie/basics/written/exam-overview"
        },
        {
          name: "Domains & Blueprint",
          path: "/certifications/cisco/ccie/basics/written/domains-and-blueprint"
        }
      ]
    },
    {
      name: "Lab Fundamentals",
      subpages: [
        {
          name: "Lab Structure",
          path: "/certifications/cisco/ccie/basics/lab-fundamentals/lab-structure"
        },
        {
          name: "Sections & Scoring",
          path: "/certifications/cisco/ccie/basics/lab-fundamentals/sections-and-scoring"
        }
      ]
    },
    {
      name: "Prep Foundations",
      subpages: [
        {
          name: "Study Plan",
          path: "/certifications/cisco/ccie/basics/prep-foundations/study-plan"
        },
        {
          name: "Tools & Environment",
          path: "/certifications/cisco/ccie/basics/prep-foundations/tools-and-environment"
        }
      ]
    }
  ]
};

export default Basics;