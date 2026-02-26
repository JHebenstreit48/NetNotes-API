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

When a frame arrives on a switch port, the switch performs the following steps:

1. **Read the Source MAC Address**  
   - The switch learns that this MAC is reachable through the incoming port.  
   - It adds or updates the entry in the MAC address table.

2. **Read the Destination MAC Address**  
   - The switch searches the MAC address table.

3. **If the Destination Is Found (Table Hit)**  
   - The frame is forwarded only out the matching port.

4. **If the Destination Is Not Found (Table Miss)**  
   - The switch floods the frame out all ports except the one it arrived on.

This process allows the switch to intelligently forward traffic inside a local network.

<hr class="dividerSection" />

### Example Scenario

<hr class="dividerSection" />

Suppose Host A (MAC AA-AA) sends a frame to Host D (MAC DD-DD).

- Frame arrives on <span class="codeSnip">Fa0/1</span>
- Source MAC AA-AA is learned on Fa0/1
- Switch looks up DD-DD in its table
- If DD-DD maps to <span class="codeSnip">Fa0/4</span>, the frame is forwarded only out Fa0/4

The switch does not examine IP addresses.  
It makes decisions entirely based on Layer 2 information in the Ethernet header.

<hr class="dividerSection" />

### Why Entries Age Out

<hr class="dividerSection" />

Switches automatically remove MAC entries after a period of inactivity.

This prevents incorrect forwarding if:

- A device disconnects
- A device moves to another port
- A cable is reconnected elsewhere

Aging ensures the MAC address table stays accurate.

<hr class="dividerSection" />

### Summary

<hr class="dividerSection" />

The MAC address table enables efficient Layer 2 switching:

- Learns from **source MAC addresses**
- Forwards based on **destination MAC addresses**
- Floods only when necessary
- Ages out stale entries

It is the core mechanism that makes Ethernet switching intelligent instead of broadcast-based.