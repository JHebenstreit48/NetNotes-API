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

## Throughput vs Bandwidth
---

While **bandwidth** is the maximum potential of the channel, **throughput** is what you actually get. Throughput does not account for the validity or usefulness of data — it simply measures how much is sent and received, regardless of whether that data is useful.

For example:
- Control messages, error corrections, and retransmissions all count toward throughput.
- A high-bandwidth network may still have poor throughput if delays or congestion exist.

---

## Practical Limitations
---

In networks with multiple segments or paths, throughput is ultimately limited by the **slowest segment** — the weakest link in the chain.

Even if most parts of the route have high bandwidth, a single low-capacity segment can reduce overall throughput for the entire path.

---

## Measuring Throughput
---

Throughput is commonly measured in **megabits per second (Mbps)** or **gigabits per second (Gbps)**, just like bandwidth.

A good real-world tool to check your network’s throughput is:
- <span class="emphasis">[speedtest.net](https://www.speedtest.net)</span>

It measures both:
- <span class="emphasis">Download speed</span>: The rate at which data is received.
- <span class="emphasis">Upload speed</span>: The rate at which data is sent.

Typically, home internet services provide **faster download speeds than upload speeds**.

---

## 📎 Related Topics
---

- <span class="emphasis">[Bandwidth](/corenetworking/tcpipmodel/networkaccess/physical/transmission/bandwidththroughput/bandwidth)</span>: Understand maximum data capacity.
- <span class="emphasis">[Data Transmission Methods](/corenetworking/tcpipmodel/networkaccess/physical/transmission/datatransmission)</span>: Learn how data moves across physical media.