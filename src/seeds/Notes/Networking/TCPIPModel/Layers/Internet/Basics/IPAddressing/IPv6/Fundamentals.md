# IPv6 Fundamentals

<hr class="dividerSection" />

### Why IPv6?

<hr class="dividerSection" />

IPv6 (Internet Protocol version 6) is the successor to IPv4, designed to solve the exhaustion of IPv4 address space while adding improvements in efficiency, security, and autoconfiguration.

With 128-bit addresses, IPv6 provides an enormous address space (approximately 340 undecillion addresses) — enough for every device on Earth and the growing Internet of Things (IoT).

The long-term goal of IPv6 is native end-to-end communication from source to destination without translation. Tunneling and translation mechanisms (e.g., NAT64) are only temporary tools to help IPv6 coexist with IPv4 during the transition. They should be used only where necessary.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tcpip-model/layers/internet/basics/ip-addressing/ipv4/ipv4-exhaustion-and-transition">
    IPv4 Exhaustion & Transition
  </a>
</div>

<hr class="dividerSection" />

### IPv6 Address Representation

<hr class="dividerSection" />

IPv6 addresses are 128 bits long and written as a string of hexadecimal values. IPv6 addresses are not case-sensitive and can be written in either lowercase or uppercase.

Every four bits is represented by a single hexadecimal digit, for a total of 32 hexadecimal values.

Each group of four hexadecimal digits is 16 bits and is sometimes called a **hextet**.

The preferred format for writing an IPv6 address is x:x:x:x:x:x:x:x, with each “x” consisting of four hexadecimal values.

Example of preferred format:

```shell
2001:0db8:acad:a088:0000:0000:0000:0123
```

### Hexadecimal Number System

<hr class="dividerSection" />

Hexadecimal (base-16) uses digits 0–9 and letters A–F to represent values 0–15.

Each hextet (four hex digits) represents 16 bits, making hexadecimal much shorter than writing 128 bits in binary.

**Hex to Binary Conversion (0–7)**

<table class="notesTable centeredTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Hex</th>
      <th class="tableCellHeader">Binary</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">0</td>
      <td class="tableCell">0000</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">1</td>
      <td class="tableCell">0001</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">2</td>
      <td class="tableCell">0010</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">3</td>
      <td class="tableCell">0011</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">4</td>
      <td class="tableCell">0100</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">5</td>
      <td class="tableCell">0101</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">6</td>
      <td class="tableCell">0110</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">7</td>
      <td class="tableCell">0111</td>
    </tr>
  </tbody>
</table>

**Hex to Binary Conversion (8–F)**

<table class="notesTable centeredTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Hex</th>
      <th class="tableCellHeader">Binary</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">8</td>
      <td class="tableCell">1000</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">9</td>
      <td class="tableCell">1001</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">a</td>
      <td class="tableCell">1010</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">b</td>
      <td class="tableCell">1011</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">c</td>
      <td class="tableCell">1100</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">d</td>
      <td class="tableCell">1101</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">e</td>
      <td class="tableCell">1110</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">f</td>
      <td class="tableCell">1111</td>
    </tr>
  </tbody>
</table>

### IPv6 Formatting Rules

<hr class="dividerSection" />

IPv6 addresses can be shortened using two main rules:

<div class="centeredBullet">

<ul class="diamondBullets fullWidthBullet">
  <li><strong>Rule 1: Omit leading zeros</strong> in any hextet (e.g., 0000 becomes 0, 0db8 becomes db8). Trailing zeros are not omitted.
    <div class="centeredBullet">
      <ul class="diamondBullets fullWidthBullet">
        <li>Otherwise the address would become ambiguous (e.g., "abc" could mean "0abc" or "abc0").</li>
      </ul>
    </div>
  </li>
  <li><strong>Rule 2: Double colon (::)</strong> — replace one contiguous string of one or more all-zero hextets with :: (can only be used once per address).</li>
</ul>

</div>

**Rule 2 Details**: No matter how many consecutive hextets are all zeros (2, 3, 4, or more), they are always replaced by a single "::". There are never more than two colons together.

Best practice: If there are multiple contiguous strings of all-zero hextets, use :: on the longest string. If equal, use it on the first string.

Examples:

<div class="centeredBullet">

<ul class="diamondBullets fullWidthBullet">
  <li>Preferred: 2001:0db8:0000:0000:0000:0000:0000:0001 → Shortened: 2001:db8::1</li>
  <li>Preferred: 2001:0db8:0000:0001:0000:0000:0000:0001 → Shortened: 2001:db8:0:1::1</li>
  <li>Preferred: 2001:0db8:0000:0000:0000:0000:0000:0001 → Shortened: 2001:db8::1</li>
</ul>

</div>

**Incorrect use example** (using :: twice creates ambiguity):

shell
2001:db8:abcd:1234 (incorrect double ::)

Possible expansions (ambiguous):

<div class="centeredBullet">

<ul class="diamondBullets fullWidthBullet">
  <li>2001:db8::abcd:0000:0000:1234</li>
  <li>2001:db8:abcd:0000:0000::1234</li>
  <li>2001::abcd:0000:0000:0000:1234</li>
  <li>2001:db8:abcd::0000:0000:1234</li>
</ul>

</div>

### Activity - IPv6 Address Representations

<hr class="dividerSection" />

Practice converting IPv6 addresses between preferred (full) and shortened forms using the two rules.

<div class="centeredBullet">

<ul class="diamondBullets fullWidthBullet">
  <li>Full: 2001:0db8:0000:0000:0000:0000:0000:0001 → Shortened: 2001:db8::1</li>
  <li>Full: 2001:0db8:0000:0001:0000:0000:0000:0001 → Shortened: 2001:db8:0:1::1</li>
</ul>

</div>

<div class="xrefBox">
  <span class="emphasis">See Glossary for full details:</span>
  <a href="/glossary/networking/tcpipmodel/internet/ipv6-addressing">
    IPv6 Addressing → Hexadecimal Notation / Preferred Format
  </a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/ipv4/ipv4-vs-ipv6-comparison">← Back</a>
    <div class="xrefTitle">Section: Internet Layer - Basics - IP Addressing - IPv4 - IPv4 vs IPv6 Comparison</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/ipv6/address-types-and-scope">Next →</a>
    <div class="xrefTitle">Internet Layer - Basics - IP Addressing - IPv6 - Address Types & Scope</div>
  </div>
</div>