# Identifying Devices with MAC Addresses

<hr class="dividerSection" />

### What Is MAC Addressing?

<hr class="dividerSection" />

MAC addressing is the mechanism Layer 2 uses to identify <span class="emphasis">source and destination devices</span> on a local network.

MAC stands for <span class="emphasis">Media Access Control</span>, the sublayer of the Data Link layer responsible for physical addressing.

Every frame includes:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A <span class="emphasis">source MAC address</span></li>
    <li>A <span class="emphasis">destination MAC address</span></li>
  </ul>
</div>

These addresses determine how switches forward frames within a local segment.

Switches store learned MAC addresses in a hardware table:

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/switching/basics/fundamentals/mac-address-table">
    Switching → Basics → Fundamentals → MAC Address Table
  </a>
</div>

<hr class="dividerSection" />

## MAC Address vs IP Address

<hr class="dividerSection" />

MAC addresses are physical (Layer 2), assigned to hardware, and used for local network delivery.

IP addresses are logical (Layer 3), assigned to devices, and used for end-to-end routing across networks.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>MAC: Fixed (burned-in), 48-bit hexadecimal (e.g., 00:11:22:33:44:55).</li>
    <li>IP: Configurable, 32-bit decimal for IPv4 (e.g., 192.168.1.10).</li>
    <li>ARP bridges them for local Ethernet framing.</li>
  </ul>
</div>

Both are required for complete communication across networks.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tcpip-model/layers/internet/basics/ip-addressing/ipv4/address-structure">
    Internet Layer → Basics → IP Addressing → IPv4 → Address Structure
  </a>
</div>

<hr class="dividerSection" />

### MAC Address Usage in Frames

<hr class="dividerSection" />

When a device sends data:

When a device sends data:
<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The source MAC identifies the sender</li>
    <li>The destination MAC identifies the next hop</li>
  </ul>
</div>

Switches examine MAC addresses to make forwarding decisions.  
They do not inspect IP addresses when operating at Layer 2.

<hr class="dividerSubsection1" />

### Local (Same Network) MAC Usage

<hr class="dividerSubsection1" />

For destinations on the same network, destination MAC = target device's MAC.

Example (PC1 to PC2 on same subnet):

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Destination MAC</th>
      <th class="tableCellHeader">Source MAC</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">55-55-55</td>
      <td class="tableCell">aa-aa-aa</td>
    </tr>
  </tbody>
</table>

Source IPv4: 192.168.10.10  
Destination IPv4: 192.168.10.11

<hr class="dividerSubsection1" />

### Remote (Different Network) MAC Usage

<hr class="dividerSubsection1" />

For remote destinations, destination MAC = default gateway/router interface MAC.

Routers de-encapsulate Layer 2, route based on IP, re-encapsulate with new MACs for outgoing interface.

Example (PC1 to PC2 on remote network):

<div class="centeredNumberedList">

1. PC1 to R1

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Destination MAC: bb-bb-bb (R1 G0/0/0)</li>
  </ul>
</div>

2. R1 to R2

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Destination MAC: dd-dd-dd (R2 G0/0/1)</li>
  </ul>
</div>

3. R2 to PC2

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Destination MAC: 55-55-55 (PC2)</li>
  </ul>
</div>

</div>

MAC changes hop-by-hop; IP remains constant.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tcpip-model/layers/network-access/basics/data-link/core-concepts/de-encapsulation">
    Data Link - Core Concepts - De-encapsulation (router behavior)
  </a><br />
  <a href="/tcpip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/default-gateway-and-routing-tables">
    Internet Layer → Basics → IP Addressing → Subnetting & Gateways → Default Gateway & Routing Tables
  </a>
</div>

<hr class="dividerSection" />

### Viewing MAC Addresses

<hr class="dividerSection" />

You can view MAC addresses using operating system tools:

#### Windows

```shell  
ipconfig /all  
```

Displays:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Network interface details</li>
    <li>MAC address (Physical Address)</li>
  </ul>
</div>

#### Linux / Ubuntu

```shell  
ip link show  
```

```shell  
ifconfig -a  
```

MAC addresses appear as:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>link/ether</li>
  </ul>
</div>

#### macOS

```shell  
ifconfig  
```

MAC addresses appear as:
<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>ether</li>
  </ul>
</div>

<hr class="dividerSection" />

### MAC Address vs IP Address

<hr class="dividerSection" />

- MAC address → Local delivery (Layer 2)  
- IP address → Network delivery (Layer 3)  

Both are required for complete communication across networks.

<hr class="dividerSection" />

### Summary

<hr class="dividerSection" />

MAC addressing enables <span class="emphasis">local device identification</span>.

Without MAC addresses, switches would have no way to forward frames within a network.

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/network-access/basics/data-link/core-concepts/arp">← Back</a>
    <div class="xrefTitle">Section: Data Link - Core Concepts - Address Resolution Protocol (ARP)</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/network-access/basics/data-link/frames-and-addressing/ethernet-frame-fields">Next →</a>
    <div class="xrefTitle">Data Link - Frames & Addressing - Ethernet Frame Fields</div>
  </div>
</div>