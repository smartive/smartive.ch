import { BlobVariations, Copy, Grid, LinkList, PageSection, TextBlock, TextLink } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Contact } from '../../components/contact';
import { Image, ImageVariant } from '../../components/image';
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
import { Page } from '../../layouts/page';
import { getRandomTeasers } from '../../utils/teasers';

const STATIC_IMAGES = {
  fireplace: '/images/projekte/zubi/zubi_lagerfeuer.png',
  benj: '/images/projekte/zubi/zubi_benj.png',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
  quote: Quote;
  contact: Employee;
  teasers: Teaser[];
  packages: Package[];
};

const ZubiMentoring: NextPage<Props> = ({ quote, contact, teasers, images, packages }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Zubi schnürt die _Schuhe_ mit smartive."
        description="Zubi ist ein führendes Schuh- und Outdoorgeschäft aus der Ostschweiz. Das Familienunternehmen wird in dritter Generation geführt und legt gossen Wert auf persönliche und kompetente Beratung. Seit März 2021 unterstützen wir das Entwicklungsteam vom Zubi Online Shop mit regelmässigen Mentoring-Treffen"
      >
        <Copy>
          Zubi ist ein führendes Schuh- und Outdoorgeschäft aus der Ostschweiz. Das Familienunternehmen wird in dritter
          Generation geführt und legt gossen Wert auf persönliche und kompetente Beratung. Seit März 2021 unterstützen wir
          das E-Commerce-Team vom Zubi Online Shop mit regelmässigen{' '}
          <TextLink href="/angebot/mentoring">Mentoring-Treffen</TextLink>.
        </Copy>
        <LinkList links={[{ label: 'Zum Onlineshop', href: 'https://zubi.swiss/' }]} />
      </PageHeader>

      <main>
        <PageSection>
          <Grid cols={2}>
            <Image
              src={images.fireplace}
              alt="Eine Frau an einer Feuerstelle."
              priority
              variant={ImageVariant.FillContainer}
              width={828}
              height={551}
            />
            <Image
              src={images.benj}
              alt="Ein junger Mann mit Outdoorbekleidung"
              priority
              variant={ImageVariant.FillContainer}
              width={828}
              height={551}
            />
          </Grid>
        </PageSection>
        <PageSection>
          <Grid cols={2}>
            <TextBlock title="Die Herausforderung">
              Onlinehandel wird immer wichtiger. Zubi entwickelt den hauseigenen Online Shop mit dem internen
              Software-Entwicklungsteam. Mit steigenden Besuchszahlen wachsen auch die Anforderungen an die Software – und
              die möglichen Lösungswege. Welche in den Wald und welche auf den Berg führen, ist keine triviale Frage.
              <br /> Also hat sich Zubi an smartive gewandt, um die möglichen Wege zusammen zu erkunden: Gibt es
              Optimierungspotenzial bei der vorhandenen Software-Architektur? Welche Ansätze und Ideen ziehen, welche nicht?
              Diskussionen mit erfahrenen Experten führt zu besseren Entscheidungen als querfeldein losrennen. Und das
              interne Knowhow wird dabei nachhaltig erweitert.
            </TextBlock>
            <TextBlock title="Unsere Lösung">
              Bei wöchentlichen <TextLink href="/angebot/mentoring">Mentoring-Meetings</TextLink> haben wir uns über die
              Infrastruktur und den Betrieb mit <TextLink href="/was-ist/kubernetes">Kubernetes</TextLink> ausgetauscht.
              Später haben wir im Zweiwochen-Rhythmus über Alternativen zu PHP, Repository Strukturierung, Best Practices mit
              Golang und viele weitere Details diskutiert. <br /> Bei Fragen, die eine ausführlichere Antwort benötigen,
              ziehen wir unsere unsere Spezialist*innen für User Experience, DevOps oder Software-Entwicklung hinzu. Bei
              Bedarf organisieren wir Workshops (wie den <TextLink href="/angebot/agile-playday">Agile-Playday</TextLink>)
              mit dem ganzen E-Commerce-Team.
            </TextBlock>
          </Grid>
        </PageSection>
        <PageSection>
          <Testimonial background="mint" blobs={BlobVariations.mint[2]} quote={quote} />
        </PageSection>
        <PageSection>
          <Grid cols={3}>
            <TextBlock title="PHP oder Golang">
              Die in PHP geschriebenen Backend-Microservices brauchten viel Rechenpower, um performant zu laufen. Mit der
              Umstellung auf Golang konnte der Machine-Overhead um ein Vielfaches reduziert werden.
            </TextBlock>
            <TextBlock title="Nginx oder Ambassador">
              Dank integriertem TLS Support hat die Umstellung auf den Envoy basierten Ambassador API-Gateway die
              Infrastrukturkomplexität deutlich reduziert.
            </TextBlock>
            <TextBlock title="React oder Angular">
              Der bestehende Shop ist in Angular programmiert. Für den nächsten Relaunch setzt Zubi auf{' '}
              <TextLink href="/was-ist/react">React</TextLink>. Das ist aus unserer Sicht eindeutig die zukunftsfähigere
              Technologiewahl.
            </TextBlock>
          </Grid>
        </PageSection>
        <PageSection>
          <Contact contact={contact}>
            {contact.firstname} unterstützt Zubi bis heute. <br />
            Er hat einen Kalender, eine Mailadresse und ein Telefon. Deine Chance!
          </Contact>
        </PageSection>

        <PageSection title="Du willst mehr wissen? Das haben wir mit Zubi gemacht:">
          <PackageList packages={packages} />
        </PageSection>
        <PageSection title="Weitere Erfolgsgeschichten">
          <Grid cols={3}>
            {teasers.map((teaser) => (
              <NextImageCard key={teaser.title} {...teaser} />
            ))}
          </Grid>
        </PageSection>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const images = STATIC_IMAGES;
  const teasers = getRandomTeasers(3, Teasers['zubi-mentoring'].title);
  const packages = [Packages['mentoring'], Packages['agile-playday']];
  const contact = await getEmployeeByName('Josh Wirth');

  return {
    props: {
      images,
      teasers,
      quote: Quotes['niklas-zubi'],
      contact,
      packages,
    },
  };
};

export default ZubiMentoring;
