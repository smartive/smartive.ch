import { Copy, Grid } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Contact } from '../components/contact';
import { Image, ImageVariant } from '../components/image';
import { PageHeader } from '../compositions/page-header';
import { Employee, getEmployeeByName } from '../data/employees';

import { Page } from '../layouts/page';
import { Section } from '../layouts/section';

const STATIC_IMAGES = {
  meeting: '/images/mood/gruppen-meeting.jpg',
  mittag: '/images/mood/mittag-draussen.jpg',
  jungle: '/images/mood/damian-anna-jungle.jpg',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
  contact: Employee;
};

const Jobs: NextPage<Props> = ({ contact, images }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Werde Teil der _smartive_ Kultur"
        description="Du suchst einen Ort, an dem du dein volles Potenzial entfalten kannst? Du möchtest dich aktiv an einer lebendigen
          Firmenkultur beteiligen und mitbestimmen? Dann bist du bei uns an der richtigen Adresse."
      >
        <Copy>
          Du suchst einen Ort, an dem du dein volles Potenzial entfalten kannst? Du möchtest dich aktiv an einer lebendigen
          Firmenkultur beteiligen und mitbestimmen? Dann bist du bei uns an der richtigen Adresse. Zusammen schaffen wir
          einen Ort, an dem alle ihre Ideen und Wünsche einbringen können. Hierarchien haben bei uns keinen Platz.
          Freundschaft, Leidenschaft und Expertise dafür umso mehr.
        </Copy>
      </PageHeader>

      <main>
        <Section>
          <Grid cols={2}>
            <div className="hidden md:block md:row-span-2 relative">
              <Image
                src={images.mittag}
                alt="Das smartive Team isst draussen zu Mittag"
                variant={ImageVariant.FillContainer}
                width={1440}
                height={1000}
              />
            </div>
            <div className="block md:hidden">
              <Image
                src={images.mittag}
                alt="Das smartive Team isst draussen zu Mittag"
                variant={ImageVariant.FillContainer}
                width={720}
                height={500}
              />
            </div>
            <Image
              src={images.meeting}
              alt="smartive Mitarbeitende halten ein Meeting"
              variant={ImageVariant.FillContainer}
              width={720}
              height={380}
            />
            <Image
              src={images.jungle}
              alt="Zwei smartive Mitarbeitende unterhalten sich und lachen"
              variant={ImageVariant.FillContainer}
              width={720}
              height={500}
            />
          </Grid>
        </Section>
        <Section>
          <Contact contact={contact}>
            <>
              Du denkst, du passt zu uns? <br />
              {contact.firstname} freut sich auf deine Nachricht.
            </>
          </Contact>
        </Section>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const images = STATIC_IMAGES;
  const contact = await getEmployeeByName('Robert Vogt');

  return {
    props: {
      images,
      contact,
    },
  };
};

export default Jobs;
