import type { Subpage } from '@/types/navigation';

const WebAndName: Subpage = {
  name: 'Web & Name Resolution',
  subpages: [
    {
      name: 'Introduction',
      path: '/tcpip-model/layers/application/basics/web-and-name/introduction',
    },
    {
      name: 'HTTP/HTTPS',
      path: '/tcpip-model/layers/application/basics/web-and-name/http-https',
    },
    {
      name: 'DNS',
      path: '/tcpip-model/layers/application/basics/web-and-name/dns',
    },
  ],
};

export default WebAndName;