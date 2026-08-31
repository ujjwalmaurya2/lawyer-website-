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
        charcoal: {
          950: '#08090A',
          900: '#0B0D0E',
          850: '#131617',
          800: '#17191A', // Primary Deep Charcoal text
          750: '#222629',
          700: '#303335',
          600: '#45494C',
          500: '#62686B',
        },
        ivory: {
          50: '#FCFBF8',
          100: '#F8F5EF', // Primary Warm Ivory Background
          150: '#F3EFE7',
          200: '#EDE8DD', // Soft Stone surface
          300: '#E2DDD1', // Light border
          400: '#D5CFC0',
          500: '#BCB6A8',
        },
        burgundy: {
          950: '#260B10',
          900: '#3D1219',
          850: '#4E1721',
          800: '#641F2B', // Primary Deep Burgundy
          700: '#7B2735',
          600: '#943242',
          500: '#AF4254',
          100: '#F7E9EC',
          50: '#FAF0F2',
        },
        terracotta: {
          900: '#6E3222',
          800: '#8A402D',
          700: '#A14E38',
          600: '#B86148', // Muted Terracotta Accent
          500: '#CB745C',
          400: '#DE8B75',
          100: '#FBECE8',
          50: '#FDF6F3',
        },
        navy: {
          950: '#0C1622',
          900: '#17283A', // Deep Navy Institutional
          850: '#1D3248',
          800: '#26405C',
          700: '#345476',
          600: '#476C93',
          100: '#EAF0F6',
          50: '#F4F7FA',
        },
        sage: {
          900: '#2D332A',
          800: '#3E463A',
          700: '#525B4C',
          600: '#66715F', // Muted Sage Accent
          500: '#7D8A75',
          400: '#97A48F',
          100: '#EDF1EB',
          50: '#F6F8F5',
        },
        brass: {
          50: '#FAF6EE',
          100: '#F3E9D5',
          200: '#E8D7B8',
          300: '#DAC297',
          400: '#C5A880', // Dark mode gold
          500: '#B9965B', // Primary Antique Brass / Gold
          600: '#9E7E45',
          700: '#826533',
          800: '#664E25',
        },
        stone: {
          muted: '#62686B',
          dim: '#848B8F',
          dark: '#303335',
          border: '#D9D5CC',
          line: '#E2DDD1',
        },
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'serif'],
      },
      letterSpacing: {
        'widest-plus': '0.25em',
        'institutional': '0.18em',
      },
      boxShadow: {
        'soft-light': '0 4px 20px -2px rgba(23, 25, 26, 0.06), 0 2px 6px -1px rgba(23, 25, 26, 0.03)',
        'card-light': '0 10px 30px -4px rgba(23, 25, 26, 0.08)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'burgundy-glow': '0 8px 25px -4px rgba(100, 31, 43, 0.25)',
        'gold-glow': '0 0 25px rgba(185, 150, 91, 0.22)',
      },
    },
  },
  plugins: [],
}
