import { Meta, Story } from '@storybook/react';
import { Logo as LogoComponent, LogoProps } from '../../src/identity/logo';

export default {
  title: 'Identity/Logo',
  component: LogoComponent,
} as Meta;

const LogoTemplate: Story<LogoProps> = (args) => <LogoComponent {...args} />;

export const Logo = LogoTemplate.bind({});
Logo.args = {
  inverted: false,
};
