# Core Networking Devices

<hr class="dividerSection" />

## What Is a Computer Network?

<hr class="dividerSection" />

A <span class="emphasis">computer network</span> is a digital telecommunications network that allows nodes to share resources.

The simplest possible network is just two PCs connected together.

Typically, end devices are not connected directly to each other. Instead, their connections are aggregated through a device called a <span class="emphasis">switch</span>.

<hr class="dividerSection" />

## Networking Devices Overview

<hr class="dividerSection" />

Networking devices are <span class="emphasis">intermediate devices</span> that connect end devices and control how traffic flows across a network.

They do not usually generate user data themselves. Instead, they:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>move traffic</li>
    <li>direct traffic</li>
    <li>filter traffic</li>
    <li>manage connectivity</li>
  </ul>
</div>

These devices operate at different <span class="emphasis">OSI layers</span> depending on their function.

<hr class="dividerSection" />

### Switch

<hr class="dividerSection" />

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

<hr class="dividerSection" />

### Router

<hr class="dividerSection" />

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

<hr class="dividerSection" />

### Firewall

<hr class="dividerSection" />

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
      <td class="tableCell">Layers 3-7 (depending on type)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Common Use</td>
      <td class="tableCell">Protecting internal networks from threats</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

### Access Point (AP)

<hr class="dividerSection" />

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

<hr class="dividerSection" />

### Modem

<hr class="dividerSection" />

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
      <td class="tableCell">Layer 1-2</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Common Use</td>
      <td class="tableCell">Home or business ISP connection</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## How These Devices Work Together

<hr class="dividerSection" />

In a small network:

<div class="centeredNumberedList">
  1. **End devices connect**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>End devices connect to a <span class="emphasis">switch</span> or <span class="emphasis">access point</span>.</li>
    </ul>
  </div>

  2. **Internal forwarding**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>The switch forwards traffic internally.</li>
    </ul>
  </div>

  3. **External traffic**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>The <span class="emphasis">router</span> sends traffic to external networks.</li>
    </ul>
  </div>

  4. **Filtering**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>The <span class="emphasis">firewall</span> filters traffic.</li>
    </ul>
  </div>

  5. **ISP connection**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>The <span class="emphasis">modem</span> connects the network to the ISP.</li>
    </ul>
  </div>
</div>

Each device performs a specialized function in ensuring traffic moves efficiently and securely.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/devices-and-models/fundamentals/network-infrastructure">← Back</a>
    <div class="xrefTitle">Foundations - Devices & Models - Network Infrastructure</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/devices-and-models/fundamentals/home-network-architecture">Next →</a>
    <div class="xrefTitle">Foundations - Devices & Models - Home Network Architecture</div>
  </div>
</div>