# The Building Blocks of Network Infrastructure

<hr class="dividerSection" />

### What Is Network Infrastructure?

<hr class="dividerSection" />

A <span class="emphasis">network infrastructure</span> is the foundation that allows devices to communicate.

It includes the <span class="emphasis">devices</span> and the <span class="emphasis">media</span> used to carry data from one endpoint to another.

Network infrastructure is commonly grouped into three categories:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">End Devices</span></li>
    <li><span class="emphasis">Intermediate Devices</span></li>
    <li><span class="emphasis">Network Media</span></li>
  </ul>
</div>

<hr class="dividerSection" />

### End Devices

<hr class="dividerSection" />

<span class="emphasis">End devices</span> are where communication begins or ends.

They act as the <span class="emphasis">source</span> or <span class="emphasis">destination</span> of network traffic.

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

<hr class="dividerSection" />

### Intermediate Devices

<hr class="dividerSection" />

<span class="emphasis">Intermediate devices</span> connect end devices together and move traffic through the network.

They provide:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Switching and forwarding</li>
    <li>Routing between networks</li>
    <li>Segmentation and traffic control</li>
    <li>Security filtering and access control</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">For deeper detail, see:</span>
  <a href="/foundations/basics/devices-and-models/network-devices" target="_blank" rel="noopener noreferrer">Foundations → Devices & Models → Networking Devices</a>
</div>

<hr class="dividerSection" />

### Network Media

<hr class="dividerSection" />

<span class="emphasis">Network media</span> is the path that carries signals between devices.

Examples include:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Copper cabling</li>
    <li>Fiber-optic cabling</li>
    <li>Wireless radio (Wi-Fi / cellular)</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">For deeper detail, see:</span><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/signals-and-media/introduction" target="_blank" rel="noopener noreferrer">TCP/IP Model → Network Access → Physical → Signals & Media → Introduction</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/signals-and-media/bit-digital-signals" target="_blank" rel="noopener noreferrer">TCP/IP Model → Network Access → Physical → Signals & Media → Bit/Digital Signals</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/transmission/communication-standards" target="_blank" rel="noopener noreferrer">TCP/IP Model → Network Access → Physical → Transmission Concepts → Communication Standards</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/transmission/data-transmission-methods" target="_blank" rel="noopener noreferrer">TCP/IP Model → Network Access → Physical → Transmission Concepts → Data Transmission Methods</a>
</div>

<hr class="dividerSection" />

### Network Media by Scope

<hr class="dividerSection" />

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

<hr class="dividerSection" />

### How Data Moves Through Infrastructure

<hr class="dividerSection" />

Network communication follows a predictable path:

<div class="centeredNumberedList">
  1. **Originates at an End Device**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Data originates at an end device.</li>
    </ul>
  </div>

  2. **Travels Across Network Media**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>It travels across network media.</li>
    </ul>
  </div>

  3. **Passes Through Intermediate Devices**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>It passes through intermediate devices.</li>
    </ul>
  </div>

  4. **Arrives at the Destination End Device**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>It arrives at the destination end device.</li>
    </ul>
  </div>
</div>

Infrastructure provides the stable and reliable platform that allows this communication to occur, whether across a single cable or across global networks.

<hr class="dividerSection" />

### Home Connection to an ISP (Typical Setup)

<hr class="dividerSection" />

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
      <td class="tableCell">A direct connection to the ISP. This is <span class="emphasis">not recommended</span> because the device is exposed without a protective gateway.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Modem → Router (Most Common)</td>
      <td class="tableCell">The router provides a safer connection by acting as the network gateway and separating internal devices from the internet.</td>
    </tr>
  </tbody>
</table>

In many homes, the router is an <span class="emphasis">integrated wireless router</span> that includes:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A <span class="emphasis">switch</span> for wired devices</li>
    <li>A <span class="emphasis">wireless access point (AP)</span> for Wi-Fi devices</li>
    <li>Basic services such as IP addressing for internal hosts</li>
  </ul>
</div>

<hr class="dividerSection" />

### Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Network infrastructure consists of <span class="emphasis">end devices</span>, <span class="emphasis">intermediate devices</span>, and <span class="emphasis">network media</span>.</li>
    <li>End devices generate or receive traffic.</li>
    <li>Intermediate devices move traffic and enforce connectivity/security.</li>
    <li>Media carries the signals that transport data.</li>
    <li>LAN, WAN, Wireless, and Cloud describe how infrastructure is organized and scaled.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/foundations/basics/fundamentals/devices-and-communication/protocols-and-standards">← Back</a>
    <div class="xrefTitle">Section: Foundations - Fundamentals - Devices & Communication - Protocols & Standards</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/foundations/basics/devices-and-models/fundamentals/network-devices">Next →</a>
    <div class="xrefTitle">Foundations - Devices & Models - Networking Devices</div>
  </div>
</div>