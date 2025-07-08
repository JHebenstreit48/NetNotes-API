## Internet Layer (Layer 3)

The **Internet Layer** is responsible for addressing and routing data across networks.

### Layer 3 Header
- The **Layer 3 Header** contains:
  - <span class="emphasis">Source Address</span>: Where the packet originates.
  - <span class="emphasis">Destination Address</span>: Where the packet is going.
- These addresses enable proper packet routing across networks.

### Addressing Analogies
- **Network Address**: Like a <span class="secondEmphasis">street name</span>, providing a general location.
- **Host Address**: Like a <span class="secondEmphasis">house number</span>, uniquely identifying a device.
- Example IPv4 Address:
  - <span class="examples">10.10.0.50</span> (Street: <span class="examples">10.10.0</span>, House: <span class="examples">.50</span>)

### IPv4 and IPv6
- **IPv4**:
  - Most common format: <span class="examples">xxx.xxx.xxx.xxx</span> (e.g., <span class="examples">192.168.1.1</span>).
- **IPv6**:
  - Newer format: Uses eight groups of hexadecimal numbers.

### Verifying IP Address
- How to verify the local IP address:
  - **Windows**: Use the <span class="examples">ipconfig</span> command in the Command Prompt.
  - **Mac**: Use the <span class="examples">ifconfig</span> command in Terminal.
  - **Linux/Ubuntu**: Use the <span class="examples">ip addr</span> or <span class="examples">ifconfig</span> command in Terminal.

### Subnet Mask and Default Gateway
- **Subnet Mask**:
  - Defines which part of an IP address represents the network and which part represents the host.
  - Example: <span class="examples">255.255.255.0</span>.
- **Default Gateway**:
  - Often referred to as the router. Directs packets to other networks.
  - Example: If the device’s IP is <span class="examples">192.168.1.10</span>, the Default Gateway might be <span class="examples">192.168.1.1</span>.

### DNS Commands
- **ipconfig /flushdns**:
  - Clears the DNS resolver cache to remove outdated or incorrect entries.
- **ipconfig /displaydns**:
  - Displays cached DNS records, including:
    - **Domain Name**: <span class="examples">example.com</span>
    - **A (Host) Records**: Multiple IPs may be shown for redundancy or load balancing.

### ping
- Tests network connectivity by sending packets to a destination.
- Example:
  - <span class="examples">ping google.com</span>: Sends packets to <span class="examples">google.com</span> to verify reachability.

---
