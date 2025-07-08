# What is Layer 2 Switching?
---

- A **Layer 2 switch** makes forwarding traffic decisions based on the **destination MAC address** inside the **Layer 2 header**.

---
## Why Layer 2 Switching is Important
---  

- **Efficient Traffic Forwarding**:
  - Data is sent directly to the intended recipient using MAC addresses, reducing unnecessary traffic.
- **Reduced Network Congestion**:
  - Switches segment traffic to minimize broadcast and collision domains.
- **Scalability**:
  - Layer 2 switches allow for seamless network expansion by connecting multiple devices.
- **Hosts in Layer 2 Networks**:
  - Examples of hosts include:
    - PCs (e.g., Windows or Mac computers).
    - IoT devices (e.g., smart thermostats, printers).
    - Smartphones or tablets.
  - Hosts are key components in Layer 2 networks, acting as endpoints that exchange data.

---

## Additional Concepts

- **Physical Ports**: Modern switches feature Ethernet and SFP ports for connectivity. For more, see [Switches and Connectors](./switches_and_connectors.md).
- **Virtual Switches**: Found in environments like VMware vSphere, virtual switches extend switching to virtualized systems. Details in [Switches and Connectors](./switches_and_connectors.md).

---
## Basics of Switching
---  

- **Frames and Layer 2 Headers**:
  - Layer 2 switches process data as **frames**, which contain the **MAC addresses** of the source and destination.
- **How Switches Operate**:
  1. **Learning**:
     - Switches learn MAC addresses from incoming frames and store them in the MAC address table.
  2. **Forwarding**:
     - Frames are forwarded only to the port associated with the destination MAC address.
  3. **Flooding**:
     - When the destination MAC address is unknown, the switch floods the frame to all ports except the source.

## Collision and Broadcast Domains
- **Collision Domains**:
  - Each switch port represents a separate collision domain, reducing the likelihood of data collisions compared to hubs.
- **Broadcast Domains**:
  - Switches operate within a single broadcast domain unless VLANs are implemented.

## Limitations of Layer 2 Switching
- **No IP-Based Routing**:
  - Layer 2 switches cannot route traffic between networks (requires Layer 3 functionality).
- **Broadcast Storms**:
  - Unmanaged broadcast traffic can overwhelm the network if not controlled using VLANs or other methods.
