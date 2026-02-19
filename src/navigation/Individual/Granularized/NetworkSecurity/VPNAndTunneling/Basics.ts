import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Site-to-Site",
      subpages: [
        {
          name: "IPsec/IKEv2 Overview",
          path: "/vpn/basics/site-to-site/ipsec-ikev2"
        },
        {
          name: "Crypto Maps & VTIs",
          path: "/vpn/basics/site-to-site/crypto-maps-vtis"
        }
      ]
    },
    {
      name: "Remote Access",
      subpages: [
        {
          name: "Split Tunneling",
          path: "/vpn/basics/remote-access/split-tunneling"
        },
        {
          name: "Auth Options (MFA, SAML)",
          path: "/vpn/basics/remote-access/auth-options"
        }
      ]
    }
  ]
};

export default Basics;