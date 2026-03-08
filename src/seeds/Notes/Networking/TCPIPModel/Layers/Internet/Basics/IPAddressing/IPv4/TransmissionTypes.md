# Types of Addresses

<hr class="dividerSection" />

### Unicast Addresses

<hr class="dividerSection" />

Unicast is one-to-one communication — one source device sends a packet to one destination device.

A unicast packet uses:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A unicast destination IP address (single recipient)</li>
    <li>A unicast source IP address (packet always originates from a single source)</li>
  </ul>
</div>

This is true regardless of whether the destination is unicast, broadcast, or multicast — the source IP address is always unicast.

Example:

<span class="emphasis">Printer</span>

```shell
Source: 172.16.4.1
Destination: 172.16.4.253 
```

Unicast is the normal method for most host-to-host traffic (web browsing, email, file transfer).

<hr class="dividerSection" />

### Broadcast Addresses

<hr class="dividerSection" />

Broadcast is one-to-all communication — a device sends a packet to every device on the local network.

A broadcast packet has a destination IP address with all ones (1s) in the host portion (or 32 ones for the entire address).

By default, routers do not forward broadcast packets — they stop at the broadcast domain.

Note: IPv4 uses broadcast packets. IPv6 does not have broadcast (uses multicast instead).

Broadcast traffic uses network resources and forces every receiving device to process the packet, so it should be limited to avoid performance issues. Subdividing networks (using routers) helps control broadcast traffic.

<div class="xrefBox">
  <span class="emphasis">See broadcast domain details and segmentation:</span><br />
  <a href="/tcpip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/broadcast-domains-and-segmentation">
    Internet Layer → Basics → IP Addressing → Subnetting & Gateways → Broadcast Domains & Segmentation
  </a>
</div>

Example:

<span class="emphasis">Limited Broadcast</span>

```shell
Source: 172.16.4.1
Destination: 255.255.255.255 
```

The switch floods the packet out all ports (except incoming), and every device on the network receives it.

<hr class="dividerSection" />

### Multicast Addresses

<hr class="dividerSection" />

Multicast is one-to-many communication — a single source sends a packet to a selected group of devices (multicast clients) that subscribe to a multicast group.

IPv4 multicast range: 224.0.0.0 to 239.255.255.255.

Benefits: reduces traffic (one packet instead of multiple unicast copies).

Hosts subscribe to a group via a client program → process packets sent to the multicast address (plus their own unicast address).

Common use: routing protocols like OSPF (uses 224.0.0.5). Only OSPF-enabled devices process these packets — others ignore them.

Example:

<span class="emphasis">Multicast Group Address</span>

```shell
Source: 172.16.4.1
Destination: 
```

Only subscribed devices (e.g., 172.16.4.3 and 172.16.4.4) process the packet.

<hr class='dividerSubsection1">

#### Types oF Casting Comparison

<hr class='dividerSubsection1">

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Type</th>
      <th class="tableCellHeader">Communication</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Unicast</td>
      <td class="tableCell">One-to-one</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Broadcast</td>
      <td class="tableCell">One-to-all on local network</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Multicast</td>
      <td class="tableCell">One-to-many (group)</td>
    </tr>
  </tbody>
</table>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Destination Range/Example</th>
      <th class="tableCellHeader">Forwarded by Routers?</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Normal host addresses (e.g., 172.16.4.253)</td>
      <td class="tableCell">Yes</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">255.255.255.255 (limited) or network.255 (directed)</td>
      <td class="tableCell">No</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">224.0.0.0–239.255.255.255</td>
      <td class="tableCell">Yes (if multicast routing enabled)</td>
    </tr>
  </tbody>
</table>

<div class="xrefBox">
  <span class="emphasis">See Glossary for full details:</span>
  <a href="/glossary/networking/tcpipmodel/internet/ipv4-and-ipv6-addressing">
    IPv4 & IPv6 Addressing → Unicast / Broadcast / Multicast
  </a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/ipv4/address-structure">← Back</a>
    <div class="xrefTitle">Internet Layer - Basics - IP Addressing - IPv4 - Address Structure</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/ipv4/ipv4-vs-ipv6-comparison">Next →</a>
    <div class="xrefTitle">Internet Layer - Basics - IP Addressing - IPv4 - IPv4 vs IPv6 Comparison</div>
  </div>
</div>