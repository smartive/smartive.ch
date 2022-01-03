import { Meta, Story } from '@storybook/react';
import React from 'react';
import { DescriptionList as DescriptionListComponent, DescriptionListProps } from '../../src/compositions/description-list';
import { IconList } from '../../src/compositions/icon-list';
import { Cross, Heart } from '../../src/identity/icons';

export default {
  title: 'Compositions/Description List',
  component: DescriptionListComponent,
} as Meta;

export const DescriptionList: Story<DescriptionListProps> = (props) => <DescriptionListComponent {...props} />;
DescriptionList.args = {
  items: [
    {
      term:
        'Überleg dir, nach welcher Information die Leserin sucht. Auf welche Frage will sie eine Antwort? Das gehört nach oben.',
    },
    {
      term:
        '25-Wörter-Satz und 15-Zeilen-Absatz sind wie streitende Kinder: Sie müssen getrennt werden (sagen jedenfalls Doppelpunkt, Komma, Punkt und Gedankenstrich).',
    },
    {
      term: (
        <>
          Lass die Füllwörter weg. Verliert der Satz dadurch etwas? Tipp:{' '}
          <a
            href="https://web.archive.org/web/20210126114619/http://www.schreiblabor.com/fuellwoerter-test/"
            target="_blank"
            rel="noreferrer"
          >
            Füllwörter-Test
          </a>
        </>
      ),
      description: <IconList items={['Migipedia ist die Mutter aller Communities.']} icon={Heart} iconColor="mint" />,
      additionalDescription: (
        <IconList
          items={['Migipedia ist ja eigentlich fast sowas wie die Mutter aller Communities.']}
          icon={Cross}
          iconColor="apricot"
        />
      ),
    },
  ],
};
