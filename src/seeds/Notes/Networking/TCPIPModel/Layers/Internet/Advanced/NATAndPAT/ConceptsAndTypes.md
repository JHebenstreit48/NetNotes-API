# Network Address Translation (NAT) Concepts and Types

<hr class="dividerSection" />

## Purpose of NAT in Small Networks

<hr class="dividerSection" />

Network Address Translation (NAT) allows devices on private IPv4 networks to access the public Internet by translating private (non-routable) source addresses to a public (routable) address.

It solves IPv4 address exhaustion by letting many internal hosts share one or few public addresses.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Private networks use RFC 1918 reserved ranges that cannot route directly on the Internet.</li>
    <li>NAT is performed on the boundary device (usually a wireless router or edge router).</li>
    <li>Common in home/SOHO/small networks where ISPs provide only one public address.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

## Private vs Public IPv4 Addresses

<hr class="dividerSubsection1" />

NAT is necessary because most internal networks use <span class="emphasis">private IPv4 addresses</span> (RFC 1918), which are not routable on the public Internet.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>10.0.0.0 – 10.255.255.255 (/8) — large enterprises</li>
    <li>172.16.0.0 – 172.31.255.255 (/12) — medium-sized networks</li>
    <li>192.168.0.0 – 192.168.255.255 (/16) — small/home/SOHO networks (most common for NAT/PAT)</li>
  </ul>
</div>

Public IPv4 addresses are globally unique and routable across the Internet.

<div class="xrefBox">
  <span class="emphasis">See detailed explanation of public/private addresses, special-use ranges, and allocation:</span><br />
  <a href="/tcpip-model/layers/internet/basics/ip-addressing/ipv4/types-of-addresses">
    Internet Layer → Basics → IP Addressing → IPv4 → Types of Addresses
  </a>
</div>

<hr class="dividerSubsection1" />

## NAT Operation Basics

<hr class="dividerSubsection1" />

NAT translates the source IP address of outgoing packets from private (inside local) to public (inside global), and reverses the destination IP on returning packets.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Outbound: Private source → public source (router maintains translation table).</li>
    <li>Inbound: Public destination → private destination (using the table to forward correctly).</li>
    <li>Only packets leaving the local network are translated; local traffic stays unchanged.</li>
    <li>Wireless routers often receive public address on WAN via DHCP from ISP and assign private addresses on LAN via DHCP server.</li>
  </ul>
</div>

Example flow (from whiteboard/video):

<div class="centeredNumberedList">

1. Host (192.168.1.15) sends to Internet server (210.100.5.5).

2. Router translates source to public (e.g., 200.100.58.51).

3. Return packet to 200.100.58.51 → router translates back to 192.168.1.15.

</div>

<hr class="dividerSubsection1" />

## Key NAT Terminology

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Inside Local</span>: Original private IPv4 address of the host on the internal network (e.g., 192.168.1.15).</li>
    <li><span class="emphasis">Inside Global</span>: Public IPv4 address representing the inside host to the external network (e.g., 200.100.58.51).</li>
    <li><span class="emphasis">Outside Local</span>: Address of outside host as seen from inside (usually same as outside global in basic NAT).</li>
    <li><span class="emphasis">Outside Global</span>: Public address of external host (e.g., 210.100.5.5).</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

## Types of NAT

<hr class="dividerSubsection1" />

NAT types vary by how mappings are created and how many hosts share addresses.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Static NAT</span>: One-to-one permanent mapping (private to specific public). Used for servers needing consistent external access.</li>
    <li><span class="emphasis">Dynamic NAT</span>: Temporary one-to-one from a pool of public addresses. Requires enough public IPs for simultaneous sessions; rare in small networks.</li>
    <li><span class="emphasis">PAT (NAT Overload)</span>: Many-to-one mapping using unique port numbers to differentiate sessions. Most common in small/home networks; allows hundreds/thousands of hosts to share one public address.</li>
  </ul>
</div>

In small networks, PAT overload is the default on wireless routers.

<hr class="dividerSection" />

<div class="xrefBox">
  <span class="emphasis">See related concepts:</span><br />
  <a href="/foundations/basics/devices-and-models/routers/interfaces">
    Foundations → Devices & Models → Routers → Interfaces (default gateway and boundary role)
  </a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/advanced/fragmentation-and-mtu/path-mtu-discovery">← Back</a>
    <div class="xrefTitle">Section: Internet Layer - Advanced - Fragmentation & MTU - Path MTU Discovery</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/advanced/nat-and-pat/use-cases-and-limits">Next →</a>
    <div class="xrefTitle">Internet Layer - Advanced - NAT & PAT - Use Cases & Limits</div>
  </div>
</div>