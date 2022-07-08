import {
  BlobVariations,
  Copy,
  Explainer,
  Grid,
  Keyfigure,
  LinkList,
  Screenshot,
  TextBlock,
  TextLink,
  UnorderedList,
} from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { Contact } from '../../components/contact';
import { Image } from '../../components/image';
import { NextImageCard } from '../../components/image-card';
import { Testimonial } from '../../components/testimonial';
import { PackageList } from '../../compositions/package-list';
import { PageHeader } from '../../compositions/page-header';
import { Employee, getEmployeeByName } from '../../data/employees';
import Packages, { Package } from '../../data/packages';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Link } from '../../elements/link';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';
import { getRandomTeasers } from '../../utils/teasers';

const STATIC_IMAGES = {
  screenshotMobile: '/images/projekte/learnfox/learnfox-mobile.png',
  screenshot: '/images/projekte/learnfox/screenshot.png',
  screenshotReader: '/images/projekte/learnfox/screenshot-reader.png',
  title: '/images/projekte/learnfox/learnfox.jpeg',
  adminBooks: '/images/projekte/learnfox/admin-books.png',
  adminPermissions: '/images/projekte/learnfox/admin-permissions.png',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
  quote: Quote;
  contact: Employee;
  teasers: Teaser[];
  packages: Package[];
};

const LearnFox: NextPage<Props> = ({ quote, contact, teasers, images, packages }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Dein _Partner_ beim Lernen."
        description="LearnFox ermöglicht auf einfachste Weise, gedruckte Lehrmittel kopiergeschützt digital zu publizieren."
      >
        <Copy>
          LearnFox ermöglicht auf einfachste Weise, gedruckte Lehrmittel kopiergeschützt digital zu publizieren. Basierend
          auf der Idee der <Link href="/projekte/bin-app">binApp</Link> haben wir die App auf einer komplett neuen
          Technologie neu aufgebaut und eine dazu passende Administrationsoberfläche erschaffen.
        </Copy>
        <LinkList
          links={[
            { label: 'Zum LearnFox', href: 'https://learnfox.ch/' },
            { label: 'Zum bin-Eigenverlag', href: 'https://bin.ch/' },
          ]}
        />
      </PageHeader>

      <main>
        <Section>
          <Image
            src={images.title}
            alt="Jugendliche in einem Klassenzimmer"
            priority
            objectFit="cover"
            width={1504}
            height={800}
          />
        </Section>

        <Section>
          <Grid cols={2}>
            <TextBlock title="Die Geschichte">
              2020 haben wir die <Link href="/projekte/bin-app">Weiterentwicklung der binApp übernommen</Link> und zuerst das
              Backend und die Datenbank ausgetauscht. Im Wissen, dass das LearnFox-Projekt folgt, haben wir das System gleich
              mandantenfähig gebaut. Beim Austausch des Data-Access-Layers in der der binApp haben wir schnell gemerkt, dass
              die Weiterentwicklung auf Basis von Angular-Ionic und Redux unberechenbar umständlich und aufwändig werden
              würde.
            </TextBlock>
            <TextBlock title="Der Plan">
              Als nächstes sollte also die SaaS-Plattform «LearnFox» geschaffen werden, damit weitere Verlage ihre
              Publikationen digital anbieten können. Die Kompatibilität mit den Anforderungen des hausinternen Verlags musste
              dabei unbedingt eingehalten werden. Um uns für die Zukunft zu rüsten, haben wir ein Technologie-Upgrade zu
              Flutter geplant.
            </TextBlock>
          </Grid>
        </Section>
        <Section>
          <Screenshot image={{ url: images.screenshotReader, originalHeight: 1121, originalWidth: 1593 }} />
        </Section>

        <Section>
          <Grid cols={2}>
            <TextBlock title="Die Herausforderung">
              Eine bestehende App neu aufbauen und zur SaaS-Plattform erweitern. Neu gestaltet, neue Technologie, gleiche
              Funktionalität - dafür etwas schneller, etwas besser und ein bisschen schöner. Dazu eine webbasierte
              Administrationsoberfläche, in der die Verlage ihre Publikationen und Berechtigungen verwalten können.
            </TextBlock>
            <TextBlock title="Unsere Lösung">
              Besser aussehen also. Deshalb haben unsere Designer*innen gleich mit Entwicklung des LearnFox-Brands gestartet,
              während sich die Software Engineers um die technische Grundlage gekümmert haben. Danach haben wir fortlaufend
              Screendesigns für die verschiedenen Funktionen angefertigt und diese{' '}
              <Link href="/was-ist/agile">Sprint für Sprint</Link> umgesetzt. Die grösste Komplexität war die Umsetzung eines
              vollständigen PDF-Viewers in C mit einem Game-Engine-basierten Annotationslayer, da es für Flutter noch keinen
              solchen gegeben hat.
            </TextBlock>
          </Grid>
        </Section>

        <Section>
          <Keyfigure
            background="cornflower"
            image={
              <Image
                src={images.screenshotMobile}
                alt="Mobile User Interface"
                height="873"
                width="400"
                objectFit="contain"
              />
            }
          >
            <UnorderedList
              title="The Facts"
              items={[
                "Über 5'000 User*innen",
                'Verfügbar auf Android, iOS, macOS und Windows',
                'Mandantenfähig',
                'Offlinefähig',
                'Integrierter PDF-Viewer',
                'Annotationsmöglichkeit',
                'Notizen und Bookmarks',
                'In-PDF Suche',
                'Automatische Suchindexgenerierung',
                'Synchronisation über mehrere Geräte',
                'Automatisierte Auslieferung in die App Stores',
              ]}
              markerColor="apricot"
            />
          </Keyfigure>
        </Section>

        <Section title="Ein Blick hinter die Kulissen">
          <Grid cols={3}>
            <TextBlock title="Technology">
              Die neue App haben wir mit <Link href="/was-ist/flutter">Flutter</Link> umgesetzt. Das eignet sich perfekt für
              native Apps: mehrere Plattformen, eine einzige Codebasis.
            </TextBlock>
            <TextBlock title="Der Login">
              Für die Benutzerverwaltung kommt die Schweizer IAM-Plattform{' '}
              <TextLink href="https://zitadel.ch">ZITADEL</TextLink> zum Einsatz. Wofür das gut ist? Mach dich schlau:{' '}
              <Link href="/was-ist/iam">IAM</Link>.
            </TextBlock>
            <TextBlock title="Eine Gaming Engine 🎮">
              Da es in Flutter keinen{' '}
              <Explainer title="Das HTML <canvas> Element kann benutzt werden, um grafische Elemente zu zeichnen.">
                Canvas
              </Explainer>{' '}
              gibt, haben wir für den Annotationslayer im PDF-Viewer die graphx Gaming-Engine eingebaut.
            </TextBlock>
          </Grid>
        </Section>

        <Section>
          <Testimonial background="apricot" blobs={BlobVariations.apricot[0]} quote={quote} />
        </Section>

        <Section title="Und die Administration?">
          <TextBlock title="">
            Das App ist das Highlight. Klar! Aber der Inhalt will ja auch verwaltet werden. Die Benutzer*innen selbst können
            (noch?) keine Bücher hochladen. Das macht der Publisher. Und dafür gibts das webbasierte LearnFox Admin Tool.
            Dazu haben wir (natürlich im LearnFox Look-and-feel) eine <Link href="/was-ist/react#next">Next.js</Link>{' '}
            Applikation mit <Link href="/was-ist/react#tailwind">Tailwind</Link> gebaut.
          </TextBlock>
        </Section>

        <Section>
          <Screenshot image={{ url: images.adminPermissions, originalHeight: 996, originalWidth: 1511 }} />
        </Section>

        <Section>
          <Contact contact={contact}>
            Wenn {contact.firstname} gerade keine Apps für den bin-Eigenverlag verlegt, bespricht er gern dein Projekt mit
            dir.
          </Contact>
        </Section>

        <Section title="Das haben wir mit dem bin-Eigenverlag gemacht:">
          <PackageList packages={packages} />
        </Section>
        <Section title="Weitere Erfolgsgeschichten">
          <Grid cols={3}>
            {teasers.map((teaser) => (
              <NextImageCard key={teaser.title} {...teaser} />
            ))}
          </Grid>
        </Section>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const images = STATIC_IMAGES;
  const teasers = getRandomTeasers(3, Teasers['learnfox'].title);
  const packages = [Packages['solution-review'], Packages['scale-up']];
  const contact = await getEmployeeByName('Josh Wirth');

  return {
    props: {
      packages,
      images,
      teasers,
      quote: Quotes['markus-bin'],
      contact,
    },
  };
};

export default LearnFox;
