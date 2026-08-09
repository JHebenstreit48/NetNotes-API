# Anatomy of a Home Network

<hr class="dividerSection" />

### Public Network vs Private Network

<hr class="dividerSection" />

Most home networks consist of two separate networks:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The <span class="emphasis">public network</span> (Internet Service Provider / ISP)</li>
    <li>The <span class="emphasis">private local network</span> inside the home</li>
  </ul>
</div>

The public network delivers internet service into the home.

The private network allows devices inside the home to communicate with each other and access the internet.

A <span class="emphasis">router</span> separates these two networks.

<hr class="dividerSection" />

### How Internet Service Physically Enters the Home

<hr class="dividerSection" />

Internet service can arrive using different physical technologies depending on the provider.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Delivery Type</th>
      <th class="tableCellHeader">Physical Medium</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Cable Internet</td>
      <td class="tableCell">RG-6 Coaxial Cable (DOCSIS)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">DSL</td>
      <td class="tableCell">Telephone Line</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Fiber</td>
      <td class="tableCell">Single-Mode Fiber (SC/APC connector)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Fixed Wireless / 5G</td>
      <td class="tableCell">External Antenna / Radio Link</td>
    </tr>
  </tbody>
</table>

Each delivery type requires a device that converts the ISP signal into standard Ethernet for the home network.

<hr class="dividerSection" />

### Signal Conversion: Modem vs ONT

<hr class="dividerSection" />

<hr class="dividerSubsection1" />

#### Cable (DOCSIS)

<hr class="dividerSubsection1" />

Cable internet uses a <span class="emphasis">cable modem</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Coaxial cable enters the home.</li>
    <li>The modem converts radio-frequency electrical signals into Ethernet.</li>
    <li>Ethernet connects to the router.</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">Physical Media Details:</span>
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/cabling-and-interfaces/coaxial-cable" target="_blank" rel="noopener noreferrer">TCP/IP Model → Network Access → Physical → Cabling & Interfaces → Coaxial Cable</a>
</div>

<hr class="dividerSubsection1" />

#### Fiber (GPON / FTTH)

<hr class="dividerSubsection1" />

Fiber internet uses an <span class="emphasis">Optical Network Terminal (ONT)</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Fiber optic cable carries light signals into the home.</li>
    <li>The ONT converts optical signals into Ethernet.</li>
    <li>Ethernet connects to the router.</li>
  </ul>
</div>

Some providers combine the ONT and router into one integrated device.

<hr class="dividerSection" />

### WAN vs LAN (Network Separation)

<hr class="dividerSection" />

After signal conversion, the router creates two logical sides:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">WAN (Wide Area Network)</span>, the public internet</li>
    <li><span class="emphasis">LAN (Local Area Network)</span>, the private home network</li>
  </ul>
</div>

The router performs:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Network separation</li>
    <li>NAT (Network Address Translation)</li>
    <li>Packet forwarding</li>
    <li>Basic firewall functions</li>
  </ul>
</div>

This separation protects internal devices from direct exposure to the public network.

<hr class="dividerSection" />

### Integrated Home Routers (Gateway Devices)

<hr class="dividerSection" />

Many home networking devices combine multiple functions:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Modem or ONT</li>
    <li>Router</li>
    <li>Ethernet switch</li>
    <li>Wireless Access Point</li>
  </ul>
</div>

These are commonly called:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Wireless routers</li>
    <li>Gateway devices</li>
    <li>Modem/router combos</li>
  </ul>
</div>

Internally, they still perform separate networking roles even though they appear as one device.

<hr class="dividerSection" />

### Internal Network Distribution

<hr class="dividerSection" />

Home routers typically include:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>One <span class="emphasis">Internet / WAN port</span></li>
    <li>Multiple <span class="emphasis">LAN Ethernet ports</span></li>
    <li>Built-in <span class="emphasis">Wireless Access Point (Wi-Fi)</span></li>
  </ul>
</div>

Wired and wireless devices usually share the same LAN network.

The router assigns private IP addresses using <span class="emphasis">DHCP</span>.

<hr class="dividerSection" />

### Basic Traffic Flow Inside a Home

<hr class="dividerSection" />

<div class="centeredNumberedList">
  1. **Device Connects**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>A device connects via Ethernet or Wi-Fi.</li>
    </ul>
  </div>

  2. **IP Address Assigned**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>The router assigns a private IP address.</li>
    </ul>
  </div>

  3. **Local Traffic Stays Internal**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Internal LAN traffic stays inside the network.</li>
    </ul>
  </div>

  4. **Internet-Bound Traffic Reaches the Router**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Internet-bound traffic is sent to the router.</li>
    </ul>
  </div>

  5. **Router Forwards to the ISP**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>The router forwards traffic to the ISP via the modem or ONT.</li>
    </ul>
  </div>
</div>

This architecture allows local communication and internet access while maintaining network separation.

<hr class="dividerSection" />

### Modern Variation: Mesh Networking

<hr class="dividerSection" />

Some homes use <span class="emphasis">mesh networking systems</span>.

In a mesh system:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>One primary node connects to the ISP.</li>
    <li>Additional nodes extend wireless coverage.</li>
    <li>All nodes share the same LAN network.</li>
  </ul>
</div>

Mesh systems improve coverage without changing core network architecture.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/foundations/basics/devices-and-models/fundamentals/network-devices">← Back</a>
    <div class="xrefTitle">Foundations - Devices & Models - Fundamentals - Networking Devices</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/foundations/basics/devices-and-models/fundamentals/network-models">Next →</a>
    <div class="xrefTitle">Foundations - Devices & Models - Fundamentals - Networking Models</div>
  </div>
</div>