<hr class="dividerMain">

# IP Addressing - Fundamentals - IPv4

<hr class="dividerMain">

<span class="emphasis">IPv4</span> (Internet Protocol version 4) is the most widely used IP addressing format.

It uses a <span class="emphasis">32-bit</span> address written as four decimal numbers (octets) separated by dots.

Example:

- <span class="examples">192.168.1.10</span>

<hr class="dividerSection" />

### IPv4 Format (Octets)

<hr class="dividerSection" />

An IPv4 address is made of four <span class="emphasis">octets</span>:

- Each octet ranges from <span class="examples">0</span> to <span class="examples">255</span>
- Four octets together form a 32-bit address

Example:

- <span class="examples">10.10.0.50</span>

<hr class="dividerSection" />

### Network vs Host (Concept)

<hr class="dividerSection" />

IPv4 addressing is typically split into two parts:

- <span class="secondEmphasis">Network portion</span> — identifies the network
- <span class="secondEmphasis">Host portion</span> — identifies the device on that network

The exact split depends on the subnet mask / CIDR prefix.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tcpip-model/layers/internet/basics/subnetting-and-gateways/subnet-masks-and-cidr">
    Internet Layer → Subnetting & Gateways → Subnet Masks & CIDR
  </a>
</div>

<hr class="dividerSection" />

### Verifying Your IP Address

<hr class="dividerSection" />

To check your local IP configuration:

- <span class="emphasis">Windows</span>:  
  <span class="examples">ipconfig</span>

- <span class="emphasis">Mac</span>:  
  <span class="examples">ifconfig</span>

- <span class="emphasis">Linux/Ubuntu</span>:  
  <span class="examples">ip addr</span> or <span class="examples">ifconfig</span>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/fundamentals/introduction">← Back</a>
    <div class="xrefTitle">IP Addressing - Fundamentals - Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/ip-addressing/fundamentals/dhcp">Next →</a>
    <div class="xrefTitle">IP Addressing - Fundamentals - DHCP (Address Assignment)</div>
  </div>
</div>