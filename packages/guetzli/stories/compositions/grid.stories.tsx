import { Meta, Story } from '@storybook/react';
import { ContentCard } from '../../src/components/content-card';
import { Grid, GridProps } from '../../src/compositions/grid';

export default {
  title: 'Compositions/Grid',
  component: Grid,
} as Meta;

const getChildren = (count: number) =>
  Array.from({ length: count }, (_, i) => (
    <ContentCard
      key={i}
      title={`${i + 1}`}
      background="mint"
      link={{ label: 'smartive Brand', href: 'https://smartive.ch/brand', newTab: true }}
    />
  ));

const GridTemplate: Story<GridProps> = ({ children, ...props }) => <Grid {...props}>{children}</Grid>;

export const TwoColumns = GridTemplate.bind({});
TwoColumns.args = {
  children: getChildren(3),
  cols: 2,
};

export const ThreeColumns = GridTemplate.bind({});
ThreeColumns.args = {
  children: getChildren(5),
  cols: 3,
};

export const FourColumns = GridTemplate.bind({});
FourColumns.args = {
  children: getChildren(7),
  cols: 4,
};
