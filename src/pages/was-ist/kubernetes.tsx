import {
  Copy,
  Explainer,
  Grid,
  Heading3,
  PageSection,
  Screenshot,
  TextBlock,
  TextLink,
  UnorderedList,
} from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { NextImageCard } from '../../components/image-card';
import { PageHeader } from '../../compositions/page-header';
import { Teaser, transformTeaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Page } from '../../layouts/page';

type Props = {
  teasers: Teaser[];
};

const Kubernetes: NextPage<Props> = ({ teasers }) => (
  <Page>
    <PageHeader
      markdownTitle="_Kubernetes_: Deployments unter Kontrolle"
      pageTitle="Was ist eigentlich Kubernetes?"
      description="Heute kümmern sich grosse Firmen wie Google oder Amazon um den Betrieb von Webapplikationen. Wir wiederum kontrollieren mit Tools wie Kubernetes, wie das Setup aussieht."
    >
      <Copy>
        Wenn dein Produkt fertig ist, muss es auf einem Computer gestartet werden, der es übers Internet zur Verfügung stellt
        (<strong>Deployment</strong> bzw. <strong>Release</strong>). Früher war das ein Server, den man selbst aufsetzte und
        im eigenen Serverraum betrieb oder bei einem Provider mietete – heute kümmern sich grosse Firmen wie Google oder
        Amazon um die Hardware fürs <Explainer title="Das Starten und Laufenlassen">Deployment</Explainer> und wir
        kontrollieren mit Tools wie <Explainer title="griechisch für «Steuermann»">Kubernetes</Explainer>, wie das Setup
        aussieht.
      </Copy>
    </PageHeader>

    <main>
      <PageSection title="Docker: Überall dieselbe Umgebung dank Container.">
        <Copy>
          Heute können auf jedem (Gross-)Rechner viele Installationen parallel laufen. Für die Abgrenzung sorgen{' '}
          <strong>Container</strong>. Container A und B laufen auf demselben Computer, wissen aber nichts voneinander und
          haben keine Möglichkeit, miteinander zu kommunizieren (ausser dies ist gewünscht). Dies nennt sich{' '}
          <strong>Virtualisierung</strong>.
        </Copy>
        <Copy>
          Ein virtueller Container lässt sich mit einem Schiffscontainer vergleichen: Ein standardisierter Formfaktor
          (Docker) ermöglicht die Auslieferung (Deployment) komplett unterschiedlicher Inhalte (Applikationen) durch
          verschiedene Transportschiffe (Server-Hardware).
        </Copy>
        <Copy>
          Die bekannteste Technik für Container-Virtualisierung ist{' '}
          <TextLink href="https://www.docker.com/" newTab>
            Docker
          </TextLink>
          . Ein Docker-Container abstrahiert die Hardware, so dass die Umgebung für die Software im Container immer genau
          gleich aussieht – egal, ob der Container auf dem Computer der Entwicklerin oder im Rechenzentrum von Google
          ausgeführt wird. Das Resultat sind identische Zustände in unterschiedlichen Umgebungen und keine Bugs wegen
          abweichender Version einer Komponente im Betriebssystem.
        </Copy>
      </PageSection>

      <PageSection title="Infrastruktur definiert, Deployments stabil">
        <Copy>
          Im Container können Webserver wie{' '}
          <TextLink href="https://nginx.org/en/" newTab>
            nginx
          </TextLink>{' '}
          und Laufzeitumgebungen wie{' '}
          <TextLink href="https://nodejs.org/en/about/" newTab>
            Node.js
          </TextLink>{' '}
          installiert werden. Solche Basis-Installation liegen als wiederverwendbare <strong>Images</strong> vor. Kubernetes
          ist für die Automatisierung dieses Setups, das Starten und Stoppen von Containern verantwortlich. Damit ist die
          Infrastruktur von A bis Z kontrollierbar und beinhaltet keine Unbekannten. Stabile Deployments sind garantiert –
          und Kubernetes bietet den Hebel, um laufende Anwendungen den Bedürfnissen entsprechend zuzuschalten.
        </Copy>

        <Heading3>Highlights:</Heading3>
        <Copy as="div">
          <UnorderedList
            items={[
              <>
                <strong>Vollautomatisierte Releases</strong>:{' '}
                <span className="font-normal">
                  Entwickler*innen müssen beim Deployment keine Checkliste durchgehen – das eliminiert Fehlerquellen und
                  ermöglicht kurze Releasezyklen.
                </span>
              </>,
              <>
                <strong>Unterbrechungsfreier Betrieb</strong>:{' '}
                <span className="font-normal">
                  Änderungen und Bugfixes können ohne Wartungsfenster während des produktiven Betrieb aufgeschaltet werden –
                  wenn der neue Container bereit ist, wird er aktiv geschaltet.
                </span>
              </>,
              <>
                <strong>Vertikale Skalierbarkeit</strong>:{' '}
                <span className="font-normal">
                  Wenn mehr Last auf das System kommt, werden nach vorgängig festgelegten Regeln weitere Ressourcen
                  zugeschaltet.
                </span>
              </>,
              <>
                <strong>Self-Healing Mechanismen</strong>:{' '}
                <span className="font-normal">
                  Bemerkt das System ein Problem mit einer Komponente, wird diese kontrolliert neu gestartet. Christoph kann
                  also endlich wieder durchschlafen.
                </span>
              </>,
            ]}
          />
        </Copy>
      </PageSection>

      <PageSection title="Unsere Erfahrung">
        <Copy>Wir haben Kubernetes schon bei mehreren Projekten eingesetzt, unter anderem:</Copy>
        <Grid cols={3}>
          {teasers.map((teaser) => (
            <NextImageCard key={teaser.title} {...teaser} />
          ))}
        </Grid>
      </PageSection>

      <PageSection title="Monitoring">
        <Copy>
          Ein gutes Monitoring setzt <strong>Observability</strong> voraus, also Verfahren, um einen Einblick in den
          momentanen Zustand des Systems zu erhalten. Kubernetes hat dafür Mechanismen wie Readyness oder Liveness Probes.
          Diese bündeln die Daten und ermöglichen einen einheitlichen Zugriff.
        </Copy>
        <Copy>
          Fürs Monitoring setzen wir auf Metrics Collection mit{' '}
          <TextLink href="https://prometheus.io/docs/introduction/overview/" newTab>
            Prometheus
          </TextLink>{' '}
          und Log Collection mit{' '}
          <TextLink href="https://www.fluentd.org/architecture" newTab>
            FluentD
          </TextLink>
          . Die gesammelten Daten werden in einem Grafana- Dashboard visualisiert. Dazu gibt’s Alerts für alle gängigen
          Messaging-Systeme.
        </Copy>
        <Screenshot image={{ url: '/images/was-ist/grafana.png', originalWidth: 1919, originalHeight: 933 }} />
      </PageSection>

      <PageSection title="Und susch?">
        <Copy>
          Jargon ist das Salz in der Techniksuppe. Ein kleiner Überblick. Und wenn du dann immer noch nicht genug hast,
          können wir auch unseren Blogpost über Kubernetes und Kuby empfehlen:{' '}
          <TextLink href="https://blog.smartive.ch/how-we-simplified-our-kubernetes-deployments-with-an-alternative-to-helm-aafedcfd4cce">
            How we simplified our Kubernetes deployments with an alternative to Helm
          </TextLink>
        </Copy>
        <Grid cols={3}>
          <TextBlock title="Die Cloud">
            Statt in den Serverraum nebenan zu deployen, lässt du Kubernetes und Google Cloud für dich arbeiten. «Die Cloud»
            ist in diesem Fall das Rechenzentrum von Google. Google Kubernetes Engine macht das Aufsetzen und Warten eines
            Kubernetes-Clusters in einem Schweizer Rechenzentrum zum Kinderspiel. Natürlich bieten auch andere grosse
            Cloud-Provider diese Dienstleistung an.
          </TextBlock>
          <TextBlock title="Continuous Integration & Continuous Delivery (CI/CD)">
            <Copy as="span" className="inline-block">
              Bei jeder Code-Änderung stellt eine Test-Pipieline sicher, dass sich keine Fehler eingeschlichen haben. Die
              Pipeline fügt den Code zusammen und lässt das Resultat probeweise laufen (
              <strong>Continuous Integration</strong>).
            </Copy>
            <Copy as="span" className="inline-block">
              Durch möglichst kurz gehaltene Releasezyklen werden Fehler frühzeitig erkannt (
              <strong>Continuous Delivery</strong>). Die Deployment-Pipeline ist vollständig automatisierbar und garantiert,
              dass der Code zu jedem Zeitpunkt releast werden kann.
            </Copy>
          </TextBlock>
          <TextBlock title="Secrets & Konfigurations­management">
            Kubernetes stellt Mechanismen zur Verfügung, um deine Applikation für unterschiedliche Umgebungen zu
            konfigurieren. Mit dem von uns eingesetzten Kube Sealer ist es sogar möglich, Konfigurationen mit Passwörtern in
            einem öffentlich zugänglichen Git-Repository abzulegen (siehe GitOps-Pattern) – nur der dafür vorgesehene
            Kubernetes-Cluster ist in der Lage, die verschlüsselten Informationen zu lesen.
          </TextBlock>
          <TextBlock title="Desired State">
            Anders als bei klassischen oder virtualisierten Deployments <strong>deklarieren</strong> wir bei
            Container-Deployments den sogenannte Desired State. Wir starten das Deployment nicht selbst, sondern delegieren
            an Kubernetes: «Bitte starte mir dieses Deployment». Kubernetes kümmert sich um die Ausführung und stellt sicher,
            dass der Desired State eingehalten wird.
          </TextBlock>
          <TextBlock title="Service Discovery & Load Balancing">
            Kubernetes kümmert sich darum, dass deine Deployments unter der richtigen Adresse erreichbar sind (Service
            Discovery) und die Last mit einem Loadbalancer auf die Replikate verteilt werden, wenn mehrere Container aktiv
            sind.
          </TextBlock>
          <TextBlock title="GitOps-Pattern">
            Beim GitOps-Pattern werden sämtliche Kubernetes-Konfigurationen (sogenannte Manifests) mit dem Quellcode in einem
            Git-Repository gespeichert. Git protokolliert sämtliche Änderungen am System und macht sie dadurch
            nachvollziehbar und erlaubt, sie jederzeit rückgängig zu machen.
          </TextBlock>
        </Grid>
      </PageSection>
    </main>
  </Page>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const teasers = await Promise.all(
    [Teasers['ofpg'], Teasers['kaspar'], Teasers['optimatik']].map(async (teaser) => await transformTeaser(teaser))
  );
  return {
    props: {
      teasers,
    },
  };
};

export default Kubernetes;
