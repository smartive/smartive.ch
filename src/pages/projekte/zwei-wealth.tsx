import {
  BlobVariations,
  Copy,
  Explainer,
  Grid,
  Keyfigure,
  LinkList,
  Screenshot,
  ScreenshotVariant,
  TextBlock,
  UnorderedList,
} from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { Contact } from '../../components/contact';
import { Image } from '../../components/image';
import { NextImageCard } from '../../components/image-card';
import { Testimonial } from '../../components/testimonial';
import { PackageList } from '../../compositions/package-list';
import { PageHeader } from '../../compositions/page-header';
import { Employee, getEmployeeByName } from '../../data/employees';
import Packages, { Package } from '../../data/packages';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Link } from '../../elements/link';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';
import { getRandomTeasers } from '../../utils/teasers';

const STATIC_IMAGES = {
  screenSmall: '/images/projekte/zwei-wealth/screen-small.png',
  screen: '/images/projekte/zwei-wealth/screen.png',
  designsprint: '/images/projekte/zwei-wealth/designsprint.png',
  designsprint2: '/images/projekte/zwei-wealth/designsprint-2.png',
  dashboard: '/images/projekte/zwei-wealth/dashboard.png',
  chat: '/images/projekte/zwei-wealth/chat.png',
  article: '/images/projekte/zwei-wealth/article.png',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
  quote: Quote;
  contact: Employee;
  teasers: Teaser[];
  packages: Package[];
};

const ZweiWealth: NextPage<Props> = ({ quote, contact, teasers, images, packages }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Digitalisierung einer Vermögensverwaltung."
        description="Wir digitalisieren das Business von ZWEI Wealth mit einer Online-Plattform für Kunden und Asset Manager."
      >
        <Copy>
          Wir digitalisieren das Business von ZWEI Wealth mit einer Online-Plattform für Kunden und Asset Manager. Mit
          Design-Sprints erarbeiten wir den Fokus der nächsten grossen Iteration für unser Development-Team. Eine digitale
          Vermögensplattform, mit der Kund*innen personalisierte Informationen über das eigene Vermögen bei ZWEI Wealth
          erhalten.
        </Copy>
        <LinkList links={[{ label: 'Zum Wealth Office', href: 'https://zwei-wealth.ch/' }]} />
      </PageHeader>

      <main>
        <Section>
          <Grid cols={2}>
            <Image src={images.chat} alt="Titelbild" priority objectFit="cover" width={1420} height={1420} />
            <Image src={images.article} alt="Titelbild" priority objectFit="cover" width={1420} height={1420} />
          </Grid>
        </Section>

        <Section>
          <Grid cols={2}>
            <TextBlock title="Die Idee">
              Das eigene Vermögen im grossen Stil verwalten, wie es früher nur wenigen vergönnt war. Ohne
              Interessenskonflikte, mit sauberer Planung und dank Ausschreibung im Marktplatz auch noch günstiger. Damit
              traten Prof. Dr. Klaus Wellershoff und Patrick Müller 2014 aus den Schatten. Seit damals wuchs ZWEI Wealth.
              Eine digitale Plattform war gefragt, um Anleger*innen, Beraterinnen von ZWEI Wealth und Vermögensverwalter
              zusammenzubringen. Das macht eine durchgängige Digitalisierung der Prozesse möglich – was wiederum diverse
              Vorteile bringt
            </TextBlock>
            <TextBlock title="Die Plattform">
              Ein Experte schreibt einen Auftrag auf dem digitalen Marktplatz aus, worauf dann Vermögensverwalter
              verschiedene Offerten einreichen. Das Vermögen wird angelegt. Anschliessend kontrolliert und bewertet der
              ZWEI-Experte die Vermögensverwalterin. Die Kundin kann sich jederzeit einloggen und hat die Übersicht über
              Vermögen, Performance und Kosten – komplett unabhängig von Bank und Vermögensverwaltung. Sie profitiert von
              einer besseren und günstigeren Dienstleistung. Marktplatz sei Dank. Heute kümmern sich bereits 40 Expert*innen
              um 500 Kundinnen und Kunden – Tendenz stark steigend.
            </TextBlock>
          </Grid>
          <Screenshot image={{ url: images.screen, originalHeight: 1846, originalWidth: 3010 }} />
        </Section>

        <Section>
          <Keyfigure
            background="cornflower"
            image={
              <Screenshot
                variant={ScreenshotVariant.mobile}
                image={{ url: images.screenSmall, originalHeight: 1312, originalWidth: 750 }}
              />
            }
          >
            <UnorderedList
              title="Auf einen Blick"
              items={[
                'ein Marktplatz',
                '300 geprüfte Vermögensverwalter*innen',
                'über 5 Mrd. CHF Vermögen verwaltet',
                'über 500 Kunden*innen',
                'verwaltet von über vierzig Vermögensverwalter*innen',
              ]}
              markerColor="apricot"
            />
          </Keyfigure>
        </Section>

        <Section title="Wie wir ZWEI Wealth geholfen haben">
          <TextBlock title="Mit einem MVP">
            Gestartet haben wir mit dem <Link href="/was-ist/mvp/">Minimum Viable Product</Link>. Das Ziel: in möglichst
            kurzer Zeit ein funktionierendes Produkt auf den Markt bringen und es dann fortlaufend verbessern. Da geht man
            bei der Funktionalität gewisse Kompromisse ein, die später adressiert werden müssen. Die effiziente
            Time-to-Market lohnt sich jedoch.{' '}
          </TextBlock>
          <TextBlock title={''}>
            Mit echtem Kundenfeedback, aus der produktiven Umgebung, sind die nächsten Schritte viel einfacher zu planen. Man
            tappt weniger im dunklen, kann erste Kund*innen bereits onboarden und generiert früher Einnahmen. Und seien wir
            ehrlich: auch ohne MVP Ansatz gibt es Kompromisse, die wir später nochmals anpassen würden. Beim zweiten Mal ist
            man schliesslich immer schlauer. Also warum nicht von Anfang an damit in den Ring steigen und den Go-Live
            durchziehen, bevor man alles vergoldet und perfektioniert hat.
          </TextBlock>
          <Grid cols={3}>
            <TextBlock title="Mit Design Sprints">
              In intensiven <Link href="/angebot/design-sprint">Design-Sprints</Link> haben wir, zusammen mit dem ZWEI Wealth
              Team, Lösungen erarbeitet. Diese haben wir mit visuellen Prototypen direkt mit echten Personen getestet. So
              konnten wir sicherstellen, dass unsere Ideen auch so funktionieren, wie wir uns das vorgestellt haben. Und das
              Ganze noch bevor wir mit der Umsetzung gestartet haben.
            </TextBlock>
            <TextBlock title="Mit besseren Workflows">
              Die Online-Plattform unterstützt nicht nur Kund*innen. Auch für Asset Manager werden Arbeitsabläufe
              vereinfacht. Was früher mit verschiedenen digitalen Werkzeugen gemacht wurde, kann heute einheitlich und in
              einem System abgewickelt werden.
            </TextBlock>
            <TextBlock title="Mit Lean UX">
              Das Nutzungserlebnis hat Priorität. Unsere Interaction Designer sind komplett{' '}
              <Link href="/was-ist/lean-ux">in den Entwicklungsprozess integriert</Link>. Neue Features werden fortlaufend
              mit visuellen Prototypen ausgearbeitet und validiert. Das führt zu besseren Ergebnissen und kürzeren
              Produkt-Release-Zyklen.
            </TextBlock>
          </Grid>
        </Section>

        <Section>
          <Grid cols={2}>
            <Image
              src={images.designsprint}
              alt="Pinke Post-Its auf einem Tisch"
              priority
              objectFit="cover"
              width={1420}
              height={1420}
            />
            <Image
              src={images.designsprint2}
              alt="Gelbe Post-Its auf einem Tisch"
              priority
              objectFit="cover"
              width={1420}
              height={1420}
            />
          </Grid>
        </Section>

        <Section title="Ein Blick hinter die Kulissen">
          <Grid cols={3}>
            <TextBlock title="Model-First">
              Statt direkt den Code für die Platform zu schreiben, erstellen wir ein Datenmodel. Dann schreiben wir Code, der
              aus diesem Model den eigentlichen Code für die Platform generiert. Klingt verrückt? Mit diesem Ansatz ist der
              initiale Aufwand zwar etwas höher, dafür sind wir jetzt aber richtig schnell mit neuen Features. Wir können
              schnell iterieren und neue Ideen ausprobieren.
            </TextBlock>
            <TextBlock title="DevOps">
              Wenn wir Anpassungen vornehmen, werden diese automatisch auf das Test-, oder das produktive System deployed.
              GitLab CI/CD und Terraform kümmern sich darum, dass das System wie geplant auf der Google Cloud Plattform
              landet. Dabei laufen auch diverse Tests, damit wir sicherstellen können, dass unsere Änderungen keine
              unerwünschten Nebenwirkungen auslösen.
            </TextBlock>
            <TextBlock title="Technology">
              Für das Wealth-Office von ZWEI Wealth verwenden wir <Link href="/was-ist/react#next">Next.js</Link> mit
              TypeScript und einer <Link href="/was-ist/graphql">GraphQL API</Link>. Warum? Weil uns die Developer-Experience
              gefällt und weil man damit echt gute Lösungen bauen kann. Für die automatisierten Tests verwenden wir
              Playwright und unsere visuellen Prototypen erstellen wir mit Figma. Das hast du alles gelesen? Du hast bis hier
              hin gelesen? Das freut uns richtig! 🤗
            </TextBlock>
          </Grid>

          <Testimonial background="apricot" blobs={BlobVariations.apricot[0]} quote={quote} />
        </Section>
        <Section>
          <TextBlock title="Die Sache mit dem Login">
            Da Vermögensdaten sehr vertraulich sind, brauchten wir ein sicheres, geschütztes{' '}
            <Link href="/was-ist/iam">Benutzerverwaltungssystem</Link>. Gestartet haben wir mit Auth0. Die Plattform hat uns
            eigentlich mehr geboten als wir gebrauchen konnten.{' '}
          </TextBlock>
          <TextBlock title={''}>
            Die benötigten SMS für die{' '}
            <Explainer
              title={
                'Zusätzlicher Zugriffsschutz, bei dem nebst einem Passwort ein zusätzliches Identifizierungsmerkmal (z.B. ein SMS Code) gebraucht wird, um sich anzumelden.'
              }
            >
              Multifaktor-Authentifizierung
            </Explainer>{' '}
            sind da aber echt teuer. Deshalb haben wir uns dann doch für Google Identity entschieden. Das ist zwar nicht ganz
            so komfortabel, dafür aber echt preiswert.
          </TextBlock>
        </Section>

        <Section>
          <Contact contact={contact}>
            {contact.firstname} unterstützt ZWEI Wealth auch bei ihrem nächsten Projekt. Meld dich bei ihm, wenn du mehr
            wissen willst.
          </Contact>
        </Section>

        <Section title="Das haben wir mit dem ZWEI Wealth gemacht:">
          <PackageList packages={packages} />
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
  const teasers = getRandomTeasers(3, Teasers['learnfox'].title);
  const packages = [Packages['design-sprint'], Packages['feasibility'], Packages['speedboat'], Packages['scale-up']];
  const contact = await getEmployeeByName('Thomas Moser');

  return {
    props: {
      packages,
      images,
      teasers,
      quote: Quotes['pascal-zwei-wealth'],
      contact,
    },
  };
};

export default ZweiWealth;
