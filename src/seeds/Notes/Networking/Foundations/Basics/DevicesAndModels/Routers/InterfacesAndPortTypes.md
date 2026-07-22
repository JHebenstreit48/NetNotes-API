# Router Interfaces and Port Types

<hr class="dividerSection" />

## Purpose of Router Ports

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

<hr class="dividerSubsection1" />

### LAN (Ethernet) Ports

<hr class="dividerSubsection1" />

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

<hr class="dividerSubsection1" />

### Internet / WAN Port

<hr class="dividerSubsection1" />

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

<hr class="dividerSubsection1" />

### Logical Network Separation

<hr class="dividerSubsection1" />

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

<hr class="dividerSubsection1" />

### Integrated Wireless Access Point

<hr class="dividerSubsection1" />

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

<hr class="dividerSubsection1" />

### Typical Port Layout

<hr class="dividerSubsection1" />

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

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/foundations/basics/devices-and-models/routers/routing-vs-switching" target="_blank" rel="noopener noreferrer">Routers → Routing vs Switching (how a router's role differs from a switch's)</a>
</div>

<hr class="dividerSection" />

## Router Interfaces as Network Boundaries

<hr class="dividerSection" />

Each interface on a router connects to a separate network.

The IPv4 address assigned to an interface identifies the directly connected local network.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Hosts on that network use the interface IP as their default gateway.</li>
    <li>This allows the router to forward traffic from the local network to other networks or the Internet.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Default Gateway Assignment on Hosts

<hr class="dividerSubsection1" />

Hosts must be configured with an IP address in the same network as their connected router interface.

The default gateway is the router interface IPv4 address.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Can be configured statically on the host.</li>
    <li>Most commonly provided dynamically via DHCP.</li>
  </ul>
</div>

In wireless routers (common in small/home networks):

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The router acts as a DHCP server on the LAN (internal) side by default.</li>
    <li>It assigns private IPv4 addresses (RFC 1918 ranges) to local hosts.</li>
    <li>It provides the subnet mask and its own LAN interface IPv4 address as the default gateway.</li>
    <li>The LAN interface IP is typically the first host address in the network (e.g., 192.168.1.1).</li>
  </ul>
</div>

This setup ensures all local hosts (wired or wireless) can forward traffic to the router for Internet access.

<hr class="dividerSubsection1" />

### Internal vs External Networks

<hr class="dividerSubsection1" />

Wireless routers separate two networks:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Network Side</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Internal (Inside)</td>
      <td class="tableCell">Local LAN side, private addresses, hosts connected via Ethernet or Wi-Fi, not directly routable on the Internet.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">External (Outside)</td>
      <td class="tableCell">WAN/Internet side, router acts as DHCP client to ISP, receives routable public IPv4 address for Internet access.</td>
    </tr>
  </tbody>
</table>

The router serves as the boundary between the internal private network and the external public Internet.

<hr class="dividerSection" />

<div class="xrefBox">
  <span class="emphasis">See related concepts:</span><br />
  <a href="/foundations/basics/devices-and-models/routers/roles-and-types" target="_blank" rel="noopener noreferrer">Routers → Roles & Types (default gateway concepts and operation)</a><br />
  <a href="/tcpip-model/layers/internet/advanced/nat-and-pat/concepts-and-types" target="_blank" rel="noopener noreferrer">Advanced → NAT & PAT → Concepts & Types (translation at the boundary for Internet access)</a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/devices-and-models/routers/roles-and-types">← Back</a>
    <div class="xrefTitle">Foundations - Basics - Devices & Models - Routers - Roles & Types</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/devices-and-models/routers/router-models">Next →</a>
    <div class="xrefTitle">Foundations - Basics - Devices & Models - Routers - Router Models</div>
  </div>
</div>