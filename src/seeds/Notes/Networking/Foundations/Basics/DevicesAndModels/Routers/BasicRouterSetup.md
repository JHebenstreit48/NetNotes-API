# Setting Up a Home Router the Right Way

<hr class="dividerSection" />

### Basic Home Router Setup (Real-World)

<hr class="dividerSection" />

Many wireless routers designed for home use include an automatic setup utility to configure basic settings.

These utilities commonly require a <span class="emphasis">PC or laptop connected by Ethernet</span> to the router during initial setup.

If no device is available with a wired connection, you may need to configure Wi-Fi on a laptop or tablet first to access the router.

<hr class="dividerSection" />

### Connect to the Router (LAN, Not Internet/WAN)

<hr class="dividerSection" />

To connect to the router using a wired connection:

<div class="centeredNumberedList">
  1. **Connect the cable**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Plug an Ethernet patch cable into the network port on the computer.</li>
    </ul>
  </div>

  2. **Connect to a LAN port**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Plug the other end into a <span class="emphasis">LAN</span> port on the router.</li>
    </ul>
  </div>

  3. **Avoid the WAN port**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Do <span class="emphasis">not</span> plug the cable into the port labeled <span class="emphasis">Internet</span> or <span class="emphasis">WAN</span>.</li>
    </ul>
  </div>
</div>

The Internet/WAN port is used to connect the router to ISP equipment such as a cable modem or DSL modem.

<hr class="dividerSection" />

### Modem Connection Types (Quick Identifiers)

<hr class="dividerSection" />

Some home routers connect to a separate modem, while others may have a built-in modem.

Common identifiers:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Cable modem</span> connections typically use a coaxial connector.</li>
    <li><span class="emphasis">DSL</span> connections typically use a telephone-style cable, often an <span class="emphasis">RJ-11</span> connector.</li>
  </ul>
</div>

If a router has a built-in modem, verify the connection type matches the ISP service.

<hr class="dividerSection" />

### Link Lights and IP Address

<hr class="dividerSection" />

After connecting the computer to the router:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Verify the NIC link lights indicate a working connection.</li>
    <li>The computer needs an IP address to communicate with the router.</li>
  </ul>
</div>

Most home routers run a local DHCP server by default, so the computer should receive an IP address automatically.

If the computer does not receive an IP address:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Check the router documentation.</li>
    <li>
      Manually configure the client with the following:
      <ul class="nestedHollowBullets">
        <li>a unique IP address</li>
        <li>subnet mask</li>
        <li>default gateway</li>
        <li>DNS information</li>
      </ul>
    </li>
  </ul>
</div>

<hr class="dividerSection" />

### Plan Before You Configure

<hr class="dividerSection" />

Before entering the router configuration utility (or configuring through a web browser), think through how the network will be used.

You do not want to configure the router in a way that limits what you can do on the network later, or leaves the network unprotected.

Common decisions to think about early:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Network name (SSID) strategy</li>
    <li>Device compatibility (single standard vs mixed/legacy mode)</li>
    <li>Guest access needs</li>
    <li>Security posture (encryption and access control)</li>
  </ul>
</div>

<hr class="dividerSection" />

### SSID Naming (Avoid Oversharing)

<hr class="dividerSection" />

If SSID broadcasting is enabled, the SSID name will be visible to wireless clients within range.

Avoid including identifying details in the SSID such as:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Router brand or model</li>
    <li>Location/unit identifiers</li>
    <li>Personal information</li>
  </ul>
</div>

Wireless router models often have known defaults and documented weaknesses, so revealing model information is not recommended.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/wireless/basics/architecture/bss-ess-ssid" target="_blank" rel="noopener noreferrer">Wireless → WLAN Architecture → BSS/ESS/SSID</a>
</div>

<hr class="dividerSection" />

### Standards Compatibility (Single vs Mixed)

<hr class="dividerSection" />

If all devices support the same wireless standard, performance can be optimized for that standard.

If older devices do not support newer standards, enabling <span class="emphasis">mixed/legacy mode</span> allows them to connect.

Mixed/legacy mode improves compatibility but can reduce overall efficiency depending on device behavior.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/wireless/basics/80211/wireless-standards" target="_blank" rel="noopener noreferrer">Wireless → 802.11 Fundamentals → Wireless Standards</a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/devices-and-models/fundamentals/network-models">← Back</a>
    <div class="xrefTitle">Section: Foundations - Devices & Models - Networking Models</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/devices-and-models/routers/roles-and-types">Next →</a>
    <div class="xrefTitle">Routers - Roles & Types</div>
  </div>
</div>