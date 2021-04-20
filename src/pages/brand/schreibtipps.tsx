import { Copy, Explainer, Grid, Heading2, Heading3, Keyfigure, Link, PageSection } from '@smartive/guetzli';
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';
import { PageHeader } from '../../compositions/page-header';
import { LandingPage } from '../../layouts/landing-page';

const Tipps = () => (
  <LandingPage>
    <PageHeader markdownTitle="Du willst einen _Blogpost_ schreiben?">
      <Copy>Cool! Hier findest du ein paar Tipps.</Copy>
      <Copy>
        <NextLink href="sprache" passHref>
          <Link>Zurück zu den allgemeinen Sprach-Guidelines</Link>
        </NextLink>
      </Copy>
    </PageHeader>

    <main>
      <PageSection title="Denk an die Nutzer*innen – also: die Leser*innen">
        <Copy>
          Welche Infos sucht die Person, die das liest? Was ist für sie relevant? Auf welche Frage will sie eine Antwort?
        </Copy>
        <Copy>
          <strong>Hol die Leser*innen ab</strong>: mit Fragen, Aufforderungen, direkter Ansprache. Die Botschaft nach oben.
          Gib Infos. Setz Links, intern und extern.
        </Copy>
        <Copy>
          <strong>Bring Abwechslung hinein</strong>: Kombinier verschiedene Inhalte wie Bilder, Blocktext, Aufzählungen,
          Zitate, Grafiken, evtl. wichtige Stichwörter fett hervorheben (sparsam)
        </Copy>
        <Copy>
          <strong>Bonus</strong>: Eine persönliche Note, z.B. mit einer Anekdote von dir, Ironie, Metaphern, Running Gags, …
        </Copy>
        <Copy>
          Die <strong>Länge</strong> ist eigentlich egal – solang du etwas zu sagen hast. Wichtig ist, den Spannungsbogen zu
          halten.
        </Copy>
        <Copy>Ein Stil nah an gesprocher Sprache ist eher ein Plus als ein Problem.</Copy>
      </PageSection>

      <PageSection>
        <Keyfigure
          background="cornflower"
          image={<Image src="/images/brand/smarta-approves.png" height="400" width="400" objectFit="contain" />}
        >
          <Heading3>Lesen im Web heisst scannen. Da hilft ein klarer Aufbau und visuelle Anker.</Heading3>
          <div>
            <Copy>
              <strong>Der Titel</strong> (besser 5 als 10 Worte) fängt die Aufmerksamkeit und gibt eine Ahnung vom Inhalt.
            </Copy>
            <Copy>
              <strong>Der Teaser</strong> (3 Sätze) fixt die Lesenden an und macht Lust auf mehr. Vielleicht baut er schon
              einen Spannungsbogen auf.
            </Copy>
            <Copy>
              Setz <strong>Zwischenüberschriften</strong>, die beim Überfliegen die Neugierde wecken.
            </Copy>
            <Copy>
              <strong>Abschluss</strong>: Zusammenfassung, Call to action (e.g. «weiterlesen: …») oder nach Meinung fragen.
            </Copy>
          </div>
        </Keyfigure>
      </PageSection>

      <PageSection title="Hilfe! Wie schreibe ich einen Text?">
        <Grid cols={2}>
          <div>
            <Heading3>Überleg dir vor dem Schreiben:</Heading3>
            <Copy>
              <strong>Was willst du sagen?</strong> Notier die Hauptpunkte. Skizzier grob die Struktur. Wenn dir schon
              Stichwörter oder Formulierungen einfallen: Schreib sie ebenfalls auf.
            </Copy>
            <Copy>
              <strong>Versetz dich in eine Person aus der Zielgruppe.</strong> Die Sprache muss zu ihr passen. Schreibst du
              für Techies? Tech-affine Kunden? Tech-ferne Kunden?
            </Copy>
          </div>
          <div>
            <Heading3>Mach’s iterativ!</Heading3>
            <Copy>Jap, funktioniert auch beim Schreiben. Sogar sehr gut. Du kannst auch Jira-Tickets machen 😏</Copy>
            <ol className="list-decimal ml-8 text-xs lg:text-base flex flex-col space-y-4">
              <li>Vorlauf: Sammle Ideen und notiere sie.</li>
              <li>Schreiben: Nicht zu lange rumfeilen. Schreib mehrere Formulierungen auf, wenn du unsicher bist.</li>
              <li>Überarbeitung (siehe unten)</li>
            </ol>
          </div>
        </Grid>
      </PageSection>

      <PageSection title="Nützt’s nüt so schadt’s nüt: Try this!">
        <Grid cols={3}>
          <div>
            <Heading3>Erzähl eine Geschichte</Heading3>
            <Copy>
              Menschen lieben Geschichten. Sie machen alles so… Menschlich. Leg dir einen Einstieg zurecht und schlag von da
              den Bogen zum Thema. (Du kannst auch indirekt das Thema setzen: «Als wir Kindergarten Sandburg blabla» –
              Zwischentitel – «Zusammenarbeiten yadda yadda»)
            </Copy>
            <Copy>Blog 💗 persönliche Anekdoten und subjektive Perspektiven.</Copy>
          </div>
          <div>
            <Heading3>Frisch von der Leber</Heading3>
            <Copy>
              Du weisst eigentlich, was du sagen willst, aber meinst, du kannst nicht schreiben? Probier’s so: Stell dir
              einen Mensch aus deinem Zielpublikum vor. Erzähl ihm deinen Blogpost und nimm dich dabei auf. Mach daraus einen
              schriftlichen Text.
            </Copy>
            <Copy>Ein Stil nahe am Mündlichen wirkt nahbar und echt – wahrscheinlich musst du gar nicht viel ändern.</Copy>
          </div>
          <div>
            <Heading3>Metaphern und Wortfelder</Heading3>
            <Copy>
              Überleg dir, welche Bilder deinen Text strukturieren. Notier Wörter und Formulierungen. Nimm ein
              Synonym-Wörterbuch zu Hilfe! Oder überleg dir Gegensätze und hangle dich zurück («interessant» → «schlaf» →
              «wach»)
            </Copy>
            <ul className="list-disc ml-8 text-xs lg:text-base flex flex-col space-y-4">
              <li>
                z.B.{' '}
                <Explainer title="wir bauen Komponenten, Architekten und Ingenieure, Pläne und Konzepte, zimmern, konstruieren, visualisieren, ein beständiges Gerüst hochziehen, …">
                  Software als Gebäude
                </Explainer>{' '}
                (Implikation: Handwerk)
              </li>
              <li>
                z.B.{' '}
                <Explainer title="wächst, düngen, muss gehegt und gepflegt werden, braucht genug Licht und Wasser, …">
                  Software als Pflanze
                </Explainer>{' '}
                (Implikation: Eigenleben)
              </li>
            </ul>
          </div>
        </Grid>
      </PageSection>

      <PageSection>
        <Heading2>
          Überarbeiten: Leider <span className="line-through text-mint-500">geil</span> wichtig
        </Heading2>
        <Copy>Smartas Tipp: Vor dem Überarbeiten den Text einen Tag liegen lassen.</Copy>
        <Copy>
          <strong>Represent!</strong> Ganz Am Schluss macht sich ein Paragraph gut, der nochmals auf smartive verweist: «Need
          an expert team to implement your advanced web application? Check out smartive’s portfolio. At smartive, we build
          complex web applications. We are located in Zurich, Switzerland.» (o.ä.)
          <br /> Auch zu Beginn kannst du smartive gern erwähnen, z.B. «We at smartive…»
        </Copy>
        <Grid cols={3}>
          <div className="bg-cornflower-500 rounded px-16 py-12">
            <Copy>
              Weniger ist mehr. Wücki. (Weitere tolle Tipps und fancy Facts in den{' '}
              <NextLink href="sprache" passHref>
                <Link>Sprach-Guidelines</Link>
              </NextLink>
              )
            </Copy>
            <ul className="list-disc text-xs lg:text-base">
              <li>Kürzen ist Kunst. Auch du kannst Kunst: Fehlt dem Satz etwas ohne dieses Wort?</li>
              <li>Auflockern: mit Fragen, Aufforderungen, Witzen, Variation der Satzlänge.</li>
              <li>Ein Thema pro Absatz. Ein Gedanke pro Satz.</li>
            </ul>
          </div>
          <div className="bg-mint-500 rounded px-16 py-12">
            <Copy>
              Nicht jedes Wort muss sitzen.{' '}
              <strong>Investier am meisten Zeit in die Teile, die zuerst gelesen werden</strong>: Titel, Teaser,
              Zwischen­überschriften.
            </Copy>
            <Copy>
              Probier deine Leser*innen anzufixen. Ein paar Minuten Brainstorming pro Titel lohnt sich. Übrigens:
              Synonym­wörterbücher! Kännsch?
            </Copy>
          </div>
          <div className="bg-apricot-500 rounded px-16 py-12">
            <Copy>
              Nimm dir Zeit und lies den Text einmal von oben bis unten durch. Am besten laut. Holprige Stellen werden dir
              sofort auffallen.
            </Copy>
          </div>
          <div className="bg-mint-500 rounded px-16 py-12">
            <Copy>
              Leser sind schwer zu befriedigende Biester. Motivier sie mit mit Nützlichem, zäukle mit Cliffhängern, Fragen,
              direkter Ansprache…
            </Copy>
            <Copy>
              Versetz dich in eine prototypische Leserin (oder setz einen thematisch hinreichend qualifizierten
              Lieblings­menschen vor den Text).
            </Copy>
          </div>
          <div className="bg-apricot-500 rounded px-16 py-12">
            <Copy>Sei anschaulich und konkret. Mal die Szene aus (Menschen mögen das). Setz Details gezielt ein.</Copy>
            <Copy>
              Nicht lavieren («Wir hatten tendenziell den Eindruck, dass es gut wäre, fliegende Teppichen zu thematisieren» →
              «Fliegende Teppiche: Nicht für uns.»)
            </Copy>
          </div>
          <div className="bg-cornflower-500 rounded px-16 py-12">
            <Copy>Bonus: Gönn dir ein paar Stilfiguren, z.B.</Copy>
            <ul className="list-disc text-xs lg:text-base">
              <li>Einen bewusst gesetzten Stolperstein (Überschriften!)</li>
              <li>Sprachbilder, Vergleiche, Analogien – und natürlich Metaphern 🥰</li>
              <li>
                Satzaufbau:{' '}
                <Explainer title="Wir mögen Giraffen. Wir mögen Kängurus. Wir mögen Nasenbären. Bullshit mögen wir nicht.">
                  Spiel mit Wiederholungen und Kontrasten
                </Explainer>
              </li>
              <li>
                Klang: Hier eine <Explainer title="Mama Migipedia mag Meinungen">Alliteration</Explainer>, da ein Reim, dort
                ein <Explainer title="Ha!">Einwurf</Explainer>
              </li>
            </ul>
          </div>
        </Grid>
      </PageSection>
    </main>
  </LandingPage>
);

export default Tipps;
