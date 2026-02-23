import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/legacy/osi-model/basics/fundamentals/introduction"
        },
        {
          name: "Layers Comparison",
          path: "/legacy/osi-model/basics/fundamentals/layer-comparison"
        }
      ]
    },
    {
      name: "Foundations",
      subpages: [
        {
          name: "Model & Terms",
          path: "/legacy/osi-model/basics/foundations/model-and-terms"
        },
        {
          name: "Services vs Protocols",
          path: "/legacy/osi-model/basics/foundations/services-vs-protocols"
        }
      ]
    },
    {
      name: "PDUs & SAP",
      subpages: [
        {
          name: "PDU Names by Layer",
          path: "/legacy/osi-model/basics/pdus-and-sap/pdu-names-by-layer"
        },
        {
          name: "SAP/SDU/PCI",
          path: "/legacy/osi-model/basics/pdus-and-sap/sap-sdu-pci"
        }
      ]
    },
    {
      name: "Service Primitives",
      subpages: [
        {
          name: "Req/Ind/Resp/Conf",
          path: "/legacy/osi-model/basics/service-primitives/req-ind-resp-conf"
        },
        {
          name: "Encapsulation Path",
          path: "/legacy/osi-model/basics/service-primitives/encapsulation-path"
        }
      ]
    },
    {
      name: "Presentation",
      subpages: [
        {
          name: "ASN.1 & BER/DER",
          path: "/legacy/osi-model/basics/presentation/asn1-and-ber-der"
        },
        {
          name: "Transfer Syntax",
          path: "/legacy/osi-model/basics/presentation/transfer-syntax"
        }
      ]
    },
    {
      name: "Session",
      subpages: [
        {
          name: "Dialog & Tokens",
          path: "/legacy/osi-model/basics/session/dialog-and-tokens"
        },
        {
          name: "Sync & Recovery",
          path: "/legacy/osi-model/basics/session/sync-and-recovery"
        }
      ]
    },
    {
      name: "Glossary/Resources",
      subpages: [
        {
          name: "Glossary",
          path: "/legacy/osi-model/basics/glossary-and-resources/glossary"
        },
        {
          name: "Resources",
          path: "/legacy/osi-model/basics/glossary-and-resources/resources"
        }
      ]
    }
  ]
};

export default Basics;