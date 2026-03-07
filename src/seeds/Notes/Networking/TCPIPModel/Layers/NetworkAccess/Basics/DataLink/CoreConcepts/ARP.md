# Address Resolution Protocol (ARP)

<hr class="dividerSection" />

## What Is ARP?

<hr class="dividerSection" />

<span class="emphasis">ARP</span> maps <span class="emphasis">IP addresses</span> (Layer 3) to <span class="emphasis">MAC addresses</span> (Layer 2).  
When a device wants to send data to an IP on the same network, it uses ARP to find the matching MAC address.

<hr class="dividerSubsection1" />

### MAC vs IP Addresses

<hr class="dividerSubsection1" />

MAC addresses are physical (Layer 2), assigned to hardware, and used for local network delivery.

IP addresses are logical (Layer 3), assigned to devices, and used for end-to-end routing across networks.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>MAC: Fixed (burned-in), 48-bit hexadecimal (e.g., 00:11:22:33:44:55).</li>
    <li>IP: Configurable, 32-bit decimal for IPv4 (e.g., 192.168.1.10).</li>
    <li>ARP bridges them for local Ethernet framing.</li>
  </ul>
</div>

<hr class="dividerSection" />

## ARP Process

<hr class="dividerSection" />

ARP resolves IP to MAC using a request-reply mechanism with broadcast containment.

<div class="centeredNumberedList">

1. <span class="emphasis">Check ARP Cache</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Device checks its ARP table for the destination IP's MAC entry.</li>
  </ul>
</div>

2. <span class="emphasis">Send ARP Request (if no entry)</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Broadcast ARP request: "Who has 192.168.1.10? Tell 192.168.1.1".</li>
    <li>Destination MAC: FF:FF:FF:FF:FF:FF (Ethernet broadcast).</li>
    <li>Contained to broadcast domain (switches forward to all ports in VLAN, routers do not forward).</li>
  </ul>
</div>

3. <span class="emphasis">Target Replies</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Target device (with matching IP) sends unicast ARP reply with its MAC.</li>
  </ul>
</div>

4. <span class="emphasis">Cache and Use Entry</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Sender adds entry to ARP table for future use.</li>
    <li>Encapsulates data in frame with resolved MAC and sends.</li>
  </ul>
</div>

</div>

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tcpip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/broadcast-domains-and-segmentation">
    Internet Layer → Basics → IP Addressing → Subnetting & Gateways → Broadcast Domains & Segmentation
  </a>
</div>

<hr class="dividerSubsection1" />

### Broadcast Containment

<hr class="dividerSubsection1" />

ARP requests are broadcasts, but contained to the local broadcast domain to prevent flooding.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Broadcast domain: Set of devices that receive broadcasts (e.g., VLAN or subnet).</li>
    <li>Switches forward broadcasts within domain; routers block them between domains.</li>
    <li>Reduces traffic and prevents ARP storms in large networks.</li>
  </ul>
</div>

<hr class="dividerSection" />

## ARP Cache Viewing

<hr class="dividerSection" />

Each OS has different ways to view the ARP table.

For Windows/Linux/macOS: Show cached entries

```shell
arp -a
```

For Windows/Linux/macOS: Show usage help

```shell
arp
```

For Linux/Ubuntu: Show current table (alternative)

```shell
ip neigh show
```

For Linux/Ubuntu: Show current table (numeric, no resolution)

```shell
arp -n
```

<hr class="dividerSubsection1" />

### Static ARP Entries (Manual)

<hr class="dividerSubsection1" />

You can add or delete static entries.

For Windows/macOS: Add entry

```shell
arp -s <IP> <MAC>
```

For Windows/macOS: Delete entry

```shell
arp -d <IP>
```

For Linux: Add entry (alternative)

```shell
ip neigh add <IP> lladdr <MAC> dev <iface>
```

For Linux: Delete entry

```shell
ip neigh del <IP> dev <iface>
```

<hr class="dividerSection" />

## ARP vs DNS

<hr class="dividerSection" />

Think of ARP as the <span class="emphasis">Layer 2 version of DNS</span>:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>DNS: Hostname → IP</li>
    <li>ARP: IP → MAC Address</li>
  </ul>
</div>

Both are lookup systems that bridge identifiers to usable addresses.

<hr class="dividerSection" />

## ARP Issues

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Excessive broadcasts in large domains.</li>
    <li>ARP spoofing/poisoning attacks (mitigated by dynamic ARP inspection).</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Summary

<hr class="dividerSubsection1" />

ARP is the behind-the-scenes translator that helps your machine say:  
<span class="emphasis">“Okay, I know the IP — but how do I find the device?”</span>

It’s essential for local packet delivery and Layer 2 accuracy.

<hr class="dividerSection" />

<div class="xrefBox">
  <span class="emphasis">See related concepts:</span><br />
  <a href="/tcpip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/broadcast-domains-and-segmentation">
    Internet Layer → Basics → IP Addressing → Subnetting & Gateways → Broadcast Domains & Segmentation
  </a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/network-access/basics/data-link/core-concepts/de-encapsulation">← Back</a>
    <div class="xrefTitle">Data Link - Core Concepts De-encapsulation</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/network-access/basics/data-link/frames-and-addressing/mac-addressing">Next →</a>
    <div class="xrefTitle">Section: Data Link - Frames & Addressing - MAC Addressing</div>
  </div>
</div>