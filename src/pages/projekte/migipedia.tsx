import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { QuoteCard } from '../../components/quote-card';
import { Contact } from '../../compositions/contact';
import { ContentCard } from '../../compositions/content-card';
import { ImageCard } from '../../compositions/image-card';
import { PageHeader } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import { TextBlock } from '../../compositions/text-block';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import Packages, { Package } from '../../data/packages';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Copy } from '../../elements/copy';
import { Clock } from '../../elements/icons';
import { Grid } from '../../layouts/grid';

type Props = {
  quoteStefanie: Quote;
  contact: Employee;
  packages: Package[];
};

const Migipedia: NextPage<Props> = ({ quoteStefanie, contact, packages }) => {
  return (
    <div>
      <PageHeader
        markdownTitle="Migipedia – _10 Jahre_ User im Mittelpunkt."
        description="Migipedia.ch ist seit 10 Jahren fester Bestandteil des digitalen Marketings der Migros und schafft Werte für Kundinnen und Kunden sowie fürs Unternehmen. Gemeinsam mit der Migros entwickelten wir eine komplett neue Lösung. Mit Erfolg: Die Community ist heute so lebendig wie nie zuvor."
        awardTags={['Best of Swiss Web 2021', 'Best of Swiss Web 2020']}
      >
        <Copy>
          Migipedia.ch ist seit 10 Jahren fester Bestandteil des digitalen Marketings der Migros und schafft Werte für
          Kundinnen und Kunden sowie fürs Unternehmen. Gemeinsam mit der Migros entwickelten wir eine komplett neue Lösung.
          Mit Erfolg: Die Community ist heute so lebendig wie nie zuvor.
        </Copy>
      </PageHeader>

      <main>
        <PageSection>
          <Grid cols={2}>
            <Image
              className="rounded"
              src="/images/RGB_02_snack_001.jpg"
              alt="Lustigi Lüüt amne Tisch"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
            <Image
              className="rounded"
              src="/images/RGB_02_snack_001.jpg"
              alt="Lustigi Lüüt amne Tisch"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
            <div className="col-span-2">
              <Image
                className="rounded"
                src="/images/mood/YB_06742.jpg"
                alt="Lustigi Lüüt amne Tisch"
                priority
                objectFit="cover"
                width={1504}
                height={800}
              />
            </div>
          </Grid>
          <Grid cols={2}>
            <div className="col-span-2">
              <TextBlock
                title="Dynamisch und statisch: Endlich beste Freunde"
                link={{ label: 'Weiterführender Link', href: '' }}
              >
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </TextBlock>
            </div>
            <TextBlock title="Steigerung von Maximierungen">
              Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nulla
              vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            </TextBlock>
            <TextBlock
              title="Agile Development, agile Design, ah geil Agile"
              link={{ label: 'Weiterführender Link', href: '' }}
            >
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
              risus. Vestibulum id ligula porta felis euismod semper.
            </TextBlock>
          </Grid>
          <QuoteCard quote={quoteStefanie} />
        </PageSection>
        <PageSection title="Mit welchen Tools haben wir Migipedia geholfen?">
          <Grid cols={4}>
            {packages.map(({ label, ...paeckli }) => (
              <ContentCard
                {...paeckli}
                key={paeckli.title}
                label={
                  <>
                    <Clock className="h-4 w-4 mr-2 inline" />
                    {label}
                  </>
                }
              />
            ))}
          </Grid>
        </PageSection>
        <PageSection>
          <Contact contact={contact} />
        </PageSection>
        <PageSection title="Weitere Erfolgsgeschichten">
          <Grid cols={3}>
            <ImageCard
              label="KIG, Gesundheitsamt Sankt Gallen"
              title="Web statt App – plane deine Freizeit mit Spilo."
              link={{ label: 'Projekt anschauen', href: '/projekte/migipedia' }}
              image={{ src: '/images/RGB_02_snack_001.jpg', alt: 'Frau sitzt mit Handy am Boden' }}
            />
            <ImageCard
              label="KIG, Gesundheitsamt Sankt Gallen"
              title="Web statt App – plane deine Freizeit mit Spilo."
              link={{ label: 'Projekt anschauen', href: '/projekte/migipedia' }}
              image={{ src: '/images/RGB_02_snack_001.jpg', alt: 'Frau sitzt mit Handy am Boden' }}
            />
            <ImageCard
              label="Cosmopolitan"
              title="Massgeschneidertes CRM"
              link={{ label: 'Projekt anschauen', href: '/projekte/migipedia' }}
              image={{ src: '/images/RGB_02_snack_001.jpg', alt: 'Frau sitzt mit Handy am Boden' }}
            />
          </Grid>
        </PageSection>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const packages = [Packages['ideation-sprint'], Packages['speedboat'], Packages['scale-up'], Packages['solution-review']];

  return {
    props: {
      packages,
      quoteStefanie: Quotes['stefanie-abraxas'],
      contact: Employees.thomas,
    },
  };
};

export default Migipedia;
