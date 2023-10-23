/* eslint-disable react/forbid-component-props */
import { merge, useSSRSafeRandomNumber } from '@smartive/guetzli';
import { AnimatePresence, motion } from 'framer-motion';
import JSConfetti from 'js-confetti';
import { GetStaticProps, NextPage } from 'next';
import NextImage, { StaticImageData } from 'next/legacy/image';
import NextLink from 'next/link';
import { FC, ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Scroll } from 'scrollex';
import peterMoreno from '../../../public/images/anniversary/2013/peter-moreno.jpg';
import boyband from '../../../public/images/anniversary/2014/boyband.png';
import bungee from '../../../public/images/anniversary/2014/bungee.png';
import office from '../../../public/images/anniversary/2014/office.png';
import docker from '../../../public/images/anniversary/2015/docker.jpg';
import fest from '../../../public/images/anniversary/2015/fest.jpg';
import moreno2015 from '../../../public/images/anniversary/2015/moreno.jpg';
import zermatt2015 from '../../../public/images/anniversary/2015/zermatt.png';
import bravoThilo from '../../../public/images/anniversary/2016/bravo-thilo.png';
import damianPeter from '../../../public/images/anniversary/2016/damian-peter.jpg';
import newOffice from '../../../public/images/anniversary/2016/new-office.png';
import sanfran from '../../../public/images/anniversary/2016/sanfran.png';
import stockDominique from '../../../public/images/anniversary/2016/stock-dominique.jpg';
import brewdog from '../../../public/images/anniversary/2017/brewdog.png';
import jsConf from '../../../public/images/anniversary/2017/js-conf.gif';
import newBrand from '../../../public/images/anniversary/2017/new-brand.png';
import stockholm from '../../../public/images/anniversary/2017/stockholm.jpg';
import zermatt2017 from '../../../public/images/anniversary/2017/zermatt.png';
import peter30 from '../../../public/images/anniversary/2018/30.jpeg';
import aescher from '../../../public/images/anniversary/2018/aescher.png';
import bubblesoccer from '../../../public/images/anniversary/2018/bubblesoccer.png';
import burger from '../../../public/images/anniversary/2018/burger.jpg';
import front from '../../../public/images/anniversary/2018/front.jpg';
import wmStudio from '../../../public/images/anniversary/2018/wm-studio.png';
import chiefSeniorSolutionDesigner from '../../../public/images/anniversary/2019/chief-senior-solution-designer.jpg';
import ciaoSmartive from '../../../public/images/anniversary/2019/ciao-smartive.png';
import hoiSmartive from '../../../public/images/anniversary/2019/hoi-smartive.png';
import huette from '../../../public/images/anniversary/2019/huette.jpg';
import whatAview from '../../../public/images/anniversary/2019/what-a-view.jpg';
import doeme from '../../../public/images/anniversary/2020/doeme.jpeg';
import fire from '../../../public/images/anniversary/2020/fire.png';
import skifoahn from '../../../public/images/anniversary/2020/skifoahn.jpeg';
import skitag2 from '../../../public/images/anniversary/2020/skitag.jpeg';
import bootle from '../../../public/images/anniversary/2021/bootle.jpeg';
import cultureday from '../../../public/images/anniversary/2021/cultureday.jpg';
import damian from '../../../public/images/anniversary/2021/damian.jpeg';
import ibiza from '../../../public/images/anniversary/2021/ibiza.jpeg';
import mirco from '../../../public/images/anniversary/2021/mirco.jpg';
import moreno2021 from '../../../public/images/anniversary/2021/moreno.jpeg';
import robert from '../../../public/images/anniversary/2021/robert.jpeg';
import gruppafoettali from '../../../public/images/anniversary/2022/gruppafoettali.jpg';
import kuhbar from '../../../public/images/anniversary/2022/kuhbar.jpeg';
import rammstein from '../../../public/images/anniversary/2022/rammstein.jpg';
import skitag from '../../../public/images/anniversary/2022/skitag.jpg';
import stadtfueahrig from '../../../public/images/anniversary/2022/stadtfueahrig.jpeg';
import { ParallaxBlob } from '../../components/10/ParallaxBlob';
import { Avatar } from '../../components/10/avatar';
import { BlobVariants } from '../../components/10/blob';
import { Button } from '../../components/10/button';
import { Card } from '../../components/10/card';
import { Heading } from '../../components/10/heading';
import { TenHead, keyframes } from '../../components/10/ten-head';
import { Text } from '../../components/10/text';
import { Employee, getAllEmployees } from '../../data/employees';
import { Link } from '../../elements/link';

let confetti;
const activeConfettiCannon = () => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (!mediaQuery.matches) {
    if (typeof confetti !== 'object') {
      confetti = new JSConfetti();
    }

    confetti.addConfetti({
      confettiColors: ['#F8935A', '#7DDDD1', '#6986E8'],
    });
  }
};

type Props = {
  employees: Employee[];
};

const Ten: NextPage<Props> = ({ employees }) => {
  const [visibleYear, setVisibleYear] = useState<number>(0);
  const [avatars, setAvatars] = useState(
    employees.filter(({ start }) => start === 2012).filter(({ closeup }) => closeup !== ''),
  );

  useEffect(() => {
    const team = employees
      .filter(({ start }) => {
        return start <= visibleYear;
      })
      .filter(({ closeup }) => closeup !== '')
      .sort((a, b) => a.start - b.start);

    setAvatars(team);
  }, [visibleYear]);

  return (
    <>
      <TenHead />
      <main className="relative overflow-hidden bg-black text-white-100">
        <Scroll.Section>
          <Container inViewChange={(inView) => inView && setVisibleYear(0)}>
            <ParallaxBlob variant={BlobVariants.Two} className="absolute -bottom-72 -left-96 z-0 w-72" />

            <div className="relative z-10 col-span-12 mb-12 mt-6 lg:col-span-6 lg:mb-24 lg:mt-0">
              <Heading level="3">
                Zäh. Zeh. Dieci. Zehn. ZEHN! Schon so viele Jahre gibts uns jetzt. Wir brauchen alle Finger BEIDER Hände! 👐
                Schon bitz verrückt. Aber auch der richtige Zeitpunkt, um mal zurückzuschauen. Wenn du auch Lust darauf hast
                – scroll weiter!
              </Heading>
            </div>

            <GalleryCard />
          </Container>
        </Scroll.Section>

        <Scroll.Section>
          <Container inViewChange={(inView) => inView && setVisibleYear(2012)}>
            <ParallaxBlob variant={BlobVariants.Three} className="absolute -right-48 top-16 z-0" />

            <div className="relative z-10 col-span-12 lg:col-span-8 lg:col-start-2">
              <Header side="left" year="2012">
                <Heading level="3">🧡 Jöö, es ist ein smartive!</Heading>
              </Header>
              <Text>
                Am Anfang steht die Haas & Manser Apricode, die später im selben Jahr zur smartive wird. Schon damals ist das
                Ziel: Eine Webagentur, die sowohl Kund*innen als auch Mitarbeitende glücklich macht. Dass wir 10 Jahre später
                so gross sind, hätten wir uns nicht erträumt.
              </Text>

              <NextImage
                src="/images/anniversary/2012/dropbox.svg"
                alt="Dropbox Screenshot der zeigt, das Thilo und Peter zusammen den Ordner 'apricode' teilen."
                width="768"
                height="433"
                objectFit="contain"
              />
            </div>
          </Container>
        </Scroll.Section>

        <Scroll.Section>
          <Container
            className="relative grid-rows-[1fr,200px] lg:grid-rows-3"
            inViewChange={(inView) => inView && setVisibleYear(2013)}
          >
            <ParallaxBlob variant={BlobVariants.Four} className="absolute -left-64 -top-56 z-0" />

            <div className="relative z-10 col-span-12 text-right lg:col-span-8 lg:col-start-4">
              <Header side="right" year="2013">
                <Heading level="3">Ein Jahr alt und gut zu Fuss</Heading>
              </Header>
              <Text>
                Die Firma macht langsam die ersten Schritte und sagt die ersten Worte. Zum Beispiel “Moreno, willsch nöd zu
                üs cho?”. Das macht Moreno dann auch. Wir beziehen auch unser erstes Büro an der Winterthurerstrasse in
                Zürich.
              </Text>
            </div>

            <div className="relative col-span-12 lg:col-span-8 lg:col-start-4 lg:row-span-2">
              <ParallaxImage effect="minimal" src={peterMoreno} alt="Moreno und Peter" />
            </div>
          </Container>
        </Scroll.Section>

        <Scroll.Section>
          <Container
            className="grid-rows-[1fr,200px,200px] lg:grid-rows-5"
            inViewChange={(inView) => inView && setVisibleYear(2014)}
          >
            <ParallaxBlob variant={BlobVariants.Two} className="absolute -right-24 top-72 z-0 lg:-right-72" />

            <div className="relative z-10 col-span-12 lg:col-span-8 lg:col-start-2">
              <Header side="left" year="2014">
                <Heading level="3">Dasselbe nochmal!</Heading>
              </Header>
              <Text>
                Wir wachsen um eine Person und zügeln in ein Büro! Moment … haben wir das nicht schon letztes Jahr gemacht?
                🤔 DOCH! Aber meh isch meh. Seit diesem Jahr ist auch die Migros unsere Kundin. Migipedia ist von Anfang an
                und bis heute ein Herzensprojekt. 🧡
              </Text>
            </div>
            <div className="relative col-span-12 lg:col-span-8 lg:col-start-2 lg:row-span-2 lg:row-start-2">
              <ParallaxImage
                effect="heavy"
                src={boyband}
                alt="Moreno, Thilo, Marco und Peter auf einem der ersten Firmenfotos. Sie sehen aus wie eine Boyband."
              />
            </div>
            <div className="relative hidden lg:col-span-3 lg:col-start-10 lg:row-span-2 lg:row-start-3 lg:block">
              <ParallaxImage src={bungee} alt="Peter bei der ersten Generalversammlung am Bungee Jumping." />
            </div>
            <div className="relative col-span-12 lg:col-span-6 lg:col-start-4 lg:row-span-2 lg:row-start-4">
              <ParallaxImage src={office} alt="Moreno sitzt in einem der ersten smartive Büros." />
            </div>
          </Container>
        </Scroll.Section>

        <Scroll.Section>
          <Container
            className="grid-rows-[1fr,200px,200px,200px,200px] lg:grid-rows-4"
            inViewChange={(inView) => inView && setVisibleYear(2015)}
          >
            <div className="relative z-10 col-span-12 text-right lg:col-span-8 lg:col-start-4">
              <Header side="right" year="2015">
                <Heading level="3">Viele erste Male</Heading>
              </Header>
              <Text>
                Noch mehr smarties stossen hinzu. Es gibt die ersten Aktienverkäufe und Sommerfeste und wir halten die ersten
                Vorträge. Christoph will eigentlich nur einen Tag pro Woche bei smartive arbeiten, entscheidet sich spontan
                aber doch für eine Vollzeitstelle.
              </Text>
            </div>
            <div className="relative col-span-12 lg:col-span-3 lg:col-start-3 lg:row-start-2">
              <ParallaxImage src={docker} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-3 lg:col-start-6 lg:row-start-2">
              <ParallaxImage src={fest} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-3 lg:col-start-9 lg:row-start-2">
              <ParallaxImage src={moreno2015} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-start-6 lg:row-span-2 lg:row-start-3">
              <ParallaxImage src={zermatt2015} alt="" />
            </div>
          </Container>
        </Scroll.Section>

        <Scroll.Section>
          <Container
            className="grid-rows-[1fr,200px,200px,300px,200px,200px] lg:grid-rows-6"
            inViewChange={(inView) => inView && setVisibleYear(2016)}
          >
            <ParallaxBlob variant={BlobVariants.Five} className="absolute -right-24 -top-72 z-0" />
            <ParallaxBlob variant={BlobVariants.Four} className="absolute bottom-24 left-24 z-0" />

            <div className="relative z-10 col-span-12 lg:col-span-8 lg:col-start-2">
              <Header side="left" year="2016">
                <Heading level="3">Jetzt gilts ernst</Heading>
              </Header>
              <Text>
                Dieses Mal wächst smartive gleich um mehrere Nasen. Eine fragt vor der Unterschrift: “Meineders ernst?” – im
                Rückblick, lieber Dominique: ja, wir meinen’s ernst. Und weil wir gerne zügeln, tun wir das gleich nochmals.
                Und planen dazu auch noch selber den Ausbau unseres Büros — yeah! 🥳
              </Text>
            </div>
            <div className="relative col-span-12 lg:col-span-6 lg:col-start-2 lg:row-span-2">
              <ParallaxImage src={stockDominique} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-6 lg:col-start-2 lg:row-span-1">
              <ParallaxImage src={bravoThilo} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-5 lg:col-start-8 lg:row-span-3 lg:row-start-2">
              <ParallaxImage src={sanfran} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-6 lg:col-start-2 lg:row-span-2">
              <ParallaxImage src={damianPeter} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-6 lg:col-start-8 lg:row-span-2">
              <ParallaxImage src={newOffice} alt="" />
            </div>
          </Container>
        </Scroll.Section>

        <Scroll.Section>
          <Container
            className="grid-rows-[1fr,250px,250px,200px,250px,200px] lg:grid-rows-4"
            inViewChange={(inView) => inView && setVisibleYear(2017)}
          >
            <ParallaxBlob variant={BlobVariants.Two} className="absolute -left-24 -top-12 z-0" />
            <ParallaxBlob variant={BlobVariants.Six} className="absolute -right-24 top-1/2 z-0" />

            <div className="relative z-10 col-span-12 text-right lg:col-span-8 lg:col-start-4">
              <Header side="right" year="2017">
                <Heading level="3">Es weihnachtet</Heading>
              </Header>
              <Text>
                Auch 2017 kommen neue smarties dazu. Wir reisen ziemlich herum: Stockholm, Berlin, Zermatt. War alles toll.
                Am Freitag vor Weihnachten haben wir aber keine Lust mehr zu arbeiten. Daher kaufen wir als
                Kurzschlussreaktion eine Playstation 4 mit FIFA. Super. Jetzt haben wir ein FIFA-Sucht-Problem. Das geht
                soweit, dass wir eine App entwickeln, in welcher wir sämtliche Ergebnisse tracken und die smarties mit einem
                TrueSkill-Ranking einordnen...
              </Text>
            </div>
            <div className="relative col-span-12 lg:col-span-8 lg:row-span-2">
              <ParallaxImage src={stockholm} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-3 lg:col-start-9 lg:row-start-2">
              <ParallaxImage src={zermatt2017} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-3 lg:col-start-9 lg:row-start-3">
              <ParallaxImage src={newBrand} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-4 lg:col-start-2">
              <ParallaxImage src={jsConf} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-5 lg:col-start-6">
              <ParallaxImage src={brewdog} alt="" />
            </div>
          </Container>
        </Scroll.Section>

        <Scroll.Section>
          <Container
            className="grid-rows-[1fr,250px,200px,200px,300px,300px,200px] lg:grid-rows-[2fr,1fr,1fr,2fr,2fr,1fr,1fr]"
            inViewChange={(inView) => inView && setVisibleYear(2018)}
          >
            <ParallaxBlob variant={BlobVariants.Five} className="absolute -left-24 top-1/3 z-0" />
            <ParallaxBlob variant={BlobVariants.Two} className="absolute -right-72 top-2/3 z-0" />

            <div className="relative z-10 col-span-12 lg:col-span-8 lg:col-start-2">
              <Header side="left" year="2018">
                <Heading level="3">3 Meter im Abseits du W…</Heading>
              </Header>
              <Text>
                Juhu! Endlich auch Praktikanten! Die sind auch heute noch da. Mit dem Advice Process machen wir unsere ersten
                Schritte in Richtung New Work. Vorträge an der Front Conference und am Digital Festival runden das Jahr ab.
                Thilo sucht auf Slack <SlackReaction>👍</SlackReaction> als Reaction, erwischt aber{' '}
                <SlackReaction>🥦</SlackReaction>. Weils alle gesehen haben, hat smartive seither einen ausgeprägten
                Brokkoli-Fetisch. Und: Wir schaffens ins Radio…
              </Text>
              <audio className="mx-auto" controls src="/jrz.mp3">
                Dein Browser kann leider keine Musik wiedergeben 😢
              </audio>
            </div>

            <div className="relative col-span-12 lg:col-span-5 lg:col-start-2 lg:row-span-2">
              <ParallaxImage src={peter30} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-5 lg:row-span-2">
              <ParallaxImage src={front} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-7 lg:col-start-2">
              <ParallaxImage src={bubblesoccer} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-4 lg:row-span-2">
              <ParallaxImage effect="heavy" src={aescher} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-4 lg:col-start-3 lg:row-span-2">
              <ParallaxImage effect="minimal" src={burger} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-6 lg:row-span-4">
              <ParallaxImage src={wmStudio} alt="" />
            </div>
          </Container>
        </Scroll.Section>

        <Scroll.Section>
          <Container
            className="grid-rows-[1fr,200px,200px,200px,200px] lg:grid-rows-5"
            inViewChange={(inView) => inView && setVisibleYear(2019)}
          >
            <ParallaxBlob variant={BlobVariants.One} className="absolute -left-72 top-0 z-0" />
            <ParallaxBlob variant={BlobVariants.Three} className="absolute -bottom-72 -right-24 z-0" />

            <div className="relative z-10 col-span-12 text-right lg:col-span-8 lg:col-start-4">
              <Header side="right" year="2019">
                <Heading level="3">Das Kind mag Brokkoli!</Heading>
              </Header>
              <Text>
                ZweitausendALLESNEUnzehn! Neue Mitarbeitende, neues Büro, neu mit Code Retreat und: Babies! – Weil’s so schön
                ist, gleich drei 🥰 Am Best of Swiss Apps bekommen wir Silber und Bronze für ein Kassensystem auf dem
                Smartphone. Und weil wir Brokkolis wirklich mögen, bekommen wir zum Sommerfest eine Kiste voller Brokkolis
                geschenkt. Die wird am selben Abend auch gleich geklaut.
              </Text>
            </div>

            <div className="relative col-span-12 lg:col-span-10 lg:col-start-2 lg:row-span-2">
              <ParallaxImage effect="minimal" src={huette} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-5 lg:col-start-2">
              <ParallaxImage src={chiefSeniorSolutionDesigner} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-5">
              <ParallaxImage src={whatAview} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-5 lg:col-start-2">
              <ParallaxImage src={ciaoSmartive} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-5">
              <ParallaxImage src={hoiSmartive} alt="" />
            </div>
          </Container>
        </Scroll.Section>

        <Scroll.Section>
          <Container
            className="grid-rows-[1fr,200px,200px,250px] lg:grid-rows-[1fr,1.5fr,1fr,1fr,1fr]"
            inViewChange={(inView) => inView && setVisibleYear(2020)}
          >
            <div className="relative z-10 col-span-12 lg:col-span-8 lg:col-start-2">
              <Header side="left" year="2020">
                <Heading level="3">Hausarrest</Heading>
              </Header>
              <Text>
                2020… Was war da nochmal? 🤔 Jedenfalls führen wir das Kulturprozent ein und arbeiten an unseren Werten,
                entwickeln eine transparente und faire Lohnformel, sind Aufsteiger des Jahres bei Best of Swiss Web und
                arbeiten viel von zu Hause 😒
              </Text>
            </div>

            <div className="relative col-span-12 lg:col-span-6 lg:col-start-2 lg:row-start-2">
              <ParallaxImage effect="heavy" src={fire} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-5 lg:col-start-8 lg:row-start-2">
              <ParallaxImage effect="heavy" src={skifoahn} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-8 lg:col-start-2 lg:row-span-3 lg:row-start-3">
              <ParallaxImage src={skitag2} alt="" />
            </div>
            <div className="relative lg:col-span-3 lg:col-start-10 lg:row-span-2">
              <ParallaxImage effect="minimal" src={doeme} alt="" />
            </div>
          </Container>
        </Scroll.Section>

        <Scroll.Section>
          <Container
            className="grid-rows-[1fr,200px,300px,300px,300px,250px,300px,250px] lg:grid-rows-4"
            inViewChange={(inView) => inView && setVisibleYear(2021)}
          >
            <ParallaxBlob variant={BlobVariants.Two} className="absolute -left-72 top-36 z-0" />
            <ParallaxBlob variant={BlobVariants.Seven} className="absolute left-24 top-72 z-0" />

            <div className="relative z-10 col-span-12 text-right lg:col-span-8 lg:col-start-4">
              <Header side="right" year="2021">
                <Heading level="3">Frische Kleidung ist wichtig</Heading>
              </Header>
              <Text>
                MEHR LEUTE! VIELE LEUTE! GROSSE MEUTE! Wir sehen uns (viel zu) selten, gewinnen ein paar Awards – unter
                anderem Gold in Usability am{' '}
                <Link href="https://www.netzwoche.ch/news/2021-09-06/gold-fuer-migros-community-in-der-kategorie-usability">
                  BOSW
                </Link>{' '}
                – halten unseren ersten richtigen Talk an der Front Conference und stossen in die Top 10 der
                5-Jahres-Bestenliste der BOSW-Awards vor. Und weil wir uns nicht sehen können, wollen wir zumindest im
                Internet cool aussehen. Daher gibts ein komplettes Rebranding.
              </Text>
            </div>

            <div className="relative col-span-12 lg:col-span-3 lg:col-start-3">
              <ParallaxImage src={bootle} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-3 lg:col-start-6">
              <ParallaxImage src={damian} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-3 lg:col-start-9">
              <ParallaxImage src={ibiza} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-3 lg:col-start-3 lg:row-start-3">
              <ParallaxImage src={mirco} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-3 lg:col-start-6 lg:row-start-3">
              <ParallaxImage src={moreno2021} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-3 lg:col-start-9 lg:row-start-3">
              <ParallaxImage src={robert} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-span-9 lg:col-start-3 lg:row-start-4">
              <ParallaxImage src={cultureday} alt="" />
            </div>
          </Container>
        </Scroll.Section>

        <Scroll.Section>
          <Container
            className="grid-rows-[1fr,250px,250px,250px,250px,250px] lg:grid-rows-5"
            inViewChange={(inView) => inView && setVisibleYear(2022)}
          >
            <ParallaxBlob variant={BlobVariants.Four} className="absolute -right-96 bottom-0 z-0" />

            <div className="relative z-10 col-span-12 lg:col-span-8 lg:col-start-2">
              <Header side="left" year="2022">
                <Heading level="3">10! Z-E-H-N!</Heading>
              </Header>
              <Text>
                Verrückter Start ins Jahr. Unsere Supply Chain-App für die Migros wird auch nach drei Jahren noch mit Awards
                ausgezeichnet und wir können endlich wieder zusammen Skifahren. Und wir wachsen und wachsen und wachsen und …
                mittlerweile sind wir {employees.length} Mitarbeitende mit total 11 Kindern! 😱 V-E-R-R-Ü-C-K-T!
              </Text>
            </div>

            <div className="relative col-span-12 lg:col-span-8 lg:col-start-2 lg:row-span-2">
              <ParallaxImage effect="minimal" src={gruppafoettali} alt="Alle smarties beim Retro-Brunch." />
            </div>

            <div className="relative col-span-12 lg:col-span-6 lg:col-start-10">
              <ParallaxImage effect="minimal" src={stadtfueahrig} alt="Stadtführung in Zürich." />
            </div>

            <div className="relative col-span-12 lg:col-span-6 lg:col-start-10 lg:row-start-3">
              <ParallaxImage effect="minimal" src={rammstein} alt="Gruppenfoto am Rammstein-Konzert." />
            </div>

            <div className="relative col-span-12 lg:col-span-8 lg:col-start-3 lg:row-span-2 lg:row-start-4">
              <ParallaxImage effect="minimal" src={skitag} alt="Skitag in Arosa." />
            </div>

            <div className="relative col-span-12 lg:col-span-4 lg:col-start-11 lg:row-start-4">
              <ParallaxImage effect="minimal" src={kuhbar} alt="Die Kuhbar hat allen ganz viel Spass gemacht." />
            </div>
          </Container>
        </Scroll.Section>

        <Scroll.Section>
          <Container>
            <div className="col-span-12 lg:col-span-6 lg:col-start-4">
              <Text>
                Und schon – PUFF! 💨 – sind 10 Jahre um. Wir sind aber noch lange nicht fertig. Mit New Work haben wir erst
                gerade gestartet, und unsere Speedboats werden immer innovativer. Das Ziel bleibt aber gleich: Eine Agentur,
                die Kund*innen und Mitarbeitende glücklich macht. ❤️
              </Text>
            </div>
            <GalleryCard />
          </Container>
        </Scroll.Section>
      </main>

      <div className="fixed bottom-0 z-50 hidden w-full py-4 lg:block">
        {visibleYear !== null && (
          <div className="mx-auto flex max-w-screen-xl justify-center text-[0px]">
            <motion.div
              layout
              className="inline-flex flex-row justify-center rounded-full bg-white-200 px-[1.3rem] py-1 shadow-sm"
            >
              <AnimatePresence>
                {avatars.map(({ name, closeup }) => (
                  <NextLink href={`/team#${name}`} passHref key={name}>
                    <motion.a
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ scale: 1.3, y: -10, padding: '0px 1.5rem' }}
                      className="-ml-3 -mr-3 block overflow-visible hover:z-50"
                    >
                      <Avatar src={closeup} />
                    </motion.a>
                  </NextLink>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
        <div className="fixed bottom-5 right-5 scale-100 rounded-full bg-conic-gradient p-1 shadow-sm transition-transform hover:rotate-6 hover:scale-110">
          <button
            className=" bg-white flex h-12 w-12 items-center justify-center rounded-full bg-white-200"
            onClick={activeConfettiCannon}
          >
            🎉
          </button>
        </div>
      </div>
    </>
  );
};

export default Ten;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const employees = await getAllEmployees();

  return {
    props: {
      employees,
    },
    revalidate: 3600,
  };
};

const Container: FC<{
  children: ReactNode;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inViewChange?: any;
}> = ({ children, className = '', inViewChange }) => {
  const { ref } = useInView({ onChange: inViewChange, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className={merge([
        'relative mx-auto my-24 grid w-11/12 max-w-screen-xl grid-cols-12 gap-4 md:my-32 md:gap-6 lg:my-56 lg:gap-8',
        className,
      ])}
    >
      {children}
    </section>
  );
};

const SlackReaction: FC<{ children: ReactNode }> = ({ children }) => (
  <kbd className="inline-block scale-100 transform-gpu rounded bg-[#424242] px-4 transition-transform hover:scale-105">
    {children}
  </kbd>
);

const Header: FC<{
  children: ReactNode;
  side: 'right' | 'left';
  year: string;
}> = ({ children, year, side = 'left' }) => {
  return (
    <header className="relative">
      <div
        className={merge([
          'flex h-full items-center 2xl:absolute',

          side === 'left' ? 'flex-row 2xl:-left-48' : 'flex-row-reverse 2xl:-right-48',
        ])}
      >
        <span className={merge(['h-0.5 w-16 bg-white-100', side === 'left' ? 'mr-4' : 'ml-4'])} />
        <span className="text-sm font-bold lg:text-base">{year}</span>
      </div>
      {children}
    </header>
  );
};

const ParallaxImage: FC<{
  alt: string;
  src: StaticImageData;
  effect?: 'heavy' | 'default' | 'minimal';
}> = ({ alt, src }) => {
  const bgClasses = ['bg-apricot-200', 'bg-cornflower-200', 'bg-mint-200'];
  const colorIndex = useSSRSafeRandomNumber(0, bgClasses.length - 1);
  const parallaxIndex = useSSRSafeRandomNumber(0, 1);

  return (
    <div className="relative z-20 h-full w-full overflow-hidden rounded">
      <Scroll.Item keyframes={keyframes.image[parallaxIndex]} className="image-overflow-override relative h-full w-full">
        <NextImage
          lazyBoundary="400px"
          className={`relative z-20 scale-125 rounded transition ${bgClasses[colorIndex]}`}
          src={src}
          alt={alt}
          objectFit="cover"
          objectPosition="center center"
          layout="fill"
        />
      </Scroll.Item>
    </div>
  );
};

const GalleryCard = () => {
  return (
    <div className="relative z-10 col-span-12 lg:col-span-8 lg:col-start-3">
      <Card>
        <Heading level="3">Das Jubiläumsfest ist schon vorbei. 🥲</Heading>
        <Text>
          Aber: nach der Party ist vor der Party! Falls du Gründe brauchst das nächste Mal dabei zu sein, gibts hier ein paar
          Partypics.
        </Text>
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="shrink">
            <Button as="a" href="/10/fotos" onMouseEnter={activeConfettiCannon}>
              📸 Impressionen
            </Button>
          </div>
          <div className="shrink">
            <Button as="a" href="/10/fotobox" onMouseEnter={activeConfettiCannon}>
              🤡 Fotobox
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
