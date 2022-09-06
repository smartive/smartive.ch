import { BlobVariations, Copy, Heading2, Keyfigure } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Image } from '../../../../components/image';
import { Testimonial } from '../../../../components/testimonial';
import { PageHeader } from '../../../../compositions/page-header';
import { Quote } from '../../../../data/quotes';
import { Link } from '../../../../elements/link';
import { LandingPage } from '../../../../layouts/landing-page';
import { Section } from '../../../../layouts/section';

const STATIC_IMAGES = {
  title: '/images/projekte/learnfox/learnfox.jpeg',
  desktop: '/images/projekte/learnfox/desktop-app@2x.png',
  farbwchooser: '/images/projekte/learnfox/farbwähler@2x.png',
  doppel: '/images/projekte/learnfox/zwei-screens@2x.png',
} as const;

const QUOTE = {
  excerpt: 'LearnFox oder binApp?',
  text: 'Uns war es wichtig, den LearnFox visuell von der binApp zu trennen. Und das ist smartive sehr gut gelungen.',
  credit: 'Markus Fröhlich, Verlagsleiter bin Genossenschaft',
  portrait: '/images/portraits/markus-froehlich.jpg',
};

type Props = {
  images: typeof STATIC_IMAGES;
  quote: Quote;
};

const Bosa2021: NextPage<Props> = ({ quote, images }) => {
  return (
    <LandingPage>
      <PageHeader
        markdownTitle="LearnFox – der perfekte Partner beim Lernen."
        description="LearnFox ermöglicht auf einfachste Weise, gedruckte Lehrmittel kopiergeschützt digital zu publizieren. Aber nicht nur als App, sondern als Plattform. Dank Flutter sind diese direkt auf iOS, Android und Windows verfügbar. Die neue binApp basiert auf LearnFox und beweist den Erfolg."
        tags={[
          { short: 'BOSA22', full: 'Eingabe Best of Swiss Apps 2022' },
          { short: 'Design', full: 'Kategorie Design' },
        ]}
      >
        <Copy>
          LearnFox ermöglicht auf einfachste Weise, gedruckte Lehrmittel kopiergeschützt digital zu publizieren. Verlage
          publizieren ihre Lehrmittel auf LearnFox und haben die Wahl, den Lernenden diese entweder in der LearnFox-App, oder
          in einem Derivat im eigenen Brand zur Verfügung zu stellen. Daher liegt der Fokus des Designs auf einem soliden
          Design System, das mittels Design Tokens einfach für weitere Verlage anpassbar ist.
        </Copy>
      </PageHeader>

      <main>
        <Section>
          <Image
            src={images.title}
            alt="Jugendliche in einem Klassenzimmer"
            priority
            objectFit="cover"
            width={1504}
            height={800}
          />
        </Section>

        <Section>
          <Heading2>One Design To Rule Them All</Heading2>
          <Copy>
            Mit dem LearnFox bietet sich die Möglichkeit für Lehrmittelverlage, diese digital auszurollen. Aber jeder
            Lehrmittelverlag hat einen eigenen Brand, eigene Tone & Voice und eigene Design-Prinzipien. Wie kann man also
            eine App für dutzende Brands entwickeln?
          </Copy>
          <Copy>
            Durch Reduktion. Das neue Design System ist reduziert und in einer neutralen Farbpalette gehalten. So können
            einzelne, gezielt eingesetzte Design Tokens das gesamte UI beeinflussen, ohne dessen Wirkung zu verändern.
          </Copy>
          <Copy>
            Das ist vorallem für die direkten Kunden des LearnFox wichtig – die Verlage. Aber für die Endkunden, die
            Lernenden, ist es zweitrangig, ob die App dem Brand des Verlags entspricht. Oder hast du dich in der Primarschule
            mit dem <Link href="https://www.lmvz.ch/schule/envol">LMVZ</Link> identifiziert, als du in der Schule den Text
            für «<Link href="https://www.youtube.com/watch?v=kCLE_Wvl5wM">Un kilomètre à pied</Link>» im envol auswendig
            gelernt hast?
          </Copy>
        </Section>

        <Section>
          <Image
            src={images.farbwchooser}
            alt="Ein Screenshot der LearnFox App zeigt wie Farben gewählt werden können"
            priority
            objectFit="cover"
            width={1504}
            height={800}
            quality={100}
          />
        </Section>

        <Section>
          <Image
            src={images.doppel}
            alt="Die LernFox App zeigt auf einem iPhone ein PDF an"
            priority
            objectFit="cover"
            width={1504}
            height={800}
            quality={100}
          />
        </Section>

        <Section>
          <Heading2>Schrödingers App</Heading2>
          <Copy>
            Die binApp ist nicht neu, und zugleich komplett neu. Lernende aus dem Schreinerberuf ist es seit rund fünf Jahren
            möglich, die Lehrmittel auch digital zu konsumieren. Mit dem LearnFox wird das Angebot jetzt auch anderen
            Lehrmittelverlagen, und somit Lernenden aus anderen Berufsgruppen, zugänglich gemacht. Der Golive-Termin der
            neuen App war also klar: die Sommerferien. Die Challenge aus Designperspektive: die App soll neu, frisch und
            modern wirken, wobei die Wiedererkennung trotzdem gegeben sein soll.
          </Copy>
        </Section>

        <Section>
          <Image
            src={images.desktop}
            alt="Ein Screenshot der LearnFox App auf einem Desktop"
            priority
            objectFit="cover"
            width={1504}
            height={800}
            quality={100}
          />
        </Section>

        <Section>
          <Testimonial background="cornflower" blobs={BlobVariations.cornflower[3]} quote={quote} />
        </Section>

        <Section>
          <Keyfigure background="apricot">
            <Heading2>Jury-Hinweis</Heading2>
            <Copy>Brauchts einen Hinweis?</Copy>
          </Keyfigure>
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
      quote: QUOTE,
    },
  };
};

export default Bosa2021;
