import { Copy, Decoration, Heading1, TextLink } from '@smartive/guetzli';
import { FC } from 'react';

export const Typography: FC = () => (
  <div className="mt-6 grid grid-rows-2 overflow-hidden rounded md:mt-12">
    <div className="bg-white-100 p-8 lg:p-16">
      <Heading1 as="p">
        Wir schreiben Headlines in Inter Semi Bold und <Decoration>Auszeichnungen</Decoration> mit IBM Plex Serif kursiv.
      </Heading1>
      <Copy>
        Leads und Copytext sind straightforward in Inter Regular. Bold und Kursiv bitte nicht inflationär verwenden.
        Inhaltlich immer auf den Punkt gebracht. Hyperlinks innerhalb vom Copytext sind auch einfach:{' '}
        <TextLink href="https://en.wikipedia.org/wiki/Underscore" newTab>
          Underline
        </TextLink>{' '}
        und fertig.
      </Copy>
    </div>
    <div className="flex flex-col justify-center bg-apricot-500 p-8 lg:p-16">
      <div>
        <Heading1 as="p" className="text-center">
          Auf Patterns und farbigen Flächen schreiben wir auch schwarz.
        </Heading1>
        <div className="flex justify-center">
          <Copy>Und bitte ganz wenig Copytext.</Copy>
        </div>
      </div>
    </div>
  </div>
);
