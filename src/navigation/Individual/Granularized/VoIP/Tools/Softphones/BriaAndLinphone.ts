import type { Subpage } from '@/types/navigation';

const BriaAndLinphone: Subpage = {
  name: 'Bria and Linphone',
  subpages: [
    {
      name: 'Provisioning & Profiles',
      path: '/tools/softphones/clients/bria-linphone/provisioning',
    },
    {
      name: 'Troubleshooting (sngrep/Wireshark)',
      path: '/tools/softphones/clients/bria-linphone/troubleshooting',
    },
  ],
};

export default BriaAndLinphone;