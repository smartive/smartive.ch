import { Meta } from '@storybook/react';
import { Select as SelectComponent } from '../../src/components/select';

export default {
  title: 'Components/Select',
  component: SelectComponent,
} as Meta;

export const Select = () => (
  <SelectComponent>
    <option>motherf*cking speedboats</option>
    <option>advice process my ass</option>
    <option>mvp this, mvp that</option>
    <option>i see dead code</option>
  </SelectComponent>
);
