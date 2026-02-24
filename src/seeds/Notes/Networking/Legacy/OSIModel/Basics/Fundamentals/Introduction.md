# Introduction

---

### Why Two Models?

<hr class="dividerSection" />

In the early days of networking, vendors built <span class="emphasis">proprietary systems</span> that could not communicate with one another. The need for <span class="secondEmphasis">standardized communication frameworks</span> led to two influential models:

<div class="bullet1">
- <span class="emphasis">OSI Model</span>: a seven-layer <span class="secondEmphasis">reference model</span> describing general networking functions  
- <span class="emphasis">TCP/IP Model</span>: a four-layer <span class="secondEmphasis">implemented protocol suite</span> that powers modern internet communications  
</div>

The OSI model focuses on defining <span class="emphasis">what functions must occur</span> in networking.  
The TCP/IP model focuses on <span class="secondEmphasis">how the Internet protocol suite implements those functions</span>.

<hr class="dividerSection" />

### Development Timeline (High Level)

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Year</th>
      <th class="tableCellHeader">Milestone</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">1981</td>
      <td class="tableCell">Internet Protocol (RFC 791) published</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">1982</td>
      <td class="tableCell">U.S. DoD adopts TCP/IP</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">1983</td>
      <td class="tableCell">ARPANET transitions to TCP/IP (“Flag Day”)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">1984</td>
      <td class="tableCell">ISO publishes the OSI Reference Model (ISO 7498)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">1990s+</td>
      <td class="tableCell">TCP/IP dominates deployments; OSI becomes the teaching model</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

### Why Learn OSI If TCP/IP Runs the Internet?

<hr class="dividerSection" />

The <span class="emphasis">TCP/IP model</span> visualizes how protocols in the TCP/IP suite interact. However, it does not fully describe every general function required for all networking communications.

For example:

<div class="bullet1">
- The TCP/IP <span class="emphasis">Network Access layer</span> does not specify which physical signaling methods must be used  
- It does not define electrical, mechanical, or encoding standards  
- It assumes underlying technologies handle media access and bit transmission  
</div>

The <span class="secondEmphasis">OSI model</span> separates these responsibilities clearly:

<div class="bullet1">
- <span class="emphasis">Layer 1 (Physical)</span>: electrical, mechanical, signaling, and transmission standards  
- <span class="emphasis">Layer 2 (Data Link)</span>: framing, MAC addressing, media access, and error detection  
</div>

In other words, OSI describes the <span class="secondEmphasis">necessary functional categories</span>, while TCP/IP describes the <span class="secondEmphasis">specific protocol implementations</span> used on the Internet.

<hr class="dividerSection" />

### How the Models Relate

<hr class="dividerSection" />

The TCP/IP protocol suite can be described using the OSI reference model:

<div class="bullet1">
- TCP/IP <span class="emphasis">Internet layer</span> aligns with OSI <span class="emphasis">Network layer (Layer 3)</span>  
- TCP/IP <span class="emphasis">Transport layer</span> maps directly to OSI <span class="emphasis">Transport layer (Layer 4)</span>  
- TCP/IP <span class="emphasis">Application layer</span> combines OSI <span class="emphasis">Application, Presentation, and Session</span>  
- TCP/IP <span class="emphasis">Network Access layer</span> combines OSI <span class="emphasis">Data Link and Physical</span>  
</div>

OSI provides a <span class="secondEmphasis">structured conceptual lens</span>.  
TCP/IP provides the <span class="secondEmphasis">operational protocol stack</span>.

<hr class="dividerSection" />

### Why OSI Is Still Taught

<hr class="dividerSection" />

<div class="bullet1">
- Offers a <span class="emphasis">clear troubleshooting framework</span> (“Is this a Layer 1 issue or Layer 7 issue?”)  
- Separates networking into <span class="secondEmphasis">logical functional boundaries</span>  
- Remains foundational in <span class="secondEmphasis">certifications and interviews</span>  
</div>

OSI is not about memorizing trivia — it is about learning to <span class="secondEmphasis">think in layers</span>.

<hr class="dividerSection" />

### Navigation

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/cloud/advanced/troubleshooting/remote-packet-capture">← Back</a>
    <div class="xrefTitle">Topic: Cloud - Advanced - Troubleshooting - Remote Packet Capture</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/legacy/osi-model/basics/fundamentals/layer-comparison">Next →</a>
    <div class="xrefTitle">OSI Model - Basics - Fundamentals - Layers Comparison</div>
  </div>
</div>