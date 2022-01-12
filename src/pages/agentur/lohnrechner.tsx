import { BlobVariations, Copy, Grid, PageSection, TextBlock, TextLink } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import React, { FC } from 'react';
import { State } from 'xstate';
import { InteractiveQuiz } from '../../components/interactive-quiz';
import { Testimonial } from '../../components/testimonial';
import { PageHeader } from '../../compositions/page-header';
import TextBlocks from '../../data/benefits.json';
import { Quote, transformQuote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Page } from '../../layouts/page';
import { Context, machine } from '../../machines/salary-calculator';

type ReportProps = {
  salary: number;
};

const Report: FC<ReportProps> = ({ salary }) => (
  <>
    <TextBlock title="Franken im Jahr" number={salary * 13}>
      Anhand deiner Angaben würdest du wohl so CHF {new Intl.NumberFormat('de-CH').format(salary * 13)}.- im Jahr verdienen.
      Dazu kommen noch ein grosszügiger Bonus der abhängig davon ist, wie erfolgreich unser Jahr war. Auch Lohnerhöhungen
      verhandeln wir nicht, deshalb gibts einfach jedes Jahr CHF 175.- pro Monat dazu.
    </TextBlock>
    <Copy>Scroll doch noch ein bisschen. Dort siehst du, warum du bei uns richtig bist. 💯</Copy>
  </>
);

type PageProps = {
  quote: Quote;
};

const salaryIndex = TextBlocks.findIndex(({ title }) => title === 'Lohn & Bonus');
const textBlocks = [...TextBlocks];
textBlocks[salaryIndex] = {
  title: 'Bonus',
  content: 'Zum Lohn kommt mindestens ein Drittel des Gewinns zu gleichen Teilen allen Mitarbeitenden zugute.',
};

export const Lohnrechner: NextPage<PageProps> = ({ quote }) => {
  return (
    <Page>
      <PageHeader markdownTitle="Die Sache mit dem Lohn" description="Yolo">
        <Copy>
          Vielleicht hast du schon unseren{' '}
          <TextLink href="/blog/die-sache-mit-dem-geld-den-lohn-auf-eine-formel-bringen">Blogpost</TextLink> über unser
          Lohnsystem gelesen. Und alle unsere <TextLink href="/agentur">Benefits</TextLink> kennst du auch schon. Jetzt
          würdest du aber gerne wissen, was du bei uns verdienst. Also dann lass uns das doch ausrechnen.
        </Copy>
      </PageHeader>

      <main>
        <PageSection>
          <InteractiveQuiz machine={machine} render={(state: State<Context>) => <Report salary={state.context.salary} />} />
        </PageSection>
        <PageSection>
          <Grid cols={3}>
            {textBlocks.map(({ title, content }) => (
              <TextBlock key={title} title={title}>
                {content}
              </TextBlock>
            ))}
          </Grid>
          <Testimonial background="apricot" blobs={BlobVariations.apricot[1]} quote={quote} />
        </PageSection>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  return {
    props: {
      quote: await transformQuote(Quotes['dominique-lohn']),
    },
  };
};

export default Lohnrechner;
