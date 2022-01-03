import { Meta, Story } from '@storybook/react';
import React from 'react';
import { LinkList as LinkListComponent, LinkListProps } from '../../src/compositions/link-list';

export default {
  title: 'Compositions/Link List',
  component: LinkListComponent,
} as Meta;

export const LinkList: Story<LinkListProps> = (props) => <LinkListComponent {...props} />;
LinkList.args = {
  links: [
    { label: 'smartive', href: 'https://smartive.ch/' },
    { label: 'Brand Guidelines', href: 'https://smartive.ch/brand' },
    { label: 'Infos zum wichtigsten Gemüse der Welt', href: 'https://en.wikipedia.org/wiki/Broccoli' },
    { label: 'Deep Comic', href: 'https://xkcd.com/233/' },
  ],
};
