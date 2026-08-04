# Switching: Layer 2 Concepts & Architecture

<hr class="dividerSection" />

## Layer 2 Concepts

<hr class="dividerSection" />

### MAC Address

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A unique hardware identifier assigned to a device's Network Interface Card (NIC).</li>
    <li>Used by switches to learn device locations and make forwarding decisions.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Frame

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The Layer 2 data unit used on Ethernet networks.</li>
  </ul>
</div>

Contains:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Source <span class="codeSnip">MAC</span></li>
    <li>Destination <span class="codeSnip">MAC</span></li>
    <li>Payload</li>
    <li>Error-checking fields (for example <span class="codeSnip">FCS</span>)</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Collision Domain

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A network segment where simultaneous transmissions can collide.</li>
  </ul>
</div>

In modern switched Ethernet:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Each switch port is typically its own collision domain.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Switches and Internal Architecture

<hr class="dividerSection" />

### Switch

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A Layer 2 device that forwards frames using MAC address learning.</li>
  </ul>
</div>

Core behavior includes:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Learning source MAC addresses per port</li>
    <li>Building a MAC address table</li>
    <li>Forwarding frames based on destination MAC lookup</li>
    <li>Flooding unknown and broadcast frames</li>
  </ul>
</div>

Switches reduce collisions by segmenting traffic per port.

<hr class="dividerSubsection1" />

### Switch Fabric

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The internal switching architecture that enables simultaneous forwarding between ports.</li>
    <li>Determines overall throughput and performance capabilities.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/glossary/networking/switching/hosts-and-ports">← Back</a>
    <div class="xrefTitle">Glossary - Switching - Hosts & Ports</div>
  </div>

  <!-- <div class="xrefItem">
    <a class="xrefBtn" href="">Next →</a>
    <div class="xrefTitle"></div>
  </div> -->
</div>