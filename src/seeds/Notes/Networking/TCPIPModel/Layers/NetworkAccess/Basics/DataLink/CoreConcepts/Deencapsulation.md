### What Is De-encapsulation?
---

De-encapsulation is the reverse process of encapsulation. It occurs when data is <span class="emphasis">received</span> and must be reconstructed for the application.

🔹 Starts at the <span class="emphasis">Physical Layer</span> and moves upward.
🔹 Each layer removes its header/trailer, leaving the payload for the next layer.
🔹 Ends at the <span class="emphasis">Application Layer</span>, where the original data is presented.

---

### De-encapsulation Flow (Receive Path)

---

<div class="fullWidthBullet">

🔹 <span class="emphasis">Physical Layer</span> → receives raw bits, converts to frames  
🔹 <span class="emphasis">Data Link Layer</span> → validates FCS, strips MAC info  
🔹 <span class="emphasis">Internet Layer</span> → checks IP header, TTL, forwards payload  
🔹 <span class="emphasis">Transport Layer</span> → reassembles segments, checks ports  
🔹 <span class="emphasis">Application Layer</span> → presents usable data to the service

</div>

---

### Common Pitfalls in De-encapsulation

---

🔹 <span class="emphasis">MTU mismatch</span> → fragmentation or dropped packets.
🔹 <span class="emphasis">Stale ARP cache</span> → wrong MAC resolution.
🔹 <span class="emphasis">Incorrect default gateway</span> → packets never leave subnet.
🔹 <span class="emphasis">Header corruption</span> → fails checksum, dropped at layer.

---

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