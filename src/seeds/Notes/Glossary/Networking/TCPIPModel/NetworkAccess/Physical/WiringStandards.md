# Glossary - Network Access - Physical - Wiring Standards

<hr class="dividerSection" />

### T568A / T568B

<hr class="dividerSubsection1" />

The two wiring standards defining the order of the 8 color-coded wires inside an RJ-45 connector for twisted-pair Ethernet cabling.  

Wire order determines signal integrity, pair matching, and cable type.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">T568A</span>, pins 1-2 White/Green + Green, pins 3-6 White/Orange + Orange</li>
    <li><span class="emphasis">T568B</span>, pins 1-2 White/Orange + Orange, pins 3-6 White/Green + Green</li>
    <li>Pins 4/5 (Blue pair) and 7/8 (Brown pair) are identical in both standards.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Straight-Through Cable

<hr class="dividerSubsection1" />

A cable using the same wiring standard on both ends (T568A-to-T568A or T568B-to-T568B), so each pin connects to the same pin number on the opposite end.  

Used to connect dissimilar devices, PC to Switch, Router to Switch, PC to Router.

<hr class="dividerSubsection1" />

### Crossover Cable

<hr class="dividerSubsection1" />

A cable using a different wiring standard on each end (T568A on one, T568B on the other), reversing pin 1↔3 and pin 2↔6.  

Used to connect similar devices directly, PC to PC, Switch to Switch, Router to Router.  

At 1000BASE-T/10GBASE-T, all four pairs are bidirectional, so this fixed transmit/receive distinction no longer applies.

<hr class="dividerSubsection1" />

### Auto MDI-X

<hr class="dividerSubsection1" />

A feature on most modern networking equipment that automatically detects which pins a connected device is transmitting on and adjusts its own transmit/receive pins to match.  

Removes the need to choose the correct cable type (straight-through vs crossover) in most cases.

<hr class="dividerSubsection1" />

### Terminating Ethernet

<hr class="dividerSubsection1" />

The process of attaching an RJ-45 connector to a twisted-pair cable, requiring wires fully seated, correctly ordered per T568A/B, and the jacket secured inside the connector.  

Poor termination causes link failures, packet loss, reduced speeds, or intermittent connectivity.

<hr class="dividerSection" />

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/wiring-standards/t568a-vs-t568b" target="_blank" rel="noopener noreferrer">Physical → Wiring Standards → T568A vs T568B</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/wiring-standards/straight-through-vs-crossover" target="_blank" rel="noopener noreferrer">Physical → Wiring Standards → Straight-Through vs Crossover</a><br />
  <a href="/networking/tcp-ip-model/layers/network-access/basics/physical/wiring-standards/terminating-ethernet" target="_blank" rel="noopener noreferrer">Physical → Wiring Standards → Terminating Ethernet</a>
</div>

<hr class="dividerSection" />