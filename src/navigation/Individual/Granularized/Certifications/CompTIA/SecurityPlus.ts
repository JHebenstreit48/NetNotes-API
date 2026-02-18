import type { Subpage } from '@/types/navigation';

const SecurityPlusNavigation: Subpage = {
  name: "CompTIA Security+",
  subpages: [
    {
      name: "Overview",
      subpages: [
        {
          name: "What is Security+?",
          path: "/certifications/comptia/securityplus/overview"
        },
        {
          name: "Security+ Exam Format",
          path: "/certifications/comptia/securityplus/exam-format"
        }
      ]
    },
    {
      name: "Exam Domains",
      subpages: [
        {
          name: "Threats, Attacks & Vulnerabilities",
          path: "/certifications/comptia/securityplus/domains/threats"
        },
        {
          name: "Identity & Access Management",
          path: "/certifications/comptia/securityplus/domains/iam"
        }
      ]
    }
  ]
};

export default SecurityPlusNavigation;
