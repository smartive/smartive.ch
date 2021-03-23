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
        Ganz am Anfang definieren wir gemeinsam den Umfang des <strong>Earliest Testable Products</strong>, die erste
        funktionsfähige Version der App. Diese sieht noch nicht schön aus, sondern soll beweisen, dass sie den gewünschten
        Effekt erzielt. Idealerweise testen wir sie bereits mit deinen Endnutzer*innen.
      </Copy>
      <Copy>
        Das Feedback deiner User und die gewonnenen Erkenntnisse fliessen in die Planung mit ein. Daraus wächst in den
        nächsten Sprints ein <strong>Earliest Usable Product</strong>, das deinen Nutzer*innen bereits einen Mehrwert bietet.
      </Copy>
      <Copy>
        Auf dieser Basis arbeiten wir gemeinsam auf das <strong>Earliest Lovable Product</strong> hin, mit dem du
        schliesslich live gehen kannst. 🎉
      </Copy>
    </PageHeader>
    <main>
      <PageSection>
        <Grid cols={3}>
          <TextBlock title="Earliest Testable Product">
            Diese Version lässt du von den ganz neugierigen Nutzer*innen testen. Die App löst das Problem zwar noch nicht bis
            ins Detail, aber wir erhalten wertvolles Feedback für die folgenden Schritte und erkennen, wo das grösste
            Potential steckt.
          </TextBlock>
          <TextBlock title="Earliest Usable Product">
            Mit dieser Version können deine Early Adopters bereits etwas anfangen. Sie sieht noch nicht schön aus, generiert
            aber einen offensichtlichen Mehrwert.
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
