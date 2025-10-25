<br>

---
## OSI Layer Purposes (Concept Only)  
---

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">OSI Layer</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Application (7)</td>
      <td class="tableCell">Interfaces with end-user applications; defines services for networked apps.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Presentation (6)</td>
      <td class="tableCell">Data format translation/encoding; conceptual compression and encryption.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Session (5)</td>
      <td class="tableCell">Establishes, manages, and terminates application dialogs (sessions).</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Transport (4)</td>
      <td class="tableCell">End-to-end delivery; segmentation/reassembly; reliability concepts.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Network (3)</td>
      <td class="tableCell">Logical addressing and path selection across interconnected networks.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Data Link (2)</td>
      <td class="tableCell">Framing, physical addressing (MAC), local delivery, basic error detection.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Physical (1)</td>
      <td class="tableCell">Signals and media—transmission of raw bits over wire/fiber/air.</td>
    </tr>
  </tbody>
</table>

---
## Where to Read the Details (TCP/IP Targets)  
---
<!-- NOTE: All hrefs are placeholders pending verification -->
<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">OSI Layer</th>
      <th class="tableCellHeader">TCP/IP Pages</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Application (7)</td>
      <td class="tableCell">
        TCP/IP › Application Layer:<br/>
        <a href="#">Web &amp; Name Resolution › Introduction</a>,
        <a href="#">HTTP/HTTPS</a>,
        <a href="#">DNS</a>;
        <a href="#">Email Protocols</a>,
        <a href="#">Telnet/SSH</a>;
        <a href="#">DHCP</a>,
        <a href="#">NTP</a>,
        <a href="#">SNMP</a>,
        <a href="#">FTP/SFTP</a>;
        <a href="#">User Data &amp; Privacy</a>
      </td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Presentation (6)</td>
      <td class="tableCell">
        TCP/IP › Application Layer:<br/>
        <a href="#">Privacy in Application Protocols</a>.
        <div class="bullet4">
          - OSI keeps translation/encryption <span class="emphasis">conceptual</span>; operational crypto (e.g., TLS in HTTPS) lives in TCP/IP pages.
        </div>
      </td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Session (5)</td>
      <td class="tableCell">
        TCP/IP › Application:<br/>
        <a href="#">Client/Server Concepts › Introduction</a>,
        <a href="#">Client/Server Roles</a>,
        <a href="#">P2P vs Client/Server</a>;<br/>
        TCP/IP › Transport:<br/>
        <a href="#">Ports/Sockets</a>,
        <a href="#">Reliability &amp; Flow Control</a>
      </td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Transport (4)</td>
      <td class="tableCell">
        TCP/IP › Transport:<br/>
        <a href="#">Basics › Introduction</a>,
        <a href="#">TCP vs UDP</a>,
        <a href="#">Ports/Sockets</a>,
        <a href="#">Reliability &amp; Flow Control</a>;<br/>
        <a href="#">Three-Way Handshake</a>,
        <a href="#">ACKs &amp; Sequencing</a>,
        <a href="#">Windowing &amp; Congestion Control</a>
      </td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Network (3)</td>
      <td class="tableCell">
        TCP/IP › Internet:<br/>
        <a href="#">IP Addressing/Routing › Introduction</a>,
        <a href="#">IPv4 vs IPv6</a>,
        <a href="#">Subnet Masking &amp; Gateways</a>,
        <a href="#">Default Gateway &amp; Routing Tables</a>;<br/>
        <a href="#">Routing Protocol Overview</a>,
        <a href="#">Static vs Dynamic (Conceptual)</a>,
        <a href="#">Common Protocol Families</a>;<br/>
        <a href="#">ICMP Basics</a>,
        <a href="#">Ping &amp; Traceroute</a>
      </td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Data Link (2)</td>
      <td class="tableCell">
        TCP/IP › Network Access › L2:<br/>
        <a href="#">Core Concepts › Introduction</a>,
        <a href="#">Burned-In Address (BIA)</a>,
        <a href="#">Address Resolution Protocol (ARP)</a>
      </td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Physical (1)</td>
      <td class="tableCell">
        TCP/IP › Network Access › L1:<br/>
        <a href="#">Signals/Media › Introduction</a>,
        <a href="#">Bit/Digital Signals</a>;<br/>
        <a href="#">Communication Standards</a>,
        <a href="#">Data Transmission Methods</a>,
        <a href="#">Bandwidth</a>,
        <a href="#">Throughput</a>,
        <a href="#">Encapsulation / De-encapsulation</a>
      </td>
    </tr>
  </tbody>
</table>
