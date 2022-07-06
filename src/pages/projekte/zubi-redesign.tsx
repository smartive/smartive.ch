import { BlobVariations, Copy, Grid, Heading2, LinkList, PageSection, TextBlock, TextLink } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
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
import { Page } from '../../layouts/page';
import { getRandomTeasers } from '../../utils/teasers';

const STATIC_IMAGES = {
  woman: '/images/projekte/zubi/zubi_woman.png',
  shop: '/images/projekte/zubi/zubi_shop.png',
  mockup: '/images/projekte/zubi/zubi_mockup.png',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
  quote: Quote;
  contact: Employee;
  teasers: Teaser[];
  packages: Package[];
};

const ZubiRedesign: NextPage<Props> = ({ quote, contact, teasers, images, packages }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="E-Commerce – Schön schnell, schön modern und _natürlich_ schön."
        description="Zubi wills wissen: Einmal ein komplettes Redesign. Backend Services in Go umgeschrieben. Das Frontend in React. Wir haben uns für Zubi um die User Experience und das (umwerfende 😌) Design des Shops auf Basis des neuen Brands gekümmert."
      >
        <Copy>
          Zubi will&apos;s wissen: Einmal ein komplettes Redesign. Backend Services in Go umgeschrieben. Das Frontend in
          React. Wir haben uns für Zubi um die User Experience und das (umwerfende 😌) Design des Shops auf Basis des neuen
          Brands gekümmert.
        </Copy>
        <LinkList links={[{ label: 'Zum neuen Shop', href: 'https://zubi.swiss/' }]} />
      </PageHeader>

      <main>
        <PageSection>
          <Grid cols={2}>
            <Image
              src={images.shop}
              alt="Die Filiale von Zubi in Herisau"
              priority
              objectFit="cover"
              width={750}
              height={500}
            />
            <Image
              src={images.woman}
              alt="Eine Frau mit einem Wanderrucksack."
              priority
              objectFit="cover"
              width={750}
              height={500}
            />
          </Grid>
        </PageSection>
        <PageSection>
          <Grid cols={2}>
            <div>
              <Heading2>Die Ausgangslage</Heading2>
              <Copy>
                Im Sommer 2021 hat sich Zubi für eine neue Markenidentität entschieden. Der Shop sollte natürlich ebenfalls
                in den neuen Farben leuchten. Diese Gelegenheit nutzten die Entwickler*innen auch gleich, um das Frontend
                technisch auf ein frisches Fundament zu stellen.
              </Copy>
              <Copy>
                Die neue Brand Identity gab vor, welche Farben, Schriften und welche Botschaft transportiert werden sollen.
                Das detaillierte digitale Interaction Design war aber noch komplett unausgearbeitet. Es existierte erst eine
                Art Design-Mood, in welche Richtung das Ganze gehen könnte.
              </Copy>
            </div>
            <div>
              <Heading2>Das Vorgehen</Heading2>
              <Copy>
                Dank unseren <TextLink href="/projekte/migipedia">Referenzen in User-Experience</TextLink> durften wir uns
                also am Design des neuen Shops austoben. Analytics-Daten, Click-Heatmaps und das Knowhow von Zubi über ihre
                Kund*innen gaben uns wichtige Hinweise, worauf wir uns konzentrieren sollten.
              </Copy>
              <Copy>
                In einem Workshop haben wir erarbeitet, welche Konzepte und Ideen vom bestehenden Shop, von
                Konkurrenten*innen oder Vorbildern übernommen werden sollten und welche nicht. Daraus entstanden ist ein Set
                von je fünf Yays, Nays und Principles, an welchem sich unsere Interaction Designer orientieren konnten.
              </Copy>
            </div>
          </Grid>
        </PageSection>

        <PageSection>
          <Image
            src={images.mockup}
            alt="Eine Macbook mit dem neuen Zubi Shop auf dem Bildschirm"
            objectFit="cover"
            width={1920}
            height={1080}
          />
        </PageSection>

        <PageSection>
          <Grid cols={2}>
            <TextBlock title="Das Resultat">
              Ein interaktiver Klick-Prototyp (in Figma) für die wichtigsten Dinge wie die Startseite, die
              Kategorienübersicht, die Produkt-Detailseite und einige mehr. Zusätzlich eine Patternlibrary, an welcher sich
              die Entwickler*innen für Seiten ohne detailliertes Design orientieren konnten. Fortlaufende Weiterentwicklung
              und Ausarbeitung von Details gemeinsam mit dem Engineering-Team während der Umsetzung.
            </TextBlock>
            <TextBlock title="Die Archtikturfrage">
              Seit März 2021 unterstützen wir das Developer-Team vom Zubi Online Shop mit regelmässigen{' '}
              <TextLink href="/angebot/mentoring">Mentoring-Treffen</TextLink>. So konnten wir bereits vor dem Projektstart
              wichtige Tipps zur Software-Architektur mit React und Golang mitgeben. Während der Umsetzung des neuen Shops
              trafen wir uns weiterhin alle zwei Wochen, um Fragen zu technischen Details zu diskutieren und unterschiedliche
              Lösungsideen gegeneinander abzuwägen.
            </TextBlock>
          </Grid>
        </PageSection>
        <PageSection>
          <Testimonial background="mint" blobs={BlobVariations.mint[2]} quote={quote} />
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
  const teasers = getRandomTeasers(3, Teasers['zubi-redesign'].title);
  const packages = [Packages['mentoring'], Packages['agile-playday']];
  const contact = await getEmployeeByName('Josh Wirth');

  return {
    props: {
      images,
      teasers,
      quote: Quotes['marco-zubi-redesign'],
      contact,
      packages,
    },
  };
};

export default ZubiRedesign;
