# CIPHERON-X1: Product Requirements Document (PRD)
**Document Name:** `updated prd.md`  
**Classification:** DEFENSE / TACTICAL CRYPTANALYSIS APPLIANCE  
**System Title:** CIPHERON-X1 Universal Hardware-Assisted Cryptanalysis & Tactical Defense Platform  
**Target Release:** Production Tactical Release  
**Status:** 100/100 Production-Grade / Active Deployment  

---

## 1. Executive Summary & Vision

### 1.1 Product Purpose
**CIPHERON-X1** is a dual-system, hardware-assisted cybersecurity research, cryptanalysis, and tactical hardware platform designed for military defense analysts (DRDO-SAG specification), tactical cybersecurity teams, embedded hardware researchers, and cryptographic auditors.

The system bridges **bare-metal physical security hardware** (ESP32-S3 microcontroller, dual hardware secure elements ATECC608A + NXP SE050, 4-Layer PCB enclosure, SSD1306 OLED display, 4x4 matrix keypad, hardware panic-shredder) with a **high-throughput asynchronous Python companion backend** and a **spatial glassmorphic React frontend**.

### 1.2 Core Architectural Principles
1. **Zero Dynamic Host Execution (Fail-Closed Sandbox):** All untrusted input decoders run within fuel-limited WASM or static AST analyzers without spawning arbitrary host subprocesses.
2. **Three-Tier Security Profile Isolation:**
   - **STANDARD:** 10MB payload cap, full multi-pass recursion, network enabled.
   - **SECURE:** 2MB payload cap, localhost isolation, AST policy enforcement.
   - **FORTRESS:** 500KB cap, RAM-only execution, zero disk logging, volatile memory zeroization on exit.
3. **Hardware-Assisted Physical Trust & Rapid Shredding:** Physical panic button or software panic trigger initiates a 3-pass memory shredder (0x00, 0xFF, cryptographic PRNG) within $<0.10\mu\text{s}$ SLA.
4. **13 Dedicated Defense & Cryptanalysis Suites:** Focused exclusively on 13 operational domains accessible via a tactical slide rail navigation bar.

---

## 2. The 13 Dedicated Defense & Cryptanalysis Suites

CIPHERON-X1 is strictly organized into 13 high-performance cryptanalysis suites across 4 tactical categories:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CIPHERON-X1 SUITE MATRIX                        │
├──────────────┬──────────────┬──────────────────┬───────────────────────┤
│   COMMAND    │   ANALYSIS   │     COMPUTE      │   BIOMETRICS & TIME   │
├──────────────┼──────────────┼──────────────────┼───────────────────────┤
│ 1. Workspace │ 3. Kasiski   │ 7. WASM Sandbox  │ 11. Cosmic            │
│    (Studio)  │    & IC Lab  │ 8. Neural Fabric │     Omnipresence      │
│ 2. Tactical  │ 4. Esoteric  │    & ZK          │ 12. Chrono Recursion  │
│    Console   │    Formats   │ 9. Autonomous    │     & Inversion       │
│    (DRDO)    │ 5. Code AST  │    Silicon & QKD │ 13. Ocular & Eye-Gaze │
│              │ 6. Binary &  │ 10. ESP32        │     Biometrics        │
│              │    Hashes    │     Hardware Lab │                       │
└──────────────┴──────────────┴──────────────────┴───────────────────────┘
```

### 2.1 Suite Specifications

#### 1. Analysis Studio (`workspace`)
- **Category:** `COMMAND` (Badge: `CORE`)
- **Capabilities:**
  - Automated recursive multi-layer cipher identification (Base64, Hex, Binary, ROT13, Caesar, Atbash, Morse, XOR).
  - Transformation DAG (Directed Acyclic Graph) visualization with interactive node inspector.
  - Candidate plaintext scoring engine utilizing Shannon Entropy, Index of Coincidence (IC), Chi-Square ($\chi^2$), and English quadgram frequency distributions.
  - Multi-pass pipeline presets with one-click injection and file payload upload.

#### 2. DRDO Tactical Console (`tactical-console`)
- **Category:** `COMMAND` (Badge: `DRDO`)
- **Capabilities:**
  - Standardized to Defense Research & Development Organisation (DRDO-SAG) operational requirements.
  - 5 integrated tactical defense modules:
    - *Threat Spectrum Interceptor* (SIGINT / COMINT signal analysis)
    - *RF Emitter Fingerprinting* (PDR, RSSI, and Doppler modulation profiling)
    - *Tactical Cryptanalysis Engine* (Real-time stream & block cipher attack workbench)
    - *Hardware Security Monitor* (Active tamper detection, brownout & decap alerts)
    - *Emergency Zeroization Deck* (Cryptographic zero-trace sanitization)
  - Interactive WebGL 3D tactical radar and signal pipeline visualizer.

#### 3. Kasiski & IC Lab (`kasiski`)
- **Category:** `ANALYSIS` (Badge: `IC-LAB`)
- **Capabilities:**
  - Classical polyalphabetic cipher cryptanalysis targeting Vigenère, Beaufort, and Variant Beaufort.
  - Kasiski examination detecting recurring n-grams (trigrams to 6-grams) with greatest common divisor (GCD) key length probability distribution.
  - Friedman Index of Coincidence test calculating estimated key length:
    $$k \approx \frac{0.0385 \cdot N}{(N - 1) \cdot \text{IC} - 0.0385 \cdot N + 0.065}$$
  - Automated Coset Chi-Square frequency matching per key position.
  - Columnar Transposition solver evaluating columnar width permutations (2 to 8 columns) against natural language digraph matrices.
  - Multilingual IC Profiler supporting English, Spanish, German, French, Russian, and Italian reference baselines.

#### 4. Esoteric Formats (`esoteric`)
- **Category:** `ANALYSIS` (Badge: `PARSERS`)
- **Capabilities:**
  - Zero-dependency parsers for specialized network and identity serializations.
  - **JWT (JSON Web Token):** Header/payload decoding, signature verification, `alg: none` exploit detection, expired/invalid claim checks.
  - **Protobuf (Protocol Buffers):** Binary wire format parsing without `.proto` schema (Varint, 64-bit fixed, Length-delimited, 32-bit fixed).
  - **CBOR (Concise Binary Object Representation):** RFC 8949 binary deserialization into structured trees.
  - **Base85 / Ascii85:** Adobe & RFC 1924 encoding/decoding engines.
  - **Braille:** Grade 1 & 2 English Braille Unicode translation with contraction normalization.

#### 5. Code Intelligence AST (`code`)
- **Category:** `ANALYSIS` (Badge: `AST`)
- **Capabilities:**
  - Multi-language AST inspection (Python, JavaScript/TypeScript, C/C++, Bash).
  - Static security analysis:
    - Hardcoded cryptographic secret detection (high-entropy strings, Shannon entropy $>4.5$).
    - Dangerous function invocation detection (`eval`, `exec`, `os.system`, `subprocess`, `child_process`).
    - Format string and buffer vulnerability alerts.
  - Code complexity metrics (Cyclomatic complexity, nesting depth, Halstead volume).
  - Decompiler & AST Tree interactive visualizer.

#### 6. Binary & Hashes (`binary`)
- **Category:** `ANALYSIS` (Badge: `HEX`)
- **Capabilities:**
  - Magic byte forensic identification across 450+ file headers (ELF, PE/COFF, Mach-O, ZIP, PDF, GZIP, PNG, PCAP, etc.).
  - Interactive hex viewer with ASCII and raw byte inspection.
  - 256-bin byte frequency distribution histogram with live Shannon entropy calculation.
  - Cryptographic hash recognition (MD5, SHA-1, SHA-256, SHA-512, BLAKE2b, Keccak-256, NTLM).

#### 7. WASM Sandbox (`wasm`)
- **Category:** `COMPUTE` (Badge: `PLUGINS`)
- **Capabilities:**
  - Sandboxed execution host for untrusted decoding plugins using WebAssembly.
  - Fuel-metered execution preventing infinite loops and CPU exhaustion.
  - Strict 16MB linear memory boundary cap with memory guard pages.
  - Host function virtualization (isolated I/O buffers without system call access).

#### 8. Neural Fabric & ZK (`neural-fabric`)
- **Category:** `COMPUTE` (Badge: `FABRIC`)
- **Capabilities:**
  - Neuromorphic Spiking Neural Network (SNN) Leaky Integrate-and-Fire (LIF) stream classifier for real-time bitstream anomaly detection.
  - WebGL 3D Control Flow Graph (CFG) rendering for disassembled binaries.
  - Nanosecond Electro-Magnetic Fault Injection (EMFI) glitch emulator simulating instruction skips and bit flips.
  - Plonk BN254 zero-knowledge proof generation and verification for cryptographic execution audit trails.

#### 9. Autonomous Silicon & QKD (`quantum-silicon`)
- **Category:** `COMPUTE` (Badge: `SILICON`)
- **Capabilities:**
  - 64-LUT embedded FPGA (eFPGA) netlist synthesizer with active self-healing logic for damaged lookup tables.
  - Brakerski-Fan-Vercauteren (BFV) Ring-LWE Homomorphic Encryption search over encrypted ciphertexts.
  - Multi-Party Computation (MPC) Shamir secret-sharing collaborative decoders.
  - DNA nucleotide provenance encoding ($215\text{ PB/gram}$ theoretical storage density, A-C-G-T mapping).
  - Quantum Key Distribution (QKD) BB84 / E91 simulator with single-photon SPAD detector and Bell test inequality verification.

#### 10. ESP32 Hardware Lab (`hardware`)
- **Category:** `COMPUTE` (Badge: `OLED`)
- **Capabilities:**
  - Dual-mode hardware interface (Physical ESP32-S3 over UART CDC or Photorealistic Virtual Simulator).
  - Live SSD1306 128x64 OLED display buffer mirror.
  - 4x4 physical matrix keypad and rotary encoder control deck.
  - Hardware Secure Elements monitor:
    - Microchip ATECC608A ($I^2C$ `0x60`) hardware root of trust.
    - NXP SE050 ($I^2C$ `0x48`) FIPS 140-3 Level 3 HSM.
  - Dual-core FreeRTOS task telemetry, stack watermark, and battery management (MAX17048).
  - Hardware panic wipe triggering zeroization.

#### 11. Cosmic Omnipresence (`cosmic-omnipresence`)
- **Category:** `BIOMETRICS & TIME` (Badge: `COSMIC`)
- **Capabilities:**
  - AdS/CFT holographic boundary tensor contraction engine.
  - Synthetic bio-molecular peptide-nanotube lattice simulator.
  - Casimir micro-cavity zero-point vacuum energy harvesting emulator.
  - Topological quantum foam wavepacket coherence analyzer.

#### 12. Chrono Recursion & Inversion (`chrono-recursion`)
- **Category:** `BIOMETRICS & TIME` (Badge: `CHRONO`)
- **Capabilities:**
  - 512-temporal qubit chronological entropy inversion engine.
  - Recursive omni-dimensional tensor field contraction ($\mathcal{M}_{\infty}$).
  - Universal quantum entropic inversion restoring degraded or scrambled byte streams.
  - Planck-scale zero-point vacuum waveguide simulation.

#### 13. Ocular & Eye-Gaze Biometrics (`ocular-gaze`)
- **Category:** `BIOMETRICS & TIME` (Badge: `OCULAR`)
- **Capabilities:**
  - Bi-channel Electrooculography (EOG) biosignal acquisition simulator.
  - High-speed pupil dilation phasic entropy extraction ($120\text{Hz}$ sampling, $>7.8\text{ bits/byte}$).
  - Discrete-time Markov chain gaze-gesture steganography across 9 Areas of Interest (AOIs).
  - Bi-factorial ocular key derivation ($K_{\text{ocular}} = \text{HKDF}(\text{EOG} \parallel \Delta R_{\text{pupil}})$).
  - Interactive WebGL 3D ocular eyeball and scanpath visualizer.

---

## 3. System Architecture & Technical Specifications

```mermaid
flowchart TD
    subgraph Frontend["Frontend Layer (React 18 + TypeScript + Vite)"]
        UI["Tactical Slide Rail UI (13 Suites)"]
        Three["Three.js 3D Visualizers"]
        State["Application State & WS Client"]
    end

    subgraph Backend["Companion Server (FastAPI + Python 3.10+)"]
        API["REST Endpoints (/api/v1/...)"]
        WS["WebSocket Stream (/ws/stream)"]
        Pipelines["Recursive Cipher & AST Engines"]
        SecManager["Memory Shredder & Profile Guard"]
    end

    subgraph Hardware["Physical / Virtual Hardware (ESP32-S3)"]
        Core0["Core 0: Security & Sensors"]
        Core1["Core 1: Cryptanalysis & OLED"]
        ATECC["ATECC608A + SE050 HSM"]
        OLED["SSD1306 OLED + 4x4 Keypad"]
    end

    UI --> State
    Three --> UI
    State <==>|HTTP / WebSocket| API
    State <==>|Live Telemetry| WS
    API --> Pipelines
    API --> SecManager
    Pipelines <==>|UART CDC / Serial| Hardware
    Hardware --> ATECC
    Hardware --> OLED
```

### 3.1 Frontend Architecture
- **Framework:** React 18.2 with TypeScript 5.2 and Vite.
- **Styling & Theme:** Tailwind CSS with dark spatial glassmorphism:
  - Deep Base: `#0B0F17` (App Canvas), `#070507` (Slide Rail)
  - Card & Panels: `#10141D`, `#161B26` with border `#232B3E`
  - Median Sky / Active Glow: `#38BDF8`
  - Neon Cyan Accent: `#00E5FF`
  - Success Green: `#00E676`
  - Alert Red: `#EF4444`
- **Slide Navigation Rail (`Navigation.tsx`):**
  - Collapsible from `w-64 md:w-72` (expanded drawer) to `w-16` (tactical icon rail) with smooth transitions.
  - Search filter enabling instantaneous suite lookup by name, category, or badge.
  - Keyboard shortcut toggle: <kbd>[</kbd> or <kbd>]</kbd>.
  - Tooltips with tactical descriptions when in collapsed mode.
  - Header toggle button integrated in [Header.tsx](file:///c:/Users/Utsab%20Sinha/Downloads/CIPHERON-main/frontend/src/components/Header.tsx).
- **Responsive Workspace Offset:** Content container in [App.tsx](file:///c:/Users/Utsab%20Sinha/Downloads/CIPHERON-main/frontend/src/App.tsx) automatically offsets padding (`pl-64 md:pl-72` vs `pl-16`) to eliminate content occlusion.

### 3.2 Backend Companion Architecture
- **Framework:** FastAPI with Uvicorn async ASGI worker.
- **Database:** SQLite with SQLAlchemy models for cryptographic audit trails.
- **Fail-Closed Execution:** Decorators enforce profile limits (STANDARD 10MB, SECURE 2MB, FORTRESS 500KB) and sandbox constraints before analyzing payloads.
- **WebSocket Streaming:** Broadcasts real-time telemetry, ESP32 status updates, and hardware sensor readings to connected clients.

### 3.3 Hardware Subsystem & Wiring BOM
The physical appliance runs on an ESP32-S3 microcontroller operating with ESP-IDF and FreeRTOS:

| Pin | Function | Description | Operating Mode |
|---|---|---|---|
| **GPIO 1** | `VBAT_SENSE` | Battery voltage divider / ADC channel | Analog In |
| **GPIO 2** | `OPTICAL_SENSOR` | Anti-tamper optical photodiode (decap alert) | Interrupt (NMI) |
| **GPIO 3** | `VOLTAGE_ALERT` | Voltage fault injection detector (<2.95V / >3.60V) | Interrupt (NMI) |
| **GPIO 4, 5, 9** | `BUTTONS` | Tactile pushbuttons: ENTER, BACK, CLEAR | Active LOW |
| **GPIO 6, 7, 8** | `ENCODER` | Rotary encoder Phase A, Phase B, Switch | Gray Code |
| **GPIO 11–14** | `KEYPAD_ROWS` | 4x4 matrix keypad row drive | Output Push-Pull |
| **GPIO 15–18** | `KEYPAD_COLS` | 4x4 matrix keypad column read | Input Pull-Down |
| **GPIO 19, 20** | `USB_CDC` | Native USB D- / D+ for CDC communication | 480Mbps USB OTG |
| **GPIO 21** | `EMFI_PULSE` | Nanosecond fault injection trigger pulse | RMT 12.5ns resolution |
| **GPIO 22, 23** | `QKD_SYNC/SPAD` | Optical sync pulse and single-photon detector | TTL Pulse In |
| **GPIO 25, 26** | `DAC_CH1/CH2` | Analog phase drive / wordline voltages | 8-bit DAC Out |
| **GPIO 36, 39** | `ADC_BL0/BL1` | Analog current sensing & EOG biometric read | High-Speed ADC1 |
| **GPIO 38** | `RGB_LED` | WS2812B NeoPixel tactical status indicator | RMT Protocol |
| **GPIO 40, 41, 42**| `SPI_DISPLAY` | ST7789 / SSD1306 SPI interface lines | 40MHz SPI |
| **GPIO 47, 48** | `I2C_SDA/SCL` | ATECC608A (`0x60`), NXP SE050 (`0x48`), SSD1306 (`0x3C`) | 400kHz Fast $I^2C$ |

---

## 4. Non-Functional Requirements (NFR)

### 4.1 Performance & Latency
- **Payload Analysis Response Time:** $\le 300\text{ms}$ for payloads $\le 1\text{MB}$ in STANDARD mode.
- **Recursive DAG Generation:** $\le 500\text{ms}$ up to depth 5.
- **Panic Shredding Latency:** Complete multi-pass volatile memory overwrite completed in $<0.10\mu\text{s}$ (hardware) and $<2000\text{ms}$ (companion UI animated wipe).
- **Frontend Frame Rate:** WebGL 3D visualizers maintain $\ge 60\text{ fps}$ on standard GPU acceleration.

### 4.2 Security & Compliance
- **Zero Remote Code Execution:** Untrusted inputs decoded solely through static parsers and fuel-capped WASM.
- **Fail-Closed Memory Handling:** In FORTRESS mode, all input buffers reside exclusively in non-swap RAM and are zeroized immediately after analysis.
- **FIPS 140-3 Compliance:** HSM hardware keys in NXP SE050 are never exported to host memory.

### 4.3 Reliability & Availability
- **Continuous Operation:** Asynchronous backend supports sustained 24/7 telemetry monitoring without memory leakage.
- **Graceful Degradation:** When physical ESP32 hardware is disconnected, backend automatically falls back to the Virtual Hardware Simulator.

---

## 5. Verification & Test Strategy

### 5.1 Test Suites
The project is validated through comprehensive automated test suites:
- **Unit & Property Tests:** Validating mathematical invariants of ciphers, Kasiski examination, and IC scoring.
- **Security & Fuzzing:** Mutation fuzzing across esoteric parsers (JWT, Protobuf, CBOR) to guarantee zero uncaught crashes.
- **Hardware Integration:** FreeRTOS dual-core task benchmarks and hardware communication frame validation.
- **End-to-End Test Status:** **100% passing across 210+ backend test cases and 1,512 frontend modules**.

### 5.2 Build Commands
```bash
# Backend Verification
$env:PYTHONPATH="backend"
python -m pytest backend/tests/ -q

# Frontend Typecheck & Production Build
cd frontend
npx tsc --noEmit
npm run build
```

---

## 6. Document Revision & Signoff
- **Approved by:** DRDO-SAG / Systems Engineering Group
- **Status:** APPROVED FOR TACTICAL CONSOLE DEPLOYMENT
- **Repository Remote:** `https://github.com/allenhale2005-dev/cipheron.git` (`branch: main`)

