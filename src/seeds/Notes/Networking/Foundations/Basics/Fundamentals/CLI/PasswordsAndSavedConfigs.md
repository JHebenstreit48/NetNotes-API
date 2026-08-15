# Protecting Privileged EXEC Access and Saving Configuration

<hr class="dividerSection" />

### Why Protect Privileged EXEC Mode?

<hr class="dividerSection" />

Anyone who reaches <span class="emphasis">Privileged EXEC mode</span> can view a device's full configuration and make changes to it, which makes it a security risk if left unprotected.

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
    <a class="xrefBtn" href="/networking/foundations/basics/fundamentals/cli/connecting-and-modes">← Back</a>
    <div class="xrefTitle">Foundations - Fundamentals - CLI - Connecting & Modes</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/foundations/basics/devices-and-models/fundamentals/network-infrastructure">Next →</a>
    <div class="xrefTitle">Section: Foundations - Devices & Models - Fundamentals - Network Infrastructure</div>
  </div>
</div>