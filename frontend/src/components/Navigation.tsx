import React, { useState, useEffect } from 'react';
import {
  Microscope,
  ShieldCheck,
  BarChart3,
  Layers,
  Box,
  Brain,
  Atom,
  Globe2,
  History,
  Eye,
  Cpu,
  Code2,
  Binary,
  ChevronLeft,
  ChevronRight,
  Search,
  SlidersHorizontal,
  Compass
} from 'lucide-react';

export type ActiveTab =
  | 'workspace'
  | 'tactical-console'
  | 'kasiski'
  | 'esoteric'
  | 'wasm'
  | 'neural-fabric'
  | 'quantum-silicon'
  | 'cosmic-omnipresence'
  | 'chrono-recursion'
  | 'ocular-gaze'
  | 'hardware'
  | 'code'
  | 'binary';

export interface NavItem {
  id: ActiveTab;
  label: string;
  icon: React.ElementType;
  badge: string;
  category: 'COMMAND' | 'ANALYSIS' | 'COMPUTE' | 'BIOMETRICS & TIME';
  description: string;
}

export const TACTICAL_TABS: NavItem[] = [
  // 1. COMMAND
  {
    id: 'workspace',
    label: 'Analysis Studio',
    icon: Microscope,
    badge: 'CORE',
    category: 'COMMAND',
    description: 'Central recursive cipher analysis and transformation DAG studio'
  },
  {
    id: 'tactical-console',
    label: 'DRDO Tactical Console',
    icon: ShieldCheck,
    badge: 'DRDO',
    category: 'COMMAND',
    description: 'DRDO-SAG 5-module defense console & 3D WebGL pipeline'
  },

  // 2. ANALYSIS
  {
    id: 'kasiski',
    label: 'Kasiski & IC Lab',
    icon: BarChart3,
    badge: 'V2.0',
    category: 'ANALYSIS',
    description: 'Polyalphabetical IOC and Friedman distance analyzer'
  },
  {
    id: 'esoteric',
    label: 'Esoteric Formats',
    icon: Layers,
    badge: 'PARSERS',
    category: 'ANALYSIS',
    description: 'Protobuf, CBOR, ASN.1 and esoteric packet decoders'
  },
  {
    id: 'wasm',
    label: 'WASM Sandbox',
    icon: Box,
    badge: 'PLUGINS',
    category: 'ANALYSIS',
    description: 'Fuel-limited sandboxed WebAssembly decoding containers'
  },
  {
    id: 'code',
    label: 'Code Intelligence AST',
    icon: Code2,
    badge: 'AST',
    category: 'ANALYSIS',
    description: 'Entropy scanning, AST inspection and symbolic decompiler'
  },
  {
    id: 'binary',
    label: 'Binary & Hashes',
    icon: Binary,
    badge: 'HEX',
    category: 'ANALYSIS',
    description: 'Magic byte forensics, byte histograms and hash recognition'
  },

  // 3. COMPUTE
  {
    id: 'neural-fabric',
    label: 'Neural Fabric & ZK',
    icon: Brain,
    badge: 'V6.0',
    category: 'COMPUTE',
    description: 'Neuromorphic SNN LIF event mesh and Plonk BN254 zero-knowledge proofs'
  },
  {
    id: 'quantum-silicon',
    label: 'Autonomous Silicon & QKD',
    icon: Atom,
    badge: 'V7.0',
    category: 'COMPUTE',
    description: 'BB84/E91 quantum key distribution and eFPGA dynamic reconfiguration'
  },
  {
    id: 'hardware',
    label: 'ESP32 Hardware Lab',
    icon: Cpu,
    badge: 'OLED',
    category: 'COMPUTE',
    description: 'Physical appliance I/O, SSD1306 display mirror & diagnostics'
  },

  // 4. BIOMETRICS & TIME
  {
    id: 'ocular-gaze',
    label: 'Ocular & Eye-Gaze Biometrics',
    icon: Eye,
    badge: 'V21.0',
    category: 'BIOMETRICS & TIME',
    description: 'Involuntary micro-saccadic eye tracking and gaze-Markov steganography'
  },
  {
    id: 'chrono-recursion',
    label: 'Chrono-Recursion & Inversion',
    icon: History,
    badge: 'V14.0',
    category: 'BIOMETRICS & TIME',
    description: '512-temporal qubit chronological entropy inversion engine'
  },
  {
    id: 'cosmic-omnipresence',
    label: 'Cosmic Omnipresence',
    icon: Globe2,
    badge: 'V13.0',
    category: 'BIOMETRICS & TIME',
    description: 'Quantum foam topological wavepacket continuum monitoring'
  }
];

interface NavigationProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  onTabChange,
  isOpen = true,
  onToggle
}) => {
  const [expanded, setExpanded] = useState<boolean>(isOpen);
  const [filterQuery, setFilterQuery] = useState<string>('');

  // Sync with external control if provided
  useEffect(() => {
    setExpanded(isOpen);
  }, [isOpen]);

  const toggleSidebar = () => {
    const next = !expanded;
    setExpanded(next);
    if (onToggle) onToggle();
  };

  // Keyboard shortcut: Press '[' to toggle slide nav
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === '[' || e.key === ']') && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        toggleSidebar();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expanded]);

  // Filter tabs by query
  const filteredTabs = TACTICAL_TABS.filter((tab) => {
    if (!filterQuery.trim()) return true;
    const q = filterQuery.toLowerCase();
    return (
      tab.label.toLowerCase().includes(q) ||
      tab.badge.toLowerCase().includes(q) ||
      tab.category.toLowerCase().includes(q)
    );
  });

  const categories: Array<'COMMAND' | 'ANALYSIS' | 'COMPUTE' | 'BIOMETRICS & TIME'> = [
    'COMMAND',
    'ANALYSIS',
    'COMPUTE',
    'BIOMETRICS & TIME'
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-screen z-30 bg-[#070507] border-r border-[#241822] flex flex-col transition-all duration-300 ease-in-out select-none shadow-2xl ${
        expanded ? 'w-64 md:w-72' : 'w-16'
      }`}
    >
      {/* Top Header / Brand Row in Slide Nav */}
      <div className="h-14 border-b border-[#241822] flex items-center justify-between px-3.5 bg-[#0F0A0E]">
        {expanded ? (
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="w-2.5 h-2.5 rounded-none bg-[#38BDF8] shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            <div className="flex flex-col truncate">
              <span className="font-mono text-xs font-bold text-[#FFF1F2] tracking-widest truncate">
                CIPHERON-X1
              </span>
              <span className="text-[9px] font-mono text-[#FDA4AF] tracking-wider truncate">
                13 TACTICAL SUITES
              </span>
            </div>
          </div>
        ) : (
          <div className="mx-auto">
            <div className="w-3 h-3 rounded-none bg-[#38BDF8] shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
          </div>
        )}

        <button
          onClick={toggleSidebar}
          title={expanded ? 'Collapse Navigation ( [ )' : 'Expand Navigation ( [ )'}
          className="p-1.5 rounded-sm bg-[#161216] hover:bg-[#241822] text-[#38BDF8] hover:text-[#FFF1F2] border border-[#241822] transition-colors"
        >
          {expanded ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
        </button>
      </div>

      {/* Search Input when expanded */}
      {expanded && (
        <div className="p-3 border-b border-[#241822] bg-[#070507]">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-[#FDA4AF] absolute left-2.5 top-2.5 pointer-events-none" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Search 13 suites..."
              className="w-full pl-8 pr-2.5 py-1.5 bg-[#0F0A0E] border border-[#241822] rounded-sm text-xs font-mono text-[#FFF1F2] placeholder-[#9F838C] outline-none focus:border-[#38BDF8] transition-colors"
            />
          </div>
        </div>
      )}

      {/* Navigation Links List */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 space-y-4 scrollbar-thin">
        {categories.map((cat) => {
          const catTabs = filteredTabs.filter((t) => t.category === cat);
          if (catTabs.length === 0) return null;

          return (
            <div key={cat} className="space-y-1">
              {expanded && (
                <div className="px-2 pt-2 pb-1 text-[9px] font-mono font-bold tracking-widest text-[#9F838C] uppercase border-b border-[#241822]/60">
                  {cat}
                </div>
              )}

              {catTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    title={!expanded ? `${tab.label} (${tab.badge})` : tab.description}
                    className={`w-full group flex items-center rounded-sm font-mono text-xs transition-all relative ${
                      expanded ? 'px-2.5 py-2 justify-between' : 'p-2.5 justify-center'
                    } ${
                      isActive
                        ? 'bg-[#0F0A0E] text-[#38BDF8] border border-[#38BDF8]/60 shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                        : 'text-[#FDA4AF] hover:text-[#FFF1F2] hover:bg-[#0F0A0E]/70 border border-transparent'
                    }`}
                  >
                    {/* Active Left Indicator Bar */}
                    {isActive && (
                      <span className="absolute left-0 top-1 bottom-1 w-1 bg-[#38BDF8] rounded-r shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                    )}

                    <div className="flex items-center gap-2.5 truncate">
                      <Icon
                        className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${
                          isActive ? 'text-[#38BDF8]' : 'text-[#FDA4AF] group-hover:text-[#38BDF8]'
                        }`}
                      />
                      {expanded && (
                        <span className="truncate text-left font-medium">
                          {tab.label}
                        </span>
                      )}
                    </div>

                    {expanded && (
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.5 rounded-sm shrink-0 uppercase tracking-wider ${
                          isActive
                            ? 'bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/40'
                            : 'bg-[#161216] text-[#9F838C] border border-[#241822]'
                        }`}
                      >
                        {tab.badge}
                      </span>
                    )}

                    {/* Collapsed Tooltip Flyout */}
                    {!expanded && (
                      <div className="absolute left-16 z-50 invisible group-hover:visible whitespace-nowrap bg-[#0F0A0E] border border-[#38BDF8]/60 text-[#FFF1F2] text-[11px] px-2.5 py-1.5 rounded-sm shadow-2xl pointer-events-none tracking-wide">
                        <div className="font-bold text-[#38BDF8] flex items-center gap-1.5">
                          <span>{tab.label}</span>
                          <span className="text-[9px] px-1 bg-[#38BDF8]/20 rounded-sm">
                            {tab.badge}
                          </span>
                        </div>
                        <div className="text-[10px] text-[#FDA4AF] mt-0.5">{tab.description}</div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Bottom Footer Status in Slide Nav */}
      <div className="p-3 border-t border-[#241822] bg-[#0F0A0E] text-[10px] font-mono text-[#9F838C]">
        {expanded ? (
          <div className="space-y-1">
            <div className="flex justify-between items-center text-[10px]">
              <span className="text-[#FDA4AF]">NAVBAR MODE:</span>
              <span className="text-[#38BDF8] font-bold">SLIDE RAIL</span>
            </div>
            <div className="flex justify-between items-center text-[9px] text-[#9F838C]">
              <span>SHORTCUT:</span>
              <kbd className="px-1 bg-[#161216] border border-[#241822] rounded text-[#FFF1F2]">
                [
              </kbd>
            </div>
          </div>
        ) : (
          <div className="text-center font-bold text-[#38BDF8]">13</div>
        )}
      </div>
    </aside>
  );
};

export default Navigation;
