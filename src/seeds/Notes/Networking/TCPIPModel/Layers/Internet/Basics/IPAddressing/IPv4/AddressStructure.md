# IPv4 Address Structure

<hr class="dividerSection" />

### Purpose of an IPv4 Address

<hr class="dividerSection" />

A host needs an IPv4 address to participate on the internet and almost all LANs today. The IPv4 address is a logical network address that identifies a particular host. It must be properly configured and unique within the LAN, for local communication. It must also be properly configured and unique in the world, for remote communication. This is how a host is able to communicate with other devices on the internet.

An IPv4 address is assigned to the network interface connection for a host. This connection is usually a network interface card (NIC) installed in the device. Examples of end-user devices with network interfaces include workstations, servers, network printers, and IP phones. Some servers can have more than one NIC and each of these has its own IPv4 address. Router interfaces that provide connections to an IP network will also have an IPv4 address.

Every packet sent across the internet has a source and destination IPv4 address. This information is required by networking devices to ensure the information gets to the destination and any replies are returned to the source.

<hr class="dividerSection" />

### IPv4 Format (Octets)

<hr class="dividerSection" />

<span class="emphasis">IPv4</span> <span class="secondEmphasis">(Internet Protocol version 4)</span> is the <span class="emphasis">most widely used</span> IP addressing format.

It uses a <span class="emphasis">32-bit</span> address written as <span class="emphasis">four decimal numbers</span> <span class="secondEmphasis">(octets)</span> separated by <span class="emphasis">dots</span>.

Example:

```shell
192.168.1.10
```

An IPv4 address is made of four <span class="emphasis">octets</span>:

- Each octet ranges from <span class="emphasis">0</span> to <span class="emphasis">255</span>
- <span class="emphasis">Four octets</span> together form a <span class="emphasis">32-bit address</span>

Example:

```shell
10.10.0.50
```

Here is an IPv4 address in binary:

```shell
11010001101001011100100000000001
```

Notice how difficult this address is to read. For this reason, the 32 bits are grouped into <span class="emphasis">four 8-bit bytes</span> called <span class="emphasis">octets</span> like this:

```shell
11010001.10100101.11001000.00000001
```

Each octet is converted to its decimal value, separated by a decimal point or period. The above binary IPv4 becomes this dotted-decimal representation:

```shell
209.165.200.1
```

<hr class="dividerSection" />

### Network vs Host (Concept)

<hr class="dividerSection" />

IPv4 addressing is typically split into two parts:

- <span class="emphasis">Network portion</span> — identifies the <span class="emphasis">network</span>
- <span class="emphasis">Host portion</span> — identifies the <span class="emphasis">device</span> on that <span class="secondEmphasis">network</span>

The exact split between network and host portions is defined by the subnet mask or CIDR prefix.

This is known as hierarchical addressing — routers only need to know how to reach networks, not every individual host.

<div class="xrefBox">
  <span class="emphasis">See Glossary for full details:</span>
  <a href="/glossary/networking/tcpipmodel/internet/ipv4-and-ipv6-addressing">
    Glossary - IPv4 & IPv6 Addressing
  </a>
</div>

Multiple logical networks can exist on one physical network if hosts have different network portions. For example, three hosts on the same physical LAN might have 192.168.18.x addresses while three others have 192.168.5.x addresses. Hosts with the same network portion can communicate directly, but hosts with different network portions need routing.

Another example of hierarchical addressing is the telephone system: the country code, area code, and exchange represent the network address, while the remaining digits represent a local phone number.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tcpip-model/layers/internet/basics/ip-addressing/subnetting-and-gateways/subnet-masks-and-cidr">
    IP Addressing → Subnetting & Gateways → Subnet Masks & CIDR
  </a>
</div>

<hr class="dividerSection" />

### Verifying Your IP Address

<hr class="dividerSection" />

To check your local IP configuration:

- <span class="emphasis">Windows</span>:

```shell
  ipconfig
```
- <span class="emphasis">Mac</span>:

```shell
ifconfig
```

- <span class="emphasis">Linux/Ubuntu</span>:

```shell
ip addr
```
or

```shell
ifconfig
```

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/fundamentals/dhcp">← Back</a>
    <div class="xrefTitle">Section: Internet Layer - Basics - Fundamentals - DHCP</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/ipv4/types-of-addresses">Next →</a>
    <div class="xrefTitle">Internet Layer - IP Addressing - IPv4 - Types of Addresses</div>
  </div>
</div>