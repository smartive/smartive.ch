import { Story, Meta } from '@storybook/react';

import { Button, ButtonLink, ButtonLinkProps, ButtonProps } from '../../src/components/button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const ButtonTemplate: Story<ButtonProps> = (args) => <Button {...args} />;
const ButtonLinkTemplate: Story<ButtonLinkProps> = (args) => <ButtonLink {...args} />;

export const Default = ButtonTemplate.bind({});
Default.args = {
  children: 'Button',
};

export const Link = ButtonLinkTemplate.bind({});
Link.args = {
  children: 'Link',
  newTab: false,
};
