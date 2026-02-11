# Introduction

---
### Role-Based Communication
---

In modern networks, a host can operate as a <span class="emphasis">client</span>, a <span class="emphasis">server</span>, or <span class="secondEmphasis">both</span>.  
The <span class="emphasis">software installed</span> on the device determines which role it performs at any moment.

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
### Services Require Separate Server Software
---

Each network service is usually delivered by its own <span class="emphasis">server application</span>.  
For example, providing web content is a different function than handling email, even if both run on the same machine.

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

Using this software, the client sends a <span class="emphasis">request</span> and the server sends back a <span class="emphasis">response</span> containing the webpage.

When accessing content on the internet, it is important to remember that <span class="emphasis">every destination</span> you visit is delivered by a <span class="emphasis">server</span> located somewhere on a network connected to the <span class="emphasis">global internet</span>.  
Websites, downloads, videos, and cloud services all come from systems designed to respond to client requests.

Another example is <span class="emphasis">email</span>.  
An email application (such as Microsoft Outlook) acts as the client and communicates with a mail server so users can <span class="emphasis">send</span> and <span class="emphasis">receive</span> messages.

A third common service is <span class="emphasis">file storage</span>.  
A file server keeps data in a <span class="emphasis">central location</span>, and client devices access those files using operating system tools or file management software.

---
### Summary
---

- A device’s role is defined by the <span class="emphasis">software</span> it runs.
- <span class="emphasis">Clients</span> request services.
- <span class="emphasis">Servers</span> provide services.
- A host may perform <span class="secondEmphasis">multiple roles</span>.
- Different services normally require different server applications.

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/basics/legacy-lab-and-capture/wireshark-profiles">← Back</a>
    <div class="xrefTitle">Previous Topic: Legacy Lab & Capture → Wireshark Profiles</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/basics/client-and-server-roles/p2p-and-examples">Next →</a>
    <div class="xrefTitle">Client & Server Roles → P2P & Examples</div>
  </div>
</div>