import {
  BlobVariations,
  Clock,
  Copy,
  GridSlider,
  Heading2,
  Label,
  PageHeaderVariants,
  PageSection,
  UnorderedList,
} from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { Contact } from '../../components/contact';
import { NextImageCard } from '../../components/image-card';
import { Testimonial } from '../../components/testimonial';
import { PackageList } from '../../compositions/package-list';
import { PageHeader } from '../../compositions/page-header';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import Packages, { Package } from '../../data/packages';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Teaser } from '../../data/teaser';
import { Page } from '../../layouts/page';

type Props = {
  contact: Employee;
  packages: Package[];
  teasers: Teaser[];
  quote: Quote;
};

const LightningDecisionJam: NextPage<Props> = ({ contact, packages, teasers, quote }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Lightning Decision Jam"
        description="Der Lightning Decision Jam ist die schnellste Möglichkeit, damit du trotz lauter Bäumen den Wald siehst. Lightning Decision Jams sind die perfekte Workshop-Art, um grosse Probleme schnell zu lösen.‌"
        variant={PageHeaderVariants.Card}
        background={Packages.ldj.background}
        blobs={BlobVariations.cornflower[2]}
      >
        <Label className="inline-flex flex-row items-center mb-8">
          <Clock className="h-6 w-6 mr-2 inline" />1 Tag
        </Label>
        <Copy>
          Der Lightning Decision Jam ist die schnellste Möglichkeit, damit du trotz lauter Bäumen den Wald siehst. Lightning
          Decision Jams sind die perfekte Workshop-Art, um grosse Probleme schnell zu lösen.‌
        </Copy>
      </PageHeader>

      <main>
        <PageSection>
          <Heading2>Was ist ein Lightning Decision Jam?</Heading2>
          <Copy>
            Alle wollen kreative Problemlösungen und klare Entscheidungen. Wahrscheinlich auch du. Typischerweise hat aber
            genau dieses kreative und kritische Denken zur Folge, dass man sich in seinen Gedanken und Ideen verirrt und den
            Fokus verliert. Oft werden diese Workshops dann zu unstrukturierten Diskussionen. Die Lösung?{' '}
            <strong>Wir ersetzen unproduktive Diskussionen ohne Fokus durch einen klaren Prozess.</strong>
          </Copy>
          <Copy>
            Lightning Decision Jams eignen sich für alles, bei dem eine Gruppe von Menschen Entscheidungen treffen, Probleme
            lösen oder Herausforderungen diskutieren muss.
          </Copy>
          <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 bg-white-100 rounded p-8 mt-16">
            <UnorderedList
              title="Damit gehst du nach Hause"
              items={[
                'Du kennst die konkreten nächsten Schritte hin zu deiner Problemlösung.',
                'Probleme wurden nicht nur zerpflückt, sondern auch gewichtet.',
                'Entscheide wurden gemeinsam gefällt.',
                'Du hast einen guten Überblick über deine Situation gewonnen.',
              ]}
            />
            <UnorderedList
              title="Das brauchen wir von dir"
              items={[
                'Du hast einen Tag Zeit, um mit uns und deinen wichtigsten Entscheidungsträger*innen an einen Tisch zu sitzen.',
                'Du kennst dich in deinem «Problem Space» aus und kannst diesen verständlich erklären.',
              ]}
            />
          </div>
        </PageSection>
        <PageSection>
          <Testimonial background="mint" blobs={BlobVariations.mint[2]} quote={quote} />
        </PageSection>
        <PageSection>
          <Contact contact={contact}>
            Fragen zum Ablauf des Lightning Decision Jam?
            <br /> {contact.firstname} weiss Bescheid!
          </Contact>
        </PageSection>
        <PageSection>
          {teasers.length > 0 && (
            <>
              <Heading2>Diese Projekte haben einen Lightning Decision Jam genutzt:</Heading2>
              <GridSlider>
                {teasers.map((teaser) => (
                  <NextImageCard key={teaser.title} {...teaser} />
                ))}
              </GridSlider>
            </>
          )}
          <Heading2>Und damit könnte es nach deinem Lightning Decision Jam weitergehen:</Heading2>
          <PackageList packages={packages} />
        </PageSection>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const packages = [Packages['design-sprint'], Packages.speedboat, Packages.mentoring];

  return {
    props: {
      packages,
      quote: Quotes['markus-bin'],
      teasers: [],
      contact: Employees.robert,
    },
  };
};

export default LightningDecisionJam;
