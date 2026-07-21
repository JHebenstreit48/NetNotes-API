# Broadcast Domains & Segmentation

<hr class="dividerSection" />

### Reasons to Divide Networks

<hr class="dividerSection" />

As networks grow in size and complexity, dividing a single large local network into multiple smaller segments becomes necessary for several important reasons.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Control Broadcast Traffic</span>: In a large switched network, every broadcast is flooded to all devices, forcing unnecessary processing and potential performance degradation. Smaller segments reduce the size of broadcast domains.</li>
    <li><span class="emphasis">Improve Security</span>: Isolating departments or functional groups prevents unauthorized access (e.g., sales department devices cannot reach accounting servers or printers, and network management tools remain protected).</li>
    <li>Support <span class="emphasis">Geographical</span> and <span class="emphasis">Organizational</span> <span class="secondEmphasis">Separation</span>: Different floors, buildings, or relocated departments may be physically too far apart for a single local network to serve efficiently.</li>
  </ul>
</div>

<span class="emphasis">Routers</span> are the <span class="emphasis">primary devices</span> used to <span class="emphasis">create</span> this <span class="emphasis">division</span>.

Each router <span class="emphasis">interface</span> connects to a <span class="emphasis">separate network</span>, establishing <span class="emphasis">independent broadcast domains</span> and <span class="emphasis">distinct IP subnets</span>.

Traffic between these segments requires routing.

<div class="xrefBox">
  <span class="emphasis">See also:</span><br />
  <a href="/foundations/basics/devices-and-models/routers/roles-and-types" target="_blank" rel="noopener noreferrer">Routers → Roles & Types (router as gateway between networks)</a><br />
  <a href="/foundations/basics/devices-and-models/routers/interfaces" target="_blank" rel="noopener noreferrer">Routers → Interfaces (each interface defines a separate network)</a>
</div>

<hr class="dividerSection" />

### What Is a Broadcast Domain?

<hr class="dividerSection" />

A <span class="emphasis">broadcast domain</span> is a logical division of a network where all devices receive broadcast frames sent by any device in that domain.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Broadcasts are Ethernet-layer (Layer 2) messages sent to the broadcast MAC address (<span class="emphasis">FF:FF:FF:FF:FF:FF</span>).</li>
    <li>At Layer 3, the equivalent broadcast IP address is <span class="emphasis">255.255.255.255</span>.</li>
    <li>Common examples include <span class="emphasis">ARP</span> requests and <span class="emphasis">DHCP Discover</span> messages.</li>
    <li>Switches propagate (flood) broadcasts out all ports except the incoming port.</li>
    <li>Routers do not forward broadcasts, they stop at the broadcast domain boundary.</li>
  </ul>
</div>

This means every device in the same broadcast domain must process every broadcast frame, which can slow down the network if the domain is too large.

<hr class="dividerSection" />

### How Devices Use Broadcasts

<hr class="dividerSection" />

Devices on Ethernet LANs use broadcasts for discovery and configuration:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">ARP</span> <span class="secondEmphasis">(Address Resolution Protocol)</span> sends a broadcast to discover the MAC address for a known IPv4 address on the local network.</li>
    <li><span class="emphasis">DHCP Discover</span> messages are sent as broadcasts to locate a DHCP server when a host needs an IP address.</li>
  </ul>
</div>

A host that does not yet have a valid IP address, for example, one whose DHCP lease has expired, cannot address a DHCP server directly.

Instead, it sends its request to both broadcast addresses at once: the Layer 2 destination is <span class="emphasis">FF:FF:FF:FF:FF:FF</span>, and the Layer 3 destination is <span class="emphasis">255.255.255.255</span>.

This allows the request to reach any DHCP server on the local segment without the host needing to already know one specifically.

Switches flood these broadcast frames throughout the broadcast domain, but routers stop them.

<hr class="dividerSection" />

### Routers Segment Broadcast Domains

<hr class="dividerSection" />

Routers do not propagate Ethernet broadcasts to other interfaces.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>When a router receives a broadcast on one interface, it does not forward it out other interfaces.</li>
    <li>Each router interface connects to its own separate broadcast domain.</li>
    <li>Broadcasts from one LAN do not reach devices on another LAN connected through a router.</li>
  </ul>
</div>

This is known as <span class="emphasis">segmentation</span>: routers separate Layer 2 broadcast domains, reducing unnecessary broadcast traffic and improving network performance.

<hr class="dividerSection" />

### Problems with Large Broadcast Domains

<hr class="dividerSection" />

A large broadcast domain connects many hosts and can generate excessive broadcasts.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Every device must accept and process each broadcast packet.</li>
    <li>Excessive broadcasts slow down the network and individual devices.</li>
    <li>Large domains increase the risk of <span class="emphasis">broadcast storms</span> (e.g., from misconfigurations, hardware/software problems, or malicious intent).</li>
  </ul>
</div>

<hr class="dividerSection" />

### Solution: Segment Networks with Subnetting

<hr class="dividerSection" />

The solution is to reduce the size of networks by creating smaller broadcast domains in a process called <span class="emphasis">subnetting</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Subnetting divides a large network into smaller subnets using longer prefix lengths.</li>
    <li>Broadcasts are confined to smaller subnets, reducing overall network traffic.</li>
    <li>Smaller domains improve performance, enable security policies (e.g., control which subnets can communicate), and limit the impact of abnormal broadcast traffic.</li>
  </ul>
</div>

Subnetting is a fundamental skill for network administrators, various methods exist to help understand the process.

<hr class="dividerSection" />

### Ways to Subnet Networks

<hr class="dividerSection" />

Network administrators can create subnets using any logical division that makes sense for the network.

Examples of subnetting strategies:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>By location (e.g., different floors in a building)</li>
    <li>By group or function (e.g., Administration, Human Resources, Students, Accounting)</li>
    <li>By device type (e.g., all hosts, all servers, all printers)</li>
  </ul>
</div>

In each case, subnets use longer prefix lengths to identify smaller networks.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tcpip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/ipv4-subnetting" target="_blank" rel="noopener noreferrer">IPv4 Subnetting</a>
</div>

<div class="xrefBox">
  <span class="emphasis">See Glossary for related terms:</span>
  <a href="/glossary/networking/tcpipmodel/internet/ipv4-and-ipv6-addressing" target="_blank" rel="noopener noreferrer">IPv4 & IPv6 Addressing → Broadcast</a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/subnet-masks-and-cidr">← Back</a>
    <div class="xrefTitle">Internet Layer - Basics - IP Addressing - Subnetting & Gateways - Subnet Masks & CIDR</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/default-gateway-and-routing-tables">Next →</a>
    <div class="xrefTitle">Internet Layer - Basics - IP Addressing - Subnetting & Gateways - Default Gateway & Routing Tables</div>
  </div>
</div>