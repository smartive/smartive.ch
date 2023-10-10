import { Copy, LinkList } from '@smartive/guetzli';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import DOMAIN_REDIRECTS from '../../../domain-redirects';
import { Image, ImageVariant } from '../../components/image';
import { PageHeader } from '../../compositions/page-header';
import GiveawayPagesContent from '../../data/giveaway-pages.json';
import { LandingPage } from '../../layouts/landing-page';

const LABELS = {
  en: {
    blog: 'To our blogs 📚',
    angebot: 'Check out our offers 💻',
    team: 'About us',
  },
  de: {
    blog: 'In unserem Blog stöbern 📚',
    angebot: 'Schau dir unsere Angebote an 💻',
    team: 'Über uns',
  },
} as const;

type Props = {
  title: string;
  description: string;
  url: string;
  image?: string;
  language: 'de' | 'en';
};

const RedirectUrl: NextPage<Props> = ({ title, url, description, image, language }) => (
  <LandingPage lang={language}>
    <Head>
      <meta name="robots" content="noindex,nofollow" />
    </Head>
    <PageHeader markdownTitle={title} description={`Infos about the word ${url}`}>
      <Copy className="whitespace-pre-line">{description}</Copy>
      <LinkList
        links={[
          { href: '/blog', label: LABELS[language].blog },
          {
            href: '/angebot',
            label: LABELS[language].angebot,
          },
          { href: '/team', label: LABELS[language].team },
        ]}
      />
      <br />
      {image && <Image src={image} alt="" priority variant={ImageVariant.FillContainer} width={1800} height={1200} />}
    </PageHeader>
  </LandingPage>
);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: DOMAIN_REDIRECTS.map(({ key }) => ({ params: { redirectUrl: key } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const data = GiveawayPagesContent[params.redirectUrl.toString()];

  if (!data) {
    return { notFound: true };
  }

  return {
    props: data,
    revalidate: 3600,
  };
};

export default RedirectUrl;
