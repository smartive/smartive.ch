import {
  BlobVariations,
  Clock,
  Copy,
  GridSlider,
  Heading2,
  Label,
  PageHeaderVariants,
  UnorderedList,
} from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Contact } from '../../../components/contact';
import { Page } from '../../../components/layouts/page';
import { Section } from '../../../components/layouts/section';
import { Testimonial } from '../../../components/testimonial';
import { NextImageCard } from '../../components/image-card';
import { PackageList } from '../../compositions/package-list';
import { PageHeader } from '../../compositions/page-header';
import { Employee, getEmployeeByName } from '../../data/employees';
import Packages, { Package } from '../../data/packages';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Teaser } from '../../data/teaser';

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
        <Label className="mb-8 inline-flex flex-row items-center">
          <Clock className="mr-2 inline h-6 w-6" />1 Tag
        </Label>
        <Copy>
          Der Lightning Decision Jam ist die schnellste Möglichkeit, damit du trotz lauter Bäumen den Wald siehst. Lightning
          Decision Jams sind die perfekte Workshop-Art, um grosse Probleme schnell zu lösen.‌
        </Copy>
      </PageHeader>

      <main>
        <Section>
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
          <div className="mt-16 grid grid-flow-row grid-cols-1 gap-12 rounded bg-white-100 p-8 lg:gap-20 xl:grid-cols-2">
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
        </Section>
        <Section>
          <Testimonial background="mint" blobs="mint-2" quote={quote} />
        </Section>
        <Section>
          <Contact contact={contact}>
            Fragen zum Ablauf des Lightning Decision Jam?
            <br /> {contact.firstname} weiss Bescheid!
          </Contact>
        </Section>
        <Section>
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
        </Section>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const packages = [Packages['design-sprint'], Packages.speedboat, Packages.mentoring];
  const contact = await getEmployeeByName('Robert Vogt');

  return {
    props: {
      packages,
      contact,
      quote: Quotes['markus-bin'],
      teasers: [],
    },
  };
};

export default LightningDecisionJam;
