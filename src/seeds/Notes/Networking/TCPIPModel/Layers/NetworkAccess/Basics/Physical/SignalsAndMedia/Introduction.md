# What Is the Physical Layer?

<hr class="dividerSection" />

Layer 1 represents the <span class="emphasis">physical components</span> used to transmit data across a network.

This includes:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Physical media</li>
    <li>Electrical, optical, or wireless signals</li>
    <li>Connectors and interfaces</li>
  </ul>
</div>

At this layer, data exists only as <span class="emphasis">bits</span>.

<hr class="dividerSection" />

### Media Types

<hr class="dividerSection" />

The physical layer transmits data using different media:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Copper cables</span> (electrical signals)</li>
    <li><span class="emphasis">Fiber-optic cables</span> (light signals)</li>
    <li><span class="emphasis">Wireless airwaves</span> (radio, infrared, microwave)</li>
  </ul>
</div>

Each medium has unique properties that affect speed, distance, and reliability.

<hr class="dividerSection" />

### What This Layer Includes

<hr class="dividerSection" />

The Physical layer defines things like cables, connectors, signal levels, and link speeds, all of the physical aspects of communication.

Examples include copper UTP cables, fiber-optic cables, Wi-Fi radios and antennas, and network interface cards (NICs).

Each network interface has a NIC inside the device, responsible for actually transmitting and receiving signals.

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/cabling-and-interfaces/copper-connectors" target="_blank" rel="noopener noreferrer">Physical → Cabling & Interfaces → Copper Connectors</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/cabling-and-interfaces/fiber-connectors-and-transceivers" target="_blank" rel="noopener noreferrer">Physical → Cabling & Interfaces → Fiber Connectors & Transceivers</a>
</div>

The physical aspects of transmitting data are very complex, involving a great deal of electrical or optical engineering.

Fortunately, network engineers typically do not need to know these low-level details to work effectively with networks.

<hr class="dividerSection" />

### Signals

<hr class="dividerSection" />

A <span class="emphasis">signal</span> is the physical representation of binary data.

Depending on the medium, signals may be:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Electrical pulses</li>
    <li>Light flashes</li>
    <li>Radio waves</li>
  </ul>
</div>

These signals carry bits from one device to another.

<hr class="dividerSection" />

### Relationship to Layer 2

<hr class="dividerSection" />

Once bits arrive at a device:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Layer 1 delivers raw bits upward</li>
    <li>Layer 2 interprets them as frames</li>
  </ul>
</div>

Layer 1 does <span class="emphasis">not</span> understand addresses, frames, or protocols, only signals.

<hr class="dividerSection" />

### Summary

<hr class="dividerSection" />

The Physical Layer defines <span class="emphasis">how bits move</span>.

Without Layer 1, no higher-layer communication can occur, regardless of protocol or addressing.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/network-access/basics/data-link/frames-and-addressing/burned-in-address-bia">← Back</a>
    <div class="xrefTitle">Section: Data Link - Frames & Addressing - BIA</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/network-access/basics/physical/signals-and-media/bit-digital-signals">Next →</a>
    <div class="xrefTitle">Signals & Media - Bit/Digital Signals</div>
  </div>
</div>