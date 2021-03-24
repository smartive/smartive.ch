import { GetStaticProps, NextPage } from 'next';
import { ContentCard } from '../../components/content-card';
import { ImageCard } from '../../components/image-card';
import { TextBlock } from '../../components/text-block';
import { Grid } from '../../compositions/grid';
import { GridSlider } from '../../compositions/grid-slider';
import { PageHeader } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import Packages, { Package } from '../../data/packages';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Copy } from '../../identity/copy';
import { Clock } from '../../identity/icons';
import { Page } from '../../layouts/page';

type Props = {
  teasers: Teaser[];
  packages: Package[];
};

const Mvp: NextPage<Props> = ({ teasers, packages }) => (
  <Page>
    <PageHeader markdownTitle="So weisst du, dass die _Richtung_ stimmt.">
      <Copy>
        Damit der Weg zum Go-live nicht zu einer Reise mit ungewissem Ausgang wird, planen wir drei Checkpoints ein: Ganz am
        Anfang definieren wir gemeinsam den Umfang des <strong>Earliest Testable Products</strong>. Das testen wir mit deinen
        User*innen. Die Erkenntnisse fliessen ins <strong>Earliest Usable Product</strong> ein. Von da arbeiten wir auf das{' '}
        <strong>Earliest Lovable Product</strong> hin, mit dem du schliesslich live gehen kannst. 🎉
      </Copy>
    </PageHeader>
    <main>
      <PageSection>
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
      </PageSection>
      <PageSection title="Mit diesen Angeboten kommst du zu deinem Earliest Lovable Product">
        <GridSlider>
          {packages.map(({ label, ...paeckli }) => (
            <ContentCard
              {...paeckli}
              key={paeckli.title}
              label={
                <>
                  <Clock className="h-4 w-4 mr-2 inline" />
                  {label}
                </>
              }
            />
          ))}
        </GridSlider>
      </PageSection>
      <PageSection title="Diesen Projekten haben wir so zum Erfolg verholfen">
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
  const packages = [Packages['ideation-sprint'], Packages['speedboat']];
  const teasers = [Teasers.subsidia, Teasers['supply-chain'], Teasers.ofpg];

  return {
    props: {
      teasers,
      packages,
    },
  };
};

export default Mvp;
