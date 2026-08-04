# IP Addressing - Fundamentals - Introduction

<hr class="dividerMain">

The <span class="emphasis">Internet Layer</span> (Layer 3) is responsible for <span class="emphasis">addressing</span> and <span class="emphasis">routing</span> data across networks.

It ensures packets can travel from a source device to a destination device, even when those devices are on different networks.

<hr class="dividerSection" />

### Layer 3 Header

<hr class="dividerSection" />

The <span class="emphasis">Layer 3 header</span> contains addressing information that enables routing.

It includes:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Source Address</span>, where the packet originates</li>
    <li><span class="emphasis">Destination Address</span>, where the packet is going</li>
  </ul>
</div>

These addresses allow routers to determine how to forward packets between networks.

<hr class="dividerSection" />

### What IP Addressing Does

<hr class="dividerSection" />

IP addressing allows devices to be uniquely identified on a network.

Every device communicating on an IP network requires an IP address.

<hr class="dividerSection" />

### Addressing Analogies

<hr class="dividerSection" />

IP addresses can be compared to mailing addresses:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Network Address</span>, like a street name, identifying the general location</li>
    <li><span class="emphasis">Host Address</span>, like a house number, identifying the specific device</li>
  </ul>
</div>

Example IPv4 address:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>
      <span class="codeSnip">10.10.0.50</span>
      <ul class="nestedHollowBullets">
        <li>Network portion: <span class="codeSnip">10.10.0</span></li>
        <li>Host portion: <span class="codeSnip">.50</span></li>
      </ul>
    </li>
  </ul>
</div>

<hr class="dividerSection" />

### IPv4 and IPv6 Overview

<hr class="dividerSection" />

Two primary IP versions exist:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>
      <span class="emphasis">IPv4</span>, most common format:
      <ul class="nestedHollowBullets">
        <li><span class="codeSnip">xxx.xxx.xxx.xxx</span> (e.g., <span class="codeSnip">192.168.1.1</span>)</li>
      </ul>
    </li>
    <li>
      <span class="emphasis">IPv6</span>, uses eight groups of hexadecimal numbers:
      <ul class="nestedHollowBullets">
        <li><span class="codeSnip">xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx</span> (e.g., <span class="codeSnip">2001:0db8:85a3:0000:0000:8a2e:0370:7334</span>)</li>
      </ul>
    </li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/transport/advanced/multiplexing/ephemeral-and-well-known-ports">← Back</a>
    <div class="xrefTitle">Topic: Transport Layer - Multiplexing - Ephemeral & Well-Known Ports</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/networking/tcp-ip-model/layers/internet/basics/fundamentals/dhcp">Next →</a>
    <div class="xrefTitle">Internet Layer - Fundamentals - DHCP</div>
  </div>
</div>