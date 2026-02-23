# L2 Concepts & Architecture

---

## Layer 2 Concepts

---

### MAC Address

- A unique hardware identifier assigned to a device’s Network Interface Card (NIC).
- Used by switches to make forwarding decisions.

---

### Frame

- A Layer 2 data unit.
- Contains:
  - Source MAC address
  - Destination MAC address
  - Payload
  - Error-checking fields

---

### Collision Domain

- A network segment where multiple devices could attempt to transmit simultaneously.
- In modern switched networks:
  - Each switch port represents its own collision domain.

---

### Broadcast Domain

- A network segment where broadcast traffic is received by all devices.
- Without VLANs:
  - A switch operates within a single broadcast domain.

---

## Switches and Internal Architecture

---

### Switch

- A Layer 2 device that forwards frames based on MAC addresses.
- Learns addresses dynamically.
- Reduces collisions by segmenting traffic per port.

---

### Switch Fabric

- The internal switching architecture.
- Enables simultaneous frame forwarding between multiple ports.
- Determines overall throughput and performance capabilities.

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/glossary/networking/switching/hosts-and-ports">← Back</a>
    <div class="xrefTitle">Glossary - Switching - Hosts & Ports</div>
  </div>

  <!-- <div class="xrefItem">
    <a class="xrefBtn" href="">Next →</a>
    <div class="xrefTitle"></div>
  </div> -->
</div>