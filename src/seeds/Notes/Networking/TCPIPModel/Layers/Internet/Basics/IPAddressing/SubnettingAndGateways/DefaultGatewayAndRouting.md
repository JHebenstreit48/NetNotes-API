<hr class="dividerMain">

# Default Gateway & Routing Tables

<hr class="dividerSection" />

A <span class="emphasis">default gateway</span> is the router interface on a local network that forwards packets to destinations outside the local subnet.

It serves as the exit point for traffic destined for remote networks or the Internet.

<hr class="dividerSection" />

### Example

<hr class="dividerSection" />

If a device has the IP address:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>
    <span class="examples">192.168.1.10</span>
    </li>
  </ul>
</div>

Then the default gateway is typically:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>
    <span class="examples">192.168.1.1</span>
    </li>
  </ul>
</div>

Packets addressed to remote destinations are sent to this gateway address.

<hr class="dividerSection" />

### Local vs Remote Destination Determination

<hr class="dividerSection" />

A host determines whether a destination is local or remote by comparing the network portions of the source and destination IP addresses.

<div class="centeredNumberedList">

1. **AND Operation on Source**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The host performs a binary AND operation between its own IP address and subnet mask.</li>
  </ul>
</div>

2. **AND Operation on Destination**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>It performs the same AND operation on the destination IP address and subnet mask.</li>
  </ul>
</div>

3. **Compare Results**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>If the results match → destination is local (direct Layer 2 delivery using ARP).</li>
    <li>If the results differ → destination is remote (packet sent to default gateway).</li>
  </ul>
</div>

</div>

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/foundations/basics/devices-and-models/routers/roles-and-types">
    Routers → Roles & Types (detailed local/remote ANDing and gateway operation)
  </a>
</div>

<hr class="dividerSection" />

### Role of the Default Gateway

<hr class="dividerSection" />

When the destination is remote, the host:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Encapsulates the IP packet with the default gateway's MAC address as the destination MAC (obtained via ARP).</li>
    <li>Sends the frame to the router interface.</li>
    <li>The router receives the frame, de-encapsulates it, reads the destination IP, and forwards it toward the remote network.</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tcpip-model/layers/network-access/basics/data-link/core-concepts/de-encapsulation">
    De-encapsulation (router forwarding process: de-encap, routing decision, re-encap)
  </a><br />
  <a href="/tcpip-model/layers/network-access/basics/data-link/core-concepts/arp">
    ARP (how host resolves gateway MAC)
  </a>
</div>

<hr class="dividerSection" />

### Basic Routing Table Function

<hr class="dividerSection" />

The <span class="emphasis">routing table</span> is the router's <span class="emphasis">map</span> for deciding where to <span class="emphasis">forward packets</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Contains entries with destination networks, subnet masks, next-hop addresses or exit interfaces, and administrative distance/metrics.</li>
    <li>The router examines the destination IP address in the packet and performs a longest prefix match against the table.</li>
    <li>If a match is found → packet is forwarded out the specified interface or to the next-hop router.</li>
    <li>If no match → packet is dropped or sent to a default route (gateway of last resort) if configured.</li>
  </ul>
</div>

<hr class="dividerSection" />

### Basic Routing Table Function

<hr class="dividerSection" />

The <span class="emphasis">routing table</span> is the router's map for deciding where to forward packets. Routing tables are not concerned with individual host addresses — they contain addresses of networks and the best path to reach those networks.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Entries can be added dynamically (from other routers) or statically (manually by administrator).</li>
    <li>The router examines the destination IP address in the packet and performs a longest prefix match against the table.</li>
    <li>If a match is found → packet is forwarded out the specified interface or to the next-hop router.</li>
    <li>If no match → packet is dropped unless a default route is configured.</li>
  </ul>
</div>

A <span class="emphasis">default route</span> (gateway of last resort) forwards packets with unknown destination networks. It is often the interface to another router or the Internet.

Typical routing table entry fields include:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Type</span> — Connection type (e.g., C for directly connected).</li>
    <li><span class="emphasis">Network</span> — Destination network address.</li>
    <li><span class="emphasis">Port/Interface</span> — Outgoing interface used to forward packets.</li>
  </ul>
</div>

The routing table enables routers to connect multiple IP networks and direct traffic between them.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/foundations/basics/devices-and-models/routers/interfaces">
    Routers → Interfaces (interface IP as default gateway for connected hosts)
  </a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/broadcast-domains-and-segmentation">← Back</a>
    <div class="xrefTitle">Internet Layer - Subnetting & Gateways - Broadcast Domains & Segmentation</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/ipv4-subnetting">Next →</a>
    <div class="xrefTitle">Internet Layer - Subnetting & Gateways - IPv4 Subnetting</div>
  </div>
</div>