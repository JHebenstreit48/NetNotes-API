# Introduction

---
### Role-Based Communication
---

In modern networks, a host can operate as a <span class="emphasis">client</span>, a <span class="emphasis">server</span>, or <span class="secondEmphasis">both</span>.  
The <span class="emphasis">software installed</span> on the device determines which role it performs at any moment.

Client and server software often run on <span class="emphasis">separate computers</span>, but a single machine can run both simultaneously.

---
### Client vs Server (Core Definitions)
---

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

---
### One Computer, Many Services
---

A single computer can run <span class="emphasis">multiple server programs</span>.

For example, in a home or small office, one device might operate as:
- a <span class="emphasis">file server</span>  
- a <span class="emphasis">web server</span>  
- an <span class="emphasis">email server</span>

At the same time, that same machine may run several <span class="emphasis">client applications</span>.

A user could:
- check email  
- browse the web  
- send messages  
- stream audio  

all at once, connecting to multiple servers simultaneously.

---
### Services Require Separate Server Software
---

Each network service is typically delivered by its own <span class="emphasis">server application</span>.

Providing web pages is different from handling email or storing files, even when they run on the same physical system.

---
### Examples of Client Software
---

A familiar example of client software is a <span class="emphasis">web browser</span>.

Common examples include:
- Google Chrome  
- Microsoft Edge  
- Safari  
- Firefox  
- Brave  
- Vivaldi  

The client sends a <span class="emphasis">request</span> and the server returns a <span class="emphasis">response</span>.

Every site, download, or cloud service you reach comes from a <span class="emphasis">server</span> somewhere on the <span class="emphasis">internet</span>.

Another example is <span class="emphasis">email</span>.  
A mail client communicates with a server so users can <span class="emphasis">send</span> and <span class="emphasis">receive</span> messages.

File access is similar.  
A file server stores data in a <span class="emphasis">central location</span>, and clients retrieve it when needed.

---
### Summary
---

- Roles depend on the <span class="emphasis">software</span>.
- A device may be a client, server, or <span class="secondEmphasis">both</span>.
- Servers can support <span class="emphasis">many clients</span>.
- One computer can run <span class="emphasis">multiple services</span>.
- Clients often connect to <span class="emphasis">multiple servers</span> at the same time.

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/basics/legacy-lab-and-capture/wireshark-profiles">← Back</a>
    <div class="xrefTitle">Topic: Legacy Lab & Capture - Wireshark Profiles</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/basics/client-and-server-roles/p2p-and-examples">Next →</a>
    <div class="xrefTitle">Client & Server Roles - P2P & Examples</div>
  </div>
</div>