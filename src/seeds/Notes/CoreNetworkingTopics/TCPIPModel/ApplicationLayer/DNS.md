## DNS Basics
**Part of the Application Layer**

### What is DNS?

The **Domain Name System (DNS)** is like a phonebook for the internet. It translates **human-readable domain names** into machine-readable IP addresses.

- Example:
  - Domain Name: **www.example.com**
  - IP Address: **192.0.2.1**

---

### How DNS Works

1. **Query Process**:
   - The client (e.g., browser) sends a query to a DNS resolver.
   - The resolver contacts DNS servers in a hierarchy:
     - **Root Servers**: Handle top-level domains (TLDs) like .com, .org.
     - **TLD Servers**: Manage specific domain extensions.
     - **Authoritative Servers**: Provide the IP address for a specific domain.

2. **Response**:
   - The resolver returns the IP address to the client.

---

### Key Components

1. **DNS Records**:
   - **A Record**: Maps domain names to IPv4 addresses.
   - **AAAA Record**: Maps domain names to IPv6 addresses.
   - **MX Record**: Specifies mail servers for a domain.

2. **Resolvers**:
   - DNS resolvers are responsible for querying DNS servers on behalf of clients.

3. **Caching**:
   - DNS resolvers cache query results to improve speed and reduce server load.

---

### Example Workflow
1. **Client**: "What is the IP of www.example.com?"  
2. **DNS Resolver**: "The IP is 192.0.2.1"  

---

### Useful DNS Commands

- **nslookup**:
   Queries DNS servers for specific information.  
   Example:  
   nslookup www.example.com  

- **dig**:
   Retrieves detailed DNS query results.  
   Example:  
   dig www.example.com  

- **ipconfig /displaydns**:
   Shows cached DNS records on Windows.

---
