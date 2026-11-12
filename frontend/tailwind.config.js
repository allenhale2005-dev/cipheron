/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        chassis: {
          dark: '#070507',
          panel: '#0F0A0E',
          border: '#241822',
        },
        sky: {
          carrier: '#38BDF8',
          deep: '#0284C7',
          subtle: 'rgba(3, 105, 161, 0.15)',
        },
        orange: {
          alert: '#F97316',
          deep: '#EA580C',
          subtle: 'rgba(249, 115, 22, 0.15)',
        },
        rose: {
          white: '#FFF1F2',
          muted: '#FDA4AF',
          dim: '#9F838C',
        },
        cipher: {
          bg: '#0B0F17',
          surface: '#161B26',
          card: '#1B2232',
          border: '#232B3E',
          cyan: '#00E5FF',
          amber: '#FFB300',
          red: '#FF3D00',
          green: '#00E676',
          text: '#E0E6ED',
          muted: '#8A99AD'
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        oled: ['"VT323"', 'Courier New', 'monospace']
      },
      borderRadius: {
        'none': '0px',
        'sm': '2px',
        'tactical': '3px',
      }
    },
  },
  plugins: [],
}
