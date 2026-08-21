# What Do PuTTY's Serial Line Settings Actually Control?

<hr class="dividerSection" />

### Opening the Serial Settings Panel

<hr class="dividerSection" />

In the <span class="emphasis">PuTTY Configuration</span> window, the initial <span class="secondEmphasis">Session</span> screen only exposes two serial-related fields directly, the serial line to connect to and the speed.

To view and adjust the full set of serial line parameters, expand <span class="emphasis">Connection</span> in the category tree on the left and select <span class="secondEmphasis">Serial</span>.

This opens a screen titled <span class="emphasis">Options controlling local serial lines</span>, which lists the serial line to connect to, along with the detailed configuration fields covered below.

<hr class="dividerSection" />

### What Each Setting Configures

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Speed (Baud Rate)</span> is the rate at which data is transmitted over the connection, measured in bits per second.</li>
    <li><span class="emphasis">Data Bits</span> is the number of bits sent as part of each unit of data.</li>
    <li><span class="emphasis">Stop Bits</span> is the number of bits sent after each unit of data to mark where it ends.</li>
    <li><span class="emphasis">Parity</span> is a method used to help detect errors that occur during transmission.</li>
    <li><span class="emphasis">Flow Control</span> manages the flow of data between the transmitting and receiving devices.</li>
  </ul>
</div>

The underlying mechanics of data bits, stop bits, parity, and flow control go beyond what is needed for the CCNA, the important part is knowing the correct values to use and what each setting is called.

<hr class="dividerSection" />

### Cisco's Required Serial Settings

<hr class="dividerSection" />

These are the values Cisco devices expect for a console connection, and they typically match a fresh install of PuTTY's defaults.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Setting</th>
      <th class="tableCellHeader">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Speed (Baud Rate)</td>
      <td class="tableCell">9600 bits per second</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Data Bits</td>
      <td class="tableCell">8</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Stop Bits</td>
      <td class="tableCell">1</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Parity</td>
      <td class="tableCell">None</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Flow Control</td>
      <td class="tableCell">None</td>
    </tr>
  </tbody>
</table>

These settings rarely need to be changed, but they are worth remembering for the exam.

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/networking/foundations/basics/fundamentals/devices-and-communication/cli-basics" target="_blank" rel="noopener noreferrer">Foundations → Fundamentals → Devices & Communication → CLI Basics</a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tools-and-testing/tools/terminal-emulators/putty/basics/connecting/serial-sessions">← Back</a>
    <div class="xrefTitle">Connecting - Serial Sessions</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tools-and-testing/tools/terminal-emulators/putty/basics/connecting/ssh-and-telnet-sessions">Next →</a>
    <div class="xrefTitle">Connecting - SSH & Telnet Sessions</div>
  </div>
</div>