# Core Networking Devices

---

## Networking Devices Overview
---

Networking devices are <span class="emphasis">intermediate devices</span> that connect end devices and control how traffic flows across a network.

They do not usually generate user data themselves. Instead, they:
- move traffic
- direct traffic
- filter traffic
- manage connectivity

These devices operate at different <span class="emphasis">OSI layers</span> depending on their function.

---

## Switch
---

A <span class="emphasis">switch</span> connects devices within the same local network (LAN).

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Switch</th>
      <th class="tableCellHeader">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Primary Function</td>
      <td class="tableCell">Forwards frames between devices on a LAN</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">OSI Layer</td>
      <td class="tableCell">Layer 2 (Data Link)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Common Use</td>
      <td class="tableCell">Internal communication inside homes or offices</td>
    </tr>
  </tbody>
</table>

---

## Router
---

A <span class="emphasis">router</span> connects different networks together.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Router</th>
      <th class="tableCellHeader">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Primary Function</td>
      <td class="tableCell">Routes packets between networks</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">OSI Layer</td>
      <td class="tableCell">Layer 3 (Network)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Common Use</td>
      <td class="tableCell">Connecting a LAN to the internet</td>
    </tr>
  </tbody>
</table>

---

## Firewall
---

A <span class="emphasis">firewall</span> controls and filters traffic for security.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Firewall</th>
      <th class="tableCellHeader">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Primary Function</td>
      <td class="tableCell">Filters traffic based on rules</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">OSI Layers</td>
      <td class="tableCell">Layers 3–7 (depending on type)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Common Use</td>
      <td class="tableCell">Protecting internal networks from threats</td>
    </tr>
  </tbody>
</table>

---

## Access Point (AP)
---

An <span class="emphasis">access point</span> provides wireless connectivity to a network.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Access Point</th>
      <th class="tableCellHeader">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Primary Function</td>
      <td class="tableCell">Extends network access via Wi-Fi</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">OSI Layer</td>
      <td class="tableCell">Layer 2 (Data Link)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Common Use</td>
      <td class="tableCell">Wireless connectivity in homes and offices</td>
    </tr>
  </tbody>
</table>

---

## Modem
---

A <span class="emphasis">modem</span> connects a local network to an internet service provider (ISP).

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Modem</th>
      <th class="tableCellHeader">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Primary Function</td>
      <td class="tableCell">Converts signals between ISP and local network</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">OSI Layers</td>
      <td class="tableCell">Layer 1–2</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Common Use</td>
      <td class="tableCell">Home or business ISP connection</td>
    </tr>
  </tbody>
</table>

---

## How These Devices Work Together
---

In a small network:

1. End devices connect to a <span class="emphasis">switch</span> or <span class="emphasis">access point</span>.
2. The switch forwards traffic internally.
3. The <span class="emphasis">router</span> sends traffic to external networks.
4. The <span class="emphasis">firewall</span> filters traffic.
5. The <span class="emphasis">modem</span> connects the network to the ISP.

Each device performs a specialized function in ensuring traffic moves efficiently and securely.

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/devices-and-models/fundamentals/network-infrastructure">← Back</a>
    <div class="xrefTitle">Foundations - Devices & Models - Network Infrastructure</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/devices-and-models/fundamentals/home-network-architecture">Next →</a>
    <div class="xrefTitle">Foundations - Devices & Models - Networking Architecture</div>
  </div>
</div>