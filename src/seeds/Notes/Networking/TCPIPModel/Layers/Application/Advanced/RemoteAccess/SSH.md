# What Is SSH?

<hr class="dividerSection" />

<span class="emphasis">SSH</span> stands for <span class="emphasis">Secure Shell</span>, a protocol that allows you to remotely access another device, such as a server, as if you were physically sitting at that device typing commands directly.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>SSH is a more secure version of an older protocol, <span class="emphasis">Telnet</span>, which serves the same basic purpose.</li>
    <li>Once connected, commands typed locally are executed on the remote device, regardless of physical distance.</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="https://devscriptstax.netlify.app/git/advanced/remote-platforms/ssh-authentication" target="_blank" rel="noopener noreferrer">DevScriptStax → Git → Advanced → Remote Platforms → SSH Authentication</a>
</div>

<hr class="dividerSection" />

## What Is Telnet?

<hr class="dividerSection" />

Before networks existed, text-based systems were often just display terminals physically attached to a central computer. Once networks became available, people needed a way to remotely access those systems the same way they did with a directly-attached terminal.

<span class="emphasis">Telnet</span> was developed to meet that need.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Telnet dates back to the early 1970s, making it one of the oldest application-layer protocols in the TCP/IP suite.</li>
    <li>It provides a standard method of emulating text-based terminal devices over a network.</li>
    <li>Both the protocol itself and the client software that implements it are commonly referred to as Telnet.</li>
    <li>Telnet servers listen for client requests on <span class="emphasis">TCP port 23</span>.</li>
  </ul>
</div>

A connection using Telnet is called a <span class="emphasis">virtual terminal (vty)</span> session. Rather than using a physical device to connect to the server, Telnet uses software to create a virtual device that provides the same access to a server's command line interface (CLI) that a physical terminal would.

Once connected, the client is able to execute commands as if it were locally connected to the server.

<hr class="dividerSection" />

## Security Issues with Telnet

<hr class="dividerSection" />

After a Telnet connection is established, a user can perform any authorized function on the server, just as if they were using a command line session on the server itself, starting and stopping processes, configuring the device, or even shutting it down.

Although Telnet can require a login, it does not support encrypted data. All data exchanged during a Telnet session is transported as plaintext, meaning it can be easily intercepted and read.

<span class="emphasis">SSH</span> offers an alternate, secure method for server access. It provides the structure for secure remote login, stronger authentication than Telnet, and supports transporting session data using encryption.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>With Telnet, data intercepted by an attacker is clearly readable, including usernames and passwords.</li>
    <li>With SSH, data intercepted by an attacker is encrypted and unreadable.</li>
  </ul>
</div>

As a best practice, SSH should always be used in place of Telnet whenever possible.

<hr class="dividerSection" />

## Connecting with a Terminal Emulator

<hr class="dividerSection" />

Terminal emulator software, such as <span class="emphasis">Tera Term</span>, provides a client for connecting to a remote device using either Telnet or SSH.

<div class="centeredNumberedList">

1. <span class="emphasis">Entering the Host</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The host can be entered as either a host name or an IP address.</li>
  </ul>
</div>

2. <span class="emphasis">Selecting the Protocol</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>SSH is selected instead of Telnet for a secure connection.</li>
  </ul>
</div>

3. <span class="emphasis">Authenticating</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A username and password are entered to authenticate the connection.</li>
  </ul>
</div>

4. <span class="emphasis">Remote Access Established</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Once authenticated, the terminal behaves as if you were sitting directly at the remote device, entering commands there instead of locally.</li>
  </ul>
</div>

</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/advanced/network-services/ftp">← Back</a>
    <div class="xrefTitle">Section: Network Services → FTP/SFTP</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/advanced/remote-access/ssh-best-practices">Next →</a>
    <div class="xrefTitle">Remote Access → Best Practices</div>
  </div>
</div>