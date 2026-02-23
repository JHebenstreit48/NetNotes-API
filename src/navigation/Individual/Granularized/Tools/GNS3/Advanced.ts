import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Servers & Performance",
      subpages: [
        {
          name: "Local/Remote Server",
          path: "/gns3/advanced/servers-and-performance/local-and-remote-server"
        },
        {
          name: "Tuning & Resources",
          path: "/gns3/advanced/servers-and-performance/tuning-and-resources"
        }
      ]
    },
    {
      name: "Connectivity",
      subpages: [
        {
          name: "Cloud/NAT/Bridging",
          path: "/gns3/advanced/connectivity/cloud-nat-bridging"
        },
        {
          name: "Host/Internet Access",
          path: "/gns3/advanced/connectivity/host-and-internet-access"
        }
      ]
    },
    {
      name: "Containers & VMs",
      subpages: [
        {
          name: "Docker Integration",
          path: "/gns3/advanced/containers-and-vms/docker-integration"
        },
        {
          name: "QEMU/KVM Tips",
          path: "/gns3/advanced/containers-and-vms/qemu-kvm-tips"
        }
      ]
    },
    {
      name: "Automation & APIs",
      subpages: [
        {
          name: "Startup Configs",
          path: "/gns3/advanced/automation-and-apis/startup-configs"
        },
        {
          name: "GNS3 REST API",
          path: "/gns3/advanced/automation-and-apis/gns3-rest-api"
        }
      ]
    }
  ]
};

export default Advanced;