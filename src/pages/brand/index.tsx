import {
  Blob,
  BlobVariations,
  BrandColor,
  Copy,
  Decoration,
  Grid,
  Heading1,
  Heading2,
  Heading3,
  LinkList,
  Logo,
  mapColorToBG,
  mapColorToLightBG,
  TextLink,
} from '@smartive/guetzli';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { FC } from 'react';
import { Section } from '../../../components/layouts/section';
import { SlackTheme } from '../../components/slack-theme';
import { PageHeader } from '../../compositions/page-header';
import { LandingPage } from '../../layouts/landing-page';

const Brand: FC = () => (
  <LandingPage>
    <PageHeader
      markdownTitle="Eine kleine _Guideline_ für unseren Brand."
      description="Die Brand Identity trägt unsere Werte und Persönlichkeit nach aussen. Sie besteht nebst unserem Namen und dem
        individuellen Auftreten aus dem visuellen Erscheinungsbild und dem sprachlichen Auftritt."
    >
      <LinkList
        linkWrapper={(props) => <NextLink legacyBehavior {...props} />}
        links={[
          { label: 'Sprachliche Guidelines', href: 'brand/sprache' },
          { label: 'Schreibtipps für Blogposts', href: 'brand/schreibtipps' },
          { label: 'Die Brand Identity', href: 'brand/identity' },
        ]}
      />
    </PageHeader>

    <Section>
      <Copy>
        Die Brand Identity trägt unsere Werte und Persönlichkeit nach aussen. Sie besteht nebst unserem Namen und dem
        individuellen Auftreten aus dem visuellen Erscheinungsbild und dem sprachlichen Auftritt. Sie widerspiegelt unsere
        Persönlichkeit:
      </Copy>
      <Grid cols={3}>
        <div>
          <Heading2>Laut</Heading2>
          <Copy>
            Wir sind stolz auf gemeinsam Erreichtes und tun dies auch kund, ohne überheblich zu wirken. Unser spürbar
            gesundes und ansteckendes Selbstvertrauen basiert auf unserem Können.
          </Copy>
        </div>
        <div>
          <Heading2>Locker</Heading2>
          <Copy>
            Unsere gelebte Freiheit und unser freundschaftlicher Umgang verleihen uns Lockerheit. Unsere Verspieltheit
            bekommt man schon zu spüren, bevor man uns das erste Mal trifft.
          </Copy>
        </div>
        <div>
          <Heading2>Sauber</Heading2>
          <Copy>
            Wir arbeiten schlicht und sauber. Dieser hohe Qualitätsanspruch widerspiegelt sich nicht nur in unserer Arbeit,
            sondern auch in unserem Auftritt.
          </Copy>
        </div>
      </Grid>
    </Section>

    <Section>
      <Heading2 id="logo">Logo</Heading2>
      <Copy>
        Die Visual Identity arbeitet stark mit Farben und Mustern. Das Logo ist schlicht gehalten. Auf schwarzem Hintergrund
        kommt eine weisse Version zum Einsatz.
      </Copy>
      <Copy className="space-x-8">
        <a
          href="images/brand/smartive.svg"
          className="border-b-4 border-apricot-500 font-bold no-underline hover:border-black"
          download="smartive.svg"
        >
          Download SVG
        </a>
        <a
          href="images/brand/smartive.png"
          className="border-b-4 border-mint-500 font-bold no-underline hover:border-black"
          download
        >
          Download PNG
        </a>
        <a
          href="images/brand/smartive-print.zip"
          className="border-b-4 border-cornflower-500 font-bold no-underline hover:border-black"
          download
        >
          Download Print.zip
        </a>
      </Copy>
      <div className="mt-8 grid grid-cols-2 grid-rows-3 overflow-hidden rounded sm:grid-rows-2">
        <div className="col-span-2 grid h-48 place-items-center bg-white-100 sm:col-span-1 sm:h-72 lg:h-96">
          <Logo className="h-8 w-auto lg:h-16" />
        </div>
        <div className="col-span-2 grid place-items-center bg-black sm:col-span-1">
          <Logo inverted className="h-8 w-auto lg:h-16" />
        </div>
        <div className="text-white relative col-span-2 grid place-items-center overflow-hidden bg-apricot-500">
          {BlobVariations.apricot[2].map(({ positionX, positionY, color }, i) => (
            <Blob key={i} positionX={positionX} positionY={positionY} color={color} />
          ))}
          <Logo className="z-10 h-8 w-auto sm:h-12 lg:h-24" />
        </div>
      </div>
    </Section>

    <Section>
      <Heading2 id="colors">Farben</Heading2>
      <Copy>
        Es gibt keine Hauptfarbe – unsere Visual Identity lebt von der Kombination aus Apricot, Mint und Cornflower. Vollgas
        Schwarz lieber vermeiden und stattdessen Darkness ☠️ verwenden.
      </Copy>
      <Heading3>Slack Theme</Heading3>
      <div className="mb-8 flex flex-col items-center gap-2 sm:flex-row">
        <SlackTheme />
      </div>
      <ul className="grid gap-8 xl:grid-cols-2">
        <ColorBox
          color="apricot"
          name="Apricot"
          values={[
            { label: 'RGB', content: '248, 147, 90' },
            { label: 'CMYK', content: '0/45/65/0' },
            { label: 'Pantone', content: '1565 C' },
            { label: 'HEX', content: '#F8935A' },
          ]}
        />
        <ColorBox
          color="mint"
          name="Mint"
          values={[
            { label: 'RGB', content: '125, 221, 209' },
            { label: 'CMYK', content: '40/0/25/0' },
            { label: 'Pantone', content: '7471 C' },
            { label: 'HEX', content: '#7DDDD1' },
          ]}
        />
        <ColorBox
          color="cornflower"
          name="Cornflower"
          values={[
            { label: 'RGB', content: '105, 134, 232' },
            { label: 'CMYK', content: '0/45/65/0' },
            { label: 'Pantone', content: '2130 C' },
            { label: 'HEX', content: '#6986E8' },
          ]}
        />
        <ColorBox
          color="gray"
          name="Grau"
          values={[
            { label: 'RGB', content: '248, 247, 245' },
            { label: 'CMYK', content: '0/0/2/5' },
            { label: 'Pantone', content: 'Cool Gray 1 C' },
            { label: 'HEX', content: '#F8F7F5' },
          ]}
        />
        <ColorBox
          color="darkness"
          name="Darkness"
          values={[
            { label: 'RGB', content: '37, 37, 37' },
            { label: 'CMYK', content: '30/30/30/90' },
            { label: 'Pantone', content: 'Black 7 C' },
            { label: 'HEX', content: '#252525' },
          ]}
        />
      </ul>
    </Section>

    <Section>
      <Heading2 id="typography">Typografie</Heading2>
      <Copy>Nicht jede Headline braucht eine Auszeichnung.</Copy>
      <Copy as="div">
        <LinkList
          links={[
            { label: 'Inter auf Google Fonts', href: 'https://fonts.google.com/specimen/Inter' },
            { label: 'IBM Plex Serif auf Google Fonts', href: 'https://fonts.google.com/specimen/IBM+Plex+Serif' },
          ]}
        />
      </Copy>
      <div className="grid grid-rows-2 overflow-hidden rounded">
        <div className="bg-white-100 p-8 lg:p-16">
          <Heading1 as="p">
            Wir schreiben Headlines in Inter Semi Bold und <Decoration>Auszeichnungen</Decoration> mit IBM Plex Serif kursiv.
          </Heading1>
          <Copy>
            Leads und Copytext sind straightforward in Inter Regular. Bold und Kursiv bitte nicht inflationär verwenden.
            Inhaltlich immer auf den Punkt gebracht. Hyperlinks innerhalb vom Copytext sind auch einfach:{' '}
            <TextLink href="https://en.wikipedia.org/wiki/Underscore" newTab>
              Underline
            </TextLink>{' '}
            und fertig.
          </Copy>
        </div>
        <div className="flex flex-col justify-center bg-apricot-500 p-8 lg:p-16">
          <div>
            <Heading1 as="p" className="text-center">
              Auf Patterns und farbigen Flächen schreiben wir auch schwarz.
            </Heading1>
            <div className="flex justify-center">
              <Copy>Und bitte ganz wenig Copytext.</Copy>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section>
      <Heading2 id="patterns-blobs">Patterns & Blobs</Heading2>
      <Copy>
        Die Patterns und Blobs sind ein wichtiger Bestandteil unseres Brands – die Anwendung ist aber voll uncool. Sprich
        dich doch mit Robert oder Damian ab.
      </Copy>
      <Copy className="space-x-8">
        <a
          href="images/brand/avatars.zip"
          className="border-b-4 border-apricot-500 font-bold no-underline hover:border-black"
          download="avatar-set.zip"
        >
          Download Avatar Set ZIP
        </a>
        <a
          href="images/brand/wallpapers.zip"
          className="border-b-4 border-mint-500 font-bold no-underline hover:border-black"
          download
        >
          Download Wallpaper Set (Desktop/Mobile) ZIP
        </a>
      </Copy>
      <div className="relative grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-6 lg:grid-cols-6">
        {Array.from({ length: 12 }, (_, i) => (
          <NextImage
            key={i}
            src={`/images/brand/avatars/avatar${i + 1}.png`}
            alt=""
            width={200}
            height={200}
            className="rounded"
          />
        ))}
      </div>
    </Section>
  </LandingPage>
);

type BrandColorOrTint = BrandColor | 'gray' | 'darkness';
type ColorBoxProps = {
  color: BrandColorOrTint;
  name: string;
  values: ColorValue[];
};
const ColorBox: FC<ColorBoxProps> = ({ color, name, values }) => (
  <li
    className={`flex h-64 overflow-hidden rounded sm:bg-white-100 ${
      color === 'gray'
        ? 'rounded-l border-8 border-white-100 bg-white-200 sm:border-0'
        : color === 'darkness'
          ? 'bg-black text-white-200 sm:text-black'
          : mapColorToBG(color)
    }`}
  >
    <div
      className={`flex-0 hidden h-64 w-64 sm:block ${
        color === 'gray'
          ? 'rounded-l border-4 border-white-100 bg-white-200'
          : color === 'darkness'
            ? 'bg-black'
            : mapColorToBG(color)
      }`}
    />
    <div className="p-6">
      <h3 className="mb-2 font-sans text-sm font-bold lg:mb-4 lg:text-lg">{name}</h3>
      <ColorValues values={values} color={color} />
    </div>
  </li>
);

type ColorValue = {
  label: string;
  content: string;
};
const ColorValues: FC<{ values: ColorValue[]; color: BrandColorOrTint }> = ({ values, color }) => (
  <dl className="grid grid-cols-2 gap-x-12 gap-y-4">
    {values.map(({ label, content }) => (
      <div key={label} className="flex flex-col">
        <dt className="mb-1 text-xxs font-bold md:text-xs">{label}</dt>
        <dd
          className={`select-all text-sm sm:bg-white-200 md:text-base ${
            color === 'gray' ? 'bg-white-200' : color === 'darkness' ? 'bg-apricot-800' : mapColorToLightBG(color)
          } whitespace-nowrap rounded-[4px] px-[6px] py-[2px]`}
        >
          {content}
        </dd>
      </div>
    ))}
  </dl>
);

export default Brand;
