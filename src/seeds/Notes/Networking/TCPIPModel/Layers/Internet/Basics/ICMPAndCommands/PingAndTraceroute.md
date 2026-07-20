# Ping & Traceroute

<hr class="dividerSection" />

### What ping Does

<hr class="dividerSection" />

The <span class="emphasis">ping</span> command tests network connectivity.

It sends ICMP Echo Requests to a destination and waits for a reply.

If replies are received, the destination is reachable.

<span class="emphasis">ping</span> is probably the most commonly used network utility, and most IP-enabled devices support some form of it.

The command can be followed by either an IP address or the name of a destination host.

When a ping is sent to an IP address, an <span class="emphasis">echo request</span> packet is sent across the network to that address.

If the destination host receives it, it responds with an <span class="emphasis">echo reply</span> packet, and connectivity is verified.

The ping is not successful if a message such as <span class="secondEmphasis">request timed out</span> or <span class="secondEmphasis">general failure</span> appears instead.

If a ping is sent to a name rather than an IP address, a packet is first sent to a DNS server to resolve the name to an IP address.

Once the IP address is obtained, the echo request is forwarded and the process proceeds as normal.

If a ping to the IP address succeeds but a ping to the name does not, the problem is most likely with DNS.

<hr class="dividerSection" />

### Example: Pinging a Gateway and a Domain

<hr class="dividerSection" />

```shell
C:\> ping 10.10.10.1

Pinging 10.10.10.1 with 32 bytes of data:
Reply from 10.10.10.1: bytes=32 time=1ms TTL=64
Reply from 10.10.10.1: bytes=32 time=1ms TTL=64
Reply from 10.10.10.1: bytes=32 time=1ms TTL=64
Reply from 10.10.10.1: bytes=32 time=1ms TTL=64

Ping statistics for 10.10.10.1:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 1ms, Maximum = 1ms, Average = 1ms
```

```shell
C:\> ping www.cisco.com

Pinging e2867.dsca.akamaiedge.net [104.112.72.241] with 32 bytes of data:
Reply from 104.112.72.241: bytes=32 time=25ms TTL=53
Reply from 104.112.72.241: bytes=32 time=25ms TTL=53
Reply from 104.112.72.241: bytes=32 time=27ms TTL=53
Reply from 104.112.72.241: bytes=32 time=24ms TTL=53

Ping statistics for 104.112.72.241:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 24ms, Maximum = 27ms, Average = 25ms

C:\>
```

The first example pings a default gateway directly by IP address, a fast, local reply at 1ms.

The second pings a domain name, which resolves through DNS to <span class="codeSnip">104.112.72.241</span> before the echo requests are sent, resulting in a longer, more realistic round trip of 24 to 27ms.

<hr class="dividerSection" />

### Reading Ping Results

<hr class="dividerSection" />

If pings to both the name and the IP address succeed, but the application still cannot be reached, the problem most likely resides in the application on the destination host, for example, the requested service may not be running.

If neither ping succeeds, network connectivity along the path to the destination is most likely the problem.

In this case, it is common practice to ping the default gateway.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>If the ping to the default gateway succeeds, the problem is not local.</li>
    <li>If the ping to the default gateway fails, the problem resides on the local network.</li>
  </ul>
</div>

A ping can also fail even when network connectivity is not the actual problem.

This can happen due to a firewall on the sending or receiving device, or a router along the path that is blocking ping traffic.

<hr class="dividerSection" />

### ping Options

<hr class="dividerSection" />

The basic <span class="emphasis">ping</span> command usually sends four echo requests and waits for a reply to each one.

It can be modified with additional options to increase its usefulness.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Option</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">-t</span></td>
      <td class="tableCell">Pings the specified host until stopped.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">-a</span></td>
      <td class="tableCell">Resolves addresses to hostnames.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">-n count</span></td>
      <td class="tableCell">Sets the number of echo requests to send.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">-l size</span></td>
      <td class="tableCell">Sets the send buffer size.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">-f</span></td>
      <td class="tableCell">Sets the Don't Fragment flag in the packet (IPv4 only).</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">-i TTL</span></td>
      <td class="tableCell">Sets the Time To Live.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">-w timeout</span></td>
      <td class="tableCell">Sets the timeout, in milliseconds, to wait for each reply.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">-4</span></td>
      <td class="tableCell">Forces the use of IPv4.</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">-6</span></td>
      <td class="tableCell">Forces the use of IPv6.</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

### Traceroute (Path Visibility)

<hr class="dividerSection" />

<span class="emphasis">Traceroute</span> shows the hop-by-hop path packets take to reach a destination.

This helps identify where latency or packet loss may be occurring along the route.

Common commands:

#### Windows

```shell
tracert google.com
```

#### macOS/Linux

```shell
traceroute google.com
```

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/basics/icmp-and-commands/ipconfig">← Back</a>
    <div class="xrefTitle">ICMP & Commands - ipconfig</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/internet/advanced/fragmentation-and-mtu/ipv4-df-mf-and-reassembly">Next →</a>
    <div class="xrefTitle">Section: Internet Layer - Fragmentation & MTU - IPv4 DF/MF & Reassembly</div>
  </div>
</div>