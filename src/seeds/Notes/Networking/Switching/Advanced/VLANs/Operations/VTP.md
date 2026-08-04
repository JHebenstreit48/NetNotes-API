# VLAN Trunking Protocol (VTP)

<hr class="dividerSection" />

<span class="emphasis">VTP</span> (VLAN Trunking Protocol) is a <span class="secondEmphasis">Cisco proprietary protocol</span> that propagates VLAN configuration across a switched network automatically.

It allows VLAN changes made on one switch to sync to other switches in the same VTP domain, reducing the need to manually configure VLANs on every switch.

<hr class="dividerSection" />

### VTP Modes

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Mode</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Server</td>
      <td class="tableCell">Can create, modify, and delete VLANs. Propagates changes to VTP clients in the same domain.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Client</td>
      <td class="tableCell">Receives and applies VLAN information from the server. Cannot make VLAN changes.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Transparent</td>
      <td class="tableCell">Does not participate in VTP but forwards VTP messages to other switches. Manages its own local VLANs.</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

### VTP Domain

<hr class="dividerSection" />

All switches participating in VTP must share the same <span class="emphasis">VTP domain name</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Switches only accept VTP updates from switches in the same domain</li>
    <li>A switch with a higher <span class="emphasis">revision number</span> will overwrite VLAN databases on other switches in the domain</li>
    <li>Accidentally introducing a switch with a higher revision number can wipe out the VLAN database across the network</li>
  </ul>
</div>

<hr class="dividerSection" />

### VTP Versions

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Version</th>
      <th class="tableCellHeader">Key Difference</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">VTP v1</td>
      <td class="tableCell">Original version, basic VLAN propagation</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">VTP v2</td>
      <td class="tableCell">Adds support for Token Ring VLANs and enhanced consistency checks</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">VTP v3</td>
      <td class="tableCell">Adds support for extended VLANs, MST, and a primary server concept to prevent accidental overwrites</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/switching/advanced/vlans/operations/trunking-8021q">← Back</a>
    <div class="xrefTitle">Switching - Advanced - VLANs - Operations - Trunking (802.1Q)</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/switching/advanced/vlans/routing/inter-vlan-routing">Next →</a>
    <div class="xrefTitle">Section: Switching - Advanced - VLANs - Routing - Inter-VLAN Routing</div>
  </div>
</div>