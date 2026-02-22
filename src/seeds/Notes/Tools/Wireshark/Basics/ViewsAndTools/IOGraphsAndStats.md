<hr class="dividerMain">

# Wireshark - IO Graphs & Stats

<hr class="dividerMain">

Wireshark includes built-in statistics views that help you understand traffic patterns beyond individual packets.

<hr class="dividerSection" />

### IO Graphs

<hr class="dividerSection" />

IO graphs help visualize traffic over time.

Common things to graph:

- Packets per second  
- Throughput trends  
- Spikes during failures or congestion  
- Response bursts (like DNS storms or retries)  

Use IO graphs when you need to answer:

- “When did the problem start?”  
- “Is traffic steady or bursty?”  
- “Did retransmissions spike?”  

<hr class="dividerSection" />

### Useful Statistics Views

<hr class="dividerSection" />

Examples of stats that can be useful:

- Protocol hierarchy (what protocols dominate the capture)  
- Conversations (top talkers, endpoints, and pairs)  
- Endpoints (who is talking the most)  
- TCP-related summaries (when available in your view/version)  

<hr class="dividerSection" />

### Troubleshooting Patterns

<hr class="dividerSection" />

Wireshark stats can help diagnose:

- Latency spikes (traffic bursts, retries)  
- DNS issues (repeated queries, missing responses)  
- Congestion behavior (high packet rate or large throughput shifts)  

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/wireshark/basics/views-and-tools/packet-bytes-tree">← Back</a>
    <div class="xrefTitle">Wireshark - Views & Tools - Packet/Bytes/Tree</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/wireshark/advanced/analysis/follow-streams-and-rtt">Next →</a>
    <div class="xrefTitle">Next Section: Wireshark - Analysis - Follow Streams & RTT</div>
  </div>
</div>