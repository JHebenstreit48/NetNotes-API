# Glossary - Network Access - Data Link - Frames & Addressing

<hr class="dividerSection" />

### MAC Address

<hr class="dividerSubsection1" />

48-bit physical address assigned to NICs for Layer 2 communication on local networks.

<hr class="dividerSubsection1" />

### Local vs Remote MAC Usage

<hr class="dividerSubsection1" />

Local: Destination MAC = target device.

Remote: Destination MAC = default gateway.

MAC changes hop-by-hop; IP remains constant.

<hr class="dividerSubsection1" />

### Ethernet Frame Fields

<hr class="dividerSubsection1" />

An Ethernet frame is divided into structured fields controlling synchronization, addressing, payload identification, and error detection.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Preamble</span>, 7 bytes, synchronizes the receiving NIC with the incoming bit stream</li>
    <li><span class="emphasis">Start Frame Delimiter (SFD)</span>, 1 byte, signals the frame is about to begin</li>
    <li><span class="emphasis">Destination MAC Address</span>, 6 bytes</li>
    <li><span class="emphasis">Source MAC Address</span>, 6 bytes</li>
    <li><span class="emphasis">Length / Type</span>, 2 bytes, payload size or encapsulated protocol type</li>
    <li><span class="emphasis">Data (Payload)</span>, 46–1500 bytes, padded if smaller than the minimum</li>
    <li><span class="emphasis">Frame Check Sequence (FCS)</span>, 4 bytes</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Frame Check Sequence (FCS)

<hr class="dividerSubsection1" />

A trailer field in an Ethernet frame used for error detection, calculated using a Cyclic Redundancy Check (CRC).

The receiving device recalculates this value and discards the frame if it doesn't match, indicating corruption during transmission.

<hr class="dividerSubsection1" />

### Burned-In Address (BIA)

<hr class="dividerSubsection1" />

A permanent hardware identifier assigned by the manufacturer to a device's NIC, more commonly known as a MAC address.

48 bits (6 bytes), written in hexadecimal. The first half identifies the manufacturer (OUI); the second half is device-specific.

<hr class="dividerSection" />

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/data-link/frames-and-addressing/mac-addressing" target="_blank" rel="noopener noreferrer">Data Link → Frames & Addressing → MAC Addressing</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/data-link/frames-and-addressing/ethernet-frame-fields" target="_blank" rel="noopener noreferrer">Data Link → Frames & Addressing → Ethernet Frame Fields</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/data-link/frames-and-addressing/burned-in-address-bia" target="_blank" rel="noopener noreferrer">Data Link → Frames & Addressing → Burned-In Address (BIA)</a>
</div>

<hr class="dividerSection" />