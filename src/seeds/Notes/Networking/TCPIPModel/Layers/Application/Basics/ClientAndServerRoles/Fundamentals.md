# Fundamentals

<hr class="dividerSection" />

### Role-Based Communication

<hr class="dividerSection" />

In modern networks, a host can operate as a <span class="emphasis">client</span>, a <span class="emphasis">server</span>, or <span class="secondEmphasis">both</span>.  
The <span class="emphasis">software installed</span> on the device determines which role it performs at any moment.

Client and server software often run on <span class="emphasis">separate computers</span>, but a single machine can run both simultaneously.

<hr class="dividerSection" />

### Client vs Server (Core Definitions)

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Role</th>
      <th class="tableCellHeader">What It Does</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Client</span></td>
      <td class="tableCell">Runs software that can <span class="emphasis">request</span> and use information or services from another host.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Server</span></td>
      <td class="tableCell">Runs software that can <span class="emphasis">provide</span> information or services to requesting hosts.</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

### One Computer, Many Services

<hr class="dividerSection" />

A single computer can run <span class="emphasis">multiple server programs</span>.

For example, in a home or small office, one device might operate as:
<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>a <span class="emphasis">file server</span></li>
    <li>a <span class="emphasis">web server</span></li>
    <li>an <span class="emphasis">email server</span></li>
  </ul>
</div>

At the same time, that same machine may run several <span class="emphasis">client applications</span>.

A user could:
<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>check email</li>
    <li>browse the web</li>
    <li>send messages</li>
    <li>stream audio</li>
  </ul>
</div>

all at once, connecting to multiple servers simultaneously.

<hr class="dividerSection" />

### Services Require Separate Server Software

<hr class="dividerSection" />

Each network service is typically delivered by its own <span class="emphasis">server application</span>.

Providing web pages is different from handling email or storing files, even when they run on the same physical system.

<hr class="dividerSection" />

### Examples of Client Software

<hr class="dividerSection" />

A familiar example of client software is a <span class="emphasis">web browser</span>.

Common examples include:
<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Google Chrome</li>
    <li>Microsoft Edge</li>
    <li>Safari</li>
    <li>Firefox</li>
    <li>Brave</li>
    <li>Vivaldi</li>
  </ul>
</div>

The client sends a <span class="emphasis">request</span> and the server returns a <span class="emphasis">response</span>.

Every site, download, or cloud service you reach comes from a <span class="emphasis">server</span> somewhere on the <span class="emphasis">internet</span>.

Another example is <span class="emphasis">email</span>.  
A mail client communicates with a server so users can <span class="emphasis">send</span> and <span class="emphasis">receive</span> messages.

File access is similar.  
A file server stores data in a <span class="emphasis">central location</span>, and clients retrieve it when needed.

<hr class="dividerSection" />

### Client-Server Interaction

<hr class="dividerSection" />

In client-server communication:
<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The client initiates a request to a server (e.g., a web browser requests a webpage).</li>
    <li>The server responds with the requested data or service.</li>
    <li>Communication often involves multiple protocols (DNS for name resolution, TCP for reliable transport, HTTP/HTTPS for web content).</li>
  </ul>
</div>

Example workflow (web page request):
<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>User enters a URL (e.g., www.example.com).</li>
    <li>Client performs a DNS lookup to resolve the domain to an IP address.</li>
    <li>Client establishes a TCP connection to the server IP on port 80 (HTTP) or 443 (HTTPS).</li>
    <li>Client sends an HTTP request (e.g., GET /index.html).</li>
    <li>Server responds with the webpage data.</li>
  </ul>
</div>

The combination of IP address and port forms a **socket** (e.g., 192.168.1.5:5507 for client, 172.16.10.50:80 for server).

<hr class="dividerSection" />

### URI, URN, and URL

<hr class="dividerSection" />

These terms describe ways to identify resources on the internet:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">URI</span> (Uniform Resource Identifier) — general term for any name or locator that identifies a resource.</li>
    <li><span class="emphasis">URL</span> (Uniform Resource Locator) — a type of URI that specifies both the location and access method (e.g., https://www.example.com/index.html).</li>
    <li><span class="emphasis">URN</span> (Uniform Resource Name) — a type of URI that names a resource but does not specify location (e.g., urn:isbn:0451450523).</li>
  </ul>
</div>

URLs are the most commonly used form in everyday browsing.

<hr class="dividerSection" />

### Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Roles depend on the <span class="emphasis">software</span>.</li>
    <li>A device may be a client, server, or <span class="secondEmphasis">both</span>.</li>
    <li>Servers can support <span class="emphasis">many clients</span>.</li>
    <li>One computer can run <span class="emphasis">multiple services</span>.</li>
    <li>Clients often connect to <span class="emphasis">multiple servers</span> at the same time.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/basics/web-and-name/dns">← Back</a>
    <div class="xrefTitle">Section: Application - Web & Name Resolution - DNS</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/basics/client-and-server-roles/p2p-and-examples">Next →</a>
    <div class="xrefTitle">Application - Client & Server Roles - P2P & Examples</div>
  </div>
</div>