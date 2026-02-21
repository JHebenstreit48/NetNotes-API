
# Ethernet Twisted Pair Cabling
---

Most wired Ethernet networks use <span class="emphasis">twisted-pair copper cabling</span>.

This cabling is categorized using a <span class="emphasis">Category (Cat)</span> rating, which defines performance characteristics such as:

- Supported signaling frequency
- Crosstalk tolerance
- Distance limitations
- Typical Ethernet speeds

Category ratings define electrical performance standards — not the Ethernet protocol itself.

<hr class="dividerSection">

## Cable Construction

<hr class="dividerSection">

<hr class="dividerSubsection1">

### Why the Wires Are Twisted

<hr class="dividerSubsection1">


Ethernet twisted-pair cable contains:

- <span class="emphasis">4 wire pairs</span>
- Each pair twisted at specific intervals

Twisting reduces:

- Electromagnetic interference (EMI)
- Crosstalk between pairs
- Signal distortion

This improves reliability over distance.

<hr class="dividerSubsection1">

### UTP vs STP

<hr class="dividerSubsection1">

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Type</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">UTP (Unshielded Twisted Pair)</td>
      <td class="tableCell">Most common in homes and offices; no additional shielding</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">STP (Shielded Twisted Pair)</td>
      <td class="tableCell">Includes shielding to reduce EMI in electrically noisy environments</td>
    </tr>
  </tbody>
</table>

Most residential installations use UTP.

<hr class="dividerSection">

## Common Cable Categories

<hr class="dividerSection">

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Category</th>
      <th class="tableCellHeader">Common Use</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Cat5e</td>
      <td class="tableCell">Reliable for 1 Gbps at standard Ethernet distances</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Cat6</td>
      <td class="tableCell">Improved crosstalk performance; common in modern installs</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Cat6a</td>
      <td class="tableCell">Better performance at higher frequencies; used for higher-speed structured cabling</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Cat8</td>
      <td class="tableCell">High-speed short-run copper used in specialized environments</td>
    </tr>
  </tbody>
</table>

Cable category influences maximum reliable speed over standard Ethernet distances (commonly up to 100 meters).

<hr class="dividerSection">

## Patch Cables vs Structured Cabling

<hr class="dividerSection">

A <span class="emphasis">patch cable</span> is a short, pre-terminated Ethernet cable used to connect devices.

Examples:

- PC → Switch
- Switch → Router
- Switch → Patch panel

<div class="xrefBox">
  <span class="emphasis">Definition:</span>
  <a href="/switching/basics/glossary/hosts-and-ports">
    See Glossary → Patch Cable
  </a>
</div>

In contrast, structured cabling refers to permanent in-wall installations terminated at:

- Wall jacks
- Patch panels

<hr class="dividerSubsection1">

### When Wired Connections Are Preferred

<hr class="dividerSubsection1">

Even in wireless homes, wired Ethernet is commonly used for:

- Gaming consoles
- Smart TVs
- Desktop PCs
- Network storage devices

Wired links provide:

- Lower latency
- More consistent throughput
- Reduced wireless congestion

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/network-access/basics/physical/transmission/data-transmission-methods">← Back</a>
    <div class="xrefTitle">Previous Section: Physical - Transmission - Transmission Methods</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/network-access/basics/physical/cabling-and-interfaces/copper-connectors">Next →</a>
    <div class="xrefTitle">Physical - Cabling & Interfaces - Copper Connectors</div>
  </div>
</div>