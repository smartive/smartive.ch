import { Meta, Story } from '@storybook/react';
import React from 'react';
import { IconList as IconListComponent, IconListProps } from '../../src/components/icon-list';
import { Heart } from '../../src/foundation/iconography/icons';

export default {
  title: 'Components/Icon List',
  component: IconListComponent,
} as Meta;

export const IconList: Story<IconListProps> = (props) => <IconListComponent {...props} />;
IconList.args = {
  items: ['Apricot', 'Mint', 'Cornflower'],
  icon: Heart,
};
