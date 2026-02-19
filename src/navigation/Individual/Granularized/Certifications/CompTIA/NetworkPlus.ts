import type { Subpage } from '@/types/navigation';

const NetworkPlusNavigation: Subpage = {
  name: "CompTIA Network+",
  subpages: [
    {
      name: "Overview",
      subpages: [
        {
          name: "What is Network+?",
          path: "/certifications/comptia/networkplus/overview"
        },
        {
          name: "Why Get Network+ Certified?",
          path: "/certifications/comptia/networkplus/why-certify"
        }
      ]
    },
    {
      name: "Exam Domains",
      subpages: [
        {
          name: "Networking Concepts",
          path: "/certifications/comptia/networkplus/domains/concepts"
        },
        {
          name: "Infrastructure & Operations",
          path: "/certifications/comptia/networkplus/domains/infrastructure"
        }
      ]
    }
  ]
};

export default NetworkPlusNavigation;
