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
   - **GET**: Retrieve resources.
   - **POST**: Submit data to the server.
   - **PUT**: Update resources on the server.
   - **DELETE**: Remove resources.

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

- **Encryption**: Prevents unauthorized access to data.  
- **Authentication**: Ensures communication is with the intended server.  
- **Integrity**: Detects any tampering of the data in transit.  

---

### Additional Tools for HTTP/HTTPS

- **curl**: Command-line tool to make HTTP/HTTPS requests.  
- **Postman**: GUI tool for testing API requests.  

---
