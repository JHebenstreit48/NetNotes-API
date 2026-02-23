<hr class="dividerMain">

# DNS Basics

<hr class="dividerMain">

### What is DNS?

<hr class="dividerSection" />

The **Domain Name System (DNS)** is like a phonebook for the internet. It translates **human-readable domain names** into machine-readable IP addresses.

- Example:
  - Domain Name: **www.example.com**
  - IP Address: **192.0.2.1**

<hr class="dividerSection" />

### How DNS Works

<hr class="dividerSection" />

1. **Query Process**:
   - The client (e.g., browser) sends a query to a DNS resolver.
   - The resolver contacts DNS servers in a hierarchy:
     - **Root Servers**: Handle top-level domains (TLDs) like .com, .org.
     - **TLD Servers**: Manage specific domain extensions.
     - **Authoritative Servers**: Provide the IP address for a specific domain.

2. **Response**:
   - The resolver returns the IP address to the client.

<hr class="dividerSection" />

### Key Components

<hr class="dividerSection" />

1. **DNS Records**:
   - **A Record**: Maps domain names to IPv4 addresses.
   - **AAAA Record**: Maps domain names to IPv6 addresses.
   - **MX Record**: Specifies mail servers for a domain.

2. **Resolvers**:
   - DNS resolvers are responsible for querying DNS servers on behalf of clients.

3. **Caching**:
   - DNS resolvers cache query results to improve speed and reduce server load.

<hr class="dividerSection" />

### Example Workflow

<hr class="dividerSection" />

1. **Client**: "What is the IP of www.example.com?"  
2. **DNS Resolver**: "The IP is 192.0.2.1"

<hr class="dividerSection" />

### Useful DNS Commands

<hr class="dividerSection" />

- **nslookup**:  
  Queries DNS servers for specific information.  
  Example:  
  **nslookup www.example.com**

- **dig**:  
  Retrieves detailed DNS query results.  
  Example:  
  **dig www.example.com**

- **ipconfig /displaydns**:  
  Shows cached DNS records on Windows.

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