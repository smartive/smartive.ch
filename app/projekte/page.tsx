import { Metadata } from 'next';
import { Contact } from '../../components/contact';
import { CustomerLogos } from '../../components/customer-logos';
import { Grid } from '../../components/layouts/grid';
import { GridSlider } from '../../components/layouts/grid-slider';
import { Page } from '../../components/layouts/page';
import { Section } from '../../components/layouts/section';
import { Heading1, Paragraph, Serif } from '../../components/nodes';
import { ProjectCard } from '../../components/project-card';
import { Testimonial } from '../../components/testimonial';
import { MainProjectsDocument, OtherProjectsDocument } from '../../graphql/generated';
import { getEmployeeByName } from '../../src/data/employees';
import Quotes from '../../src/data/quotes.json';
import { queryDatoCMS } from '../../utils/query-dato-cms';

export const metadata: Metadata = {
  title: 'Von der Idee bis zum Go-live. — smartive',
  description:
    'Webapps, APIs und DevOps, für Grossunternehmen und Start-ups: Seit 2012 haben wir Brandneues auf die Beine gestellt, bestehende Lösungen analysiert und Projekte über viele Jahre begleitet und weiterentwickelt. Immer agil, massgeschneidert und mit Leidenschaft. Und wiederholt ausgezeichnet.',
};

export default async function ProjectPage() {
  const contact = await getEmployeeByName('Josh Wirth');
  const mainProjects = await queryDatoCMS(MainProjectsDocument);
  const otherProjects = await queryDatoCMS(OtherProjectsDocument);

  return (
    <Page>
      <header className="my-12 lg:my-48">
        <Heading1>
          Von der <Serif>Idee</Serif> bis zum Go-live.
        </Heading1>
        <Paragraph>
          Webapps, APIs und DevOps, für Grossunternehmen und Start-ups: Seit 2012 haben wir Brandneues auf die Beine
          gestellt, bestehende Lösungen analysiert und Projekte über viele Jahre begleitet und weiterentwickelt. Immer agil,
          massgeschneidert und mit Leidenschaft. Und wiederholt ausgezeichnet.
        </Paragraph>
      </header>
      <main>
        <Section>
          <CustomerLogos />
          <Grid cols={2}>
            {mainProjects.allProjects.map(({ id, slug, title, headline, teaserImage }) => (
              <ProjectCard key={id} slug={slug} title={title} headline={headline} image={teaserImage.responsiveImage} />
            ))}
          </Grid>
          <GridSlider>
            {otherProjects.allProjects.slice(0, 3).map(({ id, slug, title, headline, teaserImage }) => (
              <ProjectCard key={id} slug={slug} title={title} headline={headline} image={teaserImage.responsiveImage} />
            ))}
          </GridSlider>
          <Testimonial quote={Quotes['setareh-dife']} background="apricot" blobs="apricot-1" />
          <Grid cols={3}>
            {otherProjects.allProjects
              .slice(3, otherProjects.allProjects.length)
              .map(({ id, slug, title, headline, teaserImage }) => (
                <ProjectCard key={id} slug={slug} title={title} headline={headline} image={teaserImage.responsiveImage} />
              ))}
          </Grid>
        </Section>
        <Section>
          <Contact contact={contact}>
            <>
              Du hast eine Idee? <br />
              Besprich sie mit {contact.firstname}!
            </>
          </Contact>
        </Section>
      </main>
    </Page>
  );
}
