import type { Subpage } from '@/types/navigation';

const DockerNavigation: Subpage = {
  name: "Docker",
  subpages: [
    {
      name: "Overview",
      subpages: [
        {
          name: "What is the DCA?",
          path: "/certifications/devops/docker/overview"
        },
        {
          name: "Exam Format & Requirements",
          path: "/certifications/devops/docker/exam-format"
        }
      ]
    },
    {
      name: "Exam Topics",
      subpages: [
        {
          name: "Containers & Images",
          path: "/certifications/devops/docker/topics/containers"
        },
        {
          name: "Orchestration Basics",
          path: "/certifications/devops/docker/topics/orchestration"
        }
      ]
    }
  ]
};

export default DockerNavigation;
