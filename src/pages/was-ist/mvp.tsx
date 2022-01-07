import { Copy, Grid, TextBlock } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { NextImageCard } from '../../components/image-card';
import { PackageList } from '../../compositions/package-list';
import { PageHeader } from '../../compositions/page-header';
import Packages, { Package } from '../../data/packages';
import { Teaser, transformTeaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';

type Props = {
  teasers: Teaser[];
  packages: Package[];
};

const Mvp: NextPage<Props> = ({ teasers, packages }) => (
  <Page>
    <PageHeader
      markdownTitle="Minimum Viable Product (MVP): Damit du weisst, dass die _Richtung_ stimmt."
      pageTitle="Was ist eigentlich ein MVP?"
      description="Ganz am Anfang definieren wir gemeinsam den Umfang des Earliest Testable Products. Das testen wir mit deinen User*innen. Die Erkenntnisse fliessen ins Earliest Usable Product ein. Von da arbeiten wir auf das Earliest Lovable Product hin, mit dem du schliesslich live gehen kannst."
    >
      <Copy>
        Damit der Weg zum Go-live nicht zu einer Reise mit ungewissem Ausgang wird, planen wir drei Checkpoints ein: Ganz am
        Anfang definieren wir gemeinsam den Umfang des <strong>Earliest Testable Products</strong>. Das testen wir mit deinen
        User*innen. Die Erkenntnisse fliessen ins <strong>Earliest Usable Product</strong> ein. Von da arbeiten wir auf das{' '}
        <strong>Earliest Lovable Product</strong> hin, mit dem du schliesslich live gehen kannst. 🎉
      </Copy>
    </PageHeader>
    <main>
      <Section>
        <Grid cols={3}>
          <TextBlock title="Earliest Testable Product">
            Die erste funktionsfähige Version der App hat zwar noch diverse vorstehende Ecken und ungeschliffene Kanten,
            erzielt aber den gewünschten Effekt. Diese Version lässt du von den ganz neugierigen Nutzer*innen testen. Das
            Feedback zeigt, wo das grösste Potential steckt.
          </TextBlock>
          <TextBlock title="Earliest Usable Product">
            Diese Version ist so weit entwickelt, dass sie Early Adopters bereits einsetzen möchten. Sie gewinnt noch keinen
            Schönheitswettbewerb, aber der Mehrwert ist offensichtlich.
          </TextBlock>
          <TextBlock title="Earliest Lovable Product">
            Deine Nutzer*innen lieben es. Sie erzählen ihren Freund*innen davon und sind bereit, dafür zu zahlen. Du hast ein
            marktfähiges Produkt, das bereit ist für den Go-live.
          </TextBlock>
        </Grid>
      </Section>
      <Section title="Mit diesen Angeboten kommst du zu deinem Earliest Lovable Product">
        <PackageList packages={packages} />
      </Section>
      <Section title="Diesen Projekten haben wir so zum Erfolg verholfen">
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
  const packages = [Packages['design-sprint'], Packages['speedboat']];
  const teasers = await Promise.all(
    [Teasers.subsidia, Teasers['supply-chain'], Teasers.ofpg].map(async (teaser) => await transformTeaser(teaser))
  );
  return {
    props: {
      teasers,
      packages,
    },
  };
};

export default Mvp;
