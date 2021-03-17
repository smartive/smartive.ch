import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { ImageCard } from '../../compositions/image-card';
import { PageHeader } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import { TextBlock } from '../../compositions/text-block';
import { UnorderedList } from '../../compositions/unordered-list';
import { Teaser } from '../../data/teaser';
import { Copy } from '../../elements/copy';
import { Heading3 } from '../../elements/heading-3';
import { Grid } from '../../layouts/grid';

import Teasers from '../../data/teasers.json';
import { Keyfigure } from '../../components/keyfigure';

type Props = {
  teasers: Teaser[];
};

const Agile: NextPage<Props> = ({ teasers }) => (
  <div>
    <PageHeader markdownTitle="Was ist dieses _Scrum_?">
      <Copy>Unsere bevorzugte Spielart von agiler Entwicklung. Der Rahmen, der Scrum vorgibt:</Copy>
      <Image
        src="/images/illus/scrum.png"
        layout="responsive"
        height="908"
        width="3018"
        objectFit="contain"
        alt="Scrum Prozess mit Iterationen"
      />
    </PageHeader>
    <main>
      <PageSection>
        <Keyfigure>
          <UnorderedList
            title="Was braucht's für Scrum?"
            items={[
              'Wir arbeiten in zweiwöchigen Iterationen (Sprints).',
              'Anforderungen werden als User Stories fixiert.',
              'Vor jedem Sprint wird der Inhalt und Umfang geplant: Das Team schätzt gemeinsam die Komplexität der einzelnen User Stories und du setzt fest, was in welcher Reihenfolge umgesetzt werden soll.',
              'Am Ende des Sprints präsentieren wir die abgeschlossenen Stories – laufend und interaktiv. Eine der wichtigsten Regeln der agilen Entwicklung ist nämlich, stets ein lauffähiges Produkt zu haben.',
              'Zusätzlich blicken wir gemeinsam auf den Sprint zurück: Was ist gut gelaufen, wie können wir die Zusammenarbeit verbessern?',
            ]}
          />
        </Keyfigure>

        <Grid cols={3}>
          <TextBlock title="Product Owner">
            Das bist du. Oder jemand aus deinem Team. Wichtig ist, dass die Person Entscheidungen treffen kann und will. Der
            Product Owner priorisiert die Aufgaben und Anforderungen und vertritt das Produkt gegenüber sämtlichen
            Stakeholdern – inklusive uns.
          </TextBlock>
          <div>
            <Heading3>Product Owner Assistant und Scrum Master</Heading3>
            <Copy>
              <strong>Product Owner Assistant</strong> ist jemand aus unserem Team. Die Aufgabe: Ansprechperson für sämtliche
              Stakeholder und Moderator*in zwischen Entwicklungsteam und Product Owner.
            </Copy>
            <Copy>
              Der <strong>Scrum Master</strong> sorgt dafür, dass das Team effizient arbeiten kann. Er schafft Probleme und
              Hindernisse aller Art aus dem Weg. Fehlen wichtige Personen im Prozess, sorgt der Scrum Master dafür, dass sie
              fortan auch am Tisch sitzen. Ist jemand im Team blockiert, hilft er, die Blockade zu lösen.
            </Copy>
          </div>
          <TextBlock title="Umsetzungsteam">
            War da nicht noch… Ah, genau: Das Team. Es wird von smartive gestellt und ist interdisziplinär aufgestellt:
            Design, Entwicklung und Testing. Das Team bringt sämtliches benötigtes Knowhow für die erfolgreiche Durchführung
            des Projekts mit.
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
  </div>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      teasers: [Teasers.migipedia, Teasers.subsidia, Teasers.ofpg],
    },
  };
};

export default Agile;
