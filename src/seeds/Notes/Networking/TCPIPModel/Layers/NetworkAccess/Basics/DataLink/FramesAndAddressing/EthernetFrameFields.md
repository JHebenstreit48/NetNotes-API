# Breaking Down the Ethernet Frame

<hr class="dividerSection" />

### Overview of the Ethernet Frame

<hr class="dividerSection" />

An Ethernet frame is the Layer 2 structure used to deliver data from one Network Interface Card (NIC) to another on the same local network.

Each frame is divided into specific fields. These fields control synchronization, addressing, payload identification, and error detection.

The numbers associated with each field represent the size in <span class="emphasis">bytes</span>.  
To convert bytes to bits, multiply by 8.

<hr class="dividerExample" />

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

The preamble consists of alternating 1s and 0s, the pattern <span class="codeSnip">10101010</span> repeated once for each of its 7 bytes.

<hr class="dividerSection" />

### Start Frame Delimiter (SFD)

<hr class="dividerSection" />

The Start Frame Delimiter indicates that the actual Ethernet frame is about to begin.

It signals to the receiving NIC that the next fields will contain meaningful frame information.

The SFD's bit pattern is <span class="codeSnip">10101011</span>, the same alternating pattern as the preamble, except the final bit is a 1 instead of a 0, marking the end of the preamble and the start of the rest of the frame.

<hr class="dividerSection" />

### Destination and Source MAC Addresses

<hr class="dividerSection" />

The <span class="emphasis">Destination MAC Address</span> identifies the intended receiving device on the local network.

The <span class="emphasis">Source MAC Address</span> identifies the device that originated the frame.

Switches use these addresses to make forwarding decisions within a Layer 2 network.

<hr class="dividerSection" />

### Length / Type Field

<hr class="dividerSection" />

This 2-byte field can serve one of two purposes:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Length</span>, indicates the size of the payload (used in IEEE 802.3 framing).</li>
    <li><span class="emphasis">Type</span>, identifies the protocol encapsulated inside the payload (used in Ethernet II framing).</li>
  </ul>
</div>

Whether the field represents a length or a type depends on its value:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A value of 1500 or less indicates the <span class="emphasis">length</span> of the encapsulated payload, in bytes.</li>
    <li>A value of 1536 or greater indicates the <span class="emphasis">type</span> of the encapsulated payload instead.</li>
  </ul>
</div>

Examples of common type values include:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">0x0800</span> (2048 in decimal), IPv4</li>
    <li><span class="codeSnip">0x86DD</span> (34525 in decimal), IPv6</li>
  </ul>
</div>

This allows the receiving device to know what kind of data is being carried inside the frame.

<hr class="dividerSection" />

### Data (Payload)

<hr class="dividerSection" />

The data field contains the encapsulated Layer 3 packet.

This may include:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>An IPv4 packet</li>
    <li>An IPv6 packet</li>
    <li>A TCP segment</li>
    <li>Application-layer data such as HTTP</li>
  </ul>
</div>

Ethernet itself does not interpret this data.  
It simply delivers the frame from one NIC to another.

The payload must be between 46 and 1500 bytes.  
If it is smaller than 46 bytes, padding is added to meet the minimum frame size requirement.

<hr class="dividerSection" />

### Frame Check Sequence (FCS)

<hr class="dividerSection" />

The Frame Check Sequence provides error detection.

The receiving device performs a calculation to verify that the frame was not corrupted during transmission.

If the calculated value does not match the FCS value, the frame is discarded.

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

<div class="centeredNumberedList">
  1. **The sender writes the message**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>This represents the payload.</li>
    </ul>
  </div>

  2. **The sender places the message inside an envelope**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>This represents encapsulation into a frame.</li>
    </ul>
  </div>

  3. **The envelope is labeled with the destination and sender addresses**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>These are the MAC addresses.</li>
    </ul>
  </div>

  4. **The postal system delivers the envelope**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Switches forward the frame based on MAC addresses.</li>
    </ul>
  </div>

  5. **The recipient verifies the envelope and removes the letter**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>The receiving NIC checks the FCS and processes the payload.</li>
    </ul>
  </div>
</div>  

If the envelope is damaged or incorrectly addressed, the letter may not be delivered.  
Similarly, if a frame fails the FCS check or has incorrect addressing, it is discarded.

<hr class="dividerSection" />

### Summary

<hr class="dividerSection" />

An Ethernet frame contains multiple structured fields that allow:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Synchronization</li>
    <li>Local addressing</li>
    <li>Payload identification</li>
    <li>Error detection</li>
  </ul>
</div>

Together, these fields enable reliable NIC-to-NIC communication on a local network.

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/network-access/basics/data-link/frames-and-addressing/mac-addressing">← Back</a>
    <div class="xrefTitle">Data Link - Frames & Addressing - MAC Addressing</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/network-access/basics/data-link/frames-and-addressing/burned-in-address-bia">Next →</a>
    <div class="xrefTitle">Data Link - Frames & Addressing - Burned-In Address (BIA)</div>
  </div>
</div>