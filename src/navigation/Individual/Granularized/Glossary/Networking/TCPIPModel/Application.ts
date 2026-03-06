import type { Subpage } from '@/types/navigation';

const Application: Subpage = {
  name: 'Application',
  subpages: [
    {
      name: 'Basics',
      path: '/glossary/networking/tcpipmodel/application/basics',
    },
    {
      name: 'DNS (Domain Name System)',
      path: '/glossary/networking/tcpipmodel/application/dns',
    },
    {
      name: 'HTTP / HTTPS',
      path: '/glossary/networking/tcpipmodel/application/http-https',
    },
  ],
};

export default Application;