import { Copy, Explainer, Grid, TextLink, TextBlock, UnorderedList } from '@smartive/guetzli';
import React from 'react';
import { PageHeader } from '../../compositions/page-header';
import { Link } from '../../elements/link';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';

const WasIstReact = () => (
  <Page>
    <PageHeader
      markdownTitle="_React_ bringt die Inhalte auf den Bildschirm."
      pageTitle="Was ist eigentlich React?"
      description="React kümmert sich um die Darstellung interaktiver Web-Inhalte – sei es eine Website, eine App oder ein
      Videostreamingportal. Benutzerinteraktionen im Browser können zwar in reinem Javascript programmiert werden, doch bei
      komplexeren Fällen bietet sich eine Library oder ein Framework wie React an. So behalten wir die Kontrolle über jedes
      Detail in der Darstellung – ohne uns ständig um Details kümmern zu müssen."
    >
      <Copy>
        React kümmert sich um die <strong>Darstellung interaktiver Web-Inhalte</strong> – sei es eine Website, eine App oder
        ein Videostreamingportal. Benutzerinteraktionen im Browser können zwar in reinem Javascript programmiert werden, doch
        bei komplexeren Fällen bietet sich eine Library oder ein Framework wie React an. So behalten wir die Kontrolle über
        jedes Detail in der Darstellung – ohne uns ständig um Details kümmern zu müssen.
      </Copy>
    </PageHeader>

    <main>
      <Section title="React plus X">
        <Copy>
          React legt das Fundament für eine effiziente Entwicklung. Und es öffnet die Tür zu einem Dschungel von weiteren
          Libraries (wir nennen es Ökosystem), die darauf aufbauen oder sich sehr gut kombinieren lassen:
        </Copy>
        <UnorderedList
          items={[
            'Ein Widget? React.',
            'Eine ganze Website mit Server-side Rendering? React und Next.js.',
            'Eine App mit vielen möglichen Zuständen? React und XState.',
          ]}
        />
        <Grid cols={2}>
          <div className="bg-cornflower-500 rounded p-8 lg:p-12" id="typescript">
            <TextBlock title="TypeScript">
              <Copy as="span" className="inline-block">
                <TextLink href="https://www.typescriptlang.org/" newTab>
                  TypeScript
                </TextLink>{' '}
                ist der neue beste Freund von Javascript. In Javascript ist alles möglich – auch Saltos mit blutiger Nase und
                Knochenbrüchen. TypeScript beendet den Wildwuchs, indem es die Entwickler*innen zwingt, Implizites explizit
                zu machen (
                <Explainer title="Jede Datenstruktur wird definiert: «User hat ein name vom Typ string, optional ein Alter vom Typ number, …»">
                  Typisierung
                </Explainer>
                ).
              </Copy>
              <Copy as="span" className="inline-block">
                Eine definierte Datenstruktur ist wie ein zahmes Känguru: Keine Boxhiebe, aber alles im Beutel. Das gibt
                Sicherheit. Das Resultat sind weniger Bugs und eine stabile Basis, die auch grosse Projekte langfristig
                wartbar macht.
              </Copy>
            </TextBlock>
          </div>
          <div className="bg-mint-500 rounded p-8 lg:p-12" id="next">
            <TextBlock title="Next.js">
              <Copy as="span" className="inline-block">
                Mit React generieren wir Komponenten, also Teile einer Seite. Für einen ganzen Webauftritt mit vielen Seiten
                gibt es{' '}
                <TextLink href="https://nextjs.org/" newTab>
                  Next.js
                </TextLink>
                .
              </Copy>
              <Copy as="span" className="inline-block">
                Next.js ergänzt React um Cleverness auf der Server-Seite – Vorgenerierte Seiten, ad hoc generierte und nur
                bei Änderung neu generierte sind damit ein Leichtes. Auf dieser Basis lässt sich wunderbar eine Plattform wie{' '}
                <Link href="/projekte/migipedia">Migipedia</Link> mit einer Mischung aus statischen, dynamischen und
                personalisierten Inhalten bauen.
              </Copy>
              <Copy as="span" className="inline-block">
                <TextLink href="https://nextjs.org/showcase" newTab>
                  Wo Next.js überall drinsteckt
                </TextLink>
              </Copy>
            </TextBlock>
          </div>
        </Grid>
        <Grid cols={2}>
          <div className="bg-apricot-500 rounded p-8 lg:p-12" id="xstate">
            <TextBlock title="XState">
              <Copy as="span" className="inline-block">
                Viele mögliche Interaktionen bedeutet auch viele mögliche Zustände – etwa bei einem Verkaufsvorgang: Hat die
                Benutzerin schon ein Konto? Mit Adresse? Was ist im Warenkorb? In welchem Schritt ist der Bezahlvorgang?
              </Copy>
              <Copy as="span" className="inline-block">
                Hinter{' '}
                <TextLink href="https://xstate.js.org/docs/" newTab>
                  XState
                </TextLink>{' '}
                steckt ein Konzept aus der theoretischen Informatik: <strong>State Machines</strong> sind eine elegante
                Lösung, um Zustände und Abhängigkeiten zu modellieren und zugehörige Daten zu verwalten. So landen
                Benutzer*innen nicht in einer Sackgasse, sondern bewegen sich auf definierten Pfaden durch eine digitale
                Landschaft. Das schafft die Basis die für kritische Anwendungen wie z.B. ein Kassensystem.
              </Copy>
              <Copy as="span" className="inline-block">
                Robert hat auf unserem Blog ausführlich erklärt,{' '}
                <TextLink href="https://blog.smartive.ch/what-state-machines-are-and-why-we-use-them-5ea55183be09">
                  was es mit State Machines und XState genau auf sich hat
                </TextLink>
                .
              </Copy>
            </TextBlock>
          </div>
          <div className="bg-cornflower-500 rounded p-8 lg:p-12" id="tailwind">
            <TextBlock title="Tailwind">
              <Copy as="span" className="inline-block">
                An CSS kommt im Web niemand vorbei. Layout, Farben, Schriften, Spacing – kurz: Das Erscheinungsbild jeder
                Website ist in Stylesheets festgelegt.
              </Copy>
              <Copy as="span" className="inline-block">
                CSS ist mittlerweile sehr umfangreich und bietet ausufernde Möglichkeiten. Das führt natürlich zu einer
                gewissen Komplexität, was wiederum eine Suche nach dem besten Ansatz zur Folge hat, um CSS zu bändigen.
              </Copy>
              <Copy as="span" className="inline-block">
                Der beste Anwärter auf den heiligen Gral ist unseres Erachtens{' '}
                <TextLink href="https://tailwindcss.com/" newTab>
                  Tailwind
                </TextLink>
                . Die Umsetzung von Designs beschleunigt es jedenfalls erheblich.
              </Copy>
            </TextBlock>
          </div>
        </Grid>
      </Section>
    </main>
  </Page>
);

export default WasIstReact;
