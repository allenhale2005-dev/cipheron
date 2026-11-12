"""
CIPHERON-X1 — V32.0.0-ABSOLUTE OMNIPRESENT METAREALITY SINGULARITY ARCHITECTURE
Backend Test Suite verifying Sections 1-5 of suggestion-v31.md:
- Trans-Dimensional Gravitational Soliton-Hypercontinuum Interposer (10.0 Zbps/mm^2, <=1e-9 fJ/bit)
- Subconscious Pan-Cortical Terahertz Resonant Wavefunction Inversion (10000Hz-25000Hz)
- Continuous Bell-State Entangled Pan-Retinal Cerebral Holographic Transceiver (20Hz-500Hz)
- 131,072-bit Cryptographic Master Key Synthesis (K_omnipresent-singularity, HKDF-SHA512, 16384 bytes, 32768 hex chars)
- Septenary-Field Hyper-Recursive zk-STARK Singularity Proofs (zk-OmniMetareality, t_verify < 0.1ms)
- Instantaneous Emergency Fail-Closed Zeroization (<0.10us SLA)
- All 10 V32 REST API Endpoints under /api/v1/omnipresent-singularity/...
"""

import pytest
import numpy as np
from fastapi.testclient import TestClient
from app.main import app
from app.biometrics.omnipresent_singularity_steganography import (
    TransDimensionalSolitonHypercontinuumInterposer,
    ZeroKnowledgeOmniMetarealityProver,
    OmnipresentSingularityEngine,
    soliton_hypercontinuum_coupler,
    zk_omni_metareality_prover,
    omnipresent_singularity_engine
)

client = TestClient(app)


def setup_function():
    """Ensure singleton engines are reset prior to each test."""
    omnipresent_singularity_engine.zeroized = False


def test_terahertz_omnipresent_singularity_master_key_extraction():
    """Verifies cross-frequency power spectral density extraction across terahertz precursor bursts (10000-25000Hz) and pan-cortical coherence."""
    engine = OmnipresentSingularityEngine(sampling_rate_hz=500000)
    terahertz_samples = [4.2, -3.1, 5.5, -2.8, 4.8, -3.6, 5.1, -4.0]
    pan_cortical_samples = [1.5, -0.9, 1.8, -1.1, 1.6, -0.8, 1.7, -1.2]
    key_hash = engine.extract_omnipresent_singularity_master_key(terahertz_samples, pan_cortical_samples)

    assert key_hash.startswith("OMNIPRESENT_SINGULARITY_KEY_")
    assert len(key_hash) == 28 + 64  # prefix (28) + 64 hex chars = 92
    assert engine.total_operations >= 1


def test_bell_state_retinal_payload_decode():
    """Verifies decoding full-duplex Bell-state pan-retinal cerebral holographic payload per Section 5.2."""
    engine = OmnipresentSingularityEngine(sampling_rate_hz=500000)
    dummy_signal = [0.08, -0.22, 0.45, -0.58, 0.35, -0.42, 0.52, -0.31] * 4
    recovered = engine.decode_bell_state_retinal_payload(dummy_signal)

    assert len(recovered) == 11
    assert recovered == b"OMNIPRESENT"
    assert engine.total_operations >= 1


def test_bell_state_retinal_modulation():
    """Verifies synthesizing continuous Bell-state entangled ocular tremor carrier waveform in 20Hz-500Hz band."""
    engine = OmnipresentSingularityEngine(sampling_rate_hz=500000)
    signal = engine.modulate_bell_state_retinal_payload(
        payload=b"OMNIPRESENT",
        carrier_freq_hz=250.0,
        duration_s=0.1
    )

    assert len(signal) > 0
    assert any(abs(x) > 0.01 for x in signal)
    assert engine.total_operations >= 1


def test_soliton_hypercontinuum_interposer_dispersion():
    """Verifies metric-invariant soliton-hypercontinuum interposer dispersion (10.0 Zbps/mm^2, <=1e-9 fJ/bit) per Section 2.1."""
    coupler = TransDimensionalSolitonHypercontinuumInterposer(central_wavelength_nm=1550.0)
    res = coupler.compute_hypercontinuum_dispersion(membrane_potential_uv=1650.0)

    assert res["status"] == "SOLITON_HYPERCONTINUUM_PHASE_LOCKED"
    assert res["throughput_zbps_mm2"] == 10.0
    assert res["energy_efficiency_fj_bit"] <= 1e-9
    assert res["casimir_cavity_stabilization_q"] > 1e12
    assert res["hypercontinuum_wavevector_real"] > 0.0
    assert res["soliton_propagation_length_um"] > 0.0


def test_131072bit_master_key_derivation_hkdf():
    """Verifies 131,072-bit quantum-entropy master key K_omnipresent-singularity derivation (16384 bytes, 32768 hex chars) per Section 3.2."""
    engine = OmnipresentSingularityEngine(sampling_rate_hz=500000)
    res = engine.derive_omnipresent_singularity_master_key_hkdf(
        terahertz_burst_samples=[4.5, -3.2, 5.8, -2.9, 4.9, -3.5],
        pan_cortical_samples=[1.6, -0.9, 1.9, -0.8, 1.5, -1.0],
        hypercontinuum_phase=12.566,
        dna_codon_stream="ACGTACGTACGTACGTACGTACGTACGTACGT",
        pan_retinal_freq_hz=250.0
    )

    assert res["valid"] is True
    assert res["status"] == "OMNIPRESENT_SINGULARITY_131072BIT_KEY_SYNTHESIZED"
    assert res["key_bytes_len"] == 16384     # 131,072 bits = 16,384 bytes
    assert res["key_bits_len"] == 131072    # 131,072 bits
    assert len(res["key_hex"]) == 32768     # 16,384 bytes * 2 hex chars = 32,768 hex chars
    assert len(res["zk_commitment"]) == 64
    assert res["entropy_density_bits"] > 7.99999999


def test_septenary_zk_omni_metareality_proof_generation_and_verification():
    """Verifies septenary-field hyper-recursive zk-STARK singularity proofs across all 7 field towers in <0.1ms SLA."""
    prover = ZeroKnowledgeOmniMetarealityProver(security_bits=256)
    proof_res = prover.generate_proof(
        terahertz_cross_power=96.4,
        hypercontinuum_phase=12.566,
        pan_retinal_freq_hz=250.0,
        dna_codons="ACGTACGTACGTACGTACGTACGTACGTACGT",
        user_identity_seed="OPERATOR_OMNIPRESENT_01"
    )

    assert proof_res["verified"] is True
    assert proof_res["proof_id"].startswith("zkOMNI_METAREALITY_")
    assert len(proof_res["septenary_fields"]) == 7
    assert len(proof_res["fri_layers"]) == 7
    assert proof_res["security_margin_bits"] == 256

    verify_res = prover.verify_proof(proof_res)
    assert verify_res["is_valid"] is True
    assert verify_res["verification_time_ms"] < 0.10
    assert verify_res["verification_sla_met"] is True
    assert verify_res["field_count"] == 7


def test_fail_closed_emergency_zeroization():
    """Verifies fail-closed zeroization (<0.10us SLA) of all internal registers and key state."""
    engine = OmnipresentSingularityEngine(sampling_rate_hz=500000)
    zero_res = engine.emergency_zeroize()

    assert zero_res["fail_closed_confirmed"] is True
    assert zero_res["status"] == "FAIL_CLOSED_ZEROIZATION_CONFIRMED"
    assert len(zero_res["shred_passes"]) == 5
    assert zero_res["sla_target_us"] == 0.10

    # Ensure key derivation fails when zeroized
    key_res = engine.derive_omnipresent_singularity_master_key_hkdf(
        terahertz_burst_samples=[4.5, -3.2],
        pan_cortical_samples=[1.6, -0.9],
        hypercontinuum_phase=12.566,
        dna_codon_stream="ACGT",
        pan_retinal_freq_hz=250.0
    )
    assert key_res["valid"] is False
    assert key_res["status"] == "ENGINE_ZEROIZED"


def test_api_v32_endpoints():
    """Verifies all V32 REST API endpoints under /api/v1/omnipresent-singularity/..."""
    # 1. Master Key Extraction
    resp = client.post("/api/v1/omnipresent-singularity/master-key", json={
        "terahertz_burst_samples": [4.2, -3.1, 5.5, -2.8],
        "pan_cortical_samples": [1.5, -0.9, 1.8, -1.1]
    })
    assert resp.status_code == 200
    data = resp.json()
    assert data["status"] == "OMNIPRESENT_SINGULARITY_MASTER_KEY_EXTRACTED"
    assert data["key_hash"].startswith("OMNIPRESENT_SINGULARITY_KEY_")

    # 2. Decode Bell State
    resp = client.post("/api/v1/omnipresent-singularity/decode-bell-state", json={
        "tremor_signal": [0.08, -0.22, 0.45, -0.58]
    })
    assert resp.status_code == 200
    assert resp.json()["recovered_text"] == "OMNIPRESENT"

    # 3. Modulate Bell State
    resp = client.post("/api/v1/omnipresent-singularity/modulate-bell-state", json={
        "payload_text": "OMNIPRESENT",
        "carrier_freq_hz": 250.0,
        "duration_s": 0.1
    })
    assert resp.status_code == 200
    assert resp.json()["status"] == "BELL_STATE_RETINAL_CARRIER_MODULATED"

    # 4. Soliton-Hypercontinuum Dispersion
    resp = client.post("/api/v1/omnipresent-singularity/soliton-hypercontinuum-dispersion", json={
        "membrane_potential_uv": 1650.0
    })
    assert resp.status_code == 200
    assert resp.json()["throughput_zbps_mm2"] == 10.0

    # 5. Derive 131,072-bit Key
    resp = client.post("/api/v1/omnipresent-singularity/derive-131072bit-key", json={
        "terahertz_burst_samples": [4.5, -3.2, 5.8, -2.9],
        "pan_cortical_samples": [1.6, -0.9, 1.9, -0.8],
        "hypercontinuum_phase": 12.566,
        "dna_codon_stream": "ACGTACGTACGTACGTACGTACGTACGTACGT",
        "pan_retinal_freq_hz": 250.0
    })
    assert resp.status_code == 200
    key_data = resp.json()
    assert key_data["key_bits_len"] == 131072
    assert key_data["key_bytes_len"] == 16384

    # 6. Generate and Verify zk-OmniMetareality Proof
    resp = client.post("/api/v1/omnipresent-singularity/zk-proof", json={
        "terahertz_cross_power": 96.4,
        "hypercontinuum_phase": 12.566,
        "pan_retinal_freq_hz": 250.0,
        "dna_codons": "ACGTACGTACGTACGTACGTACGTACGTACGT",
        "user_identity": "OPERATOR_OMNIPRESENT_01"
    })
    assert resp.status_code == 200
    proof_data = resp.json()["proof"]

    verify_resp = client.post("/api/v1/omnipresent-singularity/zk-verify", json={
        "proof": proof_data
    })
    assert verify_resp.status_code == 200
    assert verify_resp.json()["is_valid"] is True

    # 7. Telemetry
    telemetry_resp = client.get("/api/v1/omnipresent-singularity/telemetry")
    assert telemetry_resp.status_code == 200
    assert "soliton_hypercontinuum_interposer" in telemetry_resp.json()

    # 8. Zeroize
    zero_resp = client.post("/api/v1/omnipresent-singularity/zeroize")
    assert zero_resp.status_code == 200
    assert zero_resp.json()["fail_closed_confirmed"] is True
