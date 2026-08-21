<hr class="dividerMain">

# Wireshark - Display Filters

<hr class="dividerMain">

<span class="emphasis">Display filters</span> narrow what you see in the packet list without changing what was captured.

They are the primary way to focus on specific traffic in a large capture.

<hr class="dividerSection" />

### Quick Examples

<hr class="dividerSection" />

Common display filters:

- DNS traffic: <span class="emphasis">dns</span>  
- HTTP traffic: <span class="emphasis">http</span>  
- TLS traffic: <span class="emphasis">tls</span>  
- ICMP (ping): <span class="emphasis">icmp</span>  

Filter by IP address:

- Source or destination equals IP: <span class="emphasis">ip.addr == 192.168.1.10</span>  
- Source only: <span class="emphasis">ip.src == 192.168.1.10</span>  
- Destination only: <span class="emphasis">ip.dst == 8.8.8.8</span>  

Filter by port:

- TCP port 443: <span class="emphasis">tcp.port == 443</span>  
- UDP port 53: <span class="emphasis">udp.port == 53</span>  

<hr class="dividerSection" />

### Combining Filters

<hr class="dividerSection" />

Use logical operators:

- AND: <span class="emphasis">and</span>  
- OR: <span class="emphasis">or</span>  
- NOT: <span class="emphasis">not</span>  

Examples:

- DNS for a specific host (where visible): <span class="emphasis">dns and frame contains "example.com"</span>  
- Web traffic from one device: <span class="emphasis">ip.addr == 192.168.1.10 and (http or tls)</span>  

<hr class="dividerSection" />

### Why Filters Matter

<hr class="dividerSection" />

Filters help you:

- Isolate a protocol (DNS/HTTP/TCP)  
- Follow one conversation (single client/server pair)  
- Reduce noise in busy environments  
- Spot failures (no response, retransmissions, resets, etc.)  

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/wireshark/basics/fundamentals/capture-interfaces">← Back</a>
    <div class="xrefTitle">Section: Wireshark - Fundamentals - Capture Interfaces</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/wireshark/basics/filters/capture">Next →</a>
    <div class="xrefTitle">Wireshark - Filters - Capture Filters</div>
  </div>
</div>