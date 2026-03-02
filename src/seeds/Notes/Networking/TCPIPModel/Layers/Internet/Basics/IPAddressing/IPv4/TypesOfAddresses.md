# Types of Addresses

<hr class="dividerSection" />

### Public and Private IPv4 Addresses

<hr class="dividerSection" />

IPv4 addresses fall into different categories based on their purpose and whether they can be routed across the public Internet.

Public IPv4 addresses are globally unique and routable between ISP routers. They are required for any device that must be directly reachable from the Internet.

Private IPv4 addresses (defined in RFC 1918) are reserved for internal networks and are not routable on the public Internet. They can be reused by any organization.

<div class="centeredBullet">

<ul class="diamondBullets fullWidthBullet">
  <li>10.0.0.0 – 10.255.255.255 (/8)</li>
  <li>172.16.0.0 – 172.31.255.255 (/12)</li>
  <li>192.168.0.0 – 192.168.255.255 (/16)</li>
</ul>

</div>

Most internal networks, from home setups to large enterprises, use private addresses for all devices (hosts and routers) within their intranet.

Private addresses were introduced in the mid-1990s due to the rapid depletion of IPv4 address space caused by the growth of the World Wide Web. The long-term solution to IPv4 depletion is IPv6.

### Allocation of Public IPv4 Addresses

<hr class="dividerSection" />

Public IPv4 addresses must be unique across the Internet.

Both IPv4 and IPv6 addresses are managed by the Internet Assigned Numbers Authority (IANA). IANA allocates blocks of IP addresses to the five Regional Internet Registries (RIRs).

RIRs are responsible for distributing IP addresses to Internet Service Providers (ISPs), who then provide IPv4 address blocks to organizations and smaller ISPs. Organizations can also obtain addresses directly from an RIR (subject to that RIR's policies).

### Routing to the Internet with Private Addresses

<hr class="dividerSection" />

Devices using private IPv4 addresses cannot be directly reached from the Internet. Packets with a private source address and public destination must be translated before being forwarded to an ISP.

Network Address Translation (NAT) is performed by the router that connects the internal network to the ISP. NAT translates the private source address to a public address for outbound traffic and tracks return replies to forward them to the correct internal device.

<div class="xrefBox">
  <span class="emphasis">See Advanced for full NAT details:</span>
  <a href="/tcpip-model/layers/internet/advanced/nat-and-pat/concepts-and-types">
    Advanced → NAT & PAT → Concepts & Types
  </a>
</div>

### Special-Use IPv4 Addresses

<hr class="dividerSection" />

Certain IPv4 addresses are reserved for special purposes and have restrictions or specific uses:

<div class="centeredBullet">

<ul class="diamondBullets fullWidthBullet">
  <li><strong>Loopback</strong> — 127.0.0.0/8 (commonly 127.0.0.1) — used by a host to send traffic to itself (e.g., testing IP configuration with ping 127.0.0.1).</li>
  <li><strong>APIPA</strong> (Automatic Private IP Addressing) — 169.254.0.0/16 — automatically assigned when a Windows client cannot obtain an address from DHCP.</li>
  <li><strong>Link-local</strong> — 169.254.0.0/16 — used for local communication when no DHCP server or manual configuration is available.</li>
</ul>

</div>

### Legacy Classful Addressing

<hr class="dividerSection" />

In 1981, IPv4 addresses were assigned using classful addressing as defined in RFC 790 (Assigned Numbers). Customers were allocated a network address based on one of three main classes (A, B, or C), with fixed network/host divisions based on the first octet.

<div class="centeredBullet">

<ul class="diamondBullets fullWidthBullet">
  <li><strong>Class A</strong> — 0.0.0.0/8 to 127.0.0.0/8 — designed for extremely large networks with more than 16 million host addresses. Used a fixed /8 prefix; the first octet indicated the network, and the remaining three octets were for hosts.</li>
  <li><strong>Class B</strong> — 128.0.0.0/16 to 191.255.0.0/16 — designed for moderate to large networks with up to approximately 65,000 host addresses. Used a fixed /16 prefix; the first two octets indicated the network, and the remaining two octets were for hosts.</li>
  <li><strong>Class C</strong> — 192.0.0.0/24 to 223.255.255.0/24 — designed for small networks with a maximum of 254 hosts. Used a fixed /24 prefix; the first three octets indicated the network, and the remaining octet was for hosts.</li>
</ul>

</div>

Note: There was also a **Class D** multicast block (224.0.0.0 to 239.255.255.255) and a **Class E** experimental block (240.0.0.0 to 255.255.255.255).

At the time, with a limited number of computers using the Internet, classful addressing was an effective way to allocate addresses. However, it wasted large amounts of address space — Class A and B networks had very large numbers of host addresses, while Class C had very few. Class A networks alone accounted for 50% of all IPv4 addresses, leaving most available addresses unused.

In the mid-1990s, with the introduction and rapid growth of the World Wide Web (WWW), classful addressing was deprecated to more efficiently allocate the limited IPv4 address space. Classful address allocation was replaced with classless addressing (CIDR), which is used today. Classless addressing ignores the rules of classes (A, B, C). Public IPv4 network addresses (network addresses and subnet masks) are now allocated based on the number of addresses that can be justified.

### Assignment of IP Addresses

<hr class="dividerSection" />

IPv4 addresses can be assigned in two main ways:

<ul class="diamondBullets fullWidthBullet">
  <li><strong>Static</strong> — manually configured on the device (common for servers, printers, routers, and devices that need a consistent address).</li>
  <li><strong>Dynamic</strong> — automatically assigned using DHCP (most common for end-user devices like PCs, phones, and laptops).</li>
</ul>

<div class="xrefBox">
  <span class="emphasis">See Fundamentals for DHCP details:</span>
  <a href="/tcpip-model/layers/internet/basics/fundamentals/dhcp">
    Fundamentals → DHCP (Address Assignment)
  </a>
</div>

<div class="xrefBox">
  <span class="emphasis">See Glossary for full details:</span>
  <a href="/glossary/networking/tcpipmodel/internet/ipv4-and-ipv6-addressing">
    IPv4 & IPv6 Addressing → Public / Private / Special-Use
  </a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/ipv4/transmission-types">← Back</a>
    <div class="xrefTitle">Internet Layer - Basics - IP Addressing - IPv4 - Transmission Types</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/ipv4/ipv4-vs-ipv6-comparison">Next →</a>
    <div class="xrefTitle">Internet Layer - Basics - IP Addressing - IPv4 - IPv4 vs IPv6 Comparison</div>
  </div>
</div>