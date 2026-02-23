<hr class="dividerMain">

# Wireless Spectrum Basics

<hr class="dividerMain">

Wireless networking technologies use portions of the <span class="emphasis">electromagnetic spectrum</span> to transmit data without physical cables.

Different technologies operate at different frequencies depending on:

- Required range  
- Throughput needs  
- Regulatory rules  

Certain portions of the spectrum can be used without a license, provided devices follow power and protocol limitations.

<hr class="dividerSection" />

## Licensed vs Unlicensed Spectrum

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Spectrum Type</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Licensed</td>
      <td class="tableCell">Reserved and regulated for specific providers (for example, cellular carriers).</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Unlicensed</td>
      <td class="tableCell">Open for public use under defined power and usage rules (for example, Wi-Fi and Bluetooth).</td>
    </tr>
  </tbody>
</table>

Most home wireless technologies operate in <span class="emphasis">unlicensed bands</span>.

<hr class="dividerSubsection1" />

### Common Home Wireless Bands

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Frequency Band</th>
      <th class="tableCellHeader">Typical Uses</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">2.4 GHz</td>
      <td class="tableCell">Wi-Fi (802.11 b/g/n), Bluetooth, various IoT devices</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">5 GHz</td>
      <td class="tableCell">Wi-Fi (802.11 a/n/ac/ax)</td>
    </tr>
  </tbody>
</table>

The <span class="emphasis">2.4 GHz</span> band:

- Provides greater range  
- Has fewer non-overlapping channels  
- Is more prone to congestion  

The <span class="emphasis">5 GHz</span> band:

- Supports more non-overlapping channels  
- Offers higher throughput potential  
- Typically provides shorter range than 2.4 GHz  

<hr class="dividerSubsection1" />

### Bluetooth vs Wi-Fi in 2.4 GHz

<hr class="dividerSubsection1" />

Both Bluetooth and Wi-Fi may operate in the 2.4 GHz band, but they are designed for different purposes.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Technology</th>
      <th class="tableCellHeader">Primary Design Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Bluetooth</td>
      <td class="tableCell">Low power, short-range device connectivity</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Wi-Fi (802.11)</td>
      <td class="tableCell">Higher throughput, LAN and internet access</td>
    </tr>
  </tbody>
</table>

Wi-Fi typically uses higher transmit power and supports infrastructure-based networking through access points.

<hr class="dividerSection" />

## Channels Within Frequency Bands

<hr class="dividerSection" />

Each frequency band is divided into smaller segments called <span class="emphasis">channels</span>.

Channels allow multiple wireless networks to operate within the same band.

Proper channel selection helps reduce:

- Interference  
- Channel overlap  
- Performance degradation  

Channel planning becomes especially important in dense environments such as apartments, offices, and campuses.

<hr class="dividerSubsection1" />

### Why Band Selection Matters

<hr class="dividerSubsection1" />

Choosing between 2.4 GHz and 5 GHz impacts:

- Speed  
- Coverage area  
- Interference levels  
- Device compatibility  

Modern wireless routers may support <span class="emphasis">band steering</span>, encouraging capable devices to connect to 5 GHz when appropriate.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/wireless/advanced/rf-performance/band-steering-and-load-balance">
    Wireless → Advanced → RF & Performance → Band Steering & Load Balance
  </a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/wireless/basics/80211/wireless-standards">← Back</a>
    <div class="xrefTitle">Wireless - 802.11 Fundamentals - Wireless Standards</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/wireless/basics/architecture/bss-ess-ssid">Next →</a>
    <div class="xrefTitle">Section: Wireless - WLAN Architecture - BSS/ESS/SSID</div>
  </div>
</div>