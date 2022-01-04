const guetzliConfig = require('@smartive/guetzli/config');

module.exports = guetzliConfig.tailwindConfig({
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
});
