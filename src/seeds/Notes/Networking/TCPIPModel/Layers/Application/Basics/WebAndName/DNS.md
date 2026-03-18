# DNS Basics

<hr class="dividerSection" />

### What is DNS?

<hr class="dividerSection" />

The <span class="emphasis">Domain Name System (DNS)</span> is like a phonebook for the internet. It translates <span class="emphasis">human-readable domain names</span> into machine-readable IP addresses.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Example:
      <ul class="nestedHollowBullets">
        <li>Domain Name: <span class="emphasis">www.example.com</span></li>
        <li>IP Address: <span class="emphasis">192.0.2.1</span></li>
      </ul>
    </li>
  </ul>
</div>

<hr class="dividerSection" />

### How DNS Works

<hr class="dividerSection" />

<div class="centeredNumberedList">

1. **Query Process**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The client (e.g., browser) sends a query to a DNS resolver.</li>
    <li>The resolver contacts DNS servers in a hierarchy:
      <ul class="nestedHollowBullets">
        <li><span class="emphasis">Root Servers</span>: Handle top-level domains (TLDs) like .com, .org.</li>
        <li><span class="emphasis">TLD Servers</span>: Manage specific domain extensions.</li>
        <li><span class="emphasis">Authoritative Servers</span>: Provide the IP address for a specific domain.</li>
      </ul>
    </li>
  </ul>
</div>

2. **Response**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The resolver returns the IP address to the client.</li>
  </ul>
</div>

</div>

<hr class="dividerSection" />

### Key Components

<hr class="dividerSection" />

<div class="centeredNumberedList">

1. **DNS Records**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">A Record</span>: Maps domain names to IPv4 addresses.</li>
    <li><span class="emphasis">AAAA Record</span>: Maps domain names to IPv6 addresses.</li>
    <li><span class="emphasis">MX Record</span>: Specifies mail servers for a domain.</li>
  </ul>
</div>

2. **Resolvers**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>DNS resolvers are responsible for querying DNS servers on behalf of clients.</li>
  </ul>
</div>

3. **Caching**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>DNS resolvers cache query results to improve speed and reduce server load.</li>
  </ul>
</div>

</div>

<hr class="dividerSection" />

### Example Workflow

<hr class="dividerSection" />

<div class="centeredNumberedList">

1. **Client**: "What is the IP of www.example.com?"

2. **DNS Resolver**: "The IP is 192.0.2.1"

</div>

<hr class="dividerSection" />

### Useful DNS Commands

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">nslookup</span>: Queries DNS servers for specific information.
      <ul class="nestedHollowBullets">
        <li>Example: <span class="emphasis">nslookup www.example.com</span></li>
      </ul>
    </li>
    <li><span class="emphasis">dig</span>: Retrieves detailed DNS query results.
      <ul class="nestedHollowBullets">
        <li>Example: <span class="emphasis">dig www.example.com</span></li>
      </ul>
    </li>
    <li><span class="emphasis">ipconfig /displaydns</span>: Shows cached DNS records on Windows.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/basics/web-and-name/http-https">← Back</a>
    <div class="xrefTitle">Application Layer - Web & Name Resolution - HTTP/HTTPS</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/basics/client-and-server-roles/fundamentals">Next →</a>
    <div class="xrefTitle">Section: Application Layer - Client & Server Roles - Fundamentals</div>
  </div>
</div>