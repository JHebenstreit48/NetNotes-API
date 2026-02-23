<hr class="dividerMain">

# Wireshark - Capture Interfaces

<hr class="dividerMain">

Capturing packets starts with selecting the correct <span class="emphasis">network interface</span>.

Common interfaces you might see:

- Ethernet (wired)  
- Wi-Fi (wireless)  
- VPN adapters  
- Virtual machine adapters  
- Loopback (host-only traffic, if supported/configured)  

<hr class="dividerSection" />

### Choosing the Right Interface

<hr class="dividerSection" />

A quick way to pick the correct interface:

- Look for the interface showing <span class="emphasis">activity</span> (packets moving)  
- Match the interface type to your connection (Wi-Fi vs Ethernet)  
- Disable or ignore unused adapters to reduce confusion  

If your capture shows “nothing,” common causes include:

- Wrong interface selected  
- Traffic is occurring on a different adapter (VPN/VM)  
- You are only expecting traffic that is encrypted or not being generated  
- Permissions/capture driver issues (especially on Windows)  

<hr class="dividerSection" />

### Capture Workflow Basics

<hr class="dividerSection" />

Typical workflow:

- Select the correct interface  
- Start capture  
- Generate the traffic you care about (browse a site, run a ping, do a DNS lookup, etc.)  
- Stop capture  
- Use <span class="emphasis">display filters</span> to isolate relevant packets  

<hr class="dividerSection" />

### Saved Captures

<hr class="dividerSection" />

Wireshark can open previously captured traffic (commonly .pcap or .pcapng files). This is useful when:

- You want to share a capture with someone else  
- You want to repeat analysis without re-capturing  
- You are working a problem from logs/lab files  

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/wireshark/basics/fundamentals/install-and-profiles">← Back</a>
    <div class="xrefTitle">Wireshark - Fundamentals - Install & Profiles</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/wireshark/basics/filters/display">Next →</a>
    <div class="xrefTitle">Next Section: Wireshark - Filters - Display Filters</div>
  </div>
</div>