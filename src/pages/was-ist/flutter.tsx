import { Copy, Explainer, Link, PageSection } from '@smartive/guetzli';
import React from 'react';
import { PageHeader } from '../../compositions/page-header';
import { Page } from '../../layouts/page';

const PWA = () => (
  <Page>
    <PageHeader
      markdownTitle="Flutter: Beliefert vier Plattformen gleichzeitig."
      pageTitle="Was ist eigentlich Flutter?"
      description="Flutter"
    >
      <Copy>
        Eigentlich bevorzugen wir ja <Link href="/was-ist/pwa/">PWA&apos;s</Link>. Wenn du aber unbedingt eine klassische App
        im Appstore haben musst, hilft uns <strong>Flutter</strong>, deine App nur einmal zu programmieren und trotzdem für{' '}
        <strong>Android</strong>, <strong>iOS</strong>, <strong>Windows</strong> und <strong>macOS</strong> in die jeweiligen
        Appstores auszuliefern.
      </Copy>
    </PageHeader>

    <main>
      <PageSection title="Alles zweimal machen">
        <Copy>
          Apps gibt es schon lange. Eigentlich müssen die für jedes Betriebssystem in einer eigenen Programmiersprache
          geschrieben werden. Für Android zum Beispiel mit{' '}
          <Link href="https://developer.android.com/kotlin" newTab>
            Kotlin
          </Link>{' '}
          oder für iOS mit{' '}
          <Link href="https://developer.apple.com/swift/" newTab>
            Swift
          </Link>
          . Heisst: wir machen die ganze Arbeit dann zwei Mal. Und brauchen doppelt so lange. Und brauchen 200% Batzeli 🙈 so
          teuer. 🙈
        </Copy>
        <Copy>
          Damit wir uns das sparen können, gibt es verschiedene Technologien, die Doppelspurigkeiten unnötig machen.{' '}
          <Link href="https://flutter.dev">Flutter</Link> ist eine davon. Andere sind{' '}
          <Link href="https://dotnet.microsoft.com/apps/xamarin">Xamarin</Link>,{' '}
          <Link href="https://reactnative.dev/">React Native</Link>
          oder <Link href="https://ionicframework.com/">Ionic</Link>. Wir haben mindestens Füsse, meistens Beine und einmal
          sogar so ziemlich alles reingehalten (der Kopf war immer dabei). Überzeugt hat uns bisher nur Flutter.
        </Copy>
        <Copy>
          Ein grosser Vorteil von Flutter: die Apps laufen{' '}
          <Explainer title="direkt auf dem Betriebssystem laufende Apps">nativ</Explainer> auf der jeweiligen Plattform. Das
          macht sie schneller und flüssiger in der Bedienbarkeit. Gegensatz den aufgezählten Konkurrenten.
        </Copy>
        <Copy>
          Die Auslieferung in die Appstores ist aber leider immer noch mit mehr Arbeit verbunden. Deshalb, Hand aufs Herz:
          Ist eine <Link href="/was-ist/pwa/">PWA</Link> nicht doch die passendere Lösung?
        </Copy>
      </PageSection>
    </main>
  </Page>
);

export default PWA;
