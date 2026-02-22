
# Home Network Architecture

---
## Public Network vs Private Network
---

Most home networks consist of two separate networks:

- The <span class="emphasis">public network</span> (Internet Service Provider / ISP)
- The <span class="emphasis">private local network</span> inside the home

The public network delivers internet service into the home.

The private network allows devices inside the home to communicate with each other and access the internet.

A <span class="emphasis">router</span> separates these two networks.

---
## How Internet Service Physically Enters the Home
---

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

---
## Signal Conversion: Modem vs ONT
---

<hr class="dividerSubsection1" />

### Cable (DOCSIS)

<hr class="dividerSubsection1" />

Cable internet uses a <span class="emphasis">cable modem</span>.

- Coaxial cable enters the home.
- The modem converts radio-frequency electrical signals into Ethernet.
- Ethernet connects to the router.

---
### Fiber (GPON / FTTH)

Fiber internet uses an <span class="emphasis">Optical Network Terminal (ONT)</span>.

- Fiber optic cable carries light signals into the home.
- The ONT converts optical signals into Ethernet.
- Ethernet connects to the router.

Some providers combine the ONT and router into one integrated device.

---
## WAN vs LAN (Network Separation)
---

After signal conversion, the router creates two logical sides:

- <span class="emphasis">WAN (Wide Area Network)</span> → Public Internet
- <span class="emphasis">LAN (Local Area Network)</span> → Private home network

The router performs:

- Network separation
- NAT (Network Address Translation)
- Packet forwarding
- Basic firewall functions

This separation protects internal devices from direct exposure to the public network.

---
## Integrated Home Routers (Gateway Devices)
---

Many home networking devices combine multiple functions:

- Modem or ONT
- Router
- Ethernet switch
- Wireless Access Point

These are commonly called:

- Wireless routers
- Gateway devices
- Modem/router combos

Internally, they still perform separate networking roles even though they appear as one device.

---
## Internal Network Distribution
---

Home routers typically include:

- One <span class="emphasis">Internet / WAN port</span>
- Multiple <span class="emphasis">LAN Ethernet ports</span>
- Built-in <span class="emphasis">Wireless Access Point (Wi-Fi)</span>

Wired and wireless devices usually share the same LAN network.

The router assigns private IP addresses using <span class="emphasis">DHCP</span>.

---
## Basic Traffic Flow Inside a Home
---

1. A device connects via Ethernet or Wi-Fi.
2. The router assigns a private IP address.
3. Internal LAN traffic stays inside the network.
4. Internet-bound traffic is sent to the router.
5. The router forwards traffic to the ISP via the modem or ONT.

This architecture allows local communication and internet access while maintaining network separation.

---
## Modern Variation: Mesh Networking
---

Some homes use <span class="emphasis">mesh networking systems</span>.

In a mesh system:

- One primary node connects to the ISP.
- Additional nodes extend wireless coverage.
- All nodes share the same LAN network.

Mesh systems improve coverage without changing core network architecture.

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/devices-and-models/fundamentals/network-devices">← Back</a>
    <div class="xrefTitle">Foundations - Devices & Models - Networking Devices</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/devices-and-models/fundamentals/network-models">Next →</a>
    <div class="xrefTitle">Foundations - Devices & Models - Networking Models</div>
  </div>
</div>