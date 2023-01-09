import { BlobVariations, BrandColor, Copy, GridSlider, LinkList } from '@smartive/guetzli';
import NextLink from 'next/link';
import { Contact } from '../components/contact';
import { NextContentCard } from '../components/content-card';
import { CustomerList } from '../components/customer-list';
import { Image, ImageVariant } from '../components/image';
import { NextImageCard } from '../components/image-card';
import { NewsletterCard } from '../components/newsletter-card';
import { Testimonial } from '../components/testimonial';
import { Employee } from '../data/employees';
import { Section } from '../layouts/section';
import { PageBody, PageBodyPage_Header } from '../types/generated/prismic';
import { PageHeader } from './page-header';

type Props = {
  header: PageBodyPage_Header;
  blocks: PageBody[];
};

export const PrismicPage = ({ header, blocks }: Props) => {
  const description =
    header.primary.intro[0].text ||
    'Wir sind smartive — eine dynamische, innovative Schweizer Webentwicklungsagentur. Die Realisierung zeitgemässer Weblösungen gehört genauso zu unserer Passion, wie die konstruktive Zusammenarbeit mit unseren Kund*innen.';
  return (
    <>
      <PageHeader markdownTitle={header.primary.title} description={description}>
        {header.fields && (
          <LinkList
            linkWrapper={(props) => <NextLink legacyBehavior {...props} />}
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
};
