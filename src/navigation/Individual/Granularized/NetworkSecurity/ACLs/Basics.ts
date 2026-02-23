import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Overview",
      subpages: [
        {
          name: "Fundamentals",
          path: "/acls/basics/overview/fundamentals"
        },
        {
          name: "Processing & Rule Order",
          path: "/acls/basics/overview/processing"
        },
        {
          name: "Named vs Numbered",
          path: "/acls/basics/overview/named-vs-numbered"
        }
      ]
    },
    {
      name: "Standard ACLs",
      subpages: [
        {
          name: "Basics",
          path: "/acls/basics/standard/basics"
        },
        {
          name: "Syntax",
          path: "/acls/basics/standard/syntax"
        },
        {
          name: "Placement",
          path: "/acls/basics/standard/placement"
        }
      ]
    },
    {
      name: "Wildcard Masks",
      subpages: [
        {
          name: "Fundamentals",
          path: "/acls/basics/wildcards/fundamentals"
        },
        {
          name: "Wildcard vs Subnet Mask",
          path: "/acls/basics/wildcards/vs-subnet-mask"
        },
        {
          name: "Calculation",
          path: "/acls/basics/wildcards/calculation"
        }
      ]
    }
  ]
};

export default Basics;