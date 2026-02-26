# Identifying Devices with MAC Addresses

<hr class="dividerSection" />

### What Is MAC Addressing?

<hr class="dividerSection" />

MAC addressing is the mechanism Layer 2 uses to identify **source and destination devices** on a local network.

MAC stands for <span class="emphasis">Media Access Control</span>, the sublayer of the Data Link layer responsible for physical addressing.

Every frame includes:
- A **source MAC address**
- A **destination MAC address**

These addresses determine how switches forward frames within a local segment.

Switches store learned MAC addresses in a hardware table:

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/switching/basics/fundamentals/mac-address-table">
    Switching → Basics → Fundamentals → MAC Address Table
  </a>
</div>

<hr class="dividerSection" />

### MAC Address Usage in Frames

<hr class="dividerSection" />

When a device sends data:
- The source MAC identifies the sender
- The destination MAC identifies the next hop

Switches examine MAC addresses to make forwarding decisions.  
They do not inspect IP addresses when operating at Layer 2.

<hr class="dividerSection" />

### Viewing MAC Addresses

<hr class="dividerSection" />

You can view MAC addresses using operating system tools:

#### Windows

```shell  
ipconfig /all  
```

Displays:
- Network interface details  
- MAC address (Physical Address)

#### Linux / Ubuntu

```shell  
ip link show  
```

```shell  
ifconfig -a  
```

MAC addresses appear as:
- link/ether

#### macOS

```shell  
ifconfig  
```

MAC addresses appear as:
- ether

<hr class="dividerSection" />

### MAC Address vs IP Address

<hr class="dividerSection" />

- MAC address → Local delivery (Layer 2)  
- IP address → Network delivery (Layer 3)  

Both are required for complete communication across networks.

<hr class="dividerSection" />

### Summary

<hr class="dividerSection" />

MAC addressing enables **local device identification**.

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