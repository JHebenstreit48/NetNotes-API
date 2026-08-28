# What Is a Burned-In Address?

<hr class="dividerSection" />

### What Is a Burned-In Address?

<hr class="dividerSection" />

A <span class="emphasis">Burned-In Address (BIA)</span> is a permanent hardware identifier assigned to a device's <span class="emphasis">Network Interface Card (NIC)</span>.

It's more commonly called a <span class="emphasis">MAC address</span> and is used by Layer 2 for device identification and local delivery.

<hr class="dividerSection" />

### Other Names for the BIA

<hr class="dividerSection" />

You may hear it referred to as:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">MAC Address</span></li>
    <li><span class="emphasis">Ethernet Address</span></li>
    <li><span class="emphasis">Physical Address</span></li>
    <li><span class="emphasis">Layer 2 Address</span></li>
    <li><span class="emphasis">BIA (Burned-In Address)</span></li>
  </ul>
</div>

They all mean the same thing, a unique Layer 2 address.

<hr class="dividerSection" />

### Format and Bit Length

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The BIA is <span class="emphasis">48 bits</span>, or <span class="emphasis">6 bytes</span>, long.</li>
    <li>It's written in <span class="emphasis">hexadecimal</span>, usually with colons or hyphens.</li>
  </ul>
</div>

Example:

<span class="codeSnip">12:34:56:78:9A:BC</span>

Each pair represents 1 byte (8 bits) of the full address.

<hr class="dividerSection" />

### NICs and Device Identification

<hr class="dividerSection" />

Every device has a <span class="emphasis">Network Interface Card (NIC)</span>, the component that connects it to a network.

Each NIC is assigned a unique MAC address by the manufacturer, making it possible to identify devices on a local area network.

This address never changes unless manually spoofed.

<hr class="dividerSection" />

### Physical Connections

<hr class="dividerSection" />

Layer 2 operates over both:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Wired connections</span> (Ethernet cables to a switch)</li>
    <li><span class="emphasis">Wireless connections</span> (Wi-Fi signals to an access point)</li>
  </ul>
</div>

Regardless of the medium, MAC addresses are required for local delivery.

<hr class="dividerSection" />

### MAC Address Uniqueness

<hr class="dividerSection" />

Manufacturers are responsible for assigning <span class="emphasis">globally unique</span> MAC addresses.

The first half of the address identifies the manufacturer (OUI), and the second half is a device-specific value.

This helps prevent conflicts between devices on the same network.

<hr class="dividerSection" />

### Real-World Analogy: Community Mailboxes

<hr class="dividerSection" />

Think of a:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Neighborhood</span> with houses (IP addresses)</li>
    <li><span class="emphasis">Shared mailbox station</span> with labeled slots (MAC addresses)</li>
  </ul>
</div>

You drop a letter addressed to house .51, and the mailbox system maps it to the correct slot, similar to how ARP maps IPs to MACs and Layer 2 handles local delivery.

<hr class="dividerSection" />

### Summary

<hr class="dividerSection" />

The Burned-In Address is the Layer 2 "name tag" for every networked device.

It ensures reliable local delivery and is foundational to Ethernet and Wi-Fi networks.

Without it, no device would know who's who on the local segment.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/network-access/basics/data-link/frames-and-addressing/ethernet-frame-fields">← Back</a>
    <div class="xrefTitle">Data Link - Frames & Addressing - Ethernet Frame Fields</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/network-access/basics/physical/signals-and-media/introduction">Next →</a>
    <div class="xrefTitle">Section: Physical - Signals & Media - Introduction</div>
  </div>
</div>