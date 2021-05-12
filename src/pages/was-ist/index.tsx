import { Copy, LinkList, PageSection } from '@smartive/guetzli';
import NextLink from 'next/link';
import React from 'react';

import { PageHeader } from '../../compositions/page-header';
import { Page } from '../../layouts/page';

const WasIst = () => (
  <Page>
    <PageHeader markdownTitle="Was ist eigentlich …?">
      <LinkList
        linkWrapper={NextLink}
        links={[
          { label: 'React', href: 'was-ist/react' },
          { label: 'Minimum Viable Product (MVP)', href: 'was-ist/mvp' },
          { label: 'Scrum / Agile', href: 'was-ist/agile' },
          { label: 'Lean UX', href: 'was-ist/lean-ux' },
          { label: 'Progressive Web App (PWA)', href: 'was-ist/pwa' },
          { label: 'GraphQL', href: 'was-ist/graphql' },
          { label: 'Kubernetes', href: 'was-ist/kubernetes' },
          { label: 'Headless CMS', href: 'was-ist/headless-cms' },
          { label: 'gRPC', href: 'was-ist/grpc' },
          { label: '.NET', href: 'was-ist/dot-net' },
        ]}
      />
    </PageHeader>

    <main>
      <PageSection>
        <Copy>
          Bist du Profi im Burgerbraten, Bogenschiessen, Bäumefällen oder einer anderen analogen Angelegenheit? Cool!
        </Copy>
        <Copy>
          Du brätst jedes Mal mental einen Burger, wenn von «ReactPWAGraphQLClient» die Rede ist und du würdest gern wissen,
          was zum Gugger das eigentlich ist? Dann bist du hier richtig.
        </Copy>
        <Copy>
          Unser Fachgebiet sind digitale Produkte. Wir wissen eine Menge über «DotNetKubernetesAgileMVP». Und wir wollen
          deinem Burgerbratbüro nicht einfach ein sehr teures digitales Brötchen zu verkaufen, sondern ein Produkt, das wir
          mit dir zusammen entwickeln.
        </Copy>
      </PageSection>
    </main>
  </Page>
);

export default WasIst;
