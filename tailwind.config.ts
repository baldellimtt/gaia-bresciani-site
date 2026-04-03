import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F9F7F2',
        primary: {
          DEFAULT: '#2D464C',
          light: '#3A5A62',
          dark: '#1E3238',
        },
        accent: {
          DEFAULT: '#D1A684',
          light: '#E0C4A8',
          dark: '#B8875F',
        },
      },
      fontFamily: {
        serif: ['var(--font-lora)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.05)',
        'soft-lg': '0 20px 50px rgba(0,0,0,0.08)',
        'soft-xl': '0 25px 60px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
