import { Meta, Story } from '@storybook/react';
import { ImagePosition, Keyfigure as KeyfigureComponent, KeyfigureProps } from '../../src/components/keyfigure';

export default {
  title: 'Components/Keyfigure',
  component: KeyfigureComponent,
} as Meta;

export const Keyfigure: Story<KeyfigureProps> = ({ children, ...props }) => (
  <KeyfigureComponent {...props}>{children}</KeyfigureComponent>
);
Keyfigure.args = {
  image: (
    <img
      src="https://smartive.ch/_next/image?url=%2Fimages%2Fbrand%2Fsmarta-approves.png&w=640&q=75"
      height="400"
      width="400"
    />
  ),
  imagePosition: ImagePosition.before,
  background: 'apricot',
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio exercitationem in ullam eveniet voluptatem. Quasi earum porro aliquam vero distinctio, quibusdam, hic nihil provident dolorem deserunt consequuntur? Assumenda, enim obcaecati?',
};
