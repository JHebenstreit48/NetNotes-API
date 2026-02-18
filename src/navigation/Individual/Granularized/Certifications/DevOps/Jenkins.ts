import type { Subpage } from '@/types/navigation';

const JenkinsNavigation: Subpage = {
  name: "Jenkins",
  subpages: [
    {
      name: "Overview",
      subpages: [
        {
          name: "What is the CJE?",
          path: "/certifications/devops/jenkins/overview"
        },
        {
          name: "Skills Measured",
          path: "/certifications/devops/jenkins/domains"
        }
      ]
    },
    {
      name: "Jenkins in CI/CD",
      subpages: [
        {
          name: "Pipeline Concepts",
          path: "/certifications/devops/jenkins/pipelines"
        },
        {
          name: "Declarative vs Scripted",
          path: "/certifications/devops/jenkins/declarative-vs-scripted"
        }
      ]
    }
  ]
};

export default JenkinsNavigation;
