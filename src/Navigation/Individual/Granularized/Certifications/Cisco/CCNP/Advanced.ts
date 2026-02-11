import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Concentration Exams",
      subpages: [
        {
          name: "Exam Options",
          path: "/certifications/cisco/ccnp/advanced/concentration-exams/exam-options"
        },
        {
          name: "Recommended Paths",
          path: "/certifications/cisco/ccnp/advanced/concentration-exams/recommended-paths"
        }
      ]
    },
    {
      name: "Practice & Labs",
      subpages: [
        {
          name: "Labs & Practice",
          path: "/certifications/cisco/ccnp/advanced/practice-and-labs/labs-and-practice"
        },
        {
          name: "PBQs & Scenarios",
          path: "/certifications/cisco/ccnp/advanced/practice-and-labs/pbqs-and-scenarios"
        }
      ]
    },
    {
      name: "Mock Exams",
      subpages: [
        {
          name: "Timed Mock",
          path: "/certifications/cisco/ccnp/advanced/mock-exams/timed-mock"
        },
        {
          name: "Review & Analytics",
          path: "/certifications/cisco/ccnp/advanced/mock-exams/review-and-analytics"
        }
      ]
    },
    {
      name: "Resources",
      subpages: [
        {
          name: "Books & Courses",
          path: "/certifications/cisco/ccnp/advanced/resources/books-and-courses"
        },
        {
          name: "Official Docs & Blueprints",
          path: "/certifications/cisco/ccnp/advanced/resources/official-docs-and-blueprints"
        }
      ]
    }
  ]
};

export default Advanced;