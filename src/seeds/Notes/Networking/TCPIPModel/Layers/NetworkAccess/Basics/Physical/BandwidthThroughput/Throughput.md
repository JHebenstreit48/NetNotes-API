# Throughput

---

## What is Throughput?
---

Throughput is the measure of the **actual amount of data** transferred over a network connection during a given period of time. It is similar to bandwidth but accounts for **real-world performance**, not just theoretical capacity.

Unlike bandwidth, throughput is often **lower than the maximum bandwidth** due to various influencing factors, such as:

- The amount of <span class="emphasis">data</span> being <span class="secondEmphasis">sent</span> and <span class="secondEmphasis">received</span>
- The types of <span class="emphasis">data</span> being <span class="emphasis">transmitted</span>
- The <span class="emphasis">number</span> of <span class="secondEmphasis">devices</span> and <span class="secondEmphasis">latency</span> between <span class="emphasis">source</span> and <span class="emphasis">destination</span>

Latency refers to the time, including delays, it takes for data to travel from one point to another.

---
### Throughput vs Bandwidth
---

While **bandwidth** is the maximum potential capacity of a connection, **throughput** is what you actually get in real-world performance.

- Bandwidth describes the size of the “pipe.”  
- Throughput describes how much data successfully flows through that pipe.

Throughput measures the total amount of data transferred, including:

- Useful application content  
- Background network traffic  

For example:

- Control messages  
- Error corrections  
- Retransmitted packets  

All count toward throughput.

This means a high-bandwidth network may still experience poor throughput if congestion, delays, or errors are present.

---
### Practical Limitations
---

In networks with multiple segments or paths, throughput is ultimately limited by the **slowest segment** — the weakest link in the chain.

Even if most parts of the route support high bandwidth, a single lower-capacity segment can reduce overall end-to-end throughput.

---
### Measuring Throughput
---

Throughput is commonly measured in **megabits per second (Mbps)** or **gigabits per second (Gbps)** — the same units used for bandwidth.

A common real-world tool to check network throughput is:

- <span class="emphasis">speedtest.net</span>

It measures both:

- <span class="emphasis">Download speed</span> — how fast data is received  
- <span class="emphasis">Upload speed</span> — how fast data is sent  

Most home internet services provide faster download speeds than upload speeds.

---
## 📎 Related Topics
---

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tcpip-model/layers/network-access/basics/physical/bandwidth-and-throughput/bandwidth">
    Physical - Bandwidth & Throughput - Bandwidth
  </a>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tcpip-model/layers/network-access/basics/physical/transmission/data-transmission-methods">
    Physical - Transmission Concepts - Data Transmission Methods
  </a>
</div>

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/network-access/basics/physical/bandwidth-and-throughput/bandwidth">← Back</a>
    <div class="xrefTitle">Physical - Bandwidth & Throughput - Bandwidth</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/network-access/basics/physical/encap-deencap/encapsulation">Next →</a>
    <div class="xrefTitle">Section: Physical - Encap/De-encap - Encapsulation</div>
  </div>
</div>