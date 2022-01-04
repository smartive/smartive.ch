import { actions } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

import { Link, LinkButton, LinkButtonProps, LinkProps } from '../../src/components/link';

export default {
  title: 'Components/Link',
  component: Link,
} as Meta;

const LinkTemplate: Story<LinkProps> = ({ children, ...args }) => <Link {...args}>{children}</Link>;
export const Default = LinkTemplate.bind({});
Default.args = {
  children: 'Klick!',
  variant: 'Default',
  href: 'https://smartive.ch',
};

const LinkButtonTemplate: Story<LinkButtonProps> = ({ children, ...args }) => (
  <LinkButton {...actions('onClick')} {...args}>
    {children}
  </LinkButton>
);
export const Button = LinkButtonTemplate.bind({});
Button.args = {
  children: 'Menu öffnen',
  variant: 'Default',
};
