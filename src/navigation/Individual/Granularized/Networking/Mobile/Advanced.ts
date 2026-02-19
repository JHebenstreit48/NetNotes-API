import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Cellular Performance",
      subpages: [
        {
          name: "Congestion & Throttling",
          path: "/mobile/advanced/cellular-performance/congestion-and-throttling",
        },
        {
          name: "Handoffs (Concepts)",
          path: "/mobile/advanced/cellular-performance/handoffs-concepts",
        },
      ],
    },
    {
      name: "Bluetooth Troubleshooting",
      subpages: [
        {
          name: "Common Pairing Issues",
          path: "/mobile/advanced/bluetooth/common-pairing-issues",
        },
        {
          name: "Interference & Dropouts",
          path: "/mobile/advanced/bluetooth/interference-and-dropouts",
        },
      ],
    },
    {
      name: "NFC Security",
      subpages: [
        {
          name: "Risks & Best Practices",
          path: "/mobile/advanced/nfc-security/risks-and-best-practices",
        },
        {
          name: "Payments & Secure Element",
          path: "/mobile/advanced/nfc-security/payments-and-secure-element",
        },
      ],
    },
    {
      name: "Radio Coexistence",
      subpages: [
        {
          name: "Wi-Fi + Bluetooth Interaction",
          path: "/mobile/advanced/coexistence/wifi-and-bluetooth",
        },
        {
          name: "Cellular + Wi-Fi Switching",
          path: "/mobile/advanced/coexistence/cellular-and-wifi-switching",
        },
      ],
    },
  ],
};

export default Advanced;