// NetworkSecurity/Fundamentals/Basics.ts
import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Core Concepts",
      subpages: [
        {
          name: "CIA & Threat Modeling",
          path: "/fundamentals/basics/core/cia-threat-modeling"
        },
        {
          name: "Least Privilege & Defense in Depth",
          path: "/fundamentals/basics/core/least-privilege-defense-in-depth"
        }
      ]
    },
    {
      name: "Crypto",
      subpages: [
        {
          name: "Encryption Basics",
          path: "/fundamentals/basics/crypto/encryption-basics"
        },
        {
          name: "Keys, Certificates & Trust",
          path: "/fundamentals/basics/crypto/keys-certs-trust"
        }
      ]
    }
  ]
};

export default Basics;