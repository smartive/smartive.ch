import { Copy, Grid, PageSection } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { usePlausible } from 'next-plausible';
import React from 'react';
import { Contact } from '../../components/contact';
import { NextContentCard } from '../../components/content-card';
import { PageHeader } from '../../compositions/page-header';
import { Employee, transformEmployee } from '../../data/employees';
import Employees from '../../data/employees.json';
import { PlaceholderImage } from '../../elements/placeholder-image';
import { Page } from '../../layouts/page';
import { getPlaceholders, PlaceholderImages } from '../../utils/image-placeholders';
import { PlausibleEvents } from '../../utils/tracking';

const STATIC_IMAGES = {
  meeting: '/images/mood/gruppen-meeting.jpg',
  mittag: '/images/mood/mittag-draussen.jpg',
  jungle: '/images/mood/damian-anna-jungle.jpg',
} as const;

type Props = {
  images: PlaceholderImages<typeof STATIC_IMAGES>;
  contact: Employee;
};

const Jobs: NextPage<Props> = ({ contact, images }) => {
  const plausible = usePlausible<PlausibleEvents>();

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
        <PageSection>
          <Grid cols={2}>
            <div className="hidden md:block md:row-span-2 relative">
              <PlaceholderImage
                image={images.mittag}
                alt="Das smartive Team isst draussen zu Mittag"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="block md:hidden">
              <PlaceholderImage
                image={images.mittag}
                alt="Das smartive Team isst draussen zu Mittag"
                objectFit="cover"
                width={720}
                height={500}
              />
            </div>
            <PlaceholderImage
              image={images.meeting}
              alt="smartive Mitarbeitende halten ein Meeting"
              objectFit="cover"
              width={720}
              height={380}
            />
            <PlaceholderImage
              image={images.jungle}
              alt="Zwei smartive Mitarbeitende unterhalten sich und lachen"
              objectFit="cover"
              width={720}
              height={500}
            />
          </Grid>
        </PageSection>
        <PageSection>
          <Contact contact={contact}>
            <>
              Du denkst, du passt zu uns? <br />
              {contact.firstname} freut sich auf deine Nachricht.
            </>
          </Contact>
        </PageSection>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const images = await getPlaceholders(STATIC_IMAGES);

  return {
    props: {
      images,
      contact: await transformEmployee(Employees.nadia),
    },
  };
};

export default Jobs;
