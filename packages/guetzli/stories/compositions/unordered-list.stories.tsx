import { Meta, Story } from '@storybook/react';
import React from 'react';
import { UnorderedList as UnorderedListComponent, UnorderedListProps } from '../../src/compositions/unordered-list';

export default {
  title: 'Compositions/Unordered List',
  component: UnorderedListComponent,
} as Meta;

export const UnorderedList: Story<UnorderedListProps> = (props) => <UnorderedListComponent {...props} />;
UnorderedList.args = {
  title: 'Ablauf eines Sprints',
  items: [
    'Vor dem Sprint planen wir gemeinsam Inhalt und Umfang: Das Team schätzt die Komplexität der User Stories und du setzt fest, was umgesetzt werden soll.',
    'Während der Umsetzung diskutiert das Team abgeschlossene und anstehende Aufgaben am Daily. Das Scrum Board bildet den Fortschritt ab.',
    'Am Ende des Sprints präsentieren wir die abgeschlossenen Stories – als lauffähiges, interaktives Produkt. Gemeinsam blicken wir auf den Sprint zurück: Was ist gut gelaufen, wie können wir die Zusammenarbeit verbessern?',
  ],
  markerColor: 'apricot',
};
