import { LazyMotion, domAnimation } from 'framer-motion';
import '../styles/tailwind.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Guides', 'Foundation', ['Logo', 'Colors', 'Typography', 'Iconography', 'Layout'], 'Examples', 'Components'],
    },
  },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <LazyMotion strict features={domAnimation}>
      <Story />
    </LazyMotion>
  ),
];
