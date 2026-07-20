# How ipconfig Shows and Fixes Your IP Configuration

<hr class="dividerSection" />

### Why IP Configuration Matters

<hr class="dividerSection" />

When a device does not receive an IP address, or has an incorrect IP configuration, it cannot communicate on the network or reach the internet.

If the host also does not know the location of its DNS servers, it cannot translate domain names into IP addresses either.

On Windows devices, the <span class="emphasis">ipconfig</span> command displays this configuration information directly from the command prompt.

It has several useful options, including <span class="codeSnip">/all</span>, <span class="codeSnip">/release</span>, and <span class="codeSnip">/renew</span>.

<hr class="dividerSection" />

### Viewing Basic Configuration (ipconfig)

<hr class="dividerSection" />

Running <span class="emphasis">ipconfig</span> alone displays the basic configuration for a host.

This includes the <span class="emphasis">IPv4 address</span>, <span class="emphasis">subnet mask</span>, and <span class="emphasis">default gateway</span>.

```shell
C:\> ipconfig

Windows IP Configuration


Ethernet adapter Ethernet:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix . :

Wireless LAN adapter Wi-Fi:

   Connection-specific DNS Suffix . : lan
   Link-local IPv6 Address . . . . . : fe80::a1cc:4239:d3ab:2675%6
   IPv4 Address. . . . . . . . . . . : 10.10.10.130
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : 10.10.10.1

C:\>
```

<hr class="dividerSection" />

### Getting Full Details (ipconfig /all)

<hr class="dividerSection" />

The command <span class="emphasis">ipconfig /all</span> displays additional information beyond the basic view.

This includes the <span class="emphasis">MAC address</span>, the <span class="emphasis">DNS server addresses</span>, whether <span class="emphasis">DHCP is enabled</span>, the DHCP server address, and lease information.

<span class="secondEmphasis">How does this help troubleshooting?</span>

Without a proper IP configuration, a host cannot participate in communication on a network.

If it does not know where its DNS servers are, it cannot resolve names into IP addresses.

```shell
C:\> ipconfig /all

Windows IP Configuration

   Host Name . . . . . . . . . . . . : your-a9270112e3
   Primary Dns Suffix . . . . . . . :
   Node Type . . . . . . . . . . . . : Hybrid
   IP Routing Enabled. . . . . . . . : No
   WINS Proxy Enabled. . . . . . . . : No
   DNS Suffix Search List. . . . . . : lan

Ethernet adapter Ethernet:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix . :
   Description . . . . . . . . . . . : Realtek PCIe GBE Family Controller
   Physical Address. . . . . . . . . : 00-16-D4-02-5A-EC
   DHCP Enabled. . . . . . . . . . . : Yes
   Autoconfiguration Enabled . . . . : Yes

Wireless LAN adapter Wi-Fi:

   Connection-specific DNS Suffix . : lan
   Description . . . . . . . . . . . : Intel(R) Dual Band Wireless-AC 3165
   Physical Address. . . . . . . . . : 00-13-02-47-8C-6A
   DHCP Enabled. . . . . . . . . . . : Yes
   Autoconfiguration Enabled . . . . : Yes
   Link-local IPv6 Address . . . . . : fe80::a1cc:4239:d3ab:2675%6(Preferred)
   IPv4 Address. . . . . . . . . . . : 10.10.10.130(Preferred)
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Lease Obtained. . . . . . . . . . : Wednesday, September 2, 2020 10:03:43 PM
   Lease Expires . . . . . . . . . . : Friday, September 11, 2020 10:23:36 AM
   Default Gateway . . . . . . . . . : 10.10.10.1
   DHCP Server . . . . . . . . . . . : 10.10.10.1
   DHCPv6 IAID . . . . . . . . . . . : 98604135
   DHCPv6 Client DUID. . . . . . . . : 00-01-00-01-1E-21-A5-84-44-A8-42-FC-0D-6F
   DNS Servers . . . . . . . . . . . : 10.10.10.1
   NetBIOS over Tcpip. . . . . . . . : Enabled

C:\>
```

<hr class="dividerSection" />

### Releasing and Renewing (ipconfig /release and ipconfig /renew)

<hr class="dividerSection" />

If IP addressing is assigned dynamically, <span class="emphasis">ipconfig /release</span> releases the current DHCP bindings.

<span class="emphasis">ipconfig /renew</span> then requests fresh configuration information from the DHCP server.

A host with faulty or outdated configuration information often only needs a renewal to regain connectivity.

If a host cannot obtain fresh information after releasing, the diagnostic path is:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Verify the NIC has an illuminated link light, confirming a physical connection to the network.</li>
    <li>If the link light is fine, the issue may be with the DHCP server itself.</li>
    <li>If the DHCP server is reachable elsewhere, the issue may be with the network path leading to it.</li>
  </ul>
</div>

```shell
C:\> ipconfig /release

Windows IP Configuration

No operation can be performed on Ethernet while it has its media disconnected.

Ethernet adapter Ethernet:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix . :

Wireless LAN adapter Wi-Fi:

   Connection-specific DNS Suffix . :
   Link-local IPv6 Address . . . . . : fe80::a1cc:4239:d3ab:2675%6
   Default Gateway . . . . . . . . . :
```

```shell
C:\> ipconfig /renew

Windows IP Configuration

No operation can be performed on Ethernet while it has its media disconnected.

Ethernet adapter Ethernet:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix . :

Wireless LAN adapter Wi-Fi:

   Connection-specific DNS Suffix . : lan
   Link-local IPv6 Address . . . . . : fe80::a1cc:4239:d3ab:2675%6
   IPv4 Address. . . . . . . . . . . : 10.10.10.130
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : 10.10.10.1

C:\>
```

<hr class="dividerSection" />

### Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">ipconfig</span> shows basic configuration: IPv4 address, subnet mask, default gateway.</li>
    <li><span class="emphasis">ipconfig /all</span> adds MAC address, DNS servers, DHCP status, and lease details.</li>
    <li><span class="emphasis">ipconfig /release</span> and <span class="emphasis">ipconfig /renew</span> clear and reacquire DHCP-assigned settings.</li>
    <li>A failed renewal points troubleshooting toward the physical link, then the DHCP server, then the path to it.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/icmp-and-commands/icmp">← Back</a>
    <div class="xrefTitle">ICMP & Commands - ICMP</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/icmp-and-commands/ping-and-traceroute">Next →</a>
    <div class="xrefTitle">ICMP & Commands - Ping & Traceroute</div>
  </div>
</div>