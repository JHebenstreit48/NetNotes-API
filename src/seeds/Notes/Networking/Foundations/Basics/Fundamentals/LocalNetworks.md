# What Are Local Networks?

<hr class="dividerSection" />

A <span class="emphasis">local</span> network is a <span class="emphasis">private</span> network that connects <span class="emphasis">devices</span> within a <span class="emphasis">limited area</span>, such as a <span class="secondEmphasis">home</span>, <span class="secondEmphasis">office</span>, or <span class="secondEmphasis">campus</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Devices</span> within a <span class="emphasis">local</span> network can communicate <span class="secondEmphasis">without</span> using the <span class="emphasis">public</span> internet.</li>
    <li>These networks allow <span class="emphasis">file sharing, resource sharing, and communication</span> between connected systems.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Types of Local Networks

<hr class="dividerSection" />

Local networks vary in <span class="emphasis">size, purpose, and infrastructure</span>.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Network Type</th>
      <th class="tableCellHeader">Common Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Small Home Network</td>
      <td class="tableCell">Basic internet access and device sharing</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">SOHO (Small Office/Home Office) Network</td>
      <td class="tableCell">Small business operations and remote work</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Enterprise Network</td>
      <td class="tableCell">Corporate infrastructure spanning multiple locations</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Campus Network</td>
      <td class="tableCell">Large educational institutions</td>
    </tr>
  </tbody>
</table>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Network Type</th>
      <th class="tableCellHeader">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Small Home Network</td>
      <td class="tableCell">Wi-Fi router in a house</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">SOHO (Small Office/Home Office) Network</td>
      <td class="tableCell">Home office setup with network printers</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Enterprise Network</td>
      <td class="tableCell">Corporate HQ with data centers and VLANs</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Campus Network</td>
      <td class="tableCell">University networks connecting departments</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## Key Features of Local Networks

<hr class="dividerSection" />

Local networks offer <span class="emphasis">efficient communication</span> by keeping traffic <span class="emphasis">within a confined area</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Shared Resources</span>: Printers, storage devices, and servers can be accessed by multiple users.</li>
    <li><span class="emphasis">Internal Communication</span>: Employees or family members can send files and messages without needing the internet.</li>
    <li><span class="emphasis">Security & Control</span>: Organizations can set up firewalls, authentication methods, and encryption to protect data.</li>
    <li><span class="emphasis">Cost Efficiency</span>: Reduces the need for expensive external cloud services.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Enterprise vs. Small Networks

<hr class="dividerSection" />

Local networks can range from a <span class="emphasis">simple home setup</span> to <span class="emphasis">complex enterprise infrastructures</span>.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Feature</th>
      <th class="tableCellHeader">Small Networks</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Scale</td>
      <td class="tableCell">Few devices, single location</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Security</td>
      <td class="tableCell">Basic firewall and password protection</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Network Management</td>
      <td class="tableCell">Basic router settings</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Internet Access</td>
      <td class="tableCell">Single broadband connection</td>
    </tr>
  </tbody>
</table>

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Feature</th>
      <th class="tableCellHeader">Enterprise Networks</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Scale</td>
      <td class="tableCell">Hundreds to thousands of devices, multiple locations</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Security</td>
      <td class="tableCell">Advanced firewalls, VPNs, and intrusion detection</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Network Management</td>
      <td class="tableCell">Managed switches, VLANs, and monitoring tools</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Internet Access</td>
      <td class="tableCell">Redundant connections with load balancing</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## Evolution of LAN Definition

<hr class="dividerSection" />

The term <span class="emphasis">LAN</span> (Local Area Network) refers to a local network or group of interconnected local networks under the same administrative control.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>In early networking, LANs were small networks in a single physical location.</li>
    <li>Today, a LAN can span multiple buildings or locations with hundreds of hosts.</li>
    <li>LANs typically use Ethernet or wireless protocols and support high data rates.</li>
    <li>The term <span class="emphasis">intranet</span> is often used for a private LAN belonging to an organization, accessible only by authorized members.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Local vs Remote Network Segments

<hr class="dividerSection" />

Within a LAN, hosts can be placed on a single local network or divided across multiple networks connected by a distribution layer device (router).

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Local Segment</span>: All hosts on the same network communicate directly (using ARP for MAC addresses).</li>
    <li><span class="emphasis">Remote Segment</span>: Hosts on different networks require routing through a router.</li>
  </ul>
</div>

**Advantages of a Single Local Segment:**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Appropriate for simpler networks</li>
    <li>Less complexity and lower network cost</li>
    <li>Allows devices to be "seen" by others</li>
    <li>Faster data transfer (more direct communication)</li>
    <li>Ease of device access</li>
  </ul>
</div>

**Disadvantages of a Single Local Segment:**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>All hosts in one broadcast domain causes more traffic and may slow performance</li>
    <li>Harder to implement QoS</li>
    <li>Harder to implement security</li>
  </ul>
</div>

**Advantages of Hosts on Remote Segments:**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>More appropriate for larger, more complex networks</li>
    <li>Splits broadcast domains and decreases traffic</li>
    <li>Can improve performance on each segment</li>
    <li>Makes machines invisible to other local network segments</li>
    <li>Provides increased security</li>
    <li>Can improve network organization</li>
  </ul>
</div>

**Disadvantages of Hosts on Remote Segments:**

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Requires routing (distribution layer)</li>
    <li>Router can introduce latency or time delay on packets between segments</li>
    <li>More complexity and expense (requires a router)</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tcpip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/default-gateway-and-routing-tables">
    Default Gateway & Routing Tables (local/remote determination and routing process)
  </a>
</div>

<hr class="dividerSection" />

## The Role of Local Networks in the Internet

<hr class="dividerSection" />

While local networks operate independently, they often connect to the internet for global communication.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">LANs</span> (Local Area Networks) form the foundation of businesses, schools, and homes.</li>
    <li>The internet itself is a network of interconnected LANs.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/fundamentals/internet">← Back</a>
    <div class="xrefTitle">Foundations - Fundamentals - Internet/Networks</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/fundamentals/connected-devices">Next →</a>
    <div class="xrefTitle">Foundations - Fundamentals - Connected Devices</div>
  </div>
</div>