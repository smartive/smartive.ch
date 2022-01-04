import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Navigation as NavigationComponent, NavigationProps } from '../../src/components/navigation';

export default {
  title: 'Components/Navigation',
  component: NavigationComponent,
} as Meta;

export const Navigation: Story<NavigationProps> = (props) => <NavigationComponent {...props} />;
Navigation.args = {
  currentPathname: 'broccoli',
  home: 'dehai',
  mainLinks: [
    { label: 'hans', link: '/hans' },
    { label: 'heiri', link: '/heiri' },
    { label: 'het', link: '/het' },
    { label: 'broccoli', link: '/broccoli' },
  ],
};
