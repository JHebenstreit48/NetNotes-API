# What Is FTP?

<hr class="dividerSection" />

<span class="emphasis">FTP</span> stands for <span class="emphasis">File Transfer Protocol</span>. It provides an easy method to copy files from one device to another, from a client to a server, or from a server back to a client.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A host running FTP client software can access an FTP server to perform file management functions, including uploads and downloads.</li>
    <li>FTP also allows a client to manage files remotely, sending commands such as delete or rename.</li>
    <li>A common use case is uploading a website's files to a web server.</li>
  </ul>
</div>

<hr class="dividerSection" />

## How FTP Works

<hr class="dividerSection" />

FTP uses two separate connections between client and server, rather than a single one.

<div class="centeredNumberedList">

1. <span class="emphasis">Control Connection</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Opened first, using destination TCP port <span class="codeSnip">21</span>.</li>
    <li>Carries commands between client and server, such as login, navigation, or file management requests.</li>
  </ul>
</div>

2. <span class="emphasis">Data Connection</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Opened once the session is established, using TCP port <span class="codeSnip">20</span>.</li>
    <li>Carries the actual file data being transferred.</li>
    <li>Based on commands sent across the control connection, data can be downloaded from the server or uploaded from the client.</li>
  </ul>
</div>

</div>

<hr class="dividerSection" />

## Accessing FTP

<hr class="dividerSection" />

<hr class="dividerSubsection1" />

### Built-in Access

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>FTP client software is built into most computer operating systems.</li>
    <li>Most web browsers also include basic FTP client functionality.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Standalone FTP Clients

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Standalone FTP clients offer more options through an easy-to-use, GUI-based interface.</li>
    <li>One widely used example is <span class="emphasis">FileZilla</span>, a free, open-source, cross-platform client supporting FTP, SFTP, and FTPS.</li>
    <li>FileZilla's installer has a history of bundling unwanted third-party software, only download it from the official project site, and decline any bundled offers during installation.</li>
    <li>As an example, <span class="codeSnip">ftp.cdc.gov</span> is a public FTP server that can be accessed anonymously using a client like FileZilla.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Using a GUI FTP Client

<hr class="dividerSection" />

Standalone FTP clients typically use a dual-pane layout, local files on one side, the remote server's files on the other, with drag-and-drop handling the actual transfer.

<div class="centeredNumberedList">

1. <span class="emphasis">Connecting to a Server</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Enter the server's host address, a username, and a password if required.</li>
    <li>Typically, a real username and password are required so files can be uploaded and downloaded securely.</li>
  </ul>
</div>

2. <span class="emphasis">Transferring Files</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Once connected, dragging a file from one pane to the other transfers it in that direction.</li>
    <li>Dragging from the remote pane to the local pane downloads a file, dragging the other direction uploads one.</li>
  </ul>
</div>

</div>

<hr class="dividerSection" />

## Anonymous FTP

<hr class="dividerSection" />

Some FTP servers are configured to allow public access without requiring real credentials, this is known as <span class="emphasis">anonymous FTP</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The username is entered literally as <span class="codeSnip">anonymous</span>, with no password required.</li>
    <li>This differs from the typical case, where a real username and password are needed to access a server securely.</li>
    <li>Some government and public data servers are configured this way, allowing anyone to connect without an account.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/advanced/network-services/snmp">← Back</a>
    <div class="xrefTitle">TCP/IP Model → Application Layer → Advanced → Network Services → SNMP</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/advanced/remote-access/ssh">Next →</a>
    <div class="xrefTitle">Section: TCP/IP Model → Application Layer → Advanced → Remote Access → SSH</div>
  </div>
</div>