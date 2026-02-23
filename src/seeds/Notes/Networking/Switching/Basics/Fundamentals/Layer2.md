# Introduction

---

### What Is Layer 2 Switching?

---

A Layer 2 switch forwards frames based on the **destination MAC address** inside the Ethernet frame header.

It operates within a single broadcast domain unless VLANs are configured.

---

## Physical Ports on a Layer 2 Switch

---

Layer 2 switches provide physical interfaces such as:

- Ethernet (RJ45) ports
- SFP fiber ports
- Console ports

These ports connect:

- Hosts (PCs, servers, IoT devices)
- Routers
- Other switches

<div class="xrefBox">
  <span class="emphasis">Terminology:</span>
  <a href="/switching/basics/glossary/hosts-and-ports">
    See Glossary → Hosts & Ports
  </a>
</div>

---

## Example Topology

---

### Switch to Router

- Switch **GigabitEthernet0/0**
- Connected to Router **GigabitEthernet0/0**

This provides Layer 3 connectivity beyond the local LAN.

### Hosts to Switch

- PC1 → g0/1
- PC2 → g0/2

Switches learn each host’s MAC address and store it in the MAC address table.

---

## Port Naming and Speed Indicators

---

Examples:

- FastEthernet0/1 → 100 Mbps
- GigabitEthernet0/1 → 1 Gbps
- TenGigabitEthernet0/1 → 10 Gbps

The name reflects:

- Interface type
- Maximum speed
- Logical port position

---

## How Switching Works

---

Layer 2 switches perform three primary actions:

1. **Learning**
   - Reads source MAC address
   - Adds it to the MAC address table

2. **Forwarding**
   - Sends frame only to the port matching the destination MAC

3. **Flooding**
   - If destination is unknown, frame is sent to all ports except the source

---

## Collision and Broadcast Domains

---

- Each switch port = separate collision domain
- Entire switch (without VLANs) = one broadcast domain

---

## Limitations of Layer 2 Switching

---

- Cannot route between IP networks
- Cannot break broadcast domains without VLANs
- Broadcast storms can impact performance

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/network-access/advanced/physical/noise-and-distance/crosstalk-and-emi">← Back</a>
    <div class="xrefTitle">Topic: TCP/IP Model - Advanced - Physical - Crosstalk & EMI</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/switching/basics/fundamentals/mac-address-table">Next →</a>
    <div class="xrefTitle">Switching - Basics - Fundamentals - MAC Address Table</div>
  </div>
</div>