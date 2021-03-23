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
import Page from '../../layouts/page';

type Props = {
  teasers: Teaser[];
  packages: Package[];
};

const Mvp: NextPage<Props> = ({ teasers, packages }) => (
  <Page>
    <PageHeader markdownTitle="So weisst du, dass die _Richtung_ stimmt.">
      <Copy>
        Ganz am Anfang definieren wir gemeinsam den Umfang des <strong>Earliest Testable Product</strong>, die erste
        funktionsfähige Version der App. Diese sieht noch nicht schön aus, sondern soll beweisen, dass sie den gewünschten
        Effekt erzielt. Wir testen sie idealerweise bereits mit deinen Endnutzer*innen.
      </Copy>
      <Copy>
        Feedback deiner User und im Austausch mit dir gewonnene Erkenntnise fliessen in die Planung mit ein. Daraus wächst in
        den nächsten Sprints ein <strong>Earliest Usable Product</strong>: In diesem Stadium bietet es deinen Nutzerinnen
        bereits einen Mehrwert.
      </Copy>
      <Copy>
        Auf dieser Basis arbeiten wir gemeinsam weiter bis zum <strong>Earliest Lovable Product</strong> – also bis dahin, wo
        du live gehen kannst. 🎉
      </Copy>
    </PageHeader>
    <main>
      <PageSection>
        <Grid cols={3}>
          <TextBlock title="Earliest Testable Product">
            Diese Version lässt du auf die ganz Neugierigen los. Ihr gesamtes Problem löst die App zwar noch nicht, aber das
            Potenzial ist klar und sie generiert Feedback.
          </TextBlock>
          <TextBlock title="Earliest Usable Product">
            Mit dieser Version können deine Early Adopters bereits etwas anfangen. Sie sieht noch nicht schön aus, aber der
            Mehrwert ist offensichtlich.
          </TextBlock>
          <TextBlock title="Earliest Lovable Product">
            Deine Nutzer*innen lieben es. Sie erzählen ihren Freund*innen davon und sind bereit, dafür zu zahlen. Du hast ein
            marktfähiges Produkt, bereit für den Go-live.
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
      <PageSection title="Diese Projekte wurden so erfolgreich">
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
