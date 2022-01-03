import { Meta } from '@storybook/react';
import { Input as InputComponent } from '../../src/elements/input';

export default {
  title: 'Elements/Input',
  component: InputComponent,
} as Meta;

export const Input = () => <InputComponent />;
