import React from 'react';
import { ShieldCheck, Cpu, Lock, RefreshCw } from 'lucide-react';

interface HeaderProps {
  securityMode: 'STANDARD' | 'SECURE' | 'FORTRESS';
  hardwareConnected: boolean;
  activeKey?: string;
  onZeroize?: () => void;
  onProfileChange?: (mode: 'STANDARD' | 'SECURE' | 'FORTRESS') => void;
}

export const ConsoleHeader: React.FC<HeaderProps> = ({
  securityMode,
  hardwareConnected,
  activeKey,
  onZeroize,
  onProfileChange,
}) => {
  const handleZeroizeClick = () => {
    if (onZeroize) {
      onZeroize();
    } else {
      alert('INITIATING BUFFER ZEROIZATION...');
    }
  };

  return (
    <header className="bg-chassis-panel border-b border-chassis-border px-4 py-2.5 flex items-center justify-between font-mono select-none">
      {/* Brand & Classification Level */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-sky-carrier rounded-sm shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
          <h1 className="text-rose-white text-sm font-bold tracking-widest">CIPHERON-X1</h1>
        </div>
        <span className="text-chassis-border font-light">/</span>
        <span className="text-[11px] px-2 py-0.5 bg-chassis-border text-rose-white tracking-wider rounded-sm font-semibold">
          DRDO-SAG BENCHMARK
        </span>
      </div>

      {/* Operational Telemetry Indicators */}
      <div className="flex items-center gap-4 text-xs">
        {/* Hardware Link */}
        <div className="flex items-center gap-1.5 text-rose-muted">
          <Cpu size={13} className={hardwareConnected ? "text-sky-carrier" : "text-orange-alert"} />
          <span className="text-[11px]">ESP32-S3:</span>
          <span className={hardwareConnected ? "text-rose-white font-semibold" : "text-orange-alert font-semibold"}>
            {hardwareConnected ? "LINKED (460800 BAUD)" : "OFFLINE"}
          </span>
        </div>

        {/* Secure Element Slot */}
        <div className="flex items-center gap-1.5 text-rose-muted">
          <Lock size={13} className="text-sky-carrier" />
          <span className="text-[11px]">ATECC608A:</span>
          <span className="text-rose-white font-semibold">SLOT 0 [LOCKED]</span>
        </div>

        {/* Security Profile Switch */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-rose-muted">PROFILE:</span>
          {onProfileChange ? (
            <select
              value={securityMode}
              onChange={(e) => onProfileChange(e.target.value as 'STANDARD' | 'SECURE' | 'FORTRESS')}
              className="px-2 py-0.5 bg-orange-subtle border border-orange-alert text-orange-alert text-[10px] font-bold tracking-wider rounded-sm flex items-center gap-1 outline-none cursor-pointer"
            >
              <option value="STANDARD" className="bg-chassis-panel text-sky-carrier">STANDARD</option>
              <option value="SECURE" className="bg-chassis-panel text-orange-alert">SECURE</option>
              <option value="FORTRESS" className="bg-chassis-panel text-orange-deep">FORTRESS</option>
            </select>
          ) : (
            <span className="px-2 py-0.5 bg-orange-subtle border border-orange-alert text-orange-alert text-[10px] font-bold tracking-wider rounded-sm flex items-center gap-1">
              <ShieldCheck size={11} />
              {securityMode}
            </span>
          )}
        </div>

        {/* Emergency Zeroize Button */}
        <button
          onClick={handleZeroizeClick}
          className="ml-2 px-2.5 py-1 bg-chassis-border hover:bg-orange-deep text-rose-white hover:text-white border border-chassis-border hover:border-orange-alert text-[11px] tracking-wider rounded-sm transition-colors duration-150 flex items-center gap-1.5 font-semibold"
        >
          <RefreshCw size={11} />
          ZEROIZE
        </button>
      </div>
    </header>
  );
};

export default ConsoleHeader;
