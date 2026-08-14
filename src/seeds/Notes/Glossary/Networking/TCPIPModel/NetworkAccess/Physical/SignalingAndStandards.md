# Glossary - Network Access - Physical - Signaling & Standards

<hr class="dividerSection" />

### Physical Layer (Layer 1)

<hr class="dividerSubsection1" />

The layer responsible for transmitting raw bits across a network using physical media, electrical, optical, or wireless signals.  

Does not understand addresses, frames, or protocols, only signals.

<hr class="dividerSubsection1" />

### Bit

<hr class="dividerSubsection1" />

The smallest unit of data in a network.  

At Layer 1, a bit is represented by a physical state (voltage level, light pulse, or radio energy) rather than existing as a number.

<hr class="dividerSubsection1" />

### Signal

<hr class="dividerSubsection1" />

The physical representation of binary data as it moves across a medium.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Electrical</span>, voltage pulses over copper</li>
    <li><span class="emphasis">Optical</span>, light pulses over fiber</li>
    <li><span class="emphasis">Wireless</span>, radio, infrared, or microwave energy through the air</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Digital Signaling

<hr class="dividerSubsection1" />

Signaling method using discrete states (0 and 1) to represent data, as opposed to analog signaling, which uses continuously varying signals.  

Most modern networks use digital signaling.

<hr class="dividerSubsection1" />

### Communication Standards

<hr class="dividerSubsection1" />

Shared rules that let devices from different vendors transmit data compatibly.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Ethernet (IEEE 802.3)</span>, wired LAN standard</li>
    <li><span class="emphasis">Wi-Fi (IEEE 802.11)</span>, wireless LAN standard, using RF as the medium</li>
  </ul>
</div>

Media is the physical path (copper, fiber, air); standards are the rules for how devices use that path.  

Both are required for reliable communication.

<hr class="dividerSubsection1" />

### Media Selection Criteria

<hr class="dividerSubsection1" />

Four factors typically weighed when choosing network media:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Maximum distance</span>, how far the signal can travel reliably</li>
    <li><span class="emphasis">Environment</span>, noisy, outdoor, underground, or data center installation</li>
    <li><span class="emphasis">Data requirements</span>, how much data at what speed</li>
    <li><span class="emphasis">Cost</span>, media and installation expense</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Bandwidth

<hr class="dividerSubsection1" />

The theoretical maximum amount of data that can move through a medium over a given time, measured in bits per second (bps, Kbps, Mbps, Gbps, Tbps).

<hr class="dividerSubsection1" />

### Throughput

<hr class="dividerSubsection1" />

The actual amount of data transferred over a connection in real-world conditions, typically lower than bandwidth due to congestion, latency, errors, and the number of devices involved.  

Limited by the slowest segment along the path.

<hr class="dividerSubsection1" />

### Latency

<hr class="dividerSubsection1" />

The time, including delays, it takes for data to travel from one point to another.  

A key factor in why real-world throughput falls short of theoretical bandwidth.

<hr class="dividerSection" />

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/signals-and-media/introduction" target="_blank" rel="noopener noreferrer">Physical → Signals & Media → Introduction</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/signals-and-media/bit-digital-signals" target="_blank" rel="noopener noreferrer">Physical → Signals & Media → Bit/Digital Signals</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/transmission/communication-standards" target="_blank" rel="noopener noreferrer">Physical → Transmission Concepts → Communication Standards</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/transmission/data-transmission-methods" target="_blank" rel="noopener noreferrer">Physical → Transmission Concepts → Data Transmission Methods</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/bandwidth-and-throughput/bandwidth" target="_blank" rel="noopener noreferrer">Physical → Bandwidth & Throughput → Bandwidth</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/bandwidth-and-throughput/throughput" target="_blank" rel="noopener noreferrer">Physical → Bandwidth & Throughput → Throughput</a>
</div>

<hr class="dividerSection" />