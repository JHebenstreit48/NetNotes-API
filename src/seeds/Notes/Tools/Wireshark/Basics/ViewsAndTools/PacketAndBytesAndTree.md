<hr class="dividerMain">

# Wireshark - Packet / Bytes / Tree

<hr class="dividerMain">

Wireshark organizes captured traffic into panes that help you move from “big picture” to “deep detail.”

<hr class="dividerSection" />

### Packet List (Top Pane)

<hr class="dividerSection" />

The packet list shows:

- Time  
- Source and destination  
- Protocol  
- Summary “Info” field  

This is where you quickly spot patterns like:

- Repeated DNS queries  
- TCP retransmissions  
- Connection resets  
- Unexpected protocol chatter  

<hr class="dividerSection" />

### Packet Details (Tree View)

<hr class="dividerSection" />

The packet details pane shows protocol layers and fields.

This is where you inspect:

- Ethernet headers  
- IP addressing  
- TCP/UDP ports  
- Application protocol fields (DNS/HTTP/etc.)  

Example DNS detail concepts you may see:

- Query name  
- Response codes  
- <span class="emphasis">Answer RRs (Resource Records)</span> in responses  

<hr class="dividerSection" />

### Packet Bytes (Hex View)

<hr class="dividerSection" />

The bytes pane shows the raw packet payload.

This is useful when:

- You need to confirm exact content  
- You want to see the raw encoded data  
- You are validating offsets and byte-level structure  

<hr class="dividerSection" />

### Navigating Conversations

<hr class="dividerSection" />

Helpful navigation patterns:

- Use “follow” style views to focus on a conversation  
- Use stream identifiers (TCP stream numbers) when available  
- Use packet relationships (request/response pairs) when visible in protocols like DNS  

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/wireshark/basics/filters/capture">← Back</a>
    <div class="xrefTitle">Section: Wireshark - Filters - Capture Filters</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/wireshark/basics/views-and-tools/io-graphs-and-stats">Next →</a>
    <div class="xrefTitle">Wireshark - Views & Tools - IO Graphs & Stats</div>
  </div>
</div>