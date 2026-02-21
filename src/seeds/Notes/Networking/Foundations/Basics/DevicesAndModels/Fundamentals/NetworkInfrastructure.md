# Introduction

---

### What Is Network Infrastructure?

---

A <span class="emphasis">network infrastructure</span> is the foundation that allows devices to communicate.  
It includes the <span class="emphasis">devices</span> and the <span class="emphasis">media</span> used to carry data from one endpoint to another.

Network infrastructure is commonly grouped into three categories:

- <span class="emphasis">End Devices</span>
- <span class="emphasis">Intermediate Devices</span>
- <span class="emphasis">Network Media</span>

---

### End Devices

---

<span class="emphasis">End devices</span> are where communication begins or ends. They act as the <span class="emphasis">source</span> or <span class="emphasis">destination</span> of network traffic.

In order to uniquely identify hosts on a network, each device uses addressing (such as MAC and IP addresses) defined in higher networking layers.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">End Device</th>
      <th class="tableCellHeader">Common Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Laptop / Desktop</td>
      <td class="tableCell">User access to applications and network services</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Smartphone / Tablet</td>
      <td class="tableCell">Mobile communication and cloud access</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">IP Phone</td>
      <td class="tableCell">Voice communication over an IP network</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Printer</td>
      <td class="tableCell">Shared printing over the network</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Server</td>
      <td class="tableCell">Provides centralized services and resources</td>
    </tr>
  </tbody>
</table>

---

### Intermediate Devices

---

<span class="emphasis">Intermediate devices</span> connect end devices together and move traffic through the network.

They provide:

- switching and forwarding
- routing between networks
- segmentation and traffic control
- security filtering and access control

<div class="xrefBox">
  <span class="emphasis">For deeper detail, see:</span>
  <a href="/foundations/basics/devices-and-models/network-devices">Foundations → Devices & Models → Networking Devices</a>
</div>

---

### Network Media

---

<span class="emphasis">Network media</span> is the path that carries signals between devices.

Examples include:

- Copper cabling
- Fiber-optic cabling
- Wireless radio (Wi-Fi / cellular)

<div class="xrefBox">
  <span class="emphasis">For deeper detail, see:</span>
  <ul>
    <li>
      <a href="/tcpip-model/layers/network-access/basics/physical/signals-and-media/introduction">
        TCP/IP Model → Network Access → Physical → Signals & Media → Introduction
      </a>
    </li>
    <li>
      <a href="/tcpip-model/layers/network-access/basics/physical/signals-and-media/bit-digital-signals">
        TCP/IP Model → Network Access → Physical → Signals & Media → Bit/Digital Signals
      </a>
    </li>
    <li>
      <a href="/tcpip-model/layers/network-access/basics/physical/transmission/communication-standards">
        TCP/IP Model → Network Access → Physical → Transmission Concepts → Communication Standards
      </a>
    </li>
    <li>
      <a href="/tcpip-model/layers/network-access/basics/physical/transmission/data-transmission-methods">
        TCP/IP Model → Network Access → Physical → Transmission Concepts → Data Transmission Methods
      </a>
    </li>
  </ul>
</div>

---

### Network Media by Scope

---

Network media can also be categorized by how far communication travels and who controls the infrastructure.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Category</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">LAN (Local Area Network)</td>
      <td class="tableCell">Connects devices within a limited area such as a home, office, or campus.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">WAN (Wide Area Network)</td>
      <td class="tableCell">Connects multiple LANs across cities, countries, or globally.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Wireless Media</td>
      <td class="tableCell">Uses radio transmission instead of physical cabling (see Wireless section).</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Cloud</td>
      <td class="tableCell">Represents external networks or services outside the local infrastructure (see Cloud section).</td>
    </tr>
  </tbody>
</table>

---

### How Data Moves Through Infrastructure

---

Network communication follows a predictable path:

1. Data originates at an <span class="emphasis">end device</span>.
2. It travels across <span class="emphasis">network media</span>.
3. It passes through <span class="emphasis">intermediate devices</span>.
4. It arrives at the destination <span class="emphasis">end device</span>.

Infrastructure provides the stable and reliable platform that allows this communication to occur — whether across a single cable or across global networks.

---
### Home Connection to an ISP (Typical Setup)
---

Most home users do not see the infrastructure beyond their local network.  
For a home network, connecting to an ISP is usually straightforward, but the devices used matter for <span class="emphasis">security</span>.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Connection Option</th>
      <th class="tableCellHeader">What It Means</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Modem → Single Computer</td>
      <td class="tableCell">A direct connection to the ISP. This is <span class="secondEmphasis">not recommended</span> because the device is exposed without a protective gateway.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Modem → Router (Most Common)</td>
      <td class="tableCell">The router provides a safer connection by acting as the network gateway and separating internal devices from the internet.</td>
    </tr>
  </tbody>
</table>

In many homes, the router is an <span class="emphasis">integrated wireless router</span> that includes:
- a <span class="emphasis">switch</span> for wired devices
- a <span class="emphasis">wireless access point (AP)</span> for Wi-Fi devices
- basic services such as IP addressing for internal hosts

---
### Summary
---

- Network infrastructure consists of <span class="emphasis">end devices</span>, <span class="emphasis">intermediate devices</span>, and <span class="emphasis">network media</span>.
- End devices generate or receive traffic.
- Intermediate devices move traffic and enforce connectivity/security.
- Media carries the signals that transport data.
- LAN, WAN, Wireless, and Cloud describe how infrastructure is organized and scaled.

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/fundamentals/connected-devices">← Back</a>
    <div class="xrefTitle">Previous Topic: Foundations Fundamentals → Connected Devices</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/devices-and-models/fundamentals/network-devices">Next →</a>
    <div class="xrefTitle">Foundations → Devices & Models → Networking Devices</div>
  </div>
</div>