import { Meta, Story } from '@storybook/react';
import { Tooltip as TooltipComponent, TooltipProps } from '../../src/components/tooltip';

export default {
  title: 'Components/Tooltip',
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
