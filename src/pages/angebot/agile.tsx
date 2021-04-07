import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { ImageCard } from '../../components/image-card';
import { ImagePosition, Keyfigure } from '../../components/keyfigure';
import { TextBlock } from '../../components/text-block';
import { Grid } from '../../compositions/grid';
import { PageHeader } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import { UnorderedList } from '../../compositions/unordered-list';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Copy } from '../../identity/copy';
import { Heading3 } from '../../identity/heading-3';
import { Page } from '../../layouts/page';

type Props = {
  teasers: Teaser[];
};

const Agile: NextPage<Props> = ({ teasers }) => (
  <Page>
    <PageHeader
      markdownTitle="Was ist dieses _Scrum_?"
      description="Scrum ist unsere bevorzugte Spielart von agiler Entwicklung. Scrum gibt einen Rahmen für die Zusammenarbeit vor, der so viel absteckt wie nötig und so viel Freiraum lässt wie möglich."
    >
      <Copy>
        Scrum ist unsere bevorzugte Spielart von agiler Entwicklung. Scrum gibt einen Rahmen für die Zusammenarbeit vor, der
        so viel absteckt wie nötig und so viel Freiraum lässt wie möglich.
      </Copy>
    </PageHeader>

    <main>
      <Heading3>Scrum-Bausteine: Sprints & User Stories</Heading3>
      <Copy>
        <strong>Sprints</strong> dauern zwei Wochen. Eine Iteration umfasst ein Meeting zum Planen, die Umsetzung der
        definierten Anforderungen und ein Meeting zum Zurückschauen, woran sich gleich wieder die Planung des nächsten
        Sprints anschliesst.
      </Copy>
      <Copy>
        Die Basis für Planung und Umsetzung sind <strong>User Stories</strong>. Darin sind die Anforderungen aus der Sicht
        eines Benutzers fixiert.
      </Copy>

      <PageSection>
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
            Das bist du oder jemand aus deinem Team. Wichtig ist, dass die Person Entscheidungen treffen kann und will. Der
            Product Owner priorisiert die Aufgaben und Anforderungen und vertritt das Produkt gegenüber sämtlichen
            Stakeholder*innen – inklusive uns.
          </TextBlock>
          <TextBlock title="Product Owner Assistant">
            Product Owner Assistant ist jemand aus unserem Team. Nebst Moderator*in zwischen Entwicklungsteam und Product
            Owner ist er/sie auch Ansprechsperson für sämtliche Stakeholder*innen.
          </TextBlock>
          <TextBlock title="Scrum Master">
            Der Scrum Master sorgt dafür, dass das Team effizient arbeiten kann. Er schafft Probleme und Hindernisse aller
            Art aus dem Weg. Fehlen wichtige Personen im Prozess, sorgt der Scrum Master dafür, dass sie fortan auch am Tisch
            sitzen. Ist jemand im Team blockiert, hilft er, die Blockade zu lösen.
          </TextBlock>
          <TextBlock title="Umsetzungsteam">
            War da nicht noch… Ah, genau! Das Umsetzungsteam wird von smartive gestellt und ist interdisziplinär aufgestellt:
            Design, Entwicklung und Testing. Es bringt sämtliches benötigtes Knowhow für die erfolgreiche Durchführung des
            Projekts mit.
          </TextBlock>
        </Grid>
      </PageSection>
      <PageSection title="Diese Projekte haben wir agil umgsetzt">
        <Grid cols={3}>
          {teasers.map((teaser) => (
            <ImageCard key={teaser.title} {...teaser} />
          ))}
        </Grid>
      </PageSection>
    </main>
  </Page>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      teasers: [Teasers.migipedia, Teasers.subsidia, Teasers.ofpg],
    },
  };
};

export default Agile;
