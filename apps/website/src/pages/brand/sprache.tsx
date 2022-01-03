import {
  Copy,
  Cross,
  Decoration,
  DescriptionList,
  Grid,
  Heading2,
  Heading3,
  Heart,
  IconList,
  Keyfigure,
  Link,
  PageSection,
  UnorderedList,
} from '@smartive/guetzli';
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';
import { PageHeader } from '../../compositions/page-header';
import { LandingPage } from '../../layouts/landing-page';

const Sprache = () => (
  <LandingPage>
    <PageHeader
      markdownTitle="Sprachlicher Auftritt: Den _richtigen Ton_ treffen"
      description="Worum es hier geht: Sprachliche Mittel so einsetzen, dass sie die gewünschte Wirkung entfalten. Texte transportieren die Persönlichkeit von smartive und unsere Werte."
    >
      <Image src="/images/brand/smarta-welcome.png" alt="" height="450" width="900" objectFit="contain" />
    </PageHeader>

    <main>
      <PageSection>
        <Grid cols={2}>
          <div>
            <Heading2>Eine Sprache, die zu smartive passt</Heading2>
            <Copy>
              Worum es hier geht: Sprachliche Mittel so einsetzen, dass sie die gewünschte Wirkung entfalten. Texte
              transportieren die Persönlichkeit von smartive und unsere Werte. Sie sind
            </Copy>
            <UnorderedList
              items={[
                'laut: Wir schreiben selbstbewusst.',
                'locker: Wir duzen. Wir 🤗 Emojis. Die Sprache erinnert an gesprochene Sprache.',
                "sauber: Wir halten's kurz und kommen auf den Punkt.",
              ]}
              markerColor="apricot"
            />
          </div>
          <div>
            <Heading2>Eine Sprache, die zum Web passt</Heading2>
            <Copy>
              Wir produzieren keine Prosa, die auf tote Bäume gedruckt wird, sondern Gebrauchstexte, die überflogen werden.
              Dafür hat sich bewährt:
            </Copy>
            <UnorderedList
              items={[
                'Einfach, verständlich und kurz schreiben.',
                'Besucher*innen direkt ansprechen.',
                'Texte gut gliedern.',
                'Immer raus mit den Infos.',
              ]}
              markerColor="apricot"
            />
          </div>
        </Grid>
      </PageSection>

      <PageSection>
        <div className="flex space-x-8 items-center justify-center">
          <Image src="/images/brand/smarta-loves.png" alt="" height="300" width="300" objectFit="contain" />
          <Heading2>
            <span className="text-cornflower-500">Funktioniert im Web</span>
            <br />
            <span className="text-apricot-500">Passt zu smartive</span>
            <br />
            <span className="text-mint-500">Smarta loves it.</span>
          </Heading2>
        </div>
      </PageSection>

      <PageSection>
        <Keyfigure background="apricot">
          <div className="mt-4 lg:mt-8">
            <Heading3>Du willst einen Blogpost schreiben?</Heading3>
            <Copy>
              Guck dich mal bei den{' '}
              <NextLink href="/brand/schreibtipps" passHref>
                <Link>Schreibtipps</Link>
              </NextLink>{' '}
              um!
            </Copy>
          </div>
        </Keyfigure>
      </PageSection>

      <PageSection>
        <Heading2 className="mt-16">Sprich die Leser*innen direkt an.</Heading2>
        <DescriptionList
          items={[
            {
              term: 'Überleg dir, an wen sich der Text richtet. Wie würdest du mit dieser Person reden, wenn sie vor dir steht?',
            },
            {
              term: (
                <>
                  Keine Angst vor dem <Decoration>du</Decoration>.
                </>
              ),
              description: <IconList items={['Du kannst klicken.', 'Klick!']} icon={Heart} iconColor="mint" />,
              additionalDescription: <IconList items={['Man kann klicken']} icon={Cross} iconColor="apricot" />,
            },
            {
              term: "Stell Fragen. Oder sag wo's lang geht.",
              description: (
                <IconList
                  items={['Du suchst die besten Tekkies?', 'Frag uns nach mehr Infos!']}
                  icon={Heart}
                  iconColor="mint"
                />
              ),
            },
          ]}
        />

        <Heading2 className="mt-16">Sei selbstbewusst.</Heading2>
        <DescriptionList
          items={[
            {
              term: (
                <>
                  Wir. Nicht <Decoration>man</Decoration> oder <Decoration>es</Decoration>.
                </>
              ),
              additionalDescription: (
                <IconList
                  items={['Man kann durchaus der Meinung sein, dass Next.js den Weg weist.']}
                  icon={Cross}
                  iconColor="apricot"
                />
              ),
              description: <IconList items={['Wir denken, Next.js weist den Weg.']} icon={Heart} iconColor="mint" />,
            },
            {
              term: 'Wir sind stolz auf das, was wir können, und was wir erreicht haben.',
              description: (
                <IconList
                  items={['Wir haben gemeistert', 'Wir sind überzeugt', 'Wir wollen', 'Wir können', '…']}
                  icon={Heart}
                  iconColor="mint"
                />
              ),
            },
            {
              term: 'Benenn Standpunkte (und begründe Meinungen).',
              description: (
                <IconList
                  items={['Wir wollen barrierefreie Produkte schaffen. Ein Web für alle ist ein besseres Web.']}
                  icon={Heart}
                  iconColor="mint"
                />
              ),
            },
          ]}
        />

        <Heading2 className="mt-16">Trau dich (bizli).</Heading2>
        <DescriptionList
          items={[
            {
              term: (
                <>
                  Gern mal frech, lustig, nerdy, schräg, ironisch – <Decoration>wenn’s wirklich passt.</Decoration>
                </>
              ),
              description: (
                <IconList items={['Hey! Hallo! Hier! ja genau, du. Klick doch mal hier.']} icon={Heart} iconColor="mint" />
              ),
            },
            {
              term: (
                <>
                  Setz <Decoration>gezielte</Decoration> Farbtupfer mit Umgangssprache oder Dialekt (Überschriften).
                </>
              ),
              description: (
                <IconList
                  items={['Wir stehen für digitale Lösungen und eine bizli andere Firmenkultur.']}
                  icon={Heart}
                  iconColor="mint"
                />
              ),
            },
            {
              term: 'Mal ein Emoji 👍 – aber im Zweifelsfall ohne.',
              description: <IconList items={['Die neue Website von XYZ ist live! 🚀']} icon={Heart} iconColor="mint" />,
              additionalDescription: (
                <IconList items={['Geiler Skitag!!! 😜😜😜🤣🤣🤣🍻🍻🍻🍻🍻']} icon={Cross} iconColor="apricot" />
              ),
            },
          ]}
        />

        <Heading2 className="mt-16">Komm auf den Punkt. Was willst du sagen?</Heading2>
        <DescriptionList
          items={[
            {
              term: 'Überleg dir, nach welcher Information die Leserin sucht. Auf welche Frage will sie eine Antwort? Das gehört nach oben.',
            },
            {
              term: '25-Wörter-Satz und 15-Zeilen-Absatz sind wie streitende Kinder: Sie müssen getrennt werden (sagen jedenfalls Doppelpunkt, Komma, Punkt und Gedankenstrich).',
            },
            {
              term: (
                <>
                  Lass die Füllwörter weg. Verliert der Satz dadurch etwas? Tipp:{' '}
                  <Link
                    href="https://web.archive.org/web/20210126114619/http://www.schreiblabor.com/fuellwoerter-test/"
                    newTab
                  >
                    Füllwörter-Test
                  </Link>
                </>
              ),
              description: (
                <IconList items={['Migipedia ist die Mutter aller Communities.']} icon={Heart} iconColor="mint" />
              ),
              additionalDescription: (
                <IconList
                  items={['Migipedia ist ja eigentlich fast sowas wie die Mutter aller Communities.']}
                  icon={Cross}
                  iconColor="apricot"
                />
              ),
            },
            {
              term: 'Der Nebensatz trägt nichts bei? Weg damit!',
              description: <IconList items={['Der Scrum Master sorgt dafür, dass …']} icon={Heart} iconColor="mint" />,
              additionalDescription: (
                <IconList
                  items={['Die Aufgabe des Scrum Masters ist es, dafür zu sorgen, dass …']}
                  icon={Cross}
                  iconColor="apricot"
                />
              ),
            },
            {
              term: 'Besser positiv als negativ formulieren.',
              description: (
                <IconList
                  items={['Wir möchten ein Produkt schaffen, dass du und deine Kunden lieben.']}
                  icon={Heart}
                  iconColor="mint"
                />
              ),
              additionalDescription: (
                <IconList
                  items={['Wir möchten nicht an dir oder deinen Kunden vorbei arbeiten.']}
                  icon={Cross}
                  iconColor="apricot"
                />
              ),
            },
            {
              term: 'Tanz nicht um den Brei: Lass die Modalverben einfach mal weg.',
              description: <IconList items={['Migipedia erlaubt den Nutzern …']} icon={Heart} iconColor="mint" />,
              additionalDescription: (
                <IconList items={['Den Nutzern soll erlaubt werden …']} icon={Cross} iconColor="apricot" />
              ),
            },
            {
              term: 'Benutz Verben im Aktiv.',
              description: <IconList items={['Das erlaubt den Nutzern …']} icon={Heart} iconColor="mint" />,
              additionalDescription: <IconList items={['Den Nutzern wird ermöglicht …']} icon={Cross} iconColor="apricot" />,
            },
          ]}
        />

        <Heading2 className="mt-16">Fass dich kurz.</Heading2>
        <DescriptionList
          items={[
            'Keine Angst vor kurzen Sätzen.',
            'Kurze Absätze: Yes, please! Besser 2x5 als 10 Zeilen.',
            'Höchstens 3 Teilsätze. Setz mal einen Punkt. Oder ein Komma, Strichkomma, Doppelpunkt, Gedankenstrich, Pünktlipünktlipünktli.',
          ]}
        />

        <Heading2 className="mt-16">Bring Abwechslung in den Text.</Heading2>
        <DescriptionList
          items={[
            {
              term: 'Kombinier verschiedene Formen wie Bilder, Blocktext, Aufzählungen, Zitate, Grafiken. Du kannst auch wichtige Stichwörter fett hervorheben (sparsam).',
            },
            {
              term: 'Vermeide mehr als 2 Wiederholungen im gleichen Absatz.',
              description: (
                <IconList
                  items={['Wir mögen Node. Es ist modern und kann auch Kaffee kochen.']}
                  icon={Heart}
                  iconColor="mint"
                />
              ),
              additionalDescription: (
                <IconList
                  items={['Node ist modern. Node kann auch Kaffee kochen. Wir mögen Node.']}
                  icon={Cross}
                  iconColor="apricot"
                />
              ),
            },
            {
              term: 'Die Satzlänge freut sich, wenn du mit ihr spielst.',
              description: (
                <IconList
                  items={[
                    "Sätze mit fünf Wörtern: super. Oder mit drei. Mit zwei. Aber vielleicht wär's dann mal wieder Zeit, den Rhythmus aufzubrechen.",
                  ]}
                  icon={Heart}
                  iconColor="mint"
                />
              ),
            },
            {
              term: 'Variier die Satzstellungen.',
              description: (
                <IconList items={['Wir mögen Software. Freiheit mögen wir auch.']} icon={Heart} iconColor="mint" />
              ),
              additionalDescription: (
                <IconList items={['Wir mögen Software. Und wir mögen Freiheit.']} icon={Cross} iconColor="apricot" />
              ),
            },
            {
              term: "Wie wär's, das Verb mal auszulassen?",
              description: <IconList items={['Ideen: immer gern!']} icon={Heart} iconColor="mint" />,
              additionalDescription: <IconList items={['Wir stehen auf Ideen.']} icon={Cross} iconColor="apricot" />,
            },
          ]}
        />

        <Heading2 className="mt-16">Mitgemeint ist gut gemeint, eingeschlossen ist besser.</Heading2>
        <DescriptionList
          items={[
            {
              term: (
                <>
                  Überleg dir, ob sich alle angesprochen fühlen, die du ansprechen willst. Es gibt viele Möglichkeiten, die
                  sich auch problemlos kombinieren lassen. Sieh z.B.{' '}
                  <Link href="https://www.genderleicht.de/" newTab>
                    Genderleicht
                  </Link>
                </>
              ),
              description: <IconList items={['Nutzer*innen', 'Mitarbeitende']} icon={Heart} iconColor="mint" />,
            },
            {
              term: "Formulier's um!",
              description: <IconList items={['wer das weiss …', 'alle']} icon={Heart} iconColor="mint" />,
              additionalDescription: <IconList items={['Kenner', 'jeder']} icon={Cross} iconColor="apricot" />,
            },
            {
              term: 'In Beispielen und Aufzählungen kannst du auch abwechseln.',
              description: <IconList items={['Designer und Entwicklerinnen']} icon={Heart} iconColor="mint" />,
            },
          ]}
        />

        <Heading2 className="mt-16">Hol Feedback.</Heading2>
        <DescriptionList
          items={[
            <>
              Lass ein{' '}
              <Link href="https://wortliga.de/textanalyse/" newTab>
                Textanalyse-Tool
              </Link>{' '}
              drüberlaufen (prüft auf Kürze, direkte Sprache, Abwechslung).
            </>,
            'Frag einen Lieblingsmensch, falls in der Zielgruppe oder genug flexibel im Chöpfli.',
            'Frag das Lingologie-Department.',
            "Wenn's etwas Zeit braucht, denk dran: Es lohnt sich. Smarta loves you! 🐄😘",
          ]}
        />
      </PageSection>
    </main>
  </LandingPage>
);

export default Sprache;
