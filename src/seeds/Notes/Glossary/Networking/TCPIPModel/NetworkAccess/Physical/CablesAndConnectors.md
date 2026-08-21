# Glossary - Network Access - Physical - Cables & Connectors

<hr class="dividerSection" />

## Copper Cabling

<hr class="dividerSection" />

### Twisted-Pair Cabling

<hr class="dividerSubsection1" />

Ethernet cabling made of 4 twisted wire pairs, twisting reduces electromagnetic interference (EMI), crosstalk, and signal distortion.  

The most common medium for connecting end devices in a LAN.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">UTP (Unshielded Twisted Pair)</span>, most common in homes/offices, no shielding</li>
    <li><span class="emphasis">STP (Shielded Twisted Pair)</span>, shielded for electrically noisy environments</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Cable Categories (Cat Ratings)

<hr class="dividerSubsection1" />

Category rating defines a twisted-pair cable's electrical performance, signaling frequency, crosstalk tolerance, distance limits, and typical speeds.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Cat5e</span>, reliable for 1 Gbps at standard distances</li>
    <li><span class="emphasis">Cat6</span>, improved crosstalk performance</li>
    <li><span class="emphasis">Cat6a</span>, better high-frequency performance, higher-speed structured cabling</li>
    <li><span class="emphasis">Cat8</span>, high-speed short-run copper for specialized environments</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Coaxial Cable

<hr class="dividerSubsection1" />

Copper-based medium using a single solid copper core, used for cable television, broadband internet (DOCSIS), and satellite.  

Common connectors are F-Type (cable TV/internet) and BNC (legacy/specialized equipment).  

Typically terminates at a cable modem in home networks.

<hr class="dividerSubsection1" />

### RJ-45 / 8P8C Connector

<hr class="dividerSubsection1" />

The standard connector for twisted-pair Ethernet cabling, 8-position, 8-contact.  

RJ stands for Registered Jack.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Plug</span>, male connector crimped onto a patch cable</li>
    <li><span class="emphasis">Jack</span>, female connector on switches, routers, wall plates, patch panels</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Copper Ethernet Standards (IEEE 802.3)

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">10BASE-T (802.3i)</span>, 10 Mbps, "Ethernet"</li>
    <li><span class="emphasis">100BASE-T (802.3u)</span>, 100 Mbps, "Fast Ethernet"</li>
    <li><span class="emphasis">1000BASE-T (802.3ab)</span>, 1 Gbps, "Gigabit Ethernet"</li>
    <li><span class="emphasis">10GBASE-T (802.3an)</span>, 10 Gbps, "10 Gig Ethernet"</li>
  </ul>
</div>

All support a maximum cable length of 100 meters over twisted-pair copper.  

BASE refers to baseband signaling, T refers to twisted-pair.

<hr class="dividerSection" />

## Fiber Optic

<hr class="dividerSection" />

### Fiber Optic Cable

<hr class="dividerSubsection1" />

Transmission medium carrying data as light pulses rather than electrical signals, does not conduct electricity or emit signals, immune to EMI.  

Used for enterprise backbones, data centers, ISP infrastructure, and FTTH.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Core</span>, glass/plastic strand carrying light</li>
    <li><span class="emphasis">Cladding</span>, reflects light back into the core</li>
    <li><span class="emphasis">Buffer coating</span>, protects the strand</li>
    <li><span class="emphasis">Outer jacket</span>, physical protection</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Single-Mode vs Multi-Mode Fiber

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Single-Mode (SMF)</span>, narrow core, laser-based, long-distance, used in ISP/long-haul links</li>
    <li><span class="emphasis">Multi-Mode (MMF)</span>, wider core, LED-based, shorter-distance, used in buildings/data centers</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Fiber Connectors

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">LC (Lucent Connector)</span>, SFP modules, high-density switch ports</li>
    <li><span class="emphasis">SC (Subscriber Connector)</span>, older installations, some residential ONT connections</li>
    <li><span class="emphasis">ST (Straight Tip)</span>, legacy systems</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Transceivers (SFP Modules)

<hr class="dividerSubsection1" />

Pluggable modules that convert electrical signals from a switch into optical signals for fiber transmission, and vice versa.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">SFP</span>, 1 Gbps</li>
    <li><span class="emphasis">SFP+</span>, 10 Gbps</li>
    <li><span class="emphasis">SFP28</span>, 25 Gbps</li>
  </ul>
</div>

<hr class="dividerSection" />

## Alternative Media

<hr class="dividerSection" />

### Powerline Networking

<hr class="dividerSubsection1" />

Extends an existing LAN using a home's electrical wiring, via adapters plugged into outlets and connected to devices over Ethernet.  

Not a replacement for physical cabling or Wi-Fi, useful where wireless coverage is weak and new cabling isn't practical.  

Adapters generally need to be on the same electrical circuit/panel, and performance varies with wiring quality and electrical noise.

<hr class="dividerSection" />

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/cabling-and-interfaces/ethernet-cabling-categories" target="_blank" rel="noopener noreferrer">Physical → Cabling & Interfaces → Ethernet Cabling Categories</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/cabling-and-interfaces/coaxial-cable" target="_blank" rel="noopener noreferrer">Physical → Cabling & Interfaces → Coaxial Cable</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/cabling-and-interfaces/copper-connectors" target="_blank" rel="noopener noreferrer">Physical → Cabling & Interfaces → Copper Connectors</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/cabling-and-interfaces/fiber-connectors-and-transceivers" target="_blank" rel="noopener noreferrer">Physical → Cabling & Interfaces → Fiber Connectors & Transceivers</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/cabling-and-interfaces/powerline-networking" target="_blank" rel="noopener noreferrer">Physical → Cabling & Interfaces → Powerline Networking</a>
</div>

<hr class="dividerSection" />