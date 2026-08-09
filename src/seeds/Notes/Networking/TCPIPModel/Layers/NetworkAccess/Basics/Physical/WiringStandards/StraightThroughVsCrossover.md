# Straight-Through vs Crossover Cables

<hr class="dividerSection" />

Ethernet devices transmit and receive data on specific pin pairs within an RJ-45 connector.

Whether two devices can communicate over a UTP cable depends on which pins each device uses to transmit versus receive, and how the cable itself is wired between the two ends.

<hr class="dividerSection" />

## Device Transmit and Receive Behavior

<hr class="dividerSection" />

At <span class="emphasis">10BASE-T</span> and <span class="emphasis">100BASE-T</span> (<span class="secondEmphasis">Fast Ethernet</span>) speeds, <span class="emphasis">two wire pairs</span> are used: pins <span class="emphasis">1</span>/<span class="emphasis">2</span>, and <span class="emphasis">3</span>/<span class="emphasis">6</span>.

Which pins a device transmits versus receives on depends on the device type.

Because devices use separate pairs for transmitting and receiving, <span class="emphasis">Full-Duplex</span> transmission is possible, meaning both devices can send data at the same time without collisions.

<hr class="dividerSection" />

### Straight-Through Cables

<hr class="dividerSection" />

A straight-through cable uses the <span class="emphasis">same wiring standard on both ends</span>, meaning each pin connects to the same pin number on the opposite end (pin <span class="emphasis">1</span> to pin <span class="emphasis">1</span>, pin <span class="emphasis">2</span> to pin <span class="emphasis">2</span>, and so on).

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

This reverses the pairs between ends, so pin <span class="emphasis">1</span> connects to pin <span class="emphasis">3</span>, and pin <span class="emphasis">2</span> connects to pin <span class="emphasis">6</span>.

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

Gigabit Ethernet and 10 Gigabit Ethernet (<span class="emphasis">1000BASE-T</span> and <span class="emphasis">10GBASE-T</span>) use <span class="emphasis">all 4 wire pairs</span>, adding pairs <span class="emphasis">4</span>/<span class="emphasis">5</span> and <span class="emphasis">7</span>/<span class="emphasis">8</span> to the pairs used at lower speeds.  

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>This means all four pin pairs are used: <span class="emphasis">1</span>/<span class="emphasis">2</span>, <span class="emphasis">3</span>/<span class="emphasis">6</span>, <span class="emphasis">4</span>/<span class="emphasis">5</span>, and <span class="emphasis">7</span>/<span class="emphasis">8</span>.</li>
  </ul>
</div>

Unlike <span class="emphasis">10BASE-T</span> and <span class="emphasis">100BASE-T</span>, each pair in these standards is <span class="emphasis">bidirectional</span>, meaning a pair is not fixed to only transmitting or only receiving.

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

### Pin Assignment Comparison

<hr class="dividerSection" />

<hr class="dividerSubsection1" />

#### 10BASE-T and 100BASE-T Pin Roles

<hr class="dividerSubsection1" />

The table below summarizes transmit and receive pin behavior at <span class="emphasis">10BASE-T</span> and <span class="emphasis">100BASE-T</span> speeds, where each device type has a fixed role.

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
      <td class="tableCell">Transmit: <span class="emphasis">1</span>/<span class="emphasis">2</span>. Receive: <span class="emphasis">3</span>/<span class="emphasis">6</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Router</td>
      <td class="tableCell">Transmit: <span class="emphasis">3</span>/<span class="emphasis">6</span>. Receive: <span class="emphasis">1</span>/<span class="emphasis">2</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Firewall</td>
      <td class="tableCell">Transmit: <span class="emphasis">1</span>/<span class="emphasis">2</span>. Receive: <span class="emphasis">3</span>/<span class="emphasis">6</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Switch</td>
      <td class="tableCell">Transmit: <span class="emphasis">3</span>/<span class="emphasis">6</span>. Receive: <span class="emphasis">1</span>/<span class="emphasis">2</span></td>
    </tr>
  </tbody>
</table>

At <span class="emphasis">1000BASE-T</span> and <span class="emphasis">10GBASE-T</span>, every device uses all four wire pairs bidirectionally, so no per-device pin table applies, transmit and receive share the same pairs for every device type.

<hr class="dividerSubsection1" />

#### Straight-Through vs Crossover Wiring Pattern

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Cable Type</th>
      <th class="tableCellHeader">Wiring Pattern</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Straight-Through</td>
      <td class="tableCell">Same standard on both ends (T568A to T568A, or T568B to T568B). Pin <span class="emphasis">1</span> to pin <span class="emphasis">1</span>, pin <span class="emphasis">2</span> to pin <span class="emphasis">2</span>, and so on.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Crossover</td>
      <td class="tableCell">Different standard on each end (T568A on one end, T568B on the other). Pin <span class="emphasis">1</span> to pin <span class="emphasis">3</span>, pin <span class="emphasis">2</span> to pin <span class="emphasis">6</span>.</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSubsection1" />

#### Straight-Through vs Crossover Use Cases

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Cable Type</th>
      <th class="tableCellHeader">Used For</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Straight-Through</td>
      <td class="tableCell">Connecting dissimilar devices (PC to Switch, Router to Switch, PC to Router)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Crossover</td>
      <td class="tableCell">Connecting similar devices directly (PC to PC, Switch to Switch, Router to Router)</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSubsection1" />

#### BASE Standards: Speed

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Standard</th>
      <th class="tableCellHeader">Speed</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">10BASE-T</td>
      <td class="tableCell">10 Mbps</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">100BASE-T (Fast Ethernet)</td>
      <td class="tableCell">100 Mbps</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">1000BASE-T (Gigabit Ethernet)</td>
      <td class="tableCell">1 Gbps</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">10GBASE-T (10 Gigabit Ethernet)</td>
      <td class="tableCell">10 Gbps</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSubsection1" />

#### BASE Standards: Wire Pairs Used

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Standard</th>
      <th class="tableCellHeader">Wire Pairs Used</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">10BASE-T</td>
      <td class="tableCell">2 pairs, fixed transmit/receive roles</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">100BASE-T (Fast Ethernet)</td>
      <td class="tableCell">2 pairs, fixed transmit/receive roles</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">1000BASE-T (Gigabit Ethernet)</td>
      <td class="tableCell">4 pairs, all bidirectional</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">10GBASE-T (10 Gigabit Ethernet)</td>
      <td class="tableCell">4 pairs, all bidirectional</td>
    </tr>
  </tbody>
</table>

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