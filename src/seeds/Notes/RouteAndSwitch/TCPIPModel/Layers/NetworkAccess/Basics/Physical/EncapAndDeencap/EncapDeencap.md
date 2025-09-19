### The Process of Encapsulation
- **Encapsulation**:
  - Begins at the **Application Layer** and continues downward through:
    1. **Transport Layer (Layer 4)**.
    2. **Network Layer (Layer 3)**.
    3. **Data Link Layer (Layer 2)**.
    4. **Physical Layer (Layer 1)**.
  - Each layer adds its own **header** or **information** to the data.
  - This process happens when a **client** or **device** makes a request.

### The Process of De-encapsulation
- **De-encapsulation**:
  - Happens in reverse when the **traffic** is delivered to the **server**.
  - Starts at **Layer 1** and moves upward through:
    1. **Data Link Layer (Layer 2)**.
    2. **Network Layer (Layer 3)**.
    3. **Transport Layer (Layer 4)**.
    4. **Application Layer**.
  - The **server** removes each layer's **header** or **information** as the traffic moves up the stack.

- After **de-encapsulation**, the **server** can process the **request** and send a **response** to the **client**.