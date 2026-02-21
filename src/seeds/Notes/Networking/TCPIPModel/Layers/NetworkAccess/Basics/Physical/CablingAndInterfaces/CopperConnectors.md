# Switches and Connectors

---
## Introduction
---

This document provides an in-depth look at the various ports and connectors used in Layer 2 switches, including physical ports, SFP ports, Ethernet cable categories, and fiber optic connectors.

---
## Networking Switches Categorized by Size and Complexity
---

1. **Small Switches**:
   - Typically compact with a smaller number of ports (e.g., 4 to 12 ports, often around 8 ports).
   - Designed for SOHO setups or environments with minimal network requirements.
   - Do not include advanced interconnection or management features.
   - Example: Desktop switches or unmanaged switches.

2. **Medium-Sized Switches**:
   - Port count typically ranges from 12 to 48 ports.
   - Commonly found in access layers of networks for medium-sized businesses or departments.
   - Often rack-mountable and may include managed capabilities.
   - May support stacking to expand logical port capacity.

3. **Large Switches**:
   - Includes switches with higher port densities:
     - **Standalone large switches**: Port counts often exceed 48 ports, going up to 96 ports or more in a single unit.
     - Typically used in larger networks, such as distribution or core layers of enterprise networks.

4. **Port Expansion Through Stacking**:
   - **Stackable Switches**:
     - Multiple switches can be physically interconnected to act as a single logical unit.
     - Example: Stacking eight 48-port switches results in a **384-port "logical" switch**, providing scalability while maintaining operational simplicity.

5. **Port Expansion Through Modular/Chassis-Based Design**:
   - **Modular/Chassis-Based Switches**:
     - The most scalable and complex option.
     - Allows additional rows of ports by adding **line cards or blades**, with each card offering multiple ports.
     - Total port counts can easily exceed **1000 ports**, making them ideal for large-scale enterprise environments, data centers, or ISPs.
     - Designed for environments where flexibility, scalability, and high performance are required.

---
## SFP Ports and Fiber Optic Connectivity
---

### Overview
---

- **SFP (Small Form-factor Pluggable)** ports support:
  - **RJ45 connectors**: For copper Ethernet connections.
  - **Fiber optic connectors**: For high-speed networking.
  - **Copper connectors**: For specialized high-performance applications.

### Types of SFP Modules
---

- **Standard SFP**: Supports data rates up to **1 Gbps**.
- **SFP+**: Supports data rates up to **10 Gbps**.

### Fiber Optic Connectors
---

- **LC Connector**:
  - **Stands for**: Lucent Connector.
  - **Design**: A small form factor connector, ideal for high-density applications.
- **SC Connector**:
  - **Stands for**: Subscriber Connector or Standard Connector.
  - **Design**: A larger connector with a push-pull mechanism for reliable use.
- **Adapters**:
  - Fiber optic cables may require adapters to connect to SFP ports.

### Connection Considerations
---

- Always check the switch documentation to determine whether the SFP module should be inserted or removed while powered on or off, as procedures may vary.

---
## Patch Cables
---

### Overview
---

- **Patch Cable**: A short cable used to connect devices, such as a computer to a switch or a switch to a patch panel.

### Types of Patch Cables
---

- **Standard Patch Cable**:
  - **RJ45 connector**: The 8P8C connector used for Ethernet connections.
  - **Unshielded Twisted Pair (UTP)**: Most common for Ethernet networks due to cost-effectiveness and sufficient performance for typical environments.
- **Shielded Twisted Pair (STP)**:
  - Used in environments with significant electromagnetic interference (EMI).
  - Features additional shielding (e.g., foil or braiding) around the twisted pairs to reduce interference.

---
## Ethernet Cable Categories and Specifications
---

### Introduction to Ethernet Cables
- The **plastic coating** on Ethernet cables is for protection and does not impact performance.
- The **cable specifications** determine the ability to handle different speeds and performance levels.

### Cable Categories
1. **Category 5 (Cat5)**: Up to 100 Mbps.
2. **Category 5e (Cat5e)**: Up to 1 Gbps.
3. **Category 6 (Cat6)**: Up to 10 Gbps (short distances).
4. **Category 6a (Cat6a)**: Up to 10 Gbps (longer distances).
5. **Category 7 (Cat7)**: Up to 10 Gbps with shielding.
6. **Category 7a (Cat7a)**: Improved shielding, still up to 10 Gbps.
7. **Category 8 (Cat8)**: Up to 25 or 40 Gbps for short distances.

---
## Virtual Switches and Networking
---

### Definition
- A **virtual switch** is a software-based switch that facilitates communication between virtual machines (VMs) and between VMs and the physical network.

### Where They Are Used
- Found in **VMware vSphere**, a virtualization platform for managing virtual machines and their networking.

### Purpose
- Virtual switches provide similar functionality to physical switches but operate in a virtualized environment.
- They allow traffic between:
  - Virtual machines on the same host.
  - Virtual machines and the physical network through the host's physical network adapters.

### Types of Virtual Switches in vSphere
1. **Standard Switch (vSS)**:
   - Basic switch for managing VM network connections on individual hosts.
2. **Distributed Switch (vDS)**:
   - Centralized switch for managing networking across multiple hosts in a vSphere environment.

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/switching/basics/fundamentals/mac-address-table">← Back</a>
    <div class="xrefTitle">Previous Section: Switching Fundamentals → MAC Address Table</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/switching/basics/hardware-and-port-types/ethernet-speed-history">Next →</a>
    <div class="xrefTitle">Hardware & Port Types → Ethernet Speed History</div>
  </div>
</div>