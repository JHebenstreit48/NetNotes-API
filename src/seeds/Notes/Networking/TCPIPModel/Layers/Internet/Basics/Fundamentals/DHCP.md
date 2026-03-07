<hr class="dividerMain">

# DHCP (Dynamic Host Configuration Protocol)

<hr class="dividerMain">

<span class="emphasis">DHCP</span> is a protocol that automatically assigns IP configuration information to devices on a network.

Instead of manually configuring an IP address, subnet mask, gateway, and DNS server, a device can obtain this information automatically from a DHCP server.

### Static vs Dynamic Addressing

<hr class="dividerSection" />

IPv4 addresses can be assigned either statically or dynamically.

<hr class="dividerSubsection1" />

#### Static Assignment

<hr class="dividerSubsection1" />

The network administrator must manually configure the network information for a host. At a minimum, this includes:

<div class="centeredBullet">

<ul class="diamondBullets fullWidthBullet">
  <li><span class="emphasis">IP address</span>: Identifies the host on the network.</li>
  <li><span class="emphasis">Subnet mask</span>: Used to identify the network on which the host is connected.</li>
  <li><span class="emphasis">Default gateway</span>: Identifies the networking device that the host uses to access the internet or another remote network.</li>
</ul>

</div>

<hr class="dividerSubsection1" />

#### Static Addresses

<hr class="dividerSubsection1" />

Static addresses have some advantages:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>
      For instance, they are useful for printers, servers, and other networking devices that need to be accessible to clients on the network.
    </li>
  </ul>
</div>

If hosts normally access a server at a particular IPv4 address, it would not be good if that address changed.  

Static assignment of addressing information can provide increased control of network resources, but it can be time consuming to enter the information on each host.

When IPv4 addresses are entered statically, the host only performs basic error checks on the IPv4 address.
<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>
    Therefore, errors are more likely to occur.
    </li>
  </ul>
</div>

When using static IPv4 addressing, it is important to maintain an accurate list of which IPv4 addresses are assigned to which devices.
<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>
    Additionally, these are permanent addresses and are not normally reused.
    </li>
  </ul>
</div>

While static addressing provides control, it is time-consuming and error-prone for large or changing networks. This is where dynamic addressing with DHCP becomes the preferred method.

<hr class="dividerSubsection1" />

#### Dynamic Assignment (DHCP)

<hr class="dividerSubsection1" />

On local networks it is often the case that the user population changes frequently. 


New users arrive with laptops and need a connection. Others have new workstations that need to be connected.  

Rather than have the network administrator assign IPv4 addresses for each workstation, it is easier to have IPv4 addresses assigned automatically.  

This is done using a protocol known as <span class="emphasis">Dynamic Host Configuration Protocol (DHCP)</span>.  

<span class="emphasis">DHCP</span> <span class="secondEmphasis">automatically assigns</span> <span class="emphasis">addressing information</span>, such as:
  
  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>
        <span class="emphasis">IPv4 addresses</span>
      </li>
      <li>
        <span class="emphasis">subnet masks</span>
      </li>
      <li>
        <span class="emphasis">default gateways</span>
      </li>
      <li>
        <span class="emphasis">other configuration information</span>.
      </li>
    </ul>
  </div>

DHCP is generally the preferred method of assigning IPv4 addresses to hosts on large networks, because it reduces the burden on network support staff and virtually eliminates entry errors.

Another benefit of DHCP is that an address is not permanently assigned to a host, but is only leased for a period of time.

If the host is powered down or taken off the network, the address is returned to the pool for reuse. 

This is especially helpful with mobile users that come and go on a network.

<hr class="dividerExample" />

#### Example:

<hr class="dividerExample" />

If you enter an airport or coffee shop with a wireless hotspot, DHCP makes it possible for you to access the internet.  

As you enter the area, your laptop DHCP client contacts the local DHCP server via a wireless connection. The DHCP server assigns an IPv4 address to your laptop.  

With home networks, the DHCP server may be located at the ISP and a host on the home network receives its IPv4 configuration directly from the ISP.  

Various types of devices can be DHCP servers as long as they are running DHCP service software.  
With most medium to large networks, the DHCP server is usually a local dedicated PC-based server.

<hr class="dividerSubsection1" />

#### How it works

<hr class="dividerSubsection1" />

Many <span class="emphasis">home</span> and <span class="emphasis">small businesses</span> networks use a <span class="emphasis">wireless router</span> and <span class="emphasis">modem</span>.  

In this case, the <span class="emphasis">wireless router</span> is both a <span class="emphasis">DHCP client</span> and a <span class="emphasis">server</span>.

The wireless router acts as a client to receive its IPv4 configuration from the ISP and then acts as a DHCP server for internal hosts on the local network.

The router receives the public IPv4 address from the ISP, and in its role as a DHCP server, it distributes private addresses to internal hosts.

In addition to PC-based servers and wireless routers, other types of networking devices such as dedicated routers can provide DHCP services to clients, although this is not as common.

### DHCPv4 Operation

<hr class="dividerSection" />

DHCP operates using a series of messages between the client and server.

The process starts when a client needs an IP address:

<div class="centeredNumberedList">

1. The client sends a <span class="emphasis">DHCP Discover</span> packet — a broadcast message looking for any DHCP server on the network. It includes the client's MAC address.

<div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>
      Source IP: 0.0.0.0 (the client has no IP yet).
      </li>
      <li>
      Destination IP: 255.255.255.255 (the limited broadcast address, which reaches all devices on the local subnet).
      </li>
      <li>
      It includes the client's MAC address (in the CHADDR field) and is sent over UDP ports 67/68. (RFC 2131)
      </li>
      <li>
      It is a <span class="emphasis">limited broadcast</span> (reaches all devices on the local subnet; routers do not forward it unless DHCP relay is configured).
      </li>
      <li>
      The client may set the <span class="emphasis">broadcast flag</span> (the leftmost bit in the 16-bit <span class="emphasis">flags</span> field) to 1 to request that the server reply via broadcast instead of unicast (useful if the client's IP stack cannot yet accept unicast packets before full configuration; per RFC 2131 §4.1).
      </li>
    </ul>
  </div>

2. The DHCP server responds with a <span class="emphasis">DHCP Offer</span> packet — offering an available IP address, subnet mask, default gateway, and other settings.

3. The client sends a <span class="emphasis">DHCP Request</span> packet — accepting the offered address.

4. The server sends a <span class="emphasis">DHCP Acknowledge (ACK)</span> packet — confirming the lease and placing the IP address in its table associated with the client's MAC address.

</div>

This is commonly summarized as the **DORA process** (Discover, Offer, Request, Acknowledge).

### DHCPv4 Configuration Overview

<hr class="dividerSection" />

DHCPv4 configuration involves setting up address pools, lease times, default gateway, DNS servers, and other options on the server.

Common tasks include defining a range of addresses to hand out, setting lease duration, and configuring options.

Packet Tracer labs often demonstrate configuring DHCP on a wireless router, where the router acts as both client (to ISP) and server (to internal hosts).

Detailed DHCPv4 configuration on routers is covered in Advanced → NAT & PAT.

<div class="xrefBox">
  <span class="emphasis">See Advanced for full details:</span>
  <a href="/tcpip-model/layers/internet/advanced/nat-and-pat/concepts-and-types">
    Advanced → NAT & PAT → Concepts & Types
  </a>
</div>

<hr class="dividerSection" />

### What DHCP Provides

<hr class="dividerSection" />

When a device receives configuration from DHCP, it typically receives:

<div class="centeredBullet">

<ul class="diamondBullets fullWidthBullet">
  <li>An IP address</li>
  <li>A Subnet Mask</li>
  <li>A Default Gateway</li>
  <li>One or more DNS server addresses</li>
</ul>

</div>

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tcpip-model/layers/internet/basics/subnetting-and-gateways/subnet-masks-and-cidr">
    Internet Layer → Subnetting & Gateways → Subnet Masks & CIDR
  </a>
</div>

<hr class="dividerSection" />

### Why DHCP Is Important

<hr class="dividerSection" />

Without DHCP:

<div class="centeredBullet">

<ul class="diamondBullets fullWidthBullet">
  <li>Every device would need manual IP configuration</li>
  <li>Address conflicts could occur more easily</li>
  <li>Managing large networks would become complex</li>
</ul>

</div>

DHCP simplifies network administration and reduces configuration errors.

<hr class="dividerSection" />

### DHCP Lease Concept

<hr class="dividerSection" />

IP addresses assigned by DHCP are typically leased for a period of time.

Before the lease expires, the client attempts to renew the lease to continue using the same IP address.

If the lease is not renewed, the address may return to the available pool.

<hr class="dividerSection" />

### DHCP and Private Networks

<hr class="dividerSection" />

In most home and small office networks:

<div class="centeredBullet">

<ul class="diamondBullets fullWidthBullet">
  <li>The router acts as the DHCP server</li>
  <li>Clients automatically receive private IP addresses (e.g., 192.168.x.x)</li>
</ul>

</div>

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/foundations/basics/devices-and-models/routers/roles-and-types">
    Foundations → Devices & Models → Routers → Roles & Types
  </a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/fundamentals/introduction">← Back</a>
    <div class="xrefTitle">Internet Layer - Fundamentals - Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/ipv4/address-structure">Next →</a>
    <div class="xrefTitle">Section: IP Addressing - IPv4 - Address Structure</div>
  </div>
</div>