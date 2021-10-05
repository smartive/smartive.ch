import { Copy, Explainer, PageSection, UnorderedList } from '@smartive/guetzli';
import React from 'react';

import { PageHeader } from '../../compositions/page-header';
import { Page } from '../../layouts/page';

const DotNet = () => (
  <Page>
    <PageHeader
      markdownTitle="_.NET_ kann alles und schnell"
      pageTitle="Was ist eigentlich .NET?"
      description=".NET ist die Softwareplattform von Microsoft."
    >
      <Copy>
        <Explainer title="sprich «Dot Net»; bis 2020: .NET Core">.NET</Explainer> ist die Softwareplattform von Microsoft.
        Sie hat eine lange Geschichte hinter sich und ist im Jahre 2016 in der jetzigen Form vereinheitlicht worden. Diese
        aktuelle Inkarnation ist modern, aufgeräumt, umfangreich, stabil und läuft auf Windows, Linux und macOS.
      </Copy>
    </PageHeader>

    <main>
      <PageSection title="Warum .NET?">
        <Copy>
          .NET steht unter anderem im Wettbewerb mit jüngeren Plattformen wie Node.js, ist aber vom Umfang her eher
          vergleichbar mit gut ausgebauten Plattformen wie Java. .NET ist attraktiv, da es eine breite Palette an{' '}
          <Explainer title="«Werkzeugkisten» für diverse Anwendungsfälle wie HTTP, Security, Web Server etc.">
            Frameworks
          </Explainer>{' '}
          von Haus aus mitliefert, aber gleichzeitig einfach zu handhaben ist. Dazu hat Microsoft in Performance und
          Developer Experience investiert.
        </Copy>
        <Copy as="div">
          Die Einsatzgebiete von .NET sind so breit wie die Plattform selbst:
          <UnorderedList
            items={[
              'Performance, eine aktive Community und Technik auf der Höhe der Zeit machen .NET zu einem guten Allrounder.',
              'Ein Top-Match sind APIs aller Art, ob gRPC oder REST, Shop oder Web App.',
              'Mit Razor steht eine Komponente bereit, um statische Websites auf einfache Weise mit Funktionalität anzureichern.',
            ]}
          />
        </Copy>
      </PageSection>

      <PageSection title="HTML-legende C#-Frameworksau">
        <Copy as="div">
          .NET bietet einen riesigen Umfang von Werkzeugen zur Erstellung von digitalen Produkten:
          <UnorderedList
            items={[
              'mehrere eigene Programmiersprachen, darunter C#, F# und VB.NET',
              'läuft auf Mac, Linux und Windows',
              'ähnlich umfangreich wie die Java-Plattform (Framework deckt diverse Bereiche ab)',
              'Kestrel Web Server kann Go in Sachen Geschwindigkeit das Wasser reichen',
            ]}
          />
        </Copy>
      </PageSection>
    </main>
  </Page>
);

export default DotNet;
