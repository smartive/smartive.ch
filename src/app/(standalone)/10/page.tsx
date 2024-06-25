/* eslint-disable react/forbid-component-props */
import { AllEmployeesDocument } from '@/graphql/generated';
import { isTruthy } from '@/utils/common';
import { queryDatoCMS } from '@/utils/query-dato-cms';
import { Copy } from '@smartive/guetzli';
import { draftMode } from 'next/headers';
import NextImage from 'next/image';
import { default as Link } from 'next/link';
import { Suspense } from 'react';
import peterMoreno from '../../../../public/images/anniversary/2013/peter-moreno.jpg';
import boyband from '../../../../public/images/anniversary/2014/boyband.png';
import bungee from '../../../../public/images/anniversary/2014/bungee.png';
import office from '../../../../public/images/anniversary/2014/office.png';
import docker from '../../../../public/images/anniversary/2015/docker.jpg';
import fest from '../../../../public/images/anniversary/2015/fest.jpg';
import moreno2015 from '../../../../public/images/anniversary/2015/moreno.jpg';
import zermatt2015 from '../../../../public/images/anniversary/2015/zermatt.png';
import bravoThilo from '../../../../public/images/anniversary/2016/bravo-thilo.png';
import damianPeter from '../../../../public/images/anniversary/2016/damian-peter.jpg';
import newOffice from '../../../../public/images/anniversary/2016/new-office.png';
import sanfran from '../../../../public/images/anniversary/2016/sanfran.png';
import stockDominique from '../../../../public/images/anniversary/2016/stock-dominique.jpg';
import brewdog from '../../../../public/images/anniversary/2017/brewdog.png';
import jsConf from '../../../../public/images/anniversary/2017/js-conf.gif';
import newBrand from '../../../../public/images/anniversary/2017/new-brand.png';
import stockholm from '../../../../public/images/anniversary/2017/stockholm.jpg';
import zermatt2017 from '../../../../public/images/anniversary/2017/zermatt.png';
import peter30 from '../../../../public/images/anniversary/2018/30.jpeg';
import aescher from '../../../../public/images/anniversary/2018/aescher.png';
import bubblesoccer from '../../../../public/images/anniversary/2018/bubblesoccer.png';
import burger from '../../../../public/images/anniversary/2018/burger.jpg';
import front from '../../../../public/images/anniversary/2018/front.jpg';
import wmStudio from '../../../../public/images/anniversary/2018/wm-studio.png';
import chiefSeniorSolutionDesigner from '../../../../public/images/anniversary/2019/chief-senior-solution-designer.jpg';
import ciaoSmartive from '../../../../public/images/anniversary/2019/ciao-smartive.png';
import hoiSmartive from '../../../../public/images/anniversary/2019/hoi-smartive.png';
import huette from '../../../../public/images/anniversary/2019/huette.jpg';
import whatAview from '../../../../public/images/anniversary/2019/what-a-view.jpg';
import doeme from '../../../../public/images/anniversary/2020/doeme.jpeg';
import fire from '../../../../public/images/anniversary/2020/fire.png';
import skifoahn from '../../../../public/images/anniversary/2020/skifoahn.jpeg';
import skitag2 from '../../../../public/images/anniversary/2020/skitag.jpeg';
import bootle from '../../../../public/images/anniversary/2021/bootle.jpeg';
import cultureday from '../../../../public/images/anniversary/2021/cultureday.jpg';
import damian from '../../../../public/images/anniversary/2021/damian.jpeg';
import ibiza from '../../../../public/images/anniversary/2021/ibiza.jpeg';
import mirco from '../../../../public/images/anniversary/2021/mirco.jpg';
import moreno2021 from '../../../../public/images/anniversary/2021/moreno.jpeg';
import robert from '../../../../public/images/anniversary/2021/robert.jpeg';
import gruppafoettali from '../../../../public/images/anniversary/2022/gruppafoettali.jpg';
import kuhbar from '../../../../public/images/anniversary/2022/kuhbar.jpeg';
import rammstein from '../../../../public/images/anniversary/2022/rammstein.jpg';
import skitag from '../../../../public/images/anniversary/2022/skitag.jpg';
import stadtfueahrig from '../../../../public/images/anniversary/2022/stadtfueahrig.jpeg';
import { Container } from './components/container';
import { GalleryCard } from './components/gallery-card';
import { Header } from './components/header';
import { ParallaxBlob } from './components/parallax-blob';
import { ParallaxImage } from './components/parallax-image';
import { SlackReaction } from './components/slack-reaction';
import { VisibleYears } from './components/visible-years';
import { BlobVariants } from './elements/blob';
import { Heading } from './elements/heading';

export function generateMetadata() {
  return {
    title: 'smartive wird 10 🥳',
    description: 'Wir blicken zurück auf die letzten 10 Jahre und erzählen euch, was wir in dieser Zeit alles erlebt haben.',
  };
}

export default async function TenYearsPage() {
  const { employees: datoEmployee } = await queryDatoCMS({
    document: AllEmployeesDocument,
    includeDrafts: draftMode().isEnabled,
  });
  const employees = datoEmployee
    .map(({ start, imagePortrait, name }) => {
      if (!imagePortrait?.responsiveImage || !start) {
        return false;
      }

      return {
        start,
        image: imagePortrait.responsiveImage,
        name,
      };
    })
    .filter(isTruthy)
    .sort((a, b) => a.start - b.start);

  return (
    <>
      <Container year={0}>
        <ParallaxBlob variant={BlobVariants.Two} className="absolute -bottom-72 -left-96 z-0 w-72" />

        <div className="relative z-10 col-span-12 mb-12 mt-6 lg:col-span-6 lg:mb-24 lg:mt-0">
          <Heading level="3">
            Zäh. Zeh. Dieci. Zehn. ZEHN! Schon so viele Jahre gibts uns jetzt. Wir brauchen alle Finger BEIDER Hände! 👐
            Schon bitz verrückt. Aber auch der richtige Zeitpunkt, um mal zurückzuschauen. Wenn du auch Lust darauf hast –
            scroll weiter!
          </Heading>
        </div>

        <GalleryCard />
      </Container>
      <Container year={2012}>
        <ParallaxBlob variant={BlobVariants.Three} className="absolute -right-48 top-16 z-0" />

        <div className="relative z-10 col-span-12 lg:col-span-8 lg:col-start-2">
          <Header side="left" year="2012">
            <Heading level="3">🧡 Jöö, es ist ein smartive!</Heading>
          </Header>
          <Copy>
            Am Anfang steht die Haas & Manser Apricode, die später im selben Jahr zur smartive wird. Schon damals ist das
            Ziel: Eine Webagentur, die sowohl Kund*innen als auch Mitarbeitende glücklich macht. Dass wir 10 Jahre später so
            gross sind, hätten wir uns nicht erträumt.
          </Copy>

          <NextImage
            src="/images/anniversary/2012/dropbox.svg"
            alt="Dropbox Screenshot der zeigt, das Thilo und Peter zusammen den Ordner 'apricode' teilen."
            width="1714"
            height="982"
          />
        </div>
      </Container>
      <Container className="relative grid-rows-[1fr,200px] lg:grid-rows-3" year={2013}>
        <ParallaxBlob variant={BlobVariants.Four} className="absolute -left-64 -top-56 z-0" />

        <div className="relative z-10 col-span-12 text-right lg:col-span-8 lg:col-start-4">
          <Header side="right" year="2013">
            <Heading level="3">Ein Jahr alt und gut zu Fuss</Heading>
          </Header>
          <Copy>
            Die Firma macht langsam die ersten Schritte und sagt die ersten Worte. Zum Beispiel “Moreno, willsch nöd zu üs
            cho?”. Das macht Moreno dann auch. Wir beziehen auch unser erstes Büro an der Winterthurerstrasse in Zürich.
          </Copy>
        </div>

        <div className="relative col-span-12 lg:col-span-8 lg:col-start-4 lg:row-span-2">
          <ParallaxImage effect="minimal" src={peterMoreno} alt="Moreno und Peter" />
        </div>
      </Container>
      <Container className="grid-rows-[1fr,200px,200px] lg:grid-rows-5" year={2014}>
        <ParallaxBlob variant={BlobVariants.Two} className="absolute -right-24 top-72 z-0 lg:-right-72" />

        <div className="relative z-10 col-span-12 lg:col-span-8 lg:col-start-2">
          <Header side="left" year="2014">
            <Heading level="3">Dasselbe nochmal!</Heading>
          </Header>
          <Copy>
            Wir wachsen um eine Person und zügeln in ein Büro! Moment … haben wir das nicht schon letztes Jahr gemacht? 🤔
            DOCH! Aber meh isch meh. Seit diesem Jahr ist auch die Migros unsere Kundin. Migipedia ist von Anfang an und bis
            heute ein Herzensprojekt. 🧡
          </Copy>
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
      <Container className="grid-rows-[1fr,200px,200px,200px,200px] lg:grid-rows-4" year={2015}>
        <div className="relative z-10 col-span-12 text-right lg:col-span-8 lg:col-start-4">
          <Header side="right" year="2015">
            <Heading level="3">Viele erste Male</Heading>
          </Header>
          <Copy>
            Noch mehr smarties stossen hinzu. Es gibt die ersten Aktienverkäufe und Sommerfeste und wir halten die ersten
            Vorträge. Christoph will eigentlich nur einen Tag pro Woche bei smartive arbeiten, entscheidet sich spontan aber
            doch für eine Vollzeitstelle.
          </Copy>
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
      <Container className="grid-rows-[1fr,200px,200px,300px,200px,200px] lg:grid-rows-6" year={2016}>
        <ParallaxBlob variant={BlobVariants.Five} className="absolute -right-24 -top-72 z-0" />
        <ParallaxBlob variant={BlobVariants.Four} className="absolute bottom-24 left-24 z-0" />

        <div className="relative z-10 col-span-12 lg:col-span-8 lg:col-start-2">
          <Header side="left" year="2016">
            <Heading level="3">Jetzt gilts ernst</Heading>
          </Header>
          <Copy>
            Dieses Mal wächst smartive gleich um mehrere Nasen. Eine fragt vor der Unterschrift: “Meineders ernst?” – im
            Rückblick, lieber Dominique: ja, wir meinen’s ernst. Und weil wir gerne zügeln, tun wir das gleich nochmals. Und
            planen dazu auch noch selber den Ausbau unseres Büros — yeah! 🥳
          </Copy>
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
      <Container className="grid-rows-[1fr,250px,250px,200px,250px,200px] lg:grid-rows-4" year={2017}>
        <ParallaxBlob variant={BlobVariants.Two} className="absolute -left-24 -top-12 z-0" />
        <ParallaxBlob variant={BlobVariants.Six} className="absolute -right-24 top-1/2 z-0" />

        <div className="relative z-10 col-span-12 text-right lg:col-span-8 lg:col-start-4">
          <Header side="right" year="2017">
            <Heading level="3">Es weihnachtet</Heading>
          </Header>
          <Copy>
            Auch 2017 kommen neue smarties dazu. Wir reisen ziemlich herum: Stockholm, Berlin, Zermatt. War alles toll. Am
            Freitag vor Weihnachten haben wir aber keine Lust mehr zu arbeiten. Daher kaufen wir als Kurzschlussreaktion eine
            Playstation 4 mit FIFA. Super. Jetzt haben wir ein FIFA-Sucht-Problem. Das geht soweit, dass wir eine App
            entwickeln, in welcher wir sämtliche Ergebnisse tracken und die smarties mit einem TrueSkill-Ranking einordnen...
          </Copy>
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
      <Container
        className="grid-rows-[1fr,250px,200px,200px,300px,300px,200px] lg:grid-rows-[2fr,1fr,1fr,2fr,2fr,1fr,1fr]"
        year={2018}
      >
        <ParallaxBlob variant={BlobVariants.Five} className="absolute -left-24 top-1/3 z-0" />
        <ParallaxBlob variant={BlobVariants.Two} className="absolute -right-72 top-2/3 z-0" />

        <div className="relative z-10 col-span-12 lg:col-span-8 lg:col-start-2">
          <Header side="left" year="2018">
            <Heading level="3">3 Meter im Abseits du W…</Heading>
          </Header>
          <Copy>
            Juhu! Endlich auch Praktikanten! Die sind auch heute noch da. Mit dem Advice Process machen wir unsere ersten
            Schritte in Richtung New Work. Vorträge an der Front Conference und am Digital Festival runden das Jahr ab. Thilo
            sucht auf Slack <SlackReaction>👍</SlackReaction> als Reaction, erwischt aber <SlackReaction>🥦</SlackReaction>.
            Weils alle gesehen haben, hat smartive seither einen ausgeprägten Brokkoli-Fetisch. Und: Wir schaffens ins Radio…
          </Copy>
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
      <Container className="grid-rows-[1fr,200px,200px,200px,200px] lg:grid-rows-5" year={2019}>
        <ParallaxBlob variant={BlobVariants.One} className="absolute -left-72 top-0 z-0" />
        <ParallaxBlob variant={BlobVariants.Three} className="absolute -bottom-72 -right-24 z-0" />

        <div className="relative z-10 col-span-12 text-right lg:col-span-8 lg:col-start-4">
          <Header side="right" year="2019">
            <Heading level="3">Das Kind mag Brokkoli!</Heading>
          </Header>
          <Copy>
            ZweitausendALLESNEUnzehn! Neue Mitarbeitende, neues Büro, neu mit Code Retreat und: Babies! – Weil’s so schön
            ist, gleich drei 🥰 Am Best of Swiss Apps bekommen wir Silber und Bronze für ein Kassensystem auf dem Smartphone.
            Und weil wir Brokkolis wirklich mögen, bekommen wir zum Sommerfest eine Kiste voller Brokkolis geschenkt. Die
            wird am selben Abend auch gleich geklaut.
          </Copy>
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
      <Container className="grid-rows-[1fr,200px,200px,250px] lg:grid-rows-[1fr,1.5fr,1fr,1fr,1fr]" year={2020}>
        <div className="relative z-10 col-span-12 lg:col-span-8 lg:col-start-2">
          <Header side="left" year="2020">
            <Heading level="3">Hausarrest</Heading>
          </Header>
          <Copy>
            2020… Was war da nochmal? 🤔 Jedenfalls führen wir das Kulturprozent ein und arbeiten an unseren Werten,
            entwickeln eine transparente und faire Lohnformel, sind Aufsteiger des Jahres bei Best of Swiss Web und arbeiten
            viel von zu Hause 😒
          </Copy>
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
      <Container className="grid-rows-[1fr,200px,300px,300px,300px,250px,300px,250px] lg:grid-rows-4" year={2021}>
        <ParallaxBlob variant={BlobVariants.Two} className="absolute -left-72 top-36 z-0" />
        <ParallaxBlob variant={BlobVariants.Seven} className="absolute left-24 top-72 z-0" />

        <div className="relative z-10 col-span-12 text-right lg:col-span-8 lg:col-start-4">
          <Header side="right" year="2021">
            <Heading level="3">Frische Kleidung ist wichtig</Heading>
          </Header>
          <Copy>
            MEHR LEUTE! VIELE LEUTE! GROSSE MEUTE! Wir sehen uns (viel zu) selten, gewinnen ein paar Awards – unter anderem
            Gold in Usability am{' '}
            <Link href="https://www.netzwoche.ch/news/2021-09-06/gold-fuer-migros-community-in-der-kategorie-usability">
              BOSW
            </Link>{' '}
            – halten unseren ersten richtigen Talk an der Front Conference und stossen in die Top 10 der 5-Jahres-Bestenliste
            der BOSW-Awards vor. Und weil wir uns nicht sehen können, wollen wir zumindest im Internet cool aussehen. Daher
            gibts ein komplettes Rebranding.
          </Copy>
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
      <Container className="grid-rows-[1fr,250px,250px,250px,250px,250px] lg:grid-rows-5" year={2022}>
        <ParallaxBlob variant={BlobVariants.Four} className="absolute -right-96 bottom-0 z-0" />

        <div className="relative z-10 col-span-12 lg:col-span-8 lg:col-start-2">
          <Header side="left" year="2022">
            <Heading level="3">10! Z-E-H-N!</Heading>
          </Header>
          <Copy>
            Verrückter Start ins Jahr. Unsere Supply Chain-App für die Migros wird auch nach drei Jahren noch mit Awards
            ausgezeichnet und wir können endlich wieder zusammen Skifahren. Und wir wachsen und wachsen und wachsen und …
            mittlerweile sind wir {employees.length} Mitarbeitende mit total 11 Kindern! 😱 V-E-R-R-Ü-C-K-T!
          </Copy>
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
      <Container year={2023}>
        <div className="col-span-12 lg:col-span-6 lg:col-start-4">
          <Copy>
            Und schon – PUFF! 💨 – sind 10 Jahre um. Wir sind aber noch lange nicht fertig. Mit New Work haben wir erst
            gerade gestartet, und unsere Speedboats werden immer innovativer. Das Ziel bleibt aber gleich: Eine Agentur, die
            Kund*innen und Mitarbeitende glücklich macht. ❤️
          </Copy>
        </div>
        <GalleryCard />
      </Container>
      {/* Use Suspense to prevent prerender error from useSearchParams in VisibleYears. */}
      <Suspense>
        <VisibleYears employees={employees} />
      </Suspense>
    </>
  );
}
