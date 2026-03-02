<hr class="dividerMain">

# DHCP (Dynamic Host Configuration Protocol)

<hr class="dividerMain">

<span class="emphasis">DHCP</span> is a protocol that automatically assigns IP configuration information to devices on a network.

Instead of manually configuring an IP address, subnet mask, gateway, and DNS server, a device can obtain this information automatically from a DHCP server.

<hr class="dividerSection" />

### What DHCP Provides

<hr class="dividerSection" />

When a device receives configuration from DHCP, it typically receives:

- An <span class="emphasis">IP address</span>
- A <span class="emphasis">Subnet Mask</span>
- A <span class="emphasis">Default Gateway</span>
- One or more <span class="emphasis">DNS server</span> addresses

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

- Every device would need manual IP configuration
- Address conflicts could occur more easily
- Managing large networks would become complex

DHCP simplifies network administration and reduces configuration errors.

<hr class="dividerSection" />

### The Basic DHCP Process (High-Level)

<hr class="dividerSection" />

The DHCP exchange is often summarized as:

1. <span class="emphasis">Discover</span> — Client requests an IP address
2. <span class="emphasis">Offer</span> — Server offers an available address
3. <span class="emphasis">Request</span> — Client requests the offered address
4. <span class="emphasis">Acknowledge</span> — Server confirms the lease

This process is commonly referred to as <span class="secondEmphasis">DORA</span>.

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

- The <span class="emphasis">router</span> acts as the DHCP server.
- Clients automatically receive private IP addresses (e.g., 192.168.x.x).

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/foundations/basics/devices-and-models/routers/roles-and-types">
    Foundations → Devices & Models → Routers → Roles & Types
  </a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/fundamentals/ipv4">← Back</a>
    <div class="xrefTitle">IP Addressing - Fundamentals - IPv4</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/fundamentals/ipv4-vs-ipv6-comparison">Next →</a>
    <div class="xrefTitle">IP Addressing - Fundamentals - IPv4 vs IPv6 Comparison</div>
  </div>
</div>