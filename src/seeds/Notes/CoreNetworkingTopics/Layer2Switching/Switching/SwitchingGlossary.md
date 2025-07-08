## Hosts and Devices
---  

### Host
- Any device connected to a network that sends or receives data.
- Examples: PCs, Macs, smartphones, IoT devices.

### Patch Cable
- A short Ethernet cable used to connect:
  - A switch to a router.
  - A host (e.g., PC) to a switch.
- Examples include **Cat5e**, **Cat6**, or **Cat6a** cables.

## Ports and Connections
---

<br>

### Router Port Naming
- Similar to switch port naming, routers use a naming convention like **GigabitEthernet0/0**, indicating the port's speed, type, and position.

### Ethernet Ports
- General term for ports on switches or routers used to connect devices using Ethernet communication standards.

### LAN Ports
- Ports designed specifically for connecting devices within a Local Area Network (LAN).

### RJ-45 Ports
- Refers to the physical connector type most commonly used in Ethernet networks.
- These ports support Cat5e, Cat6, and Cat6a cables.  

### SFP (Small Form-factor Pluggable)
- A port or module supporting connections via RJ45, fiber optic, or copper cables.
- Types:
  - **Standard SFP**: Supports up to 1 Gbps.
  - **SFP+**: Supports up to 10 Gbps.

### LC Connector
- **Lucent Connector**, a small form factor fiber optic connector used in high-density setups.

### SC Connector
- **Subscriber Connector**, a larger fiber optic connector with a push-pull design.

### Switch Ports
- A generic term for any port on a switch, often used when the specific type or speed of the port is not relevant.

### Access Ports
- Ports configured to handle traffic from a single device or network segment (not VLAN-specific in this context).  

### Console Ports
- A port on Layer 2 switches used for direct configuration.
- Common connector types:
  - **RJ45**: Most common.
  - **USB** (e.g., USB-A, USB-C): Found on newer devices.

---

## Layer 2 Concepts  
---  

### MAC Address
- A unique identifier assigned to a device's network interface card (NIC), used for communication at Layer 2.

### Frame
- A data unit at Layer 2 that contains source and destination MAC addresses, along with payload data.

### Collision Domain
- A network segment where data collisions can occur if multiple devices attempt to send data simultaneously.

### Broadcast Domain
- A network segment where all devices receive broadcast messages unless Layer 3 segmentation is applied.

## Switches and Internal Architecture  
---

### Switch
- A Layer 2 device that forwards frames based on MAC addresses and reduces collisions by creating separate collision domains for each port.

### Switch Fabric
- The internal architecture of a switch that enables efficient forwarding of data between ports.
