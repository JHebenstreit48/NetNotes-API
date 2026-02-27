# How a Switch Builds and Uses Its MAC Address Table

<hr class="dividerSection" />

### What Is a MAC Address Table?

<hr class="dividerSection" />

A <span class="emphasis">MAC Address Table</span> (also called a <span class="emphasis">CAM table</span>) is a switch’s internal mapping of:

<span class="emphasis">MAC Address → Switch Port</span>

MAC addresses (Media Access Control addresses) are the Layer 2 identifiers found in Ethernet frames.

The term “MAC table” describes what is stored.  
The term “CAM table” refers to the hardware technology used to store and search those MAC addresses.

CAM stands for <span class="emphasis">Content Addressable Memory</span>.

It allows the switch to quickly look up a destination MAC address and determine the correct outgoing port.

<hr class="dividerSection" />

### What the Table Contains

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Field</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">MAC Address</td>
      <td class="tableCell">Identifies the device</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Port</td>
      <td class="tableCell">Where the device was learned</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">VLAN (if configured)</td>
      <td class="tableCell">Separates broadcast domains</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Aging Timer</td>
      <td class="tableCell">Removes stale entries over time</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

### How a Switch Processes a Frame

<hr class="dividerSection" />

When a frame arrives on a switch port, the switch follows a strict order of operations:

1. **Learn (Always Happens First)**
   - The switch reads the source MAC address.
   - It adds or updates the MAC → Port mapping.
   - This learning occurs on every received frame.
   - Even if the destination is unknown.
   - Even if the frame will be flooded.

2. **Forward Decision**
   - The switch reads the destination MAC address.
   - It searches the MAC address table.

3. **If the Destination Is Found (Table Hit)**
   - The frame is forwarded only out the matching port.
   - This is called filtering.

4. **If the Destination Is Not Found (Unknown Unicast)**
   - The switch floods the frame out all ports except the one it arrived on.
   - During flooding, the switch temporarily behaves like a hub.

This process allows the switch to intelligently forward traffic inside a local network.

<hr class="dividerExample" />

### Example Scenario

<hr class="dividerExample" />

Suppose Host A (MAC AA-AA) sends a frame to Host D (MAC DD-DD).

- Frame arrives on <span class="codeSnip">Fa0/1</span>
- Source <span class="emphasis">MAC</span> <span class="secondEmphasis">AA-AA</span> is learned on <span class="emphasis">Fa0/1</span>
- Switch looks up DD-DD in its table
- If <span class="emphasis">DD-DD</span> maps to <span class="codeSnip">Fa0/4</span>, the frame is forwarded only out Fa0/4
- If <span class="emphasis">DD-DD</span> is not yet in the table, the frame is flooded (unknown unicast).

The switch <span class="emphasis">does not examine</span> <span class="secondEmphasis">IP addresses</span>.  
It makes <span class="emphasis">decisions</span> entirely <span class="emphasis">based on</span> <span class="secondEmphasis">Layer 2</span> information in the <span class="emphasis">Ethernet header</span>.

<hr class="dividerSection" />

### Why Entries Age Out

<hr class="dividerSection" />

Switches automatically remove MAC entries after a period of inactivity.

On many enterprise switches, the default aging time is approximately <span class="emphasis">300 seconds (5 minutes)</span>.

If no frames are received from a learned MAC address within that time, the entry is removed from the table.

If a known MAC address sends traffic again, the switch refreshes the aging timer for that entry.

This prevents incorrect forwarding if:

- A device disconnects
- A device moves to another port
- A cable is reconnected elsewhere
- A topology change occurs

The aging timer is configurable and may vary by vendor.

Aging ensures the MAC address table stays accurate and adaptive.

<hr class="dividerSection" />

### Learning Is Continuous

<hr class="dividerSection" />

A switch’s MAC address table is not preconfigured.

It builds dynamically based on observed traffic.

- Every received frame contributes learning.
- Active devices continuously refresh their entries.
- Inactive devices eventually age out.

This makes the switch a self-adjusting Layer 2 forwarding system.

<hr class="dividerSection" />

### Analogy: Reception Desk

<hr class="dividerSection" />

A switch behaves similarly to a reception desk:

1. A visitor walks in → The receptionist notes who they are (learn source MAC).
2. The visitor asks for someone → The receptionist checks the directory (destination lookup).
3. If found → The visitor is directed to the correct office (forwarding).
4. If not found → An announcement is made to the whole building (flooding).
5. If the visitor keeps returning → The receptionist remembers them (aging refresh).

This illustrates how switches learn, verify, and adapt over time.

<hr class="dividerSection" />

### Summary

<hr class="dividerSection" />

The MAC address table enables efficient Layer 2 switching:

- Learns from **source MAC addresses**
- Forwards based on **destination MAC addresses**
- Floods only when necessary
- Ages out stale entries

It is the core mechanism that makes Ethernet switching intelligent instead of broadcast-based.

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/switching/basics/fundamentals/layer-2-switching">← Back</a>
    <div class="xrefTitle">Switching - Basics - Fundamentals - Layer 2 Switching</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/switching/basics/hardware-and-port-types/switches-and-connectors">Next →</a>
    <div class="xrefTitle">Section: Switching - Basics - Hardware & Port Types - Switches and Connectors</div>
  </div>
</div>