import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Overview",
      subpages: [
        {
          name: "What is the CCNP?",
          path: "/certifications/cisco/ccnp/basics/overview/what-is-the-ccnp"
        },
        {
          name: "Tracks & Prerequisites",
          path: "/certifications/cisco/ccnp/basics/overview/tracks-and-prerequisites"
        }
      ]
    },
    {
      name: "ENCOR 350-401 (Core)",
      subpages: [
        {
          name: "Exam Overview",
          path: "/certifications/cisco/ccnp/basics/encor/exam-overview"
        },
        {
          name: "Exam Topics",
          path: "/certifications/cisco/ccnp/basics/encor/exam-topics"
        }
      ]
    },
    {
      name: "Planning & Study",
      subpages: [
        {
          name: "Study Methods",
          path: "/certifications/cisco/ccnp/basics/planning-and-study/study-methods"
        },
        {
          name: "Timeline & Milestones",
          path: "/certifications/cisco/ccnp/basics/planning-and-study/timeline-and-milestones"
        }
      ]
    }
  ]
};

export default Basics;