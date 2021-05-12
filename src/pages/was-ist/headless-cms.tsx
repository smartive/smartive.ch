import { Copy, Explainer, PageSection } from '@smartive/guetzli';
import React from 'react';

import { PageHeader } from '../../compositions/page-header';
import { Page } from '../../layouts/page';

const HeadlessCMS = () => (
  <Page>
    <PageHeader
      markdownTitle="Inhalte einfach pflegen mit einem _Headless CMS_"
      pageTitle="Was ist eigentlich ein Headless CMS?"
    ></PageHeader>

    <main>
      <PageSection>
        <Copy>
          Ein traditionelles <Explainer title="Content Management System">CMS</Explainer> kümmert sich einerseits um die
          Verwaltung der Inhalte und andererseits um die Generierung einzelner Ansichten. Klassische Beispiele sind Wordpress
          oder <Explainer title="Adobe Experience Manager">AEM</Explainer> im Enterprise-Umfeld. Ein zeitgemässer Ansatz ist,
          Inhalt und Darstellung zu trennen. Dies nennt sich Headless CMS.
        </Copy>
        <Copy>
          Ein Headless CMS übernimmt nur die Inhaltsverwaltung – die Darstellung ist davon unabhängig. Oder um im Bild zu
          bleiben: Den sichtbaren «Kopf» setzt man selbst auf. Die Inhalte pflegst du bequem über eine benutzerfreundliche
          Oberfläche, ohne dich mit Design und Programmierung auseinandersetzen zu müssen.
        </Copy>
        <Copy>
          Headless CMS liefern Daten über eine{' '}
          <Explainer title="Application Programming Interface, Schnittstelle">API</Explainer>. Dies lässt alle Freiheiten und
          verbaut nichts: Es garantiert die nötige Flexibilität bei Daten, die auf mehreren Plattformen dargestellt werden.
          Es lässt alle Optionen offen – eine neue Plattform oder ein Relaunch greift einfach auf die bestehende API zu.
        </Copy>
      </PageSection>
    </main>
  </Page>
);

export default HeadlessCMS;
