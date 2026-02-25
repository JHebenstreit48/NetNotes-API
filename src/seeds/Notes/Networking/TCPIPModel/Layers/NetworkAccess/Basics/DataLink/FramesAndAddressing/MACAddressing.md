# What Is MAC Addressing?

MAC addressing is the mechanism Layer 2 uses to identify **source and destination devices** on a local network.

Every frame includes:
- A **source MAC address**
- A **destination MAC address**

These addresses determine how switches forward frames.

---

### MAC Address Usage in Frames

When a device sends data:
- The source MAC identifies the sender
- The destination MAC identifies the next hop

Switches examine only MAC addresses to make forwarding decisions.

---

### Viewing MAC Addresses

You can view MAC addresses using operating system tools:

#### Windows
- ipconfig /all

Displays:
- Network interface details
- MAC address (Physical Address)

#### Linux / Ubuntu
- ip link show
- ifconfig -a

MAC addresses appear as:
- link/ether

#### macOS
- ifconfig

MAC addresses appear as:
- ether

---

### MAC Address vs IP Address

- MAC address → Local delivery (Layer 2)
- IP address → Network delivery (Layer 3)

Both are required for successful communication.

---

### Summary

MAC addressing enables **local device identification**.

Without MAC addresses, switches would have no way to forward frames inside a network.

---

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