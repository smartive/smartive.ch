const guetzliConfig = require('@smartive/guetzli/config');

module.exports = guetzliConfig.tailwindConfig({
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
});
