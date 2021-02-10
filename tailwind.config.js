module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['IBM Plex Serif', 'serif'],
    },
    extend: {
      colors: {
        apricot: {
          500: '#F49560',
          200: '#F8C0A0',
        },
        cornflower: {
          500: '#133097',
          200: '#516ED4',
        },
        mint: {
          500: '#7DDDD1',
          200: '#C4EBE6',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
