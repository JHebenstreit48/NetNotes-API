<hr class="dividerMain">

# Wireshark - Install & Profiles

<hr class="dividerMain">

Wireshark is a <span class="emphasis">network protocol analyzer</span> used to capture and inspect network traffic.

Common reasons to use Wireshark:

- <span class="emphasis">Troubleshooting</span> network issues  
- <span class="emphasis">Analyzing</span> traffic flow and patterns  
- <span class="emphasis">Debugging</span> protocol behavior  

It can capture traffic in real time or open previously saved capture files for analysis.

<hr class="dividerSection" />

### Install Basics

<hr class="dividerSection" />

Wireshark is available on multiple platforms.

General install notes:

- Use the official Wireshark download for your OS  
- On Windows, packet capture typically requires <span class="emphasis">Npcap</span> (commonly installed alongside Wireshark)  
- On Linux/macOS, packet capture permissions may require additional setup depending on how your system is configured  

After installation, confirm:

- Wireshark launches correctly  
- Your capture interfaces appear in the capture screen  
- You can start and stop a test capture  

<hr class="dividerSection" />

### What Profiles Are

<hr class="dividerSection" />

Wireshark <span class="emphasis">profiles</span> let you save and switch between different interface configurations, such as:

- Custom column layouts  
- Coloring rules  
- Display filter buttons  
- Protocol preferences and decode settings  

This is useful when you want different setups for different tasks, for example:

- A profile focused on <span class="emphasis">DNS troubleshooting</span>  
- A profile focused on <span class="emphasis">TCP performance</span>  
- A profile for <span class="emphasis">security review</span> and suspicious traffic  

<hr class="dividerSection" />

### Suggested Starter Profiles

<hr class="dividerSection" />

A simple starter set (optional):

- <span class="emphasis">Default</span>: minimal changes  
- <span class="emphasis">Troubleshooting</span>: extra columns (Source/Dest, Protocol, Info, TCP stream) + useful coloring  
- <span class="emphasis">Web</span>: HTTP/HTTPS focus, SNI/Host visibility where possible  

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/gns3/advanced/automation-and-apis/gns3-rest-api">← Back</a>
    <div class="xrefTitle">Topic: GNS3 - Advanced - Automation & APIs - GNS3 REST API</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/wireshark/basics/fundamentals/capture-interfaces">Next →</a>
    <div class="xrefTitle">Wireshark - Fundamentals - Capture Interfaces</div>
  </div>
</div>