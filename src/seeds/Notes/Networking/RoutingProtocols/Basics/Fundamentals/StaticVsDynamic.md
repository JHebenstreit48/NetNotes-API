# Static vs Dynamic Routing

<hr class="dividerSection" />

Routing is the process of moving packets between networks. Routers build and maintain routing tables in two main ways:

<div class="centeredBullet">

<ul class="diamondBullets fullWidthBullet">
  <li><strong>Static Routing</strong> — Routes are manually entered by the administrator (simple but not scalable).</li>
  <li><strong>Dynamic Routing</strong> — Routes are learned and updated automatically using routing protocols (scalable for large networks).</li>
</ul>

</div>

**Static Routing advantages**:
<div class="centeredBullet">

<ul class="diamondBullets fullWidthBullet">
  <li>Simple and predictable</li>
  <li>No protocol overhead</li>
  <li>Secure (no route advertisements)</li>
</ul>

</div>

**Dynamic Routing advantages**:
<div class="centeredBullet">

<ul class="diamondBullets fullWidthBullet">
  <li>Adapts to network changes automatically</li>
  <li>Scales well</li>
  <li>Reduces manual errors</li>
</ul>

</div>

Most networks use a combination: static for default gateways/key routes, dynamic for everything else.

<div class="xrefBox">
  <span class="emphasis">See Advanced for details:</span>
  <a href="/routing-protocols/advanced/static-routing/configuration-and-use-cases">
    Static Routing → Configuration & Use Cases
  </a>
  <br />
  <a href="/routing-protocols/advanced/dynamic-routing/metrics-and-decision-making">
    Dynamic Routing → Metrics & Decision Making
  </a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/routing-protocols/basics/fundamentals/introduction">← Back</a>
    <div class="xrefTitle">Routing Protocols - Basics - Fundamentals - Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/routing-protocols/basics/protocol-families/distance-vector-vs-link-state">Next →</a>
    <div class="xrefTitle">Section: Routing Protocols - Basics - Protocol Families - Distance-Vector vs Link-State</div>
  </div>
</div>