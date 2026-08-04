# Layer 1: Bits and Digital Signals

<hr class="dividerSection" />

### What Is a Bit?

<hr class="dividerSection" />

A <span class="emphasis">bit</span> <span class="secondEmphasis">(binary digit)</span> is the <span class="emphasis">smallest unit</span> of <span class="secondEmphasis">data</span> in a network.

This is part of <span class="emphasis">binary code</span>, which is how <span class="secondEmphasis">computers</span> <span class="emphasis">work</span> and <span class="emphasis">read</span> <span class="secondEmphasis">data</span>.

At the <span class="emphasis">physical layer</span>, a <span class="secondEmphasis">bit</span> is represented by a <span class="emphasis">physical state</span>, such as:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">High</span> or <span class="emphasis">low voltage</span> (electrical)</li>
    <li><span class="emphasis">Light</span> <span class="secondEmphasis">on</span> or <span class="secondEmphasis">off</span> <span class="emphasis">(fiber)</span></li>
    <li><span class="emphasis">Presence</span> or <span class="emphasis">absence</span> of <span class="secondEmphasis">radio energy</span> <span class="emphasis">(wireless)</span></li>
  </ul>
</div>

Bits do not exist as numbers at this layer, they exist as measurable physical changes.

When communicating across a copper network cable, a variation in the electrical signal is interpreted by the receiving device as a <span class="emphasis">0</span> or a <span class="emphasis">1</span>.

For example, a byte of data traveling across a wire might look like this:

<span class="codeSnip">01100111</span>

That sequence of 8 bits travels one bit at a time until the full byte is received by the neighboring device.

<hr class="dividerSection" />

### Bits vs Bytes

<hr class="dividerSection" />

A series of <span class="emphasis">8 bits</span> is equal to <span class="emphasis">1 byte</span>.

Data sent along a wire arrives one <span class="emphasis">bit</span> at a time, not one byte at a time.

Network speed is measured in <span class="emphasis">bits per second</span>, not bytes per second, for example kilobits, megabits, or gigabits per second.

Data storage (such as on a hard drive) is measured in <span class="emphasis">bytes</span> instead. Because a byte is 8 bits, a gigabyte is 8 times larger than a gigabit.

<hr class="dividerSection" />

### Digital Signaling

<hr class="dividerSection" />

Most modern networks use <span class="emphasis">digital signaling</span>.

Digital signals use discrete states to represent:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>0</li>
    <li>1</li>
  </ul>
</div>

This differs from analog signaling, which uses continuously varying signals.

<hr class="dividerSection" />

### How Devices Interpret Bits

<hr class="dividerSection" />

To interpret bits correctly, devices must agree on:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Voltage or light thresholds</li>
    <li>Timing (clock synchronization)</li>
    <li>Signal encoding format</li>
  </ul>
</div>

If timing or voltage levels are misaligned, errors can occur.

<hr class="dividerSection" />

### Signal Challenges

<hr class="dividerSection" />

Physical signals can degrade due to:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Distance</li>
    <li>Interference (noise)</li>
    <li>Crosstalk</li>
    <li>Attenuation</li>
  </ul>
</div>

Because of this, physical layer standards define limits for:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Cable length</li>
    <li>Transmission power</li>
    <li>Shielding requirements</li>
  </ul>
</div>

<hr class="dividerSection" />

### Why This Matters

<hr class="dividerSection" />

Without reliable bit transmission:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Frames cannot form</li>
    <li>Addresses cannot be read</li>
    <li>Higher-layer protocols cannot function</li>
  </ul>
</div>

All networking depends on stable digital signaling at Layer 1.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/network-access/basics/physical/signals-and-media/introduction">← Back</a>
    <div class="xrefTitle">Signals & Media - Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/network-access/basics/physical/transmission/communication-standards">Next →</a>
    <div class="xrefTitle">Section: Transmission Concepts - Communication Standards</div>
  </div>
</div>