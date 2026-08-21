# Glossary - Network Access - Data Link - Core Concepts

<hr class="dividerSection" />

### Data Link Layer (Layer 2)

<hr class="dividerSubsection1" />

The layer responsible for delivering frames between devices on the same local network, using MAC addresses for identification.

Handles framing, addressing, error detection, and flow control, all without requiring a router.

<hr class="dividerSubsection1" />

### Hop

<hr class="dividerSubsection1" />

One step in the path between two devices, from one router or host to the next.

Switches do not count as hops, they extend the local network rather than representing a distinct step.

<hr class="dividerSubsection1" />

### Hop-to-Hop Delivery

<hr class="dividerSubsection1" />

The Layer 2 delivery model, where a frame is addressed only to the next device in the path, not the final destination.

The MAC address changes at every hop, while the IP address stays the same for the entire journey.

<hr class="dividerSubsection1" />

### Encapsulation

<hr class="dividerSubsection1" />

The process of wrapping data with each layer's own header, and sometimes trailer, as it moves down the stack from Application to Physical, so it can be properly delivered and interpreted at the destination.

<hr class="dividerSubsection1" />

### De-encapsulation

<hr class="dividerSubsection1" />

The reverse of encapsulation, occurring on receipt. Each layer strips its own header/trailer moving from Physical up to Application, until the original data is presented to the receiving application (Also called decapsulation).

Routers perform de-encapsulation and re-encapsulation for traffic crossing to a different network, MAC addresses change hop-by-hop while IP addresses stay constant end-to-end.

<hr class="dividerSubsection1" />

### PDU (Protocol Data Unit)

<hr class="dividerSubsection1" />

General term for a unit of data at a given layer, meaning the data plus that layer's own header (and sometimes trailer).

Each layer's PDU has its own name, defined below.

<hr class="dividerSubsection1" />

### Data

<hr class="dividerSubsection1" />

The Application layer PDU. Raw application content with no transport, network, or link-layer header added yet.

<hr class="dividerSubsection1" />

### Segment / Datagram

<hr class="dividerSubsection1" />

The Transport layer PDU. Data combined with a Layer 4 header.

Called a <span class="emphasis">segment</span> when using TCP, or a <span class="emphasis">datagram</span> when using UDP.

<hr class="dividerSubsection1" />

### Packet

<hr class="dividerSubsection1" />

The Internet layer PDU. A segment or datagram combined with a Layer 3 header, adding logical (IP) addressing.

<hr class="dividerSubsection1" />

### Frame

<hr class="dividerSubsection1" />

The Data Link layer PDU. A packet combined with a Layer 2 header and trailer.

The form actually transmitted over the wire, no PDU above it travels on its own.

<hr class="dividerSubsection1" />

### ARP (Address Resolution Protocol)

<hr class="dividerSubsection1" />

Maps a known IP address (Layer 3) to its corresponding MAC address (Layer 2), using a broadcast request and unicast reply, so a frame can be delivered to the correct device on the local network.

Often described as the Layer 2 equivalent of DNS.

<hr class="dividerSection" />

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/data-link/core-concepts/introduction" target="_blank" rel="noopener noreferrer">Data Link → Core Concepts → Introduction</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/data-link/core-concepts/encapsulation" target="_blank" rel="noopener noreferrer">Data Link → Core Concepts → Encapsulation</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/data-link/core-concepts/de-encapsulation" target="_blank" rel="noopener noreferrer">Data Link → Core Concepts → De-encapsulation</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/data-link/core-concepts/arp" target="_blank" rel="noopener noreferrer">Data Link → Core Concepts → ARP</a>
</div>

<hr class="dividerSection" />