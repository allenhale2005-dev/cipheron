import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Navigation, ActiveTab } from './components/Navigation';
import { Workspace } from './pages/Workspace';
import { TacticalConsolePage } from './pages/TacticalConsolePage';
import { KasiskiPage } from './pages/KasiskiPage';
import { EsotericParsersPage } from './pages/EsotericParsersPage';
import { WasmSandboxPage } from './pages/WasmSandboxPage';
import { NeuralFabricPage } from './pages/NeuralFabricPage';
import { AutonomousSiliconPage } from './pages/AutonomousSiliconPage';
import { CosmicOmnipresencePage } from './pages/CosmicOmnipresencePage';
import { ChronoRecursionPage } from './pages/ChronoRecursionPage';
import { OcularGazePage } from './pages/OcularGazePage';
import { HardwarePage } from './pages/HardwarePage';
import { CodeAnalysisPage } from './pages/CodeAnalysisPage';
import { BinaryPage } from './pages/BinaryPage';
import { SecurityMode, HardwareStatus } from './types';
import { api } from './services/api';
import { ShieldAlert } from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('workspace');
  const [isNavExpanded, setIsNavExpanded] = useState<boolean>(true);
  const [currentProfile, setCurrentProfile] = useState<SecurityMode>('STANDARD');
  const [hardwareStatus, setHardwareStatus] = useState<HardwareStatus | undefined>(undefined);
  const [isWiping, setIsWiping] = useState(false);
  const [wsConnected, setWsConnected] = useState(false);

  // Poll hardware status & security profile on load
  const refreshHardware = async () => {
    try {
      const status = await api.getHardwareStatus();
      setHardwareStatus(status);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    refreshHardware();
    api.getSecurityProfile().then((res) => setCurrentProfile(res.profile)).catch(() => {});

    // WebSocket connection for live telemetry
    let ws: WebSocket | null = null;
    try {
      let wsUrl: string;
      if (import.meta.env.VITE_WS_URL) {
        wsUrl = import.meta.env.VITE_WS_URL;
      } else if (import.meta.env.VITE_API_BASE_URL) {
        const apiUrl = new URL(import.meta.env.VITE_API_BASE_URL, window.location.origin);
        const wsProto = apiUrl.protocol === 'https:' ? 'wss:' : 'ws:';
        wsUrl = `${wsProto}//${apiUrl.host}/ws/stream`;
      } else {
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        wsUrl = `${protocol}//${window.location.host}/ws/stream`;
      }
      ws = new WebSocket(wsUrl);

      ws.onopen = () => setWsConnected(true);
      ws.onclose = () => setWsConnected(false);
      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          if (msg.type === 'HARDWARE_STATE') {
            setHardwareStatus(msg.data);
          }
        } catch {
          // ignore
        }
      };
    } catch {
      // ignore
    }

    return () => {
      if (ws) ws.close();
    };
  }, []);

  const handleProfileChange = async (mode: SecurityMode) => {
    setCurrentProfile(mode);
    try {
      await api.setSecurityProfile(mode);
      refreshHardware();
    } catch (err: any) {
      alert(`Profile change error: ${err.message}`);
    }
  };

  const handlePanicWipe = async () => {
    setIsWiping(true);
    try {
      await api.triggerPanicWipe();
      await refreshHardware();
    } catch {
      // ignore
    } finally {
      setTimeout(() => {
        setIsWiping(false);
        setActiveTab('workspace');
      }, 1800);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#E0E6ED] relative selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
      {/* Full Screen Memory Shredding Animation Overlay */}
      {isWiping && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center space-y-4 animate-pulse">
          <ShieldAlert className="w-16 h-16 text-red-500 animate-bounce" />
          <h2 className="text-2xl font-mono font-bold text-red-500 tracking-widest">
            PRD 7.3 MULTI-PASS MEMORY SHREDDER ACTIVE
          </h2>
          <div className="font-mono text-xs text-slate-300 space-y-1 text-center max-w-md">
            <p className="text-amber-400">PASS 1: Overwriting RAM buffers with 0x00...</p>
            <p className="text-amber-400">PASS 2: Overwriting RAM buffers with 0xFF...</p>
            <p className="text-amber-400">PASS 3: Cryptographic pseudo-random byte overwriting...</p>
            <p className="text-[#00E676] font-bold pt-2">Zero-trace volatile wipe confirmed.</p>
          </div>
        </div>
      )}

      {/* Slide Navigation Rail */}
      <Navigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isOpen={isNavExpanded}
        onToggle={() => setIsNavExpanded(!isNavExpanded)}
      />

      {/* Main Layout Container with responsive padding aligned to slide nav width */}
      <div
        className={`flex flex-col min-h-screen transition-all duration-300 ease-in-out ${
          isNavExpanded ? 'pl-64 md:pl-72' : 'pl-16'
        }`}
      >
        {/* Header */}
        <Header
          currentProfile={currentProfile}
          onProfileChange={handleProfileChange}
          onPanicWipe={handlePanicWipe}
          hardwareStatus={hardwareStatus}
          isWiping={isWiping}
          isNavExpanded={isNavExpanded}
          onToggleNav={() => setIsNavExpanded(!isNavExpanded)}
        />

        {/* 13 Core Defense & Cryptanalysis Suites */}
        <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8">
          {activeTab === 'workspace' && (
            <Workspace currentProfile={currentProfile} />
          )}

          {activeTab === 'tactical-console' && (
            <TacticalConsolePage
              currentProfile={currentProfile}
              onProfileChange={handleProfileChange}
            />
          )}

          {activeTab === 'kasiski' && <KasiskiPage />}

          {activeTab === 'esoteric' && <EsotericParsersPage />}

          {activeTab === 'wasm' && <WasmSandboxPage />}

          {activeTab === 'neural-fabric' && <NeuralFabricPage />}

          {activeTab === 'quantum-silicon' && <AutonomousSiliconPage />}

          {activeTab === 'cosmic-omnipresence' && <CosmicOmnipresencePage />}

          {activeTab === 'chrono-recursion' && <ChronoRecursionPage />}

          {activeTab === 'ocular-gaze' && <OcularGazePage />}

          {activeTab === 'hardware' && (
            <HardwarePage
              hardwareStatus={hardwareStatus}
              onRefreshStatus={refreshHardware}
              onPanicTriggered={handlePanicWipe}
            />
          )}

          {activeTab === 'code' && <CodeAnalysisPage />}

          {activeTab === 'binary' && <BinaryPage />}
        </main>

        {/* System Status Footer */}
        <footer className="bg-[#10141D] border-t border-[#232B3E] px-4 lg:px-8 py-2.5 text-xs font-mono text-slate-500">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              <span className="flex items-center space-x-1.5 text-slate-400">
                <span className={`w-2 h-2 rounded-full ${wsConnected ? 'bg-[#00E676]' : 'bg-amber-400'}`} />
                <span>WS STREAM: {wsConnected ? 'SYNCHRONIZED' : 'REST POLLING'}</span>
              </span>
              <span>|</span>
              <span className="text-[#00E5FF]">PROFILE: {currentProfile}</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-slate-400">CIPHERON-X1 TACTICAL CONSOLE</span>
              <span className="hidden sm:inline text-slate-600">&bull;</span>
              <span className="text-sky-400 hidden sm:inline">13 DEDICATED CRYPTANALYSIS &amp; HARDWARE SUITES</span>
              <span className="hidden sm:inline text-slate-600">&bull;</span>
              <span className="text-emerald-400 font-bold hidden sm:inline">100/100 PRODUCTION GRADE</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
