# Glossary - Internet - Commands

<hr class="dividerSection" />

### ipconfig

<hr class="dividerSubsection1" />

Windows command that displays a host's current IP configuration, including IPv4 address, subnet mask, and default gateway.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">ipconfig /all</span>, adds MAC address, DNS server addresses, DHCP status, and lease details.</li>
    <li><span class="codeSnip">ipconfig /release</span>, releases the current DHCP-assigned configuration.</li>
    <li><span class="codeSnip">ipconfig /renew</span>, requests fresh configuration from the DHCP server.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### ping

<hr class="dividerSubsection1" />

Command that tests network connectivity by sending ICMP Echo Requests to a destination and waiting for Echo Replies.

A successful reply confirms the destination is reachable; a timeout or failure points to a connectivity or filtering problem along the path.

<hr class="dividerSubsection1" />

### traceroute (tracert)

<hr class="dividerSubsection1" />

Command that shows the hop-by-hop path packets take to reach a destination, used to identify where along the route latency or packet loss is occurring.

Called <span class="codeSnip">tracert</span> on Windows, <span class="codeSnip">traceroute</span> on macOS/Linux.

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/networking/tcp-ip-model/layers/internet/basics/icmp-and-commands/ipconfig" target="_blank" rel="noopener noreferrer">Internet Layer → ICMP & Commands → ipconfig</a><br />
  <a href="/networking/tcp-ip-model/layers/internet/basics/icmp-and-commands/ping-and-traceroute" target="_blank" rel="noopener noreferrer">Internet Layer → ICMP & Commands → Ping & Traceroute</a>
</div>

<hr class="dividerSection" />