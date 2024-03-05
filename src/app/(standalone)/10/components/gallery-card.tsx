import { FC } from 'react';
import { Heading } from '../elements/heading';
import { Text } from '../elements/text';
import { Card } from './card';
import { ConfettiLink } from './confetti-link';

export const GalleryCard: FC = () => (
  <div className="relative z-10 col-span-12 lg:col-span-8 lg:col-start-3">
    <Card>
      <Heading level="3">Das Jubiläumsfest ist schon vorbei. 🥲</Heading>
      <Text>
        Aber: nach der Party ist vor der Party! Falls du Gründe brauchst das nächste Mal dabei zu sein, gibts hier ein paar
        Partypics.
      </Text>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <ConfettiLink href="/10/fotos">📸 Impressionen</ConfettiLink>
        <ConfettiLink href="/10/fotobox">🤡 Fotobox</ConfettiLink>
      </div>
    </Card>
  </div>
);
