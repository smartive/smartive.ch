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
import { Avatar } from '../../components/10/avatar';
import { BlobVariants } from '../../components/10/blob';
import { Button } from '../../components/10/button';
import { Card } from '../../components/10/card';
import { Heading } from '../../components/10/heading';
import { ParallaxBlob } from '../../components/10/ParallaxBlob';
import { keyframes, TenHead } from '../../components/10/ten-head';
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
  const [visibleYear, setVisibleYear] = useState<number>(null);
  const [avatars, setAvatars] = useState(
    employees.filter(({ start }) => start === 2012).filter(({ closeup }) => closeup !== '')
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
      <main id="pageContent" className="relative bg-black text-white-100 overflow-hidden">
        <Scroll.Section>
          <Container inViewChange={(inView) => inView && setVisibleYear(null)}>
            <ParallaxBlob variant={BlobVariants.Two} className="absolute w-72 -bottom-72 -left-96 z-0" />

            <div className="relative z-10 col-span-12 lg:col-span-6 mt-6 lg:mt-0 mb-12 lg:mb-24">
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
            <ParallaxBlob variant={BlobVariants.Three} className="absolute top-16 -right-48 z-0" />

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
            <ParallaxBlob variant={BlobVariants.Four} className="absolute -top-56 -left-64 z-0" />

            <div className="relative z-10 col-span-12 lg:col-span-8 lg:col-start-4 text-right">
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
            <ParallaxBlob variant={BlobVariants.Two} className="absolute top-72 -right-24 lg:-right-72 z-0" />

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
            <div className="relative col-span-12 lg:row-span-2 lg:col-span-8 lg:row-start-2 lg:col-start-2">
              <ParallaxImage
                effect="heavy"
                src={boyband}
                alt="Moreno, Thilo, Marco und Peter auf einem der ersten Firmenfotos. Sie sehen aus wie eine Boyband."
              />
            </div>
            <div className="relative hidden lg:block lg:col-span-3 lg:row-span-2 lg:row-start-3 lg:col-start-10">
              <ParallaxImage src={bungee} alt="Peter bei der ersten Generalversammlung am Bungee Jumping." />
            </div>
            <div className="relative col-span-12 lg:col-span-6 lg:row-start-4 lg:row-span-2 lg:col-start-4">
              <ParallaxImage src={office} alt="Moreno sitzt in einem der ersten smartive Büros." />
            </div>
          </Container>
        </Scroll.Section>

        <Scroll.Section>
          <Container
            className="grid-rows-[1fr,200px,200px,200px,200px] lg:grid-rows-4"
            inViewChange={(inView) => inView && setVisibleYear(2015)}
          >
            <div className="relative z-10 col-span-12 lg:col-span-8 lg:col-start-4 text-right">
              <Header side="right" year="2015">
                <Heading level="3">Viele erste Male</Heading>
              </Header>
              <Text>
                Noch mehr smarties stossen hinzu. Es gibt die ersten Aktienverkäufe und Sommerfeste und wir halten die ersten
                Vorträge. Christoph will eigentlich nur einen Tag pro Woche bei smartive arbeiten, entscheidet sich spontan
                aber doch für eine Vollzeitstelle.
              </Text>
            </div>
            <div className="relative col-span-12 lg:col-start-3 lg:col-span-3 lg:row-start-2">
              <ParallaxImage src={docker} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-start-6 lg:col-span-3 lg:row-start-2">
              <ParallaxImage src={fest} alt="" />
            </div>
            <div className="relative col-span-12 lg:col-start-9 lg:col-span-3 lg:row-start-2">
              <ParallaxImage src={moreno2015} alt="" />
            </div>
            <div className="relative col-span-12 lg:row-start-3 lg:row-span-2 lg:col-start-6">
              <ParallaxImage src={zermatt2015} alt="" />
            </div>
          </Container>
        </Scroll.Section>

        <Scroll.Section>
          <Container
            className="grid-rows-[1fr,200px,200px,300px,200px,200px] lg:grid-rows-6"
            inViewChange={(inView) => inView && setVisibleYear(2016)}
          >
            <ParallaxBlob variant={BlobVariants.Five} className="absolute -top-72 -right-24 z-0" />
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
            <div className="relative col-span-12 lg:col-start-2 lg:col-span-6 lg:row-span-1">
              <ParallaxImage src={bravoThilo} alt="" />
            </div>
            <div className="relative col-span-12 lg:row-start-2 lg:col-span-5 lg:col-start-8 lg:row-span-3">
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
            <ParallaxBlob variant={BlobVariants.Two} className="absolute -top-12 -left-24 z-0" />
            <ParallaxBlob variant={BlobVariants.Six} className="absolute top-1/2 -right-24 z-0" />

            <div className="relative z-10 col-span-12 lg:col-span-8 lg:col-start-4 text-right">
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
            <ParallaxBlob variant={BlobVariants.Five} className="absolute top-1/3 -left-24 z-0" />
            <ParallaxBlob variant={BlobVariants.Two} className="absolute top-2/3 -right-72 z-0" />

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

            <div className="col-span-12 lg:col-span-5 lg:col-start-2 relative lg:row-span-2">
              <ParallaxImage src={peter30} alt="" />
            </div>
            <div className="col-span-12 lg:col-span-5 relative lg:row-span-2">
              <ParallaxImage src={front} alt="" />
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-2 relative">
              <ParallaxImage src={bubblesoccer} alt="" />
            </div>
            <div className="col-span-12 lg:col-span-4 lg:row-span-2 relative">
              <ParallaxImage effect="heavy" src={aescher} alt="" />
            </div>
            <div className="col-span-12 lg:col-span-4 relative lg:col-start-3 lg:row-span-2">
              <ParallaxImage effect="minimal" src={burger} alt="" />
            </div>
            <div className="col-span-12 lg:col-span-6 relative lg:row-span-4">
              <ParallaxImage src={wmStudio} alt="" />
            </div>
          </Container>
        </Scroll.Section>

        <Scroll.Section>
          <Container
            className="grid-rows-[1fr,200px,200px,200px,200px] lg:grid-rows-5"
            inViewChange={(inView) => inView && setVisibleYear(2019)}
          >
            <ParallaxBlob variant={BlobVariants.One} className="absolute top-0 -left-72 z-0" />
            <ParallaxBlob variant={BlobVariants.Three} className="absolute -bottom-72 -right-24 z-0" />

            <div className="relative z-10 col-span-12 lg:col-span-8 lg:col-start-4 text-right">
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

            <div className="col-span-12 relative lg:row-span-2 lg:col-span-10 lg:col-start-2">
              <ParallaxImage effect="minimal" src={huette} alt="" />
            </div>
            <div className="col-span-12 lg:col-span-5 relative lg:col-start-2">
              <ParallaxImage src={chiefSeniorSolutionDesigner} alt="" />
            </div>
            <div className="col-span-12 lg:col-span-5 relative">
              <ParallaxImage src={whatAview} alt="" />
            </div>
            <div className="col-span-12 lg:col-span-5 relative lg:col-start-2">
              <ParallaxImage src={ciaoSmartive} alt="" />
            </div>
            <div className="col-span-12 lg:col-span-5 relative">
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
            <div className="relative col-span-12 lg:col-span-8 lg:col-start-2 lg:row-start-3 lg:row-span-3">
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
            <ParallaxBlob variant={BlobVariants.Two} className="absolute top-36 -left-72 z-0" />
            <ParallaxBlob variant={BlobVariants.Seven} className="absolute top-72 left-24 z-0" />

            <div className="relative z-10 col-span-12 lg:col-span-8 lg:col-start-4 text-right">
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

            <div className="col-span-12 lg:col-span-3 lg:col-start-3 relative">
              <ParallaxImage src={bootle} alt="" />
            </div>
            <div className="col-span-12 lg:col-span-3 lg:col-start-6 relative">
              <ParallaxImage src={damian} alt="" />
            </div>
            <div className="col-span-12 lg:col-span-3 lg:col-start-9 relative">
              <ParallaxImage src={ibiza} alt="" />
            </div>
            <div className="col-span-12 lg:col-span-3 lg:col-start-3 lg:row-start-3 relative">
              <ParallaxImage src={mirco} alt="" />
            </div>
            <div className="col-span-12 lg:col-span-3 lg:col-start-6 lg:row-start-3 relative">
              <ParallaxImage src={moreno2021} alt="" />
            </div>
            <div className="col-span-12 lg:col-span-3 lg:col-start-9 lg:row-start-3 relative">
              <ParallaxImage src={robert} alt="" />
            </div>
            <div className="col-span-12 lg:col-span-9 lg:col-start-3 lg:row-start-4 relative">
              <ParallaxImage src={cultureday} alt="" />
            </div>
          </Container>
        </Scroll.Section>

        <Scroll.Section>
          <Container
            className="grid-rows-[1fr,250px,250px,250px,250px,250px] lg:grid-rows-5"
            inViewChange={(inView) => inView && setVisibleYear(2022)}
          >
            <ParallaxBlob variant={BlobVariants.Four} className="absolute bottom-0 -right-96 z-0" />

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

            <div className="col-span-12 lg:row-span-2 lg:col-span-8 lg:col-start-2 relative">
              <ParallaxImage effect="minimal" src={gruppafoettali} alt="Alle smarties beim Retro-Brunch." />
            </div>

            <div className="col-span-12 lg:col-span-6 lg:col-start-10 relative">
              <ParallaxImage effect="minimal" src={stadtfueahrig} alt="Stadtführung in Zürich." />
            </div>

            <div className="col-span-12 lg:col-span-6 lg:col-start-10 lg:row-start-3 relative">
              <ParallaxImage effect="minimal" src={rammstein} alt="Gruppenfoto am Rammstein-Konzert." />
            </div>

            <div className="col-span-12 lg:row-span-2 lg:col-span-8 lg:col-start-3 lg:row-start-4 relative">
              <ParallaxImage effect="minimal" src={skitag} alt="Skitag in Arosa." />
            </div>

            <div className="col-span-12 lg:col-span-4 lg:col-start-11 lg:row-start-4 relative">
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

      <div className="bottom-0 w-full py-4 z-50 fixed hidden lg:block">
        {visibleYear !== null && (
          <div className="max-w-screen-xl mx-auto flex justify-center text-[0px]">
            <motion.div
              layout
              className="inline-flex px-[1.3rem] py-1 flex-row justify-center bg-white-200 rounded-full shadow-sm"
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
                      className="block hover:z-50 -ml-3 -mr-3 overflow-visible"
                    >
                      <Avatar src={closeup} />
                    </motion.a>
                  </NextLink>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
        <div className="fixed right-5 bottom-5 rounded-full bg-conic-gradient p-1 transition-transform scale-100 hover:scale-110 hover:rotate-6 shadow-sm">
          <button
            className=" bg-white-200 h-12 w-12 rounded-full bg-white flex items-center justify-center"
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
  inViewChange?: any;
}> = ({ children, className, inViewChange }) => {
  const { ref } = useInView({ onChange: inViewChange, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className={merge([
        'relative w-11/12 max-w-screen-xl mx-auto my-24 md:my-32 lg:my-56 grid grid-cols-12 gap-4 md:gap-6 lg:gap-8',
        className,
      ])}
    >
      {children}
    </section>
  );
};

const SlackReaction: FC<{ children: ReactNode }> = ({ children }) => (
  <kbd className="px-4 rounded bg-[#424242] scale-100 transition-transform transform-gpu hover:scale-105 inline-block">
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
          '2xl:absolute h-full flex items-center',

          side === 'left' ? 'flex-row 2xl:-left-48' : 'flex-row-reverse 2xl:-right-48',
        ])}
      >
        <span className={merge(['h-0.5 w-16 bg-white-100', side === 'left' ? 'mr-4' : 'ml-4'])} />
        <span className="text-sm lg:text-base font-bold">{year}</span>
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
    <div className="w-full h-full overflow-hidden rounded z-20 relative">
      <Scroll.Item keyframes={keyframes.image[parallaxIndex]} className="relative w-full h-full image-overflow-override">
        <NextImage
          lazyBoundary="400px"
          className={`relative z-20 transition rounded scale-125 ${bgClasses[colorIndex]}`}
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
        <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4">
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
