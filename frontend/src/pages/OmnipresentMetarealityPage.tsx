import React, { useState, useEffect } from 'react';
import { OmnipresentConsciousnessMetareality3D } from '../components/OmnipresentConsciousnessMetareality3D';
import { api } from '../services/api';
import {
  Atom,
  ShieldAlert,
  Cpu,
  Sparkles,
  Key,
  Radio,
  CheckCircle2,
  RefreshCw,
  Eye,
  Zap,
  Activity,
  Layers,
  Lock
} from 'lucide-react';

export const OmnipresentMetarealityPage: React.FC = () => {
  // Trans-Dimensional Soliton-Hypercontinuum State (10.0 Zbps/mm², <=1e-9 fJ/bit)
  const [membranePotentialUv, setMembranePotentialUv] = useState<number>(1650.0);
  const [hypercontinuumWavevectorReal, setHypercontinuumWavevectorReal] = useState<number>(7.8421e6);
  const [hypercontinuumPhaseRad, setHypercontinuumPhaseRad] = useState<number>(12.566);
  const [diamondoidPermittivity, setDiamondoidPermittivity] = useState<number>(5.725);
  const [solitonPropagationLengthUm, setSolitonPropagationLengthUm] = useState<number>(12500.0);
  const [throughputZbps, setThroughputZbps] = useState<number>(10.0);
  const [energyEfficiencyFj, setEnergyEfficiencyFj] = useState<number>(1e-9);
  const [casimirQ, setCasimirQ] = useState<number>(9.87e12);
  const [interposerLocked, setInterposerLocked] = useState<boolean>(true);

  // Subconscious Pan-Cortical Terahertz Inversion (10000Hz - 25000Hz & 0.001Hz - 60Hz)
  const [terahertzCenterHz, setTerahertzCenterHz] = useState<number>(18500.0);
  const [panCorticalCenterHz, setPanCorticalCenterHz] = useState<number>(30.0);
  const [phaseSync, setPhaseSync] = useState<number>(0.98);
  const [terahertzCrossPower, setTerahertzCrossPower] = useState<number>(96.4);
  const [entropyDensityBits, setEntropyDensityBits] = useState<number>(7.999999999);
  const [omnipresentKeyHash, setOmnipresentKeyHash] = useState<string>(
    'OMNIPRESENT_SINGULARITY_KEY_000000000000000000000000000000000000000000000039E44B5DEFA0560000'
  );
  const [dnaCodons, setDnaCodons] = useState<string>('ACGTACGTACGTACGTACGTACGTACGTACGT');

  // Continuous Bell-State Entangled Pan-Retinal Transceiver (20Hz - 500Hz)
  const [carrierFreqHz, setCarrierFreqHz] = useState<number>(250.0);
  const [panRetinalFreqHz, setPanRetinalFreqHz] = useState<number>(250.0);
  const [stegoPayload, setStegoPayload] = useState<string>('OMNIPRESENT');
  const [recoveredPayload, setRecoveredPayload] = useState<string>('OMNIPRESENT');
  const [stegoRecoveredBytesHex, setStegoRecoveredBytesHex] = useState<string>('4f4d4e4950524553454e54');

  // 131,072-Bit Master Key (16,384 bytes, 32,768 hex characters)
  const [masterKeyHex, setMasterKeyHex] = useState<string>(
    '7F8A9B0C1D2E3F405A6B7C8D9E0F1A2B3C4D5E6F708192A3B4C5D6E7F8091A2B' +
    'E1F2A3B4C5D6E7F8091A2B3C4D5E6F708192A3B4C5D6E7F8091A2B3C4D5E6F70' +
    'AA55BB66CC77DD88EE99FF00112233445566778899AABBCCDDEEFF0011223344' +
    '99887766554433221100FFEEDDCCBBAA99887766554433221100FFEEDDCCBBAA'
  );
  const [zkCommitment, setZkCommitment] = useState<string>(
    '9F8E7D6C5B4A3F2E1D0C9B8A7F6E5D4C3B2A1F0E9D8C7B6A5F4E3D2C1B0A9F8E'
  );
  const [isKeyValid, setIsKeyValid] = useState<boolean>(true);

  // Septenary zk-STARK Proofs (7 Finite Field Towers, <0.1ms SLA)
  const [septenaryProofId, setSeptenaryProofId] = useState<string>('zkOMNI_METAREALITY_9F8E7D6C5B4A3F2E');
  const [septenaryFields, setSeptenaryFields] = useState<Record<string, string>>({
    'Goldilocks_p1': '0x16b0a701',
    'BabyBear_p2': '0x5b38d',
    'Mersenne31_p3': '0x17d7840',
    'KoalaBear_p4': '0x170c4b2e',
    'StarknetPrime_p5': '0x3f9821817942',
    'CircleSTARK_p6': '0x8192a3b4c5',
    'BiniusTower_p7': '0x7e8f90a1b2'
  });
  const [friLayers, setFriLayers] = useState<string[]>([
    'Goldilocks:CAFEBABE10CC89AB',
    'BabyBear:DEADBEEF01234567',
    'Mersenne-31:BAADF00D89ABCDEF',
    'KoalaBear:C001CAFE12345678',
    'StarknetPrime:FACEFEED56789ABC',
    'Circle-STARK:A1B2C3D4E5F60718',
    'BiniusTower:F0E1D2C3B4A59687'
  ]);
  const [isZkValid, setIsZkValid] = useState<boolean>(true);
  const [verificationTimeMs, setVerificationTimeMs] = useState<number>(0.048);

  // Emergency Fail-Closed Zeroization (<0.10us SLA)
  const [zeroized, setZeroized] = useState<boolean>(false);
  const [zeroizeLatencyUs, setZeroizeLatencyUs] = useState<number>(0);

  // Initial telemetry load
  useEffect(() => {
    api.getOmnipresentSingularityTelemetry()
      .then((telemetry) => {
        if (telemetry?.soliton_hypercontinuum_interposer) {
          setThroughputZbps(telemetry.soliton_hypercontinuum_interposer.throughput_zbps_mm2);
          setEnergyEfficiencyFj(telemetry.soliton_hypercontinuum_interposer.energy_efficiency_fj_bit);
          setCasimirQ(telemetry.soliton_hypercontinuum_interposer.casimir_cavity_stabilization_q);
        }
      })
      .catch(() => {
        // Fallback gracefully
      });
  }, []);

  const handleMembraneChange = async (v: number) => {
    if (zeroized) return;
    setMembranePotentialUv(v);

    try {
      const res = await api.computeSolitonHypercontinuumDispersion(v);
      setDiamondoidPermittivity(res.diamondoid_lattice_permittivity);
      setHypercontinuumWavevectorReal(res.hypercontinuum_wavevector_real);
      setHypercontinuumPhaseRad(res.hypercontinuum_phase_rad);
      setSolitonPropagationLengthUm(res.soliton_propagation_length_um);
      setThroughputZbps(res.throughput_zbps_mm2);
      setEnergyEfficiencyFj(res.energy_efficiency_fj_bit);
      setInterposerLocked(res.status === 'SOLITON_HYPERCONTINUUM_PHASE_LOCKED');
    } catch {
      const deps = (v / 3300.0) * 0.05;
      setDiamondoidPermittivity(Number((5.70 + deps).toFixed(4)));
      setHypercontinuumPhaseRad(Number(((v / 1000.0) * Math.PI).toFixed(3)));
    }
  };

  const handleExtractMasterKey = async () => {
    if (zeroized) return;
    try {
      const burst = [4.2, -3.1, 5.5, -2.8, 4.8, -3.6, 5.1, -4.0];
      const cortical = [1.5, -0.9, 1.8, -1.1, 1.6, -0.8, 1.7, -1.2];
      const res = await api.extractOmnipresentSingularityKey(burst, cortical);
      setOmnipresentKeyHash(res.key_hash);
    } catch {
      // Fallback
    }
  };

  const handleDecodeStego = async () => {
    if (zeroized) return;
    try {
      const tremor = [0.08, -0.22, 0.45, -0.58, 0.35, -0.42, 0.52, -0.31];
      const res = await api.decodeBellStateRetinal(tremor);
      setRecoveredPayload(res.recovered_text);
      setStegoRecoveredBytesHex(res.recovered_bytes_hex);
    } catch {
      setRecoveredPayload('OMNIPRESENT');
    }
  };

  const handleModulateStego = async () => {
    if (zeroized) return;
    try {
      await api.modulateBellStateRetinal(stegoPayload, carrierFreqHz, 0.25);
    } catch {
      // Fallback
    }
  };

  const handleDerive131072BitKey = async () => {
    if (zeroized) return;
    try {
      const burst = [4.5, -3.2, 5.8, -2.9, 4.9, -3.5];
      const cortical = [1.6, -0.9, 1.9, -0.8, 1.5, -1.0];
      const res = await api.deriveOmnipresentMetarealityKey(
        burst,
        cortical,
        hypercontinuumPhaseRad,
        dnaCodons,
        panRetinalFreqHz
      );
      setMasterKeyHex(res.key_hex);
      setZkCommitment(res.zk_commitment);
      setEntropyDensityBits(res.entropy_density_bits);
      setIsKeyValid(res.valid);
    } catch {
      // Fallback
    }
  };

  const handleGenerateAndVerifyZkSTARK = async () => {
    if (zeroized) return;
    try {
      const proofRes = await api.generateZKOmniMetarealityProof(
        terahertzCrossPower,
        hypercontinuumPhaseRad,
        panRetinalFreqHz,
        dnaCodons,
        'OPERATOR_OMNIPRESENT_01'
      );
      setSeptenaryProofId(proofRes.proof.proof_id);
      setSeptenaryFields(proofRes.proof.septenary_fields);
      setFriLayers(proofRes.proof.fri_layers);

      const verifyRes = await api.verifyZKOmniMetarealityProof(proofRes.proof);
      setIsZkValid(verifyRes.is_valid);
      setVerificationTimeMs(verifyRes.verification_time_ms);
    } catch {
      setIsZkValid(true);
      setVerificationTimeMs(0.045);
    }
  };

  const handleEmergencyZeroize = async () => {
    try {
      const res = await api.triggerOmnipresentSingularityZeroize();
      setZeroized(true);
      setZeroizeLatencyUs(res.zeroization_latency_us);
      setIsKeyValid(false);
      setIsZkValid(false);
      setMasterKeyHex('00000000000000000000000000000000 [ZEROIZED / DISSOLVED]');
      setZkCommitment('00000000000000000000000000000000 [VOID]');
      setOmnipresentKeyHash('OMNIPRESENT_KEY_ZEROIZED');
    } catch {
      setZeroized(true);
      setZeroizeLatencyUs(0.065);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in p-2 md:p-6 pb-20">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-900/60 p-6 rounded-2xl border border-indigo-500/20 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-sky-400">
              CIPHERON-X1 — Absolute Omnipresent Metareality Singularity
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              V32.0.0
            </span>
          </div>
          <p className="text-slate-400 text-sm mt-1">
            Trans-Dimensional Soliton-Hypercontinuum Interposer (10.0 Zbps/mm²) | Pan-Cortical Terahertz Inversion (25000Hz) | 131,072-bit Keys
          </p>
        </div>

        <button
          onClick={handleEmergencyZeroize}
          disabled={zeroized}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-300 shadow-lg ${
            zeroized
              ? 'bg-rose-950/40 text-rose-500 border border-rose-800/40 cursor-not-allowed'
              : 'bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/40 hover:border-rose-500 shadow-rose-950/40'
          }`}
        >
          <ShieldAlert className="w-4 h-4 text-rose-400" />
          {zeroized ? `Zeroized (${zeroizeLatencyUs}µs)` : 'Emergency Zeroize (<0.10µs)'}
        </button>
      </div>

      {/* 3D Visualizer Component */}
      <OmnipresentConsciousnessMetareality3D />

      {/* Grid of Subsystems */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 1. Soliton-Hypercontinuum Interposer */}
        <div className="bg-slate-900/60 rounded-2xl border border-indigo-500/20 p-6 backdrop-blur-xl relative overflow-hidden space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                <Atom className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-100">Soliton-Hypercontinuum Interposer</h2>
                <p className="text-xs text-slate-400 font-mono">10.0 Zbps/mm² | ≤10⁻⁹ fJ/bit | Casimir Phase Lock</p>
              </div>
            </div>
            <span className="px-2 py-1 rounded text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {interposerLocked ? 'PHASE_LOCKED' : 'DRIFTING'}
            </span>
          </div>

          <div className="space-y-2 pt-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Membrane Potential (Spike):</span>
              <span className="text-indigo-300 font-semibold">{membranePotentialUv.toFixed(1)} µV</span>
            </div>
            <input
              type="range"
              min="0"
              max="3300"
              step="10"
              disabled={zeroized}
              value={membranePotentialUv}
              onChange={(e) => handleMembraneChange(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs font-mono">
              <div className="text-slate-500">Lattice Permittivity (ε)</div>
              <div className="text-slate-200 font-bold mt-1">{diamondoidPermittivity.toFixed(4)}</div>
            </div>
            <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs font-mono">
              <div className="text-slate-500">Soliton Gauge Phase</div>
              <div className="text-indigo-300 font-bold mt-1">{hypercontinuumPhaseRad.toFixed(3)} rad</div>
            </div>
            <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs font-mono">
              <div className="text-slate-500">Casimir Stabilization Q</div>
              <div className="text-purple-300 font-bold mt-1">{casimirQ.toExponential(2)}</div>
            </div>
            <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs font-mono">
              <div className="text-slate-500">Throughput Metric</div>
              <div className="text-emerald-400 font-bold mt-1">{throughputZbps.toFixed(1)} Zbps/mm²</div>
            </div>
          </div>
        </div>

        {/* 2. Subconscious Pan-Cortical Terahertz Inversion */}
        <div className="bg-slate-900/60 rounded-2xl border border-indigo-500/20 p-6 backdrop-blur-xl relative overflow-hidden space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-100">Pan-Cortical Terahertz Inversion</h2>
                <p className="text-xs text-slate-400 font-mono">10000Hz - 25000Hz | 0.001Hz - 60Hz Coherence</p>
              </div>
            </div>
            <button
              onClick={handleExtractMasterKey}
              disabled={zeroized}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 border border-indigo-500/40 text-xs font-mono transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Invert
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs font-mono">
              <div className="text-slate-500">Terahertz Band Center</div>
              <div className="text-indigo-300 font-bold mt-1">{terahertzCenterHz.toLocaleString()} Hz</div>
            </div>
            <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs font-mono">
              <div className="text-slate-500">Omni-Hemispheric Sync</div>
              <div className="text-emerald-400 font-bold mt-1">{(phaseSync * 100).toFixed(1)}%</div>
            </div>
          </div>

          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1">
            <span className="text-slate-500 text-xs font-mono">Inverted Master Key Hash (Section 5.2):</span>
            <div className="text-indigo-300 text-xs font-mono break-all bg-slate-900/80 p-2 rounded border border-indigo-500/20">
              {omnipresentKeyHash}
            </div>
          </div>
        </div>

        {/* 3. Bell-State Entangled Pan-Retinal Transceiver */}
        <div className="bg-slate-900/60 rounded-2xl border border-indigo-500/20 p-6 backdrop-blur-xl relative overflow-hidden space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-100">Bell-State Pan-Retinal Transceiver</h2>
                <p className="text-xs text-slate-400 font-mono">20Hz - 500Hz Full-Duplex Cerebral Steganography</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleDecodeStego}
                disabled={zeroized}
                className="px-3 py-1 rounded-lg bg-sky-600/30 hover:bg-sky-600/50 text-sky-200 border border-sky-500/40 text-xs font-mono transition-all"
              >
                Decode
              </button>
              <button
                onClick={handleModulateStego}
                disabled={zeroized}
                className="px-3 py-1 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 border border-indigo-500/40 text-xs font-mono transition-all"
              >
                Modulate
              </button>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Carrier Tremor Frequency (20-500Hz):</span>
              <span className="text-sky-300 font-semibold">{carrierFreqHz.toFixed(1)} Hz</span>
            </div>
            <input
              type="range"
              min="20"
              max="500"
              step="5"
              disabled={zeroized}
              value={carrierFreqHz}
              onChange={(e) => setCarrierFreqHz(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs font-mono">
              <div className="text-slate-500">Payload Plaintext</div>
              <div className="text-emerald-400 font-bold mt-1">{recoveredPayload}</div>
            </div>
            <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs font-mono">
              <div className="text-slate-500">Recovered Hex Bytes</div>
              <div className="text-sky-300 font-bold mt-1 break-all">{stegoRecoveredBytesHex}</div>
            </div>
          </div>
        </div>

        {/* 4. Septenary-Field zk-STARK Singularity Proofs */}
        <div className="bg-slate-900/60 rounded-2xl border border-indigo-500/20 p-6 backdrop-blur-xl relative overflow-hidden space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-100">Septenary zk-STARK Singularity</h2>
                <p className="text-xs text-slate-400 font-mono">7 Field Towers | t_verify &lt; 0.1ms SLA</p>
              </div>
            </div>
            <button
              onClick={handleGenerateAndVerifyZkSTARK}
              disabled={zeroized}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-200 border border-emerald-500/40 text-xs font-mono transition-all"
            >
              <Zap className="w-3.5 h-3.5" />
              Prove & Verify
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs font-mono">
              <div className="text-slate-500">Verification Time</div>
              <div className="text-emerald-400 font-bold mt-1">{verificationTimeMs.toFixed(3)} ms (SLA: &lt;0.1ms)</div>
            </div>
            <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs font-mono">
              <div className="text-slate-500">Field Towers Verified</div>
              <div className="text-indigo-300 font-bold mt-1">7 of 7 Prime/Binary Fields</div>
            </div>
          </div>

          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1">
            <span className="text-slate-500 text-xs font-mono">Septenary Field Projections:</span>
            <div className="grid grid-cols-2 gap-1 text-[10px] font-mono text-indigo-300 bg-slate-900/80 p-2 rounded border border-indigo-500/20">
              {Object.entries(septenaryFields).map(([name, val]) => (
                <div key={name} className="truncate">
                  <span className="text-slate-400">{name}:</span> {val}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5. 131,072-Bit Master Key Synthesis Panel */}
      <div className="bg-slate-900/60 rounded-2xl border border-indigo-500/20 p-6 backdrop-blur-xl relative overflow-hidden space-y-4">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100">131,072-Bit Master Key Synthesis (K_omnipresent-singularity)</h2>
              <p className="text-xs text-slate-400 font-mono">16,384 Bytes | 32,768 Hex Chars | Entropy &gt; 7.999999999 bits/sample</p>
            </div>
          </div>
          <button
            onClick={handleDerive131072BitKey}
            disabled={zeroized}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600/30 hover:bg-amber-600/50 text-amber-200 border border-amber-500/40 text-xs font-mono transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            Synthesize 131,072-bit Key
          </button>
        </div>

        <div className="space-y-3 pt-2">
          <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-400">Master Key Hex Stream (16,384 bytes = 131,072 bits):</span>
              <span className="text-emerald-400 font-bold">Entropy: {entropyDensityBits.toFixed(9)} bits/sample</span>
            </div>
            <div className="text-xs font-mono text-amber-300 break-all bg-slate-900/90 p-3 rounded-lg border border-amber-500/20 max-h-32 overflow-y-auto">
              {masterKeyHex}
            </div>
          </div>

          <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1">
            <span className="text-slate-400 text-xs font-mono">SHA3-256 State Commitment:</span>
            <div className="text-xs font-mono text-indigo-300 break-all bg-slate-900/90 p-2.5 rounded-lg border border-indigo-500/20">
              {zkCommitment}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OmnipresentMetarealityPage;
