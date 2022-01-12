import { Copy, PageSection, TextLink } from '@smartive/guetzli';
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
        Eigentlich bevorzugen wir ja <TextLink href="/was-ist/pwa">PWAs</TextLink>. Wenn du aber unbedingt eine klassische
        App im Appstore haben musst, hilft uns <strong>Flutter</strong>, deine App nur einmal zu programmieren und trotzdem
        für <strong>Android</strong>, <strong>iOS</strong>, <strong>Windows</strong> und <strong>macOS</strong> in die
        jeweiligen Appstores auszuliefern.
      </Copy>
    </PageHeader>

    <main>
      <PageSection title="Alles zweimal machen">
        <Copy>
          Apps gibt es schon lange. Eigentlich müssen die für jedes Betriebssystem in einer eigenen Programmiersprache
          geschrieben werden. Für Android zum Beispiel mit{' '}
          <TextLink href="https://developer.android.com/kotlin" newTab>
            Kotlin
          </TextLink>{' '}
          oder für iOS mit{' '}
          <TextLink href="https://developer.apple.com/swift/" newTab>
            Swift
          </TextLink>
          . Heisst: wir machen die ganze Arbeit dann zwei Mal. Und brauchen doppelt so lange. Und brauchen 200% Batzeli 🙈
        </Copy>
        <Copy>
          Damit wir uns das sparen können, gibt es verschiedene Technologien, die Doppelspurigkeiten unnötig machen.{' '}
          <TextLink href="https://flutter.dev">Flutter</TextLink> ist eine davon. Andere sind{' '}
          <TextLink href="https://dotnet.microsoft.com/apps/xamarin">Xamarin</TextLink>,{' '}
          <TextLink href="https://reactnative.dev">React Native</TextLink> oder{' '}
          <TextLink href="https://ionicframework.com">Ionic</TextLink>. Wir haben mindestens Füsse, meistens Beine und einmal
          sogar so ziemlich alles reingehalten (der Kopf war immer dabei). Überzeugt hat uns bisher nur Flutter.
        </Copy>
        <Copy>
          Die Auslieferung in die Appstores ist aber leider immer noch mit mehr Arbeit verbunden. Deshalb, Hand aufs Herz:
          Ist eine <TextLink href="/was-ist/pwa">PWA</TextLink> nicht doch die passendere Lösung?
        </Copy>
      </PageSection>
    </main>
  </Page>
);

export default PWA;
