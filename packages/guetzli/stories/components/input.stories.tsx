import { Meta } from '@storybook/react';
import { Input as InputComponent } from '../../src/components/input';

export default {
  title: 'Components/Input',
  component: InputComponent,
} as Meta;

export const Input = () => <InputComponent />;
