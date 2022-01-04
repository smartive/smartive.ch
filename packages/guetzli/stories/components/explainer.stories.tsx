import { Meta, Story } from '@storybook/react';
import { Explainer as ExplainerComponent, ExplainerProps } from '../../src/components/explainer';
import { Copy } from '../../src/foundation/typography/copy';

export default {
  title: 'Foundation/Typography/Explainer',
  component: ExplainerComponent,
} as Meta;

const ExplainerTemplate: Story<ExplainerProps> = ({ children, ...args }) => (
  <Copy>
    <ExplainerComponent {...args}>{children}</ExplainerComponent>
  </Copy>
);

export const Explainer = ExplainerTemplate.bind({});
Explainer.args = {
  children: 'CMS',
  title: 'Content Management System',
};
