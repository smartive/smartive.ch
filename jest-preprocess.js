const babelOptions = {
  presets: ['@babel/react', '@babel/env'],
  plugins: ['@babel/plugin-proposal-optional-chaining', '@babel/plugin-proposal-class-properties'],
};

// eslint-disable-next-line import/no-extraneous-dependencies
module.exports = require('babel-jest').createTransformer(babelOptions);
