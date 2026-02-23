<hr class="dividerMain">

# Wireshark - Follow Streams & RTT

<hr class="dividerMain">

Wireshark can reconstruct conversations to help you troubleshoot end-to-end communication.

<hr class="dividerSection" />

### Follow Streams

<hr class="dividerSection" />

“Follow Stream” views help isolate a single conversation.

Common stream types:

- TCP streams (web sessions, many app protocols)  
- UDP streams (depends on protocol and visibility)  

Use follow streams to:

- Trace request/response behavior  
- Confirm payload content (when not encrypted)  
- Verify session direction and timing  

<hr class="dividerSection" />

### RTT Concepts

<hr class="dividerSection" />

<span class="emphasis">RTT (Round-Trip Time)</span> is the time it takes for a packet to go from a sender to a receiver and get a response back.

RTT is useful for:

- Detecting latency issues  
- Comparing “fast” vs “slow” sessions  
- Identifying delays caused by network path or congestion  

Symptoms you might see:

- Slow handshake completion  
- Long gaps between request and response  
- Retransmissions after timeouts  

<hr class="dividerSection" />

### Practical Use Cases

<hr class="dividerSection" />

Common troubleshooting goals:

- Diagnose network latency patterns  
- Identify bottlenecks or delays in communication  
- Validate whether slow performance is network-related or app-related  

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/wireshark/basics/views-and-tools/io-graphs-and-stats">← Back</a>
    <div class="xrefTitle">Previous Section: Wireshark - Views & Tools - IO Graphs & Stats</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/wireshark/advanced/analysis/tls-keys-and-decryption">Next →</a>
    <div class="xrefTitle">Wireshark - Analysis - TLS Keys & Decryption</div>
  </div>
</div>