<hr class="dividerMain">

# Ping & Traceroute

<hr class="dividerMain">

The <span class="emphasis">ping</span> command tests network connectivity.

It sends ICMP Echo Requests to a destination and waits for a reply.

Example:

- <span class="examples">ping google.com</span>

If replies are received, the destination is reachable.

<hr class="dividerSection" />

### Traceroute (Path Visibility)

<hr class="dividerSection" />

<traceroute> shows the hop-by-hop path packets take to reach a destination.

Common commands:

- Windows: <span class="examples">tracert google.com</span>  
- macOS/Linux: <span class="examples">traceroute google.com</span>

This helps identify where latency or packet loss may be occurring along the route.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/icmp-and-diagnostics/introduction">← Back</a>
    <div class="xrefTitle">Internet Layer - ICMP & Diagnostics - Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/advanced/fragmentation-and-mtu/ipv4-df-mf-and-reassembly">Next →</a>
    <div class="xrefTitle">Next Section: Internet Layer - Fragmentation & MTU - IPv4 DF/MF & Reassembly</div>
  </div>
</div>