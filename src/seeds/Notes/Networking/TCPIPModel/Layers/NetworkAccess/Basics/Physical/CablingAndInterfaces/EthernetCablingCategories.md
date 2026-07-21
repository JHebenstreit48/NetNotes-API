# Ethernet Twisted Pair Cabling

<hr class="dividerSection" />

Most wired Ethernet networks use <span class="emphasis">twisted-pair copper cabling</span>.

Because Ethernet is the foundation of most local area networks (LANs), twisted-pair cabling is the most commonly deployed network medium, particularly for connecting PC workstations and other end devices in an office or home LAN.

This cabling is categorized using a <span class="emphasis">Category (Cat)</span> rating, which defines performance characteristics such as:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Supported signaling frequency</li>
    <li>Crosstalk tolerance</li>
    <li>Distance limitations</li>
    <li>Typical Ethernet speeds</li>
  </ul>
</div>

Category ratings define electrical performance standards, not the Ethernet protocol itself.

<hr class="dividerSection" />

## Cable Construction

<hr class="dividerSection" />

<hr class="dividerSubsection1" />

### Why the Wires Are Twisted

<hr class="dividerSubsection1" />

Ethernet twisted-pair cable contains:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">4 wire pairs</span></li>
    <li>Each pair twisted at specific intervals</li>
  </ul>
</div>

Twisting reduces:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Electromagnetic interference (EMI)</li>
    <li>Crosstalk between pairs</li>
    <li>Signal distortion</li>
  </ul>
</div>

This improves reliability over distance.

<hr class="dividerSubsection1" />

### UTP vs STP

<hr class="dividerSubsection1" />

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

<hr class="dividerSection" />

## Common Cable Categories

<hr class="dividerSection" />

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

<hr class="dividerSection" />

## Patch Cables vs Structured Cabling

<hr class="dividerSection" />

A <span class="emphasis">patch cable</span> is a short, pre-terminated Ethernet cable used to connect devices.

Examples:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>PC to Switch</li>
    <li>Switch to Router</li>
    <li>Switch to Patch panel</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">Definition:</span>
  <a href="/switching/basics/glossary/hosts-and-ports" target="_blank" rel="noopener noreferrer">See Glossary → Patch Cable</a>
</div>

In contrast, structured cabling refers to permanent in-wall installations terminated at:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Wall jacks</li>
    <li>Patch panels</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### When Wired Connections Are Preferred

<hr class="dividerSubsection1" />

Even in wireless homes, wired Ethernet is commonly used for:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Gaming consoles</li>
    <li>Smart TVs</li>
    <li>Desktop PCs</li>
    <li>Network storage devices</li>
  </ul>
</div>

Wired links provide:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Lower latency</li>
    <li>More consistent throughput</li>
    <li>Reduced wireless congestion</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/network-access/basics/physical/transmission/data-transmission-methods">← Back</a>
    <div class="xrefTitle">Section: Physical - Transmission - Data Transmission Methods</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/network-access/basics/physical/cabling-and-interfaces/coaxial-cable">Next →</a>
    <div class="xrefTitle">Physical - Cabling & Interfaces - Coaxial Cable</div>
  </div>
</div>