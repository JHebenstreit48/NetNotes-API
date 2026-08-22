# How Do You Connect to, Navigate, and Secure the Cisco CLI?

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

The specific console port and cable type varies by device and by how recently it was released, older devices typically use an RJ45 console port requiring a rollover cable, while some newer devices instead include, or exclusively use, a USB console port.

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/networking/switching/basics/hardware-and-port-types/switches-and-connectors" target="_blank" rel="noopener noreferrer">Switching → Basics → Hardware & Port Types → Switches and Connectors</a><br />
  <a href="/networking/foundations/basics/devices-and-models/routers/interfaces-and-port-types" target="_blank" rel="noopener noreferrer">Foundations → Devices & Models → Routers → Interfaces & Port Types</a>
</div>

<hr class="dividerSubsection1" />

#### The Rollover Cable

<hr class="dividerSubsection1" />

To connect through an RJ45 console port, a specific cable is required, known as a <span class="emphasis">rollover cable</span>.

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

Once connected, you access the CLI using a <span class="emphasis">terminal emulator</span>, such as <span class="secondEmphasis">PuTTY</span> or <span class="secondEmphasis">Tera Term</span>.

<hr class="dividerSubsection1" />

#### Terminal Emulator (Serial) Settings

<hr class="dividerSubsection1" />

Cisco devices use a standard set of serial connection settings, which usually match a terminal emulator's defaults.

These settings rarely need to be changed, but they are worth remembering for the exam.

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/tools-and-testing/tools/terminal-emulators/putty/basics/connecting/serial-settings" target="_blank" rel="noopener noreferrer">Terminal Emulators → PuTTY → Basics → Connecting → Serial Settings</a>
</div>

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

### Why Protect Privileged EXEC Mode?

<hr class="dividerSection" />

Anyone who reaches Privileged EXEC mode can view a device's full configuration and make changes to it, which makes it a security risk if left unprotected.

Cisco IOS allows Privileged EXEC mode to be protected with a <span class="emphasis">password</span>, so that anyone entering the <span class="codeSnip">enable</span> command from User EXEC mode is prompted to authenticate first.

<hr class="dividerSection" />

### The enable password Command

<hr class="dividerSection" />

The <span class="codeSnip">enable password</span> command, entered in Global Configuration mode, sets a password required to enter Privileged EXEC mode.

```shell  
Router(config)#enable password CCNA
```

Passwords configured this way are <span class="emphasis">case-sensitive</span>, so <span class="secondEmphasis">CCNA</span> and <span class="secondEmphasis">ccna</span> would be treated as different passwords.

If the password is entered incorrectly three times in a row, the device denies further attempts, displaying a <span class="secondEmphasis">%Bad secrets</span> error message.

<hr class="dividerSection" />

### running-config vs. startup-config

<hr class="dividerSection" />

Cisco devices maintain two separate configuration files.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The <span class="emphasis">running-config</span> is the active configuration currently in effect on the device, edited directly as commands are entered.</li>
    <li>The <span class="emphasis">startup-config</span> is the configuration that loads when the device restarts.</li>
  </ul>
</div>

Use <span class="codeSnip">show running-config</span> to view the active configuration, and <span class="codeSnip">show startup-config</span> to view the saved configuration.

If the running-config has never been saved, the startup-config will not exist yet, and the device will load its default configuration on the next restart instead.

<hr class="dividerSection" />

### Saving the Configuration

<hr class="dividerSection" />

Saving the running-config as the startup-config can be done with any of three equivalent commands, all run from Privileged EXEC mode.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">write</span></li>
    <li><span class="codeSnip">write memory</span></li>
    <li><span class="codeSnip">copy running-config startup-config</span></li>
  </ul>
</div>

<hr class="dividerSection" />

### Encrypting Passwords: service password-encryption

<hr class="dividerSection" />

By default, passwords configured with <span class="codeSnip">enable password</span> are stored and displayed in <span class="emphasis">plain text</span> in the running-config, which is a security risk to anyone who views the configuration.

The <span class="codeSnip">service password-encryption</span> command, entered in Global Configuration mode, encrypts all currently configured passwords as well as any passwords configured afterward.

```shell  
Router(config)#service password-encryption
```

Encrypted passwords are displayed with a <span class="secondEmphasis">7</span> in front of them in the running-config, indicating Cisco's proprietary <span class="emphasis">Type 7</span> encryption algorithm.

Type 7 encryption is weak and can be cracked easily using widely available tools, so while it is more secure than plain text, it should not be relied on as strong protection.

Disabling <span class="codeSnip">service password-encryption</span> does not decrypt passwords that are already encrypted, it only stops future passwords from being encrypted.

<hr class="dividerSection" />

### A More Secure Option: enable secret

<hr class="dividerSection" />

The <span class="codeSnip">enable secret</span> command configures a password to protect Privileged EXEC mode, similar to <span class="codeSnip">enable password</span>, but using stronger <span class="emphasis">MD5</span> encryption automatically, indicated by a <span class="secondEmphasis">5</span> in front of the password in the running-config.

```shell  
Router(config)#enable secret Cisco
```

Unlike <span class="codeSnip">enable password</span>, the <span class="codeSnip">enable secret</span> command is always encrypted, regardless of whether <span class="codeSnip">service password-encryption</span> has been used.

If both <span class="codeSnip">enable password</span> and <span class="codeSnip">enable secret</span> are configured, the <span class="codeSnip">enable secret</span> takes precedence, and the <span class="codeSnip">enable password</span> is ignored entirely.

For this reason, <span class="codeSnip">enable secret</span> should always be used instead of <span class="codeSnip">enable password</span> when protecting Privileged EXEC mode.

<hr class="dividerSection" />

### Removing a Configured Command

<hr class="dividerSection" />

Typing <span class="codeSnip">no</span> in front of a previously entered command removes or disables it.

```shell  
Router(config)#no service password-encryption
```

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/foundations/basics/fundamentals/devices-and-communication/protocols-and-standards">← Back</a>
    <div class="xrefTitle">Foundations - Fundamentals - Devices & Communication - Protocols & Standards</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/foundations/basics/devices-and-models/fundamentals/network-infrastructure">Next →</a>
    <div class="xrefTitle">Section: Foundations - Devices & Models - Fundamentals - Network Infrastructure</div>
  </div>
</div>