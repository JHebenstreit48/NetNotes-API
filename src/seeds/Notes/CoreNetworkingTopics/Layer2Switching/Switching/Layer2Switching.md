# Switching Basics

## Physical Ports on a Layer 2 Switch
---  

- Layer 2 switches feature a variety of physical ports:
  - **Ethernet Ports**, **LAN Ports**, **Switch Ports**, and **RJ-45 Ports** are common terms used for these ports.
  - For detailed descriptions of these terms, refer to:  
  [Switching Glossary](/corenetworking/l2switching/switching/glossary).
- These ports connect devices (hosts) and enable communication between switches, routers, and other network components.

## Practical Example Setup
- **Switch to Router Connection**:
  - In a possible setup, the **g 0/0** port on the switch is connected to the **g 0/0** port on the router (referred to as **Router 1** or **R1**).
  - This connection allows traffic to flow between the local network (handled by the switch) and external networks (managed by the router).
- **Connecting Hosts to the Switch**:
  - Devices such as PCs or Macs (hosts) can be connected to the switch via **patch cables**.
  - Example:
    - PC #1 connected to **g 0/1**.
    - PC #2 connected to **g 0/2**.
    - Each host is identified by its **MAC address** (Layer 2) and **IP address** (Layer 3).

## Port Naming and Numbering
- Example: **GigabitEthernet0/1**, where:
  - **GigabitEthernet** indicates the port’s speed and type.
  - **0/1** is the unique port number.
- **Port Names Reflect Speed and Type**:
  - **FastEthernet0/1**:
    - Supports speeds up to **100 Mbps**.
  - **GigabitEthernet0/1**:
    - Supports speeds up to **1 Gbps (Gigabit)**.
  - **TenGigabitEthernet0/1**:
    - Supports speeds up to **10 Gbps**.
- **Purpose of Naming**:
  - **Ease of Identification**: Quickly identify a port’s capabilities.
  - **Consistency**: Standardized naming conventions across switch models.
  - **Logical Grouping**: Groups ports with similar speeds/types for easier management.

## Special Cases in Port Numbering
- **When the Number After the Slash Starts with 0**:
  - **High-Density Modular Switches**:
    - Some modular switches use 0 for the first port on certain line cards or modules to align with internal architecture.
  - **Internal or Backplane Ports**:
    - Ports used for internal communication between modules (e.g., backplane ports) may start at 0.
  - **Legacy Compatibility**:
    - Older switches or specialized designs may use 0 to align with legacy conventions.
- **Why Most Switch Ports Start at 1**:
  - User-facing ports generally start at 1 to provide clear, intuitive numbering for configurations like VLANs or spanning tree protocols.
