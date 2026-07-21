# Peer-to-Peer vs Client/Server

<hr class="dividerSection" />

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

<hr class="dividerSection" />

## How Basic P2P Networks Are Built

<hr class="dividerSection" />

The simplest form of P2P networking can involve just <span class="emphasis">two computers</span> connected by a wired or wireless link.

When more devices are added, a network device such as a <span class="emphasis">switch</span> is typically needed so all peers can communicate.

<hr class="dividerSection" />

### Performance Considerations

<hr class="dividerSection" />

When a machine must support its user while also responding to other devices, performance may decrease.

Because of this, environments with heavy demand usually transition toward <span class="emphasis">dedicated servers</span> whose only job is to provide services.

<hr class="dividerSection" />

## P2P Applications

<hr class="dividerSection" />

Some software is built so that each participant acts as both a <span class="emphasis">client</span> and a <span class="emphasis">server</span> within the same conversation.

This means each device must:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>provide a <span class="emphasis">user interface</span></li>
    <li>run a <span class="emphasis">background service</span> that can respond to other peers</li>
  </ul>
</div>

<hr class="dividerSection" />

## Hybrid Designs

<hr class="dividerSection" />

Many modern systems are not purely client/server or purely P2P.

Instead, they use a <span class="secondEmphasis">hybrid model</span>.

In hybrid designs, centralized infrastructure may handle:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>authentication</li>
    <li>user accounts</li>
    <li>directories or indexes</li>
    <li>session coordination</li>
  </ul>
</div>

After peers discover each other, some communication or data transfer may happen <span class="secondEmphasis">directly</span> between devices.

<hr class="dividerSection" />

### Practical Hybrid Examples

<hr class="dividerSection" />

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

<hr class="dividerSection" />

## Key Takeaways

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Client/server</span> defines clear requester and provider roles.</li>
    <li><span class="emphasis">P2P</span> encourages more <span class="secondEmphasis">direct</span> sharing.</li>
    <li>Devices frequently operate as <span class="secondEmphasis">both</span>.</li>
    <li>Real-world systems are often <span class="secondEmphasis">hybrid</span>.</li>
    <li>Growing demand usually leads toward <span class="emphasis">dedicated infrastructure</span>.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/basics/client-and-server-roles/fundamentals">← Back</a>
    <div class="xrefTitle">Client & Server Roles - Fundamentals</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/basics/email-and-communication/smtp">Next →</a>
    <div class="xrefTitle">Section: Email & Communication - SMTP</div>
  </div>
</div>