# Decimal vs Hexadecimal: How Number Systems Work

<hr class="dividerSection" />

### The Decimal System

<hr class="dividerSection" />

The <span class="emphasis">decimal</span> system uses <span class="emphasis">10</span> possible digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9.

Counting starts at 0 and continues through 9.

Once every single digit has been used, there is no symbol left to represent the next value, so a new column is added to the left, and the rightmost column resets back to 0.

This is why after 9 comes 10, the number 1 in the tens column and 0 in the ones column, not a new symbol.

The same pattern continues as each column fills up: 99 becomes 100 (a new hundreds column is added), and 999 becomes 1000 (a new thousands column is added).

<hr class="dividerSection" />

### The Hexadecimal System

<hr class="dividerSection" />

The <span class="emphasis">hexadecimal</span> system, or <span class="secondEmphasis">base-16</span>, works the same way as decimal, but uses <span class="emphasis">16</span> possible digits instead of 10.

The first 10 hexadecimal digits are the same as decimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9.

The remaining 6 digits are borrowed from the alphabet: A, B, C, D, E, and F.

These letters represent numeric values, not letters of the alphabet.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A = 10</li>
    <li>B = 11</li>
    <li>C = 12</li>
    <li>D = 13</li>
    <li>E = 14</li>
    <li>F = 15</li>
  </ul>
</div>

<hr class="dividerSection" />

### Counting Past F

<hr class="dividerSection" />

Just as decimal runs out of single digits after 9, hexadecimal runs out of single digits after F.

At that point, the same carrying rule applies, a new column is added to the left, and the rightmost column resets back to 0.

This means hexadecimal "10" does not mean ten.

It means 1 value of sixteen, and 0 values of one, which equals 16 in decimal.

Hexadecimal "11" means 1 value of sixteen and 1 value of one, which equals 17 in decimal, and the pattern continues from there.

<hr class="dividerSubsection1" />

#### Example: Counting From F to 20 in Hexadecimal

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Hexadecimal</th>
      <th class="tableCellHeader">Decimal</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow"><td class="tableCell">F</td><td class="tableCell">15</td></tr>
    <tr class="tableRow"><td class="tableCell">10</td><td class="tableCell">16</td></tr>
    <tr class="tableRow"><td class="tableCell">11</td><td class="tableCell">17</td></tr>
    <tr class="tableRow"><td class="tableCell">12</td><td class="tableCell">18</td></tr>
    <tr class="tableRow"><td class="tableCell">13</td><td class="tableCell">19</td></tr>
    <tr class="tableRow"><td class="tableCell">14</td><td class="tableCell">20</td></tr>
    <tr class="tableRow"><td class="tableCell">15</td><td class="tableCell">21</td></tr>
    <tr class="tableRow"><td class="tableCell">16</td><td class="tableCell">22</td></tr>
    <tr class="tableRow"><td class="tableCell">17</td><td class="tableCell">23</td></tr>
    <tr class="tableRow"><td class="tableCell">18</td><td class="tableCell">24</td></tr>
    <tr class="tableRow"><td class="tableCell">19</td><td class="tableCell">25</td></tr>
    <tr class="tableRow"><td class="tableCell">1A</td><td class="tableCell">26</td></tr>
    <tr class="tableRow"><td class="tableCell">1B</td><td class="tableCell">27</td></tr>
    <tr class="tableRow"><td class="tableCell">1C</td><td class="tableCell">28</td></tr>
    <tr class="tableRow"><td class="tableCell">1D</td><td class="tableCell">29</td></tr>
    <tr class="tableRow"><td class="tableCell">1E</td><td class="tableCell">30</td></tr>
    <tr class="tableRow"><td class="tableCell">1F</td><td class="tableCell">31</td></tr>
    <tr class="tableRow"><td class="tableCell">20</td><td class="tableCell">32</td></tr>
  </tbody>
</table>

Notice that once the ones column runs out of digits again at F, the same carrying rule applies once more, resetting to 20.

<hr class="dividerSection" />

### Hexadecimal to Binary Conversion

<hr class="dividerSection" />

Since hexadecimal is base-16 and binary is base-2, each single hexadecimal digit converts directly to a fixed 4-bit binary value.

<div class="tablePairSideBySide">
  <div class="tableWrapper">
    <table class="notesTable">
      <thead>
        <tr class="tableHeader">
          <th class="tableCellHeader">Hex</th>
          <th class="tableCellHeader">Binary</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tableRow"><td class="tableCell">0</td><td class="tableCell">0000</td></tr>
        <tr class="tableRow"><td class="tableCell">1</td><td class="tableCell">0001</td></tr>
        <tr class="tableRow"><td class="tableCell">2</td><td class="tableCell">0010</td></tr>
        <tr class="tableRow"><td class="tableCell">3</td><td class="tableCell">0011</td></tr>
        <tr class="tableRow"><td class="tableCell">4</td><td class="tableCell">0100</td></tr>
        <tr class="tableRow"><td class="tableCell">5</td><td class="tableCell">0101</td></tr>
        <tr class="tableRow"><td class="tableCell">6</td><td class="tableCell">0110</td></tr>
        <tr class="tableRow"><td class="tableCell">7</td><td class="tableCell">0111</td></tr>
      </tbody>
    </table>
  </div>

  <div class="tableWrapper">
    <table class="notesTable">
      <thead>
        <tr class="tableHeader">
          <th class="tableCellHeader">Hex</th>
          <th class="tableCellHeader">Binary</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tableRow"><td class="tableCell">8</td><td class="tableCell">1000</td></tr>
        <tr class="tableRow"><td class="tableCell">9</td><td class="tableCell">1001</td></tr>
        <tr class="tableRow"><td class="tableCell">A</td><td class="tableCell">1010</td></tr>
        <tr class="tableRow"><td class="tableCell">B</td><td class="tableCell">1011</td></tr>
        <tr class="tableRow"><td class="tableCell">C</td><td class="tableCell">1100</td></tr>
        <tr class="tableRow"><td class="tableCell">D</td><td class="tableCell">1101</td></tr>
        <tr class="tableRow"><td class="tableCell">E</td><td class="tableCell">1110</td></tr>
        <tr class="tableRow"><td class="tableCell">F</td><td class="tableCell">1111</td></tr>
      </tbody>
    </table>
  </div>
</div>

<hr class="dividerSection" />

### Where Hexadecimal Is Used

<hr class="dividerSection" />

Hexadecimal shows up throughout networking wherever a large binary value needs to be written more compactly.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">MAC addresses</span>, written as 12 hexadecimal characters</li>
    <li><span class="emphasis">IPv6 addresses</span>, written as groups of hexadecimal hextets</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/data-link/frames-and-addressing/mac-addressing" target="_blank" rel="noopener noreferrer">Data Link → Frames & Addressing → MAC Addressing</a><br />
  <a href="/networking/tcp-ip-model/layers/internet/basics/ip-addressing/ipv6/fundamentals" target="_blank" rel="noopener noreferrer">Internet Layer → Basics → IP Addressing → IPv6 → Fundamentals</a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/basics/fundamentals/protocol-stack">← Back</a>
    <div class="xrefTitle">TCP/IP Model - Basics - Fundamentals - Protocol Stack</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/application/basics/web-and-name/introduction">Next →</a>
    <div class="xrefTitle">Topic: TCP/IP Model - Layers - Application - Basics - Web & Name Resolution - Introduction</div>
  </div>
</div>