import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Amazon Connect',
      subpages: [
        {
          name: 'Overview',
          path: '/voip/platforms/advanced/amazon-connect/overview'
        },
        {
          name: 'Contact Flows & Routing',
          path: '/voip/platforms/advanced/amazon-connect/contact-flows'
        }
      ]
    },
    {
      name: 'RingCentral',
      subpages: [
        {
          name: 'Overview',
          path: '/voip/platforms/advanced/ringcentral/overview'
        },
        {
          name: 'Routing & Integrations',
          path: '/voip/platforms/advanced/ringcentral/routing-integrations'
        }
      ]
    },
    {
      name: 'Webex Calling',
      subpages: [
        {
          name: 'Overview',
          path: '/voip/platforms/advanced/webex-calling/overview'
        },
        {
          name: 'Provisioning & Numbers',
          path: '/voip/platforms/advanced/webex-calling/provisioning'
        }
      ]
    }
  ]
};

export default Advanced;