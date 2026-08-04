# Power over Ethernet (PoE)

<hr class="dividerSection" />

<span class="emphasis">Power over Ethernet (PoE)</span> is a technology that allows network switches and injectors to deliver electrical power to connected devices over the same twisted-pair Ethernet cable used for data transmission.

This eliminates the need for separate power cables or nearby electrical outlets, making it ideal for devices installed in locations where running power is impractical.

<hr class="dividerSection" />

### Key Terms

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">PSE</span> (<span class="secondEmphasis">Power Sourcing Equipment</span>), the device that supplies power, typically a PoE-capable switch or a PoE injector</li>
    <li><span class="emphasis">PD</span> (<span class="secondEmphasis">Powered Device</span>), the device that receives power over the Ethernet cable</li>
  </ul>
</div>

<hr class="dividerSection" />

### Common PoE-Powered Devices

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>IP phones</li>
    <li>Wireless access points</li>
    <li>IP cameras</li>
    <li>Access control readers</li>
    <li>IoT sensors</li>
  </ul>
</div>

<hr class="dividerSection" />

### IEEE 802.3af (PoE)

<hr class="dividerSection" />

The original PoE standard, ratified in <span class="emphasis">2003</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Maximum power output from PSE: <span class="emphasis">15.4W</span></li>
    <li>Minimum power available at PD after cable loss: <span class="secondEmphasis">12.95W</span></li>
    <li>Uses <span class="emphasis">two wire pairs</span> for power delivery</li>
    <li>Suitable for basic IP phones, simple IP cameras, and low-power IoT devices</li>
  </ul>
</div>

<hr class="dividerSection" />

### IEEE 802.3at (PoE+)

<hr class="dividerSection" />

An enhancement over 802.3af, ratified in <span class="emphasis">2009</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Maximum power output from PSE: <span class="emphasis">30W</span></li>
    <li>Minimum power available at PD after cable loss: <span class="secondEmphasis">25.5W</span></li>
    <li>Uses <span class="emphasis">two wire pairs</span> for power delivery</li>
    <li>Suitable for dual-band wireless access points, video phones, and higher-resolution cameras</li>
    <li>Backward compatible with 802.3af devices</li>
  </ul>
</div>

<hr class="dividerSection" />

### IEEE 802.3bt (PoE++ / 4PPoE)

<hr class="dividerSection" />

The most recent PoE advancement, ratified in <span class="emphasis">2018</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Uses <span class="emphasis">all four wire pairs</span> for power delivery, enabling significantly higher wattage</li>
    <li>Backward compatible with 802.3af and 802.3at devices</li>
  </ul>
</div>

Introduced two types:

<hr class="dividerSubsection1" />

#### Type 3

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Maximum power output from PSE: <span class="emphasis">60W</span></li>
    <li>Suitable for high-power access points, PTZ cameras, and building automation devices</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

#### Type 4

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Maximum power output from PSE: <span class="emphasis">90-100W</span></li>
    <li>Suitable for advanced surveillance systems, large displays, and thin clients</li>
  </ul>
</div>

<hr class="dividerSection" />

### Quick Reference

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Standard</th>
      <th class="tableCellHeader">Common Name</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">IEEE 802.3af</td>
      <td class="tableCell">PoE</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">IEEE 802.3at</td>
      <td class="tableCell">PoE+</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">IEEE 802.3bt Type 3</td>
      <td class="tableCell">PoE++</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">IEEE 802.3bt Type 4</td>
      <td class="tableCell">PoE++</td>
    </tr>
  </tbody>
</table>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Standard</th>
      <th class="tableCellHeader">Max PSE Power / Wire Pairs Used</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">IEEE 802.3af</td>
      <td class="tableCell">15.4W / 2 pairs</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">IEEE 802.3at</td>
      <td class="tableCell">30W / 2 pairs</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">IEEE 802.3bt Type 3</td>
      <td class="tableCell">60W / 4 pairs</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">IEEE 802.3bt Type 4</td>
      <td class="tableCell">90-100W / 4 pairs</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/switching/basics/hardware-and-port-types/ethernet-speed-history">← Back</a>
    <div class="xrefTitle">Hardware & Port Types - Ethernet Speed History</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/switching/advanced/vlans/concepts/vlan-concepts">Next →</a>
    <div class="xrefTitle">Section: Switching - Advanced - VLANs - Concepts - VLAN Concepts</div>
  </div>
</div>