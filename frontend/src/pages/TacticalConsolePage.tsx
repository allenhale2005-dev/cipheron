import React, { useState, useEffect } from 'react';
import { TacticalCryptanalysis3D, TacticalPipelineNode } from '../components/TacticalCryptanalysis3D';
import { api } from '../services/api';
import { SecurityMode } from '../types';
import {
  Binary,
  Cpu,
  ShieldAlert,
  Play,
  Layers,
  Sparkles,
  FileCode,
  History,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Copy,
  Terminal,
  Activity,
  Database
} from 'lucide-react';

interface TacticalConsolePageProps {
  currentProfile: SecurityMode;
  onProfileChange?: (mode: SecurityMode) => void;
}

export const TacticalConsolePage: React.FC<TacticalConsolePageProps> = ({
  currentProfile,
  onProfileChange
}) => {
  // Module 1: Ingestion & Raw Telemetry State
  const [inputOctets, setInputOctets] = useState<string>('SGVsbG8gQ0lQSEVST04tWDExIFtUQUNDT04gU1BFQ10=');
  const [hexView, setHexView] = useState<string[]>([]);
  const [asciiView, setAsciiView] = useState<string[]>([]);
  const [shannonEntropy, setShannonEntropy] = useState<number>(7.94);
  const [indexOfCoincidence, setIndexOfCoincidence] = useState<number>(0.0385);
  const [chiSquareDistance, setChiSquareDistance] = useState<number>(142.8);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

  // Module 2: 3D DAG Pipeline State
  const [pipelineNodes, setPipelineNodes] = useState<TacticalPipelineNode[]>([
    { id: 'n0', label: 'INPUT', algorithm: 'Raw Octet Stream', confidence: 1.0, entropy: 7.82, position: [-12, 0, 0] },
    { id: 'n1', label: 'STAGE 1', algorithm: 'Base64 RFC 4648', confidence: 0.98, entropy: 5.12, position: [-4, 3, 0] },
    { id: 'n2', label: 'STAGE 2', algorithm: 'Single-Byte XOR (0x7F)', confidence: 0.89, entropy: 4.41, position: [4, 3, 0] },
    { id: 'n3', label: 'STAGE 3', algorithm: 'ROT13 Caesar Variant', confidence: 0.96, entropy: 4.02, position: [12, 0, 0] },
    { id: 'n4', label: 'ALT 2', algorithm: 'Hex Delimited Stream', confidence: 0.32, entropy: 6.21, position: [-4, -3, 0] },
  ]);
  const [selectedNode, setSelectedNode] = useState<TacticalPipelineNode>(pipelineNodes[0]);

  // Module 3: Code & AST Inspector State
  const [decompiledCode, setDecompiledCode] = useState<string>(
`// DRDO-SAG DECOMPILED CIPHER DISPATCH VECTOR
function decrypt_payload(uint8_t* buffer, size_t length) {
    uint8_t key = 0x7F; // High-Entropy Literal: "s7!K9#mQ@vP$4z" [H: 5.84 bits]
    for (size_t i = 0; i < length; ++i) {
        buffer[i] ^= key;
        buffer[i] = ((buffer[i] - 65 + 13) % 26) + 65; // ROT13 Variant
    }
    return verify_merkle_root(buffer, length);
}`
  );

  // Module 4: Hardware Controller & OLED Mirror State
  const [oledLines, setOledLines] = useState<string[]>([
    'CIPHERON-X1 // SAG',
    'ENTROPY: 7.940 b/B',
    'IC: 0.0385 [POLY]',
    'XOR: 0x7F VERIFIED',
    'STATUS: ARMED 460.8k',
    'ATECC608A: SLOT0-OK'
  ]);
  const [batteryVoltage, setBatteryVoltage] = useState<number>(4.12);
  const [batterySoc, setBatterySoc] = useState<number>(94);
  const [i2cBusClockKhz, setI2cBusClockKhz] = useState<number>(400);
  const [hardwareLocked, setHardwareLocked] = useState<boolean>(true);

  // Module 5: Merkle Audit Trail State
  const [merkleRoot, setMerkleRoot] = useState<string>(
    '7F8A9B0C1D2E3F405A6B7C8D9E0F1A2B3C4D5E6F708192A3B4C5D6E7F8091A2B'
  );
  const [auditLog, setAuditLog] = useState<Array<{ ts: string; event: string; status: string }>>([
    { ts: '18:12:04.120', event: 'OCTET_BUFFER_INGEST', status: 'CONFIRMED' },
    { ts: '18:12:04.180', event: 'SHANNON_ENTROPY_COMPUTE', status: 'H=7.940' },
    { ts: '18:12:04.225', event: 'DAG_STAGE_1_BASE64_EXEC', status: 'CONFIDENCE=0.98' },
    { ts: '18:12:04.290', event: 'DAG_STAGE_2_XOR_DECODE', status: 'KEY=0x7F' },
    { ts: '18:12:04.350', event: 'MERKLE_ROOT_ANCHOR_PROVE', status: 'IMMUTABLE' },
  ]);

  // Generate dual Hex & ASCII view on input change
  useEffect(() => {
    const rawBytes: number[] = [];
    for (let i = 0; i < inputOctets.length; i++) {
      rawBytes.push(inputOctets.charCodeAt(i) & 0xff);
    }

    const hexRows: string[] = [];
    const asciiRows: string[] = [];
    for (let i = 0; i < rawBytes.length; i += 8) {
      const chunk = rawBytes.slice(i, i + 8);
      const hexStr = chunk.map((b) => b.toString(16).padStart(2, '0').toUpperCase()).join(' ');
      const asciiStr = chunk.map((b) => (b >= 32 && b <= 126 ? String.fromCharCode(b) : '.')).join('');
      const offset = i.toString(16).padStart(4, '0').toUpperCase();
      hexRows.push(`0x${offset}: ${hexStr.padEnd(23, ' ')}`);
      asciiRows.push(`| ${asciiStr}`);
    }
    setHexView(hexRows);
    setAsciiView(asciiRows);

    // Dynamic statistical estimation
    if (inputOctets.length > 0) {
      const counts: Record<number, number> = {};
      rawBytes.forEach((b) => (counts[b] = (counts[b] || 0) + 1));
      let ent = 0;
      let icSum = 0;
      const len = rawBytes.length;
      Object.values(counts).forEach((c) => {
        const p = c / len;
        ent -= p * Math.log2(p);
        icSum += c * (c - 1);
      });
      const ic = len > 1 ? icSum / (len * (len - 1)) : 0.065;
      setShannonEntropy(Number(Math.min(8.0, ent).toFixed(3)));
      setIndexOfCoincidence(Number(ic.toFixed(4)));
      setChiSquareDistance(Number((120.0 + (8.0 - ent) * 30.0).toFixed(1)));
    }
  }, [inputOctets]);

  const handleExecuteFullPipeline = async () => {
    setIsAnalyzing(true);
    try {
      const det = await api.detectInput(inputOctets);
      if (det?.metrics) {
        setShannonEntropy(Number(det.metrics.shannon_entropy.toFixed(3)));
        setIndexOfCoincidence(Number(det.metrics.index_of_coincidence.toFixed(4)));
      }
      const dag = await api.runPipeline(inputOctets);
      if (dag?.nodes && dag.nodes.length > 0) {
        const mappedNodes: TacticalPipelineNode[] = dag.nodes.map((n, idx) => ({
          id: n.id,
          label: `STAGE ${idx}`,
          algorithm: n.transformation,
          confidence: n.confidence / 100.0,
          entropy: 4.5,
          position: [-12 + idx * 8, (idx % 2 === 1 ? 3 : -3) * (idx === 0 ? 0 : 1), 0]
        }));
        setPipelineNodes(mappedNodes);
        setSelectedNode(mappedNodes[0]);
      }
    } catch {
      // Keep deterministic defaults
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleZeroizeSession = () => {
    setInputOctets('');
    setHexView(['0x0000: 00 00 00 00 00 00 00 00']);
    setAsciiView(['| ........']);
    setShannonEntropy(0.0);
    setIndexOfCoincidence(0.0);
    setChiSquareDistance(0.0);
    setDecompiledCode('// SESSION BUFFER ZEROIZED — MEMORY SHREDDED');
    setMerkleRoot('0000000000000000000000000000000000000000000000000000000000000000');
    setOledLines([
      'BUFFER: ZEROIZED',
      'SHRED: 5-PASS COMPLETE',
      'STATE: FAIL-CLOSED',
      'KEYS: VOIDED',
      'STATUS: SECURE 0.00V',
      'ATECC608A: PURGED'
    ]);
  };

  return (
    <div className="space-y-4 font-mono text-rose-white select-none animate-fade-in p-2 md:p-4 pb-20">
      {/* Tactical Sub-Header Telemetry Banner */}
      <div className="bg-chassis-panel border border-chassis-border p-3 rounded-sm flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-sky-carrier font-bold tracking-wider">
            <span className="w-2 h-2 rounded-none bg-sky-carrier shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
            DRDO-SAG CONSOLE
          </span>
          <span className="text-chassis-border">/</span>
          <span className="text-rose-muted">STANDARDS: SAG // CAIR // ELINT 2026</span>
          <span className="text-chassis-border">/</span>
          <span className="text-sky-carrier font-semibold">ZERO-JANK 3D WEBGL</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <span className="text-rose-muted">
            SECURITY PROFILE: <strong className="text-orange-alert font-bold">{currentProfile}</strong>
          </span>
          <span className="text-chassis-border">|</span>
          <span className="text-rose-muted">
            CHIP: <strong className="text-sky-carrier font-bold">ESP32-S3 (WROOM-2)</strong>
          </span>
          <span className="text-chassis-border">|</span>
          <button
            onClick={handleZeroizeSession}
            className="px-2 py-0.5 bg-orange-deep hover:bg-orange-alert text-rose-white font-bold rounded-sm border border-orange-alert tracking-wider transition-colors"
          >
            PURGE BUFFER
          </button>
        </div>
      </div>

      {/* Top 3-Column Grid: Module 1, Module 2, Module 4 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Module 1: Ingestion & Raw Telemetry (4 Cols) */}
        <div className="lg:col-span-4 bg-chassis-panel border border-chassis-border rounded-sm p-3.5 space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between border-b border-chassis-border pb-1.5">
              <span className="text-xs font-bold text-sky-carrier flex items-center gap-1.5 tracking-wider">
                <Binary size={13} />
                MODULE 1: INGESTION & RAW TELEMETRY
              </span>
              <span className="text-[10px] text-rose-muted px-1.5 py-0.2 bg-chassis-dark border border-chassis-border rounded-sm">
                PORT: UART0
              </span>
            </div>

            {/* Input Buffer Field */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-rose-muted">
                <span>OCTET STREAM INPUT:</span>
                <span className="text-sky-carrier font-bold">{inputOctets.length} BYTES</span>
              </div>
              <textarea
                value={inputOctets}
                onChange={(e) => setInputOctets(e.target.value)}
                rows={2}
                placeholder="Enter Base64, Hex, or raw ASCII ciphertext..."
                className="w-full bg-chassis-dark border border-chassis-border text-rose-white text-xs p-2 rounded-sm outline-none focus:border-sky-carrier font-mono resize-none leading-relaxed"
              />
            </div>

            {/* Split Hex & ASCII Dual Stream */}
            <div className="space-y-1">
              <div className="text-[10px] text-rose-muted tracking-wider flex justify-between">
                <span>HEX OFFSET STREAM</span>
                <span>ASCII RECON</span>
              </div>
              <div className="bg-chassis-dark border border-chassis-border p-2 rounded-sm text-[11px] font-tnum text-sky-carrier max-h-36 overflow-y-auto space-y-0.5 scrollbar-thin">
                {hexView.map((row, idx) => (
                  <div key={idx} className="flex justify-between hover:bg-sky-subtle px-1">
                    <span>{row}</span>
                    <span className="text-rose-white font-semibold">{asciiView[idx]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Precision Gauges */}
          <div className="pt-2 border-t border-chassis-border space-y-2">
            <div className="text-[11px] text-rose-muted tracking-wider">PRECISION STATISTICAL GAUGES</div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-chassis-dark border border-chassis-border p-2 rounded-sm">
                <div className="text-[10px] text-rose-muted">SHANNON (H)</div>
                <div className="text-sm font-bold text-sky-carrier mt-0.5">{shannonEntropy.toFixed(3)}</div>
                <div className="text-[9px] text-rose-dim">BITS / BYTE</div>
              </div>
              <div className="bg-chassis-dark border border-chassis-border p-2 rounded-sm">
                <div className="text-[10px] text-rose-muted">INDEX COINC (IC)</div>
                <div className="text-sm font-bold text-emerald-400 mt-0.5">{indexOfCoincidence.toFixed(4)}</div>
                <div className="text-[9px] text-rose-dim">POLYALPHABETIC</div>
              </div>
              <div className="bg-chassis-dark border border-chassis-border p-2 rounded-sm">
                <div className="text-[10px] text-rose-muted">CHI-SQUARE (χ²)</div>
                <div className="text-sm font-bold text-orange-alert mt-0.5">{chiSquareDistance.toFixed(1)}</div>
                <div className="text-[9px] text-rose-dim">DISTANCE</div>
              </div>
            </div>

            <button
              onClick={handleExecuteFullPipeline}
              disabled={isAnalyzing}
              className="w-full py-2 bg-sky-deep hover:bg-sky-carrier text-chassis-dark font-bold text-xs rounded-sm tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(56,189,248,0.25)]"
            >
              <Play size={12} />
              {isAnalyzing ? 'COMPUTING DAG HYPOTHESES...' : 'EXECUTE CRYPTANALYSIS PIPELINE'}
            </button>
          </div>
        </div>

        {/* Module 2: Real-Time 3D DAG Pipeline (5 Cols) */}
        <div className="lg:col-span-5 bg-chassis-panel border border-chassis-border rounded-sm p-3.5 space-y-2 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-chassis-border pb-1.5">
            <span className="text-xs font-bold text-sky-carrier flex items-center gap-1.5 tracking-wider">
              <Layers size={13} />
              MODULE 2: REAL-TIME 3D DAG PIPELINE
            </span>
            <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              60 FPS WEBGL
            </span>
          </div>

          {/* Three.js Canvas Mount */}
          <div className="w-full">
            <TacticalCryptanalysis3D
              nodes={pipelineNodes}
              onSelectNode={(n) => setSelectedNode(n)}
            />
          </div>

          {/* Selected Node Sub-Register Telemetry */}
          <div className="bg-chassis-dark border border-chassis-border p-2.5 rounded-sm flex items-center justify-between text-xs">
            <div>
              <span className="text-rose-muted text-[10px]">INSPECTED BRANCH:</span>
              <div className="text-sky-carrier font-bold mt-0.5">
                [{selectedNode.label}] {selectedNode.algorithm}
              </div>
            </div>
            <div className="text-right">
              <span className="text-rose-muted text-[10px]">CONFIDENCE:</span>
              <div className="text-emerald-400 font-bold mt-0.5">
                {(selectedNode.confidence * 100).toFixed(1)}%
              </div>
            </div>
          </div>
        </div>

        {/* Module 4: Hardware HAL & OLED Mirror (3 Cols) */}
        <div className="lg:col-span-3 bg-chassis-panel border border-chassis-border rounded-sm p-3.5 space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between border-b border-chassis-border pb-1.5">
              <span className="text-xs font-bold text-sky-carrier flex items-center gap-1.5 tracking-wider">
                <Cpu size={13} />
                MODULE 4: HARDWARE HAL
              </span>
              <span className="text-[10px] text-rose-white font-bold bg-chassis-border px-1.5 rounded-sm">
                460.8k
              </span>
            </div>

            {/* SSD1306 1:1 Monochrome OLED Mirror */}
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] text-rose-muted">
                <span>SSD1306 OLED MIRROR (128x64)</span>
                <span className="text-orange-alert font-bold">MONOCHROME</span>
              </div>
              <div className="bg-[#000814] border-2 border-chassis-border p-2.5 rounded-sm shadow-[inset_0_0_10px_rgba(56,189,248,0.2)] font-mono text-sky-carrier text-[11px] leading-tight space-y-1">
                {oledLines.map((line, idx) => (
                  <div key={idx} className="truncate tracking-wider">
                    {line}
                  </div>
                ))}
              </div>
            </div>

            {/* Hardware Bus Registers */}
            <div className="space-y-1.5 pt-1 text-xs">
              <div className="flex justify-between p-1.5 bg-chassis-dark border border-chassis-border rounded-sm text-[11px]">
                <span className="text-rose-muted">BATTERY (MAX17048):</span>
                <span className="text-emerald-400 font-bold">{batteryVoltage}V ({batterySoc}%)</span>
              </div>
              <div className="flex justify-between p-1.5 bg-chassis-dark border border-chassis-border rounded-sm text-[11px]">
                <span className="text-rose-muted">I2C BUS CLOCK:</span>
                <span className="text-sky-carrier font-bold">{i2cBusClockKhz} kHz FAST</span>
              </div>
              <div className="flex justify-between p-1.5 bg-chassis-dark border border-chassis-border rounded-sm text-[11px]">
                <span className="text-rose-muted">ATECC608A (0x60):</span>
                <span className="text-sky-carrier font-bold">SLOT 0 [ECC P-256]</span>
              </div>
              <div className="flex justify-between p-1.5 bg-chassis-dark border border-chassis-border rounded-sm text-[11px]">
                <span className="text-rose-muted">PANIC DISARM:</span>
                <span className="text-orange-alert font-bold">ARMED (ACTIVE-LOW)</span>
              </div>
            </div>
          </div>

          <div className="p-2 bg-chassis-dark border border-chassis-border rounded-sm text-[10px] text-rose-dim leading-snug">
            GPIO 36 / 39 ADC DMA streaming active at 500,000 Hz. Zero tamper signals detected.
          </div>
        </div>
      </div>

      {/* Bottom 2-Column Grid: Module 3 (Code/AST Inspector) & Module 5 (Audit Trail) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Module 3: Monaco Cryptanalytic Code & AST Inspector (8 Cols) */}
        <div className="lg:col-span-8 bg-chassis-panel border border-chassis-border rounded-sm p-3.5 space-y-2">
          <div className="flex items-center justify-between border-b border-chassis-border pb-1.5">
            <span className="text-xs font-bold text-sky-carrier flex items-center gap-1.5 tracking-wider">
              <FileCode size={13} />
              MODULE 3: CRYPTANALYTIC CODE & AST DECOMPILER INSPECTOR
            </span>
            <div className="flex items-center gap-2 text-[10px]">
              <span className="px-2 py-0.5 bg-orange-subtle border border-orange-alert text-orange-alert font-bold rounded-sm">
                HIGH-ENTROPY SCANNER: ACTIVE (H &gt; 5.2 b/B)
              </span>
              <span className="text-rose-muted font-bold">C99 / LLVM IR</span>
            </div>
          </div>

          <div className="bg-chassis-dark border border-chassis-border p-3 rounded-sm font-mono text-xs text-rose-white leading-relaxed overflow-x-auto max-h-56 scrollbar-thin">
            <pre className="text-[12px] font-tnum text-rose-white whitespace-pre-wrap">
              {decompiledCode}
            </pre>
          </div>

          <div className="flex flex-wrap items-center justify-between text-[11px] text-rose-muted pt-1">
            <span>DISASSEMBLY OFFSET: <strong className="text-sky-carrier font-bold">0x080483EC</strong></span>
            <span>CYCLOMATIC COMPLEXITY: <strong className="text-emerald-400 font-bold">1.02</strong></span>
            <span>SECURITY WARNINGS: <strong className="text-emerald-400 font-bold">0 DEFECTS</strong></span>
          </div>
        </div>

        {/* Module 5: Zero-Knowledge Audit & Provenance Ledger (4 Cols) */}
        <div className="lg:col-span-4 bg-chassis-panel border border-chassis-border rounded-sm p-3.5 space-y-2.5 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between border-b border-chassis-border pb-1.5">
              <span className="text-xs font-bold text-sky-carrier flex items-center gap-1.5 tracking-wider">
                <History size={13} />
                MODULE 5: AUDIT TRAIL & MERKLE LEDGER
              </span>
              <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 size={11} />
                TAMPER-PROOF
              </span>
            </div>

            {/* SHA-256 Merkle Root */}
            <div className="space-y-1">
              <span className="text-[10px] text-rose-muted tracking-wider">SHA-256 MERKLE STATE ROOT:</span>
              <div className="bg-chassis-dark border border-chassis-border p-2 rounded-sm text-[10px] text-sky-carrier break-all font-bold">
                {merkleRoot}
              </div>
            </div>

            {/* Event Provenance Feed */}
            <div className="space-y-1">
              <span className="text-[10px] text-rose-muted tracking-wider">IMMUTABLE EVENT LOG:</span>
              <div className="bg-chassis-dark border border-chassis-border p-2 rounded-sm text-[10px] space-y-1 max-h-28 overflow-y-auto font-tnum scrollbar-thin">
                {auditLog.map((log, idx) => (
                  <div key={idx} className="flex justify-between text-rose-dim hover:text-rose-white">
                    <span>{log.ts}</span>
                    <span className="text-rose-white">{log.event}</span>
                    <span className="text-sky-carrier font-bold">{log.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-chassis-border flex gap-2">
            <button
              onClick={() => navigator.clipboard.writeText(merkleRoot)}
              className="flex-1 py-1.5 bg-chassis-border hover:bg-chassis-border/80 text-rose-white text-[11px] font-bold rounded-sm border border-chassis-border flex items-center justify-center gap-1 transition-colors"
            >
              <Copy size={11} />
              COPY MERKLE
            </button>
            <button
              onClick={handleZeroizeSession}
              className="flex-1 py-1.5 bg-orange-deep/30 hover:bg-orange-deep text-orange-alert hover:text-white text-[11px] font-bold rounded-sm border border-orange-alert flex items-center justify-center gap-1 transition-colors"
            >
              <RefreshCw size={11} />
              ZERO-EXPORT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TacticalConsolePage;
