## Layer 2: Data Link Layer Overview

---

### What Is Layer 2?

Layer 2, also known as the **Data Link Layer**, defines how devices communicate over a **local network**.  
It packages data into frames and uses **MAC addresses** to deliver them to the correct device.

It’s the layer responsible for **local delivery**, sitting just above the physical hardware (Layer 1).

---

### Key Functions of Layer 2

Layer 2 is responsible for:

- **Framing:** Wrapping data into manageable chunks  
- **Addressing:** Using **MAC addresses** for sender/receiver ID  
- **Error detection:** Ensuring frames arrive correctly  
- **Flow control:** Regulating how fast devices exchange data

These services allow local devices to talk — no routers required.

---

### Where MAC Addresses Come In

Every device’s <span class="emphasis">Network Interface Card (NIC)</span> has a built-in <span class="emphasis">MAC address</span> (also called a BIA).  
Layer 2 uses these addresses to direct traffic between devices.

For more details on MAC format, uniqueness, and NICs, see:  
- <span class="emphasis">Burned-In Address (BIA)</span>

---

### When ARP Enters the Picture

When a device only knows the IP of its target, it uses <span class="emphasis">ARP</span> to find out what MAC address to use.  
This lets Layer 2 hand off the frame to the right recipient.

To explore ARP tables and command-line tools, see:  
- <span class="emphasis">Address Resolution Protocol (ARP)</span>

---

### Layer 2 Protocols

Layer 2 supports common protocols like:

- <span class="emphasis">Ethernet (IEEE 802.3)</span> — <span class="secondEmphasis">wired</span> networks  
- <span class="emphasis">Wi-Fi (IEEE 802.11)</span> — <span class="secondEmphasis">wireless</span> networks

These define how devices frame and transmit data at Layer 2.

---

### Summary

Layer 2 defines the rules for **local communication**.  
It wraps data, labels it with addresses, and ensures it arrives intact — all without needing a router.

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/advanced/multicast-fundamentals/pim-sm-dm-concepts">← Back</a>
    <div class="xrefTitle">Topic: TCP/IP Model - Internet - Advanced - Multicast Fundamentals - PIM SM/DM (Concepts)</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/network-access/basics/data-link/core-concepts/arp">Next →</a>
    <div class="xrefTitle">Data Link - Core Concepts - Address Resolution Protocol (ARP)</div>
  </div>
</div>