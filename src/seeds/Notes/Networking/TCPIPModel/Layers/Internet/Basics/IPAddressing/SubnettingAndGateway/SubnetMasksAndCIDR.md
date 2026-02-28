# Subnet Masks & CIDR

<hr class="dividerSection">

Subnetting determines how an IP address is divided between network and host portions.

<hr class="dividerSection" />

### Subnet Mask

<hr class="dividerSection" />

A <span class="emphasis">Subnet Mask</span> defines which part of an IP address represents the network and which part represents the host.

Example:

- <span class="examples">255.255.255.0</span>

This mask indicates that the first three octets identify the network, and the last octet identifies the host.

<hr class="dividerSection" />

### Network Portion in a Multi-Network Environment

<hr class="dividerSection" />

In a network with multiple local area networks (such as different departments), each LAN has its own unique network portion.

<hr class="dividerExample">

For example:

<hr class="dividerExample">

- Sales Department: network portion 192.168.3.0 — all devices start with 192.168.3.x
- Accounting Department: network portion 192.168.2.0 — devices start with 192.168.2.x
- Network Management: network portion 192.168.1.0 — devices start with 192.168.1.x

<hr class="dividerSubsection1">

All devices on the same local network must share the same network portion.

The host portion must be unique within that network (e.g., no two devices can have 192.168.3.10).

If a device is moved to a different network without updating its IP address, it will not be able to communicate — the network portion will not match the local network.

The subnet mask tells devices which bits are the network portion and which are the host portion.

The subnet mask is what makes this separation possible by marking which bits belong to the network portion.

<div class="xrefBox">
  <span class="emphasis">See also:</span>
  <a href="/tcpip-model/layers/internet/basics/ip-addressing/ipv4/address-structure">
    IP Addressing → IPv4 → Address Structure (Network vs Host Concept)
  </a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/ipv6/nd-ra-slaac-dad">← Back</a>
    <div class="xrefTitle">Section: Internet Layer - IP Addressing - IPv6 ND/RA & SLAAC/DAD</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/default-gateway-and-routing-tables">Next →</a>
    <div class="xrefTitle">Internet Layer - IP Addressing - Subnetting & Gateways - Default Gateway & Routing Tables</div>
  </div>
</div>