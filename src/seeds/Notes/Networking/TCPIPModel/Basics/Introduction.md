# What Is the TCP/IP Model?

<hr class="dividerSection" />

A <span class="emphasis">layered model</span> helps visualize how multiple protocols work together to enable network communication.

Instead of treating communication as one large process, a layered model breaks it into structured categories of responsibility.

The first widely adopted layered model for internetwork communication was created in the early 1970s and became known as the <span class="emphasis">internet model</span>.

The modern suite of TCP/IP protocols follows this structure. Because of this, the internet model is commonly referred to as the <span class="emphasis">TCP/IP Model</span>.

<hr class="dividerSection" />

### Why Layered Models Matter

<hr class="dividerSection" />

Layered models provide several important advantages:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Benefit</th>
      <th class="tableCellHeader">Why It Matters</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Improved protocol design</td>
      <td class="tableCell">Protocols at each layer have defined responsibilities and clear interfaces to the layers above and below.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Vendor interoperability</td>
      <td class="tableCell">Devices from different manufacturers can work together by following the same layered standards.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Independent evolution</td>
      <td class="tableCell">Technology improvements at one layer do not require redesigning the entire stack.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Common language</td>
      <td class="tableCell">Provides shared terminology to describe networking functions and capabilities.</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

### The Four TCP/IP Layers

<hr class="dividerSection" />

The TCP/IP Model organizes communication into four categories of function:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">TCP/IP Layer</th>
      <th class="tableCellHeader">General Responsibility</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Application</td>
      <td class="tableCell">Represents data to the user and handles high-level services, encoding, and dialog control.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Transport</td>
      <td class="tableCell">Supports end-to-end communication between devices across diverse networks.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Internet</td>
      <td class="tableCell">Determines logical addressing and the best path through interconnected networks.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Network Access</td>
      <td class="tableCell">Controls the hardware devices and media that make up the local network.</td>
    </tr>
  </tbody>
</table>

These layers describe <span class="emphasis">categories of function</span>, not specific devices.

The specific protocols operating at each layer are explored in later sections.

<hr class="dividerSection" />

### An Analogy: Sending a Letter

<hr class="dividerSection" />

Layered communication can feel abstract at first, so it helps to compare it to something familiar: sending a letter through the postal system.

Consider sending a letter to a friend named Bob, who lives with his wife in a different city.

<div class="centeredNumberedList">
  1. **Write the letter**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>A letter is written and addressed to Bob.</li>
    </ul>
  </div>

  2. **Place it in an envelope**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>The letter is placed inside an envelope addressed to Bob's house.</li>
    </ul>
  </div>

  3. **Deliver to the first post office**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>The envelope is delivered by car to Post Office A.</li>
    </ul>
  </div>

  4. **Move between post offices**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Post Office A moves the envelope by truck to Post Office B.</li>
    </ul>
  </div>

  5. **Final delivery**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Post Office B moves the envelope by a new truck to Bob's house, where the letter is opened and read by Bob.</li>
    </ul>
  </div>
</div>

This journey can be broken into five layers, each focused on a different concern:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Layer</th>
      <th class="tableCellHeader">What It Focuses On</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Content</td>
      <td class="tableCell">The text of the letter, what you actually want to say</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Recipient</td>
      <td class="tableCell">"To: Bob" versus "To: Bob's wife," the intended recipient inside the house</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Address</td>
      <td class="tableCell">The intended destination address for the house where the recipient lives</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Local Delivery</td>
      <td class="tableCell">Delivery to the next stop on the path using cars and trucks, Post Office A, then Post Office B, then Bob's house</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Infrastructure</td>
      <td class="tableCell">The roads that carry the cars and trucks</td>
    </tr>
  </tbody>
</table>

The Local Delivery and Infrastructure layers are closely related and always work together:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>If traveling over ground, local delivery uses a car or truck, carried by roads.</li>
    <li>If traveling by air, local delivery uses an airplane instead.</li>
    <li>If traveling by water, local delivery uses a ship.</li>
    <li>A single letter may travel over multiple kinds of paths during its journey, for example ground, then air, then ground again.</li>
    <li>Because these two layers are so closely tied together, they can either be treated as one combined delivery layer, or split into two separate layers.</li>
    <li>This is part of why some networking models use four layers while others use five.</li>
  </ul>
</div>

<hr class="dividerSection" />

### Separation of Layers

<hr class="dividerSection" />

Each layer has its own job.

Layers work together to deliver the message, but each one focuses on its own task.

What happens inside one layer does not change the job of the other layers:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Changing the content of the letter does not change the delivery steps.</li>
    <li>Changing the delivery path does not affect the letter itself.</li>
  </ul>
</div>

This does not mean the layers are entirely independent.

For example, if a letter is addressed somewhere overseas, that will influence how it is delivered.

But that influence is not the concern of the person writing the letter, it belongs to the delivery layers below.

This same separation of layers holds true in networks as well.

<hr class="dividerSection" />

### Mapping the Analogy to TCP/IP

<hr class="dividerSection" />

The five layers of the mail system map directly onto the TCP/IP model:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Content maps to the <span class="emphasis">Application</span> layer.</li>
    <li>Recipient maps to the <span class="emphasis">Transport</span> layer.</li>
    <li>Address maps to the <span class="emphasis">Internet</span> layer.</li>
    <li>Local Delivery and Infrastructure together map to the <span class="emphasis">Network Access</span> layer.</li>
  </ul>
</div>

Just as changing the delivery truck does not change the letter's contents, and changing the letter's contents does not change how it is delivered, each TCP/IP layer can change or evolve without requiring changes to the layers above or below it.

<hr class="dividerSection" />

### Where This Fits in Your Learning Path

<hr class="dividerSection" />

In Foundations, you learned:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>What protocols are</li>
    <li>Why communication requires structured rules</li>
    <li>How multiple protocols cooperate</li>
  </ul>
</div>

This section now introduces the structured model that organizes those protocols.

Before diving into the technical breakdown of each layer, the next page covers how TCP/IP itself came to exist.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/foundations/advanced/troubleshooting/baselines-and-monitoring">← Back</a>
    <div class="xrefTitle">Topic: Foundations - Troubleshooting - Baselines & Monitoring</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/basics/fundamentals/history">Next →</a>
    <div class="xrefTitle">TCP/IP Model - Fundamentals - History</div>
  </div>
</div>