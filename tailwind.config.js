/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0c',
          secondary: '#111116',
          card: '#13131a',
          elevated: '#1c1c26',
        },
        accent: {
          cyan: '#00f5c4',
          purple: '#a855f7',
          pink: '#f43f8e',
          orange: '#ff6b35',
        },
        text: {
          primary: '#e8e8f0',
          muted: '#6b6b80',
          faint: '#2e2e40',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'spin-slow': 'spin 25s linear infinite',
        'blob': 'blob 10s ease-in-out infinite',
        'grain': 'grain 0.4s steps(1) infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        glowPulse: {
          '0%,100%': { boxShadow: '0 0 20px rgba(0,245,196,0.3), 0 0 40px rgba(0,245,196,0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(0,245,196,0.7), 0 0 80px rgba(0,245,196,0.3)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blob: {
          '0%,100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '50% 60% 30% 60% / 30% 40% 70% 50%' },
          '75%': { borderRadius: '40% 60% 60% 40% / 60% 30% 60% 40%' },
        },
        grain: {
          '0%,100%': { transform: 'translate(0,0)' },
          '20%': { transform: 'translate(-5%,-10%)' },
          '40%': { transform: 'translate(-15%,5%)' },
          '60%': { transform: 'translate(7%,-20%)' },
          '80%': { transform: 'translate(-5%,15%)' },
        },
      },
    },
  },
  plugins: [],
}

