# TCP vs UDP

<hr class="dividerSection" />

Each protocol serves different needs based on reliability, speed, and overhead requirements.

<hr class="dividerSection" />

### UDP (User Datagram Protocol)

<hr class="dividerSection" />

UDP is a lightweight, connectionless protocol designed for speed and minimal overhead.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Used primarily for real-time or streaming communications (e.g., voice calls, video streaming).</li>
    <li>No acknowledgments, sequencing, or retransmissions — dropped packets are not recovered.</li>
    <li>Low overhead makes it ideal when speed matters more than perfect delivery.</li>
    <li>Applications tolerate occasional packet loss (e.g., a dropped audio sample in a phone call is usually unnoticeable).</li>
  </ul>
</div>

UDP segments data and adds only source and destination port numbers to identify conversations.

<hr class="dividerSection" />

### TCP (Transmission Control Protocol)

<hr class="dividerSection" />

TCP is a reliable, connection-oriented protocol that ensures accurate and ordered delivery.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Used when data integrity is critical (e.g., file transfers, web pages, bank transactions).</li>
    <li>Includes sequencing numbers so the receiver can reorder packets and detect missing ones.</li>
    <li>Provides acknowledgments — receiver confirms receipt, sender retransmits lost packets.</li>
    <li>Uses windowing and flow control to adjust transmission rate based on network conditions (smaller windows in unreliable links, larger in reliable ones).</li>
    <li>Higher overhead due to reliability mechanisms (handshakes, ACKs, retransmissions).</li>
  </ul>
</div>

TCP guarantees delivery and order, making it suitable for applications where losing even one packet would be problematic.

<hr class="dividerSection" />

### Comparison: TCP vs UDP

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Feature</th>
      <th class="tableCellHeader">TCP</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Connection</td>
      <td class="tableCell">Connection-oriented (handshake)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Reliability</td>
      <td class="tableCell">Reliable (ACKs, retransmissions)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Ordering</td>
      <td class="tableCell">Yes (sequence numbers)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Flow Control</td>
      <td class="tableCell">Yes (windowing)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Overhead</td>
      <td class="tableCell">Higher</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Use Cases</td>
      <td class="tableCell">Web, email, file transfer</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Packet Loss Handling</td>
      <td class="tableCell">Retransmits lost packets</td>
    </tr>
  </tbody>
</table>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Feature</th>
      <th class="tableCellHeader">UDP</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Connection</td>
      <td class="tableCell">Connectionless</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Reliability</td>
      <td class="tableCell">Unreliable (no ACKs)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Ordering</td>
      <td class="tableCell">No</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Flow Control</td>
      <td class="tableCell">No</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Overhead</td>
      <td class="tableCell">Lower</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Use Cases</td>
      <td class="tableCell">Streaming, voice, DNS, DHCP</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Packet Loss Handling</td>
      <td class="tableCell">Tolerates loss</td>
    </tr>
  </tbody>
</table>

The choice between TCP and UDP depends on the application's requirements: reliability versus speed.

<div class="xrefBox">
  <span class="emphasis">See also:</span><br />
  <a href="/tcpip-model/layers/transport/basics/ports/ports-and-sockets">
    Ports & Sockets (how ports identify conversations)
  </a><br />
  <a href="/tcpip-model/layers/transport/basics/reliability/reliable-delivery-flow-control">
    Reliable Delivery and Flow Control (TCP mechanisms in detail)
  </a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/transport/basics/fundamentals/introduction">← Back</a>
    <div class="xrefTitle">Transport - Basics - Fundamentals - Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/transport/basics/ports/ports-and-sockets">Next →</a>
    <div class="xrefTitle">Section: Transport - Basics - Ports & Sockets - Ports/Sockets</div>
  </div>
</div>