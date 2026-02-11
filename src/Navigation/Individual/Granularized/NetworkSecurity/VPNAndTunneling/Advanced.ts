import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "DMVPN",
      subpages: [
        {
          name: "Design & Phases",
          path: "/vpn/advanced/dmvpn/design-phases"
        },
        {
          name: "Routing & Crypto",
          path: "/vpn/advanced/dmvpn/routing-crypto"
        }
      ]
    },
    {
      name: "SSL VPN",
      subpages: [
        {
          name: "AnyConnect / Portal",
          path: "/vpn/advanced/ssl-vpn/anyconnect-portal"
        },
        {
          name: "Split-DNS & Bookmarks",
          path: "/vpn/advanced/ssl-vpn/split-dns-bookmarks"
        }
      ]
    }
  ]
};

export default Advanced;