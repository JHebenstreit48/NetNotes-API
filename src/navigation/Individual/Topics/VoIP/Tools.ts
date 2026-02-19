import type { Subpage } from '@/types/navigation';

// ------------------------ Desk Phones Navigation Start ------------------------
import CiscoDeskPhones from '@/navigation/Individual/Granularized/VoIP/Tools/DeskPhones/Cisco';
import AvayaDeskPhones from '@/navigation/Individual/Granularized/VoIP/Tools/DeskPhones/Avaya';
import PolycomDeskPhones from '@/navigation/Individual/Granularized/VoIP/Tools/DeskPhones/Polycom';
// ------------------------ Desk Phones Navigation End --------------------------

// ------------------------ Softphones Navigation Start ------------------------
import BriaAndLinphone from '@/navigation/Individual/Granularized/VoIP/Tools/Softphones/BriaAndLinphone';
import TeamsAndZoom from '@/navigation/Individual/Granularized/VoIP/Tools/Softphones/TeamsAndZoom';
// ------------------------ Softphones Navigation End --------------------------

const Tools: Subpage = {
  name: 'Tools',
  subpages: [
    {
      name: 'VoIP Desk Phones',
      subpages: [
        CiscoDeskPhones,
        AvayaDeskPhones,
        PolycomDeskPhones,
      ],
    },
    {
      name: 'Softphones & Clients',
      subpages: [
        BriaAndLinphone,
        TeamsAndZoom,
      ],
    },
  ],
};

export default Tools;