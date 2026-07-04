# BSS, ESS, and SSID

<hr class="dividerSection" />

## Overview

<hr class="dividerSection" />

Wireless networks are organized using structured design models that define how devices connect and identify themselves.

At a basic level:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A <span class="emphasis">BSS (Basic Service Set)</span> is a single wireless network area served by one access point.</li>
    <li>An <span class="emphasis">ESS (Extended Service Set)</span> is multiple access points using the same network name to provide broader coverage.</li>
    <li>An <span class="emphasis">SSID (Service Set Identifier)</span> is the name that identifies the wireless network.</li>
  </ul>
</div>

<hr class="dividerSection" />

### BSS (Basic Service Set)

<hr class="dividerSection" />

A <span class="emphasis">BSS</span> is the basic building block of a Wi-Fi network.

In most common deployments, a BSS is:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>One access point (AP)</li>
    <li>Wireless devices (stations / STAs) associated to that AP</li>
    <li>A defined coverage area (often called a cell)</li>
  </ul>
</div>

A typical home router with Wi-Fi enabled usually provides a single BSS per radio band.

<hr class="dividerSection" />

### ESS (Extended Service Set)

<hr class="dividerSection" />

An <span class="emphasis">ESS</span> is created when multiple access points work together to provide a single, larger wireless network.

In an ESS:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Multiple APs provide coverage across a larger area.</li>
    <li>The APs share the same SSID (network name).</li>
    <li>Devices can move between AP coverage zones without manually choosing a new network.</li>
  </ul>
</div>

This is commonly used in:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Offices</li>
    <li>Schools</li>
    <li>Hotels</li>
    <li>Homes with mesh Wi-Fi systems</li>
  </ul>
</div>

<hr class="dividerSection" />

### SSID (Service Set Identifier)

<hr class="dividerSection" />

An <span class="emphasis">SSID</span> is the name assigned to a <span class="emphasis">Wireless Local Area Network (WLAN)</span>.

It identifies which wireless network a device should join.

Key characteristics:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Case-sensitive</li>
    <li>Alphanumeric</li>
    <li>Up to 32 characters</li>
    <li>Sent in wireless management frames</li>
  </ul>
</div>

All devices that wish to join the same WLAN must use the exact same SSID.

<hr class="dividerSection" />

### SSID Broadcast

<hr class="dividerSection" />

Wireless routers broadcast their configured SSID by default.

This broadcast:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Allows devices to automatically discover available wireless networks.</li>
    <li>Displays the network name in the list of available Wi-Fi networks.</li>
  </ul>
</div>

If SSID broadcast is disabled:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The network name does not appear in automatic scan results.</li>
    <li>Users must manually enter the SSID on their device.</li>
  </ul>
</div>

Disabling SSID broadcast may reduce casual visibility, but it is <span class="emphasis">not sufficient security</span>.

All wireless networks should use the strongest available encryption to restrict unauthorized access.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/wireless/basics/80211/frequencies-and-channels">← Back</a>
    <div class="xrefTitle">Topic: Wireless → 802.11 Fundamentals → Frequencies & Channels</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/wireless/basics/architecture/ap-modes">Next →</a>
    <div class="xrefTitle">Wireless → WLAN Architecture → AP Modes (Local/Flex)</div>
  </div>
</div>