import {
  BlobVariations,
  Copy,
  Explainer,
  Grid,
  Keyfigure,
  LinkList,
  TextBlock,
  TextLink,
  UnorderedList,
} from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Contact } from '../../components/contact';
import { Image } from '../../components/image';
import { NextImageCard } from '../../components/image-card';
import { Testimonial } from '../../components/testimonial';
import { PageHeader } from '../../compositions/page-header';
import { Employee, getEmployeeByName } from '../../data/employees';

import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Link } from '../../elements/link';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';
import { getRandomTeasers } from '../../utils/teasers';

const STATIC_IMAGES = {
  solar: '/images/projekte/optimatik/solar-energy.jpg',
  screenshot: '/images/projekte/optimatik/ebp-screenshot.png',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
  quote: Quote;
  contact: Employee;
  teasers: Teaser[];
};

const Optimatik: NextPage<Props> = ({ quote, contact, teasers, images }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Transparenz im Energiesektor."
        description="Seit über 30 Jahren gehört die Optimatik AG zu den führenden Schweizer Gesamtanbietern und Integratoren von
        innovativen Software-Lösungen für Energieversorgungs-Unternehmen. Wir unterstützen die Optimatik AG dabei, ihre
        Produkte als Software as a Service Lösung im Web bereitzustellen."
      >
        <Copy>
          Seit über 30 Jahren gehört die Optimatik AG zu den führenden Schweizer Gesamtanbietern und Integratoren von
          innovativen Software-Lösungen für Energieversorgungs-Unternehmen. Wir unterstützen das Team der Optimatik AG dabei,
          ihre Produkte als Software as a Service Lösung im Web bereitzustellen.
        </Copy>
        <LinkList
          links={[
            { label: 'Zu Optimatik AG', href: 'https://optimatik.ch/' },
            { label: 'Zum Energie Business Portal', href: 'https://www.optimatik.ch/loesungen/energie-business-portal' },
          ]}
        />
      </PageHeader>

      <main>
        <Section>
          <Image
            src={images.solar}
            alt="Photovoltaik Anlage auf einem Feld"
            priority
            objectFit="cover"
            width={1500}
            height={1080}
          />
        </Section>

        <Section>
          <Grid cols={2}>
            <TextBlock title="Die Ausgangslage">
              Das Energie Business Portal der Optimatik AG gab es bis anhin als{' '}
              <Explainer title="Ein Server steht beim Kunden im Rechenzentrum und darauf wird dann die Software installiert.">
                On-Premise
              </Explainer>{' '}
              Lösung und sollte neu auch als SaaS aus der Cloud bezogen werden können. Die Optimatik AG hatte (noch) keine
              Cloud-Profis im Haus und zusätzlich einen relativ engen Zeitplan für die Umstellung.
            </TextBlock>
            <TextBlock title="Unsere Lösung">
              Mit einem speziell auf die Optimatik AG zugeschnittenen Workshop konnten wir das Team innert zwei Tagen auf den
              aktuellen Stand zum Thema Cloud Hosting mit <Link href="/was-ist/kubernetes/">Kubernetes</Link> bringen.
              Anschliessend haben wir in enger Zusammenarbeit die neue Google Cloud basierte Infrastruktur aufgesetzt und das
              Energie Business Portal mit automatisierten CI Pipelines auf den neuen Cluster deployt.
            </TextBlock>
          </Grid>
        </Section>

        <Section></Section>

        <Keyfigure
          image={
            <Image
              src={images.screenshot}
              alt="Screenshot vom Optimatik AG Energie Business Portal"
              priority
              objectFit="contain"
              width={800}
              height={800}
            />
          }
        >
          <UnorderedList
            title="Vorteile des Cloud-Betriebs"
            items={[
              'Schnelleres Onboarding von Neukund*innen',
              'Vereinfachte Wartung',
              'Reduzierung der Betriebskosten',
              'Weniger manuelle Eingriffe bei Betriebsstörungen',
            ]}
            markerColor="apricot"
          />
        </Keyfigure>

        <Section title="Unsere Schlüssel zum Erfolg">
          <Grid cols={3}>
            <TextBlock title="1. Keep it simple">
              Die Möglichkeiten des Betriebs in der Cloud sind endlos. Wir haben uns darauf konzentriert, die Lösung simpel
              zu halten, damit Probleme im laufenden Betrieb schneller gefunden werden.
            </TextBlock>
            <TextBlock title="2. Kundennähe">
              Eine enge Zusammenarbeit zwischen uns und dem Team der Optimatik AG war eine Grundvoraussetzung, damit sie den
              Betrieb der neuen Lösung nahtlos übernehmen konnten.
            </TextBlock>
            <TextBlock title="3. Automate Everything">
              Die häufigsten Fehler im Softwarebetrieb passieren durch menschliche Fehler während Systemupdates. Deshalb
              automatisieren wir, wo immer möglich.
            </TextBlock>
          </Grid>
        </Section>

        <Section>
          <Testimonial background="mint" blobs={BlobVariations.mint[2]} quote={quote} />
        </Section>
        <Section title="Und warum ist SaaS jetzt besser als On-Premise?">
          <Copy>
            Ein SaaS-Angebot aus der Cloud ist nicht per se besser als ein On-Premise-Betrieb. On-Premise-Lösungen sind aber
            aufwändiger aufzusetzen und komplexer in der Wartung. Deshalb kann ein Betrieb in der Cloud in aller Regel
            günstiger angeboten werden.
          </Copy>
        </Section>

        <Section title="Und was braucht man alles dafür?">
          <Grid cols={3}>
            <TextBlock title="CI Pipelines">
              Damit wir die Software nicht manuell paketieren und ausliefern müssen, setzen wir wir auf automatisierte CI
              Pipelines. In diesem Fall mit Bitbucket. Sonst auch oft mit GitLab oder GitHub.
            </TextBlock>
            <TextBlock title="Docker">
              Die Software wird bei der Auslieferung in Docker Container gepackt. Dies gibt uns eine einheitliche Basis für
              unterschiedliche Technologien und vereinfacht den Betrieb erheblich.
            </TextBlock>
            <TextBlock title="Kubernetes">
              Dank <Link href="/was-ist/kubernetes">Kubernetes</Link> erwachen die Docker Container zum Leben und können
              untereinander kommunizieren. Kubernetes kümmert sich auch um den Neustart, falls mal was klemmt.
            </TextBlock>
          </Grid>
          <Grid cols={3}>
            <TextBlock title="Google Cloud Plattform">
              Kubernetes beziehen wir von der Google Kubernetes Engine. Diese startet für uns die benötigten Server im
              Rechenzentrum in Zürich. AWS und Azure können das auch, aber hier verwenden wir den Dienst von Google.
            </TextBlock>
            <TextBlock title="Cloud SQL &amp; MongoDB Atlas">
              Eine PostgreSQL-Datenbank beziehen wir vom Google Cloud SQL Service. Eine MongoDB bei MongoDB Atlas. Beide
              Datenbanken laufen dann wieder im Google Rechenzentrum in Zürich, direkt neben unserem Kubernetes Cluster.
            </TextBlock>
            <TextBlock title="Python, Angular und Co">
              Damit das Energie Business Portal der Optimatik AG zum Leben erwacht, brauchts noch einiges mehr. Wenn du gerne
              mehr darüber wissen möchtest, freuen wir uns über{' '}
              <TextLink href="https://smr.tv/meet-josh">deine Anfrage</TextLink>.
            </TextBlock>
          </Grid>
        </Section>

        <Section>
          <Contact contact={contact}>
            Du möchtest dein Produkt auch aus der Cloud anbieten?
            {contact.firstname} unterstützt dich dabei!
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
  const teasers = getRandomTeasers(3, Teasers['optimatik'].title);
  const contact = await getEmployeeByName('Josh Wirth');

  return {
    props: {
      images,
      teasers,
      contact,
      quote: Quotes['hans-optimatik'],
    },
  };
};

export default Optimatik;
