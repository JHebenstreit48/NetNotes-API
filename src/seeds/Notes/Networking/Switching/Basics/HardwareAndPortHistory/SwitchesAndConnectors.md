# Introduction
---

Switches provide physical interfaces that allow devices to connect to a network.

This page focuses on:

- Switch hardware types
- Port density and scalability
- SFP ports and uplinks
- The role of physical connectivity in Layer 2 switching

For detailed cabling specifications, see:

- Physical → Cabling & Interfaces → Ethernet Cabling Categories
- Physical → Cabling & Interfaces → Copper Connectors
- Physical → Cabling & Interfaces → Fiber Connectors & Transceivers

---
## Networking Switches Categorized by Size and Complexity
---

### 1. Small Switches
---

- Typically compact with a smaller number of ports (e.g., 4 to 12 ports, often around 8 ports).
- Designed for SOHO setups or environments with minimal network requirements.
- Do not include advanced interconnection or management features.
- Example: Desktop switches or unmanaged switches.

### 2. Medium-Sized Switches
---
- Port count typically ranges from 12 to 48 ports.
- Commonly found in access layers of networks for medium-sized businesses or departments.
- Often rack-mountable.
- Usually include managed capabilities.
- May support stacking to expand logical port capacity.

---

### 3. Large Standalone Switches

- Port counts often exceed 48 ports, going up to 96 ports or more in a single unit.
- Typically used in larger networks such as distribution or core layers of enterprise environments.
- Designed for higher throughput and greater scalability.

---
## Port Expansion Methods
---

### 4. Port Expansion Through Stacking
---

- Stackable switches can be physically interconnected to act as a single logical unit.
- Example: Stacking eight 48-port switches results in a **384-port logical switch**.
- Provides scalability while maintaining centralized management.
- Reduces operational complexity compared to managing multiple independent switches.


### 5. Port Expansion Through Modular / Chassis-Based Design
---

- The most scalable and complex option.
- Allows additional rows of ports by adding line cards or blades.
- Each card provides multiple additional interfaces.
- Total port counts can exceed **1000+ ports**.
- Ideal for large-scale enterprise environments, data centers, or ISP networks.
- Designed for flexibility, high performance, and long-term growth.

---
## SFP Ports and Uplinks
---

Many enterprise switches include:

- RJ45 Ethernet ports (copper)
- SFP, SFP+, or SFP28 ports (fiber or copper modules)

### Common SFP Types
---

- **SFP** → Up to 1 Gbps
- **SFP+** → Up to 10 Gbps
- **SFP28** → 25 Gbps

SFP ports are commonly used for:

- Switch-to-switch uplinks
- Distribution-layer connections
- Fiber backbone links

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tcpip-model/layers/network-access/basics/physical/cabling-and-interfaces/fiber-connectors-and-transceivers">
    Physical → Cabling & Interfaces → Fiber Connectors & Transceivers
  </a>
</div>

---
## Copper vs Fiber Uplinks
---

Switch uplinks may use:

- Copper Ethernet (shorter distances)
- Fiber optic links (longer distances, higher bandwidth)

Fiber is commonly used in:

- Backbone connections
- Inter-building links
- Data centers

---
## Virtual Switching
---

Virtual switches exist inside hypervisors such as VMware vSphere.

They allow:

- VM-to-VM communication
- VM-to-physical network connectivity

Types:

- Standard Switch (vSS)
- Distributed Switch (vDS)

Virtual switches perform Layer 2 forwarding but operate entirely in software.

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/switching/basics/fundamentals/mac-address-table">← Back</a>
    <div class="xrefTitle">Section: Switching - Basics - Fundamentals - MAC Address Table</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/switching/basics/hardware-and-port-types/ethernet-speed-history">Next →</a>
    <div class="xrefTitle">Switching - Basics - Hardware & Port Types - Ethernet Speed History</div>
  </div>
</div>