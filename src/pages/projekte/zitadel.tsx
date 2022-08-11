import { BlobVariations, Copy, Explainer, Grid, LinkList, Screenshot, TextBlock } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
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
  header: '/images/projekte/zitadel/header.png',
  team: '/images/projekte/zitadel/team.jpeg',
  meeting1: '/images/projekte/zitadel/meeting-1.png',
  meeting2: '/images/projekte/zitadel/meeting-2.png',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
  quote: Quote;
  contact: Employee;
  teasers: Teaser[];
};

const Zitadel: NextPage<Props> = ({ quote, contact, teasers, images }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Ein Kundenportal für die _Identity Experience Platform_"
        description="Dein eigenes IAM in weniger als einer Minute."
      >
        <Copy>
          Das Tech-Startup ZITADEL ist grad auf der Überholspur. Im umkämpften Markt der Identity und Access Management
          Systeme bietet ZITADEL Features wie Swiss Based Datahosting, B2B Multimandantenfähigkeit und Delegated Access
          Management. Das gibts weder bei Auth0, noch bei Keycloak oder sonstwo. Wir haben das neue Kundenportal für ZITADEL
          V2 umgesetzt.
        </Copy>
        <LinkList
          links={[
            { label: 'Zu ZITADEL', href: 'https://zitadel.com/' },
            { label: 'Zum Kundenportal', href: 'https://zitadel.cloud/' },
          ]}
        />
      </PageHeader>

      <main>
        <Section>
          <Image
            src={images.header}
            alt="Bügelschloss auf einer Tastatur"
            priority
            objectFit="cover"
            width={1504}
            height={800}
          />
        </Section>

        <Section>
          <Grid cols={2}>
            <TextBlock title="Was ist eigentlich ein IAM">
              Früher wurden Login-Systeme und Benutzerverwaltungen für jede Applikation individuell programmiert. Dann kamen
              die ersten <Link href="/was-ist/iam">Identity-Access-Management Systeme</Link> und haben das Leben in der
              Software-Entwicklung massiv vereinfacht. Nach vielen Jahren Durcheinander konnte sich die Welt sogar schon fast
              auf ein universelles und einheitliches Authentifizierungsprotokoll einigen. Auch wenn{' '}
              <Explainer
                title={
                  'OpenID-Connect basiert auf dem OAuth 2.0 Protokoll und ermöglicht es unterschiedlichen Systemen einheitlich Login und Benutzerinformationen auszutauschen.'
                }
              >
                OpenID Connect
              </Explainer>{' '}
              noch nicht von allen Beteiligten konsequent und richtig angewendet wird.
            </TextBlock>
            <TextBlock title="Das Projekt">
              In den letzten Jahren konnte das Team hinter ZITADEL einige Erfolge feiern. Wie immer in der Software-Welt war
              es irgendwann Zeit für eine Generalüberholung. Das neue Konzept sah vor, dass komplett getrennte, eigenständige
              IAM-Instanzen pro Kund*in erstellt werden sollten. Das Team bei ZITADEL hat das neue IAM-System und eine
              System-API zur Verwaltung dieser Instanzen programmiert. Wir haben uns währenddessen ums Kundenportal zur
              Verwaltung dieser Instanzen und Zahlungsinformationen gekümmert.
            </TextBlock>
          </Grid>
        </Section>
        <Section>
          <Grid cols={2}>
            <Image
              src={images.meeting1}
              alt="Sitzungszimmer bei einem Workshop"
              priority
              objectFit="cover"
              width={1504}
              height={847}
            />
            <Image
              src={images.meeting2}
              alt="Glasfenster mit Postits"
              priority
              objectFit="cover"
              width={1504}
              height={847}
            />
          </Grid>
        </Section>

        <Section>
          <Grid cols={2}>
            <TextBlock title="Die Herausforderung">
              Ein Kundenportal zur Verwaltung eines Systems entwickeln, während sich das zu verwaltende System ebenfalls noch
              im Bau befindet. Die vielen Umsysteme in der richtigen Reihenfolge zusammenhängen.
            </TextBlock>
            <TextBlock title="Die komplexe Systemwelt">
              Wenn du bei ZITADEL deine IAM-Instanz erstellst, passiert im Hintergrund einiges. Ein Mailjet-Account, ein
              Stripe-Konto, die Instanz natürlich, ein Admin-User in dieser Instanz, ein Zertifikat bei Google Cloud für
              deine Domain und noch mehr.
            </TextBlock>
            <TextBlock title="Das Publikum">
              Ein reibungsloser Onboardingprozess als höchstes Ziel. Software-Engineers als Zielpersona: Ein schwer zu
              befriedigendes Publikum. Wenns nicht flutscht, probieren die einfach das nächste Produkt.
            </TextBlock>
            <TextBlock title="Unsere Lösung">
              Components First! Wir haben erstmal mit einem Designsystem gestartet. Sind die einzelnen Bausteine visuell
              vorhanden, ist es nachher einfacher, eine einheitliche und funktinierende Oberfläche zu gestalten. Danach haben
              wir ein Umsystem nach dem anderen angehängt, in engem Austausch mit dem Team bei ZITADEL, das gleichzeitig die
              von uns benötigte ZITADEL-System-API aus dem Boden gestampft hat.
            </TextBlock>
          </Grid>
        </Section>

        <Section>
          <Testimonial background="cornflower" quote={quote} />
        </Section>

        <Section title="Huhn-Ei">
          <TextBlock title="">
            Eine Verwaltungsplattform für Benutzerverwaltungen braucht auch eine eigene Benutzerverwaltung. Klar oder? Wer
            soll denn sonst die Benutzer*innen für die Benutzerverwaltungsverwaltungsplattform verwalten?! Das klingt zwar
            nach einem schlechten Witz. Ist aber gar nicht so einfach zu lösen und hat während Projektbesprechungen immer mal
            wieder für verwirrte Blicke und lustige Situationen gesorgt.
          </TextBlock>
        </Section>

        <Section title="Unter der Haube">
          <Grid cols={3}>
            <TextBlock title="Technology">
              Die Plattform haben wir mit <Link href="/was-ist/react#next">Next.js</Link> und Tailwind umgesetzt. Für die
              Komponentenlibrary kam Storybook zum Einsatz.
            </TextBlock>
            <TextBlock title="API(s)">
              Viele Umsysteme, viele APIs. Wir haben gRPC-, REST- und GraphQL-Schnittstellen angebunden.
            </TextBlock>
            <TextBlock title="Deployment">
              Mit Github Actions und Terraform auf die Google Cloud Serverlesss Infrastruktur.
            </TextBlock>
          </Grid>
          <Image
            src={images.team}
            caption="Das Team hinter ZITADEL."
            alt="Das Team hinter ZITADEL"
            priority
            objectFit="cover"
            width={1504}
            height={800}
          />
        </Section>

        <Section>
          <Contact contact={contact}>
            Wenn {contact.firstname} gerade keine Benutzerverwaltungs-Verwaltungen verwaltet, bespricht er gern dein Projekt
            mit dir.
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
  const teasers = getRandomTeasers(3, Teasers['learnfox'].title);
  const contact = await getEmployeeByName('Josh Wirth');

  return {
    props: {
      images,
      teasers,
      quote: Quotes['fabienne-zitadel'],
      contact,
    },
  };
};

export default Zitadel;
