import { Meta } from '@storybook/react';
import { Textarea as TextareaComponent } from '../../src/components/textarea';

export default {
  title: 'Components/Textarea',
  component: TextareaComponent,
} as Meta;

export const Textarea = () => <TextareaComponent />;
