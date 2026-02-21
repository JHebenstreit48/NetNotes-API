# Introduction

---

### Ethernet Twisted Pair Cabling

---

Most wired Ethernet networks use <span class="emphasis">twisted-pair copper cabling</span>.

This cabling is categorized using a <span class="emphasis">Category (Cat)</span> rating, which defines performance characteristics such as:

- Supported signaling frequency
- Crosstalk tolerance
- Distance limitations
- Typical Ethernet speeds

Category ratings define electrical performance standards — not the Ethernet protocol itself.

---

### Why the Wires Are Twisted

---

Ethernet twisted-pair cable contains:

- <span class="emphasis">4 wire pairs</span>
- Each pair twisted at specific intervals

Twisting reduces:

- Electromagnetic interference (EMI)
- Crosstalk between pairs
- Signal distortion

This improves reliability over distance.

---

### UTP vs STP

---

<table>
  <tr>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>UTP (Unshielded Twisted Pair)</td>
    <td>Most common in homes and offices; no additional shielding</td>
  </tr>
  <tr>
    <td>STP (Shielded Twisted Pair)</td>
    <td>Includes shielding to reduce EMI in electrically noisy environments</td>
  </tr>
</table>

Most residential installations use UTP.

---

### Common Cable Categories

---

<table>
  <tr>
    <th>Category</th>
    <th>Common Use</th>
  </tr>
  <tr>
    <td>Cat5e</td>
    <td>Reliable for 1 Gbps at standard Ethernet distances</td>
  </tr>
  <tr>
    <td>Cat6</td>
    <td>Improved crosstalk performance; common in modern installs</td>
  </tr>
  <tr>
    <td>Cat6a</td>
    <td>Better performance at higher frequencies; used for higher-speed structured cabling</td>
  </tr>
  <tr>
    <td>Cat8</td>
    <td>High-speed short-run copper used in specialized environments</td>
  </tr>
</table>

Cable category influences maximum reliable speed over standard Ethernet distances (commonly up to 100 meters).

---

### Patch Cables vs Structured Cabling

---

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

---

### When Wired Connections Are Preferred

---

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
    <div class="xrefTitle">Previous Section: Physical → Transmission → Data Transmission Methods</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/network-access/basics/physical/cabling-and-interfaces/copper-connectors">Next →</a>
    <div class="xrefTitle">Physical → Cabling & Interfaces → Copper Connectors</div>
  </div>
</div>