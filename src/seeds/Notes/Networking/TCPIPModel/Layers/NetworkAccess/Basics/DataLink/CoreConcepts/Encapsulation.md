# What Is Encapsulation?

<hr class="dividerSection" />

Encapsulation is the process of wrapping data with the protocol information required at each layer of the TCP/IP model.

It occurs when data is <span class="emphasis">sent</span> from a client or host.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Begins at the <span class="emphasis">Application Layer</span>.</li>
    <li>Passes through the <span class="emphasis">Transport, Internet, Data Link, and Physical layers</span>.</li>
    <li>Each layer adds its own <span class="emphasis">header</span> (and sometimes trailer).</li>
    <li>Ensures the data can be properly delivered and interpreted by the destination.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Encapsulation Flow (Send Path)

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Application Layer</span>, user data (HTTP request, email, etc.)</li>
    <li><span class="emphasis">Transport Layer</span>, adds ports and reliability (TCP/UDP header)</li>
    <li><span class="emphasis">Internet Layer</span>, adds logical addressing (IP header)</li>
    <li><span class="emphasis">Data Link Layer</span>, adds physical addressing (MAC header + FCS)</li>
    <li><span class="emphasis">Physical Layer</span>, converts frame into bits on the medium</li>
  </ul>
</div>

<hr class="dividerExample" />

### Example: HTTP Request Encapsulation

<hr class="dividerExample" />

```shell
App: HTTP GET /index.html
L4: TCP src:51532 dst:80  SEQ=1000 ACK=0  Flags=SYN
L3: IPv4 src:10.0.1.10 dst:93.184.216.34  TTL=64
L2: Eth dst:00:11:22:33:44:55 src:66:77:88:99:aa:bb type=0x0800
L1: Bits transmitted on the medium...
```

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/networking/tcp-ip-model/layers/network-access/basics/data-link/frames-and-addressing/ethernet-frame-fields" target="_blank" rel="noopener noreferrer">Data Link → Frames & Addressing → Ethernet Frame Fields (what the Type field's value, such as 0x0800, actually indicates)</a>
</div>

<hr class="dividerSection" />

## OSI vs TCP/IP Mapping

<hr class="dividerSection" />

<hr class="dividerSubsection1" />

### TCP/IP to OSI equivalence

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Layer (TCP/IP)</th>
      <th class="tableCellHeader">Equivalent OSI Layer(s)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Application</td>
      <td class="tableCell">Application, Presentation, Session</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Transport</td>
      <td class="tableCell">Transport</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Internet</td>
      <td class="tableCell">Network</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Network Access</td>
      <td class="tableCell">Data Link, Physical</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSubsection1" />

### What Is a PDU?

<hr class="dividerSubsection1" />

A <span class="emphasis">protocol data unit (PDU)</span> is the general term for a unit of data at a given layer of the network stack, meaning data combined with that layer's own header (and sometimes trailer).

At each stage of encapsulation, the message is given a specific name depending on which layer it is at.

<hr class="dividerSubsection1" />

### Data

<hr class="dividerSubsection1" />

At the <span class="emphasis">Application Layer</span>, the message is simply referred to as <span class="emphasis">data</span>, the raw application content before any transport, network, or link-layer headers have been added.

<hr class="dividerSubsection1" />

### Segment and Datagram

<hr class="dividerSubsection1" />

The combination of data and a Layer 4 header is called a <span class="emphasis">segment</span> when using TCP, or a <span class="emphasis">datagram</span> when using UDP.

TCP creates segments, and UDP creates datagrams.  

This naming difference reflects how each protocol treats the data differently, TCP adds reliability features, while UDP does not.

A segment or datagram is also known as a <span class="emphasis">Layer 4 PDU</span> (L4PDU).

<hr class="dividerSubsection1" />

### Packet

<hr class="dividerSubsection1" />

The combination of a segment or datagram and a Layer 3 header is called a <span class="emphasis">packet</span>.

"Packet" is the most common term used casually when talking about messages sent over a network, but strictly speaking it refers only to the message at this specific stage, after the Layer 3 header has been added.

A packet is also known as a <span class="emphasis">Layer 3 PDU</span> (L3PDU).

<hr class="dividerSubsection1" />

### Frame

<hr class="dividerSubsection1" />

The combination of a packet and a Layer 2 header and trailer is called a <span class="emphasis">frame</span>.

A frame is what is actually transmitted over the wire. A packet, segment, or datagram never travels over the wire by itself, it is always sent inside a frame.

A frame is also known as a <span class="emphasis">Layer 2 PDU</span> (L2PDU).

<hr class="dividerSubsection1" />

### PDU names and common fields

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Layer (TCP/IP)</th>
      <th class="tableCellHeader">PDU Name + Key Fields</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Application</td>
      <td class="tableCell">
        <span class="emphasis">PDU:</span> Data<br/>
        <span class="emphasis">Key fields:</span> Protocol payload
      </td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Transport</td>
      <td class="tableCell">
        <span class="emphasis">PDU:</span> Segment (TCP) or Datagram (UDP)<br/>
        <span class="emphasis">Key fields:</span> Ports, SEQ/ACK
      </td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Internet</td>
      <td class="tableCell">
        <span class="emphasis">PDU:</span> Packet<br/>
        <span class="emphasis">Key fields:</span> IP address, TTL
      </td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Network Access</td>
      <td class="tableCell">
        <span class="emphasis">PDU:</span> Frame / Bits<br/>
        <span class="emphasis">Key fields:</span> MAC, FCS, encoding
      </td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

### Payloads

<hr class="dividerSection" />

The contents of each PDU, everything encapsulated by that layer's header and trailer, are called the <span class="emphasis">payload</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A segment or datagram's payload is the application data itself.</li>
    <li>A packet's payload is a segment or datagram, including the Layer 4 header and the data.</li>
    <li>A frame's payload is a packet, including the Layer 3 and Layer 4 headers and the data.</li>
  </ul>
</div>

The payload is what is inside the PDU, not including that layer's own header or trailer.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/network-access/basics/data-link/core-concepts/introduction">← Back</a>
    <div class="xrefTitle">Data Link - Core Concepts - Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/network-access/basics/data-link/core-concepts/de-encapsulation">Next →</a>
    <div class="xrefTitle">Data Link - Core Concepts - De-encapsulation</div>
  </div>
</div>