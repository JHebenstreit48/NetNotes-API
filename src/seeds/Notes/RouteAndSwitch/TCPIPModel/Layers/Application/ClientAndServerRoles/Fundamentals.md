# Introduction

---
### Role-Based Communication
---
"In modern networks computer hosts can act as a client, a server, or both. The software installed on the computer determines which role the computer plays."

In modern networks, a host is not locked into one job forever. A host can act as a <span class="emphasis">client</span>, a <span class="emphasis">server</span>, or <span class="secondEmphasis">both</span> depending on the <span class="emphasis">software installed</span> and what the host is doing at that moment.

---
### Client vs Server (Core Definitions)
---
"Servers are hosts that have software installed, which enable them to provide information to other hosts on the network, like email or webpages."

"Clients are computer hosts that have software installed that enables the host to request and display the information obtained from the server."

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Role</th>
      <th class="tableCellHeader">Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Client</span></td>
      <td class="tableCell">A host running software that can <span class="emphasis">request</span> and <span class="emphasis">display</span> information obtained from a server.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Server</span></td>
      <td class="tableCell">A host running software that can <span class="emphasis">provide</span> information or services to other hosts on the network.</td>
    </tr>
  </tbody>
</table>

---
### What Determines the Role?
---
"The software installed on the computer determines which role the computer plays."

The same physical device can behave differently based on what it is running:
- If it is <span class="emphasis">requesting</span> a service, it is acting as a <span class="emphasis">client</span>.
- If it is <span class="emphasis">providing</span> a service, it is acting as a <span class="emphasis">server</span>.
- If it does <span class="secondEmphasis">both</span>, it may act as a client for one service and a server for another.

---
### Services Require Separate Server Software
---
"Each service requires separate server software."

A server provides resources through <span class="emphasis">server software</span>. Different services typically require different server applications.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Service Example</th>
      <th class="tableCellHeader">What the Server Provides</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Webpages</span></td>
      <td class="tableCell">Website content and web resources to clients that request them.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Email</span></td>
      <td class="tableCell">Email sending/receiving and mailbox access for clients.</td>
    </tr>
  </tbody>
</table>

---
### Summary
---
- Hosts can act as a <span class="emphasis">client</span>, a <span class="emphasis">server</span>, or <span class="secondEmphasis">both</span>.
- A host’s role depends on the <span class="emphasis">software installed</span> and the job it is performing.
- <span class="emphasis">Servers</span> provide services (such as <span class="emphasis">email</span> or <span class="emphasis">webpages</span>).
- <span class="emphasis">Clients</span> request and display the information they obtain from servers.
- Each service typically requires separate <span class="emphasis">server software</span>.

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