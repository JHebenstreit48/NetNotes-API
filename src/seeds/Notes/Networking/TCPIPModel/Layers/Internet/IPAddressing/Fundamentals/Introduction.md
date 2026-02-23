<hr class="dividerMain">

# IP Addressing - Fundamentals - Introduction

<hr class="dividerMain">

The <span class="emphasis">Internet Layer</span> (Layer 3) is responsible for <span class="emphasis">addressing</span> and <span class="emphasis">routing</span> data across networks.

It ensures packets can travel from a source device to a destination device, even when those devices are on different networks.

<hr class="dividerSection" />

### Layer 3 Header

<hr class="dividerSection" />

The <span class="emphasis">Layer 3 header</span> contains addressing information that enables routing.

It includes:

- <span class="emphasis">Source Address</span> — where the packet originates  
- <span class="emphasis">Destination Address</span> — where the packet is going  

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

- <span class="secondEmphasis">Network Address</span> — like a street name, identifying the general location  
- <span class="secondEmphasis">Host Address</span> — like a house number, identifying the specific device  

Example IPv4 address:

- <span class="examples">10.10.0.50</span>  
  - Network portion: <span class="examples">10.10.0</span>  
  - Host portion: <span class="examples">.50</span>

<hr class="dividerSection" />

### IPv4 and IPv6 Overview

<hr class="dividerSection" />

Two primary IP versions exist:

- <span class="emphasis">IPv4</span> — Most common format:  
  <span class="examples">xxx.xxx.xxx.xxx</span> (e.g., <span class="examples">192.168.1.1</span>)

- <span class="emphasis">IPv6</span> — Uses eight groups of hexadecimal numbers

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/transport/advanced/multiplexing/ephemeral-and-well-known-ports">← Back</a>
    <div class="xrefTitle">Previous Topic: Transport Layer - Multiplexing - Ephemeral & Well-Known Ports</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/fundamentals/ipv4">Next →</a>
    <div class="xrefTitle">IP Addressing - Fundamentals - IPv4</div>
  </div>
</div>