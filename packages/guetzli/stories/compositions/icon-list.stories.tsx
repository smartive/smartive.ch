import { Meta, Story } from '@storybook/react';
import React from 'react';
import { IconList as IconListComponent, IconListProps } from '../../src/compositions/icon-list';
import { Heart } from '../../src/identity/icons';

export default {
  title: 'Compositions/Icon List',
  component: IconListComponent,
} as Meta;

export const IconList: Story<IconListProps> = (props) => <IconListComponent {...props} />;
IconList.args = {
  items: ['Apricot', 'Mint', 'Cornflower'],
  icon: Heart,
};
