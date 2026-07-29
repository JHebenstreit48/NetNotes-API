# Throughput

<hr class="dividerSection" />

### What is Throughput?

<hr class="dividerSection" />

Throughput is the measure of the <span class="emphasis">actual amount of data</span> transferred over a network connection during a given period of time. It is similar to bandwidth but accounts for <span class="emphasis">real-world performance</span>, not just theoretical capacity.

Unlike bandwidth, throughput is often <span class="emphasis">lower than the maximum bandwidth</span> due to various influencing factors, such as:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The amount of <span class="emphasis">data</span> being <span class="secondEmphasis">sent</span> and <span class="secondEmphasis">received</span></li>
    <li>The types of <span class="emphasis">data</span> being <span class="emphasis">transmitted</span></li>
    <li>The <span class="emphasis">number</span> of <span class="secondEmphasis">devices</span> and <span class="secondEmphasis">latency</span> between <span class="emphasis">source</span> and <span class="emphasis">destination</span></li>
  </ul>
</div>

Latency refers to the time, including delays, it takes for data to travel from one point to another.

<hr class="dividerSection" />

### Throughput vs Bandwidth

<hr class="dividerSection" />

While <span class="emphasis">bandwidth</span> is the maximum potential capacity of a connection, <span class="emphasis">throughput</span> is what you actually get in real-world performance.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Bandwidth describes the size of the "pipe."</li>
    <li>Throughput describes how much data successfully flows through that pipe.</li>
  </ul>
</div>

Throughput measures the total amount of data transferred, including:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Useful application content</li>
    <li>Background network traffic</li>
  </ul>
</div>

For example:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Control messages</li>
    <li>Error corrections</li>
    <li>Retransmitted packets</li>
  </ul>
</div>

All count toward throughput.

This means a high-bandwidth network may still experience poor throughput if congestion, delays, or errors are present.

<hr class="dividerSection" />

### Practical Limitations

<hr class="dividerSection" />

In networks with multiple segments or paths, throughput is ultimately limited by the <span class="emphasis">slowest segment</span>, the weakest link in the chain.

Even if most parts of the route support high bandwidth, a single lower-capacity segment can reduce overall end-to-end throughput.

<hr class="dividerSection" />

### Measuring Throughput

<hr class="dividerSection" />

Throughput is commonly measured in <span class="emphasis">megabits per second (Mbps)</span> or <span class="emphasis">gigabits per second (Gbps)</span>, the same units used for bandwidth.

A common real-world tool to check network throughput is:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">speedtest.net</span></li>
  </ul>
</div>

It measures both:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Download speed</span>, how fast data is received</li>
    <li><span class="emphasis">Upload speed</span>, how fast data is sent</li>
  </ul>
</div>

Most home internet services provide faster download speeds than upload speeds.

<hr class="dividerSection" />

### Related Topics

<hr class="dividerSection" />

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/bandwidth-and-throughput/bandwidth" target="_blank" rel="noopener noreferrer">Physical - Bandwidth & Throughput - Bandwidth</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/transmission/data-transmission-methods" target="_blank" rel="noopener noreferrer">Physical - Transmission Concepts - Data Transmission Methods</a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/network-access/basics/physical/bandwidth-and-throughput/bandwidth">← Back</a>
    <div class="xrefTitle">Physical - Bandwidth & Throughput - Bandwidth</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/network-access/basics/physical/encap-deencap/encapsulation">Next →</a>
    <div class="xrefTitle">Section: Physical - Encap/De-encap - Encapsulation</div>
  </div>
</div>