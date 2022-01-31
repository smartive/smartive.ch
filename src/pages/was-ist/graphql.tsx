import { Copy, Explainer, Grid, Heading2, Keyfigure, TextBlock, TextLink } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { NextImageCard } from '../../components/image-card';
import { PageHeader } from '../../compositions/page-header';
import { Teaser, transformTeaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Link } from '../../elements/link';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';

type Props = {
  teasers: Teaser[];
};

const GQL: NextPage<Props> = ({ teasers }) => (
  <Page>
    <PageHeader
      markdownTitle="Mit _GraphQL_ den Überblick über die Daten behalten"
      pageTitle="Was ist eigentlich GraphQL?"
      description="Mit GraphQL wird bei jeder Abfrage spezifiziert, welche Daten benötigt werden; so kann der Datenaustausch unter einer Adresse gebündelt werden, ohne an Übersichtlichkeit zu verlieren."
    >
      <Copy>
        Daten werden über <Explainer title="Application Programming Interfaces, Schnittstellen">APIs</Explainer> abgefragt
        und verändert. Der bekannteste Ansatz dafür ist REST: Jede <Explainer title="«Paket von Daten»">Ressource</Explainer>{' '}
        ist unter einer bestimmten Adresse zu finden. Doch je komplexer dein digitales Produkt, desto komplexer die Daten –
        und desto mehr Adressen, die immer mehr Daten liefern müssen, um alle Bedürfnisse abzudecken.
      </Copy>
      <Copy>
        Eine Antwort darauf bietet GraphQL: Bei jeder Abfrage wird spezifiziert, welche Daten benötigt werden; so kann der
        Datenaustausch unter einer Adresse gebündelt werden, ohne an Übersichtlichkeit zu verlieren.
      </Copy>
    </PageHeader>

    <main>
      <Keyfigure background="mint">
        <Heading2>Stell dir vor, du bist im Detailhandel tätig.</Heading2>
        <Copy>
          Dein Katalog umfasst tausende Produkte, die du im Internet präsentierst. Alle können von Userinnen bewertet werden.
          Die Bewertungen können kommentiert und gelikt werden. Diese Beiträge werden dann in deiner App, der
          Community-Plattform und der Produkte-Übersicht dargestellt.
        </Copy>
        <Copy>
          Dafür hantierst du bereits 3 Typen von Daten: User, Produkte und Beiträge. Sie haben je ihre eigene Datenstruktur
          und sie stehen zueinander in Beziehung. In der App willst du die Beiträge zu einem Produkt darstellen, auf der
          Community die Beiträge pro Benutzer*in.
        </Copy>
        <Copy>
          Erschwerend kommt hinzu, dass für User- und Produktdaten bereits REST-APIs bestehen. Also noch eine REST-API für
          die Userbeiträge hochziehen? Toll wäre eine Technologie, die mächtig ist und die Komplexität trotzdem nicht erhöht.
          Vorhang auf für GraphQL.
        </Copy>
      </Keyfigure>

      <Section title="GraphQL: Die maximal flexible API">
        <Copy>
          GraphQL ist geschaffen für flexiblen Datenaustausch – inklusive besserem Überblick, da alle Daten{' '}
          <Explainer title="zu jeder Eigenschaft ist hinterlegt, welchen Typs die Daten sind und ob zwingend oder optional">
            typisiert
          </Explainer>{' '}
          sind. Das macht es zu einer leistungsfähigen Alternative zu REST.
        </Copy>
        <Copy>
          Das <strong>GraphQL-Schema</strong> ist der «Masterplan»: Es definiert die Datenstruktur und garantiert, dass die
          Daten in einer bestimmten Form ausgeliefert werden. Wer weiss, was zu erwarten ist, muss sich nicht mit fehlenden
          Daten und daraus resultierenden Bugs rumschlagen. Aus dem Schema lassen sich ganz einfach <strong>Types</strong>{' '}
          generieren, die in <Link href="/was-ist/react#typescript">TypeScript</Link>
          verwendet werden können. Das macht Entwickler*innen froh und das wiederum das Produkt besser.
        </Copy>

        <Grid cols={3}>
          <TextBlock title="Vermeidet Under- und Overfetching">
            Clients definieren, welche Daten sie benötigen, und erhalten genau diese zurück – und nicht noch fünf Produkte
            und zwölf Beiträge, die gar nirgends angezeigt werden (<strong>Overfetching</strong>). Dafür angereichert mit
            allen User-Angaben, die bei REST separat abgeholt werden müssten (<strong>Underfetching</strong>).
          </TextBlock>
          <TextBlock title="Ermöglicht schnelle Weiterentwicklung">
            Weil jeder Client bei der Abfrage die benötigten Daten definiert, kann die API mit minimalem Aufwand neue
            Anwendungsfälle bedienen: Alle Beiträge, die in den letzten 7 Tagen verfasst wurden? Kein Problem. Alle
            Kommentare zu einem Produkt und gleich noch die Namen aller, die sie gelikt haben? Nichts leichter als das. Oder
            nur die Kommentare mit Likes? Aber gern!
          </TextBlock>
          <TextBlock title="Macht Versionierung unnötig">
            GraphQL-APIs können neue Bedürfnisse bedienen und bleibt trotzdem rückwärtskompatibel, da die gewünschte
            Datenstruktur in jedem Client definiert wird. Dies im Gegensatz zu REST-APIs, wo Änderungen an der Datenstruktur
            eine Versionierung nötig macht, um sicherzustellen, dass bestehende Clients nicht mit Daten in unbekannter Form
            konfrontiert sind.
          </TextBlock>
        </Grid>
      </Section>

      <Section>
        <Keyfigure background="cornflower">
          <Heading2>Caching? Klar doch!</Heading2>
          <Copy>
            Maximale Flexibilität geht nicht auf Kosten der Leistung: Auch bei GraphQL können ressourcenintensive Abfragen
            gecacht werden. Bei Änderung der Daten wird der Cache wieder gelöscht. Damit sehen Benutzer*innen jederzeit die
            aktuellste Daten – zuverlässig und schnell.
          </Copy>
        </Keyfigure>
      </Section>

      <Section title="Unsere Erfahrung">
        <Copy>
          Unsere Community-Plattform <TextLink href="https://reactions.dev">Reactions</TextLink> setzt auf GraphQL. Beim
          Aufbau haben wir eine Menge Knowhow gesammelt – und darüber gebloggt:{' '}
          <TextLink href="https://blog.smartive.ch/building-enterprise-grade-apis-with-graphql-mysql-and-node-js-a411a5a612f1">
            Building Enterprise Grade APIs with GraphQL, MySQL and Node.js
          </TextLink>
          . Und auch in Kombination mit Elasticsearch haben wir GraphQL schon eingesetzt:{' '}
          <TextLink href="https://blog.smartive.ch/graphql-and-elasticsearch-a-love-letter-9ed64d5c094">
            GraphQL and Elasticsearch: A Love Letter
          </TextLink>
        </Copy>
      </Section>

      <Section title="Hier steckt GraphQL drin">
        <Grid cols={2}>
          {teasers.map((teaser) => (
            <NextImageCard key={teaser.title} {...teaser} />
          ))}
        </Grid>
      </Section>
    </main>
  </Page>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const teasers = await Promise.all(
    [Teasers.migusto, Teasers.migipedia].map(async (teaser) => await transformTeaser(teaser))
  );
  return {
    props: {
      teasers,
    },
  };
};

export default GQL;
