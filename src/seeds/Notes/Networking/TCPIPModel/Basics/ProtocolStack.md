
# Introduction

---

### Understanding the Protocol Stack

<hr class="dividerSection" />

A <span class="emphasis">protocol stack</span> refers to multiple protocols operating together across different layers of the TCP/IP Model to deliver a complete communication.

A single network message typically uses one protocol per layer.

Each protocol performs a distinct responsibility.

Together, they form a structured stack.

<hr class="dividerSection" />

### Example: Ethernet → IP → TCP → HTTP

<hr class="dividerSection" />

Consider a simple web request.

It may involve:

- <span class="emphasis">Network Access:</span> Ethernet (or Wi-Fi)  
- <span class="emphasis">Internet:</span> IP (IPv4 or IPv6)  
- <span class="emphasis">Transport:</span> TCP  
- <span class="emphasis">Application:</span> HTTP  

Each protocol contributes something specific:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Layer</th>
      <th class="tableCellHeader">What It Contributes</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Application</td>
      <td class="tableCell">Defines the service being requested (e.g., retrieving a webpage).</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Transport</td>
      <td class="tableCell">Ensures end-to-end communication behavior between source and destination.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Internet</td>
      <td class="tableCell">Handles logical addressing and routing across networks.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Network Access</td>
      <td class="tableCell">Delivers the frame across the local physical network segment.</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

### Local Delivery vs. Routed Delivery

<hr class="dividerSection" />

When you hear:

“Ethernet governs NIC-to-NIC communication”

This refers to communication on the same local network segment.

- Ethernet and Wi-Fi operate at the Network Access layer.
- They move frames between devices on the same link.
- They do not determine routing across multiple networks.

When traffic must cross network boundaries:

- The <span class="emphasis">Internet layer</span> (IP) determines addressing and routing.
- Routers examine IP information to forward traffic appropriately.

<hr class="dividerSection" />

### Layer Interaction

<hr class="dividerSection" />

A layered model depicts:

- Protocol operations within each layer
- Interaction between adjacent layers
- Defined interfaces above and below each layer

Each layer depends on the services of the layer beneath it while providing services to the layer above it.

This structured interaction is what allows complex communication to function reliably at scale.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/basics/fundamentals/introduction">← Back</a>
    <div class="xrefTitle">Section: TCP/IP Model - Basics - Fundamentals - Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/basics/introduction">Next →</a>
    <div class="xrefTitle">Section: TCP/IP Model - Layers - Application - Introduction</div>
  </div>
</div>