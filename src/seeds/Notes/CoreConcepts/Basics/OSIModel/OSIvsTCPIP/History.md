# Historical Context of OSI and TCP/IP  
<br>

---
## Why Two Models?
---

In the early days of networking, vendors used <span class="emphasis">proprietary systems</span> that often couldn’t communicate with one another. The need for <span class="secondEmphasis">standardized communication</span> led to the development of both the **OSI Model** and the **TCP/IP Model** — though their origins and purposes were very different.

---

## Development Timeline
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
      <td class="tableCell">1970s</td>
      <td class="tableCell">U.S. Department of Defense funds research into TCP/IP through ARPANET</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">1978</td>
      <td class="tableCell">First TCP/IP protocol suite drafted</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">1983</td>
      <td class="tableCell">TCP/IP becomes the official standard for ARPANET</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">1984</td>
      <td class="tableCell">ISO releases the OSI Reference Model</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">1990s+</td>
      <td class="tableCell">TCP/IP dominates real-world networking; OSI remains an educational model</td>
    </tr>
  </tbody>
</table>

---

## Purpose of the OSI Model
---

The OSI model was designed by the <span class="emphasis">International Organization for Standardization (ISO)</span> to:

<div class="bullet1">
- Create a **vendor-neutral framework**  
- Define **clear responsibilities** at each layer  
- Encourage the development of **interoperable systems**  
</div>

However, OSI protocols were **never widely implemented**, as the open-source and practical nature of TCP/IP became more attractive in real deployments.

---

## Why TCP/IP Succeeded
---

<div class="bullet4">

- Developed earlier, so it had a **head start**  
- Backed by the **U.S. government** and major universities  
- Solved **real problems** with usable protocols (like TCP, IP, DNS, etc.)  
- Evolved alongside the growth of the **Internet**

</div>

---

## Why OSI Is Still Taught
---

Even though TCP/IP won the implementation war, the OSI model is still valuable in modern education and certifications because it provides:

<div class="bullet1">

- A **layered, logical view** of networking  
- A **common language** for troubleshooting (e.g., "This is a Layer 3 issue")  
- **Conceptual separation** between things like **encryption** vs. **routing**  
- Clear mapping of tools and protocols to their general **functional domain**

</div>

---

## Fun Fact:
---
Even many **TCP/IP protocol suites** still loosely follow OSI-style **design logic** — just with fewer layers and more overlap.