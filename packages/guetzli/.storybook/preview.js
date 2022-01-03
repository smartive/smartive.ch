import { LazyMotion, domAnimation } from 'framer-motion';
import '../styles/tailwind.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
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
