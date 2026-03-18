# HTTP/HTTPS

<hr class="dividerSection" />

## What are HTTP and HTTPS?

<span class="emphasis">HTTP (Hypertext Transfer Protocol)</span> and <span class="emphasis">HTTPS (Hypertext Transfer Protocol Secure)</span> are the foundation of web communication, enabling browsers to communicate with servers.

### HTTP:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Protocol for transferring hypertext data between a client (browser) and a server.</li>
    <li>Operates on <span class="emphasis">port 80</span>.</li>
    <li><span class="emphasis">Unencrypted</span>, making it <span class="emphasis">vulnerable</span> to <span class="emphasis">security breaches</span>.</li>
  </ul>
</div>

### HTTPS:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A secure version of HTTP that encrypts communication using <span class="emphasis">TLS/SSL</span> protocols.</li>
    <li>Operates on <span class="emphasis">port 443</span>.</li>
    <li>Ensures data confidentiality, integrity, and authentication.</li>
  </ul>
</div>

<hr class="dividerSection" />

### Key Features

<hr class="dividerSection" />

<div class="centeredNumberedList">

1. <span class="emphasis">Request-Response Model</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Follows client-server architecture.</li>
    <li>Example:
      <ul class="nestedHollowBullets">
        <li><span class="emphasis">Client</span>: <span class="secondEmphasis">Requests</span> a <span class="secondEmphasis">webpage</span> <span class="emphasis">(GET request)</span>.</li>
        <li><span class="emphasis">Server</span>: <span class="secondEmphasis">Sends the <span class="secondEmphasis">requested webpage</span>.</li>
      </ul>
    </li>
  </ul>
</div>

2. <span class="emphasis">Stateless Protocol</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>HTTP treats each request as independent.</li>
    <li>HTTPS ensures these stateless requests are secure.</li>
  </ul>
</div>

3. <span class="emphasis">Common HTTP Methods</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">GET</span>: retrieve resources</li>
    <li><span class="emphasis">POST</span>: submit data to the server</li>
    <li><span class="emphasis">PUT</span>: update resources</li>
    <li><span class="emphasis">DELETE</span>: remove resources</li>
  </ul>
</div>

</div>

<hr class="dividerSection" />

### Example Workflow

<hr class="dividerSection" />

<div class="centeredNumberedList">

1. <span class="emphasis">Client Request</span>:

GET /index.html HTTP/1.1  
Host: www.example.com  

2. <span class="emphasis">Server Response</span>:

HTTP/1.1 200 OK  
Content-Type: text/html  
Content-Length: 1024  

</div>

<hr class="dividerSection" />

### Advantages of HTTPS

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Encryption</span>: prevents unauthorized access to data in transit</li>
    <li><span class="emphasis">Authentication</span>: verifies the server identity via certificates</li>
    <li><span class="emphasis">Integrity</span>: detects tampering of data between client and server</li>
  </ul>
</div>

<hr class="dividerSection" />

### Additional Tools for HTTP/HTTPS

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">curl</span>: CLI tool to make HTTP/HTTPS requests</li>
    <li><span class="emphasis">Postman</span>: GUI tool for testing API requests</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/basics/web-and-name/introduction">← Back</a>
    <div class="xrefTitle">Application Layer - Web & Name Resolution - Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/basics/web-and-name/dns">Next →</a>
    <div class="xrefTitle">Application Layer - Web & Name Resolution - DNS</div>
  </div>
</div>