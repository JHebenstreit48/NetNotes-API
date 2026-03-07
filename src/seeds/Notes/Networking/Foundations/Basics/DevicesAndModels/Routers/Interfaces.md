# Router Interfaces

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

## Default Gateway Assignment on Hosts

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

## Internal vs External Networks

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
      <td class="tableCell">Local LAN side — private addresses, hosts connected via Ethernet or Wi-Fi, not directly routable on the Internet.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">External (Outside)</td>
      <td class="tableCell">WAN/Internet side — router acts as DHCP client to ISP, receives routable public IPv4 address for Internet access.</td>
    </tr>
  </tbody>
</table>

The router serves as the boundary between the internal private network and the external public Internet.

<hr class="dividerSection" />

<div class="xrefBox">
  <span class="emphasis">See related concepts:</span><br />
  <a href="/foundations/basics/devices-and-models/routers/roles-and-types">
    Routers → Roles & Types (default gateway concepts and operation)
  </a><br />
  <a href="/tcpip-model/layers/internet/advanced/nat-and-pat/concepts-and-types">
    Advanced → NAT & PAT → Concepts & Types (translation at the boundary for Internet access)
  </a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/devices-and-models/routers/roles-and-types">← Back</a>
    <div class="xrefTitle">Foundations - Basics - Devices & Models - Routers - Roles & Types</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/devices-and-models/routers/port-types">Next →</a>
    <div class="xrefTitle">Foundations - Basics - Devices & Models - Routers - Port Types</div>
  </div>
</div>