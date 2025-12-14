## Burned-In Address (BIA)

---

### What Is a Burned-In Address?

A **Burned-In Address (BIA)** is a permanent hardware identifier assigned to a device’s **Network Interface Card (NIC)**.  
It’s more commonly called a **MAC address** and is used by Layer 2 for device identification and local delivery.

---

### Other Names for the BIA

You may hear it referred to as:

- **MAC Address**
- **Ethernet Address**
- **Physical Address**
- **Layer 2 Address**
- **BIA (Burned-In Address)**

They all mean the same thing — a unique Layer 2 address.

---

### Format and Bit Length

- The BIA is **48 bits**, or **6 bytes** long  
- It’s written in **hexadecimal**, usually with colons or hyphens

Example:  
<span class="emphasis">12:34:56:78:9A:BC</span>

Each pair represents 1 byte (8 bits) of the full address.

---

### NICs and Device Identification

Every device has a **Network Interface Card (NIC)** — the component that connects it to a network.  
Each NIC is assigned a unique MAC address by the manufacturer, making it possible to identify devices on a local area network.

This address never changes unless manually spoofed.

---

### Physical Connections

Layer 2 operates over both:

- **Wired connections** (Ethernet cables to a switch)  
- **Wireless connections** (Wi-Fi signals to an access point)

Regardless of the medium, MAC addresses are required for local delivery.

---

### MAC Address Uniqueness

Manufacturers are responsible for assigning **globally unique** MAC addresses.  
The first half of the address identifies the manufacturer (OUI), and the second half is a device-specific value.

This helps prevent conflicts between devices on the same network.

---

### Real-World Analogy: Community Mailboxes

Think of a:

- **Neighborhood** with houses (IP addresses)  
- **Shared mailbox station** with labeled slots (MAC addresses)

You drop a letter addressed to house .51, and the mailbox system maps it to the correct slot — like how ARP maps IPs to MACs and Layer 2 handles local delivery.

---

### Summary

The Burned-In Address is the Layer 2 "name tag" for every networked device.  
It ensures reliable local delivery and is foundational to Ethernet and Wi-Fi networks.  
Without it, no device would know who’s who on the local segment.

---