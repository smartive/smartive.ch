import { ButtonLink, ButtonVariants, Copy, Heading2, PageSection } from '@smartive/guetzli';
import React from 'react';
import { PageHeader } from '../../compositions/page-header';
import { Page } from '../../layouts/page';

const techLinks = [
  { label: 'React', href: 'was-ist/react' },
  { label: 'GraphQL', href: 'was-ist/graphql' },
  { label: 'Kubernetes', href: 'was-ist/kubernetes' },
  { label: 'Headless CMS', href: 'was-ist/headless-cms' },
  { label: 'gRPC', href: 'was-ist/grpc' },
  { label: '.NET', href: 'was-ist/dot-net' },
  { label: 'Progressive Web App (PWA)', href: 'was-ist/pwa' },
  { label: 'Flutter', href: 'was-ist/flutter' },
];

const managementLinks = [
  { label: 'Scrum / Agile', href: 'was-ist/agile' },
  { label: 'Minimum Viable Product (MVP)', href: 'was-ist/mvp' },
  { label: 'Lean UX', href: 'was-ist/lean-ux' },
];

const WasIst = () => (
  <Page>
    <PageHeader
      markdownTitle="Was ist eigentlich …?"
      description="Unser Fachgebiet sind digitale Produkte. Wir wissen eine Menge über «AgileReactKubernetesMVP». Und wir wollen deinem Burgerbratbüro nicht einfach ein sehr teures digitales Brötchen zu verkaufen, sondern ein Produkt, das wir mit dir zusammen entwickeln."
    >
      <Copy>
        Bist du Profi im Burgerbraten, Bogenschiessen, Bäumefällen oder einer anderen analogen Angelegenheit? Cool!
      </Copy>
      <Copy>
        Unser Fachgebiet sind digitale Produkte. Wir wissen eine Menge über «AgileReactKubernetesMVP». Und wir wollen deinem
        Burgerbratbüro nicht einfach ein sehr teures digitales Brötchen zu verkaufen, sondern ein Produkt, das wir mit dir
        zusammen entwickeln.
      </Copy>
    </PageHeader>

    <main>
      <PageSection>
        <Heading2>Technologie</Heading2>
        <div className="flex gap-x-8 gap-y-4 flex-wrap mb-16 lg:mb-24">
          {techLinks.map((link) => (
            <ButtonLink key={link.label} href={link.href} variant={ButtonVariants.Arrow}>
              {link.label}
            </ButtonLink>
          ))}
        </div>
        <Heading2>Projekt- & Prozessmanagement</Heading2>
        <div className="flex gap-x-8 gap-y-4 flex-wrap">
          {managementLinks.map((link) => (
            <ButtonLink key={link.label} href={link.href} variant={ButtonVariants.Arrow}>
              {link.label}
            </ButtonLink>
          ))}
        </div>
      </PageSection>
    </main>
  </Page>
);

export default WasIst;
