## QoS & Fragmentation

<hr class="dividerSection" />

## DSCP (Differentiated Services Code Point)

<hr class="dividerSection" />

<span class="emphasis">DSCP</span> (Differentiated Services Code Point) is a 6-bit field in the IP packet header used to classify and prioritize network traffic for <span class="emphasis">Quality of Service (QoS)</span> purposes, defined in <span class="codeSnip">RFC 2474</span>.

### Common DSCP Values

<hr class="dividerSubsection2" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">EF</span> (Expedited Forwarding), highest priority, used for VoIP traffic</li>
    <li><span class="emphasis">AF</span> (Assured Forwarding), tiered priority with drop precedence levels</li>
    <li><span class="emphasis">BE</span> (Best Effort), default, no priority treatment</li>
  </ul>
</div>

<hr class="dividerSection" />

## Fragmentation

<hr class="dividerSection" />

<span class="emphasis">Fragmentation</span> is the process where an IP packet is broken into smaller pieces when it exceeds the <span class="emphasis">MTU</span> of a network segment, then reassembled at the destination.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/networking/tcp-ip-model/layers/network-access/advanced/data-link/mtu-and-framing/mtu-and-path-mtu" target="_blank" rel="noopener noreferrer">Network Access → Advanced → Data Link → MTU & Path MTU</a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/glossary/networking/tcp-ip-model/internet/nat-and-pat">← Back</a>
    <div class="xrefTitle">Glossary - TCP/IP Model - Internet - NAT & PAT</div>
  </div>

  <!-- <div class="xrefItem">
    <a class="xrefBtn" href="">Next →</a>
    <div class="xrefTitle"></div>
  </div> -->
</div>