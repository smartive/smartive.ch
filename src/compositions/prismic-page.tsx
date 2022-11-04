import { BlobVariations, BrandColor } from '@smartive/guetzli';
import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import { Image, ImageVariant } from '../components/image';
import { Employee } from '../data/employees';
import { Section } from '../layouts/section';
import { PageBody, PageBodyPage_Header } from '../types/generated/prismic';
import { PageHeader } from './page-header';

const LinkList = dynamic(() => import('@smartive/guetzli').then((module) => module.LinkList), { ssr: true });
const GridSlider = dynamic(() => import('@smartive/guetzli').then((module) => module.GridSlider), { ssr: true });
const Copy = dynamic(() => import('@smartive/guetzli').then((module) => module.Copy), { ssr: true });
const Testimonial = dynamic(() => import('../components/testimonial').then((module) => module.Testimonial), {
  ssr: true,
});
const CustomerList = dynamic(() => import('../components/customer-list').then((module) => module.CustomerList), {
  ssr: true,
});
const NewsletterCard = dynamic(() => import('../components/newsletter-card').then((module) => module.NewsletterCard), {
  ssr: true,
});
const Contact = dynamic(() => import('../components/contact').then((module) => module.Contact), {
  ssr: true,
});
const NextImageCard = dynamic(() => import('../components/image-card').then((module) => module.NextImageCard), {
  ssr: true,
});
const NextContentCard = dynamic(() => import('../components/content-card').then((module) => module.NextContentCard), {
  ssr: true,
});

type Props = {
  header: PageBodyPage_Header;
  blocks: PageBody[];
};

export const PrismicPage = ({ header, blocks }: Props) => (
  <>
    <PageHeader markdownTitle={header.primary.title} description={header.primary.intro?.text}>
      {header.fields && (
        <LinkList
          linkWrapper={(props) => <NextLink {...props} />}
          links={header.fields.map(({ link, linklabel }) => ({ label: linklabel, href: link }))}
        />
      )}
    </PageHeader>
    <main>
      {blocks.map((block, index) => {
        switch (block.__typename) {
          case 'PageBodyHero_image':
            return (
              <Section key={index}>
                <Image
                  src={block.primary.image.url}
                  alt={block.primary.image.alt}
                  priority
                  variant={ImageVariant.FillContainer}
                  width={block.primary.image.dimensions.width}
                  height={block.primary.image.dimensions.height}
                />
              </Section>
            );
          case 'PageBodyCards':
            return (
              <Section key={index} title={block.primary.title}>
                {block.primary.description && <Copy>{block.primary.description}</Copy>}
                <GridSlider>
                  {block.fields.map(({ background, description, image, label, link, linklabel, title }, index) =>
                    image ? (
                      <NextImageCard
                        key={index}
                        label={label}
                        title={title}
                        link={{ label: linklabel, href: link }}
                        image={image.url}
                        imageAlt={image.alt}
                      />
                    ) : (
                      <NextContentCard
                        key={index}
                        label={label}
                        title={title}
                        content={description}
                        background={background as BrandColor}
                        link={{
                          label: linklabel,
                          href: link,
                        }}
                      />
                    )
                  )}
                </GridSlider>
              </Section>
            );
          case 'PageBodyTestimonial':
            return (
              <Section key={index}>
                <Testimonial
                  quote={{ credit: block.primary.credit, portrait: block.primary.portrait.url, text: block.primary.quote }}
                  blobs={BlobVariations.apricot[0]}
                />
              </Section>
            );
          case 'PageBodyContact':
            return (
              <Section key={index}>
                <Contact
                  contact={
                    {
                      firstname: block.primary.portrait.alt,
                      lastname: '',
                      portrait: block.primary.portrait.url,
                      tel: block.primary.phone,
                      email: block.primary.email,
                    } as Employee
                  }
                >
                  {block.primary.text}
                </Contact>
              </Section>
            );
          case 'PageBodyCustomer_logos':
            return (
              <Section key={index} title={block.primary.title}>
                <CustomerList customers={block.fields.map(({ logo }) => ({ name: logo.alt, logo: logo.url }))} />
              </Section>
            );
          case 'PageBodyNewsletter':
            return (
              <Section key={index}>
                <NewsletterCard background="cornflower" blobs={BlobVariations.cornflower[2]} title={block.primary.title} />
              </Section>
            );
          default:
            return null;
        }
      })}
    </main>
  </>
);
