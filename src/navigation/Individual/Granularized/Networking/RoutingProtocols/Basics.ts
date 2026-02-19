import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Concepts",
      subpages: [
        {
          name: "Routing Protocol Overview",
          path: "/routing-protocols/basics/concepts/overview"
        },
        {
          name: "Static vs Dynamic",
          path: "/routing-protocols/basics/concepts/static-vs-dynamic"
        }
      ]
    },
    {
      name: "Protocol Families",
      subpages: [
        {
          name: "Distance-Vector vs Link-State",
          path: "/routing-protocols/basics/protocol-families/distance-vector-vs-link-state"
        },
        {
          name: "IGP vs EGP",
          path: "/routing-protocols/basics/protocol-families/igp-vs-egp"
        }
      ]
    }
  ]
};

export default Basics;