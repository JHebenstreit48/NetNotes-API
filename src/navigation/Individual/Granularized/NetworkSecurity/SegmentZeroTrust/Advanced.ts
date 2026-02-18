import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Microsegmentation",
      subpages: [
        {
          name: "Host / Hypervisor Controls",
          path: "/segmentation/advanced/microseg/host-hypervisor"
        },
        {
          name: "TrustSec / SGT",
          path: "/segmentation/advanced/microseg/trustsec-sgt"
        }
      ]
    },
    {
      name: "ZTNA Patterns",
      subpages: [
        {
          name: "Brokered Access",
          path: "/segmentation/advanced/ztna/brokered-access"
        },
        {
          name: "App Segmentation",
          path: "/segmentation/advanced/ztna/app-segmentation"
        }
      ]
    }
  ]
};

export default Advanced;