# Glossary - Networking - Foundations - Fundamentals - CLI & Commands

<hr class="dividerSection" />

### CLI (Command-Line Interface)

<hr class="dividerSubsection1" />

The text-based interface used to configure Cisco devices such as routers, switches, and firewalls.

<hr class="dividerSubsection1" />

### Terminal Emulator

<hr class="dividerSubsection1" />

Software used to access a device's CLI once physically or remotely connected to it.

<span class="emphasis">PuTTY</span> and <span class="emphasis">Tera Term</span> are both free terminal emulators used for this purpose.

<hr class="dividerSubsection1" />

### User EXEC Mode

<hr class="dividerSubsection1" />

The first mode a user enters upon connecting to a device, indicated by a <span class="codeSnip">&gt;</span> after the hostname.

Allows only limited, read-only access to the device.

<hr class="dividerSubsection1" />

### Privileged EXEC Mode

<hr class="dividerSubsection1" />

A mode entered from User EXEC mode, indicated by a <span class="codeSnip">#</span> after the hostname.

Provides full access to view the device's configuration, restart the device, and save configuration files.

<hr class="dividerSubsection1" />

### Global Configuration Mode

<hr class="dividerSubsection1" />

A mode entered from Privileged EXEC mode, indicated by <span class="codeSnip">(config)#</span> after the hostname.

Where actual changes to the device's configuration are made.

<hr class="dividerSubsection1" />

### enable

<hr class="dividerSubsection1" />

Entered in User EXEC mode, moves the user into Privileged EXEC mode.

<hr class="dividerSubsection1" />

### exit

<hr class="dividerSubsection1" />

Moves the user back one mode level, or logs the user out of the device entirely if used from User EXEC mode.

<hr class="dividerSubsection1" />

### configure terminal

<hr class="dividerSubsection1" />

Entered in Privileged EXEC mode, moves the user into Global Configuration mode.

Often shortened to <span class="codeSnip">conf t</span>.

<hr class="dividerSubsection1" />

### show

<hr class="dividerSubsection1" />

Displays information about the device's current state or configuration.

Used alongside additional keywords, such as <span class="codeSnip">show running-config</span> to view the active configuration, or <span class="codeSnip">show startup-config</span> to view the saved configuration.

<hr class="dividerSubsection1" />

### copy

<hr class="dividerSubsection1" />

Copies a file from one location on the device to another.

The command <span class="codeSnip">copy running-config startup-config</span> saves the active configuration as the configuration that will load on restart.

<hr class="dividerSubsection1" />

### write

<hr class="dividerSubsection1" />

Entered in Privileged EXEC mode, saves the running-config as the startup-config.

Equivalent to <span class="codeSnip">write memory</span> and to <span class="codeSnip">copy running-config startup-config</span>.

<hr class="dividerSubsection1" />

### no

<hr class="dividerSubsection1" />

Typed in front of a previously entered command, removes or disables that command.

<hr class="dividerSection" />

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/networking/foundations/basics/fundamentals/devices-and-communication/cli-basics" target="_blank" rel="noopener noreferrer">Foundations → Fundamentals → Devices & Communication → CLI Basics</a>
</div>

<hr class="dividerSection" />