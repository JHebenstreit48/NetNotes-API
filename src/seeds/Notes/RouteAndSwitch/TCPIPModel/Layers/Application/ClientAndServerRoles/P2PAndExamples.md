# Introduction

---
### Peer-to-Peer vs Client/Server
---

In a <span class="emphasis">client/server</span> design, responsibilities are clearly separated: one host <span class="emphasis">requests</span> and another host <span class="emphasis">provides</span>.

In a <span class="emphasis">peer-to-peer (P2P)</span> model, hosts can exchange resources more <span class="secondEmphasis">directly</span> without depending on one central system.

A single device may even perform <span class="secondEmphasis">both roles</span> at the same time depending on what it is doing.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Model</th>
      <th class="tableCellHeader">How Communication Happens</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Client/Server</span></td>
      <td class="tableCell">Clients send <span class="emphasis">requests</span>; servers send <span class="emphasis">responses</span>.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Peer-to-Peer</span></td>
      <td class="tableCell">Hosts share resources <span class="secondEmphasis">directly</span> with one another.</td>
    </tr>
  </tbody>
</table>

---
### How P2P Networks Are Built
---

The simplest P2P network can consist of just <span class="emphasis">two computers</span> connected by a wired or wireless link.  
Both systems can then exchange data and services, acting as either a client or a server when needed.

As more devices are added, a network device such as a <span class="emphasis">switch</span> is typically required to interconnect them.

---
### Performance Considerations
---

A major drawback of P2P networking is that a host’s performance may be reduced when it must function as both a <span class="emphasis">client</span> and a <span class="emphasis">server</span> simultaneously.

When many requests occur, the workload can overwhelm normal user machines.

Because of this, larger organizations often deploy <span class="emphasis">dedicated servers</span> whose only job is to provide services.

---
### Real-World Examples
---

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Activity</th>
      <th class="tableCellHeader">Typical Roles</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Viewing a webpage</span></td>
      <td class="tableCell">Browser = <span class="emphasis">client</span>, web server = <span class="emphasis">server</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Sending or receiving email</span></td>
      <td class="tableCell">Mail app = <span class="emphasis">client</span>, mail system = <span class="emphasis">server</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Sharing files between PCs</span></td>
      <td class="tableCell">Often resembles <span class="secondEmphasis">P2P</span>; roles may change depending on who is requesting.</td>
    </tr>
  </tbody>
</table>

---
### Key Takeaways
---

- <span class="emphasis">Client/server</span> separates who <span class="emphasis">asks</span> from who <span class="emphasis">answers</span>.
- <span class="emphasis">P2P</span> enables more <span class="secondEmphasis">direct</span> resource sharing.
- A device can perform <span class="secondEmphasis">multiple roles</span>.
- As networks grow, performance demands often require <span class="emphasis">dedicated servers</span>.

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/basics/client-and-server-roles/fundamentals">← Back</a>
    <div class="xrefTitle">Client & Server Roles → Fundamentals</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/basics/email-and-communication/smtp">Next →</a>
    <div class="xrefTitle">Next Topic: Email & Communication → SMTP</div>
  </div>
</div>