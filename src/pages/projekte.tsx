import { GetStaticProps, NextPage } from 'next';
import { CustomersList } from '../components/customers-list';
import { QuoteCard } from '../components/quote-card';
import { Contact } from '../compositions/contact';
import { ImageCard, ImageCardVariants, Props as ImageCardProps } from '../compositions/image-card';
import { MetaInfos, PageHeader } from '../compositions/page-header';
import { PageSection } from '../compositions/page-section';
import { Customer } from '../data/customers';
import Customers from '../data/customers.json';
import { Employee } from '../data/employees';
import Employees from '../data/employees.json';
import { Quote } from '../data/quotes';
import Quotes from '../data/quotes.json';
import { Copy } from '../elements/copy';
import { generateMetaImage } from '../utils/meta-image-generator';

const imageCard: ImageCardProps = {
  label: 'Projekt — Migipedia',
  title: 'Der User im Mittelpunkt – seit 10 Jahren',
  link: { label: 'Projekt anschauen', href: '/projekte' },
  image: { src: '/images/RGB_02_snack_001.jpg', alt: 'Frau sitzt mit Handy am Boden' },
};

const bigImageCards: ImageCardProps[] = [
  {
    ...imageCard,
    variant: ImageCardVariants.BIG,
    awardTags: ['Best of Swiss Web 2021'],
  },
  {
    ...imageCard,
    variant: ImageCardVariants.BIG,
    awardTags: ['Best of Swiss Web 2021', 'Best of Swiss Web 2020'],
  },
];

type Props = {
  customers: Customer[];
  quoteStefanie: Quote;
  contact: Employee;
  metaInfos: MetaInfos;
};

const Projekte: NextPage<Props> = ({ customers, quoteStefanie, contact, metaInfos }) => {
  return (
    <div>
      <PageHeader title="Donec id elit non mi porta gravida at eget metus." decoration="eget" metaInfos={metaInfos}>
        <Copy>
          Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </Copy>
      </PageHeader>

      <main>
        <PageSection>
          <CustomersList customers={new Array(2).fill(customers).flat()} />
          <div className="grid grid-cols-2 gap-16 mt-16">
            {bigImageCards.map(({ label, title, link, image, variant, awardTags }) => (
              <ImageCard label={label} title={title} link={link} image={image} variant={variant} awardTags={awardTags} />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-16 mt-16">
            {new Array(3).fill(imageCard).map(({ label, title, link, image }) => (
              <ImageCard label={label} title={title} link={link} image={image} />
            ))}
          </div>
          <QuoteCard className="mt-16" quote={quoteStefanie} />
          <div className="grid grid-cols-3 gap-16 mt-16">
            {new Array(5).fill(imageCard).map(({ label, title, link, image }) => (
              <ImageCard label={label} title={title} link={link} image={image} />
            ))}
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
  return {
    props: {
      customers: Object.values(Customers),
      quoteStefanie: Quotes['stefanie-abraxas'],
      contact: Employees.peter,
      metaInfos: {
        image: await generateMetaImage('Yay kuuli Projekt!', 'kuuli'),
      },
    },
  };
};

export default Projekte;
