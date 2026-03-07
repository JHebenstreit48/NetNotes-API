# Glossary - Foundations - Routers - Gateways & Default Gateway

<hr class="dividerSection" />

### Gateway

<hr class="dividerSubsection1" />

A device, typically a router, that provides an exit path for traffic to leave one local network and be forwarded to remote networks or the Internet.

The gateway acts as the boundary separating local and remote networks.

<hr class="dividerSubsection1" />

### Default Gateway

<hr class="dividerSubsection1" />

The IPv4 address of the router interface directly connected to the local network, serving as the exit point ("door out of the room") for any traffic destined for a remote network.

Hosts use this address when the destination IP is not on the local subnet.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Determined by binary ANDing the source IP with the subnet mask and comparing it to the destination IP AND subnet mask.</li>
    <li>If network portions do not match, the host sends the packet to the default gateway.</li>
    <li>The host then ARPs for the MAC address of the default gateway to encapsulate the frame.</li>
    <li>Can be configured statically or received dynamically via DHCP (common on wireless routers).</li>
    <li>Misconfiguration (e.g., wrong IP or different subnet) prevents the host from reaching the gateway via ARP.</li>
  </ul>
</div>

Required on hosts for communication beyond the local network (e.g., Internet access).

<hr class="dividerSubsection1" />

### Router Interface (as Gateway)

<hr class="dividerSubsection1" />

The router port (physical or logical) connected to a specific local network; its assigned IPv4 address becomes the default gateway for all hosts on that directly connected network.

Each interface separates one network from others and defines a boundary.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The interface IP is typically the first usable address in the subnet (e.g., 192.168.1.1).</li>
    <li>Hosts on the connected LAN must use addresses in the same subnet as the interface.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Internal (Inside) Network

<hr class="dividerSubsection1" />

The local/private side of a router (e.g., the LAN side of a home/SOHO wireless router), where hosts use private IPv4 addresses (RFC 1918 ranges).

These addresses are not directly routable on the public Internet.

<hr class="dividerSubsection1" />

### External (Outside) Network

<hr class="dividerSubsection1" />

The WAN/Internet side of a router, where the router typically receives a public/routable IPv4 address from the ISP (often via DHCP client on the WAN interface).

The router forms the boundary between the internal private network and the external public Internet.

<hr class="dividerSection" />

<div class="xrefBox">
  <span class="emphasis">Detailed explanation in main notes:</span><br />
  <a href="/foundations/basics/devices-and-models/routers/roles-and-types">
    Foundations → Devices & Models → Routers → Roles & Types
  </a><br />
  <a href="/foundations/basics/devices-and-models/routers/interfaces">
    Foundations → Devices & Models → Routers → Interfaces
  </a><br />
  <a href="/tcpip-model/layers/internet/advanced/nat-and-pat/concepts-and-types">
    TCP/IP Model → Internet Layer → Advanced → NAT & PAT → Concepts & Types
  </a>
</div>

<hr class="dividerSection" />