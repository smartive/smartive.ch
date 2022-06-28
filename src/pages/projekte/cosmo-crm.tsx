import { BlobVariations, Copy, Grid, LinkList, Screenshot, TextBlock, UnorderedList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Contact } from '../../components/contact';
import { NextImageCard } from '../../components/image-card';
import { Testimonial } from '../../components/testimonial';
import { PageHeader } from '../../compositions/page-header';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';
import { getRandomTeasers } from '../../utils/teasers';

type Props = {
  quote: Quote;
  contact: Employee;
  teasers: Teaser[];
};

const Cosmo: NextPage<Props> = ({ quote, contact, teasers }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Digitale Geschäftsprozesse als _Herzstück_."
        description="Für die Cosmopolitan Vermögensverwaltungs AG konzipierten wir ein CRM System, welches die spezifischen Geschäftsprozesse genau abbildet. Der Wunsch, die Daten von einigen Excel Files in eine ausgereifte Datenstruktur zu überführen, hat zu einer Webapplikation geführt, welche mittlerweile das Herzstück der Firma bildet - alle Daten werden zentral und einheitlich verwaltet."
      >
        <Copy>
          Digitalisierung im Herzen. Aber was heisst das? Für Cosmopolitan bedeutet es ein CRM, das sich genau auf ihre
          Arbeitsweise anpasst – und nicht umgekehrt. Intelligente Abläufe für die Datenerfassung, automatisierte Reportings
          für die schnelle Auswertung von Anlagen, ein simples Warnsystem für auffällige Daten und noch vieles mehr.
        </Copy>
        <LinkList links={[{ label: 'Zur Website', href: 'https://www.cosmopolitan.ch/de/' }]} />
      </PageHeader>

      <main>
        <Section>
          <Grid cols={2}>
            <div>
              <Screenshot
                image={{ url: '/images/projekte/cosmo/screenshot.png', originalHeight: 790, originalWidth: 1334 }}
              />
            </div>
            <UnorderedList
              title="Kurz &amp; knackig"
              items={[
                'Ein massgeschneidertes, fachspezifisches CRM',
                'Alle wichtigen Geschäftsprozesse und Anlagestrategien sind digital abgebildet',
                'Entscheidende KPIs werden sichtbar, so z.B. das Investitionsvolumen pro Strategie',
                'Automatisierte Datenprüfung und Compliance Checks',
                'Warnsystem bei schlechter Datenqualität',
              ]}
            />
          </Grid>
        </Section>

        <Section>
          <Grid cols={2}>
            <TextBlock title="Die Herausforderung">
              Die Cosmopolitan Vermögensverwaltungs AG verwaltet nicht nur Vermögen, sondern auch eine Unmenge von Daten.
              Diese sollen zentral abgelegt werden, um die Pflege zu vereinfachen und Prozesse automatisieren zu können.
              Leider gibt es kein Standard-Produkt, welches den Anforderungen entspricht. Ideal ist also ein{' '}
              <abbr className="cursor-help" title="Customer Relationship Management Software">
                CRM
              </abbr>
              , das die Geschäftsprozesse von Cosmopolitan perfekt widerspigelt.
            </TextBlock>
            <TextBlock title="Unsere Lösung">
              Das zentrale CRM trägt zur Steigerung der Datenqualität bei – automatisierte Reportings und Prozesse werden
              plötzlich möglich. Wir haben die Anforderungen mittels Requirements Engineering minutiös aufgenommen und den
              Kunden in den iterativen Prozess eingebunden. So haben wir eine Software-Lösung erschaffen, die sich den
              Business-Anforderungen anpasst–und nicht umgekehrt.
              <br />
              Wir betreiben die Lösung seit fast 10 Jahren stabil und zuverlässig. Wenn sich die Business Anforderungen
              anpassen, folgen bald auch die Anpassungen an der Software.
            </TextBlock>
          </Grid>
        </Section>

        <Section>
          <Testimonial background="cornflower" blobs={BlobVariations.cornflower[4]} quote={quote} />
        </Section>

        <Section>
          <TextBlock title="Durchstarten mit Cosmopolitan 🚀">
            Cosmpolitan hat nun ein intuitives, performantes und übersichtliches CRM. Und nicht nur das: Es ist auch perfekt
            auf ihre Prozesse abgestimmt. Mit intelligenten Flows stellt unser System eine fehlerfreie und schnelle Erfassung
            von Daten sicher. Die automatisierten Reportings sparen dem Team von Comspolitan enorm viel Recherchearbeit.
          </TextBlock>
        </Section>

        <Section>
          <Contact contact={contact} />
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
  const teasers = getRandomTeasers(3, Teasers.cosmo.title);
  return {
    props: {
      teasers,
      quote: Quotes['stefan-cosmo'],
      contact: Employees.peter,
    },
  };
};

export default Cosmo;
