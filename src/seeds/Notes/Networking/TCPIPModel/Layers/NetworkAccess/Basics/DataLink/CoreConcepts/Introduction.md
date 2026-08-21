# How Devices Talk on a Local Network

<hr class="dividerSection" />

### What Is Layer 2?

<hr class="dividerSection" />

Layer 2, also known as the <span class="emphasis">Data Link Layer</span>, defines how devices communicate over a <span class="emphasis">local network</span>.

It packages data into frames and uses <span class="emphasis">MAC addresses</span> to deliver them to the correct device.

It's the layer responsible for <span class="emphasis">local delivery</span>, sitting just above the physical hardware (Layer 1).

<hr class="dividerSection" />

### Key Functions of Layer 2

<hr class="dividerSection" />

Layer 2 is responsible for:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Framing</span>, wrapping data into manageable chunks</li>
    <li><span class="emphasis">Addressing</span>, using MAC addresses for sender/receiver ID</li>
    <li><span class="emphasis">Error detection</span>, ensuring frames arrive correctly</li>
    <li><span class="emphasis">Flow control</span>, regulating how fast devices exchange data</li>
  </ul>
</div>

These services allow local devices to communicate, no routers required.

<hr class="dividerSection" />

### Hop-to-Hop Delivery

<hr class="dividerSection" />

<span class="emphasis">Layer 2</span> provides <span class="secondEmphasis">hop-to-hop</span> delivery of messages on a <span class="emphasis">local network</span>.

A <span class="emphasis">hop</span> is <span class="secondEmphasis">one step</span> along the <span class="emphasis">path</span> between <span class="secondEmphasis">two devices</span>, from <span class="emphasis">one router</span> or <span class="emphasis">host</span> to the <span class="emphasis">next router</span> or <span class="emphasis">host</span> in the <span class="secondEmphasis">path</span>.

<span class="emphasis">Switches</span> <span class="secondEmphasis">do not count</span> as hops.

A <span class="emphasis">switch</span> simply <span class="emphasis">extends</span> the <span class="emphasis">local network</span>, allowing <span class="emphasis">multiple devices</span> to <span class="emphasis">connect</span>, rather than representing a distinct step along the path.

For example, consider a message sent from <span class="emphasis">PC1</span> to <span class="emphasis">SRV1</span> across <span class="emphasis">two routers</span>, R1 and R2:

<div class="centeredNumberedList">
  1. <span class="emphasis">First hop</span>

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>PC1 to R1</li>
    </ul>
  </div>

  2. <span class="emphasis">Second hop</span>

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>R1 to R2</li>
    </ul>
  </div>

  3. <span class="emphasis">Third hop</span>

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>R2 to SRV1</li>
    </ul>
  </div>
</div>

This example has <span class="emphasis">three hops</span> in total, even though switches may also sit along the physical path connecting these devices.

<hr class="dividerSection" />

### Where MAC Addresses Come In

<hr class="dividerSection" />

Every device's <span class="emphasis">Network Interface Card (NIC)</span> has a built-in <span class="emphasis">MAC address</span> (also called a BIA).

Layer 2 uses these addresses to direct traffic between devices.

When a router has multiple interfaces connected to the network, each interface has its own MAC address.

For example, in the PC1-to-SRV1 scenario above, if R1 and R2 each have interfaces labeled G1 and G2:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>PC1 sends the message to the MAC address of R1's G1 interface.</li>
    <li>R1 sends the message to the MAC address of R2's G1 interface.</li>
    <li>R2 sends the message to the MAC address of SRV1's interface.</li>
  </ul>
</div>

For more details on MAC format, uniqueness, and NICs:

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/data-link/frames-and-addressing/burned-in-address-bia" target="_blank" rel="noopener noreferrer">TCP/IP Model → Network Access → Data Link → Frames & Addressing → Burned-In Address (BIA)</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/data-link/frames-and-addressing/mac-addressing" target="_blank" rel="noopener noreferrer">TCP/IP Model → Network Access → Data Link → Frames & Addressing → MAC Addressing</a>
</div>

<hr class="dividerSection" />

### When ARP Enters the Picture

<hr class="dividerSection" />

When a device only knows the IP address of its target, it uses <span class="emphasis">ARP</span> to determine the correct MAC address.

This allows Layer 2 to forward the frame to the appropriate device on the local network.

To explore ARP tables and command-line tools:

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/networking/tcp-ip-model/layers/network-access/basics/data-link/core-concepts/arp" target="_blank" rel="noopener noreferrer">TCP/IP Model → Network Access → Data Link → Core Concepts → Address Resolution Protocol (ARP)</a>
</div>

<hr class="dividerSection" />

### Layer 2 Protocols

<hr class="dividerSection" />

Layer 2 supports common protocols such as:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Ethernet (IEEE 802.3)</span>, used on wired networks</li>
    <li><span class="emphasis">Wi-Fi (IEEE 802.11)</span>, used on wireless networks</li>
  </ul>
</div>

These protocols define how devices frame and transmit data at the Data Link layer.

A term like <span class="emphasis">Ethernet</span> actually spans two different layers, and it is worth keeping this distinction clear.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>At Layer 2, Ethernet defines <span class="emphasis">framing and MAC addressing</span>, how devices structure and address messages on the local network.</li>
    <li>At Layer 1, Ethernet also defines the <span class="emphasis">signaling and physical media</span> used to actually transmit those frames, such as electrical voltage changes over copper cabling.</li>
  </ul>
</div>

So "Ethernet" is not a single-layer protocol, it has both a Layer 2 component and a Layer 1 component operating under the same name.

<hr class="dividerSection" />

### Understanding Framing Through Analogy

<hr class="dividerSection" />

Think of sending data across a network like mailing a letter.

The message inside the envelope represents the <span class="emphasis">payload</span>, the actual data being delivered.

The envelope represents the <span class="emphasis">Layer 2 frame</span>, which contains addressing information required for local delivery.

Just as different countries may use different mailing formats or packaging requirements, wired and wireless networks use different frame formats:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Ethernet (802.3)</span> for wired networks</li>
    <li><span class="emphasis">Wi-Fi (802.11)</span> for wireless networks</li>
  </ul>
</div>

The contents inside the frame may be identical, but the outer framing and addressing structure can differ depending on the medium.

This process of placing one message format inside another is called <span class="emphasis">encapsulation</span>.

<hr class="dividerSection" />

### Summary

<hr class="dividerSection" />

Layer 2 defines the rules for <span class="emphasis">local communication</span>.

It wraps data into frames, labels it with MAC addresses, and ensures reliable delivery across a local segment, all without requiring a router.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/internet/advanced/multicast-fundamentals/pim-sm-dm-concepts">← Back</a>
    <div class="xrefTitle">Topic: TCP/IP Model - Internet - Advanced - Multicast Fundamentals - PIM SM/DM (Concepts)</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/network-access/basics/data-link/core-concepts/encapsulation">Next →</a>
    <div class="xrefTitle">Data Link - Core Concepts - Encapsulation</div>
  </div>
</div>