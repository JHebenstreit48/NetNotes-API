# Glossary - Internet - IPv4 & IPv6 Addressing

<hr class="dividerSection" />

### IPv4

<hr class="dividerSection" />

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

- Directed broadcast: to all hosts on a specific network (e.g., 192.168.1.255)
- Limited broadcast: to all hosts on local LAN (255.255.255.255)

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

<hr class="dividerSection" />

### Public IPv4 Addresses

<hr class="dividerSubsection1" />

Globally unique addresses that are routable across the public Internet.

Allocated by regional Internet registries and used for devices that must be directly reachable from the Internet.

<hr class="dividerSubsection1" />

### Private IPv4 Addresses

<hr class="dividerSubsection1" />

Addresses reserved for internal networks (defined in RFC 1918) that are not routable on the public Internet.

Common ranges:
- 10.0.0.0 – 10.255.255.255 (/8)
- 172.16.0.0 – 172.31.255.255 (/12)
- 192.168.0.0 – 192.168.255.255 (/16)

Used widely in home and enterprise networks, often with NAT to access the Internet.

<hr class="dividerSubsection1" />

### Network Address Translation (NAT)

<hr class="dividerSubsection1" />

Technique that translates private IPv4 addresses to public IPv4 addresses for Internet access.

Allows multiple internal devices to share one or more public addresses for outbound traffic and return replies to the correct internal device.

Detailed NAT concepts are covered in Advanced → NAT & PAT.

<div class="xrefBox">
  <span class="emphasis">See Advanced for full details:</span>
  <a href="/tcpip-model/layers/internet/advanced/nat-and-pat/concepts-and-types">
    Advanced → NAT & PAT → Concepts & Types
  </a>
</div>

<hr class="dividerSection" />