# How Layer 2 Switches Forward Frames

<hr class="dividerSection" />

## What Is Layer 2 Switching?

<hr class="dividerSection" />

A Layer 2 switch forwards frames based on the <span class="emphasis">destination MAC address</span> inside the Ethernet frame header.

It operates within a single broadcast domain unless VLANs are configured.

Switches are used specifically to forward traffic within a LAN (Local Area Network). A company with multiple branch offices would have each office running its own separate LAN.

<hr class="dividerSection" />

## Physical Ports on a Layer 2 Switch

<hr class="dividerSection" />

Layer 2 switches provide physical interfaces such as:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Ethernet (RJ45) ports</li>
    <li>SFP fiber ports</li>
    <li>Console ports</li>
  </ul>
</div>

These ports connect:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Hosts (PCs, servers, IoT devices)</li>
    <li>Routers</li>
    <li>Other switches</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">Terminology:</span>
  <a href="/switching/basics/glossary/hosts-and-ports" target="_blank" rel="noopener noreferrer">See Glossary → Hosts & Ports</a>
</div>

<hr class="dividerSection" />

## Topology Walkthrough

<hr class="dividerSection" />

<hr class="dividerSubsection1" />

### Switch to Router

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Switch <span class="codeSnip">GigabitEthernet0/0</span></li>
    <li>Connected to Router <span class="codeSnip">GigabitEthernet0/0</span></li>
  </ul>
</div>

This provides Layer 3 connectivity beyond the local LAN.

<hr class="dividerSubsection1" />

### Hosts to Switch

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>PC1 to <span class="codeSnip">g0/1</span></li>
    <li>PC2 to <span class="codeSnip">g0/2</span></li>
  </ul>
</div>

Switches learn each host's MAC address and store it in the MAC address table.

<hr class="dividerSection" />

## Port Naming and Speed Indicators

<hr class="dividerSection" />

Examples:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">FastEthernet0/1</span>, 100 Mbps</li>
    <li><span class="codeSnip">GigabitEthernet0/1</span>, 1 Gbps</li>
    <li><span class="codeSnip">TenGigabitEthernet0/1</span>, 10 Gbps</li>
  </ul>
</div>

The name reflects:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Interface type</li>
    <li>Maximum speed</li>
    <li>Logical port position</li>
  </ul>
</div>

<hr class="dividerSection" />

## How Switching Works

<hr class="dividerSection" />

Layer 2 switches perform three primary actions:

<div class="centeredNumberedList">
  1. **Learning**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Reads source MAC address</li>
      <li>Adds it to the MAC address table</li>
    </ul>
  </div>

  2. **Forwarding**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Sends frame only to the port matching the destination MAC</li>
    </ul>
  </div>

  3. **Flooding**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>If destination is unknown, frame is sent to all ports except the source</li>
    </ul>
  </div>
</div>

<hr class="dividerSection" />

## Collision and Broadcast Domains

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Each switch port is a separate collision domain</li>
    <li>The entire switch (without VLANs) is one broadcast domain</li>
  </ul>
</div>

<hr class="dividerSection" />

## Limitations of Layer 2 Switching

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Cannot route between IP networks</li>
    <li>Cannot break broadcast domains without VLANs</li>
    <li>Broadcast storms can impact performance</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/network-access/advanced/physical/noise-and-distance/crosstalk-and-emi">← Back</a>
    <div class="xrefTitle">Topic: TCP/IP Model - Advanced - Physical - Crosstalk & EMI</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/switching/basics/fundamentals/mac-address-table">Next →</a>
    <div class="xrefTitle">Switching - Basics - Fundamentals - MAC Address Table</div>
  </div>
</div>