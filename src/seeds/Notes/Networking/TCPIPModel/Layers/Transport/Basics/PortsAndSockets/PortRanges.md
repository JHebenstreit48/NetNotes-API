# Port Ranges

<hr class="dividerSection" />

Port numbers range from 0 to 65,535 and are divided into three categories by IANA (Internet Assigned Numbers Authority). These ranges help standardize port usage and prevent conflicts.

<hr class="dividerSection" />

### Well-Known Ports

<hr class="dividerSection" />

Ports 0–1023 are reserved for common, standardized services and applications.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Assigned to widely used protocols and services (e.g., HTTP, FTP, SMTP, DNS, TFTP).</li>
    <li>Typically used as destination ports by servers.</li>
    <li>Require elevated privileges to bind on most operating systems.</li>
  </ul>
</div>

<hr class="dividerSection" />

### Registered Ports

<hr class="dividerSection" />

Ports 1024–49151 are registered for specific applications and services.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Assigned by IANA to organizations or vendors for proprietary or specialized applications.</li>
    <li>Can be used as destination ports for registered services or as source ports by clients.</li>
  </ul>
</div>

<hr class="dividerSection" />

### Private / Dynamic / Ephemeral Ports

<hr class="dividerSection" />

Ports 49152–65535 are private or dynamic ports.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Used as source ports by clients for outgoing connections.</li>
    <li>Dynamically and randomly assigned by the operating system for each session.</li>
    <li>Not registered or reserved — available for temporary use.</li>
  </ul>
</div>

This range ensures clients can open multiple simultaneous connections without port conflicts.

<hr class="dividerSection" />

<div class="xrefBox">
  <span class="emphasis">See also:</span><br />
  <a href="/tcpip-model/layers/transport/basics/ports/ports-and-sockets">
    Ports and Sockets (well-known port examples and multiplexing)
  </a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/transport/basics/ports/ports-and-sockets">← Back</a>
    <div class="xrefTitle">Transport - Basics - Ports & Sockets - Ports/Sockets</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/transport/basics/reliability/reliable-delivery-flow-control">Next →</a>
    <div class="xrefTitle">Transport - Basics - Reliability - Reliable Delivery and Flow Control</div>
  </div>
</div>