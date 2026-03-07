# Router Roles and Types – Gateways to Other Networks

<hr class="dividerSection" />

## Routers as Gateways

<hr class="dividerSection" />

A router serves as a **gateway** — the exit point for traffic leaving one local network to reach remote networks or the Internet.

It acts as the boundary between networks, connecting local hosts to destinations beyond their own subnet.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Analogy: The default gateway is like "the door out of the room" — to leave the local network (room), traffic must pass through this door (router).</li>
    <li>Routers forward packets between different networks based on destination IP addresses.</li>
    <li>Every host intending to communicate with remote destinations must know its default gateway address.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

## Default Gateway Purpose and Operation

<hr class="dividerSubsection1" />

The **default gateway** is the IPv4 address of the router interface connected to the host's local network.

Hosts send packets to this address when the destination is not on the local subnet.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Hosts determine if a destination is local using binary ANDing: source IP AND subnet mask compared to destination IP AND subnet mask.</li>
    <li>If network portions match → packet sent directly (local delivery).</li>
    <li>If network portions differ → packet sent to default gateway for forwarding.</li>
    <li>Host then ARPs for the MAC address of the default gateway to encapsulate the frame.</li>
  </ul>
</div>

The default gateway is usually the router interface closest to the host on the path to the Internet or remote destination.

Different LAN segments (e.g., network management vs accounting departments) use different router interfaces as their default gateway.

<hr class="dividerSubsection1" />

## Common Configuration Issues

<hr class="dividerSubsection1" />

Misconfiguration prevents remote communication.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Default gateway IP not on the same subnet as the host → host cannot ARP for it.</li>
    <li>Incorrect IP address or subnet mask → host misjudges local vs remote destinations.</li>
    <li>No default gateway configured → host can only reach local network devices.</li>
  </ul>
</div>

Accurate IP address, subnet mask, and default gateway configuration is essential for proper local/remote determination.

<hr class="dividerSection" />

<div class="xrefBox">
  <span class="emphasis">See related concepts:</span><br />
  <a href="/foundations/basics/devices-and-models/routers/interfaces">
    Routers → Interfaces (how interface IP becomes default gateway)
  </a><br />
  <a href="/tcpip-model/layers/internet/advanced/nat-and-pat/concepts-and-types">
    Advanced → NAT & PAT → Concepts & Types (gateway role in small network Internet access)
  </a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/devices-and-models/routers/basic-router-setup">← Back</a>
    <div class="xrefTitle">Foundations - Basics - Devices & Models - Routers - Basic Router Setup</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/foundations/basics/devices-and-models/routers/interfaces">Next →</a>
    <div class="xrefTitle">Foundations - Basics - Devices & Models - Routers - Interfaces</div>
  </div>
</div>