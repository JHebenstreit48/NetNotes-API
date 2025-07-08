## Layer 2: Data Link Layer

### **What is Layer 2?**
   - Layer 2 is known as the **Data Link Layer** in the TCP/IP stack.

### **Primary Role of Layer 2**
   - The main component handled at Layer 2 is the **source and destination MAC addresses**.
   - These addresses are essential for the frame that will be sent out from the **Network Interface Card (NIC)**.

### **Physical Connections**
   - Layer 2 deals with physical connections between devices, such as:
     - **Devices hard-wired to a switch.**
     - **Devices connected wirelessly** to a network.

### **Network Interface Card (NIC)**
   - The **Network Interface Card (NIC)** is the hardware component that allows a device to communicate with the internet.

### **Burned-In Address**
   - Every NIC has its own **burned-in address**, which is assigned by the manufacturer or factory.
   - These burned-in addresses are **unique** for each NIC.

### **Alternative Names for the Burned-In Address**
   - The burned-in address is also referred to as:
     - **MAC Address**
     - **Ethernet Address**
     - **Physical Address**
     - **Layer 2 (L2) Address**
     - **Burned-In Address (BIA)**

### **Burned-In Address Format**
   - The burned-in address:
     - Is **12 digits long**.
     - Written in **hexadecimal format**.
     - Each pair of digits is separated by a **colon** (e.g., 12:34:56:78:9A:BC).

### **Burned-In Address Bit Length**
   - The burned-in address represents a **48-bit address**.

### **Unique Addresses**
   - It is the responsibility of the manufacturer to ensure all burned-in addresses are **unique**.

### **Layer 2 Responsibilities**
   - **Framing:** Encapsulates data into frames for transmission.
   - **Error Detection:** Uses mechanisms like **Cyclic Redundancy Check (CRC)** to detect transmission errors.
   - **Flow Control:** Manages data flow between devices to prevent data loss.

### **Layer 2 Protocols**
   - **Ethernet (Wired):** The most common Layer 2 protocol for wired connections.
   - **Wi-Fi (802.11):** A widely used protocol for wireless connections.

### **Role in Packet Delivery**
   - Layer 2 ensures the delivery of frames between devices within the **same local network** (e.g., within the same subnet).
   - For packets destined for devices outside the local network, Layer 2 forwards the data to the **default gateway (router)**.

### **Layer 2 Header Information**
   - Before a computer or device sends traffic onto the network, the **Layer 2 Header** includes:
     - The **source Layer 2 address** of the device sending the data.
     - The **destination Layer 2 address** of the next device the data packet needs to be forwarded to.

### **Viewing Layer 2 Addresses (MAC Addresses)**
   - **Windows:**
     - Use ipconfig /all or ipconfig -all to view:
       - NIC information.
       - Layer 3 information (e.g., IP address).
       - Layer 2 burned-in (MAC) address.
   - **Linux/Ubuntu:**
     - Use ip link show or ifconfig -a to view:
       - Network interface details.
       - MAC address labeled as link/ether or ether.
   - **macOS:**
     - Use ifconfig in the Terminal to view:
       - Network interface details.
       - MAC address labeled as ether.

### **Address Resolution Protocol (ARP)**
   - **ARP Overview:**
     - ARP stands for **Address Resolution Protocol**.
     - It is considered the **Layer 2 equivalent of DNS**, responsible for mapping IP addresses to MAC addresses.
   - **Viewing ARP Cache:**
     - **Windows:**
       - Use arp -a to display all cached ARP entries.
       - Typing arp alone displays the available ARP options.
     - **Linux/Ubuntu:**
       - Use ip neigh show or arp -n to display the ARP table.
       - Typing arp without arguments typically displays usage instructions or an error message.
     - **macOS:**
       - Use arp -a to display the ARP table.
       - Typing arp without arguments displays usage information.
   - **Other ARP Commands:**
     - **Windows:**
       - arp -d [IP address]: Deletes a specific ARP entry.
       - arp -s [IP address] [MAC address]: Adds a static ARP entry.
     - **Linux/Ubuntu:**
       - arp -d [IP address] or ip neigh del [IP address] dev [interface]: Deletes an ARP entry.
     - **macOS:**
       - arp -d [IP address]: Deletes an ARP entry.
       - arp -s [IP address] [MAC address]: Adds a static ARP entry.

### **Analogy: Community Mailbox and Burned-In Addresses**
   - **Street and Houses:**
     - Imagine a street with houses having unique host addresses (e.g., .51, .52, .53).
   - **Community Mailbox:**
     - All houses share a mailbox, and each slot corresponds to a specific house.
     - Mapping determines which slot matches which house.
   - **Burned-In Addresses:**
     - Slots in the mailbox represent the burned-in addresses (e.g., MAC addresses).
---
