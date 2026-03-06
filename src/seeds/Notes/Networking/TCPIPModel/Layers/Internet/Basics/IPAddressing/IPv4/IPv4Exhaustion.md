# IPv4 Exhaustion & Transition

<hr class="dividerSection" />

### IPv4 Address Depletion

<hr class="dividerSection" />

IPv4 has a theoretical maximum of 4.3 billion addresses. Private addresses and NAT slowed depletion, but the growth of the Internet (WWW, mobile devices, IoT) has exhausted the available space.

Note: The long-term solution to IPv4 address depletion is IPv6.

### Regional Internet Registries (RIRs)

<hr class="dividerSection" />

Public IPv4 and IPv6 addresses are managed by the Internet Assigned Numbers Authority (IANA). IANA allocates blocks to five Regional Internet Registries (RIRs), who distribute them to ISPs and organizations.

The five RIRs are:

<div class="centeredBullet">

<ul class="diamondBullets fullWidthBullet">
  <li>ARIN (North America)</li>
  <li>RIPE NCC (Europe, Middle East, Central Asia)</li>
  <li>APNIC (Asia-Pacific)</li>
  <li>AfriNIC (Africa)</li>
  <li>LACNIC (Latin America and Caribbean)</li>
</ul>

</div>

Four of the five RIRs have already exhausted their IPv4 address pools (dates vary by region).

### Why Transition to IPv6?

<hr class="dividerSection" />

IPv6 provides a 128-bit address space (340 undecillion addresses), eliminating exhaustion concerns.

IPv6 also fixes IPv4 limitations and adds enhancements (e.g., improved ICMPv6 for autoconfiguration and address resolution).

Mobile providers, ISPs, and content providers (YouTube, Netflix, Facebook) are leading the transition — many report >90% IPv6 traffic.

Many companies are moving to IPv6-only internally.

The Internet of Things (IoT) will require vastly more addresses — IPv6 is designed for this scale.

### Transition Methods

<hr class="dividerSection" />

IPv4 and IPv6 will coexist for years. Migration techniques include:

<div class="centeredBullet">

<ul class="diamondBullets fullWidthBullet">
  <li><strong>Dual Stack</strong> — devices run both IPv4 and IPv6 stacks simultaneously (native IPv6 + IPv4 fallback).</li>
  <li><strong>Tunneling</strong> — encapsulate IPv6 packets inside IPv4 packets to cross IPv4 networks.</li>
  <li><strong>Translation</strong> — NAT64 translates between IPv6 and IPv4.</li>
</ul>

</div>

<div class="xrefBox">
  <span class="emphasis">See Glossary for full details:</span>
  <a href="/glossary/networking/tcpipmodel/internet/ipv6-addressing">
    IPv6 Addressing → Dual Stack / Tunneling / NAT64
  </a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/ipv4/types-of-addresses">← Back</a>
    <div class="xrefTitle">Internet Layer - Basics - IP Addressing - IPv4 - Types of Addresses</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/ipv4/ipv4-vs-ipv6-comparison">Next →</a>
    <div class="xrefTitle">Internet Layer - Basics - IP Addressing - IPv4 - IPv4 vs IPv6 Comparison</div>
  </div>
</div>