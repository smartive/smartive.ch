import { Meta, Story } from '@storybook/react';
import { Tags, TagsProps } from '../../src/components/tags';

export default {
  title: 'Components/Tags',
  component: Tags,
} as Meta;

const TagsTemplate: Story<TagsProps> = (props) => <Tags {...props} />;

const sharedProps = {
  tags: [
    { short: 'BOSW 2020', full: 'Best of Swiss Web 2020' },
    { short: 'Smarta Approved', full: 'Approved by Smarta' },
  ],
};

export const Horizontal = TagsTemplate.bind({});
Horizontal.args = sharedProps;

export const Vertical = TagsTemplate.bind({});
Vertical.args = {
  ...sharedProps,
  vertical: true,
};
