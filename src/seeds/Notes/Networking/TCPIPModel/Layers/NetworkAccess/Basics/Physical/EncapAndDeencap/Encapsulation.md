# What Is Encapsulation?
---

Encapsulation is the process of wrapping data with the protocol information required at each layer of the TCP/IP model. It occurs when data is <span class="emphasis">sent</span> from a client or host.

- Begins at the <span class="emphasis">Application Layer</span>.  
- Passes through the <span class="emphasis">Transport, Internet, Data Link, and Physical layers</span>.  
- Each layer adds its own <span class="emphasis">header</span> (and sometimes trailer).  
- Ensures the data can be properly delivered and interpreted by the destination.

---

## Encapsulation Flow (Send Path)

<div class="fullWidthBullet">

🔹 <span class="emphasis">Application Layer</span> → user data (HTTP request, email, etc.)  
🔹 <span class="emphasis">Transport Layer</span> → adds ports and reliability (TCP/UDP header)  
🔹 <span class="emphasis">Internet Layer</span> → adds logical addressing (IP header)  
🔹 <span class="emphasis">Data Link Layer</span> → adds physical addressing (MAC header + FCS)  
🔹 <span class="emphasis">Physical Layer</span> → converts frame into bits on the medium  

</div>

<hr class="dividerExample" />

### Example: HTTP Request Encapsulation

<span class="codeSnip">App:</span> HTTP GET /index.html  
<span class="codeSnip">L4:</span> TCP src:51532 dst:80  SEQ=1000 ACK=0  Flags=SYN  
<span class="codeSnip">L3:</span> IPv4 src:10.0.1.10 dst:93.184.216.34  TTL=64  
<span class="codeSnip">L2:</span> Eth dst:00:11:22:33:44:55 src:66:77:88:99:aa:bb type=0x0800  
<span class="codeSnip">L1:</span> Bits transmitted on the medium…  

<hr class="dividerExample" />

---
## OSI vs TCP/IP Mapping
---

<hr class="dividerSubsection1" />

### TCP/IP ↔ OSI equivalence

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
        <span class="emphasis">PDU:</span> Segment<br/>
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

---

### Related Topic

See <span class="emphasis">De-encapsulation</span> for the reverse process.  

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/network-access/basics/physical/bandwidth-and-throughput/throughput">← Back</a>
    <div class="xrefTitle">Section: Physical - Bandwidth & Throughput - Throughput</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/network-access/basics/physical/encap-deencap/de-encapsulation">Next →</a>
    <div class="xrefTitle">Physical - Encap/De-encap - De-encapsulation</div>
  </div>
</div>