module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Inter"', 'sans-serif'],
      serif: ['"IBM Plex Serif"', 'serif'],
    },
    fontWeight: {
      normal: '400',
      bold: '600',
    },
    fontSize: {
      xxs: ['0.875rem', { lineHeight: '150%' }],
      xs: ['1rem', { lineHeight: '150%' }],
      sm: ['1.125rem', { lineHeight: '150%' }],
      base: ['1.5rem', { lineHeight: '150%' }],
      lg: ['2rem', { lineHeight: '125%' }],
      xl: ['3rem', { lineHeight: '125%' }],
      xxl: ['5rem', { lineHeight: '6rem' }],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: {
        DEFAULT: '#252525',
      },
      white: {
        200: '#F8F7F5',
        100: '#ffffff',
      },
      apricot: {
        800: '#903400',
        500: '#F8935A',
        200: '#F8C0A0',
      },
      cornflower: {
        800: '#133097',
        500: '#6986E8',
        200: '#B1C0F4',
      },
      mint: {
        800: '#0D7E6F',
        500: '#7DDDD1',
        200: '#C4EBE6',
      },
    },
    borderRadius: {
      none: '0px',
      sm: '0.5rem',
      DEFAULT: '1rem',
      full: '9999px',
    },
    extend: {
      spacing: {
        120: '30rem',
      },
      minWidth: {
        '2/3': '66.666667%',
        '11/12': '91.666667%',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
};
