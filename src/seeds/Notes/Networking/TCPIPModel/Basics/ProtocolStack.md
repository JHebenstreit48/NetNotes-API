# Understanding the Protocol Stack

<hr class="dividerSection" />

### What Is a Protocol Stack?

<hr class="dividerSection" />

A <span class="emphasis">protocol stack</span> refers to multiple protocols operating together across different layers of the TCP/IP Model to deliver a complete communication.

A single network message typically uses one protocol per layer.

Each protocol performs a distinct responsibility.

Together, they form a structured stack.

<hr class="dividerSection" />

### Example: Ethernet → IP → TCP → HTTP

<hr class="dividerSection" />

Consider a simple web request.

It may involve:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Network Access</span>, Ethernet (or Wi-Fi)</li>
    <li><span class="emphasis">Internet</span>, IP (IPv4 or IPv6)</li>
    <li><span class="emphasis">Transport</span>, TCP</li>
    <li><span class="emphasis">Application</span>, HTTP</li>
  </ul>
</div>

Each protocol contributes something specific:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Layer</th>
      <th class="tableCellHeader">What It Contributes</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Application</td>
      <td class="tableCell">Defines the service being requested (e.g., retrieving a webpage).</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Transport</td>
      <td class="tableCell">Ensures end-to-end communication behavior between source and destination.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Internet</td>
      <td class="tableCell">Handles logical addressing and routing across networks.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Network Access</td>
      <td class="tableCell">Delivers the frame across the local physical network segment.</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

### A Complete Walkthrough: PC1 Requests a Webpage from SRV1

<hr class="dividerSection" />

The abstract example above becomes clearer when walked through with real devices.

Consider a small network with a client, PC1, and a server, SRV1, connected through two switches and two routers:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">PC1</span>, a client running a web browser</li>
    <li><span class="emphasis">SW1</span>, a switch connecting PC1 to R1</li>
    <li><span class="emphasis">R1</span> and <span class="emphasis">R2</span>, two routers connecting the networks in between</li>
    <li><span class="emphasis">SW2</span>, a switch connecting R2 to SRV1</li>
    <li><span class="emphasis">SRV1</span>, a server running both a web server process and a file server process</li>
  </ul>
</div>

PC1's user wants to access a webpage hosted on SRV1, so the web browser on PC1 needs to send a request to the web server process on SRV1.

<hr class="dividerSubsection1" />

#### Application Layer: Creating the Request

<hr class="dividerSubsection1" />

The <span class="emphasis">Application layer</span> includes the protocols used for communication between application processes, and is responsible for creating and interpreting the data.

This is the layer where the web browser on PC1 forms its request to the web server on SRV1.

<hr class="dividerSubsection1" />

#### Transport Layer: Reaching the Correct Process

<hr class="dividerSubsection1" />

SRV1 is running multiple processes at once, a web server and a file server, and possibly more.

The <span class="emphasis">Transport layer</span> solves the problem of making sure a message reaches the correct process on the destination host.

Each process on SRV1 has an associated port number, for example port 80 for the web server and port 21 for the file server.

A port is not a physical port, it is simply a number used to identify a specific process running on a host.

To reach the web server specifically, PC1 addresses its message to port 80.

The Transport layer provides end-to-end communication between application processes, using port numbers to tell them apart.

<hr class="dividerSubsection1" />

#### Internet Layer: Reaching the Correct Host

<hr class="dividerSubsection1" />

Even with the correct port identified, the message still needs to reach SRV1 in the first place.

SRV1 has an IP address for this purpose, for example 10.1.1.1.

By addressing its message to SRV1's IP address, PC1 tells the routers along the path which host the message should be delivered to.

The <span class="emphasis">Internet layer</span> provides end-to-end communication between hosts, using IP addresses and routers.

A <span class="emphasis">host</span> simply means any device connected to the network that can send and receive data, such as PC1 or SRV1.

<hr class="dividerSubsection1" />

#### Network Access Layer: Moving Between Devices

<hr class="dividerSubsection1" />

There are still several devices between PC1 and SRV1, and the message must be properly passed along between them.

Using protocols such as Ethernet, each device forwards the message to the next device on the local network:

<div class="centeredNumberedList">
  1. **PC1 to R1**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>PC1 sends the message to R1 through SW1.</li>
    </ul>
  </div>

  2. **R1 to R2**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>R1 forwards the message to R2.</li>
    </ul>
  </div>

  3. **R2 to SRV1**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>R2 forwards the message to SRV1 through SW2.</li>
    </ul>
  </div>
</div>

This step-by-step forwarding between devices is called <span class="emphasis">hop-to-hop</span> delivery.

The <span class="emphasis">Network Access layer</span> (specifically its Data Link portion) provides hop-to-hop delivery within a local network, using MAC addresses and switches.

Switches connect devices within a LAN and pass messages between them, but they do not count as hops themselves.

<hr class="dividerSubsection1" />

#### Physical Layer: Transmitting the Signal

<hr class="dividerSubsection1" />

Finally, the cables connecting the devices, along with the transceivers that transmit and receive signals, do the actual work of moving the message.

The <span class="emphasis">Physical layer</span> sends bits as electrical, optical, or radio signals over the physical medium.

<hr class="dividerSection" />

### Local Delivery vs. Routed Delivery

<hr class="dividerSection" />

When you hear "Ethernet governs NIC-to-NIC communication," this refers to communication on the same local network segment.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Ethernet and Wi-Fi operate at the Network Access layer.</li>
    <li>They move frames between devices on the same link.</li>
    <li>They do not determine routing across multiple networks.</li>
  </ul>
</div>

When traffic must cross network boundaries:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The <span class="emphasis">Internet layer</span> (IP) determines addressing and routing.</li>
    <li>Routers examine IP information to forward traffic appropriately.</li>
  </ul>
</div>

<hr class="dividerSection" />

### Layer Interaction

<hr class="dividerSection" />

A layered model depicts:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Protocol operations within each layer</li>
    <li>Interaction between adjacent layers</li>
    <li>Defined interfaces above and below each layer</li>
  </ul>
</div>

Each layer depends on the services of the layer beneath it while providing services to the layer above it.

This structured interaction is what allows complex communication to function reliably at scale.

<hr class="dividerSubsection1" />

#### Adjacent-Layer Interaction

<hr class="dividerSubsection1" />

Each layer provides a service to the layer above it, and is serviced by the layer below it. This is called <span class="emphasis">adjacent-layer interaction</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The Transport layer provides a service to the Application layer by delivering data to the correct application using port numbers.</li>
    <li>The Internet layer provides a service to the Transport layer by delivering segments and datagrams to the correct destination host using IP addresses.</li>
    <li>The Network Access layer provides a service to the Internet layer by delivering packets to the next hop using MAC addresses.</li>
    <li>The Physical layer provides a service to the Network Access layer by sending and receiving frames as electrical, optical, or radio signals.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

#### Same-Layer Interaction

<hr class="dividerSubsection1" />

Each layer also communicates with the same layer on other devices. This is called <span class="emphasis">same-layer interaction</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The Application layer on one host sends data to the Application layer on the other host.</li>
    <li>A segment or datagram is addressed to the Layer 4 port number of the correct application on the destination host.</li>
    <li>A packet is addressed to the Layer 3 IP address of the destination host.</li>
    <li>A frame is addressed to the Layer 2 MAC address of the next hop.</li>
    <li>Signals sent out of a physical port are received by a physical port on the connected device.</li>
  </ul>
</div>

This layered cooperation, within each device and between devices, is what makes network communication possible.

<hr class="dividerSubsection1" />

#### Why Separation of Layers Matters

<hr class="dividerSubsection1" />

Because the layers are modular, protocols at one layer can be swapped without changing the others.

For example, instead of a web page exchange using HTTP and TCP, a file exchange might use TFTP over UDP instead.

The lower layers can continue using IP and Ethernet without needing to know anything about the change happening above them.

Similarly, if a wired Ethernet connection is replaced with a wireless Wi-Fi connection, the Network Access and Physical layers can change without affecting the upper layers at all.

As long as each layer keeps its "contract" with the layers above and below it, protocols can be improved or replaced at different layers without redesigning the entire stack.

That flexibility is one of the main benefits of a layered model.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/basics/fundamentals/history">← Back</a>
    <div class="xrefTitle">TCP/IP Model - Fundamentals - History</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/application/basics/web-and-name/introduction">Next →</a>
    <div class="xrefTitle">Section: TCP/IP Model - Layers - Application - Introduction</div>
  </div>
</div>