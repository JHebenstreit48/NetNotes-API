# De-encapsulation

<hr class="dividerSection" />

### What Is De-encapsulation?

<hr class="dividerSection" />

De-encapsulation is the reverse process of encapsulation. It occurs when data is <span class="emphasis">received</span> and must be reconstructed for the application.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Starts at the <span class="emphasis">Physical Layer</span> and moves upward.</li>
    <li>Each layer removes its header/trailer, leaving the payload for the next layer.</li>
    <li>Ends at the <span class="emphasis">Application Layer</span>, where the original data is presented.</li>
  </ul>
</div>

<hr class="dividerSection" />

### De-encapsulation Flow (Receive Path)

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Physical Layer</span> → receives raw bits, converts to frames</li>
    <li><span class="emphasis">Data Link Layer</span> → validates FCS, strips MAC info</li>
    <li><span class="emphasis">Internet Layer</span> → checks IP header, TTL, forwards payload</li>
    <li><span class="emphasis">Transport Layer</span> → reassembles segments, checks ports</li>
    <li><span class="emphasis">Application Layer</span> → presents usable data to the service</li>
  </ul>
</div>

<hr class="dividerSection" />

## De-encapsulation at Routers (Remote Networks)

<hr class="dividerSection" />

For packets destined to remote networks, routers perform de-encapsulation and re-encapsulation.

<div class="centeredNumberedList">

1. Router receives frame on incoming interface

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>De-encapsulates Layer 2 frame (removes MAC header/trailer).</li>
    <li>Examines Layer 3 IP packet (destination IP).</li>
  </ul>
</div>

2. Determines next-hop

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Uses routing table to find outgoing interface.</li>
  </ul>
</div>

3. Re-encapsulates

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Encapsulates IP packet in new Layer 2 frame for outgoing interface.</li>
    <li>New source MAC: Router's outgoing interface MAC.</li>
    <li>New destination MAC: Next-hop device's MAC (or final host if last hop).</li>
  </ul>
</div>

4. Forwards frame

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>MAC addresses change hop-by-hop; IP addresses remain constant end-to-end.</li>
  </ul>
</div>

</div>

Example (remote path):

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Link</th>
      <th class="tableCellHeader">Destination MAC</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">PC1 to R1</td>
      <td class="tableCell">bb-bb-bb (R1 G0/0/0)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">R1 to R2</td>
      <td class="tableCell">dd-dd-dd (R2 G0/0/1)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">R2 to PC2</td>
      <td class="tableCell">55-55-55 (PC2)</td>
    </tr>
  </tbody>
</table>

Source IPv4: 192.168.10.10 (PC1)  
Destination IPv4: 10.1.1.10 (PC2) — unchanged.

<div class="xrefBox">
  <span class="emphasis">See:</span>
    <a href="/tcpip-model/layers/network-access/basics/data-link/frames-and-addressing/mac-addressing">
    Data Link - Frames & Addressing - MAC Addressing (hop-by-hop MAC change)
    </a>
</div>

<hr class="dividerSection" />

### Common Pitfalls in De-encapsulation

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">MTU mismatch</span> → fragmentation or dropped packets.</li>
    <li><span class="emphasis">Stale ARP cache</span> → wrong MAC resolution.</li>
    <li><span class="emphasis">Incorrect default gateway</span> → packets never leave subnet.</li>
    <li><span class="emphasis">Header corruption</span> → fails checksum, dropped at layer.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/network-access/basics/data-link/core-concepts/encapsulation">← Back</a>
    <div class="xrefTitle">Data Link - Core Concepts - Encapsulation</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/network-access/basics/data-link/core-concepts/arp">Next →</a>
    <div class="xrefTitle">Data Link - Core Concepts - Address Resolution Protocol (ARP)</div>
  </div>
</div>