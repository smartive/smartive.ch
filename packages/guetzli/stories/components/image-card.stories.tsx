import { Meta, Story } from '@storybook/react';
import { ImageCard, ImageCardProps, ImageCardVariants } from '../../src/components/image-card';

export default {
  title: 'Components/Image-Card',
  component: ImageCard,
} as Meta;

const ImageCardTemplate: Story<ImageCardProps> = (props) => <ImageCard {...props} />;

const sharedProps = {
  image: {
    src: 'https://smartive.ch/_next/image?url=%2Fimages%2Fbrand%2Fsmarta-welcome.png&w=1080&q=75',
    alt: 'Schönsti Frisur vur Welt',
  },
  label: 'Sie hat die Haare schön!',
  title: 'Meet Smarta',
  description: 'Smarta approves this message.',
  link: { label: 'Lerne von mir', href: 'https://smartive.ch/brand/sprache', newTab: true },
};

export const Default = ImageCardTemplate.bind({});
Default.args = sharedProps;

export const Big = ImageCardTemplate.bind({});
Big.args = {
  ...sharedProps,
  variant: ImageCardVariants.Big,
};

export const Wide = ImageCardTemplate.bind({});
Wide.args = {
  ...sharedProps,
  variant: ImageCardVariants.Wide,
};

export const WithTags = ImageCardTemplate.bind({});
WithTags.args = {
  ...sharedProps,
  tags: [
    { short: 'Team Member', full: 'smartive Team Member' },
    { short: 'Icon', full: 'Fashion Icon' },
  ],
};
