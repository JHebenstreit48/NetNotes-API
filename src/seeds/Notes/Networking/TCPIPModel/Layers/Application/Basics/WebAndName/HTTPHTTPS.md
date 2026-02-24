## HTTP/HTTPS
**Part of the Application Layer**

### What are HTTP and HTTPS?

**HTTP (Hypertext Transfer Protocol)** and **HTTPS (Hypertext Transfer Protocol Secure)** are the foundation of web communication, enabling browsers to communicate with servers.

- **HTTP**:
  - Protocol for transferring hypertext data between a client (browser) and a server.
  - Operates on **port 80**.
  - Unencrypted, making it vulnerable to security breaches.

- **HTTPS**:
  - A secure version of HTTP that encrypts communication using **TLS/SSL** protocols.
  - Operates on **port 443**.
  - Ensures data confidentiality, integrity, and authentication.

---

### Key Features

1. **Request-Response Model**:
   - Follows a client-server architecture.
   - Example:
     - **Client**: Requests a webpage (GET request).
     - **Server**: Sends the requested webpage.

2. **Stateless Protocol**:
   - HTTP treats each request as independent.
   - HTTPS ensures these stateless requests are secure.

3. **Common HTTP Methods**:
- <span class="emphasis">GET</span>: retrieve resources  
- <span class="emphasis">POST</span>: submit data to the server  
- <span class="emphasis">PUT</span>: update resources  
- <span class="emphasis">DELETE</span>: remove resources

---

### Example Workflow

1. **Client Request**:
   GET /index.html HTTP/1.1  
   Host: www.example.com  

2. **Server Response**:
   HTTP/1.1 200 OK  
   Content-Type: text/html  
   Content-Length: 1024  

---

### Advantages of HTTPS

- <span class="emphasis">Encryption</span>: prevents unauthorized access to data in transit  
- <span class="emphasis">Authentication</span>: verifies the server identity via certificates  
- <span class="emphasis">Integrity</span>: detects tampering of data between client and server

---

### Additional Tools for HTTP/HTTPS

- <span class="emphasis">curl</span>: CLI tool to make HTTP/HTTPS requests  
- <span class="emphasis">Postman</span>: GUI tool for testing API requests 

---

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