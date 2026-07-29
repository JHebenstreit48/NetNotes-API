# RJ-45 and Copper Ethernet Connectors

<hr class="dividerSection" />

Copper Ethernet cables use a standardized connector commonly referred to as:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>RJ-45</li>
    <li>8P8C (8-position, 8-contact)</li>
  </ul>
</div>

<span class="emphasis">RJ</span> stands for <span class="secondEmphasis">Registered Jack</span>.

<span class="emphasis">RJ-45</span> is the <span class="secondEmphasis">common</span> <span class="emphasis">physical connector</span> used for <span class="emphasis">twisted-pair</span> Ethernet cabling.

<span class="emphasis">Industry standards</span> exist between <span class="emphasis">manufacturers</span> of <span class="emphasis">network devices</span> and <span class="emphasis">network cables</span> so that <span class="emphasis">connectors</span> and <span class="emphasis">ports</span> <span class="secondEmphasis">agree</span> on <span class="emphasis">size</span> and <span class="emphasis">shape</span>, ensuring a cable from <span class="emphasis">one vendor</span> will <span class="emphasis">physically fit</span> a <span class="emphasis">device</span> from <span class="emphasis">another vendor</span>. This is why there are both <span class="emphasis">physical standards</span>, like <span class="emphasis">cable</span> and <span class="emphasis">connector design</span>, and <span class="emphasis">logical standards</span>, like <span class="emphasis">IP</span> (<span class="secondEmphasis">Internet Protocol</span>).

<hr class="dividerSection" />

### Plug vs Jack

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Component</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Plug</td>
      <td class="tableCell">The male connector crimped onto the end of a patch cable</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Jack</td>
      <td class="tableCell">The female connector found on switches, routers, wall plates, and patch panels</td>
    </tr>
  </tbody>
</table>

Plugs insert into jacks to complete the connection.

<hr class="dividerSection" />

### Where RJ-45 Connectors Are Used

<hr class="dividerSection" />

RJ-45 connectors are commonly found on:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Switch Ethernet ports</li>
    <li>Router LAN ports</li>
    <li>Wall outlets</li>
    <li>Patch panels</li>
    <li>Desktop network interface cards (NICs)</li>
  </ul>
</div>

<hr class="dividerSection" />

### Copper Ethernet Standards (IEEE 802.3)

<hr class="dividerSection" />

Copper Ethernet speeds are defined by <span class="emphasis">IEEE 802.3</span> standards, each specifying a maximum cable length alongside a common name used in everyday conversation.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">IEEE Standard</th>
      <th class="tableCellHeader">Common Name (Speed)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">802.3</td>
      <td class="tableCell">10BASE-T (10 Mbps)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">802.3u</td>
      <td class="tableCell">100BASE-T / Fast Ethernet (100 Mbps)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">802.3ab</td>
      <td class="tableCell">1000BASE-T / Gigabit Ethernet (1 Gbps)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">802.3an</td>
      <td class="tableCell">10GBASE-T (10 Gbps)</td>
    </tr>
  </tbody>
</table>

All four standards support a maximum cable length of <span class="emphasis">100 meters</span> over twisted-pair copper cabling.

In the informal naming convention, <span class="emphasis">base</span> refers to baseband signaling, and <span class="emphasis">T</span> refers to twisted-pair cabling.

Wire pair usage differs by standard:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>10BASE-T and 100BASE-T use 2 wire pairs (4 of the 8 wires)</li>
    <li>1000BASE-T and 10GBASE-T use all 4 wire pairs (all 8 wires), with each pair operating bidirectionally</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/networking/switching/basics/hardware-and-port-types/ethernet-speed-history" target="_blank" rel="noopener noreferrer">Switching → Hardware & Port Types → Ethernet Speed History</a>
</div>

<hr class="dividerSection" />

### Termination Standards

<hr class="dividerSection" />

Ethernet twisted pair cabling is terminated using wiring standards such as:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>T568A</li>
    <li>T568B</li>
  </ul>
</div>

These standards define the order of the wire pairs inside the connector.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/wiring-standards/t568a-vs-t568b" target="_blank" rel="noopener noreferrer">Physical → Wiring Standards → T568A vs T568B</a>
</div>

<hr class="dividerSection" />

### Keystone Jacks and Patch Panels

<hr class="dividerSection" />

Structured cabling installations often use:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Keystone jacks (in wall plates)</li>
    <li>Patch panels (in racks)</li>
  </ul>
</div>

These allow permanent cabling to terminate cleanly and connect to switches using patch cables.

<hr class="dividerSection" />

### Electrical Signaling

<hr class="dividerSection" />

Copper Ethernet uses:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Electrical voltage changes</li>
    <li>Balanced signaling across twisted pairs</li>
  </ul>
</div>

Because copper carries electrical current, it is:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Susceptible to electromagnetic interference (EMI)</li>
    <li>Limited by signal attenuation over distance</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">Compare With:</span>
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/cabling-and-interfaces/fiber-connectors-and-transceivers" target="_blank" rel="noopener noreferrer">Fiber Connectors & Transceivers</a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/network-access/basics/physical/cabling-and-interfaces/coaxial-cable">← Back</a>
    <div class="xrefTitle">Physical - Cabling & Interfaces - Coaxial Cable</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/network-access/basics/physical/cabling-and-interfaces/fiber-connectors-and-transceivers">Next →</a>
    <div class="xrefTitle">Physical - Cabling & Interfaces - Fiber Connectors & Transceivers</div>
  </div>
</div>