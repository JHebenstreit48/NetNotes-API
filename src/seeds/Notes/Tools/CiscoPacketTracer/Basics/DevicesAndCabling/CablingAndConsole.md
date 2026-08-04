# Cabling & Console

<hr class="dividerSection" />

### Cable Types in Packet Tracer

<hr class="dividerSection" />

Packet Tracer provides several cable types in the <span class="emphasis">Connections</span> palette, represented by the lightning bolt icon in the device type selection box.

To identify a cable type, hover over its icon in the connections palette. The cable name appears in the label bar at the bottom of the screen.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>If cable names are not visible, switch to Packet Tracer's official dark mode under <span class="emphasis">Options → Preferences</span></li>
    <li>The label bar text may be invisible against certain background themes</li>
  </ul>
</div>

<hr class="dividerSection" />

### Available Cable Types

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Cable Type</th>
      <th class="tableCellHeader">Common Use</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Copper Straight-Through</td>
      <td class="tableCell">Connecting dissimilar devices (PC to switch, router to switch)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Copper Crossover</td>
      <td class="tableCell">Connecting similar devices without Auto MDI-X (switch to switch)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Fiber — Single Mode</td>
      <td class="tableCell">Long distance fiber connections</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Fiber — Multimode</td>
      <td class="tableCell">Short distance fiber connections</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Serial DCE / DTE</td>
      <td class="tableCell">WAN serial connections between routers</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Console (Rollover)</td>
      <td class="tableCell">Direct management connection from PC to router or switch console port</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Auto (Lightning Bolt)</td>
      <td class="tableCell">Automatically selects the correct cable type between two devices</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

### Fiber Cable Note

<hr class="dividerSection" />

In versions of Packet Tracer prior to <span class="emphasis">9.0.0</span>, fiber optic connections were not differentiated — only a single generic fiber cable type existed.

As of <span class="emphasis">version 9.0.0 (build 9.0.0.0810)</span>, Packet Tracer lists <span class="emphasis">Single Mode Fiber</span> and <span class="emphasis">Multimode Fiber</span> as separate cable types, making fiber connections more realistic.

When selecting a fiber cable type, consider which is appropriate for the scenario even though Packet Tracer will allow either to connect regardless of distance or device type.

<hr class="dividerSection" />

### Connecting Devices

<hr class="dividerSection" />

To connect two devices with a cable:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Select a cable type from the connections palette</li>
    <li>Click the first device and select the interface from the popup menu</li>
    <li>Click the second device and select its interface</li>
    <li>Hold <span class="codeSnip">Ctrl</span> (Windows) or <span class="codeSnip">Command</span> (Mac) after selecting a cable type to avoid reselecting it between connections</li>
    <li>Alternatively use the <span class="emphasis">Lightning Bolt</span> (Auto) cable to let Packet Tracer choose the correct cable type automatically</li>
  </ul>
</div>

<hr class="dividerSection" />

### Console Connection

<hr class="dividerSection" />

A console cable connects a PC to the console port of a router or switch for direct management access.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>In Packet Tracer, connect the console cable from the PC's <span class="codeSnip">RS-232</span> port to the device's <span class="codeSnip">Console</span> port</li>
    <li>Open the PC's Terminal application under the Desktop tab to access the CLI</li>
    <li>Default terminal settings in Packet Tracer are <span class="codeSnip">9600</span> baud rate</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tools/cisco-packet-tracer/basics/devices-and-cabling/palette-and-modules">← Back</a>
    <div class="xrefTitle">Devices & Cabling - Palette & Modules</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tools/cisco-packet-tracer/basics/configuration-basics/cli-access">Next →</a>
    <div class="xrefTitle">Section: Configuration Basics - CLI Access</div>
  </div>
</div>