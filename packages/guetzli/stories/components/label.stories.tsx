import { Meta, Story } from '@storybook/react';
import { Label as LabelComponent, LabelProps } from '../../src/components/label';

export default {
  title: 'Components/Label',
  component: LabelComponent,
} as Meta;

const LabelTemplate: Story<LabelProps> = ({ children, ...args }) => <LabelComponent {...args}>{children}</LabelComponent>;

export const Label = LabelTemplate.bind({});
Label.args = {
  children: 'Mail:',
  as: 'label',
};
