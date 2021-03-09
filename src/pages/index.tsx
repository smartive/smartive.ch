import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { CustomersList } from '../components/customers-list';
import { QuoteCard } from '../components/quote-card';
import { Contact } from '../compositions/contact';
import { CardColors, ContentCard } from '../compositions/content-card';
import { ImageCard } from '../compositions/image-card';
import { LinkList } from '../compositions/link-list';
import { PageHeader } from '../compositions/page-header';
import { PageSection } from '../compositions/page-section';
import { Customer } from '../data/customers';
import Customers from '../data/customers.json';
import { Employee } from '../data/employees';
import Employees from '../data/employees.json';
import { Quote } from '../data/quotes';
import Quotes from '../data/quotes.json';
import { Clock } from '../elements/icons';
import { Lead } from '../elements/lead';
import { GridSlider } from '../layouts/grid-slider';

type Props = {
  contact: Employee;
  customers: Customer[];
  quote: Quote;
};

const Home: NextPage<Props> = ({ contact, customers, quote }) => {
  return (
    <div>
      <PageHeader
        markdownTitle="Wir erschaffen _digitale_ Produkte. Zusammen mit dir."
        description="Wir sind smartive — eine dynamische, innovative Schweizer Webentwicklungsagentur. Die Realisierung zeitgemässer Weblösungen gehört genauso zu unserer Passion, wie die konstruktive Zusammenarbeit mit unseren Kundinnen und Kunden."
      >
        <LinkList
          links={[
            { label: 'Wie machen wir das?', href: '/angebot' },
            { label: 'Projekte anschauen', href: '/projekte/migipedia' },
          ]}
        />
      </PageHeader>

      <main>
        <PageSection>
          <Image
            className="rounded"
            src="/images/YB_06742.jpg"
            alt="smartive Team beim Mittagessen an einem Holztisch"
            priority
            objectFit="cover"
            width={1504}
            height={800}
          />
          <GridSlider>
            <ImageCard
              label="Projekt — Migipedia"
              title="Der User im Mittelpunkt – seit 10 Jahren"
              link={{ label: 'Projekt anschauen', href: '/projekte/migipedia' }}
              image={{ src: '/images/RGB_02_snack_001.jpg', alt: 'Frau sitzt mit Handy am Boden' }}
            />
            <ImageCard
              label="Projekt — Migipedia"
              title="Der User im Mittelpunkt – seit 10 Jahren"
              link={{ label: 'Projekt anschauen', href: '/projekte/migipedia' }}
              image={{ src: '/images/RGB_02_snack_001.jpg', alt: 'Frau sitzt mit Handy am Boden' }}
            />
            <ContentCard
              label="Migipedia"
              title="Migipedia auf der Best of Swiss Web Shortlist!"
              content="Seit 10 Jahren stehen für Migipedia die User im Mittelpunk. Nun steht Migipedia auf der Shortlist der Best of Swiss Web Awards 2021."
              link={{ label: 'Zur Shortlist', href: '#' }}
              background={CardColors.Apricot}
            />
          </GridSlider>
        </PageSection>
        <PageSection title="Weiter gebracht haben wir unter anderem schon">
          <CustomersList customers={new Array(2).fill(customers).flat()} />
        </PageSection>
        <PageSection>
          <QuoteCard quote={quote} />
        </PageSection>
        <PageSection title="Wir unterstützen dich, egal wie weit du schon bist.">
          <Lead>
            In welcher Phase steckt dein Projekt? Mit unserer langjährigen Expertise unterstützen wir dich von der Idee bis
            über den Golive hinaus.
          </Lead>
          <GridSlider>
            <ContentCard
              label={
                <>
                  <Clock className="h-4 w-4 mr-2 inline" />
                  2–5 Tage
                </>
              }
              title="Ideation Sprint"
              content="Gewinn ein besseres Verständnis für die Bedürfnisse deiner Nutzer und zieh daraus praktikable Ideen. Erhalte einen ersten visuellen Prototypen und hol Feedback deiner Kunden ein."
              link={{ label: 'Wie geht das?', href: '#' }}
              background={CardColors.Cornflower}
            />
            <ContentCard
              label={
                <>
                  <Clock className="h-4 w-4 mr-2 inline" />4 Wochen
                </>
              }
              title="Speedboat"
              content="Lancier in kurzer Zeit dein MVP (Minimum Viable Product) und teste anhand messbarer Ziele, wie dein Produkt ankommt."
              link={{ label: 'Zeig mir mehr!', href: '#' }}
              background={CardColors.Apricot}
            />
            <ContentCard
              label={
                <>
                  <Clock className="h-4 w-4 mr-2 inline" />
                  2–3 Monate
                </>
              }
              title="Scale Up"
              content="Bau dein MVP entlang der messbaren Ziele aus und erweitere den Umfang deines Produkts."
              link={{ label: 'Wie genau?', href: '#' }}
              background={CardColors.Mint}
            />
            <ContentCard
              label={
                <>
                  <Clock className="h-4 w-4 mr-2 inline" />
                  2–5 Tage
                </>
              }
              title="Solution Review"
              content="Erhalte eine objektive Einschätzung der Chancen und Risiken deines digitalen Produkts sowie einen klaren Massnahmenplan, was du verbessern kannst."
              link={{ label: 'Weitere Informationen', href: '#' }}
              background={CardColors.Cornflower}
            />
          </GridSlider>
        </PageSection>
        <PageSection>
          <Contact contact={contact} />
        </PageSection>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      contact: Employees.marco,
      customers: Object.values(Customers),
      quote: Quotes['setareh-dife'],
    },
  };
};

export default Home;
