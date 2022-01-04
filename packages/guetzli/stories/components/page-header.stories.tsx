import { Meta, Story } from '@storybook/react';
import React from 'react';
import { LinkList } from '../../src/components/link-list';
import { PageHeader, PageHeaderProps, PageHeaderVariants } from '../../src/components/page-header';
import { BlobVariations } from '../../src/foundation/blobs/blob-variations';
import { Copy } from '../../src/foundation/typography/copy';

export default {
  title: 'Components/Page Header',
  component: PageHeader,
} as Meta;

const PageHeaderTemplate: Story<PageHeaderProps> = ({ children, ...props }) => (
  <PageHeader {...props}>{children}</PageHeader>
);

const sharedProps = {
  markdownTitle: `T'Smarta _liebt_ üsi Guetzli!`,
  background: 'apricot',
  tags: [
    { short: 'BOSW 2020', full: 'Best of Swiss Web 2020' },
    { short: 'Smarta Approved', full: 'Approved by Smarta' },
  ],
};

export const SimpleHeader = PageHeaderTemplate.bind({});
SimpleHeader.args = {
  ...sharedProps,
  variant: PageHeaderVariants.Simple,
  children: (
    <LinkList
      links={[
        { label: 'smartive', href: 'https://smartive.ch/' },
        { label: 'Brand Guidelines', href: 'https://smartive.ch/brand' },
      ]}
    />
  ),
};

export const CardHeader = PageHeaderTemplate.bind({});
CardHeader.args = {
  ...sharedProps,
  variant: PageHeaderVariants.Card,
  blobs: BlobVariations.apricot[0],
  children: <Copy>Und t&apos;Blobs sind halt scho no kuul.</Copy>,
};

export const MarkdownHeader = PageHeaderTemplate.bind({});
MarkdownHeader.args = {
  ...sharedProps,
  variant: PageHeaderVariants.Simple,
  markdownTitle: 'Projektleiter*in bei smartive',
  children: (
    <Copy>Hier sollte der Gender-* bitte bleiben, der Titel sollte also Projektleiter*in bei smartive heissen.</Copy>
  ),
};
