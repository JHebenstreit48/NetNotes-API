# Breaking Down the Ethernet Frame

<hr class="dividerSection" />

### Overview of the Ethernet Frame

<hr class="dividerSection" />

An Ethernet frame is the Layer 2 structure used to deliver data from one Network Interface Card (NIC) to another on the same local network.

Each frame is divided into specific fields. These fields control synchronization, addressing, payload identification, and error detection.

The numbers associated with each field represent the size in **bytes**.  
To convert bytes to bits, multiply by 8.

<hr class="dividerExample">

#### Example:

<hr class="dividerExample" />

7 bytes × 8 = 56 bits

<hr class="dividerSection" />

### Ethernet Frame Field Sizes

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Field</th>
      <th class="tableCellHeader">Size (Bytes)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Preamble</td>
      <td class="tableCell">7</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Start Frame Delimiter (SFD)</td>
      <td class="tableCell">1</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Destination MAC Address</td>
      <td class="tableCell">6</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Source MAC Address</td>
      <td class="tableCell">6</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Length / Type</td>
      <td class="tableCell">2</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Data (Payload)</td>
      <td class="tableCell">46 – 1500</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Frame Check Sequence (FCS)</td>
      <td class="tableCell">4</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

### Preamble

<hr class="dividerSection" />

The preamble is used to synchronize the receiving NIC with the incoming bit stream.

It prepares the receiving device so it can properly interpret the bits that follow.

<hr class="dividerSection" />

### Start Frame Delimiter (SFD)

<hr class="dividerSection" />

The Start Frame Delimiter indicates that the actual Ethernet frame is about to begin.

It signals to the receiving NIC that the next fields will contain meaningful frame information.

<hr class="dividerSection" />

### Destination and Source MAC Addresses

<hr class="dividerSection" />

The **Destination MAC Address** identifies the intended receiving device on the local network.

The **Source MAC Address** identifies the device that originated the frame.

Switches use these addresses to make forwarding decisions within a Layer 2 network.

<hr class="dividerSection" />

### Length / Type Field

<hr class="dividerSection" />

This 2-byte field can serve one of two purposes:

- **Length** — Indicates the size of the payload (used in IEEE 802.3 framing).
- **Type** — Identifies the protocol encapsulated inside the payload (used in Ethernet II framing).

Examples of common type values include:
- IPv4
- IPv6

This allows the receiving device to know what kind of data is being carried inside the frame.

<hr class="dividerSection" />

### Data (Payload)

<hr class="dividerSection" />

The data field contains the encapsulated Layer 3 packet.

This may include:
- An IPv4 packet
- An IPv6 packet
- A TCP segment
- Application-layer data such as HTTP

Ethernet itself does not interpret this data.  
It simply delivers the frame from one NIC to another.

The payload must be between 46 and 1500 bytes.  
If it is smaller than 46 bytes, padding is added to meet the minimum frame size requirement.

<hr class="dividerSection" />

### Frame Check Sequence (FCS)

<hr class="dividerSection" />

The Frame Check Sequence provides error detection.

The receiving device performs a calculation to verify that the frame was not corrupted during transmission.

If the calculated value does not match the FCS value:
- The frame is discarded.

This mechanism helps ensure reliable communication at Layer 2.

The FCS is calculated using a Cyclic Redundancy Check (CRC) algorithm.

<hr class="dividerSection" />

### Understanding Frame Structure Through a Letter Analogy

<hr class="dividerSection" />

To better understand how an Ethernet frame works, imagine sending a letter through the mail.

Just like a physical letter must follow a specific format to be delivered correctly, an Ethernet frame must follow a structured format to be delivered across a network.

<hr class="dividerSubsection1" />

### Envelope vs Frame Header

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Letter Element</th>
      <th class="tableCellHeader">Ethernet Equivalent</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Recipient address on envelope</td>
      <td class="tableCell">Destination MAC Address</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Sender address on envelope</td>
      <td class="tableCell">Source MAC Address</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Start of message indicator</td>
      <td class="tableCell">Start Frame Delimiter (SFD)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Content of letter</td>
      <td class="tableCell">Data (Payload)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">End of message indicator</td>
      <td class="tableCell">Frame Check Sequence (FCS)</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSubsection1" />

### Step-by-Step Analogy

<hr class="dividerSubsection1" />

1. The sender writes the message → This represents the payload.  
2. The sender places the message inside an envelope → This represents encapsulation into a frame.  
3. The envelope is labeled with the destination and sender addresses → These are the MAC addresses.  
4. The postal system delivers the envelope → Switches forward the frame based on MAC addresses.  
5. The recipient verifies the envelope and removes the letter → The receiving NIC checks the FCS and processes the payload.  

If the envelope is damaged or incorrectly addressed, the letter may not be delivered.  
Similarly, if a frame fails the FCS check or has incorrect addressing, it is discarded.

<hr class="dividerSection" />

### Summary

<hr class="dividerSection" />

An Ethernet frame contains multiple structured fields that allow:

- Synchronization
- Local addressing
- Payload identification
- Error detection

Together, these fields enable reliable NIC-to-NIC communication on a local network.

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/network-access/basics/data-link/frames-and-addressing/mac-addressing">← Back</a>
    <div class="xrefTitle">Data Link - Frames & Addressing - MAC Addressing</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/network-access/basics/data-link/frames-and-addressing/burned-in-address-bia">Next →</a>
    <div class="xrefTitle">Data Link - Frames & Addressing - Burned-In Address (BIA)</div>
  </div>
</div>