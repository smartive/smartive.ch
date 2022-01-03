import { Meta, Story } from '@storybook/react';
import { TextBlock, TextBlockProps } from '../../src/components/text-block';

export default {
  title: 'Components/Text-Block',
  component: TextBlock,
} as Meta;

const TextBlockTemplate: Story<TextBlockProps> = (props) => <TextBlock {...props} />;

const sharedProps = {
  title: 'Lorem ipsum dolor',
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio exercitationem in ullam eveniet voluptatem. Quasi earum porro aliquam vero distinctio, quibusdam, hic nihil provident dolorem deserunt consequuntur? Assumenda, enim obcaecati?',
};

export const Default = TextBlockTemplate.bind({});
Default.args = sharedProps;

export const WithLink = TextBlockTemplate.bind({});
WithLink.args = {
  ...sharedProps,
  link: { label: 'smartive Webseite', href: 'https://smartive.ch' },
};

export const WithNumber = TextBlockTemplate.bind({});
WithNumber.args = {
  ...sharedProps,
  number: 42,
};

export const WithHighlightedNumber = TextBlockTemplate.bind({});
WithHighlightedNumber.args = {
  ...sharedProps,
  number: 42,
  highlightNumber: true,
};
