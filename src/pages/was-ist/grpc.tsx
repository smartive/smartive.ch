import { Copy, Explainer, Grid, Heading3, TextBlock, TextLink, UnorderedList } from '@smartive/guetzli';
import React from 'react';
import { PageHeader } from '../../compositions/page-header';
import { Link } from '../../elements/link';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';

const GRPC = () => (
  <Page>
    <PageHeader
      markdownTitle="_gRPC_ bringt Tempo in die API"
      pageTitle="Was ist eigentlich gRPC?"
      description="gRPC ist eine Alternative zu REST oder GraphQL, die sich anbietet, wenn Performance entscheidend ist."
    >
      <Copy>
        Im Web schieben wir Daten in diversen Formaten hin und her. Die meisten sind textbasiert, z.B. XML oder JSON.{' '}
        <Explainer title="Remote Procedure Call">gRPC</Explainer> von Google setzt auf einen anderen Weg: Es codiert
        übertragene Daten binär. Das ist für Menschen nicht ohne Hilfsprogramme entschlüsselbar, für Computer aber
        naheliegend – und verringert die übertragene Datenmenge.
      </Copy>
    </PageHeader>

    <main>
      <Section title="Warum gRPC?">
        <Copy>
          gRPC ist eine Alternative zu REST oder <Link href="/was-ist/graphql">GraphQL</Link>, die sich anbietet, wenn
          Performance entscheidend ist. Ein typisches Einsatzgebiet ist Kommunikation zwischen Microservices. Aber auch für
          eine API ist gRPC bestens geeignet, gerade bei vielen Clients. Hier punktet gRPC damit, dass der Client-Service zum
          Datenaustausch ohne Zusatzaufwand generiert werden kann.
        </Copy>
        <Heading3>Highlights:</Heading3>
        <Copy as="div">
          <UnorderedList
            items={[
              <>
                <strong>Top Speed</strong>:{' '}
                <span className="font-normal">
                  Dank HTTP/2 verkürzen sich die Antwortzeiten. Streaming beschleunigt bei grösseren Datenmengen wie z.B.
                  hochaufgelösten Bildern die Übertragung erheblich.
                </span>
              </>,
              <>
                <strong>Contract based</strong>:{' '}
                <span className="font-normal">
                  Die Schnittstellen-Definition wird in einem Datenmodell festgehalten, das Client und Server erfüllen
                  müssen. Services und Types können daraus generiert werden, was Zeit spart und Fehler minimiert.
                </span>
              </>,
              <>
                <strong>Pattformunabhängig</strong>:{' '}
                <span className="font-normal">
                  gRPC schafft keine unnötigen Abhängigkeiten, da es keine bestimmte Programmiersprache oder Plattform
                  voraussetzt.
                </span>
              </>,
            ]}
          />
        </Copy>
      </Section>

      <Section title="Maximale Performance durch HTTP/2 und Protobuf">
        <Copy>
          Performance hat oberste Priorität. Das wird vor allem durch zwei grundlegende Techniken ermöglicht, auf denen gRPC
          aufbaut:
        </Copy>
        <Grid cols={2}>
          <TextBlock title="HTTP/2">
            gRPC nutzt die Vorteile von{' '}
            <TextLink
              href="https://www.ionos.de/digitalguide/hosting/hosting-technik/so-optimiert-http2-das-world-wide-web/"
              newTab
            >
              HTTP/2
            </TextLink>
            , der Weiterentwicklung des Protokolls zur Datenübertragung im Web. Es erlaubt binär codierte Inhalte und
            vereinfacht die Bündelung von Datenpaketen. HTTP/2 ist in allen modernen Browsern bereits eingebaut.
          </TextBlock>
          <TextBlock title="Protobuf">
            gRPC setzt auf das binäre Datenformat Protobuf, mit vollem Namen{' '}
            <TextLink href="https://developers.google.com/protocol-buffers/" newTab>
              Protocol Buffers
            </TextLink>
            . Binäre Daten sind verglichen mit durch Text strukturierten weniger umfangreich und deshalb schneller
            übertragen.
          </TextBlock>
        </Grid>
      </Section>

      <Section title="Für Komfort ist gesorgt">
        <Copy>
          Nicht menschenlesbar klingt zuerst einmal ungewohnt – bei der Arbeit mit gRPC spielt das aber keine Rolle, da
          entsprechende Tools bereitstehen. Es bietet ähnliche Vorteile wie <Link href="/was-ist/graphql">GraphQL</Link>
          mit einem etwas anderen Ansatz:
        </Copy>
        <Copy as="div">
          <UnorderedList
            items={[
              'Die Logik wird im Server programmiert, der Service zur Datenübertragung im Client wird daraus generiert – natürlich mit Types.',
              'Die Kommunikation zwischen Client und Server basiert auf einem Contract: Beide wissen genau, welche Daten sie schicken müssen und erhalten.',
              'Für den Umgang mit Breaking Changes (Deprecations) gibt es «Reserved Fields».',
            ]}
          />
        </Copy>
      </Section>
    </main>
  </Page>
);

export default GRPC;
