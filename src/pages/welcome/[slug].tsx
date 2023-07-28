import { Copy, Grid, GridSlider, Heading2, Heading3, LinkList } from '@smartive/guetzli';
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { NextContentCard } from '../../components/content-card';
import { Image, ImageVariant } from '../../components/image';
import { PageHeader } from '../../compositions/page-header';
import { getAllFullEmployees, getFullEmployeeByMail } from '../../data/employees';
import { Link } from '../../elements/link';
import { LandingPage } from '../../layouts/landing-page';
import { Section } from '../../layouts/section';

const Welcome: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ images, employee }) => {
  const description = `Hoi ${
    employee?.firstname ?? 'du'
  } – schön bisch da 🤗. Da wir Bäume 🌳 eigentlich ganz gut mögen, haben wir dir kein 500-Seiten-Dossier ausgedruckt und auf deinen neuen Arbeitsplatz gelegt, sondern stellen dir alles was du brauchst digital zur Verfügung.`;

  return (
    <LandingPage>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <PageHeader markdownTitle={`Smart Move™ ${employee ? ` ${employee.firstname}!` : ''}`} description={description}>
        <Copy>{description}</Copy>
        <LinkList links={[{ label: 'Google Account einrichten', href: `https://accounts.google.com/signin` }]} />
      </PageHeader>

      <Section>
        <Grid cols={2}>
          <Image
            src={images.first.src}
            alt={images.first.alt}
            variant={ImageVariant.FillContainer}
            width={720}
            height={380}
          />
          <div className="md:block md:col-start-2 md:row-span-2 relative">
            <Image
              src={images.large.src}
              alt={images.large.alt}
              variant={ImageVariant.FillContainer}
              width={1440}
              height={1000}
            />
          </div>
          <Image
            src={images.second.src}
            alt={images.second.alt}
            variant={ImageVariant.FillContainer}
            width={720}
            height={500}
          />
        </Grid>
      </Section>

      <Section>
        <Heading2>Deine ersten, digitalen Schritte</Heading2>
        <Copy>
          Slack hast du wahrscheinlich schon. Aber es sieht noch nicht so nach smartive aus. Schau doch mal auf unserer{' '}
          <Link href="/brand">Brandseite</Link> vorbei um dir dein Slack Theme zu ergattern. Und wenn du schon mal da bist,
          lies dir die Sachen doch rasch durch. 😇
        </Copy>
        <Heading3>Love Thy Neighbor</Heading3>
        <Copy>
          Erster Tag. So. viele. Namen. 😩 Unsere <Link href="/team">Teamseite</Link> schafft Abhilfe. Da findest du alle
          smarties mit Foto und ein paar kurzweiligen Facts.
        </Copy>
        <Copy>
          Zu wissen wie die Leute heissen ist sicher schon mal ein guter Schritt. Aber du fragst dich vielleicht an wen du
          dich wenden kannst, wenn du Fragen zum Thema{' '}
          <Link href="https://smarties.app/roles/smartive-and-beer" newTab>
            Bier 🍻
          </Link>{' '}
          hast (ja, wirklich…). Oder wie genau dieses{' '}
          <Link href="https://smarties.app/roles/scrum-master" newTab>
            Scrum
          </Link>{' '}
          denn funktioniert. Diese Infos findest du auf der{' '}
          <Link href="https://smarties.app/roles" newTab>
            Rollen
          </Link>{' '}
          Seite in der smarties.app .
        </Copy>

        <Heading3>Du willst auch auf die Teamseite?</Heading3>
        <Copy>
          Unbedingt! Sprich doch kurz mit den{' '}
          <Link href="https://smarties.app/roles/webmaster" newTab>
            Webmaster
          </Link>
          . Sie zeigen dir wo und wie du dein Profil erfassen musst, damit du auf der Webseite auftauchst.
        </Copy>
      </Section>
      <Section>
        <Heading2>Du brauchst noch mehr Infos?</Heading2>
        <GridSlider>
          <NextContentCard
            background="apricot"
            label="Notion 🏠"
            title="Das Zuhause aller unserer Infos"
            content="Alles was du sonst noch benötigen könntest, findest du in Notion. Wir helfen dir aber natürlich auch so gerne weiter. Trau dich zu fragen. 😊"
            link={{ label: 'Zu Notion', href: 'https://www.notion.so/smartive/smartive-2162e1ba518e410db64cfe86bd600d2b' }}
          />
          <NextContentCard
            background="mint"
            label="smarties 🍬"
            title="Unsere eigene, kleine App"
            content="In der smarties.app findest du alles andere und mehr. Von der Übersicht über deine Zeiten, über unsere Rollen bis zu einem Fifa Matchmaking Generator. ⚽️"
            link={{ label: 'Zur smarties App', href: 'https://smarties.app' }}
          />
          <NextContentCard
            background="cornflower"
            label="Zahlen 🧮"
            title="Zeiterfassung"
            content="In Harvest kannst du deine Zeiten erfassen. Auch für die Planung von Projekten brauchen wir Harvest."
            link={{ label: 'Zu Harvest', href: 'https://smartive.harvestapp.com/' }}
          />
          {employee?.todosUrl && (
            <NextContentCard
              background="apricot"
              label="Todos 🎒"
              title="Dein persönliches Todo-Board"
              content="Auf Notion findest du dein persönliches Todo-Board. Dort kannst du deine Aufgaben erfassen und verwalten. Auch die Aufgaben für dein Onboarding findest du dort."
              link={{ label: 'Zum Todo-Board', href: employee.todosUrl }}
            />
          )}
        </GridSlider>
      </Section>
    </LandingPage>
  );
};

const slugifyMail = (email: string) => email.split('@')[0].replaceAll('.', '-');
const unslugifyMail = (slug: string) => `${slug.replaceAll('-', '.')}@smartive.ch`;

export const getStaticPaths: GetStaticPaths = async () => {
  const employees = await getAllFullEmployees();

  return {
    paths: employees.map(({ email }) => ({ params: { slug: slugifyMail(email) } })),
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const images = [SKI_TAG, OFFICE, BOAT, CONFERENCE, CODE_RETREATS, STATIC_IMAGES][Math.floor(Math.random() * 6)];

  if (!params?.slug) {
    return { props: { images, employee: null } };
  }
  const employee = await getFullEmployeeByMail(unslugifyMail(params.slug.toString()));

  try {
    return {
      props: {
        images,
        employee,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
      revalidate: 300,
    };
  }
};

export default Welcome;

const STATIC_IMAGES = {
  first: { src: '/images/mood/boat/1.jpg', alt: 'smartive Team auf einem Weidling (Boot) auf dem Rhein' },
  second: {
    src: '/images/mood/code-retreat-pool.jpg',
    alt: 'Drei smartive Mitarbeitende mit Bier im Pool bei der Aussicht über das Verzascatal',
  },
  large: { src: '/images/mood/aescher-gruppenbild.jpg', alt: 'smartive Team vor dem aescher' },
};

const CODE_RETREATS = {
  first: {
    src: '/images/mood/code-retreat-pool.jpg',
    alt: 'Drei smartive Mitarbeitende mit Bier im Pool bei der Aussicht über das Verzascatal',
  },
  second: { src: '/images/mood/code-retreat/4.png', alt: 'Peter und Mirco haben angst vor der Drohne' },
  large: {
    src: '/images/mood/code-retreat/3.jpg',
    alt: 'smartive Team an einem Vortrag über Linguistik von einem smartive Mitarbeiter',
  },
};

const SKI_TAG = {
  first: { src: '/images/mood/ski/1.jpg', alt: 'smartive Team beim Apres Ski in Arosa' },
  large: { src: '/images/mood/ski/3.jpeg', alt: 'smartive Team beim Shötlis beim Skifahren in Arosa' },
  second: { src: '/images/mood/ski/6.jpeg', alt: 'smartive Team beim Selfie beim Skifahren in Davos' },
};

const CONFERENCE = {
  first: { src: '/images/mood/conference/1.jpg', alt: 'Selfie von smartive Mitarbeitenden an der Awwwards conference' },
  large: {
    src: '/images/mood/conference/3.jpeg',
    alt: 'Awwwards conference in Amsterdam Team Foto',
  },
  second: {
    src: '/images/mood/conference/2.jpeg',
    alt: 'smartive Mitarbeitende an der Awwwards conference in Amsterdam in einem Restaurant',
  },
};

const BOAT = {
  first: { src: '/images/mood/boat/beer.jpg', alt: 'zwei smartive Mitarbeitende auf einem Weidling (Boot) auf dem Rhein' },
  large: { src: '/images/mood/boat/4.jpg', alt: 'smartive Team auf einem Weidling (Boot) auf dem Rhein' },
  second: { src: '/images/mood/boat/1.jpg', alt: 'smartive Team auf einem Weidling (Boot) auf dem Rhein' },
};

const OFFICE = {
  first: { src: '/images/mood/office/1.jpg', alt: 'zwei smartive Mitarbeitende am Bier trinken auf der Büro Terrasse' },
  large: {
    src: '/images/mood/office/3.jpg',
    alt: 'vier smartive Mitarbeitende schauen auf ein Whiteboard während einer davon etwas darauf schreibt',
  },
  second: { src: '/images/mood/office/2.jpg', alt: 'smartive Team in der Sitzlounge lachend' },
};
