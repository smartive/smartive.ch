const guetzliConfig = require('@smartive/guetzli/config');

module.exports = guetzliConfig.tailwindConfig({
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--sans-font)', 'sans-serif'],
      serif: ['var(--serif-font)', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    extend: {
      backgroundImage: {
        'conic-gradient':
          'conic-gradient(from 180deg at 50% 50%, #6986E8 70deg, #F8935A 100deg, #7DDDD1 270deg, #6986E8 290deg)',
      },
      spacing: {
        'abs-c-5': 'calc(50% - 4.5rem)',
        'abs-c-7': 'calc(50% - 7rem)',
      },
      transitionProperty: {
        spacing: 'margin transform',
      },
      colors: {
        success: '#16a34a',
        error: '#ef4444',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
});
