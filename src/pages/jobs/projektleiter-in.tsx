import { Copy, LinkList, PageSection, UnorderedList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import React from 'react';
import { Contact } from '../../components/contact';
import { PageHeader } from '../../compositions/page-header';
import { Employee, transformEmployee } from '../../data/employees';
import Employees from '../../data/employees.json';
import { PlaceholderImage } from '../../elements/placeholder-image';
import { Page } from '../../layouts/page';
import { getPlaceholders, PlaceholderImages } from '../../utils/image-placeholders';

const STATIC_IMAGES = {
  office: '/images/mood/office-logo-meeting.jpg',
} as const;

type Props = {
  contact: Employee;
  images: PlaceholderImages<typeof STATIC_IMAGES>;
};

const Projektleiter: NextPage<Props> = ({ contact, images }) => (
  <Page>
    <PageHeader
      markdownTitle="Projektleiter:in bei smartive"
      pageTitle="Stellenausschreibung Projektleiter*in bei smartive"
      description="Hey, schön bist Du hier! Wir sind smartive, eine Webagentur in Zürich mit einer bizli anderen Firmenkultur.
      Bei uns stehen die Entwicklung digitaler Produkte und das Wohl der Mitarbeitenden im Zentrum. Zusammen wollen wir eine
      Atmosphäre schaffen, in der sich verschiedene Persönlichkeiten entfalten und einbringen können. Chefgehabe wirst Du bei
      uns nicht finden. Wir begleiten sowohl Start-ups als auch Grossunternehmen von der Idee bis zum Go-live ihrer digitalen
      Projekte. Agil, massgeschneidert, mit Leidenschaft und Expertise. Und du?"
    >
      <Copy>
        Hey, schön bist Du hier! Wir sind smartive, eine Webagentur in Zürich mit einer bizli anderen Firmenkultur. Bei uns
        stehen die Entwicklung digitaler Produkte und das Wohl der Mitarbeitenden im Zentrum. Zusammen wollen wir eine
        Atmosphäre schaffen, in der sich verschiedene Persönlichkeiten entfalten und einbringen können. Chefgehabe wirst Du
        bei uns nicht finden. Wir begleiten sowohl Start-ups als auch Grossunternehmen von der Idee bis zum Go-live ihrer
        digitalen Projekte. Agil, massgeschneidert, mit Leidenschaft und Expertise. Und du?
      </Copy>
      <LinkList
        linkWrapper={NextLink}
        links={[
          { label: 'Was uns ausmacht', href: '/agentur' },
          { label: 'Wer wir sind', href: '/team' },
          { label: 'Unser Lohnmodell', href: '/blog/die-sache-mit-dem-geld-den-lohn-auf-eine-formel-bringen' },
        ]}
      />
    </PageHeader>

    <main>
      <PageSection>
        <PlaceholderImage
          image={images.office}
          alt="Blick ins smartive Büro mit Logo an der Wand. Mitarbeiter haben ein Meeting im Konferenzraum."
          priority
          objectFit="cover"
          width={1504}
          height={800}
        />
      </PageSection>
      <PageSection>
        <UnorderedList
          title="Deine Aufgaben"
          markerColor="apricot"
          items={[
            'Du begleitest Kund*innen während des Projekts und hilfst, Strategien zu entwickeln und neue Ideen ins Projekt einfliessen zu lassen',
            'Du bist mitverantwortlich, dass Team und Kund*in glücklich sind',
            'Du unterstützt beim Offerieren und Pitchen bei neuen Projektanfragen',
            'Du übernimmst weitere Aufgaben bei smartive – welche, entscheidest du selbst',
          ]}
        />
      </PageSection>
      <PageSection>
        <UnorderedList
          title="Dein Profil"
          markerColor="cornflower"
          items={[
            'Du hast Erfahrung in der Projektleitung oder bist sehr motiviert, dir das Nötige anzueignen',
            'Du hast einen Hintergrund in der Software-Entwicklung und kennst dich mit Code und aktuellen Frameworks aus',
            'Du bist kommunikationsfreudig und suchst stets nachhaltige und zufriedenstellende Lösungen für alle Parteien',
            'Du arbeitest strukturiert und kannst Entscheidungen im Team wie auch Kund*innen gegenüber klar kommunizieren',
            'Du bist dir die Arbeit in agilen Teams gewöhnt und hast Erfahrung als Scrum Master',
            'Du bist interessiert an Web-Technologien, verfolgst Trends und nutzt fleissig neue Produkte und Apps',
          ]}
        />
      </PageSection>
      <PageSection>
        <UnorderedList
          title="Deine Benefits"
          markerColor="mint"
          items={[
            'Sei Teil einer lebendigen und dynamischen Firmenkultur',
            'Nutze den Advice Process und bring Deine Ideen mit ein',
            'Profitiere von einem grosszügigen Weiterbildungsbudget und anderen Goodies',
            'Wirke mit an spannenden, kundennahen Projekten',
            'Flexible Arbeitszeiten',
            'Transparente Lohnformel',
          ]}
        />
      </PageSection>
      <PageSection>
        <Contact contact={contact}>Du denkst, dass du zu uns passt? Nadia freut sich auf deine Bewerbung!</Contact>
      </PageSection>
    </main>
  </Page>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const images = await getPlaceholders(STATIC_IMAGES);

  return {
    props: {
      images,
      contact: await transformEmployee(Employees.nadia),
    },
  };
};

export default Projektleiter;
