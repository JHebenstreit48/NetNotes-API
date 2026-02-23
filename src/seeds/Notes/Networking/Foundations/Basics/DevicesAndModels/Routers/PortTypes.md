
# Introduction

---
### Purpose of Router Ports
---

Home and small business routers separate two different networks:

- The <span class="emphasis">public network</span> (Internet / ISP)
- The <span class="emphasis">private local network</span> (LAN)

Router ports reflect this separation.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/foundations/basics/devices-and-models/fundamentals/home-network-architecture">
    Foundations → Devices & Models → Home Network Architecture
  </a>
</div>

---
### LAN (Ethernet) Ports
---

Most home routers include multiple ports labeled:

- Ethernet  
- LAN  
- 1, 2, 3, 4  

These ports connect to the router’s internal switch.

All devices plugged into LAN ports:

- Share the same local network  
- Receive private IP addresses  
- Can communicate directly with each other  

Wired devices typically connect using RJ45 Ethernet cables.

---
### Internet / WAN Port
---

Routers also include one dedicated port labeled:

- Internet  
- WAN  
- Sometimes a globe icon  

This port connects the router to:

- A cable modem  
- A DSL modem  
- An Optical Network Terminal (ONT)  
- A fixed wireless device  

The WAN port is logically separate from the LAN ports.

Traffic entering this port is considered external to the home network.

---
### Logical Network Separation
---

In default configurations:

- LAN ports and Wi-Fi belong to the same local network.
- The WAN port belongs to a different network.

The router performs:

- Network Address Translation (NAT)  
- Packet forwarding  
- Basic firewall filtering  

This separation protects internal devices from direct exposure to the public internet.

---
### Integrated Wireless Access Point
---

Most home routers include:

- A built-in Ethernet switch  
- A built-in wireless access point  

Wireless devices connect through radio signals but join the same LAN as wired devices.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/wireless/basics/architecture/bss-ess-ssid">
    Wireless → WLAN Architecture → BSS/ESS/SSID
  </a>
</div>

---
### Typical Port Layout
---

A typical home router may include:

<table>
  <tr>
    <th>Port Type</th>
    <th>Function</th>
  </tr>
  <tr>
    <td>WAN / Internet</td>
    <td>Connects to ISP equipment (modem or ONT).</td>
  </tr>
  <tr>
    <td>LAN Ethernet</td>
    <td>Connects internal wired devices.</td>
  </tr>
</table>

Internally, the device performs multiple networking roles even though it appears as a single unit.

---
### Relationship to Switching
---

The LAN ports function similarly to a small Layer 2 switch built into the router.

For larger networks, a dedicated switch may connect to one of the LAN ports to expand capacity.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/switching/basics/hardware-and-port-types/switches-and-connectors">
    Switching → Hardware & Port Types → Switches and Connectors
  </a>
</div>

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/devices-and-models/routers/interfaces">← Back</a>
    <div class="xrefTitle">Foundations - Devices & Models - Routers - Interfaces</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/devices-and-models/routers/routing-vs-switching">Next →</a>
    <div class="xrefTitle">Section: Routers - Routing vs Switching</div>
  </div>
</div>