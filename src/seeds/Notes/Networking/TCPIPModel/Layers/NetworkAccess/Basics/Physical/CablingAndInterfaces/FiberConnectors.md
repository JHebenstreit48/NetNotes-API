# Fiber Optic Media, Connectors, and Transceivers

<hr class="dividerSection" />

### Fiber Optic Media

<hr class="dividerSection" />

Fiber optic cable is a transmission medium that carries data using <span class="emphasis">light pulses</span> rather than electrical signals.

Unlike copper-based media, fiber does not conduct electricity.

Fiber is commonly used in:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Enterprise backbone links</li>
    <li>Data centers</li>
    <li>ISP infrastructure</li>
    <li>Fiber-to-the-Home (FTTH) deployments</li>
  </ul>
</div>

<hr class="dividerSection" />

### Structure of Fiber Cable

<hr class="dividerSection" />

A fiber optic cable consists of:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Component</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Core</td>
      <td class="tableCell">Glass or plastic strand that carries light signals</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Cladding</td>
      <td class="tableCell">Reflects light back into the core</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Buffer Coating</td>
      <td class="tableCell">Protects the fiber strand</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Outer Jacket</td>
      <td class="tableCell">Physical protection</td>
    </tr>
  </tbody>
</table>

Light is kept inside the core through <span class="emphasis">total internal reflection</span>.

<hr class="dividerSection" />

### Single-Mode vs Multi-Mode Fiber

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Type</th>
      <th class="tableCellHeader">Characteristics</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Single-Mode (SMF)</td>
      <td class="tableCell">Long-distance transmission using a narrow core and laser-based transmitters</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Multi-Mode (MMF)</td>
      <td class="tableCell">Shorter-distance transmission with a wider core and LED-based transmitters</td>
    </tr>
  </tbody>
</table>

Single-mode fiber:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Supports longer distances</li>
    <li>Used in ISP and long-haul links</li>
    <li>More expensive due to laser-based transmitters</li>
  </ul>
</div>

Multi-mode fiber:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Used in buildings and data centers</li>
    <li>Lower cost optics for shorter runs</li>
    <li>Wider core allows multiple light angles (modes) to enter the fiber</li>
  </ul>
</div>

<hr class="dividerSection" />

### Fiber Ethernet Standards (IEEE 802.3)

<hr class="dividerSection" />

Fiber Ethernet speeds are also defined by <span class="emphasis">IEEE 802.3</span> standards, with maximum distance varying by fiber mode.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Standard</th>
      <th class="tableCellHeader">Speed and Max Distance</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">1000BASE-LX (802.3z)</td>
      <td class="tableCell">1 Gbps: 550 m (≈ 1,804 ft) multimode, 5 km (≈ 3.1 mi) single-mode</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">10GBASE-SR (802.3ae)</td>
      <td class="tableCell">10 Gbps: up to 400 m (≈ 1,312 ft), multimode</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">10GBASE-LR (802.3ae)</td>
      <td class="tableCell">10 Gbps: up to 10 km (≈ 6.2 mi), single-mode</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">10GBASE-ER (802.3ae)</td>
      <td class="tableCell">10 Gbps: up to 30 km (≈ 18.6 mi), single-mode</td>
    </tr>
  </tbody>
</table>

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/networking/switching/basics/hardware-and-port-types/ethernet-speed-history" target="_blank" rel="noopener noreferrer">Switching → Hardware & Port Types → Ethernet Speed History</a>
</div>

<hr class="dividerSection" />

### Fiber Connectors

<hr class="dividerSection" />

Common fiber connectors include:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">LC (Lucent Connector)</span></li>
    <li><span class="emphasis">SC (Subscriber Connector)</span></li>
    <li>ST (Straight Tip) in legacy systems</li>
  </ul>
</div>

LC connectors are commonly used in:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>SFP modules</li>
    <li>High-density switch ports</li>
  </ul>
</div>

SC connectors are often found in:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Older installations</li>
    <li>Some residential ONT connections</li>
  </ul>
</div>

<hr class="dividerSection" />

### Transceivers (SFP Modules)

<hr class="dividerSection" />

Fiber interfaces typically require pluggable transceivers.

Common module types:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Module</th>
      <th class="tableCellHeader">Typical Speed</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">SFP</td>
      <td class="tableCell">1 Gbps</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">SFP+</td>
      <td class="tableCell">10 Gbps</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">SFP28</td>
      <td class="tableCell">25 Gbps</td>
    </tr>
  </tbody>
</table>

The transceiver converts:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Electrical signals from a switch</li>
    <li>Into optical signals for transmission</li>
  </ul>
</div>

And vice versa.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/networking/switching/basics/hardware-and-port-types/switches-and-connectors" target="_blank" rel="noopener noreferrer">Switching → Hardware & Port Types → Switches and Connectors</a>
</div>

<hr class="dividerSection" />

### How Signals Travel in Fiber

<hr class="dividerSection" />

Fiber transmits data as pulses of light generated by:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Laser diodes (long distance)</li>
    <li>LEDs (short distance)</li>
  </ul>
</div>

Light pulses represent digital bits:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Light on, 1</li>
    <li>Light off, 0</li>
  </ul>
</div>

Because fiber does not use electrical current:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>It is immune to electromagnetic interference (EMI)</li>
    <li>It is not affected by electrical noise</li>
    <li>It does not radiate signals</li>
  </ul>
</div>

<hr class="dividerSection" />

### Why Fiber Scales Better

<hr class="dividerSection" />

Compared to copper-based media:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Fiber supports significantly higher theoretical bandwidth</li>
    <li>Fiber experiences lower signal attenuation over long distances</li>
    <li>Fiber is more secure against signal tapping</li>
    <li>Fiber does not suffer from electrical interference</li>
    <li><span class="emphasis">Distance</span>, copper Ethernet is typically limited to <span class="emphasis">100 meters</span> (≈ 328 feet), while fiber can span <span class="secondEmphasis">kilometers</span> (up to several miles) depending on type.</li>
  </ul>
</div>

In residential deployments:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Fiber may terminate at an <span class="emphasis">Optical Network Terminal (ONT)</span></li>
    <li>The ONT converts light signals into Ethernet</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/networking/foundations/basics/devices-and-models/fundamentals/home-network-architecture" target="_blank" rel="noopener noreferrer">Foundations → Devices & Models → Home Network Architecture</a>
</div>

<hr class="dividerSection" />

### UTP vs Fiber Optic: Side-by-Side Comparison

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">UTP (Copper)</th>
      <th class="tableCellHeader">Fiber Optic</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Less expensive cable and ports (RJ45)</td>
      <td class="tableCell">More expensive cable and ports (SFP)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Maximum distance of 100 meters (≈ 328 feet)</td>
      <td class="tableCell">Supports much longer distances (hundreds of meters to kilometers, or roughly 1,000+ feet to several miles)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Vulnerable to EMI, though twisting helps reduce it</td>
      <td class="tableCell">Immune to electromagnetic interference (EMI)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Emits a faint signal that could be intercepted</td>
      <td class="tableCell">Does not emit any signal, no risk of signal interception</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">RJ45 ports are cheaper than SFP ports</td>
      <td class="tableCell">SFP ports are more expensive, single-mode more so than multimode</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/network-access/basics/physical/cabling-and-interfaces/copper-connectors">← Back</a>
    <div class="xrefTitle">Physical - Cabling & Interfaces - Copper Connectors</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/network-access/basics/physical/wiring-standards/t568a-vs-t568b">Next →</a>
    <div class="xrefTitle">Section: Physical - Wiring Standards - T568A vs T568B</div>
  </div>
</div>