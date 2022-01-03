import { Meta, Story } from '@storybook/react';

import { Tooltip as TooltipComponent, TooltipProps } from '../../src/elements/tooltip';

export default {
  title: 'Elements/Tooltip',
  component: TooltipComponent,
} as Meta;

export const Tooltip: Story<TooltipProps> = ({ children, ...args }) => (
  <TooltipComponent {...args}>{children}</TooltipComponent>
);
Tooltip.args = {
  children: 'Magst du Tooltips?',
  text: 'Ja klar!',
  isOpen: true,
};
