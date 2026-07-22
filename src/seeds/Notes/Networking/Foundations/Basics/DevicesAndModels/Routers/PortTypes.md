# How Router Ports Separate Your Home Network from the Internet

<hr class="dividerSection" />

### Purpose of Router Ports

<hr class="dividerSection" />

Home and small business routers separate two different networks:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The <span class="emphasis">public network</span> (Internet / ISP)</li>
    <li>The <span class="emphasis">private local network</span> (LAN)</li>
  </ul>
</div>

Router ports reflect this separation.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/foundations/basics/devices-and-models/fundamentals/home-network-architecture" target="_blank" rel="noopener noreferrer">Foundations → Devices & Models → Home Network Architecture</a>
</div>

<hr class="dividerSection" />

### LAN (Ethernet) Ports

<hr class="dividerSection" />

Most home routers include multiple ports labeled:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Ethernet</li>
    <li>LAN</li>
    <li>1, 2, 3, 4</li>
  </ul>
</div>

These ports connect to the router's internal switch.

All devices plugged into LAN ports:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Share the same local network</li>
    <li>Receive private IP addresses</li>
    <li>Can communicate directly with each other</li>
  </ul>
</div>

Wired devices typically connect using RJ45 Ethernet cables.

<hr class="dividerSection" />

### Internet / WAN Port

<hr class="dividerSection" />

Routers also include one dedicated port labeled:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Internet</li>
    <li>WAN</li>
    <li>Sometimes a globe icon</li>
  </ul>
</div>

This port connects the router to:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A cable modem</li>
    <li>A DSL modem</li>
    <li>An Optical Network Terminal (ONT)</li>
    <li>A fixed wireless device</li>
  </ul>
</div>

The WAN port is logically separate from the LAN ports.

Traffic entering this port is considered external to the home network.

<hr class="dividerSection" />

### Logical Network Separation

<hr class="dividerSection" />

In default configurations:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>LAN ports and Wi-Fi belong to the same local network.</li>
    <li>The WAN port belongs to a different network.</li>
  </ul>
</div>

The router performs:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Network Address Translation (NAT)</li>
    <li>Packet forwarding</li>
    <li>Basic firewall filtering</li>
  </ul>
</div>

This separation protects internal devices from direct exposure to the public internet.

<hr class="dividerSection" />

### Integrated Wireless Access Point

<hr class="dividerSection" />

Most home routers include:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A built-in Ethernet switch</li>
    <li>A built-in wireless access point</li>
  </ul>
</div>

Wireless devices connect through radio signals but join the same LAN as wired devices.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/wireless/basics/architecture/bss-ess-ssid" target="_blank" rel="noopener noreferrer">Wireless → WLAN Architecture → BSS/ESS/SSID</a>
</div>

<hr class="dividerSection" />

### Typical Port Layout

<hr class="dividerSection" />

A typical home router may include:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Port Type</th>
      <th class="tableCellHeader">Function</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">WAN / Internet</td>
      <td class="tableCell">Connects to ISP equipment (modem or ONT).</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">LAN Ethernet</td>
      <td class="tableCell">Connects internal wired devices.</td>
    </tr>
  </tbody>
</table>

Internally, the device performs multiple networking roles even though it appears as a single unit.

<hr class="dividerSection" />

### Relationship to Switching

<hr class="dividerSection" />

The LAN ports function similarly to a small Layer 2 switch built into the router.

For larger networks, a dedicated switch may connect to one of the LAN ports to expand capacity.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/switching/basics/hardware-and-port-types/switches-and-connectors" target="_blank" rel="noopener noreferrer">Switching → Hardware & Port Types → Switches and Connectors</a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/devices-and-models/routers/interfaces">← Back</a>
    <div class="xrefTitle">Foundations - Devices & Models - Routers - Interfaces</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/devices-and-models/routers/routing-vs-switching">Next →</a>
    <div class="xrefTitle">Section: Routers - Routing vs Switching</div>
  </div>
</div>