# How Do You Connect to and Navigate the Cisco CLI?

<hr class="dividerSection" />

### What Is the CLI?

<hr class="dividerSection" />

<span class="emphasis">Cisco IOS</span> is the operating system used on Cisco devices, similar to how <span class="secondEmphasis">Windows</span> runs on a PC or <span class="secondEmphasis">macOS</span> runs on a Mac.

Cisco's IOS is not related to Apple's iOS used on iPhones, despite the similar name.

<span class="emphasis">CLI</span> stands for <span class="emphasis">command-line interface</span>, the interface used to configure Cisco devices such as routers, switches, and firewalls.

A <span class="secondEmphasis">GUI</span> (graphical user interface) also exists on some Cisco platforms, such as Cisco's ASDM for configuring firewalls, but most network engineers prefer the CLI, and it is the primary interface covered throughout these notes.

<hr class="dividerSection" />

### Connecting to a Device via the Console Port

<hr class="dividerSection" />

The first time you configure a Cisco device, you connect to it using its <span class="emphasis">console port</span>.

Most Cisco Catalyst switches have two console ports, an RJ45 port and a USB mini-B connector.

To connect through the RJ45 port, a specific cable is required, known as a <span class="emphasis">rollover cable</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>One end has an RJ45 connector.</li>
    <li>The other end has a DB9 connector, though most modern laptops require a USB adapter since they no longer include a serial port.</li>
  </ul>
</div>

A rollover cable's name is similar to a <span class="secondEmphasis">crossover cable</span>, but the two are not the same and serve different purposes.

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/wiring-standards/straight-through-vs-crossover" target="_blank" rel="noopener noreferrer">Physical → Wiring Standards → Straight-Through vs Crossover</a>
</div>

The rollover cable's internal wiring reverses each pin from one end to the other.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Pin 1 connects to pin 8</li>
    <li>Pin 2 connects to pin 7</li>
    <li>Pin 3 connects to pin 6</li>
    <li>Pin 4 connects to pin 5</li>
  </ul>
</div>

Once connected, you access the CLI using a <span class="emphasis">terminal emulator</span>, such as <span class="secondEmphasis">PuTTY</span>.

<hr class="dividerSubsection1" />

#### Terminal Emulator (Serial) Settings

<hr class="dividerSubsection1" />

Cisco devices use a standard set of serial connection settings, which usually match a terminal emulator's defaults.

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

<hr class="dividerSection" />

### CLI Modes

<hr class="dividerSection" />

When you first connect to a device, you are placed into <span class="emphasis">User EXEC mode</span> by default.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">User EXEC mode</span>, indicated by a <span class="codeSnip">&gt;</span> after the hostname, allows only limited, read-only access.</li>
    <li><span class="emphasis">Privileged EXEC mode</span>, indicated by a <span class="codeSnip">#</span> after the hostname, provides full access to view the device's configuration, restart the device, and save configuration files.</li>
    <li><span class="emphasis">Global Configuration mode</span>, indicated by <span class="codeSnip">(config)#</span> after the hostname, is where actual changes to the device's configuration are made.</li>
  </ul>
</div>

To enter <span class="emphasis">Privileged EXEC mode</span> from User EXEC mode, use the <span class="codeSnip">enable</span> command.

To enter <span class="emphasis">Global Configuration mode</span> from Privileged EXEC mode, use the <span class="codeSnip">configure terminal</span> command, often shortened to <span class="codeSnip">conf t</span>.

<hr class="dividerExample" />

##### Example: Entering Privileged EXEC and Global Configuration Mode

<hr class="dividerExample" />

```shell  
Router>enable  
Router#configure terminal  
Router(config)#
```

<hr class="dividerSection" />

### Getting Help and Using Shortcuts

<hr class="dividerSection" />

The Cisco IOS CLI supports several built-in features that make entering commands faster and easier.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Typing <span class="codeSnip">?</span> alone lists every command available in the current mode.</li>
    <li>Typing a partial command followed by <span class="codeSnip">?</span> with no space lists all completions of that word.</li>
    <li>Typing a partial command followed by a space and <span class="codeSnip">?</span> lists all possible next keywords in the command.</li>
    <li>Pressing <span class="secondEmphasis">Tab</span> auto-completes a partially typed command.</li>
  </ul>
</div>

Most commands also support <span class="emphasis">shortened forms</span>, as long as enough of the command is typed to make it unambiguous.

For example, <span class="codeSnip">en</span> is enough to represent the <span class="codeSnip">enable</span> command in User EXEC mode, since no other command in that mode begins with those letters.

Typing just <span class="codeSnip">e</span>, however, produces an <span class="secondEmphasis">ambiguous command</span> error, since both <span class="codeSnip">enable</span> and <span class="codeSnip">exit</span> begin with that letter.

<hr class="dividerSection" />

### Running Privileged EXEC Commands from Other Modes

<hr class="dividerSection" />

Normally, privileged EXEC-level commands (such as <span class="codeSnip">show running-config</span>) can only be run from Privileged EXEC mode.

Typing <span class="codeSnip">do</span> in front of a privileged EXEC-level command allows it to be run from Global Configuration mode, or other configuration sub-modes, instead.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/foundations/basics/fundamentals/devices-and-communication/protocols-and-standards">← Back</a>
    <div class="xrefTitle">Section: Foundations - Fundamentals - Devices & Communication - Protocols & Standards</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/foundations/basics/fundamentals/cli/passwords-and-saving-configuration">Next →</a>
    <div class="xrefTitle">Foundations - Fundamentals - CLI - Passwords & Saving Configuration</div>
  </div>
</div>