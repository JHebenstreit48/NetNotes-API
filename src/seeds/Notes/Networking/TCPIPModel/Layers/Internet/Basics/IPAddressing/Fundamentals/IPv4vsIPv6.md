<hr class="dividerMain">

# IPv4 vs IPv6 Comparison

<hr class="dividerMain">

IPv4 and IPv6 are two versions of the Internet Protocol used for logical addressing and routing.

Both identify devices on networks, but they differ in structure, capacity, and design goals.

<hr class="dividerSection" />

### Address Format

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">IPv4</th>
      <th class="tableCellHeader">IPv6</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">32-bit address</td>
      <td class="tableCell">128-bit address</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Dotted decimal format (e.g., 192.168.1.1)</td>
      <td class="tableCell">Hexadecimal format (e.g., 2001:0db8:85a3::7334)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">~4.3 billion addresses</td>
      <td class="tableCell">Extremely large address space</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

### Address Exhaustion & Design Goals

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">IPv4</th>
      <th class="tableCellHeader">IPv6</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Address space largely exhausted globally</td>
      <td class="tableCell">Designed to solve address exhaustion</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Heavy reliance on NAT</td>
      <td class="tableCell">Designed for end-to-end connectivity</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

### Configuration Differences

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">IPv4</th>
      <th class="tableCellHeader">IPv6</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Commonly uses DHCP</td>
      <td class="tableCell">Supports SLAAC (Stateless Autoconfiguration)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Broadcast supported</td>
      <td class="tableCell">No broadcast (uses multicast)</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

### Header & Efficiency

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">IPv4</th>
      <th class="tableCellHeader">IPv6</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">More optional header fields</td>
      <td class="tableCell">Simplified base header structure</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Fragmentation handled by routers</td>
      <td class="tableCell">Fragmentation handled by sending host</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/fundamentals/dhcp">← Back</a>
    <div class="xrefTitle">IP Addressing - Fundamentals - DHCP (Address Assignment)</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/ipv6/fundamentals">Next →</a>
    <div class="xrefTitle">Next Section: IP Addressing - IPv6 - Fundamentals</div>
  </div>
</div>