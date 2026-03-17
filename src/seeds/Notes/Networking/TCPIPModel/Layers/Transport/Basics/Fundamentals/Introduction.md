# Transport Layer (Layer 4)

<hr class="dividerSection" />

The Transport layer is responsible for end-to-end communication between applications running on different hosts. It receives data from the Application layer, segments it into smaller units, and passes it to the Internet layer for routing across networks. At the receiving end, it reassembles the segments and delivers them to the correct application.

This layer provides two key services:
<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Multiplexing / Demultiplexing</span> — Uses port numbers to identify the correct source and destination applications on the same host.</li>
    <li><span class="emphasis">Delivery Control</span> — Determines whether communication should be reliable (error-checked and ordered) or fast (low-overhead, best-effort).</li>
  </ul>
</div>

<hr class="dividerSection" />

### Primary Transport Protocols

<hr class="dividerSection" />

Two protocols operate at this layer:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">TCP</span></li>
    <li><span class="emphasis">UDP</span></li>
  </ul>
</div>

The choice of protocol depends on the application's needs: critical data integrity versus low latency and minimal overhead.

<hr class="dividerSection" />

### Key Concepts at the Transport Layer

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Segmentation and Reassembly</span> — Breaks large application data into smaller segments and reassembles them at the destination.</li>
    <li><span class="emphasis">Port Numbers</span> — Allow multiple applications to use the network simultaneously by identifying conversations.</li>
    <li><span class="emphasis">Connection Management</span> — Some protocols establish connections before data transfer, while others send data immediately.</li>
  </ul>
</div>

These mechanisms enable efficient and flexible communication across diverse network applications.

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/tcpip-model/layers/transport/basics/fundamentals/tcp-vs-udp">
    TCP vs UDP (detailed comparison of the two protocols)
  </a><br />
  <a href="/tcpip-model/layers/transport/basics/ports/ports-and-sockets">
    Ports & Sockets (how port numbers enable multiplexing)
  </a><br />
  <a href="/tcpip-model/layers/transport/basics/reliability/reliable-delivery-flow-control">
    Reliable Delivery and Flow Control (TCP-specific mechanisms)
  </a>
</div>

<div class="xrefBox">
  <span class="emphasis">See Glossary for definitions:</span><br />
  <a href="/glossary/networking/tcpipmodel/transport/tcp">
    TCP (Transmission Control Protocol)
  </a><br />
  <a href="/glossary/networking/tcpipmodel/transport/udp">
    UDP (User Datagram Protocol)
  </a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/advanced/user-data/privacy-in-protocols">← Back</a>
    <div class="xrefTitle">Topic: TCP/IP Model - Application - Advanced - User Data & Privacy - Privacy in Application Protocols</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/transport/basics/fundamentals/tcp-vs-udp">Next →</a>
    <div class="xrefTitle">Transport - Basics - Fundamentals - TCP vs UDP</div>
  </div>
</div>