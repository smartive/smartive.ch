import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { Testimonial } from '../../components/testimonial';
import { Contact } from '../../compositions/contact';
import { ImageCard } from '../../compositions/image-card';
import { PageHeader } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Copy } from '../../elements/copy';
import { Heading3 } from '../../elements/heading-3';
import { Grid } from '../../layouts/grid';
import { BlobVariations } from '../../utils/blob-variations';
import { getRandomTeasers } from '../../utils/teasers';

type Props = {
  quote: Quote;
  contact: Employee;
  teasers: Teaser[];
};

const Cosmo: NextPage<Props> = ({ quote, contact, teasers }) => {
  return (
    <div>
      <PageHeader
        markdownTitle="Digitale Geschäftsprozesse als _Herzstück_."
        description="Für die Cosmopolitan Vermögensverwaltungs AG konzipierten wir ein CRM System, welches die spezifischen Geschäftsprozesse genau abbildet. Der Wunsch, die Daten von einigen Excel Files in eine ausgereifte Datenstruktur zu überführen, hat zu einer Webapplikation geführt, welche mittlerweile das Herzstück der Firma bildet - alle Daten werden zentral und einheitlich verwaltet."
      >
        <Copy>
          Für die Cosmopolitan Vermögensverwaltungs AG konzipierten wir ein CRM System, welches die spezifischen
          Geschäftsprozesse genau abbildet. Der Wunsch, die Daten von einigen Excel Files in eine ausgereifte Datenstruktur
          zu überführen, hat zu einer Webapplikation geführt, welche mittlerweile das Herzstück der Firma bildet - alle Daten
          werden zentral und einheitlich verwaltet.
        </Copy>
      </PageHeader>

      <main>
        <PageSection>
          <Grid cols={2}>
            <Image
              className="rounded bg-mint-200"
              src="/images/projekte/cosmo/austin-distel-jpHw8ndwJ_Q-unsplash.jpg"
              alt="Zwei Personen unterhalten sich auf einem Sofa über etwas am Laptop"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
            <Image
              className="rounded bg-mint-200"
              src="/images/projekte/cosmo/christian-regg-o7LDdRDIYiY-unsplash.jpg"
              alt="Gasthaus Äscher im Alpstein, Appenzell"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
          </Grid>
        </PageSection>

        <PageSection>
          <Testimonial background="cornflower" blobs={BlobVariations.cornflower[4]} quote={quote} />
        </PageSection>

        <PageSection>
          <Heading3>Digitale Transformation</Heading3>
          <Copy>
            Dank des professionellen Requirement Engineerings wurden die Bedürfnisse und Anforderungen der Benutzer von
            Anfang an in die Konzeption miteinbezogen. Das agile Vorgehen und der modulare Aufbau des CRM haben dazu
            beigetragen, das System zielgerichtet auf die Bedürfnisse des Kunden anzupassen. So kann die Applikation stetig
            weiterentwickelt und verbessert werden, zum Beispiel durch die Anbindung des E-Bankings zur Datensynchronisation.
            Dies hilft die Prozesse noch weiter zu automatisieren und zu vereinfachen.
          </Copy>
        </PageSection>

        <PageSection>
          <div>
            <Heading3>State-of-the-Art Architektur</Heading3>
            <Copy>
              Durch eine stabile Architektur ist die Skalier-, und Verfügbarkeit der Applikation gewährleistet und einfach
              erweiterbar. Zusätzliche Drittsysteme können problemlos in die Anwendung eingebunden werden.
            </Copy>
          </div>
        </PageSection>
        <PageSection>
          <Contact contact={contact} />
        </PageSection>
        <PageSection title="Weitere Erfolgsgeschichten">
          <Grid cols={3}>
            {teasers.map((teaser) => (
              <ImageCard key={teaser.title} {...teaser} />
            ))}
          </Grid>
        </PageSection>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      teasers: getRandomTeasers(3, Teasers.cosmo.title),
      quote: Quotes['stefan-cosmo'],
      contact: Employees.peter,
    },
  };
};

export default Cosmo;
