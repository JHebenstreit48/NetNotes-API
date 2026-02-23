<hr class="dividerMain">

# Packet Tracer - Projects & Saves

<hr class="dividerMain">

Packet Tracer files are how you store topologies, configurations, and activity work so you can reopen them later or share them with others.

<hr class="dividerSection" />

### Common File Types

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">File Type</th>
      <th class="tableCellHeader">What It Is Used For</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">.pkt</td>
      <td class="tableCell">Standard project file (topology + device configs + saved state)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">.pka</td>
      <td class="tableCell">Packet Tracer activity file (often includes instructions + grading logic)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">.pkz</td>
      <td class="tableCell">Compressed project bundle used for sharing collections of Packet Tracer content</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

### Saving Best Practices

<hr class="dividerSection" />

Recommended habits:

- Save early, then save often  
- Use meaningful names so older versions are easy to identify  
- Keep one folder per lab or concept to avoid mixing unrelated files  

A simple naming pattern that stays readable:

- <span class="emphasis">topic-shortname</span> + <span class="emphasis">lab-number</span> + <span class="emphasis">version</span>  
- Example idea (pattern only): routing-lab01-v1, routing-lab01-v2, routing-lab02-v1  

If you are following a guided activity (.pka), consider saving your work as a separate .pkt copy as well (when allowed), so you can reuse the topology later without the activity wrapper.

<hr class="dividerSubsection1" />

### Version Compatibility Tips

<hr class="dividerSubsection1" />

Packet Tracer versions can differ in:

- Device availability  
- Features and menus  
- Activity grading behavior  

If someone says “this file won’t open,” the most common causes are:

- The project was created in a newer Packet Tracer version  
- The activity expects a specific version  
- Missing device support in the older installation  

Best practice when sharing:

- Include your Packet Tracer version in a README note  
- Keep a copy exported/saved in the version your class or group is using  

<hr class="dividerSection" />

### Organizing Labs Like a Pro

<hr class="dividerSection" />

A clean folder structure makes reviewing labs later much easier:

- Group by <span class="emphasis">topic</span> (switching, routing, ACLs, VLANs, etc.)  
- Inside each topic, group by <span class="emphasis">lab</span> or <span class="emphasis">lesson</span>  
- Keep a short README note describing what the lab demonstrates  

This also makes it easier to sync to cloud storage or GitHub without losing context.

<hr class="dividerSection" />

### Saving Packet Tracer Files to GitHub

<hr class="dividerSection" />

Packet Tracer files (.pkt/.pka/.pkz) are typically <span class="emphasis">binary files</span>, which means:

- Git can store them, but it cannot show meaningful line-by-line diffs  
- You should rely on versioning, commit messages, and documentation  

Recommended workflow:

- Store Packet Tracer files inside a dedicated folder in your repo  
- Add a README next to them describing:
  - Lab goal  
  - Key commands used  
  - What the topology demonstrates  
  - Any assumptions (IP plan, VLANs, routing protocol, etc.)  

If files become large or you have many versions, consider using <span class="emphasis">Git LFS</span> so your repository stays manageable.

Practical collaboration tip:

- Treat Packet Tracer files like “build artifacts” and document the changes in the README:
  - “Added VLAN 10/20 and trunk ports”
  - “Converted static routes to OSPF”
  - “Fixed default gateway on PCs”
  - “Validated with simulation PDU tests”

<hr class="dividerSection" />

### 📎 Related Topics

<hr class="dividerSection" />

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/packettracer/basics/workspace-and-views/logical-vs-physical">
    Packet Tracer → Basics → Workspace & Views → Logical vs Physical
  </a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/packettracer/basics/fundamentals/install-and-interface">← Back</a>
    <div class="xrefTitle">Packet Tracer - Fundamentals - Install & Interface</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/packettracer/basics/workspace-and-views/logical-vs-physical">Next →</a>
    <div class="xrefTitle">Section: Packet Tracer - Workspace & Views - Logical vs Physical</div>
  </div>
</div>