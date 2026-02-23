<hr class="dividerMain">

# Wireshark - Capture Filters

<hr class="dividerMain">

<span class="emphasis">Capture filters</span> reduce what Wireshark captures in the first place.

They are useful when you want smaller captures, but they are less flexible than display filters because you cannot “bring back” packets that were never captured.

<hr class="dividerSection" />

### Capture Filter Basics

<hr class="dividerSection" />

Capture filters commonly use a BPF-style syntax (Berkeley Packet Filter).

Typical use cases:

- Capturing only DNS traffic  
- Capturing only traffic for one host  
- Capturing only a specific port  

<hr class="dividerSection" />

### Common Examples

<hr class="dividerSection" />

- DNS only: <span class="emphasis">udp port 53</span>  
- HTTP only: <span class="emphasis">tcp port 80</span>  
- HTTPS only: <span class="emphasis">tcp port 443</span>  
- One host (either direction): <span class="emphasis">host 192.168.1.10</span>  
- Traffic to/from a network: <span class="emphasis">net 192.168.1.0/24</span>  
- ICMP only: <span class="emphasis">icmp</span>  

<hr class="dividerSection" />

### When to Use Capture Filters

<hr class="dividerSection" />

Good times to use capture filters:

- You are on a very busy network and only need a single protocol  
- You are capturing for a long time and want smaller files  
- You are troubleshooting one device and want only its traffic  

If you are learning or doing general analysis, it is often better to:

- Capture broadly  
- Use <span class="emphasis">display filters</span> to drill down later  

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/wireshark/basics/filters/display">← Back</a>
    <div class="xrefTitle">Wireshark - Filters - Display Filters</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/wireshark/basics/views-and-tools/packet-bytes-tree">Next →</a>
    <div class="xrefTitle">Section: Wireshark - Views & Tools - Packet/Bytes/Tree</div>
  </div>
</div>