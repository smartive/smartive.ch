# @smartive/guetzli

A smartive Component Library created with [Typescript](https://www.typescriptlang.org/) [React](https://reactjs.org/) and styled with [TailwindCSS](https://tailwindcss.com/). Some components also use [Framer-Motion](https://www.framer.com/motion/) for animations.

## Usage

```sh
npm install @smartive/guetzli
```

```ts
import { Heading1, Copy, ... } from '@smartive/guetzli';
```

### TailwindCSS

These components require [TailwindCSS](https://tailwindcss.com/) to be installed in your project and your `tailwind.config.js` to be configured like so:

```js
const guetzliConfig = require('@smartive/guetzli/config');

module.exports = guetzliConfig.tailwindConfig({
  // your project specific config
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
});
```

Additionally import the css from the package **at the top** of your tailwind-css file:

```css
@import '@smartive/guetzli/styles/guetzli.css';

@tailwind base;
@tailwind components;
@tailwind utilities;
```

For this to work the `postcss-import` plugin is needed ([TailwindCSS Documentation](https://tailwindcss.com/docs/using-with-preprocessors#build-time-imports)):

```sh
npm install -D postcss-import
```

```js
// postcss.config.js
module.exports = {
  plugins: [require('postcss-import'), require('tailwindcss'), require('autoprefixer')],
};
```

### Framer Motion

Some components (like `Tooltip`) use [Framer-Motion](https://www.framer.com/motion/). To enable effective Tree-Shaking & Code-Splitting all components use the `framer-motion` package as described here: https://www.framer.com/api/motion/guide-reduce-bundle-size/

This means you need to manually load Framer-Motion Features in your Project-Root. This library only uses the `domAnimation` feature:

```ts
import { LazyMotion, domAnimation } from 'framer-motion';

const App = ({ children }) => (
  <LazyMotion strict features={domAnimation}>
    {children}
  </LazyMotion>
);
```

## Running locally with Storybook

```sh
npm ci
npm run storybook
```

If new components are added make sure the component gets exported properly through the `index.ts` files in the respective folders. The `index.ts` files can be generated using:

```sh
npm run generate-index-files
```

## Building production package

```sh
npm run build
```

Build-Output can be found in the `dist` folder.
