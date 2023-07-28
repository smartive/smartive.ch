import { BlobVariations, Copy, Grid, TextBlock, TextLink } from '@smartive/guetzli';
import dayjs from 'dayjs';
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
  stgallen: {
    src: '/images/mood/office-stgallen-terrasse.jpg',
    alt: 'drei smartive Mitarbeitende auf der Terrasse an einem Tisch am Arbeiten und lachen',
  },
  mittag: { src: '/images/mood/YB_06742.jpg', alt: 'smartive Team am Mittagstisch beim Essen' },
  jungle: { src: '/images/mood/damian-anna-jungle.jpg', alt: 'zwei smartive Mitarbeiter im kleinen Sitzungszimmer' },
  coderetreat: {
    src: '/images/mood/code-retreat-hackday.jpg',
    alt: 'smartive Team am arbeiten an einem Tisch im freien mit dem Valle Verzasca im Hintergrund',
  },
} as const;

const FOUR_CULTURE_IMAGES = [
  {
    src: '/images/mood/code-retreat21-linguistik-vortrag.jpg',
    alt: 'smartive Team an einem Vortrag über Linguistik von einem smartive Mitarbeiter',
  },
  { src: '/images/mood/boat/2.jpg', alt: 'smartive Team beim Kubb spielen auf einer grünen Wies' },
  {
    src: '/images/mood/aescher-gruppenbild.jpg',
    alt: 'smartive Team bei einer Wanderung mit dem Gasthaus Aescher-Wildkirchli im Hintergrund',
  },
  {
    src: '/images/anniversary/2022/stadtfueahrig.jpeg',
    alt: 'smartive Team bei einer Zürich Stadtführung auf dem Lindenhof',
  },
];

type Props = {
  employees: FullEmployee[];
  quote: Quote;
};

const FOUNDING_YEAR = 2012;

const Agentur: NextPage<Props> = ({ quote, employees }) => {
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
              src={STATIC_IMAGES.stgallen.src}
              alt={STATIC_IMAGES.stgallen.alt}
              variant={ImageVariant.FillContainer}
              width={720}
              height={380}
            />
            <div className="hidden md:block md:col-start-2 md:row-span-2 relative">
              <Image
                src={STATIC_IMAGES.mittag.src}
                alt={STATIC_IMAGES.mittag.alt}
                variant={ImageVariant.FillContainer}
                width={1440}
                height={1026}
              />
            </div>
            <div className="block md:hidden">
              <Image
                src={STATIC_IMAGES.mittag.src}
                alt={STATIC_IMAGES.mittag.alt}
                variant={ImageVariant.FillContainer}
                width={720}
                height={500}
              />
            </div>
            <Image
              src={STATIC_IMAGES.jungle.src}
              alt={STATIC_IMAGES.jungle.alt}
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
            {FOUR_CULTURE_IMAGES.map((image) => (
              <div key={image.src} className="h-[500px]">
                <Image src={image.src} alt={image.alt} variant={ImageVariant.FillContainer} width={720} height={500} />
              </div>
            ))}
            <div className="h-[500px] md:col-span-2">
              <Image
                src={STATIC_IMAGES.coderetreat.src}
                alt={STATIC_IMAGES.coderetreat.alt}
                variant={ImageVariant.FillContainer}
                width={1504}
                height={800}
              />
            </div>
          </Grid>

          <Grid cols={2}>
            <TextBlock title="Über eine Dekade 🤩" number={dayjs().year() - FOUNDING_YEAR}>
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
            <TextBlock title="Mehr als die Hälfte" number={55} unit="%">
              Bei uns wird der Erfolg nicht nur gefeiert, sondern auch geteilt! 55% des Gewinns werden als Bonus an alle
              Mitarbeitenden ausgezahlt.
            </TextBlock>
            <TextBlock title="Top 10 in fünf Jahren" number={10}>
              Unsere Projekte werden regelmässig ausgezeichnet. Bei den{' '}
              <TextLink href="https://www.netzwoche.ch/news/2022-04-28/die-ewige-bestenliste-2022" newTab>
                Best of Swiss Web Awards
              </TextLink>{' '}
              rangieren wir in den Top 10 der vergangenen 5 Jahre.
            </TextBlock>
            <TextBlock title="Null Chefs" number="0">
              Wir leben nach New-Work-Prinzipien. Das heisst Selbstorganisation und keine Hierarchien oder Chefs.
            </TextBlock>
          </Grid>
        </Section>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const employees = await getAllFullEmployees();

  return {
    props: {
      employees,
      quote: Quotes['dominique-kultur'],
    },
  };
};

export default Agentur;
