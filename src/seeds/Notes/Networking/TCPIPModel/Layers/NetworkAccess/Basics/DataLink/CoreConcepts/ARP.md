## Address Resolution Protocol (ARP)

---

### What Is ARP?

**ARP** maps **IP addresses** (Layer 3) to **MAC addresses** (Layer 2).  
When a device wants to send data to an IP on the same network, it uses ARP to find the matching MAC address.

---

### ARP in Action

1. A device checks its ARP cache  
2. If the IP isn't listed, it broadcasts an ARP Request:  
   *"Who has 192.168.1.10? Tell 192.168.1.1"*
3. The correct device replies with its MAC address  
4. That response is cached for future use

---

### ARP Cache Viewing

Each OS has different ways to view the ARP table:

- **Windows**
  - <span class="codeSnip">arp -a</span>: Show cached entries
  - arp: See options/help
- **Linux/Ubuntu**
  - ip neigh show or arp -n: Show current table
- **macOS**
  - arp -a: Show table
  - arp: Show usage help

---

### Static ARP Entries (Manual)

You can add or delete static entries:

- **Windows**
  - arp -s <IP> <MAC>: Add entry  
  - arp -d <IP>: Delete entry
- **Linux**
  - ip neigh add or arp -s
  - ip neigh del <IP> dev <iface>
- **macOS**
  - arp -s <IP> <MAC>  
  - arp -d <IP>

---

### ARP vs DNS

Think of ARP as the **Layer 2 version of DNS**:

- DNS: IP → Hostname  
- ARP: IP → MAC Address

Both are lookup systems that bridge identifiers to usable addresses.

---

### Summary

ARP is the behind-the-scenes translator that helps your machine say:  
*“Okay, I know the IP — but how do I find the device?”*

It’s essential for local packet delivery and Layer 2 accuracy.

---

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