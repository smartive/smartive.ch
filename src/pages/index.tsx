import { BlobVariations, Copy, GridSlider, LinkList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import { Contact } from '../../components/contact';
import { CustomerLogos } from '../../components/customer-logos';
import { Page } from '../../components/layouts/page';
import { Section } from '../../components/layouts/section';
import { Testimonial } from '../../components/testimonial';
import { NextContentCard } from '../components/content-card';
import { Image, ImageVariant } from '../components/image';
import { NextImageCard } from '../components/image-card';
import { NewsletterCard } from '../components/newsletter-card';
import { PackageList } from '../compositions/package-list';
import { PageHeader } from '../compositions/page-header';
import { Employee, getEmployeeByName } from '../data/employees';
import Packages, { Package } from '../data/packages';
import { Quote } from '../data/quotes';
import Quotes from '../data/quotes.json';

const STATIC_IMAGES = {
  main: '/images/mood/Agentur-smartive-34.jpg',
  migipedia: '/images/projekte/migipedia/RGB_02_snack_001.jpg',
  frontify: '/images/projekte/frontify/210902_FRO2101_3625.jpg',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
  contact: Employee;
  quote: Quote;
  packages: Package[];
};

const Home: NextPage<Props> = ({ contact, quote, packages, images }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Wir erschaffen _digitale_ Produkte. Zusammen mit dir."
        description="Wir sind smartive — eine dynamische, innovative Schweizer Webentwicklungsagentur. Die Realisierung zeitgemässer Weblösungen gehört genauso zu unserer Passion, wie die konstruktive Zusammenarbeit mit unseren Kund*innen."
      >
        <LinkList
          linkWrapper={(props) => <NextLink legacyBehavior {...props} />}
          links={[
            { label: 'Wie machen wir das?', href: '/angebot' },
            { label: 'Projekte anschauen', href: '/projekte' },
          ]}
        />
      </PageHeader>

      <main>
        <Section>
          <div className="h-[50vw] lg:h-[800px]">
            <Image
              src={images.main}
              alt="smartive Mitarbeiter im Büro in Zürich"
              variant={ImageVariant.FillContainer}
              width={720}
              height={380}
            />
          </div>
          <GridSlider>
            <NextImageCard
              label="Projekt — Migipedia"
              title="Das ausgezeichnete Migipedia"
              link={{ label: 'Zur Migros-Community', href: '/projekte/migipedia' }}
              image={images.migipedia}
              imageAlt="Frau sitzt mit Handy am Boden"
            />
            <NextImageCard
              label="Projekt — Frontify"
              title="Ein Zuhause für Brands"
              link={{ label: 'Mehr zu Frontify und smartive', href: '/projekte/frontify' }}
              image={images.frontify}
              imageAlt="Frau mit geöffnetem Laptop"
            />
            <NextContentCard
              label="Neues vom Blog"
              title="Hoi St. Gallen 👋"
              content="Nach über 10 Jahren in Zürich sind wir nun auch in der Ostschweiz zuhause."
              background="mint"
              link={{
                label: 'Zur Pressemitteilung',
                href: 'https://smartive.ch/blog/hoi-st-gallen',
              }}
            />
          </GridSlider>
        </Section>
        <Section title="Weiter gebracht haben wir unter anderem schon">
          <div className="mt-8 lg:mt-16">
            <CustomerLogos />
          </div>
        </Section>
        <Section>
          <Testimonial quote={quote} blobs="apricot-0" />
        </Section>
        <Section title="Wir unterstützen dich, egal wie weit du schon bist.">
          <Copy>
            In welcher Phase steckt dein Projekt? Mit unserer langjährigen Expertise unterstützen wir dich von der Idee bis
            über den Go-live hinaus.
          </Copy>
          <PackageList packages={packages} />
        </Section>
        <Section>
          <NewsletterCard background="cornflower" blobs={BlobVariations.cornflower[2]} />
        </Section>
        <Section>
          <Contact contact={contact}>
            <>
              Alles unklar? <br />
              Frag {contact.firstname}.
            </>
          </Contact>
        </Section>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const packages = [Packages['design-sprint'], Packages['speedboat'], Packages['scale-up'], Packages['solution-review']];
  const images = STATIC_IMAGES;

  return {
    props: {
      images,
      packages,
      quote: Quotes['marc-frontify'],
      contact: await getEmployeeByName('Peter Manser'),
    },
  };
};

export default Home;
