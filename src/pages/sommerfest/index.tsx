import { Card, Copy, Grid, Heading2, Heading3, LinkList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Image, ImageVariant } from '../../components/image';
import { PageHeader } from '../../compositions/page-header';
import { LandingPage } from '../../layouts/landing-page';
import { Section } from '../../layouts/section';

// fill all in to activate
const NEXT = {
  year: '2024',
  date: 'Freitag, 7. Juni 2024',
  time: 'ab 17 Uhr',
  place: 'Pfingstweidstrasse 60, Zürich',
  rsvpLink: '', // TODO
};

const STATIC_IMAGES = {
  matthias: '/images/sommerfest/2023/04.jpg',
  mood: '/images/sommerfest/2023/17.jpg',
  balloons: '/images/sommerfest/2023/20.jpg',
  benj: '/images/sommerfest/2023/29.jpg',
  mauro: '/images/sommerfest/2023/54.jpg',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
};

const Page: NextPage<Props> = ({ images }) => {
  return (
    <LandingPage>
      <PageHeader markdownTitle="Sommer und smartive gibt _Sommerfest_" description="Sommer und smartive gibt Sommerfest">
        <Image
          src={images.balloons}
          alt="Eingang zum smartive Büro"
          priority
          variant={ImageVariant.FillContainer}
          width={1800}
          height={1200}
        />
      </PageHeader>

      <main>
        <Section>
          <Copy>
            Wenn die Grills zirpen, die Temperaturen blühen und aus luftigen Stoffen dunkle Brillen spriessen, ist es Zeit
            fürs Sommerfest: Kund*innen und Bekannte finden in unserer Wirkstätte zusammen und machen ihre Gaumen mit
            allerlei Feinem bekannt, während sie sich miteinander bekannt machen. Cheers!
          </Copy>
          <LinkList
            links={[
              { label: 'So fotogen war 2023 📸', href: '/sommerfest/2023' },
              { label: 'So tenyears™ war 2022 📸', href: '/10/fotos' },
            ]}
          />
        </Section>

        {Object.values(NEXT).every((value) => value) && (
          <Section>
            <Heading2>Sommerfest {NEXT.year}</Heading2>
            <Grid cols={3}>
              <Card background="mint">
                <Heading3>{NEXT.date}</Heading3>
              </Card>
              <Card background="apricot">
                <Heading3>{NEXT.time}</Heading3>
              </Card>
              <Card background="cornflower">
                <Heading3>{NEXT.place}</Heading3>
              </Card>
            </Grid>
            <Copy>
              <strong>Was dich erwartet:</strong> Genau die richtige Menge Sonne 🤞, Drinks mit Dings und ohne, vegane
              Delikatessen und nette Menschen. Ansprachen gibt&apos;s keine, aber wir freuen uns auf den Austausch mit dir,
              deinen Freunden und Kolleginnen. Einen Töggelichasten und einen Pingpongtisch haben wir auch. Und eine
              Kaffeemaschine.
            </Copy>
            <LinkList links={[{ label: 'Gleich anmelden!', href: NEXT.rsvpLink }]} />
          </Section>
        )}

        <Section>
          <Grid cols={3}>
            <div className="col-span-2">
              <Image
                src={images.mauro}
                alt="smartive Mitarbeitende und Gäste"
                variant={ImageVariant.FillContainer}
                width={1800}
                height={1200}
              />
            </div>
            <Image
              src={images.benj}
              alt="smartive Mitarbeiter zeigt Daumen hoch"
              variant={ImageVariant.FillContainer}
              width={1800}
              height={1200}
            />
          </Grid>
          <Grid cols={2}>
            <Image
              src={images.mood}
              alt="smartive Ballone"
              variant={ImageVariant.FillContainer}
              width={1800}
              height={1200}
            />
            <Image
              src={images.matthias}
              alt="smartive Mitarbeitende"
              variant={ImageVariant.FillContainer}
              width={1800}
              height={1200}
            />
          </Grid>
        </Section>
      </main>
    </LandingPage>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const images = STATIC_IMAGES;

  return {
    props: {
      images,
    },
  };
};

export default Page;
