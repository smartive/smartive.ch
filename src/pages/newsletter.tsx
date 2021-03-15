import Image from 'next/image';
import React from 'react';
import { NewsletterSubscription } from '../components/newsletter-subscription';
import { PageHeader } from '../compositions/page-header';
import { PageSection } from '../compositions/page-section';
import { Copy } from '../elements/copy';
import { Grid } from '../layouts/grid';

const Newsletter = () => {
  return (
    <div>
      <PageHeader markdownTitle="Neugierig, was bei uns läuft?">
        <Copy>
          Du willst wissen, woran wir gerade arbeiten und was hinter den Kulissen passiert? Toll! Genau dafür haben wir einen
          Newsletter. Der Newsletter erscheint in lockeren Abständen und liefert dir einen Einblick in unsere aktuellen
          Projekte, digitale Trends und das smartive-Team.
        </Copy>
        <div className="sm:w-80">
          <NewsletterSubscription />
        </div>
      </PageHeader>

      <main>
        <PageSection>
          <Image
            className="rounded"
            src="/images/mood/YB_06742.jpg"
            alt="smartive Team beim Mittagessen an einem Holztisch"
            priority
            objectFit="cover"
            width={1504}
            height={800}
          />
          <Grid cols={2}>
            <Image
              className="rounded"
              src="/images/mood/code-retreat-terrasse.jpg"
              alt="smartive Team sitzt auf einer Bank mit blauem Himmel und Thunersee im Hintergrund"
              objectFit="cover"
              width={720}
              height={500}
            />
            <div className="hidden md:block md:col-start-2 md:row-span-2 relative">
              <Image
                className="rounded"
                src="/images/mood/code-retreat-lunch.jpg"
                alt="smartive Team am Mittagstisch beim Essen"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="block md:hidden">
              <Image
                className="rounded"
                src="/images/mood/YB_06742.jpg"
                alt="smartive Team am Mittagstisch beim Essen"
                objectFit="cover"
                width={720}
                height={500}
              />
            </div>
            <Image
              className="rounded"
              src="/images/mood/robert-dife.jpg"
              alt="smartive Mitarbeiter hält einen Vortrag vor mehreren Leuten"
              objectFit="cover"
              width={720}
              height={500}
            />
          </Grid>
        </PageSection>
      </main>
    </div>
  );
};

export default Newsletter;
