import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { CustomersList } from '../components/customers-list';
import { LinkList } from '../components/link-list';
import { Contact } from '../compositions/contact';
import { CardColors, ContentCard } from '../compositions/content-card';
import { ImageCard } from '../compositions/image-card';
import { MetaInfos, PageHeader } from '../compositions/page-header';
import { PageSection } from '../compositions/page-section';
import { Customer } from '../data/customers';
import Customers from '../data/customers.json';
import { Employee } from '../data/employees';
import Employees from '../data/employees.json';
import { Clock } from '../elements/icons';
import { generateMetaImage } from '../utils/meta-image-generator';

type Props = {
  contact: Employee;
  customers: Customer[];
  metaInfos: MetaInfos;
};

const Home: NextPage<Props> = ({ contact, customers, metaInfos }) => {
  return (
    <div>
      <PageHeader title={metaInfos.title} decoration={metaInfos.decoration} metaInfos={metaInfos}>
        <LinkList
          links={[
            { label: 'Wie machen wir das?', href: '/angebot' },
            { label: 'Projekte anschauen', href: '/projekte' },
          ]}
        />
      </PageHeader>

      <main>
        <PageSection>
          <Image
            className="rounded"
            src="/images/YB_06742.jpg"
            alt="Lustigi Lüüt amne Tisch"
            priority
            objectFit="cover"
            width={1504}
            height={800}
          />
          <div className="grid grid-cols-3 gap-16 mt-16">
            <ImageCard
              label="Projekt — Migipedia"
              title="Der User im Mittelpunkt – seit 10 Jahren"
              link={{ label: 'Projekt anschauen', href: '/projekte' }}
              image={{ src: '/images/RGB_02_snack_001.jpg', alt: 'Frau sitzt mit Handy am Boden' }}
            />
            <ImageCard
              label="Projekt — Migipedia"
              title="Der User im Mittelpunkt – seit 10 Jahren"
              link={{ label: 'Projekt anschauen', href: '/projekte' }}
              image={{ src: '/images/RGB_02_snack_001.jpg', alt: 'Frau sitzt mit Handy am Boden' }}
            />
            <ContentCard
              label="Software Developer 80–100%"
              title="Gestalte mit uns die digitale Zukunft der Schweiz"
              content="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum."
              link={{ label: 'Jetzt bewerben', href: '#' }}
              background={CardColors.Cornflower}
            />
          </div>
        </PageSection>
        <PageSection title="In guter Gesellschaft – von Startups bis hin zur grössten Arbeitgeberin der Schweiz.">
          <CustomersList customers={new Array(2).fill(customers).flat()} />
        </PageSection>
        <PageSection title="In welcher Phase steckt dein Projekt? Wir unterstützen dich von der Idee bis über den Golive hinaus.">
          <div className="grid grid-cols-4 gap-16">
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
          </div>
        </PageSection>
        <PageSection>
          <Contact contact={contact} />
        </PageSection>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageTitle = { title: 'Wir erschaffen digitale Produkte. Zusammen mit dir.', decoration: 'digitale' };

  return {
    props: {
      contact: Employees.marco,
      customers: Object.values(Customers),
      metaInfos: {
        ...pageTitle,
        description:
          'Wir sind smartive — eine dynamische, innovative Schweizer Webentwicklungsagentur. Die Realisierung zeitgemässer Weblösungen gehört genauso zu unserer Passion, wie die konstruktive Zusammenarbeit mit unseren Kundinnen und Kunden.',
        image: await generateMetaImage(pageTitle.title, pageTitle.decoration),
      },
    },
  };
};

export default Home;
