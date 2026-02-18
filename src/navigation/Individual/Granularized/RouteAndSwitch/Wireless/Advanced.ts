import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "RF & Performance",
      subpages: [
        {
          name: "RSSI/SNR & MCS",
          path: "/wireless/advanced/rf-performance/rssi-snr-and-mcs"
        },
        {
          name: "Band Steering & Load Balance",
          path: "/wireless/advanced/rf-performance/band-steering-and-load-balance"
        }
      ]
    },
    {
      name: "Roaming",
      subpages: [
        {
          name: "802.11k/v/r",
          path: "/wireless/advanced/roaming/80211kvr"
        },
        {
          name: "Fast Transition Notes",
          path: "/wireless/advanced/roaming/fast-transition-notes"
        }
      ]
    },
    {
      name: "QoS & Services",
      subpages: [
        {
          name: "WMM & EDCA",
          path: "/wireless/advanced/qos/wmm-and-edca"
        },
        {
          name: "Multicast over WLAN",
          path: "/wireless/advanced/qos/multicast-over-wlan"
        }
      ]
    },
    {
      name: "Controller Ops (Non-Cloud)",
      subpages: [
        {
          name: "WLC Basics",
          path: "/wireless/advanced/controller/wlc-basics"
        },
        {
          name: "CAPWAP Join & Tunnel",
          path: "/wireless/advanced/controller/capwap-join-and-tunnel"
        }
      ]
    }
  ]
};

export default Advanced;