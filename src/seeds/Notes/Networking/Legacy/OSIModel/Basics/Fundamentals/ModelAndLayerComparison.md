# OSI vs TCP/IP: How the Layers Map Together

<hr class="dividerSection" />

### OSI Layer Purposes

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Layer</th>
      <th class="tableCellHeader">Primary Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">7. Application</td>
      <td class="tableCell">Provides network services to end-user applications.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">6. Presentation</td>
      <td class="tableCell">Data formatting, encoding, translation, compression, and encryption (conceptual responsibilities).</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">5. Session</td>
      <td class="tableCell">Establishes, manages, and terminates dialogs (sessions) between communicating hosts.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">4. Transport</td>
      <td class="tableCell">End-to-end delivery, segmentation/reassembly, reliability, and flow control.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">3. Network</td>
      <td class="tableCell">Logical addressing and routing across interconnected networks.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">2. Data Link</td>
      <td class="tableCell">Framing, MAC addressing, local delivery, and basic error detection.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">1. Physical</td>
      <td class="tableCell">Transmission of raw bits over physical media (signals, voltage, timing, connectors).</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

### Concept vs Implementation

<hr class="dividerSection" />

The <span class="emphasis">OSI model</span> describes <span class="secondEmphasis">what functions must exist</span> in any complete networking system.

The <span class="emphasis">TCP/IP model</span> describes <span class="secondEmphasis">which specific protocols implement those functions</span> on modern networks.

Key relationships:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>OSI <span class="emphasis">Layers 1-2</span> are combined into TCP/IP <span class="emphasis">Network Access</span></li>
    <li>OSI <span class="emphasis">Layer 3</span> maps to TCP/IP <span class="emphasis">Internet</span></li>
    <li>OSI <span class="emphasis">Layer 4</span> maps directly to TCP/IP <span class="emphasis">Transport</span></li>
    <li>OSI <span class="emphasis">Layers 5-7</span> are combined into TCP/IP <span class="emphasis">Application</span></li>
  </ul>
</div>

The OSI model provides a <span class="secondEmphasis">layered conceptual blueprint</span>.

The TCP/IP model provides the <span class="secondEmphasis">operational protocol stack</span>.

<hr class="dividerSection" />

### Other Layered Model Versions

<hr class="dividerSection" />

The OSI and TCP/IP models are not the only ways authors have organized networking into layers.

Different textbooks, vendors, and standards documents use varying layer counts and names for the same underlying concepts.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Model</th>
      <th class="tableCellHeader">Layer Structure</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Arpanet Reference Model (RFC 871)</td>
      <td class="tableCell">
        <div class="centeredBullet">
          <ul class="diamondBullets fullWidthBullet">
            <li>Three layers total</li>
            <li>Application/Process</li>
            <li>Host-to-host</li>
            <li>Network interface</li>
          </ul>
        </div>
      </td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Internet Standard (RFC 1122)</td>
      <td class="tableCell">
        <div class="centeredBullet">
          <ul class="diamondBullets fullWidthBullet">
            <li>Four layers total</li>
            <li>Application</li>
            <li>Transport</li>
            <li>Internet</li>
            <li>Link</li>
          </ul>
        </div>
      </td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Internet Model (Cisco Academy)</td>
      <td class="tableCell">
        <div class="centeredBullet">
          <ul class="diamondBullets fullWidthBullet">
            <li>Four layers total</li>
            <li>Application</li>
            <li>Transport</li>
            <li>Internetwork</li>
            <li>Network interface</li>
          </ul>
        </div>
      </td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">TCP/IP 5-Layer Reference Model (Kozierok, Comer)</td>
      <td class="tableCell">
        <div class="centeredBullet">
          <ul class="diamondBullets fullWidthBullet">
            <li>Four-plus-one layers total</li>
            <li>Application</li>
            <li>Transport</li>
            <li>Internet</li>
            <li>Data Link (Network interface)</li>
            <li>Hardware</li>
          </ul>
        </div>
      </td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">TCP/IP 5-Layer Reference Model (Tanenbaum)</td>
      <td class="tableCell">
        <div class="centeredBullet">
          <ul class="diamondBullets fullWidthBullet">
            <li>Five layers total</li>
            <li>Application</li>
            <li>Transport</li>
            <li>Internet</li>
            <li>Data Link</li>
            <li>Physical</li>
          </ul>
        </div>
      </td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">TCP/IP Protocol Suite / Five-Layer Internet Model (Forouzan, Kurose)</td>
      <td class="tableCell">
        <div class="centeredBullet">
          <ul class="diamondBullets fullWidthBullet">
            <li>Five layers total</li>
            <li>Application</li>
            <li>Transport</li>
            <li>Network</li>
            <li>Data Link</li>
            <li>Physical</li>
          </ul>
        </div>
      </td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">TCP/IP Model (Stallings)</td>
      <td class="tableCell">
        <div class="centeredBullet">
          <ul class="diamondBullets fullWidthBullet">
            <li>Five layers total</li>
            <li>Application</li>
            <li>Host-to-host (Transport)</li>
            <li>Internet</li>
            <li>Network Access</li>
            <li>Physical</li>
          </ul>
        </div>
      </td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">OSI Model (ISO/IEC 7498-1:1994)</td>
      <td class="tableCell">
        <div class="centeredBullet">
          <ul class="diamondBullets fullWidthBullet">
            <li>Seven layers total</li>
            <li>Application</li>
            <li>Presentation</li>
            <li>Session</li>
            <li>Transport</li>
            <li>Network</li>
            <li>Data Link</li>
            <li>Physical</li>
          </ul>
        </div>
      </td>
    </tr>
  </tbody>
</table>

Despite the differences in layer count and naming, most of these models describe the same underlying functions, just grouped or split differently.

<hr class="dividerSection" />

### Where to Study the Operational Details

<hr class="dividerSection" />

Use the OSI model for conceptual structure.

Study the TCP/IP pages for real protocol behavior, headers, ports, timers, and troubleshooting techniques.

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/networking/tcp-ip-model/basics/fundamentals/introduction" target="_blank" rel="noopener noreferrer">TCP/IP Model → Basics → Fundamentals → Introduction</a><br />
  <a href="/networking/tcp-ip-model/layers/application/basics/web-and-name/introduction" target="_blank" rel="noopener noreferrer">TCP/IP Model → Layers → Application → Web & Name Resolution → Introduction</a><br />
  <a href="/networking/tcp-ip-model/layers/transport/basics/fundamentals/introduction" target="_blank" rel="noopener noreferrer">TCP/IP Model → Layers → Transport → Fundamentals → Introduction</a><br />
  <a href="/networking/tcp-ip-model/layers/internet/basics/ip-addressing/fundamentals/introduction" target="_blank" rel="noopener noreferrer">TCP/IP Model → Layers → Internet → IP Addressing → Fundamentals → Introduction</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/data-link/core-concepts/introduction" target="_blank" rel="noopener noreferrer">TCP/IP Model → Layers → Network Access → Data Link → Core Concepts → Introduction</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/signals-and-media/introduction" target="_blank" rel="noopener noreferrer">TCP/IP Model → Layers → Network Access → Physical → Signals & Media → Introduction</a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/legacy/osi-model/basics/fundamentals/services-vs-protocols">← Back</a>
    <div class="xrefTitle">OSI Model - Basics - Fundamentals - Services vs Protocols</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/legacy/osi-model/basics/pdus-and-sap/pdu-names-by-layer">Next →</a>
    <div class="xrefTitle">Section: OSI Model - PDUs & SAP - PDU Names by Layer</div>
  </div>
</div>