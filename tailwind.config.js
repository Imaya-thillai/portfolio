/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#818cf8',
          light: '#a5b4fc',
          dark: '#6366f1',
          purple: '#a855f7',
        },
      },
    },
  },
  plugins: [],
}
