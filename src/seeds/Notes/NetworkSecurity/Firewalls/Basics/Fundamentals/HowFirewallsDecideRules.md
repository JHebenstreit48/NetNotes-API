# How Firewalls Decide: Rules & Policies

<hr class="dividerSection" />

### Rules Determine What Passes and What Doesn't

<hr class="dividerSection" />

A firewall must be configured with <span class="emphasis">security rules</span> to determine which network traffic should be allowed and which should be denied.

Without configured rules, a firewall has no basis for deciding what to permit or block.

<hr class="dividerSection" />

### What This Section Builds Toward

<hr class="dividerSection" />

This concept, rules deciding allow-or-deny outcomes, is the foundation for the more specific mechanisms covered later in this section:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Stateful inspection</span>, tracking connection state to make more intelligent rule decisions</li>
    <li><span class="emphasis">NAT</span>, translating addresses as traffic crosses the rule boundary</li>
    <li><span class="emphasis">Zone-based policies</span>, applying different rule sets depending on where traffic originates and where it's headed</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/firewalls/basics/fundamentals/types-of-firewalls">← Back</a>
    <div class="xrefTitle">Firewalls - Basics - Fundamentals - Types of Firewalls</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/firewalls/basics/nat-fundamentals">Next →</a>
    <div class="xrefTitle">Section: Firewalls -  Basics - Stateful & Nat - NAT Fundamentals</div>
  </div>
</div>