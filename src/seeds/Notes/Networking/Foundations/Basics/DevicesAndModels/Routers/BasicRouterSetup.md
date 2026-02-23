# Introduction

---

### Basic Home Router Setup (Real-World)

---

Many wireless routers designed for home use include an automatic setup utility to configure basic settings.

These utilities commonly require a **PC or laptop connected by Ethernet** to the router during initial setup.

If no device is available with a wired connection, you may need to configure Wi-Fi on a laptop or tablet first to access the router.

---

### Connect to the Router (LAN, Not Internet/WAN)

---

To connect to the router using a wired connection:

1. Plug an Ethernet patch cable into the network port on the computer.
2. Plug the other end into a **LAN** port on the router.
3. Do **not** plug the cable into the port labeled **Internet** or **WAN**.

The Internet/WAN port is used to connect the router to ISP equipment such as a cable modem or DSL modem.

---

### Modem Connection Types (Quick Identifiers)

---

Some home routers connect to a separate modem, while others may have a built-in modem.

Common identifiers:

- **Cable modem** connections typically use a coaxial connector.
- **DSL** connections typically use a telephone-style cable (often an **RJ-11** connector).

If a router has a built-in modem, verify the connection type matches the ISP service.

---

### Link Lights and IP Address

---

After connecting the computer to the router:

- Verify the NIC link lights indicate a working connection.
- The computer needs an IP address to communicate with the router.

Most home routers run a local DHCP server by default, so the computer should receive an IP address automatically.

If the computer does not receive an IP address:

- Check the router documentation.
- Manually configure the client with:
  - a unique IP address
  - subnet mask
  - default gateway
  - DNS information

---

### Plan Before You Configure

---

Before entering the router configuration utility (or configuring through a web browser), think through how the network will be used.

You do not want to configure the router in a way that:

- limits what you can do on the network later, or
- leaves the network unprotected

Common decisions to think about early:

- Network name (SSID) strategy
- Device compatibility (single standard vs mixed/legacy mode)
- Guest access needs
- Security posture (encryption and access control)

---

### SSID Naming (Avoid Oversharing)

---

If SSID broadcasting is enabled, the SSID name will be visible to wireless clients within range.

Avoid including identifying details in the SSID such as:

- router brand or model
- location/unit identifiers
- personal information

Wireless router models often have known defaults and documented weaknesses, so revealing model information is not recommended.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/wireless/basics/architecture/bss-ess-ssid">
    Wireless → WLAN Architecture → BSS/ESS/SSID
  </a>
</div>

---

### Standards Compatibility (Single vs Mixed)

---

If all devices support the same wireless standard, performance can be optimized for that standard.

If older devices do not support newer standards, enabling **mixed/legacy mode** allows them to connect.

Mixed/legacy mode improves compatibility but can reduce overall efficiency depending on device behavior.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/wireless/basics/80211/wireless-standards">
    Wireless → 802.11 Fundamentals → Wireless Standards
  </a>
</div>

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/devices-and-models/fundamentals/network-models">← Back</a>
    <div class="xrefTitle">Previous Section: Foundations - Devices & Models - Networking Models</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/devices-and-models/routers/roles-and-types">Next →</a>
    <div class="xrefTitle">Routers - Roles & Types</div>
  </div>
</div>