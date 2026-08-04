# STP: Roles & States

<hr class="dividerSection" />

<span class="emphasis">Spanning Tree Protocol (STP)</span> prevents network loops in switched Ethernet networks by electing a root bridge and blocking redundant paths to create a loop-free topology.

Defined in <span class="emphasis">IEEE 802.1D</span>.

<hr class="dividerSection" />

### Key Terms

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Root Bridge</span>, the central reference switch elected by lowest Bridge ID</li>
    <li><span class="emphasis">Bridge ID</span>, a combination of a priority value and the switch MAC address used in root bridge election</li>
    <li><span class="emphasis">BPDU</span> (Bridge Protocol Data Unit), messages exchanged between switches to build and maintain the STP topology</li>
  </ul>
</div>

<hr class="dividerSection" />

### Port Roles

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Role</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Root Port</td>
      <td class="tableCell">The port on a non-root switch with the best path to the root bridge</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Designated Port</td>
      <td class="tableCell">The port on each network segment that forwards traffic toward the root bridge</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Blocked Port</td>
      <td class="tableCell">A port that is administratively blocked by STP to prevent loops</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

### Port States

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">State</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Blocking</td>
      <td class="tableCell">Receives BPDUs but does not forward frames</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Listening</td>
      <td class="tableCell">Processes BPDUs and participates in root bridge election</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Learning</td>
      <td class="tableCell">Builds MAC address table but does not yet forward frames</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Forwarding</td>
      <td class="tableCell">Fully operational, forwards frames and learns MAC addresses</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Disabled</td>
      <td class="tableCell">Administratively shut down, not participating in STP</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

### RSTP (Rapid Spanning Tree Protocol)

<hr class="dividerSection" />

<span class="emphasis">RSTP</span> (IEEE 802.1W) is a faster-converging evolution of STP that reduces convergence time from 30-50 seconds down to a few seconds.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Introduces new port roles: Alternate and Backup ports</li>
    <li>Replaces Blocking, Listening, and Disabled states with a single Discarding state</li>
    <li>Backward compatible with 802.1D STP</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/switching/advanced/vlans/security-and-design/dtp-best-practices">← Back</a>
    <div class="xrefTitle">Section: Switching - Advanced - VLANs - Security & Design - DTP Best Practices</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/switching/advanced/stp/protections">Next →</a>
    <div class="xrefTitle">Switching - Advanced - STP - Protections (BPDU/Root/Loop Guard)</div>
  </div>
</div>