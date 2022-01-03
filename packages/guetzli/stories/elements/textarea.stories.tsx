import { Meta } from '@storybook/react';
import { Textarea as TextareaComponent } from '../../src/elements/textarea';

export default {
  title: 'Elements/Textarea',
  component: TextareaComponent,
} as Meta;

export const Textarea = () => <TextareaComponent />;
