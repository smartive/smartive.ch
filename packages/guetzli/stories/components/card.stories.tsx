import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from '../../src/components/card';
import { BlobVariations } from '../../src/foundation/blobs/blob-variations';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const CardTemplate: Story<CardProps> = (props) => (
  <Card {...props}>
    Hi there!
    <br />
    <br />
    <br />
    This is nice...
  </Card>
);

export const Default = CardTemplate.bind({});
Default.args = {
  background: 'mint',
};

export const WithBlobs = CardTemplate.bind({});
WithBlobs.args = {
  background: 'cornflower',
  blobs: BlobVariations.cornflower[0],
};

export const Interactive = CardTemplate.bind({});
Interactive.args = {
  background: 'apricot',
  interactive: true,
};
