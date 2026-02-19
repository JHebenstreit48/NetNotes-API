import type { Subpage } from '@/types/navigation';

const TeamsAndZoom: Subpage = {
  name: 'Teams and Zoom Phone',
  subpages: [
    {
      name: 'SIP Gateways & Interop',
      path: '/tools/softphones/clients/teams-zoom/sip-gateways',
    },
    {
      name: 'Call Quality, MOS & CAC',
      path: '/tools/softphones/clients/teams-zoom/quality-mos-cac',
    },
  ],
};

export default TeamsAndZoom;