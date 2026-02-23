# Who Owns the Internet?
---

The **internet is not owned by any single individual or organization.** It is a **global collection of interconnected networks** that follow standardized communication protocols.

- It operates as a **"network of networks,"** where multiple smaller networks interconnect.
- **Data travels** through various technologies, including **fiber-optic cables, wireless transmission, and satellites**.

---
## **Who Regulates the Internet?**
---

Although no single entity owns the internet, **organizations help maintain its structure**:
- **ICANN:** Manages domain names and IP addresses.
- **IETF:** Develops and maintains internet communication standards.
- **IANA & Regional Internet Registries (RIRs):** Allocate IP addresses to ISPs.
<br><br>

---
## **How the Internet Works**
---

The internet allows **devices and networks** to exchange data efficiently.

1. **Internet Service Providers (ISPs)** provide access to homes and businesses.
2. **Packets of data** travel across interconnected networks, passing through multiple routing points.
3. **Websites, cloud applications, and databases** are hosted on **remote servers**.

### **Example: How a Webpage Loads**
1. A user enters www.example.com in a web browser.
2. The browser contacts a **DNS server** to retrieve the **IP address** of the website.
3. The request is routed across the **internet backbone** to the web server.
4. The web server responds, and the page is displayed.

*(For details on DNS, refer to the **DNS and Name Resolution** section.)*

---
## **The Role of ISPs and the Internet Backbone**
---

An <span class="emphasis">Internet Service Provider (ISP)</span> connects home and business networks to the global internet.

ISPs may be:
- Cable providers
- Telephone companies
- Cellular providers
- Independent providers leasing infrastructure

ISPs interconnect with other ISPs in a <span class="emphasis">hierarchical structure</span> to form the global internet.

At the highest level, major providers are connected through the <span class="emphasis">internet backbone</span> — a high-capacity network of fiber-optic links that connect major metropolitan areas worldwide.

Fiber-optic cables:
- Run underground across continents
- Run under oceans between continents
- Provide extremely high bandwidth and reliability

---
## Internet Connection Types
---

Internet connections vary in **speed, reliability, and infrastructure**.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Connection Type</th>
      <th class="tableCellHeader">Speed</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Fiber Optic</td>
      <td class="tableCell">1 Gbps or more</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">DSL</td>
      <td class="tableCell">1–100 Mbps</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Satellite</td>
      <td class="tableCell">Up to 100 Mbps</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">5G Wireless</td>
      <td class="tableCell">Up to 10 Gbps</td>
    </tr>
  </tbody>
</table>

<br>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Connection Type</th>
      <th class="tableCellHeader">Common Usage</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Fiber Optic</td>
      <td class="tableCell">High-speed residential & business</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">DSL</td>
      <td class="tableCell">Home broadband</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Satellite</td>
      <td class="tableCell">Rural areas</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">5G Wireless</td>
      <td class="tableCell">Mobile internet</td>
    </tr>
  </tbody>
</table>

<br>

---
### Geographic Availability & Infrastructure
---

Most home network users do not connect directly to their service providers with fiber-optic cables.  
The type of internet connection available depends largely on:

- geographic location
- existing infrastructure
- service provider availability

In metropolitan areas, many apartments and offices are increasingly connected directly with <span class="emphasis">fiber-optic cables</span>, enabling very high bandwidth and support for bundled services such as internet, phone, and television.

In suburban, small-town, and rural areas, other connection methods are more common.

---
### Cable Internet
---

Cable internet is typically offered by cable television service providers.

- The internet data signal is carried on the same <span class="emphasis">coaxial cable</span> that delivers cable television.
- It provides a <span class="emphasis">high-bandwidth, always-on</span> connection.
- A special <span class="emphasis">cable modem</span> separates the internet data signal from other signals on the cable.
- The modem provides an <span class="emphasis">Ethernet connection</span> to a computer or local network (LAN).

Cable is widely available in suburban and urban areas.

---
### DSL (Digital Subscriber Line)
---

DSL provides a <span class="emphasis">high-bandwidth, always-on</span> connection using traditional telephone lines.

- Requires a special <span class="emphasis">DSL modem</span>.
- The modem separates the DSL data signal from the telephone voice signal.
- Provides an Ethernet connection to a host computer or LAN.

DSL divides the telephone line into three channels:

1. A voice channel for telephone calls.
2. A faster download channel for receiving data.
3. An upload channel for sending data (usually slower than download).

Users can make phone calls without disconnecting from the internet.

The quality and speed of a DSL connection depend primarily on:

- the quality of the telephone line
- the distance from the telephone company’s central office

The farther a location is from the central office, the slower the DSL connection.

DSL is common in small towns and some rural areas, but may not be available in very remote regions.

---
### Cellular Internet
---

Cellular internet access uses a mobile carrier network (such as LTE or 5G) to provide connectivity.

Wherever a cellular signal is available, internet access may be possible.

Performance depends on:

- signal strength
- tower congestion
- device capabilities
- service plan limitations

Carriers often meter data usage and may charge additional fees or throttle speeds after certain limits.

---
### Mobile Hotspots (Tethering)
---

Many smartphones and dedicated mobile devices can operate as a <span class="emphasis">mobile hotspot</span>.

A hotspot:

- Uses the cellular network as its wide area (WAN) connection.
- Shares that connection locally so nearby devices can access the internet (typically over Wi-Fi).

The term “hotspot” refers to the localized wireless access area created by the device — not device temperature.

<div class="xrefBox">
  <span class="emphasis">For deeper detail, see:</span>
  <a href="/mobile/basics/tethering/hotspots-and-tethering">
    Mobile → Basics → Tethering → Hotspots & Tethering
  </a>
</div>

---
### Satellite Internet
---

Satellite service is a good option for homes or offices that do not have access to DSL or cable.

- Requires a satellite dish with a clear line-of-sight to the satellite.
- Can be difficult in heavily wooded areas or locations with physical obstructions.
- Equipment and installation costs may be higher than other options.
- Monthly service plans vary by provider and speed tier.

Satellite internet is particularly valuable in remote or rural areas where no other broadband infrastructure exists.

Because signals must travel long distances between Earth and orbiting satellites, satellite connections typically have <span class="emphasis">higher latency</span> than cable or DSL.

Severe weather (heavy rain or snow) may temporarily degrade signal quality.

---
### Dial-Up Internet (Legacy)
---

Dial-up is an older and inexpensive connection method that uses a traditional telephone line and modem.

- The modem calls the ISP’s access phone number to establish a connection.
- Provides very low bandwidth compared to broadband options.
- Typically prevents phone calls while connected.

Dial-up should only be considered when higher-speed connections are not available.  
It has largely been replaced by modern broadband technologies.

---
### **For More on Speed Evolution**
---

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tcpip-model/layers/network-access/basics/physical/bandwidth-and-throughput/bandwidth">
    TCP/IP Model → Network Access → Physical → Bandwidth
  </a>
</div>

---
### **Future of the Internet**
---

The internet continues to evolve with new technologies:
- **IPv6 Expansion:** Enables more devices to connect.
- **Low Earth Orbit (LEO) Satellites:** Expand global internet coverage.
- **Edge Computing:** Improves speed and reduces latency.

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/fundamentals/introduction">← Back</a>
    <div class="xrefTitle">Foundations - Fundamentals - Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/fundamentals/local-networks">Next →</a>
    <div class="xrefTitle">Foundations - Fundamentals - Local Networks</div>
  </div>
</div>