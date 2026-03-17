# Ports and Sockets

<hr class="dividerSection" />

Port numbers are 16-bit values used at the Transport layer to identify specific applications or services on a host. They enable multiplexing, allowing multiple applications to communicate simultaneously over the same IP address.

<hr class="dividerSection" />

### Server Ports (Well-Known Ports)

<hr class="dividerSection" />

Servers providing standard services listen on fixed, well-known port numbers below 1024. These ports are assigned by convention and automatically used by clients.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Application / Service</th>
      <th class="tableCellHeader">Port Number</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">HTTP</span> (Hypertext Transfer Protocol)</td>
      <td class="tableCell"><span class="emphasis">80</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">HTTPS</span> (HTTP Secure)</td>
      <td class="tableCell"><span class="emphasis">443</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">FTP</span> (File Transfer Protocol) - Control</td>
      <td class="tableCell"><span class="emphasis">21</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">FTP</span> - Data</td>
      <td class="tableCell"><span class="emphasis">20</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">SSH</span> (Secure Shell)</td>
      <td class="tableCell"><span class="emphasis">22</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Telnet</span></td>
      <td class="tableCell"><span class="emphasis">23</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">SMTP</span> (Simple Mail Transfer Protocol)</td>
      <td class="tableCell"><span class="emphasis">25</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">DNS</span> (Domain Name System)</td>
      <td class="tableCell"><span class="emphasis">53</span> (UDP/TCP)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">DHCP</span> (Dynamic Host Configuration Protocol) - Server</td>
      <td class="tableCell"><span class="emphasis">67</span> (UDP)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">DHCP</span> - Client</td>
      <td class="tableCell"><span class="emphasis">68</span> (UDP)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">TFTP</span> (Trivial File Transfer Protocol)</td>
      <td class="tableCell"><span class="emphasis">69</span> (UDP)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">POP3</span> (Post Office Protocol version 3)</td>
      <td class="tableCell"><span class="emphasis">110</span> (TCP)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">IMAP</span> (Internet Message Access Protocol)</td>
      <td class="tableCell"><span class="emphasis">143</span> (TCP)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">SNMP</span> (Simple Network Management Protocol)</td>
      <td class="tableCell"><span class="emphasis">161</span> (UDP)</td>
    </tr>
  </tbody>
</table>

Clients (e.g., web browser) do not need to specify the port when accessing these services — the client software knows the standard port for the protocol (e.g., typing a URL assumes port 80 for HTTP).

The server maintains a <span class="emphasis">listening buffer</span> for incoming requests addressed to its IP and the service port.

<hr class="dividerSection" />

### Client Ports (Ephemeral Ports)

<hr class="dividerSection" />

Clients use dynamically assigned source ports from the range above 1024 (ephemeral or temporary ports). These are randomly selected for each connection.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Example: A web browser requesting a page might use source port 5305 (random) → destination port 80 on the server.</li>
    <li>The server responds with source port 80 → destination port 5305 (the browser knows this is the reply to its request).</li>
    <li>Example: An FTP client might use source port 1305 (random) → destination port 21 on the server.</li>
  </ul>
</div>

This allows multiple simultaneous connections from the same client (e.g., web browser + FTP client running at the same time, each with a different source port).

<hr class="dividerSection" />

### Socket Pairs and Multiplexing

<hr class="dividerSection" />

The combination of source IP address and source port number, or destination IP address and destination port number, is known as a **socket**.

A socket pair uniquely identifies each connection (e.g., client 192.168.1.5:1099 → server 192.168.1.7:80 for web; client 192.168.1.5:1305 → server 192.168.1.7:21 for FTP).

Sockets enable:
<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Multiple processes on a client to distinguish themselves from each other.</li>
    <li>Multiple connections to a server process to be distinguished from each other.</li>
    <li>The source port to act as a return address for the requesting application.</li>
  </ul>
</div>

The Transport layer tracks these ports to ensure responses are forwarded to the correct application.

Port numbers allow a single host to run many applications at once:
<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Multiple services on a server (web on 80, FTP on 21) listen independently.</li>
    <li>Clients use unique source ports for each session.</li>
    <li>The Transport layer uses source IP/port + destination IP/port (socket pair) to route data to the correct application.</li>
  </ul>
</div>

This multiplexing/demultiplexing process is fundamental to modern networking.

<hr class="dividerSection" />

### netstat Command

<hr class="dividerSection" />

Unexplained TCP connections can pose a major security threat, as they may indicate unauthorized access or processes connected to the local host. The netstat command is an important network utility used to verify active TCP connections and open ports.

Common usage:
<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>By default, netstat displays protocols in use, local address and port, foreign address and port, and connection state (e.g., ESTABLISHED).</li>
    <li>It attempts to resolve IP addresses to domain names and port numbers to well-known applications.</li>
    <li>Use the <span class="emphasis">-n</span> option to display IP addresses and port numbers in numerical form (no resolution).</li>
  </ul>
</div>

Example output (abbreviated):
<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Active Connections</li>
    <li>Proto  Local Address           Foreign Address           State</li>
    <li>TCP    192.168.1.124:3126      192.168.0.2:netbios-ssn   ESTABLISHED</li>
    <li>TCP    192.168.1.124:3158      207.138.126.152:http      ESTABLISHED</li>
  </ul>
</div>

netstat helps troubleshoot connectivity, identify listening services, and detect unexpected connections.

<hr class="dividerSection" />

<div class="xrefBox">
  <span class="emphasis">See also:</span><br />
  <a href="/tcpip-model/layers/transport/basics/ports/port-ranges">
    Port Ranges (well-known, registered, and dynamic port categories)
  </a><br />
  <a href="/tcpip-model/layers/transport/advanced/multiplexing/process-demultiplexing">
    Process Demultiplexing and Socket Pairs (advanced details)
  </a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/transport/basics/fundamentals/tcp-vs-udp">← Back</a>
    <div class="xrefTitle">Transport - Basics - Fundamentals - TCP vs UDP</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/transport/basics/ports/port-ranges">Next →</a>
    <div class="xrefTitle">Transport - Basics - Ports & Sockets - Port Ranges</div>
  </div>
</div>