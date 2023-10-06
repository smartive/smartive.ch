import { Calendar, Copy, Heading2, ImageCard, ImageCardVariants, LinkList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import { PageHeader } from '../../compositions/page-header';
import { Categories, getNotionCategories } from '../../data/sustainability/notion-categories';
import { Scopes, getNotionScopes } from '../../data/sustainability/notion-scopes';
import { LandingPage } from '../../layouts/landing-page';
import { Section } from '../../layouts/section';
import { ScopeNames, sortScope } from '../../utils/sustainability';
import '../_app';

type Props = {
  scopes: Scopes[];
  categories: Categories[];
};

const Sustainabilty: NextPage<Props> = ({ scopes, categories }) => {
  return (
    <LandingPage>
      <PageHeader
        markdownTitle="Wie messen wir unseren Fussabdruck?"
        pageTitle="Nachhaltigkeit: Wie messen wir unseren Fussabdruck?"
        description="Du möchtest wissen, welche Normen und Standards wir zur Messung unseres Fussabdrucks benutzen und was das bedeutet? Dann bist du hier richtig."
      >
        <Copy>
          Du möchtest wissen, welche Normen und Standards wir benutzen und was das bedeutet? Dann bist du hier richtig.
        </Copy>
        <ul className="ml-8 flex list-disc flex-col space-y-4 text-xs lg:text-base">
          <li>
            Die <a href="#ökobilanz"> Ökobilanzierung</a> dient uns als methodischer Rahmen. Sie misst die Emissionen und den
            Ressourcenverbrauch mit dem Lebenszyklusansatz (alles von der Wiege bis zur Bahre).
          </li>
          <li>
            Um die gemessenen und abgeschätzten Emissionen sinnvoll in Kategorien zu verpacken, wenden wir das weit
            verbreitete
            <a href="#ghg"> Greenhouse Gas Protocol</a> an.
          </li>
        </ul>
        <br></br>
        <LinkList
          linkWrapper={(props) => <NextLink legacyBehavior {...props} />}
          links={[{ label: 'Zurück zur Übersicht', href: '/nachhaltigkeit' }]}
        />
      </PageHeader>
      <main>
        <Section>
          <div id="ökobilanz">
            <Heading2>Ökobilanzierung</Heading2>
            <Copy>
              Die Ökobilanz (engl. Life Cycle Assessment / LCA) ist eine systematische Analyse der Umweltauswirkungen entlang
              des gesamten Lebenswegs eines Produktes, eines Verfahrens oder einer Dienstleistung (“from cradle to grave”).
              Zu den Umweltauswirkungen zählen sämtliche während der Rohstoffförderung, Produktion, Nutzungsphase und der
              Entsorgung umweltrelevanten Entnahmen aus der Umwelt (z.B. Erze, Rohöl), sowie Emissionen in die Umwelt (z.B.
              Abfälle, Kohlenstoffdioxidemissionen). Eine Ökobilanz wird in vier Schritten erstellt:
            </Copy>
            <ol className="ml-8 flex list-decimal flex-col space-y-4 text-xs lg:text-base">
              <li>
                <strong>Ziel und der Untersuchungsrahmen</strong>. Das Ziel ist die Messung der Umweltauswirkungen aller
                Aktivitäten unseres Unternehmens. Zur Hilfe der Abgrenzung dieser Aktivitäten nutzen wir das GHG Protocol
                (siehe unten). Weiter beschränken wir uns nur auf einen Typ von Umweltauswirkung, nämlich die
                Treibhausgasemissionen, gemessen in CO<sub>2</sub>-Äquivalent (eq.).
              </li>
              <li>
                <strong> Die Sachbilanz</strong> ist der zeitintensivste Schritt. Sie beinhaltet die Suche und das Erfassen
                der nötigen Daten, also alle Konsumationen, Verbräuche und Ausgaben. Alle Daten von kWh-Verbrauch der Heizung
                bis zum Neukauf einer Pflanze für den Bürobereich werden so gut wie möglich herausgesucht und
                zusammengestellt.
              </li>
              <li>
                <strong>Wirkungsabschätzung</strong>. Die in Phase 2 gesammelten Daten werden in Umweltwirkung umgerechnet.
                In unserem Fall ist das nur eine Art von Umweltauswirkung: CO<sub>2</sub> eq.
              </li>
              <li>
                <strong>Auswertung und Interpretation</strong>. Das anfangs gesetzte Ziel und die Ergebnisse der
                Wirkungsabschätzung werden abgeglichen und interpretiert, nächste mögliche Schritte diskutiert.
              </li>
            </ol>
            <br></br>
          </div>
        </Section>
        <Section>
          <ImageCard
            className={'md:col-span-2 lg:col-span-3'}
            variant={ImageCardVariants.Wide}
            label={
              <>
                <Calendar className="mr-2 inline-block h-4 w-4" />
                17.09.2021
              </>
            }
            title="Einmal Nachhaltigkeit mit allem, bitte."
            description="Heute schon nachhaltig eingekauft? Nachhaltig ins Büro gependelt? Nachhaltig eine Internet-Suche abgesetzt? Nachhaltigkeit verfolgt uns auf Schritt und Tritt. Und nervt ein bisschen, weil das Wort für alles und das Gegenteil benutzt wird – Der Unterschied zwischen ehrlichen Bemühungen und Greenwashing ist kaum mehr erkennbar.
            Also alles heisse Luft? Nein, natürlich nicht. Aber was heisst das für uns als KMU? Was bewirken wir mit unserer Tätigkeit in der Umwelt? Und wie können wir unseren Beitrag für eine nachhaltigere Gesellschaft leisten?"
            link={{
              label: `weiterlesen`,
              href: 'https://smartive.ch/blog/nachhaltigkeit',
              newTab: true,
            }}
            image={{ src: '/images/blog/linkedin/culture-day.jpg', alt: 'culture-day-2021' }}
          />
        </Section>
        <Section>
          <div id="ghg">
            <Heading2>Greenhouse Gas Protocol</Heading2>
            <Copy>
              Das Greenhouse Gas Protocol (GHG) ist der weltweit am häufigsten genutzte Standard für die Bilanzierung von
              Treibhausgasen. Alle gesammelten Daten wurden anhand von den drei Scopes des Greenhouse Gas Protocol
              zusammengestellt.
            </Copy>
            <ul className="ml-8 flex list-disc flex-col space-y-4 text-xs lg:text-base">
              {sortScope(scopes).map(({ ghgCategory, description, title }) => (
                <li key={ghgCategory}>
                  <strong>{title}:</strong> <br></br>
                  {description} <br></br>
                  <br></br>
                  {ghgCategory === ScopeNames.Scope3 ? (
                    <ol className="ml-8 flex list-decimal flex-col space-y-4 text-xs lg:text-base">
                      Scope 3 besteht aus 15 Kategorien. <br></br>
                      {categories.map(({ ghgCategoryNumber, title, icon, description }) => (
                        <li key={ghgCategoryNumber}>
                          <strong>
                            {icon} {title}:
                          </strong>
                          <br></br>
                          {description}
                        </li>
                      ))}
                    </ol>
                  ) : (
                    ''
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </main>
    </LandingPage>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const categories = await getNotionCategories();
  const scopes = await getNotionScopes();
  categories.sort((firstElement, secondElement) => firstElement.ghgCategoryNumber - secondElement.ghgCategoryNumber);

  return {
    props: {
      scopes,
      categories,
    },
  };
};

export default Sustainabilty;
