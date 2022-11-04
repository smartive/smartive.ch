const guetzliConfig = require('@smartive/guetzli/config');

module.exports = guetzliConfig.tailwindConfig({
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"IBM Plex Serif"', 'serif'],
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
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
});
