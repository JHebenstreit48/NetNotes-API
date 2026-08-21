## Application Layer: Basics

<hr class="dividerSection" />

## NTP (Network Time Protocol)

<hr class="dividerSection" />

<span class="emphasis">NTP</span> (Network Time Protocol) is an application layer protocol used to synchronize the clocks of devices across a network to a common time source, operating over <span class="codeSnip">UDP port 123</span>.

### Stratum Levels

<hr class="dividerSubsection2" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Stratum 0</span>, the reference clock (atomic clock, GPS)</li>
    <li><span class="emphasis">Stratum 1</span>, directly connected to a Stratum 0 source</li>
    <li><span class="emphasis">Stratum 2+</span>, each level syncs from the level above</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <!-- <div class="xrefItem">
    <a class="xrefBtn" href="">← Back</a>
    <div class="xrefTitle"></div>
  </div> -->

  <div class="xrefItem">
    <a class="xrefBtn" href="/glossary/networking/tcp-ip-model/application/web-and-dns">Next →</a>
    <div class="xrefTitle">Glossary - TCP/IP Model - Application - Web & DNS</div>
  </div>
</div>