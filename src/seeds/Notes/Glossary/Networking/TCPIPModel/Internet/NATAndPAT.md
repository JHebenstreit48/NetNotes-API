# Glossary - Internet - NAT & PAT

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
  <a href="/tcpip-model/layers/internet/advanced/nat-and-pat/concepts-and-types">
    TCP/IP Model → Internet Layer → Advanced → NAT & PAT → Concepts & Types
  </a><br />
  <a href="/tcpip-model/layers/internet/advanced/nat-and-pat/use-cases-and-limits">
    TCP/IP Model → Internet Layer → Advanced → NAT & PAT → Use Cases & Limits
  </a>
</div>

<hr class="dividerSection" />