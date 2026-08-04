# SIP vs RTP

<hr class="dividerSection" />

VoIP calls rely on two separate protocols working together, one to handle the call setup and one to carry the actual voice data.

<hr class="dividerSection" />

### SIP (Session Initiation Protocol)

<hr class="dividerSection" />

<span class="emphasis">SIP</span> is a text-based <span class="secondEmphasis">application layer signaling protocol</span> used to initiate, manage, and terminate VoIP calls and multimedia sessions.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Handles call setup, ringing, answering, and teardown</li>
    <li>Does not carry the actual voice data</li>
    <li>Works alongside RTP which handles media transport</li>
    <li>Operates over UDP on port <span class="codeSnip">5060</span></li>
    <li>Operates over TLS on port <span class="codeSnip">5061</span> for encrypted signaling</li>
  </ul>
</div>

<hr class="dividerSection" />

### RTP (Real-Time Transport Protocol)

<hr class="dividerSection" />

<span class="emphasis">RTP</span> is a network protocol used to deliver <span class="secondEmphasis">audio and video</span> over IP networks in real time.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Carries the actual voice or video payload during a VoIP call</li>
    <li>Operates over UDP using dynamically assigned even-numbered ports, commonly in the range <span class="codeSnip">16384</span> to <span class="codeSnip">32767</span></li>
    <li>Does not guarantee delivery or ordering, relying on the application layer to handle quality</li>
  </ul>
</div>

<hr class="dividerSection" />

### RTCP (Real-Time Transport Control Protocol)

<hr class="dividerSection" />

<span class="emphasis">RTCP</span> is a companion protocol to RTP that provides <span class="secondEmphasis">out-of-band statistics and control information</span> for an RTP session.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Monitors transmission quality and provides feedback on packet loss, jitter, and round-trip delay</li>
    <li>Does not carry media itself, only monitors and reports on the RTP stream</li>
    <li>Operates on the odd-numbered port immediately above the RTP port</li>
    <li>For example, if RTP uses port <span class="codeSnip">16384</span>, RTCP uses <span class="codeSnip">16385</span></li>
  </ul>
</div>

<hr class="dividerSection" />

### SRTP (Secure Real-Time Transport Protocol)

<hr class="dividerSection" />

<span class="emphasis">SRTP</span> is an encrypted version of RTP that provides <span class="secondEmphasis">confidentiality, message authentication, and replay protection</span> for voice and video streams.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Uses AES encryption to protect media content in transit</li>
    <li>Often paired with SDES (Session Description Protocol Security Descriptions) or DTLS for key exchange</li>
  </ul>
</div>

<hr class="dividerSection" />

### How SIP and RTP Work Together

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">SIP</span> sets up the call, negotiates parameters, and tears it down when finished</li>
    <li><span class="emphasis">RTP</span> carries the actual voice or video data during the call</li>
    <li><span class="emphasis">RTCP</span> monitors the quality of the RTP stream throughout the call</li>
    <li><span class="emphasis">SRTP</span> replaces RTP when encryption is required</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/voip/introduction/basics/fundamentals/core-components">← Back</a>
    <div class="xrefTitle">Section: VoIP - Basics - Fundamentals - Core Components</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/voip/introduction/basics/call-basics/basic-call-flow">Next →</a>
    <div class="xrefTitle">VoIP Call Basics - Basic Call Flow</div>
  </div>
</div>