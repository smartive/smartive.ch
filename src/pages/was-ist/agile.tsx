import { Copy, Grid, Heading3, ImagePosition, Keyfigure, TextBlock, UnorderedList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { NextImageCard } from '../../components/image-card';
import { PageHeader } from '../../compositions/page-header';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';

type Props = {
  teasers: Teaser[];
};

const Agile: NextPage<Props> = ({ teasers }) => (
  <Page>
    <PageHeader
      markdownTitle="_Scrum_ und _agile_ oder: Ein flexibler Plan"
      pageTitle="Was ist eigentlich Scrum?"
      description="Scrum ist unsere bevorzugte Spielart von agiler Entwicklung. Scrum gibt einen Rahmen für die Zusammenarbeit vor, der so viel absteckt wie nötig und so viel Freiraum lässt wie möglich."
    >
      <Copy>
        Scrum ist unsere bevorzugte Spielart von agiler Entwicklung. Scrum gibt einen Rahmen für die Zusammenarbeit vor, der
        so viel absteckt wie nötig und so viel Freiraum lässt wie möglich.
      </Copy>
    </PageHeader>

    <main>
      <Heading3>Scrum-Bausteine: Sprints & User Stories</Heading3>
      <Grid cols={2}>
        <div>
          <Copy>
            <strong>Sprints</strong> dauern zwei Wochen. Ein Sprint ist nichts anderes als eine <strong>Iteration</strong>.
          </Copy>
          <Copy>
            Jeder Sprint umfasst ein Meeting zum Planen, die Umsetzung der definierten Anforderungen und ein Meeting, bei dem
            auf das Erreichte zurückgeschaut wird. An dieses schliesst sich gleich wieder die Planung des nächsten Sprints
            an.
          </Copy>
        </div>
        <div>
          <Copy>
            Die Basis für Planung und Umsetzung sind <strong>User Stories</strong>. Darin sind die Anforderungen aus
            Benutzersicht fixiert («Als Besucher*in will ich einen Anmeldebutton, um mich einzuloggen.»)
          </Copy>
          <Copy>
            Vor der Umsetzung schätzt das Team die Komplexität jeder Story (<strong>Estimation</strong>). Dies bildet die
            Basis für die Sprintplanung.
          </Copy>
        </div>
      </Grid>

      <Section>
        <Keyfigure
          image={
            <Image
              src="/images/illus/scrum.svg"
              height="480"
              width="480"
              objectFit="contain"
              priority
              alt="Scrum Prozess mit Iterationen"
            />
          }
          imagePosition={ImagePosition.after}
        >
          <UnorderedList
            title="Ablauf eines Sprints"
            items={[
              'Vor dem Sprint planen wir gemeinsam Inhalt und Umfang: Das Team schätzt die Komplexität der User Stories und du setzt fest, was umgesetzt werden soll.',
              'Während der Umsetzung diskutiert das Team abgeschlossene und anstehende Aufgaben am Daily. Das Scrum Board bildet den Fortschritt ab.',
              'Am Ende des Sprints präsentieren wir die abgeschlossenen Stories – als lauffähiges, interaktives Produkt. Gemeinsam blicken wir auf den Sprint zurück: Was ist gut gelaufen, wie können wir die Zusammenarbeit verbessern?',
            ]}
            markerColor="apricot"
          />
        </Keyfigure>

        <Grid cols={2}>
          <TextBlock title="Product Owner">
            Das bist du oder jemand aus deinem Team. Wichtig ist, dass die Person Entscheidungen treffen kann und will.
            Der/die Product Owner*in priorisiert die Aufgaben und Anforderungen und vertritt das Produkt gegenüber sämtlichen
            Stakeholder*innen – inklusive uns.
          </TextBlock>
          <TextBlock title="Product Owner Assistant">
            Product Owner Assistant ist jemand aus unserem Team. Nebst Moderator*in zwischen Entwicklungsteam und Product
            Owner ist er/sie auch Ansprechsperson für sämtliche Stakeholder*innen.
          </TextBlock>
          <TextBlock title="Scrum Master">
            Der Scrum Master oder die Scrum Masterin sorgt dafür, dass alle im Team effizient arbeiten können. Zu den
            Aufgaben gehört, Blockaden und Hindernisse aller Art aus dem Weg zu schaffen, im Team und nach aussen zu
            vermitteln sowie dafür zu sorgen, dass alle wichtigen Personen am Tisch sitzen.
          </TextBlock>
          <TextBlock title="Umsetzungsteam">
            War da nicht noch… Ah, genau! Das Umsetzungsteam wird von smartive gestellt und ist interdisziplinär aufgestellt:
            Design, Entwicklung und Testing. Es bringt sämtliches benötigtes Knowhow für die erfolgreiche Durchführung des
            Projekts mit.
          </TextBlock>
          <TextBlock title="Story Points & Estimation">
            Story Points bezeichnen die Komplexität jeder Story (und nicht die benötigte Zeit). Die{' '}
            <strong>Estimation</strong> wird meist in Form eines <strong>Planungspokers</strong> durchgeführt: Alle erhalten
            ein Kartenset mit den Werten 1 – 2 – 3 – 5 – 8 – … (Fibonacci-Reihe) und zeigen gleichzeitig ihre Schätzung. Bei
            abweichenden Werten wird diskutiert.
          </TextBlock>
          <TextBlock title="Product Backlog">
            Im Backlog warten Stories auf ihre Umsetzung. Hier wird alles abgelegt, was gemacht werden sollte (oder könnte),
            aber nicht im nächsten Sprint. Es ist sinnvoll, regelmässig ein <strong>Backlog Refinement</strong>{' '}
            durchzuführen, um unvollständige oder nicht mehr aktuelle Stories anzupassen oder auszusortieren.
          </TextBlock>
        </Grid>
      </Section>
      <Section title="Diese Projekte haben wir agil umgsetzt">
        <Grid cols={3}>
          {teasers.map((teaser) => (
            <NextImageCard key={teaser.title} {...teaser} />
          ))}
        </Grid>
      </Section>
    </main>
  </Page>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const teasers = [Teasers.migipedia, Teasers.subsidia, Teasers.ofpg];
  return {
    props: {
      teasers,
    },
  };
};

export default Agile;
