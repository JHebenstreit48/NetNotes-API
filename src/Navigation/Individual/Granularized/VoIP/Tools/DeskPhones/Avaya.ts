import type { Subpage } from '@/types/navigation';

const AvayaDeskPhones: Subpage = {
  name: 'Avaya Desk Phones',
  subpages: [
    {
      name: 'J-Series & Platforms (Aura, IP Office)',
      path: '/tools/endpoints/deskphones/avaya/j-series-platforms',
    },
    {
      name: 'Models Directory',
      path: '/tools/endpoints/deskphones/avaya/models-directory',
    },
  ],
};

export default AvayaDeskPhones;