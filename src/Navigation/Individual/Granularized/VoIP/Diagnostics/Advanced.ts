import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Media Quality",
      subpages: [
        {
          name: "RTP & Jitter Analysis",
          path: "/voip/diagnostics/advanced/media/rtp-jitter-analysis"
        },
        {
          name: "MOS & Packet Loss",
          path: "/voip/diagnostics/advanced/media/mos-packet-loss"
        }
      ]
    },
    {
      name: "Signaling",
      subpages: [
        {
          name: "sngrep — Call Flows",
          path: "/voip/diagnostics/advanced/signaling/sngrep-callflows"
        },
        {
          name: "Wireshark — SIP/SDP Filters",
          path: "/voip/diagnostics/advanced/signaling/wireshark-sip-sdp"
        }
      ]
    },
    {
      name: "Provisioning",
      subpages: [
        {
          name: "DHCP Options & Voice VLANs",
          path: "/voip/diagnostics/advanced/provisioning/dhcp-voice-vlans"
        },
        {
          name: "TFTP/HTTP(S) Servers & File Layouts",
          path: "/voip/diagnostics/advanced/provisioning/servers-file-layouts"
        }
      ]
    },
    {
      name: "TLS & SRTP Security",
      subpages: [
        {
          name: "TLS Handshake & Certificates",
          path: "/voip/diagnostics/advanced/tls-srtp/tls-handshake-certs"
        },
        {
          name: "SRTP Troubleshooting",
          path: "/voip/diagnostics/advanced/tls-srtp/srtp-troubleshooting"
        }
      ]
    }
  ]
};

export default Advanced;