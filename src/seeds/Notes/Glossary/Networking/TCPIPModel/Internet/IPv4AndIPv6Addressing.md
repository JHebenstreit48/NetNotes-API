# Glossary - Internet - IPv4 & IPv6 Addressing

<hr class="dividerSection" />

### IPv4

<hr class="dividerSection" />

32-bit logical address written as four decimal octets separated by dots (e.g., 192.168.1.10).

### IPv6

<hr class="dividerSection" />

128-bit logical address written in hexadecimal, with groups separated by colons (e.g., 2001:0db8::1).

### Octets

<hr class="dividerSection" />

Four 8-bit groups (0–255 each) that make up an IPv4 address.

### Dotted-Decimal Notation

<hr class="dividerSection" />

Human-readable format for IPv4 addresses (four decimal numbers separated by dots).

<hr class="dividerSection" />

### Hexadecimal Notation

<hr class="dividerSection" />

Human-readable format for IPv6 addresses (groups of four hex digits separated by colons).

<hr class="dividerSection" />

### Hierarchical Addressing

<hr class="dividerSection" />

IPv4 addresses have a network portion (identifies the network) and host portion (identifies the device). Routers only track networks, not individual hosts.

Analogy: Telephone system — country/area/exchange code = network, remaining digits = host.

<hr class="dividerSection" />

### Network Portion

<hr class="dividerSection" />

Part of the IP address that identifies the network (defined by subnet mask/CIDR).

### Host Portion

<hr class="dividerSection" />

Part of the IP address that identifies the specific device on that network.

### Subnet Mask

<hr class="dividerSection" />

32-bit value that separates network and host portions (e.g., 255.255.255.0).

### CIDR Notation

<hr class="dividerSection" />

Shorthand for subnet masks (e.g., /24 = 255.255.255.0).

### Subnetting

<hr class="dividerSection" />

Process of dividing a network into smaller subnetworks by borrowing bits from the host portion.

### Unicast

One-to-one communication between a single source and single destination.

### Broadcast

One-to-all communication on the local network.

- Directed broadcast: to all hosts on a specific network (e.g., 192.168.1.255).
- Limited broadcast: to all hosts on local LAN (255.255.255.255).

### Multicast

One-to-many communication for a group of devices (addresses in range 224.0.0.0–239.255.255.255).

Used for routing protocols, video streaming, etc.