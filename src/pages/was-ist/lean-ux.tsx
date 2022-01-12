import { Copy, Heading2, Keyfigure, PageSection, TextLink, UnorderedList } from '@smartive/guetzli';
import NextLink from 'next/link';
import React from 'react';

import { PageHeader } from '../../compositions/page-header';
import { Page } from '../../layouts/page';

const LeanUX = () => (
  <Page>
    <PageHeader
      markdownTitle="_Lean UX_: Das Nutzungserlebnis hat Priorität."
      pageTitle="Was ist eigentlich Lean UX?"
      description="User Experience (UX) ist englisch für: Wer dein Produkt nutzt, soll es lieben."
    >
      <Copy>
        User Experience (UX) ist englisch für: Wer dein Produkt nutzt, soll es lieben. Dabei geht es um alle Aspekte der
        Benutzung, unter anderem Aussehen, Funktionalität, Interaktions- und Informationsdesign. Stellt sich die Frage: Wie
        kommst du zu einer grossartigen UX? Wir hätten da eine Idee.
      </Copy>
    </PageHeader>

    <main>
      <Keyfigure>
        <Heading2>Brauch ich das?</Heading2>
        <Copy>
          Natürlich kannst du sagen: «UX, jaja, Luxus. Kommt auch so gut.» Oder: «Können wir nach dem Go-live noch
          optimieren.» So wie du ja auch sagst: «Wir kaufen jetzt eine Harfe. Eins von den Kindern will sicher Harfe spielen.
          Und dazu gleich noch einen Dudelsack. Ins Musikhaus mit den Balgen ist doch nur mühsam. Oder, noch bessere Idee:
          Ein Theremin. Das Theremin ist die neue Flöte.»
        </Copy>
        <Copy>
          Es könnte dann einfach sein, dass du ein Theremin, einen Dudelsack und eine Harfe zu Hause rumstehen hast, die
          niemand braucht.
        </Copy>
      </Keyfigure>
      <PageSection title="Schneller zu besseren Ergebnissen">
        <Copy>
          Du willst also ein Produkt, das deine Nutzer*innen lieben. Die schlechte Nachricht: UX ist eine ziemlich grosse
          Kiste. Die gute Nachricht: Können wir zusammen auspacken.
        </Copy>
        <Copy>
          Lean UX passt perfekt zur{' '}
          <NextLink href="/was-ist/agile" passHref>
            <TextLink href="/was-ist/agile">agilen Arbeitsweise</TextLink>
          </NextLink>
          : Von dort übernehmen wir die Idee, in Iterationen vorzugehen. Wir brechen die grosse UX-Kiste in kleinere Teile
          auf, die wir laufend evaluieren. Wir sammeln Daten und treffen darauf basierend Entscheidungen. Der Fokus liegt
          nicht auf dem Endresultat, sondern auf den Erkenntnissen, die wir im Prozess gewinnen. Wir fällen Entscheide, die
          wir jetzt umsetzen können, um etwas zu verändern.
        </Copy>
      </PageSection>
      <PageSection title="Klingt noch etwas abstrakt?">
        <Copy>
          Etwas klarer wird’s vielleicht, wenn wir Lean UX mit der herkömmlichen Vorgehensweise vergleichen. Traditionell
          werden zuerst Anforderungen aufgenommen (Requirements), woraus ein umfassender Plan folgt, um eine optimale UX
          sicherzustellen. Bei Lean UX sieht das anders aus:
        </Copy>
        <Copy as="div">
          <UnorderedList
            items={[
              <span key="first" className="font-normal">
                Wir fokussieren nicht aufs grosse Ganze, sondern auf Veränderungen, die wir jetzt vornehmen können. Dazu
                sammeln wir Daten und bereiten so die Entscheide für den nächsten Sprint vor.
              </span>,
              <span key="second" className="font-normal">
                Statt Requirements stehen <strong>Problem Statements</strong> im Zentrum. Daraus lassen sich{' '}
                <strong>Annahmen</strong> generieren: «Wir glauben, dass es für Smartphone-User zentral ist, den Zustand des
                Anmeldeformulars jederzeit zu sichern. Dies führt zu mehr Anmeldungen.»
              </span>,
              <span key="third" className="font-normal">
                Um Annahmen zu testen, stellen wir <strong>Hypothesen</strong> auf: «Die Annahme ist bestätigt, wenn wir eine
                Verbesserung der Quote vollständiger Anmeldungen um 20% erreichen.» Hypothesen müssen beweisbar sein. Sonst
                produzieren wir ins Blaue hinaus. Ein{' '}
                <NextLink href="/was-ist/mvp">
                  <TextLink href="/was-ist/mvp">MVP</TextLink>
                </NextLink>{' '}
                eignet sich sehr gut, um Hypothesen zu testen.
              </span>,
              <span key="fourth" className="font-normal">
                Wenn sich die Hypothese bewahrheitet, iterieren wir weiter. Sonst verwerfen wir das MVP (oder den
                betreffenden Teil). Lean UX fördert also das <strong>Experimentieren und laufende Verbesserungen</strong>.
                Agil eben. Statt heiliger Kühe, die kreuz und quer in deinem Produkt rumstehen und -liegen, hast du am Ende
                Gewissheit: Das funktioniert.
              </span>,
            ]}
          />
        </Copy>
      </PageSection>
    </main>
  </Page>
);

export default LeanUX;
