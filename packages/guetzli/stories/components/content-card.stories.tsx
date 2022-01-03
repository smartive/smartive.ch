import { Meta, Story } from '@storybook/react';
import { ContentCard, ContentCardProps } from '../../src/components/content-card';
import { BlobVariations } from '../../src/utils/blob-variations';

export default {
  title: 'Components/Content-Card',
  component: ContentCard,
} as Meta;

const ContentCardTemplate: Story<ContentCardProps> = (props) => <ContentCard {...props} />;

const sharedProps = {
  title: 'Speedboat',
  link: { label: 'Zeig mir mehr!', href: 'https://smartive.ch/angebot/speedboat', newTab: true },
  background: 'mint',
};

export const Default = ContentCardTemplate.bind({});
Default.args = sharedProps;

export const WithContent = ContentCardTemplate.bind({});
WithContent.args = {
  ...sharedProps,
  label: '4 Wochen',
  content:
    'Lancier in kurzer Zeit dein MVP (Minimum Viable Product) und teste anhand messbarer Ziele, wie dein Produkt ankommt.',
};

export const WithBlobs = ContentCardTemplate.bind({});
WithBlobs.args = {
  ...sharedProps,
  label: '4 Wochen',
  content:
    'Lancier in kurzer Zeit dein MVP (Minimum Viable Product) und teste anhand messbarer Ziele, wie dein Produkt ankommt.',
  blobs: BlobVariations.mint[0],
};
