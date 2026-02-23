<hr class="dividerMain">

# BSS, ESS, and SSID

<hr class="dividerMain">

Wireless networks are organized using structured design models that define how devices connect and identify themselves.

At a basic level:

- A <span class="emphasis">BSS (Basic Service Set)</span> is a single wireless network area served by one access point.
- An <span class="emphasis">ESS (Extended Service Set)</span> is multiple access points using the same network name to provide broader coverage.
- An <span class="emphasis">SSID (Service Set Identifier)</span> is the name that identifies the wireless network.

<hr class="dividerSection" />

### BSS (Basic Service Set)

<hr class="dividerSection" />

A <span class="emphasis">BSS</span> is the basic building block of a Wi-Fi network.

In most common deployments, a BSS is:

- One access point (AP)
- Wireless devices (stations / STAs) associated to that AP
- A defined coverage area (often called a cell)

A typical home router with Wi-Fi enabled usually provides a single BSS per radio band.

<hr class="dividerSection" />

### ESS (Extended Service Set)

<hr class="dividerSection" />

An <span class="emphasis">ESS</span> is created when multiple access points work together to provide a single, larger wireless network.

In an ESS:

- Multiple APs provide coverage across a larger area
- The APs share the same SSID (network name)
- Devices can move between AP coverage zones without manually choosing a new network

This is commonly used in:

- Offices
- Schools
- Hotels
- Homes with mesh Wi-Fi systems

<hr class="dividerSection" />

### SSID (Service Set Identifier)

<hr class="dividerSection" />

An <span class="emphasis">SSID</span> is the name assigned to a <span class="emphasis">Wireless Local Area Network (WLAN)</span>.

It identifies which wireless network a device should join.

Key characteristics:

- Case-sensitive  
- Alphanumeric  
- Up to 32 characters  
- Sent in wireless management frames  

All devices that wish to join the same WLAN must use the exact same SSID.

<hr class="dividerSection" />

### SSID Broadcast

<hr class="dividerSection" />

Wireless routers broadcast their configured SSID by default.

This broadcast:

- Allows devices to automatically discover available wireless networks  
- Displays the network name in the list of available Wi-Fi networks  

If SSID broadcast is disabled:

- The network name does not appear in automatic scan results  
- Users must manually enter the SSID on their device  

Disabling SSID broadcast may reduce casual visibility, but it is <span class="emphasis">not sufficient security</span>.

All wireless networks should use the strongest available encryption to restrict unauthorized access.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/wireless/basics/80211/frequencies-and-channels">← Back</a>
    <div class="xrefTitle">Previous Topic: Wireless - 802.11 Fundamentals - Frequencies & Channels</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/wireless/basics/architecture/ap-modes">Next →</a>
    <div class="xrefTitle">Wireless - WLAN Architecture - AP Modes (Local/Flex)</div>
  </div>
</div>