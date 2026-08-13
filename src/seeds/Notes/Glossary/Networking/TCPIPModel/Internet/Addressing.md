# Glossary - Internet - Addressing

<hr class="dividerSection" />

## IPv4 Addressing

<hr class="dividerSection" />

### IPv4 (Internet Protocol version 4)

<hr class="dividerSubsection1" />

32-bit logical address written as four decimal octets separated by dots (e.g., 192.168.1.10).

<hr class="dividerSubsection1" />

### Octets

<hr class="dividerSubsection1" />

Four 8-bit groups (0–255 each) that make up an IPv4 address.

<hr class="dividerSubsection1" />

### Dotted-Decimal Notation

<hr class="dividerSubsection1" />

Human-readable format for IPv4 addresses (four decimal numbers separated by dots).

<hr class="dividerSubsection1" />

### Hierarchical Addressing

<hr class="dividerSubsection1" />

IPv4 addresses have a network portion (identifies the network) and host portion (identifies the device). Routers only track networks, not individual hosts.

Analogy: Telephone system — country/area/exchange code = network, remaining digits = host.

<hr class="dividerSubsection1" />

### Network Portion

<hr class="dividerSubsection1" />

Part of the IP address that identifies the network (defined by subnet mask/CIDR).

<hr class="dividerSubsection1" />

### Host Portion

<hr class="dividerSubsection1" />

Part of the IP address that identifies the specific device on that network.

<hr class="dividerSubsection1" />

### Subnet

<hr class="dividerSubsection1" />

Smaller network created by dividing a larger network using subnet masks or CIDR notation.

Reduces broadcast traffic and improves performance/security.

<hr class="dividerSubsection1" />

### Subnet Mask

<hr class="dividerSubsection1" />

32-bit value that separates network and host portions (e.g., 255.255.255.0).

<hr class="dividerSubsection1" />

### CIDR Notation

<hr class="dividerSubsection1" />

Shorthand for subnet masks (e.g., /24 = 255.255.255.0).

<hr class="dividerSubsection1" />

### Subnetting

<hr class="dividerSubsection1" />

Process of dividing a network into smaller subnetworks by borrowing bits from the host portion.

<hr class="dividerSubsection1" />

### Unicast

<hr class="dividerSubsection1" />

One-to-one communication between a single source and single destination.

Source IP address is always unicast (packet originates from one device).

Used for normal host-to-host traffic (web browsing, email, file transfer).

<hr class="dividerSubsection1" />

### Broadcast

<hr class="dividerSubsection1" />

One-to-all communication on the local network.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Directed broadcast: to all hosts on a specific network (e.g., 192.168.1.255)</li>
    <li>Limited broadcast: to all hosts on local LAN (255.255.255.255)</li>
  </ul>
</div>

Routers do not forward broadcast packets.

Used for discovery (e.g., ARP requests).

<hr class="dividerSubsection1" />

### Multicast

<hr class="dividerSubsection1" />

One-to-many communication for a group of devices that subscribe to a multicast group.

IPv4 range: 224.0.0.0–239.255.255.255

Reduces traffic (one packet instead of multiple unicast copies).

Common use: routing protocols (e.g., OSPF uses 224.0.0.5).

Only subscribed devices process the packet.

<hr class="dividerSubsection1" />

### Public IPv4 Addresses

<hr class="dividerSubsection1" />

Globally unique addresses that are routable across the public Internet.

Allocated by regional Internet registries and used for devices that must be directly reachable from the Internet.

<hr class="dividerSubsection1" />

### Private IPv4 Addresses

<hr class="dividerSubsection1" />

Addresses reserved for internal networks (defined in RFC 1918) that are not routable on the public Internet.

Common ranges:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>10.0.0.0 – 10.255.255.255 (/8)</li>
    <li>172.16.0.0 – 172.31.255.255 (/12)</li>
    <li>192.168.0.0 – 192.168.255.255 (/16)</li>
  </ul>
</div>

Used widely in home and enterprise networks, often with NAT to access the Internet.

<hr class="dividerSection" />

## IPv6 Addressing

<hr class="dividerSection" />

### IPv6

<hr class="dividerSubsection1" />

128-bit logical address written in hexadecimal, with groups separated by colons (e.g., 2001:0db8::1).

Designed to solve IPv4 address exhaustion with a vastly larger address space (340 undecillion addresses).

<hr class="dividerSubsection1" />

### Hexadecimal Notation

<hr class="dividerSubsection1" />

The standard human-readable format for IPv6 addresses, using eight groups of four hexadecimal digits separated by colons.

Computers process IPv6 addresses in their 128-bit binary form, but hexadecimal notation provides a compact and readable representation for human use.

<hr class="dividerSubsection1" />

### Internet of Things (IoT)

<hr class="dividerSubsection1" />

The Internet of Things (IoT) refers to the network of sensor-equipped, internet-ready devices beyond traditional computers (e.g., automobiles, biomedical devices, household appliances, natural ecosystems).

IPv6 is designed to support the massive scale of IoT with its enormous address space.

<hr class="dividerSection" />

## NAT & PAT

<hr class="dividerSection" />

### Network Address Translation (NAT)

<hr class="dividerSubsection1" />

Process that allows devices on a private network to use private IPv4 addresses while communicating with devices on the public Internet by translating those addresses to a public IPv4 address.

Primarily solves IPv4 address exhaustion (RFC 1918 private ranges) and hides internal network structure for basic security.

<hr class="dividerSubsection1" />

### Port Address Translation (PAT)

<hr class="dividerSubsection1" />

A form of NAT (also called NAT overload) where multiple private IPv4 addresses are mapped to a single public IPv4 address using unique port numbers.

Most common type used in small/home/SOHO networks; allows many internal devices to share one public address for outbound Internet access.

<hr class="dividerSubsection1" />

### Inside Local Address

<hr class="dividerSubsection1" />

The private IPv4 address assigned to a host on the internal (inside) network before any NAT translation occurs.

Not routable on the public Internet.

<hr class="dividerSubsection1" />

### Inside Global Address

<hr class="dividerSubsection1" />

The public IPv4 address that represents one or more inside local addresses to devices on the outside (Internet) network after NAT translation.

This is the address visible externally.

<hr class="dividerSubsection1" />

### Outside Local Address

<hr class="dividerSubsection1" />

The address of an outside host as it appears to the inside network (usually the same as the outside global address unless destination NAT is involved).

In basic NAT/PAT setups, this is typically unchanged.

<hr class="dividerSubsection1" />

### Outside Global Address

<hr class="dividerSubsection1" />

The public IPv4 address of a host on the outside network (Internet) as seen from anywhere.

Routable on the public Internet.

<hr class="dividerSubsection1" />

### Static NAT

<hr class="dividerSubsection1" />

One-to-one permanent mapping between a private (inside local) address and a public (inside global) address.

Used for servers that need consistent external access; less common in small networks.

<hr class="dividerSubsection1" />

### Dynamic NAT

<hr class="dividerSubsection1" />

Temporary one-to-one mapping from a pool of public addresses to private addresses.

Requires enough public addresses for simultaneous connections; rarely used in small networks due to address scarcity.

<hr class="dividerSubsection1" />

### NAT Overload

<hr class="dividerSubsection1" />

Synonym for PAT; uses port numbers to differentiate multiple internal sessions sharing one public address.

Most efficient for small networks with limited public addresses.

<hr class="dividerSection" />

<div class="xrefBox">
  <span class="emphasis">For full concepts, operation details, small-network examples, and use cases/limits, see:</span><br />
  <a href="/networking/tcp-ip-model/layers/internet/advanced/nat-and-pat/concepts-and-types" target="_blank" rel="noopener noreferrer">TCP/IP Model → Internet Layer → Advanced → NAT & PAT → Concepts & Types</a><br />
  <a href="/networking/tcp-ip-model/layers/internet/advanced/nat-and-pat/use-cases-and-limits" target="_blank" rel="noopener noreferrer">TCP/IP Model → Internet Layer → Advanced → NAT & PAT → Use Cases & Limits</a>
</div>

<hr class="dividerSection" />