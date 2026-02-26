# How Devices Talk on a Local Network

<hr class="dividerSection" />

### What Is Layer 2?

<hr class="dividerSection" />

Layer 2, also known as the **Data Link Layer**, defines how devices communicate over a **local network**.  
It packages data into frames and uses **MAC addresses** to deliver them to the correct device.

It’s the layer responsible for **local delivery**, sitting just above the physical hardware (Layer 1).

<hr class="dividerSection" />

### Key Functions of Layer 2

<hr class="dividerSection" />

Layer 2 is responsible for:

- **Framing:** Wrapping data into manageable chunks  
- **Addressing:** Using **MAC addresses** for sender/receiver ID  
- **Error detection:** Ensuring frames arrive correctly  
- **Flow control:** Regulating how fast devices exchange data  

These services allow local devices to communicate — no routers required.

<hr class="dividerSection" />

### Where MAC Addresses Come In

<hr class="dividerSection" />

Every device’s <span class="emphasis">Network Interface Card (NIC)</span> has a built-in <span class="emphasis">MAC address</span> (also called a BIA).  
Layer 2 uses these addresses to direct traffic between devices.

For more details on MAC format, uniqueness, and NICs:

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tcpip-model/layers/network-access/basics/data-link/frames-and-addressing/burned-in-address-bia">
    TCP/IP Model → Network Access → Data Link → Frames & Addressing → Burned-In Address (BIA)
  </a>
  <br />
  <a href="/tcpip-model/layers/network-access/basics/data-link/frames-and-addressing/mac-addressing">
    TCP/IP Model → Network Access → Data Link → Frames & Addressing → MAC Addressing
  </a>
</div>

<hr class="dividerSection" />

### When ARP Enters the Picture

<hr class="dividerSection" />

When a device only knows the IP address of its target, it uses <span class="emphasis">ARP</span> to determine the correct MAC address.  
This allows Layer 2 to forward the frame to the appropriate device on the local network.

To explore ARP tables and command-line tools:

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tcpip-model/layers/network-access/basics/data-link/core-concepts/arp">
    TCP/IP Model → Network Access → Data Link → Core Concepts → Address Resolution Protocol (ARP)
  </a>
</div>

<hr class="dividerSection" />

### Layer 2 Protocols

<hr class="dividerSection" />

Layer 2 supports common protocols such as:

- <span class="emphasis">Ethernet (IEEE 802.3)</span> — <span class="secondEmphasis">wired</span> networks  
- <span class="emphasis">Wi-Fi (IEEE 802.11)</span> — <span class="secondEmphasis">wireless</span> networks  

These protocols define how devices frame and transmit data at the Data Link layer.

<hr class="dividerSection" />

### Understanding Framing Through Analogy

<hr class="dividerSection" />

Think of sending data across a network like mailing a letter.

The message inside the envelope represents the <span class="emphasis">payload</span> — the actual data being delivered.

The envelope represents the <span class="emphasis">Layer 2 frame</span>, which contains addressing information required for local delivery.

Just as different countries may use different mailing formats or packaging requirements, wired and wireless networks use different frame formats:

- <span class="emphasis">Ethernet (802.3)</span> for wired networks  
- <span class="emphasis">Wi-Fi (802.11)</span> for wireless networks  

The contents inside the frame may be identical, but the outer framing and addressing structure can differ depending on the medium.

This process of placing one message format inside another is called <span class="emphasis">encapsulation</span>.

<hr class="dividerSection" />

### Summary

<hr class="dividerSection" />

Layer 2 defines the rules for **local communication**.  
It wraps data into frames, labels it with MAC addresses, and ensures reliable delivery across a local segment — all without requiring a router.

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/advanced/multicast-fundamentals/pim-sm-dm-concepts">← Back</a>
    <div class="xrefTitle">Topic: TCP/IP Model - Internet - Advanced - Multicast Fundamentals - PIM SM/DM (Concepts)</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/network-access/basics/data-link/core-concepts/encapsulation">Next →</a>
    <div class="xrefTitle">Data Link - Core Concepts - Encapsulation</div>
  </div>
</div>