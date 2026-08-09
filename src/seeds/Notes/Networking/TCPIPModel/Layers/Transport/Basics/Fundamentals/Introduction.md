# What Is the Transport Layer?

<hr class="dividerSection" />

The Transport layer is responsible for end-to-end communication between applications running on different hosts.

It receives data from the Application layer, segments it into smaller units, and passes it to the Internet layer for routing across networks.

At the receiving end, it reassembles the segments and delivers them to the correct application.

This layer provides two key services:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Multiplexing / Demultiplexing</span>, uses port numbers to identify the correct source and destination applications on the same host</li>
    <li><span class="emphasis">Delivery Control</span>, determines whether communication should be reliable (error-checked and ordered) or fast (low-overhead, best-effort)</li>
  </ul>
</div>

<hr class="dividerSection" />

### Process-to-Process Communication

<hr class="dividerSection" />

The Transport layer's job is also called <span class="emphasis">process-to-process</span> or <span class="emphasis">service-to-service</span> communication.

This distinction exists because a single host can run multiple services at once.

For example, a server, SRV1, might run both a web server and a file server at the same time.

If SRV1 receives a message, it needs a way to know which of these services should receive it.

<hr class="dividerSection" />

### Port Numbers

<hr class="dividerSection" />

The Transport layer uses <span class="emphasis">port numbers</span> to identify the processes on each host.

For example, a web server might use port 80, while a file server on the same host might use port 21.

When a web client wants to send a request to a web server, it addresses the message to port 80.

If the same client wanted to access the file server instead, it would address its message to port 21.

Port numbers allow a host to differentiate between different streams of data, even when they are all addressed to the same IP address.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/networking/tcp-ip-model/layers/transport/basics/ports/ports-and-sockets" target="_blank" rel="noopener noreferrer">Transport → Basics → Ports & Sockets</a>
</div>

<hr class="dividerSection" />

### Where the Transport Layer Runs

<hr class="dividerSection" />

The Transport layer runs mainly on the two communicating hosts.

Routers normally operate based on IP (Layer 3), not on Transport-layer information.

There are exceptions to this, but they are more advanced topics covered elsewhere.

Because of this, the Transport layer is primarily a conversation between the two communicating hosts, rather than something intermediate devices like routers need to inspect.

<hr class="dividerSection" />

### Primary Transport Protocols

<hr class="dividerSection" />

Two protocols operate at this layer:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">TCP</span> (Transmission Control Protocol), offers more robust features beyond basic message addressing</li>
    <li><span class="emphasis">UDP</span> (User Datagram Protocol), simple and efficient</li>
  </ul>
</div>

The choice of protocol depends on the application's needs, critical data integrity versus low latency and minimal overhead.

<hr class="dividerSection" />

### Key Concepts at the Transport Layer

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Segmentation and Reassembly</span>, breaks large application data into smaller segments and reassembles them at the destination</li>
    <li><span class="emphasis">Port Numbers</span>, allow multiple applications to use the network simultaneously by identifying conversations</li>
    <li><span class="emphasis">Connection Management</span>, some protocols establish connections before data transfer, while others send data immediately</li>
  </ul>
</div>

These mechanisms enable efficient and flexible communication across diverse network applications.

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/networking/tcp-ip-model/layers/transport/basics/fundamentals/tcp-vs-udp" target="_blank" rel="noopener noreferrer">TCP vs UDP (detailed comparison of the two protocols)</a><br />
  <a href="/networking/tcp-ip-model/layers/transport/basics/ports/ports-and-sockets" target="_blank" rel="noopener noreferrer">Ports & Sockets (how port numbers enable multiplexing)</a><br />
  <a href="/networking/tcp-ip-model/layers/transport/basics/reliability/reliable-delivery-flow-control" target="_blank" rel="noopener noreferrer">Reliable Delivery and Flow Control (TCP-specific mechanisms)</a>
</div>

<div class="xrefBox">
  <span class="emphasis">See Glossary for definitions:</span><br />
  <a href="/glossary/networking/tcpipmodel/transport/tcp" target="_blank" rel="noopener noreferrer">TCP (Transmission Control Protocol)</a><br />
  <a href="/glossary/networking/tcpipmodel/transport/udp" target="_blank" rel="noopener noreferrer">UDP (User Datagram Protocol)</a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/application/advanced/user-data/privacy-in-protocols">← Back</a>
    <div class="xrefTitle">Topic: TCP/IP Model - Application - Advanced - User Data & Privacy - Privacy in Application Protocols</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/transport/basics/fundamentals/tcp-vs-udp">Next →</a>
    <div class="xrefTitle">Transport - Basics - Fundamentals - TCP vs UDP</div>
  </div>
</div>