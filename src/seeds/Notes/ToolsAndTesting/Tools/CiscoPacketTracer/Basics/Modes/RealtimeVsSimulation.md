# Realtime vs Simulation

<hr class="dividerSection" />

### What Is Realtime Mode?

<hr class="dividerSection" />

<span class="emphasis">Realtime mode</span> is the default mode in Packet Tracer.

Traffic flows through the network <span class="emphasis">instantly</span>, the same way it would on a real, physical network.

Realtime mode is best suited for general configuration, testing connectivity, and verifying that a network functions as expected.

<hr class="dividerSection" />

### What Is Simulation Mode?

<hr class="dividerSection" />

<span class="emphasis">Simulation mode</span> pauses network traffic so it can be inspected <span class="emphasis">one event at a time</span>.

Instead of traffic moving instantly, each <span class="emphasis">PDU</span> can be stepped through individually, allowing you to see exactly what happens at each layer as a message travels through the network.

This makes Simulation mode a useful tool for understanding how the <span class="emphasis">OSI</span> and <span class="emphasis">TCP/IP</span> models work in practice, rather than only in theory.

<hr class="dividerSection" />

### Switching Between Modes

<hr class="dividerSection" />

Realtime and Simulation modes are toggled using two buttons in the <span class="emphasis">bottom-right corner</span> of the Packet Tracer window, labeled <span class="emphasis">Realtime</span> and <span class="emphasis">Simulation</span>.

Clicking <span class="emphasis">Simulation</span> opens the <span class="emphasis">Simulation Panel</span>, which replaces the standard toolbox area with simulation-specific controls.

<hr class="dividerSection" />

### Why Use Simulation Mode?

<hr class="dividerSection" />

Simulation mode is especially useful for observing how different protocols populate different layers of the network model.

For example:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">STP</span> traffic only populates Layer 1 and Layer 2 information.</li>
    <li><span class="emphasis">OSPF</span> traffic populates Layer 1 through Layer 3 information.</li>
    <li><span class="emphasis">DHCP</span> traffic populates Layer 1, Layer 2, Layer 3, Layer 4, and Layer 7 information, since the TCP/IP model combines OSI Layers 5, 6, and 7 into a single Application layer.</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/networking/switching/advanced/stp/roles-and-states" target="_blank" rel="noopener noreferrer">Switching → Advanced → STP → Roles & States</a><br />
  <a href="/networking/tcp-ip-model/layers/internet/basics/fundamentals/dhcp" target="_blank" rel="noopener noreferrer">TCP/IP Model → Internet → Fundamentals → DHCP</a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tools/cisco-packet-tracer/basics/workspace-and-views/device-config-tabs">← Back</a>
    <div class="xrefTitle">Section: Cisco Packet Tracer - Basics - Workspace & Views - Device Config Tabs</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tools/cisco-packet-tracer/basics/modes/event-list-and-custom-pdu">Next →</a>
    <div class="xrefTitle">Cisco Packet Tracer - Basics - Modes - Event List & Custom PDU</div>
  </div>
</div>