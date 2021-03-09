import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { QuoteCard } from '../components/quote-card';
import { PageHeader } from '../compositions/page-header';
import { PageSection } from '../compositions/page-section';
import { Quote } from '../data/quotes';
import Quotes from '../data/quotes.json';
import { Lead } from '../elements/lead';

type Props = {
  quoteStefanie: Quote;
};

const Angebot: NextPage<Props> = ({ quoteStefanie }) => {
  return (
    <div>
      <PageHeader
        markdownTitle="Gemeinsam zu deinem _digitalen_ Produkt."
        description="Wir beraten, konzipieren und entwickeln. Unser Markenzeichen sind massgeschneiderte digitale Produkte. Unsere Kunden reichen vom Startup bis zur grösste Arbeitgeberin der Schweiz."
      >
        <Lead>
          Wir beraten, konzipieren und entwickeln. Unser Markenzeichen sind massgeschneiderte digitale Produkte.
          <br />
          Unsere Kunden reichen vom Startup bis zur grösste Arbeitgeberin der Schweiz.
        </Lead>
        <Lead>
          Wir sind überzeugt, dass die besten Resultate gemeinsam in einem iterativen Vorgehen entstehen.
          <br />
          Was wir darunter verstehen, liest du unten. Oder du wirfst einen Blick auf die Projekte, die wir umgesetzt haben.
        </Lead>
      </PageHeader>

      <main>
        <PageSection>
          <QuoteCard quote={quoteStefanie} />
        </PageSection>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      quoteStefanie: Quotes['stefanie-abraxas'],
    },
  };
};

export default Angebot;
