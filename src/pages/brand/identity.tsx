import { Copy, Grid, Heading2, Heading3, PageHeader, PageSection } from '@smartive/guetzli';
import { NextPage } from 'next';
import React from 'react';
import { LandingPage } from '../../layouts/landing-page';

const Identity: NextPage = () => (
  <LandingPage>
    <PageHeader markdownTitle="Unsere Brand _Identity_." />

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
          <Heading3>Lust</Heading3>
          <Copy>
            Wir sind Tekkies aus Leidenschaft. Wir lieben es, uns individuell zu entwickeln und gegenseitig herauszufordern.
            Gemeinsam schaffen wir Neues, das unsere Kunden überrascht und uns stolz macht.
          </Copy>
        </div>
        <div>
          <Heading3>Freundschaft</Heading3>
          <Copy>
            Wir sind Freunde. Chefgehabe ist uns so fremd wie komplexe Hierarchien und Gärtchendenken. Herausforderungen
            werden gemeinsam angegangen, Probleme offen angesprochen und gelöst, wie unter guten Freunden. Wer Hilfe braucht,
            wird unterstützt. Wer bei uns ist, ist smartive.
          </Copy>
        </div>
        <div>
          <Heading3>Ehrgeiz</Heading3>
          <Copy>
            Unser geballtes Know-how ist unser Kapital, unser Output unsere Visitenkarte. Wir graben uns tief in
            Problemstellungen hinein und unterscheiden uns bezüglich Qualität stark vom Branchenstandard. Wir liefern –
            termingerecht und sauber.
          </Copy>
        </div>
        <div>
          <Heading3>Mut</Heading3>
          <Copy>
            Wir suchen täglich nach dem Anderen, Revolutionären und Besseren. Das braucht Sachverständnis und Mut, neue Wege
            zu beschreiten. Diesen Mut bringen wir und unsere Kunden auf.
          </Copy>
        </div>
        <div>
          <Heading3>Freiheit</Heading3>
          <Copy>
            Freiheit ist der Ursprung unserer Firma. Wir bringen uns ein und gestalten smartive aktiv. Es gibt Platz für
            verschiedene Persönlichkeiten, Interessen und Entwicklung. Dies ermöglicht uns die volle Entfaltung unseres
            Potenzials. Wir beschützen und bewahren unsere Freiheit und stellen sie über monetäre Ziele.
          </Copy>
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
