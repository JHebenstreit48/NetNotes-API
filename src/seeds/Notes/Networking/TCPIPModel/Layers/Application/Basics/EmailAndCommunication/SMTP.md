# What Is Email?

<hr class="dividerSection" />

Email is one of the most popular client/server applications on the internet. Email servers run server software that enables them to interact with clients and with other email servers over the network.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Each mail server receives and stores mail for users who have mailboxes configured on that server.</li>
    <li>Each user with a mailbox uses an email client to access the mail server and read messages.</li>
    <li>Many internet messaging systems use a web-based client, such as Microsoft 365, Yahoo, or Gmail.</li>
    <li>Mailboxes are identified by the format <span class="codeSnip">user@company.domain</span>.</li>
  </ul>
</div>

Several application protocols are used in processing email, including SMTP, POP3, and IMAP4.

<hr class="dividerSection" />

## What Is SMTP?

<hr class="dividerSection" />

<span class="emphasis">SMTP</span> stands for <span class="emphasis">Simple Mail Transfer Protocol</span>. It is used by an email client to send messages to its local email server.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>SMTP requests are sent to <span class="emphasis">TCP port 25</span>.</li>
    <li>The local server decides whether a message is destined for a local mailbox or addressed to a mailbox on another server.</li>
  </ul>
</div>

<hr class="dividerSection" />

## How SMTP Delivers a Message

<hr class="dividerSection" />

<div class="centeredNumberedList">

1. <span class="emphasis">Client Sends to Local Server</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The sender's email client uses SMTP to send the message to its local mail server.</li>
  </ul>
</div>

2. <span class="emphasis">Server Checks the Destination</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>If the recipient's mailbox is on that same server, the message is stored there directly.</li>
  </ul>
</div>

3. <span class="emphasis">Forwarding Between Servers</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>If the message is addressed to a mailbox on a different server, SMTP is used again, this time between the two mail servers, to forward the message.</li>
  </ul>
</div>

4. <span class="emphasis">Recipient Retrieves the Message</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Once the message reaches the recipient's mail server, the recipient's email client retrieves it using POP3 or IMAP.</li>
  </ul>
</div>

</div>

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="PLACEHOLDER" target="_blank" rel="noopener noreferrer">Application Layer → Email & Communication → IMAP</a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="PLACEHOLDER">← Back</a>
    <div class="xrefTitle">PLACEHOLDER</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/basics/email-and-communication/imap">Next →</a>
    <div class="xrefTitle">Email & Communication → IMAP</div>
  </div>
</div>