const { ...config } = require('@smartive/prettier-config');

module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  ...config,
};
