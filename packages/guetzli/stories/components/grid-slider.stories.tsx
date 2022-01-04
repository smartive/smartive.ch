import { Meta, Story } from '@storybook/react';
import { ContentCard } from '../../src/components/content-card';
import { GridSlider, GridSliderProps } from '../../src/foundation/layout/grid-slider';

export default {
  title: 'Foundation/Layout/Grid Slider',
  component: GridSlider,
} as Meta;

const getChildren = (count: number) =>
  Array.from({ length: count }, (_, i) => (
    <ContentCard
      key={i}
      title={`${i + 1}`}
      background="apricot"
      link={{ label: 'smartive Brand', href: 'https://smartive.ch/brand', newTab: true }}
    />
  ));

const GridSliderTemplate: Story<GridSliderProps> = ({ children, ...props }) => (
  <GridSlider {...props}>{children}</GridSlider>
);

export const OneChild = GridSliderTemplate.bind({});
OneChild.args = {
  children: getChildren(1),
};

export const TwoChildren = GridSliderTemplate.bind({});
TwoChildren.args = {
  children: getChildren(2),
};

export const ThreeChildren = GridSliderTemplate.bind({});
ThreeChildren.args = {
  children: getChildren(3),
};

export const FourChildren = GridSliderTemplate.bind({});
FourChildren.args = {
  children: getChildren(4),
};

export const SevenChildren = GridSliderTemplate.bind({});
SevenChildren.args = {
  children: getChildren(7),
};
