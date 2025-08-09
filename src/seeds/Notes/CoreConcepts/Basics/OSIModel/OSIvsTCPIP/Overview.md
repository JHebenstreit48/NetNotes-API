# OSI vs TCP/IP Overview  
<br>

---
## Purpose of the OSI and TCP/IP Models  
---

Both the <span class="emphasis">OSI</span> and <span class="emphasis">TCP/IP</span> models were developed to define and standardize how <span class="secondEmphasis">data is transmitted</span> across a network.

While only the TCP/IP model is implemented in real-world systems, the OSI model remains a powerful <span class="secondEmphasis">conceptual tool</span> used for <span class="emphasis">troubleshooting</span>, <span class="emphasis">education</span>, and <span class="emphasis">certification exams</span>.

<div class="bullet1">

- OSI is a **reference model**  
- TCP/IP is an **implementation model**  
- OSI has **7 layers**, TCP/IP has **4 or 5**, depending on interpretation  

</div>

<br>

---
## Layer Mapping
---

The following table shows how OSI and TCP/IP layers align with one another:

<br>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">OSI Layer</th>
      <th class="tableCellHeader">TCP/IP Layer</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Application (7)</td>
      <td class="tableCell">Application</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Presentation (6)</td>
      <td class="tableCell">Application</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Session (5)</td>
      <td class="tableCell">Application</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Transport (4)</td>
      <td class="tableCell">Transport</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Network (3)</td>
      <td class="tableCell">Internet</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Data Link (2)</td>
      <td class="tableCell">Network Access</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Physical (1)</td>
      <td class="tableCell">Network Access</td>
    </tr>
  </tbody>
</table>

<br>

---
## Key Differences
---

<div class="bullet4">

- OSI separates <span class="emphasis">Presentation</span> and <span class="emphasis">Session</span> layers — TCP/IP merges them into the <span class="secondEmphasis">Application layer</span>  
- OSI is primarily used in <span class="secondEmphasis">teaching</span> and <span class="secondEmphasis">certification</span> environments  
- TCP/IP describes the actual <span class="emphasis">protocols and architecture</span> used on real-world networks  
- OSI encourages a stricter division of responsibilities per layer  

</div>

<br>

---
## Strengths and Weaknesses
---

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Model</th>
      <th class="tableCellHeader">Strengths</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">OSI</td>
      <td class="tableCell">
        - Conceptually clean  
        - Clear separation of functions  
        - Used in all major networking certifications
      </td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">TCP/IP</td>
      <td class="tableCell">
        - Real-world implementation  
        - Closely tied to actual protocols  
        - Simpler in design
      </td>
    </tr>
  </tbody>
</table>

<br>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Model</th>
      <th class="tableCellHeader">Limitations</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">OSI</td>
      <td class="tableCell">
        - Not implemented directly  
        - Somewhat theoretical in practice
      </td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">TCP/IP</td>
      <td class="tableCell">
        - Lacks clarity in Presentation/Session  
        - Fewer layers = less granularity
      </td>
    </tr>
  </tbody>
</table>

<br>

---
## Certification Tip
---

Most networking exams — including <span class="emphasis">CCNA</span> and <span class="emphasis">CompTIA Network+</span> — teach the <span class="secondEmphasis">OSI model</span> for its clarity and layered approach.  

But when it comes to protocol-specific details like <span class="secondEmphasis">TCP, IP, DNS, or HTTP</span>, expect to see them mapped more often to <span class="emphasis">TCP/IP</span>.
