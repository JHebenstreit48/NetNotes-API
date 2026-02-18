# Introduction

---
### Peer-to-Peer vs Client/Server
---

In a <span class="emphasis">client/server</span> design, one host sends a <span class="emphasis">request</span> and another host returns a <span class="emphasis">response</span> that delivers information or a service.

In a <span class="emphasis">peer-to-peer (P2P)</span> design, devices exchange resources more <span class="secondEmphasis">directly</span> with one another instead of relying entirely on a single central system.

A device can also perform <span class="secondEmphasis">both roles</span> depending on what it is doing.

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
      <td class="tableCell"><span class="emphasis">P2P</span></td>
      <td class="tableCell">Devices share resources <span class="secondEmphasis">directly</span> with each other.</td>
    </tr>
  </tbody>
</table>

---
### How Basic P2P Networks Are Built
---

The simplest form of P2P networking can involve just <span class="emphasis">two computers</span> connected by a wired or wireless link.

When more devices are added, a network device such as a <span class="emphasis">switch</span> is typically needed so all peers can communicate.

---
### Performance Considerations
---

When a machine must support its user while also responding to other devices, performance may decrease.

Because of this, environments with heavy demand usually transition toward <span class="emphasis">dedicated servers</span> whose only job is to provide services.

---
### P2P Applications
---

Some software is built so that each participant acts as both a <span class="emphasis">client</span> and a <span class="emphasis">server</span> within the same conversation.

This means each device must:
- provide a <span class="emphasis">user interface</span>  
- run a <span class="emphasis">background service</span> that can respond to other peers

---
### Hybrid Designs
---

Many modern systems are not purely client/server or purely P2P.  
Instead, they use a <span class="secondEmphasis">hybrid model</span>.

In hybrid designs, centralized infrastructure may handle:
- authentication  
- user accounts  
- directories or indexes  
- session coordination  

After peers discover each other, some communication or data transfer may happen <span class="secondEmphasis">directly</span> between devices.

---
### Practical Hybrid Examples
---

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Platform or Situation</th>
      <th class="tableCellHeader">Why It Is Hybrid</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Messaging & collaboration apps (Discord, Slack, Teams)</td>
      <td class="tableCell">Central servers manage login, identity, and routing, while media or data may travel between users.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Video meetings (Zoom, Teams)</td>
      <td class="tableCell">Central services coordinate participants; streams may be optimized between endpoints.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Mobile devices sharing data</td>
      <td class="tableCell">Cloud systems assist discovery and permissions, but devices can exchange information more directly.</td>
    </tr>
  </tbody>
</table>

---
### Key Takeaways
---

- <span class="emphasis">Client/server</span> defines clear requester and provider roles.
- <span class="emphasis">P2P</span> encourages more <span class="secondEmphasis">direct</span> sharing.
- Devices frequently operate as <span class="secondEmphasis">both</span>.
- Real-world systems are often <span class="secondEmphasis">hybrid</span>.
- Growing demand usually leads toward <span class="emphasis">dedicated infrastructure</span>.

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