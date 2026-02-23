import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Overview",
      subpages: [
        {
          name: "Exam Overview",
          path: "/certifications/cisco/ccna/basics/overview/exam-overview"
        },
        {
          name: "Policies & Registration",
          path: "/certifications/cisco/ccna/basics/overview/policies-and-registration"
        }
      ]
    },
    {
      name: "Study Methods",
      subpages: [
        {
          name: "Active Recall & Labs",
          path: "/certifications/cisco/ccna/basics/study-methods/active-recall-and-labs"
        },
        {
          name: "Pomodoro & Spaced Repetition",
          path: "/certifications/cisco/ccna/basics/study-methods/pomodoro-and-spaced-repetition"
        }
      ]
    },
    {
      name: "Time Management",
      subpages: [
        {
          name: "Pacing & Timed Blocks",
          path: "/certifications/cisco/ccna/basics/time-management/pacing-and-timed-blocks"
        },
        {
          name: "Review Windows",
          path: "/certifications/cisco/ccna/basics/time-management/review-windows"
        }
      ]
    },
    {
      name: "Objective Map",
      subpages: [
        {
          name: "Domain Breakdown",
          path: "/certifications/cisco/ccna/basics/objective-map/domain-breakdown"
        },
        {
          name: "Link Map to Notes",
          path: "/certifications/cisco/ccna/basics/objective-map/link-map-to-notes"
        }
      ]
    },
    {
      name: "Resources",
      subpages: [
        {
          name: "Flashcards (Anki/Quizlet)",
          path: "/certifications/cisco/ccna/basics/resources/flashcards-anki-quizlet"
        },
        {
          name: "Study Templates",
          path: "/certifications/cisco/ccna/basics/resources/study-templates"
        }
      ]
    },
    {
      name: "Exam Day Prep",
      subpages: [
        {
          name: "Pearson/VUE Checklist",
          path: "/certifications/cisco/ccna/basics/exam-day-prep/pearson-vue-checklist"
        },
        {
          name: "Environment & ID",
          path: "/certifications/cisco/ccna/basics/exam-day-prep/environment-and-id"
        }
      ]
    }
  ]
};

export default Basics;