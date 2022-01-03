import { Copy, Explainer, Grid, PageSection, TextBlock, UnorderedList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { NextImageCard } from '../../components/image-card';
import { PageHeader } from '../../compositions/page-header';
import { Teaser, transformTeaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Page } from '../../layouts/page';

type Props = {
  teasers: Teaser[];
};

const PWA: NextPage<Props> = ({ teasers }) => (
  <Page>
    <PageHeader
      markdownTitle="PWA: Das Beste von _Web und App_"
      pageTitle="Was ist eigentlich eine PWA?"
      description="Aufgebaut ist eine PWA wie eine Website (mit HTML, CSS und Javascript), sie fühlt sich aber an wie eine App – inklusive Zugriff auf die Smartphone-Kamera oder Peripheriegeräte."
    >
      <Copy>
        In <strong>Progressive Web App</strong> ist Web und App drin, und noch ein bisschen mehr: Aufgebaut ist eine PWA wie
        eine Website (mit HTML, CSS und Javascript), sie fühlt sich aber an wie eine App – inklusive Zugriff auf die
        Smartphone-Kamera oder Peripheriegeräte.
      </Copy>
    </PageHeader>

    <main>
      <PageSection title="Die Vorgeschichte">
        <Copy>
          Apps gibt es schon lange. Früher nannte man sie einfach Programme. Sie wurden auf dem eigenen Computer installiert
          und dann gestartet. Websites waren ein anderes Paar Schuhe – die Interaktivität beschränkte sich auf einfache
          Aktionen.
        </Copy>
        <Copy>
          Seit da ist einiges passiert: Einerseits ist das Web heute stets verfügbar; andererseits sind Web-Technologien in
          viele Bereiche vorgedrungen, die früher{' '}
          <Explainer title="direkt auf dem Betriebssystem laufende Apps, im Gegensatz zu solchen, die auf eine Zwischenschicht angewisen sind, wie sie Browser bereitstellen">
            nativen Apps
          </Explainer>{' '}
          vorbehalten waren – Twitter im Browser und die Twitter-App auf dem Smartphone bieten Ähnliches an Funktionen und
          Nutzererlebnis.
        </Copy>
      </PageSection>

      <PageSection title="Web-Technologien können das auch!">
        <Copy>
          Die Unterschiede zwischen Apps, die nativ laufen und solchen, die im Browser laufen, wurden zunehmend verwischt. Es
          fehlt nur noch wenig, um eine Web App zu einer nativen App zu machen. Hier kommt der Teil ins Spiel, für den
          «progressive» steht.
        </Copy>
        <Copy>
          Als Ergänzung zur Basisfunktionalität einer Web App stellt eine PWA eine «Ausbaustufe» bereit. Aus dem Browser
          heraus kann die PWA – ohne den Umweg über einen App Store – auf dem Gerät installiert werden und verhält sich dann{' '}
          <Explainer title="Streng genommen läuft sie immer noch im Browser, aber davon kriegen die Nutzer*innen nichts mit.">
            wie eine App
          </Explainer>
          .
        </Copy>
        <Copy>
          Kurz: <strong>PWA steht für einen massiven Ausbau der Möglichkeiten von Web-Technologien.</strong> Insbesondere
          Google und Microsoft sind bemüht, Schnittstellen, die nativen Apps vorbehalten waren, auch für Web Apps
          bereitzustellen. Das umfasst unter anderem:
        </Copy>
        <UnorderedList
          items={[
            'Benutzung eingebauter Hardware wie Kamera und Sensoren',
            'Push-Funktionalität (Notifications)',
            'Ansprechen von Peripheriegeräten (z.B. Drucker)',
            'Offline-Nutzung',
          ]}
        />
      </PageSection>

      <PageSection title="Deine Vorteile">
        <Grid cols={3}>
          <TextBlock title="Abhängigkeiten vermeiden">
            Die Lösung basiert auf offenen Standards – So minimierst du die Gefahr, dir Altlasten aufzubürden.
          </TextBlock>
          <TextBlock title="Läuft überall">
            PWAs laufen auf allen Plattformen: Android, iOS, Windows, macOS, Linux – mit einer einzigen Codebasis.
          </TextBlock>
          <TextBlock title="Deploy to update">
            Updates werden auf deiner Seite ausgespielt – Deine Benutzer*innen müssen nichts tun. Ein Deploy-Button ersetzt
            App Store Policies.
          </TextBlock>
        </Grid>
      </PageSection>

      <PageSection title="Mit heruntergelassenen Hosen">
        <Copy>
          Leider sind PWAs nicht durchwegs das Gelbe vom Ei. Es gibt einen grossen Nachteil im Vergleich zu nativen Apps.
          Dieser Nachteil heisst Apple. Nicht das Obst, die Firma. Apple wehrt sich vehement gegen die Etablierung von PWAs.
          Dies hat zur Folge, dass z.B. Push Notifications auf iPhones nicht funktionieren. Oder lokal Gespeichertes alle
          paar Wochen komplett gelöscht wird. Dessen sind wir uns bewusst. Wir setzen aber darauf, dass Apple in Zukunft
          nicht umhinkommt, mit diesen offenen Standards mitzuziehen.
        </Copy>
      </PageSection>

      <PageSection title="Unsere Erfahrung">
        <Copy>Wir haben schon mehrere Projekte als PWAs umgesetzt, unter anderem:</Copy>
        <Grid cols={2}>
          {teasers.map((teaser) => (
            <NextImageCard key={teaser.title} {...teaser} />
          ))}
        </Grid>
      </PageSection>
    </main>
  </Page>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const teasers = await Promise.all(
    [Teasers.subsidia, Teasers['supply-chain']].map(async (teaser) => await transformTeaser(teaser))
  );
  return {
    props: {
      teasers,
    },
  };
};

export default PWA;
