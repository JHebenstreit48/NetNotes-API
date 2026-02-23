import type { Subpage } from '@/types/navigation';

const PolycomDeskPhones: Subpage = {
  name: 'Polycom Desk Phones',
  subpages: [
    {
      name: 'VVX/Trio Overview',
      path: '/tools/endpoints/deskphones/polycom/vvx-trio-overview',
    },
    {
      name: 'Models Directory',
      path: '/tools/endpoints/deskphones/polycom/models-directory',
    },
  ],
};

export default PolycomDeskPhones;
