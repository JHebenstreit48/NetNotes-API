# Event List & Custom PDU

<hr class="dividerSection" />

### The Event List Panel

<hr class="dividerSection" />

Once <span class="emphasis">Simulation mode</span> is active, the <span class="emphasis">Simulation Panel</span> appears, showing the <span class="emphasis">Event List</span>.

The Event List records each PDU sent across the network, along with several columns of information:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Time(sec)</span>, when the event occurred</li>
    <li><span class="emphasis">Last Device</span>, the device that most recently handled the PDU</li>
    <li><span class="emphasis">At Device</span>, the device the PDU is currently at</li>
    <li><span class="emphasis">Type</span>, the protocol responsible for the traffic (e.g., STP, OSPF, DHCP)</li>
  </ul>
</div>

<hr class="dividerSection" />

### Play Controls

<hr class="dividerSection" />

The <span class="emphasis">Play Controls</span> allow traffic to be stepped through the network at your own pace.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Reset Simulation, clears captured events and restarts</li>
    <li>Step buttons, move forward or backward through captured events one at a time</li>
    <li>Play button, automatically steps through all captured events in sequence</li>
  </ul>
</div>

<hr class="dividerSection" />

### Constant Delay

<hr class="dividerSection" />

The <span class="emphasis">Constant Delay</span> checkbox controls whether simulated events occur at a fixed, consistent interval, rather than using the timing that would naturally occur on a real network.

This makes it easier to observe traffic without waiting for realistic delays between events.

<hr class="dividerSection" />

### Event List Filters

<hr class="dividerSection" />

By default, Simulation mode can capture and display traffic for a wide range of protocols, including ARP, BGP, CDP, DHCP, DNS, EIGRP, HTTP, HTTPS, ICMP, OSPF, RIP, SSH, STP, TCP, TFTP, Telnet, UDP, VTP, and many others.

The <span class="emphasis">Event List Filters</span> panel allows you to choose which protocols are visible in the Event List, so you can focus on specific traffic types while working through a lab.

<hr class="dividerSection" />

### Inspecting PDU Details

<hr class="dividerSection" />

Clicking on an individual PDU in the Event List, or on the animated icon on the workspace, opens a <span class="emphasis">PDU Information</span> window with two tabs.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">OSI Model</span> tab, shows <span class="emphasis">In Layers</span> and <span class="emphasis">Out Layers</span> columns, representing what information is present as the PDU is received versus sent at that device</li>
    <li><span class="emphasis">Outbound PDU Details</span> tab, shows additional detail about the outgoing message</li>
  </ul>
</div>

Within the OSI Model tab, clicking on a populated layer (Layer 1 through Layer 7, depending on the protocol) shows the specific header information present at that layer, along with a numbered, step-by-step description of what is happening to the PDU at that stage.

<hr class="dividerSection" />

### Custom PDU

<hr class="dividerSection" />

In addition to observing traffic generated naturally by device activity, Packet Tracer also allows you to create a <span class="emphasis">Custom PDU</span>, a manually defined packet sent between two chosen devices, for testing specific scenarios.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tools/cisco-packet-tracer/basics/modes/realtime-vs-simulation">← Back</a>
    <div class="xrefTitle">Cisco Packet Tracer - Basics - Modes - Realtime vs Simulation</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tools/cisco-packet-tracer/basics/devices-and-cabling/palette-and-modules">Next →</a>
    <div class="xrefTitle">Section: Cisco Packet Tracer - Basics - Devices & Cabling - Palette & Modules</div>
  </div>
</div>