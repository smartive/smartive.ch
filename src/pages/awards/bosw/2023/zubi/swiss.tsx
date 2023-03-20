import { Button, Copy, Grid, Heading2, Heading3, LinkList, PageSection, TextBlock, UnorderedList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Image, ImageVariant } from '../../../../../components/image';
import { Testimonial } from '../../../../../components/testimonial';
import { PageHeader } from '../../../../../compositions/page-header';
import { Quote } from '../../../../../data/quotes';
import Quotes from '../../../../../data/quotes.json';
import { Link } from '../../../../../elements/link';
import { LandingPage } from '../../../../../layouts/landing-page';
import { Section } from '../../../../../layouts/section';

const STATIC_IMAGES = {
  woman: '/images/projekte/zubi/zubi_woman.png',
  shop: '/images/projekte/zubi/zubi_shop.png',
  hero: '/images/awards/bosw/2023/zubi/hero.png',
  desktop: '/images/awards/bosw/2023/zubi/zubi-desktop.png',
  ratings: '/images/awards/bosw/2023/zubi/zubi-ratings.gif',
  history: '/images/awards/bosw/2023/zubi/zubi-history.webp',
  history2: '/images/awards/bosw/2023/zubi/zubi-history.jpeg',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
  quote: Quote;
};

const Bosa2023: NextPage<Props> = ({ quote, images }) => {
  return (
    <LandingPage>
      <PageHeader
        markdownTitle="Ein Familienunternehmen aus dem Appenzellerland"
        description="Zubi ist mehr als ein Online-Shop. Dein Kauferlebnis startet bei dir Zuhause, unterwegs in den Bergen oder vor Ort in der Filiale."
        tags={[
          { short: 'BOSW2023', full: 'Eingabe Best of Swiss Web 2023' },
          { short: 'Design', full: 'Kategorie Dot Swiss' },
        ]}
      >
        <Copy>
          Zubi.swiss ist mehr als ein Online-Shop. Das Kauferlebnis startet bei dir Zuhause, unterwegs in den Bergen oder vor
          Ort in der Filiale. Der 2022 durchgeführte Relaunch präsentiert Zubi im neuen Gewand. Nah bei der Natur. Nah bei
          dir. Mit moderner User-Experience und intuitivem Kaufprozess.
        </Copy>
        <LinkList links={[{ label: 'Zum Onlineshop', href: 'https://zubi.swiss/' }]} />
      </PageHeader>

      <main>
        <Section>
          <Grid cols={2}>
            <Image
              src={images.history}
              alt="Drei Männer in der Schuhmacherei 1950er-Jahre"
              priority
              variant={ImageVariant.FillContainer}
              width={2960}
              height={2099}
            />
            <Image
              src={images.history2}
              alt="Mobiler Zubi-Verkaufswagen an einem Markt"
              priority
              variant={ImageVariant.FillContainer}
              width={1500}
              height={987}
            />
          </Grid>

          <Heading2>Geschichte</Heading2>

          <Grid cols={3}>
            <TextBlock title={'1947'}>
              Walter Zuberbühler Senior, Grossvater der heutigen Eigentümer*innen, gründet eine Schuhmacherei mit
              dazugehörigem Verkaufslokal in Hundwil, Appenzell Ausserrhoden.
            </TextBlock>
            <TextBlock title="1968">
              Auch sein Sohn, Walter Zuberbühler Junior, bleibt dem Schuhgeschäft treu. In den späten 1960er-Jahren zieht es
              ihn zusätzlich mit dem Verkaufswagen auf regionale Märkte.
            </TextBlock>
            <TextBlock title="2012">
              Die dritte Generation Zuberbühler erkennt das Potenzial vom digitalen Handel, der in der Schweiz noch ganz am
              Anfang steht. Der erste Online-Shop geht live.
            </TextBlock>
          </Grid>

          <TextBlock title="2023">
            Das Sortiment beinhaltet mittlerweile weit mehr als Schuhe. 160 Mitarbeitende versorgen die zufriedene Kundschaft
            mit einer grossen Auswahl and Sport- und Wanderschuhen sowie Bekleidung und Ausrüstung für Aktivitäten draussen
            an der frischen Luft.
          </TextBlock>
          <Copy>
            Die eigene, in der Schweiz entwickelte und gehostete E-Commerce Plattform sorgt für einen Drittel des gesamten
            Verkaufsumsatzes. Der Einsatz modernster Technologien ermöglicht es mit deutlich grösseren internationalen Shops
            zu konkurenzieren.
          </Copy>

          <Image
            src={images.hero}
            alt="Menschen in den Bergen und ein Screenshot vom Zubi Online-Shop"
            priority
            variant={ImageVariant.FillContainer}
            width={4800}
            height={2720}
          />
        </Section>

        <Section>
          <Heading2>Dein Kauferlebnis</Heading2>
          <Copy>
            Zubi ist kein reiner Online-Shop. Das beispielhaft umgesetzte Omnichannel Verkaufskonzept überzeugt. Volle
            Kundenparkplätze am Samstagmorgen in Herisau und heiss laufende Server am Black Friday. Also nicht zu heiss
            natürlich. Dank server-side-rendering im React Frontend und performantem Golang E-Commerce Core-System.
          </Copy>
          <UnorderedList
            items={[
              'Deinen Schuh willst du online aussuchen und in der Filiale anprobieren? Kein Problem.',
              'Du weisst schon welchen Rucksack? Dann bestell ihn einfach versandkostenfrei zu dir nach Hause.',
            ]}
          ></UnorderedList>
          <Copy>
            Der Zubi-Online-Shop ist die Verlängerung der Filialen. Filiale Nummer Neun. Die virtuelle. In deinem Wohnzimmer,
            oder Schlafzimmer. Oder auf dem Säntis. Voraussgesetzt da hast du Internet.
          </Copy>
        </Section>

        <Section>
          <Grid cols={2}>
            <TextBlock title="bei über 9'900 Bewertungen" number={4.89} unit="⭐️">
              <span></span>
            </TextBlock>
            <TextBlock title="monatliche Besucher*innen" number={100000} unit="📈">
              <span></span>
            </TextBlock>
            <TextBlock title="Besucher*innen an Spitzentagen" number={20000} unit="👫">
              <span></span>
            </TextBlock>
            <TextBlock title="Bestellungen an Spitzentagen" number={1000} unit="📦">
              <span></span>
            </TextBlock>
          </Grid>
        </Section>

        <Section>
          <Heading2>Shop as it should</Heading2>
          <Copy>
            Dark Patterns führen zu mehr Conversions und schlussendlich zu mehr Cash. Darum findet man sie auch überall im
            Netz. Das passt nicht zu Zubi. Glückliche Stammkund*innen sind mehr Wert als Rekordumsätze im Weihnachtsgeschäft,
            wo dann doch die Hälfte zurückgeschickt wird.
          </Copy>
          <Copy>
            Die digitale Mündigkeit der User steigt stetig und Bright Patterns sorgen nicht nur für glückliche, sondern auch
            wiederkehrende User.
          </Copy>
          <Copy>
            Rücksendungen? Voll easy. Pflichtfelder? Absolutes Minimum. Alle Newsletter abbestellen? Ein Klick. Zusätzliche
            Kosten? Von Anfang an ersichtlich. Zubi überzeugt durch ehrlichen und nachhaltigen Kundenservice. Und nicht durch
            Marketing-Tricks und billige Effekthascherei.
          </Copy>
        </Section>

        <Section>
          <Image
            src={images.desktop}
            alt="Eine Screenshot Mockup vom neuen Zubi Online-Shop"
            variant={ImageVariant.FillContainer}
            width={4800}
            height={2832}
          />
        </Section>

        <Section>
          <Heading2>Digitale Verkaufsberatung</Heading2>
          <Copy>
            Die ehrliche und motivierte Beratung steht bei Zubi seit der Gründung 1947 im Zentrum. In der Filiale vor Ort ist
            das natürlich einfacher umzusetzen. Das geht aber auch online. Darum gibts:
          </Copy>
          <Grid cols={2}>
            <div>
              <Heading3>Personalisierte Vorschläge</Heading3>
              <Copy>
                Persönlich und greifbar. Das macht Zubi aus. Durch deine Kaufhistory wissen wir, was du magst. Egal ob du
                online oder vor Ort in einer der acht Filialen einkaufst. Diese Informationen werden sowohl bei
                Produktvorschlägen als auch beim Content berücksichtigt.
              </Copy>
            </div>
            <div>
              <Heading3>Dein Lieblings-Kund*innendienst</Heading3>
              <Copy>
                Den erreichst du nämlich per WhatsApp, Chat, Telefon, Online-Formular oder E-Mail. Auch am Samstag. Und die
                helfen dir wirklich gerne weiter. Das bestätigen dir auch die vielen Bewertungen, die wir bisher erhalten
                haben.
              </Copy>
            </div>
          </Grid>
          <Grid cols={2}>
            <div>
              <Heading3>Die beste Suche</Heading3>
              <Copy>
                Du suchst einen wasserdichten Schuh? Gibs in die Suche ein. Oder navigier zur Kategorie «Schuhe» und nutz den
                Filter «Wasserbeständigkeit». Es soll ein Sicherheitsschuh sein? Kannst du auch filtern. Am besten wählst du
                da auch gleich deine Grösse aus.
              </Copy>
              <Copy>
                Egal was du suchst. Die Suche bringt dich hin. Mit Suchvorschlägen, Suchhistorie und Produktvorschlägen. Und
                zwar richtig schnell. Für Keyboard-Warrior: <code>[⌘/Ctrl] + K</code>. Suchvorschläge, Produktvorschläge und
                «häufig gesucht» sind deine Freund*innen, ob Lädele oder zielgerichtet.
              </Copy>
            </div>
            <div>
              <Heading3>Bestes Kauferlebnis standardmässig dabei</Heading3>
              <Copy>
                Convenience Features die deinen Bestellprozess zum best möglichen Kauferlebnis machen gehören für uns zum
                Standard.
              </Copy>
              <UnorderedList
                items={[
                  'easy Checkout mit Social Login oder als Gast',
                  'flexible Zahlungsmöglichkeiten – auch auf Rechnung',
                  'Next Day Delivery',
                  'Versandbestätigung und Paketverfolgung',
                  'kostenlose Rücksendung',
                ]}
              />
            </div>
          </Grid>

          <Image src={STATIC_IMAGES.ratings} alt={''} width={200} height={200}></Image>

          <Heading2>Drei von neuntausendneunhundert Bewertungen</Heading2>
          <Copy>
            Und{' '}
            <Link href="https://www.trustedshops.ch/bewertung/info_X6D35618D2397FD5905475F7BFC9AD04F.html">
              bei Trusted Shops
            </Link>{' '}
            findest du die restlichen.
          </Copy>
          <Grid cols={3}>
            <div>
              <Copy>
                5/5 –{' '}
                <i>
                  Mittwoch bestellt- Donnerstag ausgeliefert(mit freundlich verfasster e-mail Ankündigung)- am Freitag
                  erhalten: schneller geht‘s nicht!! SUPER
                </i>
              </Copy>
            </div>
            <div>
              <Copy>
                5/5 –{' '}
                <i>
                  Hatte online bestellt und brauchte Hilfe, die mir prompt gewährt wurde .. befolgte den Vorschlag und hab
                  meine Schuhe von ZUBI im Schrank!
                </i>
              </Copy>
            </div>
            <div>
              <Copy>
                5/5 –{' '}
                <i>
                  Super ich konnte den Artikel im Geschäft retour geben und die Rückzahlung erfolgte sehr schnell auf mein
                  TWINT-Konto Danke. Super Service.
                </i>
              </Copy>
            </div>
          </Grid>
        </Section>

        <Testimonial background="cornflower" quote={quote} />
        <Section>
          <Heading2>Das macht uns einzigartig</Heading2>
          <Grid cols={2}>
            <div>
              <Heading3>Realtime Interaction-Optimization durch AI gestützte Content-Personalisierung</Heading3>
              <Copy>
                Die mit Golang und React entwickelte E-Commerce-Plattform ermöglicht die Anbindung von innovativen
                Technologien.
              </Copy>
              <Copy>
                Der extern angebundene Service <Link href="https://www.winning-interactions.ai/">Boxalino</Link> ist deine
                digitale Verkaufsberater*in. Boxaline optimiert das Kauferlebnis im Hintergrund – Data-Warehouse, A/B-Testing
                und Data-Analytics arbeiten zusammen, um dir den relevantesten Inhalt anzuzeigen. Aufgrund deiner History,
                unserer History, ähnlichen Profilen, den aktuellen Produktvorräten und Verkaufsabschlüssen
              </Copy>
            </div>
            <div>
              <Heading3>Data-driven Advertisement</Heading3>
              <Copy>
                Die Informationen aus dem Data Warehouse werden durch Zubi neuerdings auch im Performance Marketing
                verwendet.
              </Copy>
              <Copy>
                Gibts einen Schuh nur noch in in Randgrössen, sinkt die Wahrscheinlichkeit einer echten Conversion mit
                Verkaufsabschluss. Diese Produkte werden dann z.B. bei Google Ads deutlich tiefer gewichtet, um das
                Werbebudget dort einzusetzen, wo es am effektivsten wirkt. Auch Artikel mit hoher Retourenquote oder tiefer
                Marge werden weniger beworben. Vollauständig automatisiert natürlich.
              </Copy>
            </div>
          </Grid>
          <Grid cols={2}>
            <div>
              <Heading3>Eine Frage der Philosphie</Heading3>
              <Copy>
                Dank neuen Technologien ist ein einfacher Online-Shop heute in wenigen Stunden realisierbar. Das heisst dann
                aber: Ein System, das nicht richtig eingebunden ist und niemanden überzeugt.
              </Copy>
              <Copy>
                {' '}
                Anders gesagt: Der handgemachte Zopf vom Grosi schmeckt uns einfach viel besser, als das Fertigprodukt vom
                grossen Detailhändler. Darum setzt Zubi auf regionales Handwerk:
              </Copy>
              <UnorderedList
                items={[
                  'Eigene Logistik',
                  'Eigener Kundendienst',
                  'Eigene E-Commerce Infrastruktur',
                  'Maximale Flexibilität',
                ]}
              />
            </div>
            <div>
              <Heading3>Der Online Shop mit Gesicht</Heading3>
              <Copy>
                <Link newTab href="https://zubi.swiss">
                  Zubi.swiss
                </Link>{' '}
                ist die Verlängerung der Zubi-Filialen in dein Zuhause. Das weisst du ja jetzt schon. Aber wir möchten das
                nochmals betonen. Denn hier stehen die Menschen, ihre Bedürfnisse und ihre Geschichten im Zentrum.
              </Copy>
              <Copy>
                Du wolltest immer schon wissen wo{' '}
                <Link newTab href="https://zubi.swiss/stories/lowa-2022">
                  Lowa ihre Schuhe produziert
                </Link>
                ? Oder warum bei Zubi auf einmal{' '}
                <Link newTab href="https://zubi.swiss/stories/lernenden-austausch-2022">
                  Lernende der Konkurrenzfirma mit anpacken
                </Link>
                ?
              </Copy>

              <Copy>
                Digital muss nicht anonym und unpersönlich sein. Gute Beratung muss nicht immer vor Ort stattfinden. Und
                guter Kundenservice geht weit über die physischen Ladengrenzen hinaus.
              </Copy>
            </div>
          </Grid>
          <Grid cols={2}>
            <Image
              src={images.shop}
              alt="Die Filiale von Zubi in Herisau"
              priority
              variant={ImageVariant.FillContainer}
              width={750}
              height={500}
            />
            <Image
              src={images.woman}
              alt="Eine Frau mit einem Wanderrucksack."
              priority
              variant={ImageVariant.FillContainer}
              width={750}
              height={500}
            />
          </Grid>
        </Section>

        <Section>
          <div className="text-center">
            <Button as="a" href="/awards/bosw/2023">
              zurück zur Übersicht
            </Button>
          </div>
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
      quote: Quotes['marco-zubi-redesign'],
    },
  };
};

export default Bosa2023;
