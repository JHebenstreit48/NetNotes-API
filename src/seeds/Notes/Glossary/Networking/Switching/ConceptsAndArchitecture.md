# Glossary - Switching - L2 Concepts & Architecture
<hr class="dividerSection" />

## Layer 2 Concepts

<hr class="dividerSection" />

### MAC Address
<hr class="dividerSubsection1" />

- A unique hardware identifier assigned to a device’s Network Interface Card (NIC).
- Used by switches to learn device locations and make forwarding decisions.

### Frame
<hr class="dividerSubsection1" />

- The Layer 2 data unit used on Ethernet networks.

Contains:

- Source <span class="codeSnip">MAC</span>
- Destination <span class="codeSnip">MAC</span>
- Payload
- Error-checking fields (for example <span class="codeSnip">FCS</span>)

### Collision Domain
<hr class="dividerSubsection1" />

- A network segment where simultaneous transmissions can collide.

In modern switched Ethernet:

- Each switch port is typically its own collision domain.

### Broadcast Domain
<hr class="dividerSubsection1" />

- A network segment where broadcast traffic is received by all devices.

Without VLANs:

- A switch typically operates as a single broadcast domain.

<hr class="dividerSection" />

## Switches and Internal Architecture

<hr class="dividerSection" />

### Switch
<hr class="dividerSubsection1" />

- A Layer 2 device that forwards frames using MAC address learning.

Core behavior includes:

- Learning source MAC addresses per port
- Building a MAC address table
- Forwarding frames based on destination MAC lookup
- Flooding unknown and broadcast frames

Switches reduce collisions by segmenting traffic per port.

### Switch Fabric
<hr class="dividerSubsection1" />

- The internal switching architecture that enables simultaneous forwarding between ports.
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