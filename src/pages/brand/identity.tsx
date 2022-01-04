import { Copy, Grid, Heading2, Heading3, PageSection } from '@smartive/guetzli';
import { NextPage } from 'next';
import React from 'react';
import { PageHeader } from '../../compositions/page-header';
import { LandingPage } from '../../layouts/landing-page';

const Identity: NextPage = () => (
  <LandingPage>
    <PageHeader markdownTitle="Unsere Brand _Identity_." description="Die Markenidentität von smartive." />

    <PageSection>
      <Heading2>Vision</Heading2>
      <Copy>Wir sind die gefragtesten Tekkies für webbasierte Herausforderungen in der Deutschschweiz.</Copy>
    </PageSection>
    <PageSection>
      <Heading2>Mission</Heading2>
      <Copy>
        smartive ist der Ort, wo wir in Freundschaft und Freiheit webbasierte Lösungen entwickeln, die unsere Kunden
        weiterbringen und uns stolz machen.
      </Copy>
    </PageSection>
    <PageSection>
      <Heading2>Kompetenz</Heading2>
      <Copy>
        „Smarties“ sind geradlinige Spezialisten für webbasierte Herausforderungen. Wir analysieren, beraten, konzipieren und
        entwickeln. Egal ob Webapps, APIs oder DevOps – als echte Tekkies sind wir direkte und unkomplizierte
        Ansprechpartner, wenn es um massgeschneiderte digitale Produkte geht. Wir legen uns für Grossunternehmen genau so ins
        Zeug wie für Start-ups – Hauptsache, wir werden gefordert!
      </Copy>
    </PageSection>
    <PageSection>
      <Heading2>Werte</Heading2>
      <Grid cols={3}>
        <div>
          <Copy>Uns ist das Wohlbefinden der Mitarbeitenden wichtiger als Profit.</Copy>
        </div>
        <div>
          <Copy>Wir vertrauen uns, weil alle nach der besten Lösung streben.</Copy>
        </div>
        <div>
          <Copy>Wir lernen stetig Neues und fragen uns laufend, wie wir unsere Arbeit noch besser machen können.</Copy>
        </div>
        <div>
          <Copy>Wir fragen aktiv um Rat und nehmen uns Zeit, weiterzuhelfen.</Copy>
        </div>
        <div>
          <Copy>Wir geben allen die Freiheit, sich zu entfalten und fördern individuelle Fähigkeiten.</Copy>
        </div>
      </Grid>
    </PageSection>
    <PageSection>
      <Heading2>Persönlichkeit</Heading2>
      <Grid cols={3}>
        <div>
          <Heading3>Laut</Heading3>
          <Copy>
            Wir sind stolz auf gemeinsam Erreichtes und tun dies auch kund, ohne überheblich zu wirken. Unser spürbar
            gesundes und ansteckendes Selbstvertrauen basiert auf unserem Können.
          </Copy>
        </div>
        <div>
          <Heading3>Locker</Heading3>
          <Copy>
            Unsere gelebte Freiheit und unser freundschaftlicher Umgang verleihen uns Lockerheit. Unsere Verspieltheit
            bekommt man schon zu spüren, bevor man uns das erste Mal trifft.
          </Copy>
        </div>
        <div>
          <Heading3>Sauber</Heading3>
          <Copy>
            Wir arbeiten schlicht und sauber. Dieser hohe Qualitätsanspruch widerspiegelt sich nicht nur in unserer Arbeit,
            sondern auch in unserem Auftritt.
          </Copy>
        </div>
      </Grid>
    </PageSection>
    <PageSection>
      <Heading2>Herkunft</Heading2>
      <Copy>
        Zwei Arbeitskollegen gründen ihr eigenes Unternehmen und schaffen einen Ort, an dem in Freundschaft und Freiheit so
        gearbeitet werden kann, wie sie es für ideal halten. Dass dem auch heute noch so ist, beweisen Beteiligungsstruktur,
        Mitspracherecht und ein sorgfältiger Umgang im Team. Eine Herkunft, die auch in Zukunft den Unterschied machen wird.
      </Copy>
    </PageSection>
  </LandingPage>
);

export default Identity;
