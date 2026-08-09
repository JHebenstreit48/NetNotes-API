# What Is the Application Layer?

<hr class="dividerSection" />

The Application Layer in the TCP/IP model corresponds to <span class="emphasis">Layers 5</span>, <span class="emphasis">6</span>, and <span class="emphasis">7</span> of the <span class="emphasis">OSI model</span>.

While the OSI model separates these into <span class="emphasis">Session</span>, <span class="emphasis">Presentation</span>, and <span class="emphasis">Application layers</span>, the TCP/IP model consolidates them into one unified layer.

This is why the TCP/IP Application layer is often referred to as <span class="emphasis">Layer 7</span> in many networking resources, more on that distinction elsewhere in these notes.

This layer serves as the <span class="emphasis">interface</span> between <span class="emphasis">network services</span> and <span class="emphasis">applications</span>. It ensures users and applications can interact with the network, sending and receiving data seamlessly.

<hr class="dividerSection" />

### Key Responsibilities

<hr class="dividerSection" />

<div class="centeredNumberedList">
  1. **Interfacing with Applications**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Provides an interface for applications to utilize network resources.</li>
      <li>Examples: Web browsers accessing websites, email clients connecting to mail servers.</li>
    </ul>
  </div>

  2. **Protocol Support**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Supports protocols that enable communication and data exchange.</li>
    </ul>
  </div>

  Examples of Protocols:

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li><span class="emphasis">HTTP/HTTPS</span></li>
      <li><span class="emphasis">DNS</span></li>
      <li><span class="emphasis">FTP</span></li>
      <li><span class="emphasis">SMTP</span></li>
      <li><span class="emphasis">IMAP/POP3</span></li>
    </ul>
  </div>

  3. **User Authentication**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Handles authentication processes like username/password exchanges during logins.</li>
    </ul>
  </div>

  4. **Session Management**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Maintains and manages communication sessions between devices.</li>
    </ul>
  </div>
</div>

<hr class="dividerSection" />

### Supported Protocols

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">HTTP/HTTPS</span>: transfers web content between clients and servers (HTTPS adds encryption)</li>
    <li><span class="emphasis">DNS</span>: resolves human-readable domain names into IP addresses</li>
    <li><span class="emphasis">FTP</span>: file transfer between hosts</li>
    <li><span class="emphasis">SMTP</span>: sending email</li>
    <li><span class="emphasis">IMAP/POP3</span>: retrieving email from servers</li>
  </ul>
</div>

<hr class="dividerSection" />

### Only the Communicating Hosts Interpret the Data

<hr class="dividerSection" />

Network infrastructure devices, such as routers and switches, do not care about Application-layer details.

They simply move messages across the network without inspecting or interpreting the data those messages carry.

Only the two communicating hosts, the ones actually running the application processes, interpret the Application-layer data itself.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/basics/fundamentals/protocol-stack">← Back</a>
    <div class="xrefTitle">Section: TCP/IP Model - Basics - Fundamentals - Protocol Stack</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/application/basics/web-and-name/http-https">Next →</a>
    <div class="xrefTitle">Application Layer - Web & Name Resolution - HTTP/HTTPS</div>
  </div>
</div>