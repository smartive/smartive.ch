import { Copy, Grid, LinkList, TextBlock } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Contact } from '../../components/contact';
import { Image, ImageVariant } from '../../components/image';
import { NextImageCard } from '../../components/image-card';
import { Testimonial } from '../../components/testimonial';
import { PageHeader } from '../../compositions/page-header';
import { Employee, getEmployeeByName } from '../../data/employees';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';
import { getRandomTeasers } from '../../utils/teasers';

const STATIC_IMAGES = {
  screen1: '/images/projekte/opsone/opsone-1.png',
  screen2: '/images/projekte/opsone/opsone-2.png',
  screen3: '/images/projekte/opsone/opsone-3.png',
  screen4: '/images/projekte/opsone/opsone-4.png',
  tables: '/images/projekte/opsone/opsone-tabelle.png',
  toggles: '/images/projekte/opsone/opsone-toggles.png',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
  teasers: Teaser[];
  contact: Employee;
  quote: Quote;
};

const OpsOne: NextPage<Props> = ({ images, teasers, contact, quote }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Ein Cockpit in der Cloud"
        description="Ops One. Dein High End Hosting Partner in der Schweiz."
      >
        <Copy>
          Ops One. Dein High-End-Hosting-Partner in der Schweiz. Managed Server, Managed Kubernetes, Managed Platform. Und
          was managen wir?
        </Copy>
        <Copy>
          Die Reise zu den neuen Technologien. Dafür haben nicht nur Ops One die Koffer gepackt. Wir haben das Gepäck auch
          verstaut und stellen sicher, dass alles unbeschadet ankommt.
        </Copy>
        <LinkList
          links={[
            {
              href: 'https://www.opsone.ch/',
              label: 'Bei Ops One vorbeischauen',
            },
          ]}
        />
      </PageHeader>

      <main>
        <Section>
          <Image
            src={images.screen4}
            alt="Screenshot Ops One Cockpit"
            priority
            variant={ImageVariant.FillContainer}
            width={3010}
            height={1694}
          />
        </Section>

        <Section title="Die Flugvorbereitung">
          <Copy>
            Das Cockpit von Ops One gibts schon länger. Da hast du die Übersicht über deine Cloud Produkte, deine Kosten und
            deine User. Die dafür verwendete Technologie (MeteorJS) war etwas in die Jahre gekommen. Die Wartbarkeit auch
            nicht das Gelbe vom Ei.
          </Copy>
          <Copy>
            Der visuelle Eindruck vom (alten) Cockpit hat nicht zur hochkarätigen Dienstleistungen von Ops One gepasst. Ein
            Rohdiamant der geschliffen werden wollte.
          </Copy>
        </Section>

        <Section title="Die Landung">
          <Copy>
            Das UI einmal neu designed. Entsprechend der Ops One Corporate Identity. Durch unsere Interaction Designer. Das
            Frontend einmal neu geschrieben. Mit den neusten Technologien. Die APIs mit einem intelligenten Zwischenlayer
            ausgestattet.
          </Copy>
          <Copy>
            Gerüstet für die Zukunft: Mit automatisierten Updates dank Dependency-Bot und umfassenden automatisierten Tests
            in der CI-Pipeline dank Playwright.
          </Copy>
          <Copy>
            Das ist wichtig, weil: Das ist noch nicht alles. Da kommt noch mehr. Ein paar coole Features über die ihr
            hoffentlich bald mehr lesen könnt.
          </Copy>
        </Section>
        <Section>
          <Grid cols={2}>
            <Image
              src={images.toggles}
              alt="Screenshot Ops One Cockpit"
              priority
              variant={ImageVariant.Centered}
              width={3010}
              height={1693}
            />
            <Image
              src={images.tables}
              alt="Screenshot Ops One Cockpit"
              priority
              variant={ImageVariant.Centered}
              width={3010}
              height={1693}
            />
          </Grid>
        </Section>

        <Section title="Technologien">
          <Grid cols={3}>
            <TextBlock title="Vorne.">
              Next.js Frontend auf Node v18 mit Tailwind und XState für den Review Flow. Warum? Weil uns die
              Developer-Experience gefällt und man damit echt effiziente Lösungen bauen kann.
            </TextBlock>
            <TextBlock title="Hinten.">
              Eventbasierte REST Microservice APIs mit Python aus Kubernetes. Die wurden direkt vom Ops One Team gebaut.
              Weshalb? Das sind die direkten Schnittstellen auf die von Ops One entwickelten DevOps Systeme.
            </TextBlock>
            <TextBlock title="Und dazwischen?">
              Ein automatisch generierter, zentraler GraphQL API-Aggregator auf Basis der OpenAPI Spec der dahinterliegenden
              Services. Damit wir nicht 784 einzelne API Calls machen. Für Endkunden übrigens auch erreichbar.
            </TextBlock>
          </Grid>
        </Section>

        <Testimonial background="cornflower" quote={quote} />

        <Section>
          <Contact contact={contact}>
            Dominique weiss, wie man mit der Cloud durchstartet. Er erzählt dir gerne davon.
          </Contact>
        </Section>

        <Section title="Weitere Erfolgsgeschichten">
          <Grid cols={3}>
            {teasers.map((teaser) => (
              <NextImageCard key={teaser.title} {...teaser} />
            ))}
          </Grid>
        </Section>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const images = STATIC_IMAGES;
  const teasers = getRandomTeasers(3, Teasers.frontify.title);
  const contact = await getEmployeeByName('Dominique Wirz');

  return {
    props: {
      images,
      teasers,
      quote: Quotes['martin-opsone'],
      contact,
    },
  };
};

export default OpsOne;
