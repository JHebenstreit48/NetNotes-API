import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Practice & Labs",
      subpages: [
        {
          name: "Python & REST Labs",
          path: "/certifications/cisco/devnet/advanced/practice-and-labs/python-and-rest-labs"
        },
        {
          name: "Automation with Ansible",
          path: "/certifications/cisco/devnet/advanced/practice-and-labs/automation-with-ansible"
        }
      ]
    },
    {
      name: "Mock Exams",
      subpages: [
        {
          name: "Associate Timed Mock",
          path: "/certifications/cisco/devnet/advanced/mock-exams/associate-timed-mock"
        },
        {
          name: "DEVCOR Timed Mock",
          path: "/certifications/cisco/devnet/advanced/mock-exams/devcor-timed-mock"
        }
      ]
    },
    {
      name: "Blueprint Plans",
      subpages: [
        {
          name: "8-Week (Associate)",
          path: "/certifications/cisco/devnet/advanced/blueprint-plans/8-week-associate"
        },
        {
          name: "12-Week (DEVCOR)",
          path: "/certifications/cisco/devnet/advanced/blueprint-plans/12-week-devcor"
        }
      ]
    },
    {
      name: "Tools & Environments",
      subpages: [
        {
          name: "Dev Containers",
          path: "/certifications/cisco/devnet/advanced/tools-and-environments/dev-containers"
        },
        {
          name: "CI/CD for Labs",
          path: "/certifications/cisco/devnet/advanced/tools-and-environments/ci-cd-for-labs"
        }
      ]
    }
  ]
};

export default Advanced;