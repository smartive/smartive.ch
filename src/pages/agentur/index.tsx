import { BlobVariations, Copy, Grid, TextBlock, TextLink } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Image, ImageVariant } from '../../components/image';
import { Testimonial } from '../../components/testimonial';
import { PageHeader } from '../../compositions/page-header';
import TextBlocks from '../../data/benefits.json';
import { FullEmployee, getAllFullEmployees } from '../../data/employees';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';

const STATIC_IMAGES = {
  dife: '/images/mood/dominique-lab-finger.jpg',
  mittag: '/images/mood/YB_06742.jpg',
  vortrag: '/images/mood/robert-dife-close-up.jpg',
  coderetreat: '/images/mood/code-retreat-hackday.jpg',
  aescher: '/images/mood/aescher-gruppenbild.jpg',
  terrasse: '/images/mood/code-retreat-terrasse.jpg',
  fussball: '/images/mood/code-retreat-fussball.jpg',
  essen: '/images/mood/code-retreat-lunch.jpg',
} as const;

type Props = {
  employees: FullEmployee[];
  images: typeof STATIC_IMAGES;
  quote: Quote;
};

const Agentur: NextPage<Props> = ({ quote, images, employees }) => {
  const teamSize = employees.length;
  const shareholderSize = employees.filter((employee) => employee.shareholder).length;

  return (
    <Page>
      <PageHeader
        markdownTitle="Wir sind _smartive_. Wir stehen für digitale Lösungen und eine bizli andere Firmenkultur."
        description="Wir wollen einen Ort schaffen, an dem wir nicht nur arbeiten, sondern auch Freundschaft und Freiheit leben. Mit Platz für verschiedene Persönlichkeiten, Interessen und Entwicklung. Dies ermöglicht uns die volle Entfaltung unseres Potenzials."
      >
        <Copy>
          Chefgehabe ist uns so fremd wie komplexe Hierarchien und Gärtchendenken. Herausforderungen werden gemeinsam
          angegangen, Probleme offen angesprochen und gelöst. Wir wollen einen Ort schaffen, an dem wir nicht nur arbeiten,
          sondern auch Freundschaft und Freiheit leben. Mit Platz für verschiedene Persönlichkeiten, Interessen und
          Entwicklung. Dies ermöglicht uns die volle Entfaltung unseres Potenzials.
        </Copy>
      </PageHeader>

      <main>
        <Section>
          <Grid cols={2}>
            <Image
              src={images.dife}
              alt="smartive Mitarbeiter mit einem Schild auf dem smartive beworben wird"
              variant={ImageVariant.FillContainer}
              width={720}
              height={380}
            />
            <div className="hidden md:block md:col-start-2 md:row-span-2 relative">
              <Image
                src={images.mittag}
                alt="smartive Team am Mittagstisch beim Essen"
                variant={ImageVariant.FillContainer}
                width={1440}
                height={1026}
              />
            </div>
            <div className="block md:hidden">
              <Image
                src={images.mittag}
                alt="smartive Team am Mittagstisch beim Essen"
                variant={ImageVariant.FillContainer}
                width={720}
                height={500}
              />
            </div>
            <Image
              src={images.vortrag}
              alt="smartive Mitarbeiter hält einen Vortrag vor mehreren Leuten"
              variant={ImageVariant.FillContainer}
              width={720}
              height={500}
            />
          </Grid>
          <Grid cols={3}>
            {TextBlocks.map(({ title, content }) => (
              <TextBlock key={title} title={title}>
                {content}
              </TextBlock>
            ))}
          </Grid>
          <Testimonial background="cornflower" blobs={BlobVariations.cornflower[0]} quote={quote} />
          <Grid cols={2}>
            <div className="h-[500px]">
              <Image
                src={images.coderetreat}
                alt="smartive Team am arbeiten an einem Tisch im freien mit dem Valle Verzasca im Hintergrund"
                variant={ImageVariant.FillContainer}
                width={720}
                height={500}
              />
            </div>
            <div className="h-[500px]">
              <Image
                src={images.aescher}
                alt="smartive Team bei einer Wanderung mit dem Gasthaus Aescher-Wildkirchli im Hintergrund"
                variant={ImageVariant.FillContainer}
                width={720}
                height={500}
              />
            </div>
            <div className="h-[500px]">
              <Image
                src={images.terrasse}
                alt="smartive Team sitzt auf einer Bank mit blauem Himmel und Thunersee im Hintergrund"
                variant={ImageVariant.FillContainer}
                width={720}
                height={500}
              />
            </div>
            <div className="h-[500px]">
              <Image
                src={images.fussball}
                alt="smartive Team beim Fussballspielen auf einer grünen Wiese"
                variant={ImageVariant.FillContainer}
                width={720}
                height={500}
              />
            </div>
            <div className="h-[500px] md:col-span-2">
              <Image
                src={images.essen}
                alt="smartive Team beim Mittagessen im Freien"
                variant={ImageVariant.FillContainer}
                width={1504}
                height={800}
              />
            </div>
          </Grid>

          <Grid cols={2}>
            <TextBlock title="Eine Dekade 🤩" number={10}>
              smartive wurde 2012 gegründet. Die Firma ist gewachsen, die Kernidee geblieben: Ein Ort, an dem wir uns alle
              einbringen und so arbeiten, wie es uns entspricht.
            </TextBlock>
            <TextBlock title="Teilhaber*innen" number={shareholderSize}>
              Darauf sind wir stolz: {shareholderSize} unserer {teamSize} Mitarbeitenden besitzen smartive-Aktien. Es gibt
              keine externen Aktionärinnen oder Stakeholder.
            </TextBlock>
            <TextBlock title="Ein Viertelhundert" number={teamSize}>
              Heute kommen {teamSize} Mitarbeitende in Zürich zusammen und bringen ihre Fähigkeiten und ihre Persönlichkeit
              ein – in Software-Entwicklung, Projektleitung, Design und User Experience.
            </TextBlock>
            <TextBlock title="Ein Drittel" number={30} unit="%">
              Was, 30% sind kein Drittel? Dann vielleicht so: Ein Drittel* des Gewinns wird ans Team als Bonus ausbezahlt
              &ndash; mindestens.
            </TextBlock>
            <TextBlock title="Top 10 in fünf Jahren" number={10}>
              Unsere Projekte werden regelmässig ausgezeichnet. Bei den{' '}
              <TextLink href="https://www.netzwoche.ch/news/2022-04-28/die-ewige-bestenliste-2022" newTab>
                Best of Swiss Web Awards
              </TextLink>{' '}
              rangieren wir in den Top 10 der vergangenen 5 Jahre.
            </TextBlock>
            <TextBlock title="Null Chefs" number={0}>
              Wir leben nach New-Work-Prinzipien. Das heisst Selbstorganisation und keine Hierarchien oder Chefs.
            </TextBlock>
          </Grid>
        </Section>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const images = STATIC_IMAGES;
  const employees = await getAllFullEmployees();

  return {
    props: {
      employees,
      images,
      quote: Quotes['dominique-kultur'],
    },
  };
};

export default Agentur;
