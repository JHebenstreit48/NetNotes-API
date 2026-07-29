# Straight-Through vs Crossover Cables

<hr class="dividerSection" />

Ethernet devices transmit and receive data on specific pin pairs within an RJ-45 connector.

Whether two devices can communicate over a UTP cable depends on which pins each device uses to transmit versus receive, and how the cable itself is wired between the two ends.

<hr class="dividerSection" />

### Device Transmit and Receive Behavior

<hr class="dividerSection" />

At 10BASE-T and 100BASE-T speeds, two wire pairs are used: pins 1 and 2, and pins 3 and 6.

Which pins a device transmits versus receives on depends on the device type.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Device Type</th>
      <th class="tableCellHeader">Transmit / Receive Pins</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">PC (NIC)</td>
      <td class="tableCell">Transmit: 1, 2. Receive: 3, 6</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Router</td>
      <td class="tableCell">Transmit: 3, 6. Receive: 1, 2</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Firewall</td>
      <td class="tableCell">Transmit: 1, 2. Receive: 3, 6</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Switch</td>
      <td class="tableCell">Transmit: 3, 6. Receive: 1, 2</td>
    </tr>
  </tbody>
</table>

Because devices use separate pairs for transmitting and receiving, <span class="emphasis">Full-Duplex</span> transmission is possible, meaning both devices can send data at the same time without collisions.

<hr class="dividerSection" />

### Straight-Through Cables

<hr class="dividerSection" />

A straight-through cable uses the <span class="emphasis">same wiring standard on both ends</span>, meaning each pin connects to the same pin number on the opposite end (pin 1 to pin 1, pin 2 to pin 2, and so on).

Examples of the same wiring standard on both ends:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>T568A to T568A</li>
    <li>T568B to T568B</li>
  </ul>
</div>

Used when connecting <span class="emphasis">dissimilar devices</span>:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>PC to Switch</li>
    <li>Router to Switch</li>
    <li>PC to Router</li>
  </ul>
</div>

<hr class="dividerSection" />

### Crossover Cables

<hr class="dividerSection" />

A crossover cable uses <span class="emphasis">different wiring standards on each end</span>, for example T568A on one end and T568B on the other.

This reverses the pairs between ends, so pin 1 connects to pin 3, and pin 2 connects to pin 6.

Used when connecting <span class="emphasis">similar devices</span> directly:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>PC to PC</li>
    <li>Switch to Switch (older equipment)</li>
    <li>Router to Router</li>
  </ul>
</div>

<hr class="dividerSection" />

### Higher-Speed Standards (1000BASE-T and 10GBASE-T)

<hr class="dividerSection" />

Gigabit Ethernet and 10 Gigabit Ethernet (1000BASE-T and 10GBASE-T) use all 4 wire pairs, adding pairs 4/5 and 7/8 to the pairs used at lower speeds.

Unlike 10BASE-T and 100BASE-T, each pair in these standards is <span class="emphasis">bidirectional</span>, meaning a pair is not fixed to only transmitting or only receiving.

This is part of what allows these standards to reach higher speeds.

<hr class="dividerSection" />

### Auto MDI-X

<hr class="dividerSection" />

Most modern networking devices include a feature called <span class="emphasis">Auto MDI-X</span>, which removes the need to worry about straight-through versus crossover cables in most situations.

Auto MDI-X allows a device to automatically detect which pins its neighbor is transmitting on, then adjust its own transmit and receive pins to match, allowing normal communication regardless of which cable type is used.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Without Auto MDI-X, connecting two similar devices (such as switch to switch) with a straight-through cable results in no communication</li>
    <li>With Auto MDI-X, the same connection works normally regardless of cable type</li>
  </ul>
</div>

On older equipment without Auto MDI-X support, using the correct cable type is still necessary.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/network-access/basics/physical/wiring-standards/t568a-vs-t568b">← Back</a>
    <div class="xrefTitle">Physical - Wiring Standards - T568A vs T568B</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/network-access/basics/physical/wiring-standards/terminating-ethernet">Next →</a>
    <div class="xrefTitle">Physical - Wiring Standards - Terminating Ethernet (Crimp & Punchdown)</div>
  </div>
</div>