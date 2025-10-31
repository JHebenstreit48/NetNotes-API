<br>

---
## Why Two Models?
---
In the early days of networking, vendors shipped <span class="emphasis">proprietary systems</span> that couldn’t talk to each other. The push for <span class="secondEmphasis">standardized communication</span> created two influential frameworks:

<div class="bullet1">
- <span class="emphasis">OSI Model</span>: a seven-layer <span class="secondEmphasis">conceptual reference</span> for how communication should be structured  
- <span class="emphasis">TCP/IP Model</span>: a leaner, <span class="secondEmphasis">implemented</span> stack that powers real networks  
</div>

<br>

---
## Development Timeline (High Level)
---

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
      <td class="tableCell">Internet Protocol published (RFC 791)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">1982</td>
      <td class="tableCell">U.S. DoD adopts the Internet Protocol Suite (TCP/IP)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">1983</td>
      <td class="tableCell">ARPANET “Flag Day” — network switches to TCP/IP</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">1984</td>
      <td class="tableCell">ISO publishes the OSI Reference Model (ISO 7498)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">1990s+</td>
      <td class="tableCell">TCP/IP dominates deployments; OSI remains the teaching framework</td>
    </tr>
  </tbody>
</table>

<br>

---
## Purpose of the OSI Model
---
The OSI model, created by the <span class="emphasis">International Organization for Standardization (ISO)</span>, aimed to:

<div class="bullet1">
- Provide a <span class="emphasis">vendor-neutral framework</span>  
- Define <span class="emphasis">clear responsibilities</span> at each layer  
- Encourage <span class="emphasis">interoperable systems</span> across vendors  
</div>

While OSI protocols were not widely adopted, the model excels as a <span class="secondEmphasis">learning and troubleshooting lens</span>.

<br>

---
## Why TCP/IP Succeeded in Practice
---
<div class="bullet4">
- Specified and deployed <span class="emphasis">before</span> OSI (IP: 1981; DoD adoption: 1982; ARPANET cutover: 1983) and then grew with the expanding <span class="secondEmphasis">Internet</span>  
- Backed by universities and government research, solving <span class="secondEmphasis">real problems</span>  
- Shipped with usable protocols (TCP, IP, DNS, etc.) that vendors could implement quickly  
</div>

<br>

---
## Why OSI Is Still Taught
---
<div class="bullet1">
- Offers a <span class="emphasis">layered, logical view</span> that makes it easier to <span class="secondEmphasis">map functions</span> and <span class="secondEmphasis">isolate where problems occur</span>  
- Provides a common language for triage (e.g., “Layer 1 vs Layer 7”)  
- Remains a staple in <span class="secondEmphasis">certifications</span> and interviews  
</div>

<br>

---
## How OSI Differs From TCP/IP (At a Glance)
---
<div class="bullet4">
- OSI has <span class="emphasis">7 layers</span>; TCP/IP uses <span class="emphasis">4 layers</span> (often shown as 5)  
- TCP/IP merges OSI’s <span class="secondEmphasis">Application, Presentation, Session</span> into a single Application layer  
- TCP/IP’s <span class="secondEmphasis">Network Access</span> covers OSI’s Data Link + Physical  
</div>

<br>

---
## How to Use These Notes
---
This OSI section is your <span class="emphasis">conceptual on-ramp</span>. All protocol behavior, headers, ports, timers, configs, and tooling live in the <span class="secondEmphasis">TCP/IP</span> pages.

<div class="xrefBox">
  <span class="emphasis">Next:</span>
  <a href="/legacy/osi-model/basics/overview/layer-comparison">OSI Layers &amp; TCP/IP Comparison</a>
</div>