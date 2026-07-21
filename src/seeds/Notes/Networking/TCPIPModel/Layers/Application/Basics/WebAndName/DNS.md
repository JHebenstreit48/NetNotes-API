# DNS Basics

<hr class="dividerSection" />

## What is DNS?

<hr class="dividerSection" />

<span class="emphasis">DNS</span> stands for <span class="emphasis">Domain Name System</span>.

DNS is a server-based system that associates a domain name, or a host name, with an IP address. It functions like a phonebook for the internet, translating <span class="emphasis">human-readable domain names</span> into machine-readable IP addresses.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The network itself only understands IP addresses, not domain names.</li>
    <li>When a system needs to reach a domain, it does not know the IP address ahead of time, so it asks a DNS server to resolve it.</li>
    <li>This resolution step is what allows people to use memorable names like <span class="codeSnip">www.example.com</span> instead of having to know and type raw IP addresses.</li>
  </ul>
</div>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Example:
      <ul class="nestedHollowBullets">
        <li>Domain Name: <span class="emphasis">www.example.com</span></li>
        <li>IP Address: <span class="emphasis">192.0.2.1</span></li>
      </ul>
    </li>
  </ul>
</div>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>On a home network, the DNS server address a device uses is not set manually, it is typically assigned automatically.</li>
    <li>The ISP provides a DNS server address to the home router.</li>
    <li>The router then passes that DNS server address to every device on the network using DHCP.</li>
    <li>Whenever a device needs to resolve a name, such as <span class="codeSnip">www.example.com</span>, its DNS client queries this configured server first, before sending the actual HTTP request.</li>
  </ul>
</div>

<hr class="dividerSection" />

## How DNS Works

<hr class="dividerSection" />

<div class="centeredNumberedList">

1. Query Process

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The client (e.g., browser) sends a query to a DNS resolver.</li>
    <li>The resolver contacts DNS servers in a hierarchy:
      <ul class="nestedHollowBullets">
        <li><span class="emphasis">Root Servers</span>: Handle top-level domains (TLDs) like .com, .org.</li>
        <li><span class="emphasis">TLD Servers</span>: Manage specific domain extensions.</li>
        <li><span class="emphasis">Authoritative Servers</span>: Provide the IP address for a specific domain.</li>
      </ul>
    </li>
  </ul>
</div>

2. Response

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The resolver returns the IP address to the client.</li>
  </ul>
</div>

3. Using the Resolved IP Address

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The host uses the returned IP address to contact the actual web server directly.</li>
    <li>The web server responds with the content needed to display the requested page.</li>
    <li>This next step is handled by application protocols such as HTTP/HTTPS, DNS's job ends once the IP address has been resolved.</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/tcpip-model/layers/application/basics/web-and-name/http-https" target="_blank" rel="noopener noreferrer">Application Layer → Web & Name Resolution → HTTP/HTTPS</a>
</div>

</div>

<hr class="dividerSection" />

## Key Components

<hr class="dividerSection" />

<div class="centeredNumberedList">

1. DNS Records

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">A Record</span>: Maps domain names to IPv4 addresses.</li>
    <li><span class="emphasis">AAAA Record</span>: Maps domain names to IPv6 addresses.</li>
    <li><span class="emphasis">CNAME Record</span>: Points one domain name to another domain name, called a canonical name, rather than directly to an IP address. Lookups often resolve through a chain of several CNAME records before reaching the final address.</li>
    <li><span class="emphasis">MX Record</span>: Specifies mail servers for a domain.</li>
  </ul>
</div>

2. Resolvers

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>DNS resolvers are responsible for querying DNS servers on behalf of clients.</li>
  </ul>
</div>

3. Caching

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>DNS resolvers cache query results to improve speed and reduce server load.</li>
    <li>A result served from cache, rather than fetched fresh from an authoritative server, is labeled a <span class="emphasis">non-authoritative answer</span> in tools like <span class="codeSnip">nslookup</span>.</li>
  </ul>
</div>

</div>

<hr class="dividerSection" />

### Example Workflow

<hr class="dividerSection" />

<div class="centeredNumberedList">

1. <span class="emphasis">Client</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>"What is the IP of <span class="emphasis">www.example.com</span>?"</li>
  </ul>
</div>

2. <span class="emphasis">DNS Resolver</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>"The IP is <span class="secondEmphasis">192.0.2.1</span>"</li>
  </ul>
</div>

</div>

<hr class="dividerSection" />

## Useful DNS Commands

<hr class="dividerSection" />

<hr class="dividerSubsection1" />

### nslookup

<hr class="dividerSubsection1" />

<span class="emphasis">nslookup</span> queries DNS servers for specific information and can be used two ways: entering an interactive mode, or issuing a single direct query.

<hr class="dividerSubsection2" />

#### Entering Interactive Mode

<hr class="dividerSubsection2" />

Running <span class="emphasis">nslookup</span> alone, with no domain name, enters interactive mode.

<hr class="dividerExample" />

```shell  
C:\>nslookup
Default Server: Unknown
Address: 10.10.10.1
```

<hr class="dividerExample" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>This output shows the DNS server currently configured on the client.</li>
    <li>This address can be set manually, or learned automatically through DHCP.</li>
  </ul>
</div>

<hr class="dividerSubsection2" />

#### Querying a Domain in Interactive Mode

<hr class="dividerSubsection2" />

Once in interactive mode, entering a domain name at the prompt queries the configured server directly.

<hr class="dividerExample" />

```shell  
>www.cisco.com
Server:  UnKnown
Address:  10.10.10.1
Non-authoritative answer:
Name:    e2867.dsca.akamaiedge.net
Addresses:  2600:1404:a:395::b33
          2600:1404:a:38e::b33
          172.230.155.162
Aliases:  www.cisco.com
          www.cisco.com.akadns.net
          wwwds.cisco.com.edgekey.net
          wwwds.cisco.com.edgekey.net.globalredir.akadns.net
```

<hr class="dividerExample" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The <span class="emphasis">Aliases</span> list shows a chain of CNAME records, each pointing to the next, before ultimately resolving to a real server.</li>
    <li>Both IPv6 and IPv4 addresses can be returned in the same lookup.</li>
    <li>The result is labeled non-authoritative, meaning it came from the resolver's cache rather than a fresh query to an authoritative server.</li>
  </ul>
</div>

<hr class="dividerSubsection2" />

#### Exiting Interactive Mode

<hr class="dividerSubsection2" />

The <span class="emphasis">exit</span> command leaves interactive mode and returns to the normal command line.

<hr class="dividerExample" />

```shell  
>exit
```

<hr class="dividerExample" />

<hr class="dividerSubsection2" />

#### Direct Query Mode

<hr class="dividerSubsection2" />

A domain name can be added directly to the <span class="emphasis">nslookup</span> command for a single, one-shot query, without entering or exiting interactive mode.

<hr class="dividerExample" />

```shell  
C:\>nslookup www.google.com
Server:  UnKnown
Address:  10.10.10.1
Non-authoritative answer:
Name:    www.google.com
Addresses:  2607:f8b0:4000:80f::2004
          172.217.12.36
```

<hr class="dividerExample" />

<hr class="dividerSubsection2" />

#### nslookup on Linux

<hr class="dividerSubsection2" />

<span class="emphasis">nslookup</span> behaves the same way on Linux, though the default server address shown will depend on how that particular system resolves DNS locally.

<hr class="dividerExample" />

```shell  
user@cisconetacad$nslookup
Server: 127.0.1.1
Address: 127.0.1.1#53

>www.cisco.com
Non-authoritative answer:
www.cisco.com canonical name = www.cisco.com.akadns.net.
www.cisco.com.akadns.net canonical name = wwwds.cisco.com.edgekey.net.
wwwds.cisco.com.edgekey.net canonical name = wwwds.cisco.com.edgekey.net.globalredir.akadns.net.
wwwds.cisco.com.edgekey.net.globalredir.akadns.net canonical name = e144.dscb.akamaiedge.net.
Name: e144.dscb.akamaiedge.net
Address: 23.60.112.170

>exit
```

<hr class="dividerExample" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Linux's <span class="emphasis">nslookup</span> spells out each step of the CNAME chain explicitly with <span class="codeSnip">canonical name =</span>, rather than listing them together under a single <span class="emphasis">Aliases</span> heading, but it represents the same underlying resolution process.</li>
  </ul>
</div>

<hr class="dividerExample" />

```shell  
user@cisconetacad$nslookup www.google.com
Server:  127.0.0.53
Address:  127.0.0.53#53
Non-authoritative answer:
Name:  www.google.com
Address: 172.217.6.164
Name:  www.google.com
Address: 2607:f8b0:4000:812::2004
```

<hr class="dividerExample" />

<hr class="dividerSubsection1" />

### dig

<hr class="dividerSubsection1" />

<span class="emphasis">dig</span> retrieves detailed DNS query results.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Example: <span class="emphasis">dig www.example.com</span></li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### ipconfig /displaydns

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Shows cached DNS records on Windows.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/basics/web-and-name/http-https">← Back</a>
    <div class="xrefTitle">Application Layer - Web & Name Resolution - HTTP/HTTPS</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tcpip-model/layers/application/basics/client-and-server-roles/fundamentals">Next →</a>
    <div class="xrefTitle">Section: Application Layer - Client & Server Roles - Fundamentals</div>
  </div>
</div>